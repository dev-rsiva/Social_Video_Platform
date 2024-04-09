import React from "react";
import { useEffect, useState } from "react";
import { closeMenu } from "../utills/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utills/constants";
import CommentsContainers from "./CommentsContainers";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [videoInfo, setVideoInfo] = useState([]);
  let [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
    getVideo();
  }, []);

  console.log(YOUTUBE_VIDEO_API.split("videoId").join(searchParams.get("v")));
  const getVideo = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_API.split("videoId").join(searchParams.get("v"))
    );
    const json = await data.json();
    console.log(json);
    setVideoInfo(json.items[0]);
  };
  return (
    <div className="flex flex-col">
      <div className="px-5 py-5 rounded">
        <iframe
          width="855"
          height="483"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold text-xl py-1">{videoInfo.snippet?.title}</h1>
      </div>
      <CommentsContainers />
    </div>
  );
};

export default WatchPage;

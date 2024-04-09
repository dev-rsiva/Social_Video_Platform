import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_VIDEO_API,
  YOUTUBE_VIDEOS_API,
} from "../utills/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  let [searchParams] = useSearchParams();
  console.log(searchParams.get("search_query"));

  const url =
    searchParams.get("search_query") === null
      ? YOUTUBE_VIDEOS_API
      : YOUTUBE_SEARCH_VIDEO_API.split("searchQuery").join(
          searchParams.get("search_query")
        );
  console.log(url);
  useEffect(() => {
    console.log("useEffect in Video Container");
    getVideos();
  }, [searchParams]);

  const getVideos = async () => {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  console.log(videos);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        console.log(video);
        const id =
          searchParams.get("search_query") === null
            ? video.id
            : video.id.videoId;
        console.log(id);
        return (
          <Link key={video.id} to={"/watch?v=" + id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

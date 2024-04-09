import React from "react";
import { USER_IMG } from "../utills/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-200 rounded-lg p-2 my-2">
      <img className="w-12 h-12" alt="user" src={USER_IMG} />
      <div>
        <h1 className="px-3">{name}</h1>
        <p className="px-3 font-bold">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-10 border border-l-gray-900">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainers = () => {
  const commentsData = [
    {
      name: "Sivakumar",
      text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
      replies: [],
    },
    {
      name: "Sivakumar",
      text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
      replies: [
        {
          name: "Sivakumar",
          text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
          replies: [],
        },
        {
          name: "Sivakumar",
          text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
          replies: [
            {
              name: "Sivakumar",
              text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
              replies: [
                {
                  name: "Sivakumar",
                  text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
                  replies: [
                    {
                      name: "Sivakumar",
                      text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sivakumar",
      text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
      replies: [],
    },
    {
      name: "Sivakumar",
      text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
      replies: [],
    },
    {
      name: "Sivakumar",
      text: "lorem ipsum dolor sit amet consectetur adipiscing elit sodales sed",
      replies: [],
    },
  ];
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainers;

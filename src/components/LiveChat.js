import { useEffect, useState } from "react";
import React from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utills/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utills/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10),
        })
      );
    }, 6000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[480px] ml-2 p-2 border border-gray-400 bg-slate-100 overflow-y-scroll flex  flex-col-reverse">
        {chatMessages?.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("message sent", liveMessage);
          dispatch(
            addMessage({
              name: "sivakumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-3/4"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 m-2 rounded bg-blue-600 text-white">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;

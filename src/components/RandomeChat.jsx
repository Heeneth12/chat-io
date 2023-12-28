import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("https://socketio-group-server.onrender.com");

const RandomeChat = () => {
  const [roomID, setroomID] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [test, setTest] = useState(false);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setroomID(room);
    } else {
      socket.emit("join_room", "");
      setroomID("");
      // Send an empty string to join a random room
    }
    setTest(!test);
    console.log(test);
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room: roomID });
    setMessage(""); // Clear input after sending message
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessages((prevMessages) => [
        ...prevMessages,
        { message: data.message, type: "received" },
      ]);
    });

    socket.on("user_disconnected", (data) => {
      setReceivedMessages((prevMessages) => [
        ...prevMessages,
        { message: data.message, type: "disconnected" },
      ]);
    });
    socket.on("user_paired", (data) => {
      setroomID(data.room);
    });

    // Clean up socket listener on component unmount
    return () => {
      socket.off("receive_message");
      socket.off("user_disconnected");
      socket.off("user_paired");
    };
  }, []);

  const addSentMessage = () => {
    setReceivedMessages((prevMessages) => [
      ...prevMessages,
      { message: message, type: "sent" },
    ]);
  };
  return (
    <div
      className="flex flex-col "
      style={{
        height: "92vh",
      }}
    >
      <div className="bg-gray-200 p-2">
        {/* Room creation or selection UI */}
        <div className="mt-auto justify-between flex items-center">
          <h1 className="font-bold p-2">Random chat</h1>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            onClick={joinRoom}
          >
            {test ? <span>disconnected</span> : <span>connected</span>}
          </button>
        </div>
      </div>
      <div className="bg-white flex-1 flex flex-col">
        {/* Chat UI */}
        <div className="overflow-y-auto p-4 flex-1">
          {/* Chat messages */}
          <div className="chat-container">
            <h1 className="font-bold bg-gray-200 p-1 rounded-lg m-1">
              Waiting for user..! :{" "}
              {roomID ? (
                <span>User connected</span>
              ) : (
                <span>User not connected</span>
              )}
            </h1>
            {test && !roomID ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle
                  fill="none"
                  stroke-opacity="1"
                  stroke="#2A5AFF"
                  stroke-width=".5"
                  cx="100"
                  cy="100"
                  r="0"
                >
                  <animate
                    attributeName="r"
                    calcMode="spline"
                    dur="2"
                    values="1;80"
                    keyTimes="0;1"
                    keySplines="0 .2 .5 1"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="stroke-width"
                    calcMode="spline"
                    dur="2"
                    values="0;25"
                    keyTimes="0;1"
                    keySplines="0 .2 .5 1"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="stroke-opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0"
                    keyTimes="0;1"
                    keySplines="0 .2 .5 1"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
              </svg>
            ) : (
              console.log("test")
            )}

            {receivedMessages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.type === "sent"
                    ? "flex justify-end mb-2"
                    : "flex justify-start mb-2"
                }
              >
                <div
                  className={
                    msg.type === "sent"
                      ? "bg-green-600 text-white p-3 rounded-l-full rounded-br-full max-w-3/4"
                      : "bg-blue-600 text-white p-3 rounded-r-full rounded-bl-full max-w-3/4"
                  }
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Input message and send button */}
        <div className="p-4 border-t">
          <div className="mt-auto flex items-center">
            <input
              type="text"
              className="w-full border rounded-lg py-2 px-3 mr-2 focus:outline-none"
              placeholder="Type your message..."
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
              onClick={() => {
                sendMessage();
                addSentMessage();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomeChat;

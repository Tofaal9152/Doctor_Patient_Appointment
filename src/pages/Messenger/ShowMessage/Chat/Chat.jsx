import React, { useEffect, useState } from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { chating_between } from "../../../../constants";
import { useSelector } from "react-redux";
import { baseUrl } from "../../../../constants";
import { loadFromLocalStorage } from "../../../../utils/localStorage";

const MeAndFriendConversation = () => {
  const chatPeopleId = useSelector((state) => state.counter.chatPeopleId);
  const [isLoading, setLoading] = useState(true);
  const [chattingBetween, setChattingBetween] = useState([]);
  const [text, setText] = useState("");

  const loadChats = () => {
    if (chatPeopleId == null) return;
    let token = loadFromLocalStorage("patient-token");

    fetch(`${baseUrl}/patient/message/${chatPeopleId}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data == null) return;
        setChattingBetween(data);
        setLoading(false);
        console.log(data);
      });
  };

  const postText = (myText) => {
    let token = loadFromLocalStorage("patient-token");

    fetch(`${baseUrl}/patient/message/${chatPeopleId}`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ message: myText }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.text();
      })
      .then((data) => {
        // if (data == null) return;
        loadChats();
        console.log(data);
      });
  };

  useEffect(() => {
    setLoading(true);
    if (chatPeopleId !== null) {
      loadChats();
    }
  }, [chatPeopleId]);

  // interval here
  // useEffect(() => {
  //   if (chatPeopleId !== null) {
  //     const intervalId = setInterval(loadChats, 5000);
  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, []);

  return (
    <>
      <div className="mb-[8rem] px-2 lg:px-[4rem] xl:px-[7rem] hide_scroll pt-[1rem] flex flex-col overflow-y-auto h-full space-y-5 bg-[#F5F5F7] dark:bg-[#1e2021]">
        <div className="flex w-[50vw] flex-col space-y-4"> 
          {!isLoading ? (
            <>
              {chattingBetween.map((item, index) => (
                <div key={index} className="">
                  {/* ME */}

                  {item?.is_patient ? (
                    <div className="My flex justify-end items-start mb-4">
                      <div className="bg-[#E8F3FD] text-white p-3 rounded-lg max-w-[70%] space-y-1 dark:bg-[#6f34bc]">
                        <p className="text-sm text-black leading-relaxed dark:text-white">
                          {item?.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-[#7C8092] dark:text-gray-300">
                            {item?.sent}
                          </p>
                          <RiCheckDoubleFill className="text-[#30323E]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="Friend flex justify-start items-start mb-4 space-x-2">
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        src={item?.pat_profile_img}
                        alt="Friend"
                      />
                      <div className="bg-white p-3 rounded-lg max-w-[70%] space-y-1 dark:bg-[#323232]">
                        <p className="text-sm dark:text-white">
                          {item?.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-[#7C8092]">{item?.sent}</p>
                          <RiCheckDoubleFill className="text-[#30323E]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <div className="flex h-screen w-full">
              <div className="m-auto text-center font-bold text-[1.5rem]">
                <h3 className="text-gray-600">Loading</h3>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-4 flex absolute bottom-[4.2rem] bg-white w-full p-2 overflow-x-hidden dark:bg-[#1e2021] dark:border-solid dark:border-[1px] dark:border-gray-700">
        <div className="flex justify-center items-center space-x-2 w-full">
          {/* Input Area */}
          <div className="flex flex-1 items-center bg-white p-1 rounded-full border border-gray-300 dark:bg-[#1e2021]">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 p-2 text-black text-sm outline-none bg-transparent dark:text-white"
              placeholder="Type a message..."
            />
          </div>
          {/* Send Button */}
          <div className="cursor-pointer p-2 rounded-full bg-[#9746ff] hover:bg-[#8e3df8]">
            <IoIosSend className="text-white" size={22} />
          </div>
        </div>
      </div>

      {/* Type Message */}
      <div className="px-4 flex absolute bottom-[4.2rem] bg-white w-full p-2 overflow-x-hidden dark:bg-[#1e2021] dark:border-solid dark:border-[1px] dark:border-gray-700">
        <div className="flex justify-center items-center space-x-2 w-full">
          {/* Input Area */}
          <div className="flex flex-1 items-center bg-white p-1 rounded-full border border-gray-300 dark:bg-[#1e2021]">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 p-2 text-black text-sm outline-none bg-transparent dark:text-white"
              placeholder="Type a message..."
            />
          </div>
          {/* Send Button */}
          <div
            className="cursor-pointer p-2 rounded-full bg-[#9746ff] hover:bg-[#8e3df8]"
            onClick={(e) => {
              postText(text);
              e.target.value = "";
            }}
          >
            <IoIosSend className="text-white" size={22} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeAndFriendConversation;

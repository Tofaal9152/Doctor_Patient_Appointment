import React from "react";
// import { Messenger_Recent } from "../../../../constants";
// import { messageContainer } from "../../../../constants";
import { baseUrl } from "../../../../constants";
import { loadFromLocalStorage } from "../../../../commons/localStorage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChatPeopleId } from "../../../../Redux/counterSlice";
import { useSelector } from "react-redux";

const ChatPeople = () => {
  const dispatch = useDispatch();
  const chatPeopleId = useSelector((state) => state.counter.chatPeopleId);
  const [isLoading, setLoading] = useState(true);
  const [messageContainer, setMessageContainer] = useState([]);
  

  // get profile info
  useEffect(() => {
    let token = loadFromLocalStorage("patient-token");

    fetch(`${baseUrl}/patient/chat-people/`, {
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
        setLoading(false);
        setMessageContainer(data);
      });
  }, []);

  return (
    <div className="space-y-3 ">
      {/* heading */}
      <br />
      <br />
      <br />
      <div className="ChatsAndPlusIcon flex justify-between items-center ">
        <h1 className="text-2xl font-bold dark:text-white">Chats</h1>
      </div>

      {!isLoading ? (
        <div className="relative custom-scrollbar flex flex-col overflow-y-auto h-[78vh] 2xl:h-[82vh] space-y-2 p-1 pb-[2rem]">
          {messageContainer.map((item, index) => (
            <div
              key={index}
              className={`${
                chatPeopleId == item?.id ? "bg-blue-300" : "bg-white"
              }  flex relative justify-between items-center border border-gray-300 cursor-pointer rounded-xl p-3 shadow-lg `}
              onClick={() => {
                dispatch(setChatPeopleId(item?.id));
              }}
            >
              <div className="flex justify-start items-start space-x-3">
                <img
                  className="w-[2.7rem] h-[2.7rem] rounded-full object-cover"
                  src={item?.profile_img}
                  alt="Avatar"
                />
                <div className="mt-3">
                  <h1
                    className={`${
                      item?.name.length > 15
                        ? "flex flex-col items-start justify-start"
                        : ""
                    } text-sm font-semibold text-[#191816] truncate dark:text-white`}
                  >
                    {item?.name.length > 15 ? (
                      <span style={{ whiteSpace: "pre-wrap" }}>
                        {item?.name}
                      </span>
                    ) : (
                      item?.name
                    )}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChatPeople;

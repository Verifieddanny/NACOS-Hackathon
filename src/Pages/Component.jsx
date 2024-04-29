import React, { useEffect, useState } from "react";
import pic from "../assets/pic1.jpg";
import crypto from "../assets/crypto-trading.jpg";
import trade from "../assets/wealth_management.jpg";

// const comments = [];
// const comments1 = [];
// const comments2 = [];
export const MobileView = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [comments, setComments] = useState([]);
  const [comments2, setComments2] = useState([]);
  const [comments1, setComments1] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("commentsMob")) {
      setComments(JSON.parse(localStorage.getItem("commentsMob")));
    }
    if (localStorage.getItem("comments2")) {
      setComments2(JSON.parse(localStorage.getItem("comments2")));
    }
    if (localStorage.getItem("comments1")) {
      setComments1(JSON.parse(localStorage.getItem("comments1")));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const updatedComments = [...comments, text];
      localStorage.setItem("commentsMob", JSON.stringify(updatedComments));
      setComments(updatedComments);
    }
    if (text2) {
      const updatedComments = [...comments2, text2];
      localStorage.setItem("comments2", JSON.stringify(updatedComments));
      setComments2(updatedComments);
    }

    if (text1) {
      const updatedComments = [...comments1, text1];
      localStorage.setItem("comments1", JSON.stringify(updatedComments));
      setComments1(updatedComments);
    }
    console.log(`commented ${text || text1 || text2}`);
    setText("");
    setText1("");
    setText2("");
  };
  return (
    <div className="md:hidden w-screen block items-center h-full  pt-[3.5rem]">
      <div className="blooogs">
        <p className="font-extrabold text-xl text-center mb-3">Forex Trading</p>
        <div className="w-full h-[20rem]">
          <img src={pic} className="mainImg" />
        </div>
        <p className="text-justify mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ab,
          corporis impedit eos maiores totam obcaecati provident mollitia sunt
          dolorum, atque cum beatae quasi sequi animi architecto ea nesciunt
          deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae beatae facere dolorum error nobis iste eos tempora, officiis id
          voluptate optio minus molestiae qui dignissimos voluptatibus pariatur
          enim quae placeat! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ut modi quibusdam ad et neque, error similique quia doloremque
          reiciendis vel tempore dignissimos libero enim reprehenderit fugit,
          debitis totam quod sed.
        </p>
        <form action="" onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            placeholder="Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-4 mx-2 h-10 px-2 rounded-md w-full bg-[#1e1e1e] text-[#D9D9D9] dark:bg-[#D9D9D9]  dark:text-[#1e1e1e]"
          />
        </form>

        {comments.length > 0 && (
          <div className="w-full bg-[#1e1e1e] text-[#D9D9D9] dark:bg-[#D9D9D9]  dark:text-[#1e1e1e] h-20 mt-[2rem] overflow-y-scroll">
            <p className="text-center font-bold">COMMENT</p>
            {comments.map((comment, index) => {
              return (
                <p className="ml-2 " key={index}>
                  {comment}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className="blooogs">
        <p className="font-extrabold text-xl text-center mb-3">
          Crypto Trading
        </p>
        <div className="w-full h-[20rem]">
          <img src={crypto} className="mainImg" />
        </div>
        <p className="text-justify mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ab,
          corporis impedit eos maiores totam obcaecati provident mollitia sunt
          dolorum, atque cum beatae quasi sequi animi architecto ea nesciunt
          deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae beatae facere dolorum error nobis iste eos tempora, officiis id
          voluptate optio minus molestiae qui dignissimos voluptatibus pariatur
          enim quae placeat! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ut modi quibusdam ad et neque, error similique quia doloremque
          reiciendis vel tempore dignissimos libero enim reprehenderit fugit,
          debitis totam quod sed.
        </p>
        <form action="" onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            placeholder="Comment"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="mt-4 mx-2 h-10 px-2 rounded-md w-full bg-[#1e1e1e] text-[#D9D9D9] dark:bg-[#D9D9D9]  dark:text-[#1e1e1e]"
          />
        </form>
        {comments1.length > 0 && (
          <div className="w-full bg-[#1e1e1e] text-[#D9D9D9] dark:bg-[#D9D9D9]  dark:text-[#1e1e1e] h-20 mt-[2rem] overflow-y-scroll">
            <p className="text-center font-bold">COMMENT</p>
            {comments1.map((comment, index) => {
              return (
                <p className="ml-2 " key={index}>
                  {comment}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className="blooogs">
        <p
          className="font-extrabold
         text-xl text-center mb-3"
        >
          WEB3
        </p>
        <div className="w-full h-[20rem]">
          <img src={trade} className="mainImg" />
        </div>
        <p className="text-justify mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ab,
          corporis impedit eos maiores totam obcaecati provident mollitia sunt
          dolorum, atque cum beatae quasi sequi animi architecto ea nesciunt
          deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae beatae facere dolorum error nobis iste eos tempora, officiis id
          voluptate optio minus molestiae qui dignissimos voluptatibus pariatur
          enim quae placeat! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ut modi quibusdam ad et neque, error similique quia doloremque
          reiciendis vel tempore dignissimos libero enim reprehenderit fugit,
          debitis totam quod sed.
        </p>
        <form action="" onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            placeholder="Comment"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="mt-4 mx-2 h-10 px-2 rounded-md w-full bg-[#1e1e1e] text-[#D9D9D9] dark:bg-[#D9D9D9]  dark:text-[#1e1e1e]"
          />
        </form>
        {comments2.length > 0 && (
          <div className="w-full bg-[#1e1e1e] text-[#D9D9D9] dark:bg-[#D9D9D9]  dark:text-[#1e1e1e] h-20 mt-[2rem] overflow-y-scroll">
            <p className="text-center font-bold">COMMENT</p>
            {comments2.map((comment, index) => {
              return (
                <p className="ml-2 " key={index}>
                  {comment}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

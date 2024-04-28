import React, { useState } from "react";
import pic from "../assets/pic1.jpg";
import crypto from "../assets/crypto-trading.jpg";
import trade from "../assets/wealth_management.jpg";
export const MobileView = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
      </div>
    </div>
  );
};

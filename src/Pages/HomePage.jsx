import React, { useState, useRef, useEffect } from "react";
import pic from "../assets/pic1.jpg";
import crypto from "../assets/crypto-trading.jpg";
import trade from "../assets/wealth_management.jpg";
import { MobileView } from "./Component";
const blogsArr = [
  { picture: pic, Title: "Forex Trading", id: 0 },
  { picture: crypto, Title: "Crypto Trading", id: 1 },
  { picture: trade, Title: "WEB3", id: 2 },
];

// let comments = [];
export const HomePage = () => {
  const [blog1, setBlog1] = useState(0);
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("comments")) {
      setComments(JSON.parse(localStorage.getItem("comments")));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedComments = [...comments, text];
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setComments(updatedComments);
    setText("");
  };

  const forexRef = useRef(null);
  const cryptoRef = useRef(null);
  const web3Ref = useRef(null);
  const onClickForex = () => {
    setBlog1(Number(forexRef.current.id));
  };
  const onClickCrypto = () => {
    setBlog1(Number(cryptoRef.current.id));
  };
  const onClickWeb3 = () => {
    setBlog1(Number(web3Ref.current.id));
  };

  return (
    <>
      <div className="hidden md:block p-[1rem] relative w-full h-full md:pt-[4rem] pt-[3.5rem]">
        <div className="Images">
          <img src={blogsArr[blog1].picture} className="mainImg" />
        </div>
        <div className="Description ">
          <h3 className=" text-2xl font-extrabold">{blogsArr[blog1].Title}</h3>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ab,
            corporis impedit eos maiores totam obcaecati provident mollitia sunt
            dolorum, atque cum beatae quasi sequi animi architecto ea nesciunt
            deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae beatae facere dolorum error nobis iste eos tempora, officiis
            id voluptate optio minus molestiae qui dignissimos voluptatibus
            pariatur enim quae placeat! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ut modi quibusdam ad et neque, error similique
            quia doloremque reiciendis vel tempore dignissimos libero enim
            reprehenderit fugit, debitis totam quod sed.
          </p>
        </div>

        <div className="blogs">
          <p className=" text-[#D9D9D9] dark:text-[#1e1e1e]">Popular reads</p>
          <div className="w-full h-[90%] flex flex-col justify-between">
            <div
              ref={forexRef}
              onClick={onClickForex}
              className="bloggin"
              id="0"
            >
              <div className="h-full w-[8rem] rounded">
                <img src={pic} className="mainImg" />
              </div>
              <div className="w-[70%]  h-full">
                <p className="font-extrabold text-xs">Forex Trading</p> <br />
                <p className="w-full text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus dolores cupiditate dolorem quod sequi maxime voluptas
                  ducimus at omnis, eaque vero asperiores necessitatibus beatae
                  a veniam facilis eligendi? Quae, officiis?
                </p>
              </div>
            </div>
            <div
              ref={cryptoRef}
              onClick={onClickCrypto}
              className="bloggin"
              id="1"
            >
              <div className="h-full w-[8rem] rounded">
                <img src={crypto} className="mainImg" />
              </div>
              <div className="w-[70%]  h-full">
                <p className="font-extrabold text-xs">Crypto Trading</p>
                <br />
                <p className="w-full text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis maiores reiciendis quos, perspiciatis voluptas sequi
                  architecto sapiente provident nobis vel autem natus deleniti
                  officiis est ipsam aliquam earum quaerat fugiat.
                </p>
              </div>
            </div>
            <div ref={web3Ref} onClick={onClickWeb3} className="bloggin" id="2">
              <div className="h-full w-[8rem] rounded">
                <img src={trade} className="mainImg" />
              </div>
              <div className="w-[70%]  h-full">
                <p className="font-extrabold text-xs">WEB3</p>
                <br />
                <p className="w-full text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  ipsam iure, soluta corporis, beatae cupiditate odio rem
                  architecto sapiente praesentium possimus modi excepturi dolore
                  non voluptas quas, magni atque iste?
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="w-[40%] absolute mt-[6rem] shadow-md"
        >
          <input
            type="text"
            placeholder="Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-4 mx-2 h-10 px-2 rounded-md w-full dark:bg-[#1e1e1e] dark:text-[#D9D9D9] bg-[#D9D9D9]  text-[#1e1e1e]"
          />
        </form>
        <div className="absolute w-[40%] ml-2 dark:bg-[#1e1e1e] dark:text-[#D9D9D9] bg-[#D9D9D9]  text-[#1e1e1e] h-40 mt-[10rem] overflow-y-scroll">
          <p className="text-center font-bold">COMMENT</p>
          {comments.map((comment, index) => {
            return (
              <p className="ml-2 " key={index}>
                {comment}
              </p>
            );
          })}
        </div>
      </div>
      <MobileView />
    </>
  );
};

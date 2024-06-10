import React, { useState } from "react";

const Card = ({ author, image, blog_c }) => {
  const maxLength = 15;
  const originalText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quod tempore et sed consectetur sint necessitatibus earum consequatur sequi ut quae, cupiditate aspernatur repellendus! Quae dignissimos expedita consectetur eos quis? Delectus blanditiis asperiores molestias, libero quia eum aliquid enim, quas, voluptatum numquam corporis? Officiis, maiores alias placeat quas id error.";

  const [showFullText, setShowFullText] = useState(false);
  const truncatedText =
    originalText.split(" ").slice(0, maxLength).join(" ") + "...";

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const month = months[today.getMonth()]; // Months are zero-based, so we add 1
  const date = today.getDate();
  const year = today.getFullYear();

  return (
    <div className="w-full max-w-156 mx-auto  bg-slate-300  rounded-xl mt-10 p-4 shadow-md">
      <a href="/">
        <img
          src="/tech_img.png"
          alt="Error loading image"
          className="rounded-lg mb-3"
        />
      </a>
      <div>
        <div
          className={`overflow-hidden ${
            showFullText
              ? "max-h-[10.5rem] min-h-[10.5rem] overflow-y-scroll"
              : "max-h-[10.5rem] min-h-[10.5rem]"
          } `}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
        <h1 className="font-bold min-h-[4.7rem] max-h-[4.7rem] overflow-hidden">
          {blog_c}
        </h1>
          <h5>{showFullText ? originalText : truncatedText}</h5>
        </div>
      </div>

      <div className="bg-slate-200 rounded-xl mt-2 flex min-h-[9.5rem] max-h-[9.5rem] ">
        <img
          src={image}
          alt="error loading image"
          className="w-14 h-20 mt-4 m-2 mr-1 rounded-2xl self-center"
        />
        <div className="p-1 m-1 flex justify-start flex-col self-center">
          <ul>
            <li className="text-2xl font-bold inline-block max-w-[12ch] break-all self-center">
              {author}
            </li>
            <li className="text-xl inline-block max-w-[12ch] self-center ">
              {month} {date} {year}
            </li>
            {/* Additional content */}
          </ul>
        </div>
        <div className="flex-grow"></div>
        <div className="pt-5 pb-3 pr-3 flex justify-end">
          <button
            onClick={toggleFullText}
            className="bg-slate-100 text-center rounded-lg p-3 text-wrap"
          >
            {showFullText ? "Show Less" : "Read More >"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

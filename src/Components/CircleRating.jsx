import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  return (
    <div className=" sm:w-[3rem] font-bold  w-[2rem] ">
      <CircularProgressbar
        maxValue={10}
        value={rating}
        text={rating}
        background={true}
        styles={buildStyles({
          textSize: "40px",
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textColor: "black",
        })}
      />
    </div>
  );
};

export default CircleRating;
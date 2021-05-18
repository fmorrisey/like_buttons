import React, { useState } from "react";
import "./thumbButton.scss";

export default function ThumbsUpButton(props) {
  const [isLiked, setLike] = useState(false);
  const toggleLike = () => setLike(!isLiked);

  return (
    <div>
      <button
        class={isLiked ? "btn btn-like active " : "btn btn-like"}
        type="button"
        onClick={toggleLike}
      >
        <span>{props.icon}</span>
        Like
      </button>
      <br />
      {/* {isLiked.toString()}! */}
    </div>
  );
}

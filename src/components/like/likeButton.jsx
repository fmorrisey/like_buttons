import React, { useState } from "react";
import "./likeButton.scss";

export default function LikeButton(props) {
  const [isLiked, setLike] = useState(false);
  const toggleLike = () => setLike(!isLiked);

  return (
    <div>
      <button
        class={isLiked ? "btn btn-like active-heart " : "btn btn-like"}
        type="button"
        onClick={toggleLike}
      >
        <span>
          {isLiked ? <>{props.iconActive}</> : <>{props.iconDeactivate}</>}
        </span>
        {props.children}
      </button>
      <br />
      {isLiked.toString()}!
    </div>
  );
}

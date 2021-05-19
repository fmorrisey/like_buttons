import React, { useState } from "react";
import "./likeButton.scss";

export default function LikeButton(props) {
  const [isLiked, setLike] = useState(false);
  const toggleLike = () => setLike(!isLiked);

  function ToggleIcons(props) {
    if (isLiked) {
      return <>{props.iconActive}</>;
    }
    if (!isLiked) {
      return <>{props.iconDeactivate}</>;
    }
  }

  return (
    <div>
      <button
        class={isLiked ? "btn btn-like active-heart " : "btn btn-like"}
        type="button"
        onClick={toggleLike}
      >
        <span>
          <ToggleIcons
            iconActive={props.iconActive}
            iconDeactivate={props.iconDeactivate}
          />
        </span>
        {props.children}
      </button>
      <br />
      {isLiked.toString()}!
    </div>
  );
}

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbsUpButton from "./components/thumbs/ThumbsUpButton";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LikeButton from "./components/like/likeButton";

export default function App() {
  return (
    <>
      <ThumbsUpButton icon={<ThumbUpIcon />} />
      <LikeButton
        iconActive={<FavoriteIcon />}
        iconDeactivate={<FavoriteBorderIcon />}
      >
        Like
      </LikeButton>
    </>
  );
}

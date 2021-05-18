import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbsUpButton from "./components/thumbs/ThumbsUpButton";

export default function App() {
  return (
    <>
      <ThumbsUpButton icon={<ThumbUpIcon />} />
    </>
  );
}

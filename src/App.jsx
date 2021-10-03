import "./styles.css";
import EmojiPedia from "./EmojiPedia";
import emojiDictionary from "./emojiDictionary";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="book">
          📘
        </span>{" "}
        Emoji Pedia
      </h1>
      <EmojiPedia emojiData={emojiDictionary} />
    </div>
  );
}

import { useState } from "react";
import "./EmojiPedia.css";

export default function EmojiPedia({ emojiData }) {
  const [query, setQuery] = useState("");
  const [meaning, setMeaning] = useState("Emojis we know!");
  const [filteredEmoji, setFilteredEmoji] = useState(emojiData);

  const categories = [...new Set(emojiData.map((item) => item.category))];

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleReset = () => {
    setQuery("");
    setFilteredEmoji(emojiData);
  };

  const handleSearch = () => {
    setFilteredEmoji(
      emojiData?.filter((item) =>
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <section className="section_body">
      <div className="search_box">
        <input
          placeholder="Search by Category"
          value={query}
          onChange={handleInput}
        />
        <button onClick={handleSearch}>
          Search{" "}
          <span role="img" aria-label="search-icon">
            🔍
          </span>
        </button>
        <button onClick={handleReset}>Clear ✖</button>
      </div>

      <div className="categories">
        <h5>Categories</h5>
        {categories.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>

      <p className="emoji_meaning">{meaning}</p>

      <div className="display_emoji">
        <ul>
          {filteredEmoji.length === 0
            ? "No Serach Results.."
            : filteredEmoji?.map((item, ind) => (
                <li key={ind} onClick={() => setMeaning(item.meaning)}>
                  {item.emoji}
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
}

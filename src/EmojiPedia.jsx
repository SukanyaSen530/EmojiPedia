import { useState } from "react";
import "./EmojiPedia.css";

export default function EmojiPedia({ emojiData }) {
  const [query, setQuery] = useState("");
  const [meaning, setMeaning] = useState("Emojis we know!");
  const [filteredEmoji, setFilteredEmoji] = useState(emojiData);

  const categories = [
    "All",
    ...new Set(emojiData.map((item) => item.category))
  ];

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleReset = () => {
    setQuery("");
  };

  const handleSearch = () => {
    const res = emojiData?.filter((item) => item.emoji === query);

    res.length === 0
      ? setMeaning("No such emoji found!")
      : setMeaning(res[0].meaning);
  };

  const handleFilter = (category) => {
    if (category === "All") setFilteredEmoji(emojiData);
    else
      setFilteredEmoji(emojiData?.filter((item) => item.category === category));
  };

  return (
    <section className="section_body">
      <div className="search_box">
        <input placeholder="Search..." value={query} onChange={handleInput} />
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
          <button key={item} onClick={() => handleFilter(item)}>
            {item}
          </button>
        ))}
      </div>

      <p className="emoji_meaning">{meaning}</p>

      <div className="display_emoji">
        <ul>
          {filteredEmoji?.map((item, ind) => (
            <li key={ind} onClick={() => setMeaning(item.meaning)}>
              {item.emoji}
            </li>
          ))}
        </ul>
      </div>

      <p style={{ fontSize: "14px", color: "green" }}>
        Note : Click on categories to filter emojis!{" "}
      </p>
    </section>
  );
}

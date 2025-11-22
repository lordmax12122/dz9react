import { useState } from "react";
import StickerList from "./components/StickerList";
import Choice from "./components/Choice";
import stickersData from "./stickers.json";
import './App.css';

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="sticker-list">
        <StickerList
          stickers={stickersData}
          selected={selected}
          onSelect={setSelected}
        />
        <Choice selected={selected} />
    </div>
  );
}

export default App;
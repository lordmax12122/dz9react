import Sticker from "./Sticker";

function StickerList({ stickers, selected, onSelect }) {
  return (
    <div>
      {stickers.map((item) => (
        <Sticker
          key={item.label}
          img={item.img}
          label={item.label}
          isSelected={selected === item.label}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default StickerList;
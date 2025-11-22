import Sticker from "./Sticker";

function StickerList({ stickers, selected, onSelect }) {
    return (
        <div className="stickers-list">
            {stickers.map((sticker, id) => (
                <Sticker
                    key={id}
                    img={sticker.img}
                    label={sticker.label}
                    selected={selected === sticker.label}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}

export default StickerList;
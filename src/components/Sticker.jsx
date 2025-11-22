function Sticker({ img, label, onSelect, selected }) {
    return (
        <div onClick={() => onSelect(label)} selected={selected}>
            <img className="sticker" src={img} alt={label} />
        </div>
    );
}

export default Sticker;
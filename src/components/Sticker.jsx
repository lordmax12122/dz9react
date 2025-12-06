import { Component } from "react";

class Sticker extends Component {
    handleClick = () => {
        this.props.onSelect(this.props.label);
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                <img
                    className="sticker"
                    src={this.props.img}
                    alt={this.props.label}
                />
            </div>
        );
    }
}

export default Sticker;

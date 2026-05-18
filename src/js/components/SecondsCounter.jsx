import React from "react";

const SecondsCounter = (props) => {
    return (
        <div className="counter">

            <div className="digit">
                <i className="fa-regular fa-clock"></i>
            </div>

            <div className="digit">
                {Math.floor(props.seconds / 100000) % 10}
            </div>

            <div className="digit">
                {Math.floor(props.seconds / 10000) % 10}
            </div>

            <div className="digit">
                {Math.floor(props.seconds / 1000) % 10}
            </div>

            <div className="digit">
                {Math.floor(props.seconds / 100) % 10}
            </div>

            <div className="digit">
                {Math.floor(props.seconds / 10) % 10}
            </div>

            <div className="digit">
                {props.seconds % 10}
            </div>

        </div>
    );
};

export default SecondsCounter;
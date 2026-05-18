import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import SecondsCounter from "./components/SecondsCounter";

let counter = 0;

setInterval(() => {

    counter++;

    ReactDOM.createRoot(
        document.getElementById("root")
    ).render(

        <SecondsCounter
            seconds={counter}
        />

    );

},1000);
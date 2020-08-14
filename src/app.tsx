import React from "react";
import ReactDom from "react-dom";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

import * as css from "./app.css";

const App = () => {
    return (
        <h1 className={[css.test, css.mia].join(" ")}>Hi from a react app</h1>
    );
};

ReactDom.render(<App />, mainElement);

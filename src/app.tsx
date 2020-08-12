import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { DevTest } from "./pages/DevTest";
import { FullscreenOverlay } from "./pages/FullscreenOverlay";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact>
                <DevTest />
            </Route>
            <Route path="/fullscreen-overlay">
                <FullscreenOverlay />
            </Route>
        </BrowserRouter>
    );
};

ReactDom.render(<App />, mainElement);

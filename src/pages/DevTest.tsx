import React from "react";
import { Button } from "../components/Button";
const { ipcRenderer } = require("electron");

interface OverlayData {
    type: string;
}

const OVERLAY_OPEN: OverlayData = { type: "OPEN" };
const OVERLAY_CLOSE: OverlayData = { type: "CLOSE" };

export const DevTest = () => {
    const openOverlay = () => {
        ipcRenderer.send("overlay-action", OVERLAY_OPEN);
    };

    const closePopUp = () => {
        ipcRenderer.send("overlay-action", OVERLAY_CLOSE);
    };

    return (
        <>
            <h1>Hi from a react app</h1>
            <Button onClickHandler={openOverlay}>Draw Overlay</Button>
            <Button onClickHandler={closePopUp}>Close Overlay</Button>
        </>
    );
};

import React, { useState } from "react"; // we need this to make JSX compile

interface ButtonProps {
    children: string;
    onClickHandler: () => void;
}

export const Button = ({
    children,
    onClickHandler,
}: ButtonProps): JSX.Element => {
    return <button onClick={() => onClickHandler()}>{children}</button>;
};

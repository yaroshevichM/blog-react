import React, { ButtonHTMLAttributes, FC } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const UiButton: FC<IButtonProps> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

export default UiButton;

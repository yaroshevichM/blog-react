import React, { FC, InputHTMLAttributes } from "react";

interface IUiInput extends InputHTMLAttributes<HTMLInputElement> {}

export const UiInput: FC<IUiInput> = ({ ...params }) => {
    return <input type="text" {...params} />;
};

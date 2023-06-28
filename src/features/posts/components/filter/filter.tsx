import React from "react";
import UiButton from "../../../ui/button/button";

const Filter = ({ items, ...rest }: any) => {
    return (
        <div className="flex justify-center">
            {items.map((el: any) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <UiButton className="w-40 bg-white text-black text-xl py-3 rounded-3xl mx-4">{el.title}</UiButton>
              )
            })}
        </div>
    );
};

export default Filter;

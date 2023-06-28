import React from "react";
import PostItem from "../post-item/post-item";

const PostList = ({ items }: any) => {
    return (
        <div className="grid grid-cols-3 gap-14">
            {items.map((item: any) => {
                // eslint-disable-next-line react/jsx-key
                return <PostItem />;
            })}
        </div>
    );
};

export default PostList;

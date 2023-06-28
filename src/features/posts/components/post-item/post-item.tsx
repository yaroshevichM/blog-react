import React from "react";
import UserLabel from "../user-label/user-label";

const PostItem = () => {
    return (
        <div>
            <div className="prewiew mb-8">
                <img src="src/assets/1.png" />
            </div>
            <div className="px-4">
                <h5 className="font-bold text-lg mb-3">An Extraordinary WebGL Has Been Released By Great China Scientist</h5>
                <h6 className="text-lg mb-5 text-red-primary">Technology</h6>
                <p className="text-base mb-8">Lorem ipsum dolor sit amet consectetur. Aliquet nam congue dui nam ipsum arcu. Ullamcorper suspendisse placerat quis sed at habitasse. </p>
                <UserLabel/>
            </div>
        </div>
    );
};

export default PostItem;

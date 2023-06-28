import React from "react";

const UserLabel = (user: any) => {
    return (
        <div className="flex items-center mb-12">
            <div className="w-14 h-14 bg-red-primary rounded-full relative mr-3">
                <p className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">A</p>
            </div>
            <div className="flex flex-col">
                <h5 className="text-s mb-0.5">Alex Starm</h5>
                <p className="text-xs">Day ago</p>
            </div>
        </div>
    );
};

export default UserLabel;

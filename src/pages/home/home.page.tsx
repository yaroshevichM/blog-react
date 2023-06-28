import React from "react";
import { Link } from "react-router-dom";
import { UiInput } from "../../features/ui";
import Filter from "../../features/posts/components/filter/filter";
import UserLabel from "../../features/posts/components/user-label/user-label";
import PostList from "../../features/posts/components/post-list/post-list";

export function HomePage() {
    const filterButtons = [
        { title: "All", value: "all", selected: false },
        { title: "NFT", value: "nft", selected: false },
        { title: "Tech", value: "tech", selected: false },
        { title: "Anime", value: "anime", selected: false }
    ];

    const posts = [
        { title: "All", value: "all", selected: false },
        { title: "NFT", value: "nft", selected: false },
        { title: "Tech", value: "tech", selected: false },
        { title: "Anime", value: "anime", selected: false },
        { title: "All", value: "all", selected: false },
        { title: "NFT", value: "nft", selected: false },
        { title: "Tech", value: "tech", selected: false },
        { title: "Anime", value: "anime", selected: false },
        { title: "All", value: "all", selected: false },
        { title: "NFT", value: "nft", selected: false },
        { title: "Tech", value: "tech", selected: false },
        { title: "Anime", value: "anime", selected: false }
    ];

    return (
        <div className="m-h-screen bg-background-blue p-12">
            <div className="w-5/6 mx-auto">
                <div className="header mb-16 flex items-center justify-between">
                    <div className="w-40 h-12 bg-white"></div>
                    <div>
                        <Link className="mx-6 text-2xl" to={`/home`}>
                            Home
                        </Link>
                        <Link className="mx-6 text-2xl" to={`/about`}>
                            About
                        </Link>
                        <Link className="ml-6 text-2xl" to={`/login`}>
                            Login
                        </Link>
                    </div>
                </div>

                <div className="w-full h-80 flex py-14 mb-14 flex-col items-center justify-start rounded-3xl bg-gradient-to-r from-red-primary to-red-end">
                    <h2 className="text-center text-5xl font-bold uppercase mb-6">Welcome to the Bloggy!</h2>
                    <p className="text-center text-xl ">Explore interesting articles related to different topics! </p>
                    <div className="search-input relative w-2/4 mt-28">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 stroke-stone-400 absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2
"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <UiInput className="bg-white outline-none text-stone-500 w-full py-5 pl-20 rounded-3xl text-lg" placeholder="Search text..." />
                    </div>
                </div>

                <Filter className="w-full flex items-center" items={filterButtons} />

                <div className="main-post mt-20 mb-28 flex justify-between">
                    <div className="image w-2/4">
                        <img src="src/assets/top_post.png" alt="Prewiew post image" />
                    </div>
                    <div className="flex flex-col post-info w-2/4 pl-8 pt-14">
                        <h4 className="post-heading text-white font-bold text-3xl mb-6">An Extraordinary WebGL Has Been Released By Great China Scientist</h4>
                        <h5 className="topic text-red-primary text-xl mb-8">Technology</h5>
                        <p className="description text-lignt-grey mb-auto">
                            Lorem ipsum dolor sit amet consectetur. Aliquet nam congue dui nam ipsum arcu. Ullamcorper suspendisse placerat quis sed at habitasse. Aliquet pharetra ut nibh eget massa.
                            Faucibus et senectus in mauris nisl.
                        </p>

                        <UserLabel />
                    </div>
                </div>

                <PostList items={posts} />
            </div>
        </div>
    );
}

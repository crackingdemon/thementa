import { HomeLinks, JoinBtn, MobLinks, MobJoinBtn } from "./Header.styles";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [toggle, settoggle] = useState(true);
    const toggleMenu = () => {
        settoggle(!toggle);
    };
    return (
        <div className="fixed w-full z-10">
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <Link href="/">
                    <a className="text-3xl font-bold leading-none" href="#">
                        thementa
                        {/* <Image
                            src={Logo}
                            height="50"
                            width="50"
                            alt="Picture of the author"
                        /> */}
                    </a>
                </Link>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="navbar-burger flex items-center text-black p-3"
                    >
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    <li>
                        <Link href="/">
                            <HomeLinks>Home</HomeLinks>
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <Link href="/community">
                            <HomeLinks>Community</HomeLinks>
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <Link href="/hackathons">
                            <HomeLinks>Hackathons</HomeLinks>
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <Link href="/internships">
                            <HomeLinks>Internship</HomeLinks>
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <Link href="/aboutus">
                            <HomeLinks>AboutUs</HomeLinks>
                        </Link>
                    </li>
                </ul>

                <JoinBtn href="https://linktr.ee/aptel" target="_blank">
                    Join as mentor
                </JoinBtn>
            </nav>

            {/* Mobile SideBar */}

            {toggle ? (
                ""
            ) : (
                <div className="navbar-menu relative z-50 ">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold leading-none" href="#">
                                <Link href="/">
                                    thementa
                                    {/* <Image
                                        src={Logo}
                                        height="50"
                                        width="50"
                                        alt="Picture of the author"
                                    /> */}
                                </Link>
                            </a>
                            <button onClick={toggleMenu} className="navbar-close">
                                <svg
                                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1">
                                    <Link href="/">
                                        <MobLinks>Home</MobLinks>
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link href="/community">
                                        <MobLinks>Community</MobLinks>
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link href="/hackathons">
                                        <MobLinks>Hackathons</MobLinks>
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link href="/internships">
                                        <MobLinks>Internship</MobLinks>
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link href="/aboutus">
                                        <MobLinks>AboutUs</MobLinks>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">
                                <MobJoinBtn href="https://linktr.ee/aptel">Join as mentor</MobJoinBtn>
                            </div>
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>Copyright © 2022</span>
                            </p>
                        </div>
                    </nav>
                </div>
            )}

            {/*  */}
        </div>
    );
};

export default Header;

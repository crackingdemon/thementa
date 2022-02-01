import { useState } from "react";
import Image from "next/image";
import SVGBG from "../../assets/sun-tornado.svg";
import { CardA, Herotext } from "./Hero.styles.js"

function IndexPage() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="relative w-full h-screen ">
                <div className="hidden overflow-hidden md:block ">
                    <div className="absolute hidden md:flex justify-end overflow-hidden bg-cover bg-center right-0 w-3/5 h-screen">
                        <Image
                            width={500}
                            height={1000}
                            src={SVGBG}
                            alt
                        />
                    </div>

                </div>
                <div className="relative px-4 xl:px-0 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-16 lg:pt-36 gap-8">
                    <div className="text-color px-6">
                        <Herotext >
                            We help you <span className="inline-flex rounded-xl border-2 p-2">choose</span>
                        </Herotext>
                        <Herotext >
                            a guidance for your <span className="inline-flex rounded-xl border-2 p-2">future</span>
                        </Herotext>
                        <a href="https://linktr.ee/aptel"><button className="hover:opacity-90 text-xl rounded-xl w-full xl:text-2xl xl:w-10/12 mt-4 xl:mt-11 f-f-r py-6 bg-black text-white text-bold">
                            Join Us
                        </button></a>
                    </div>

                    <div className="flex justify-center items-center">
                        <CardA>
                            <h1 class=" font-medium text-white text-xl tracking-wide">Workcation</h1>
                            <h2 class="font-normal tracking-wide text-2xl text-white lg:w-5/5">Workflow has completely transformed how we interact with our customers. We've seen record bookings, higher customer satisfaction</h2>
                            <div class="flex flex-col">
                                <backquotes class="font-normal text-white text-sm tracking-wider">Marie Chivers </backquotes>
                                <backqoutes class="font-normal text-white text-sm tracking-wider">CEO Workcation</backqoutes>
                            </div>
                        </CardA>
                    </div>
                </div>
            </div>

            <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
        </>
    );
}

export default IndexPage;

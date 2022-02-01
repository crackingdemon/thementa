import styled from "styled-components";

export const Main = styled.div.attrs({
    className: "w-full h-screen bg-gray-100 p-2 grid grid-cols-2",
})``;

export const SVGdiv = styled.div`
  transform: rotate(90deg);
`;

export const CardA = styled.div.attrs({
    className: "h-auto py-20 px-10 w-full md:w-3/3 flex flex-col space-y-5 rounded-3xl shadow-xl hover:rotate-1 transition-transform",
})`
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #000000, #434343); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #000000, #434343); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Herotext = styled.h1.attrs({
    className: "text-7xl w-full xl:w-full xl:text-8xl font-black font-medium ",
})`

`;
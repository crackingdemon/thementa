import styled from "styled-components";

export const HomeLinks = styled.a.attrs({
    className:
        "block p-4 cursor-pointer text-sm font-semibold text-gray-500 hover:text-black rounded",
})``;

export const MobLinks = styled.a.attrs({
    className:
        "block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded",
})``;

export const JoinBtn = styled.a.attrs({
    className:
        "hidden cursor-pointer lg:inline-block py-2 px-6 bg-black hover:bg-gray-600 text-sm text-white font-bold rounded-xl transition duration-200",
})``;

export const MobJoinBtn = styled.a.attrs({
    className:
        "block px-4 cursor-pointer py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-black hover:bg-gray-700  rounded-xl",
})``;
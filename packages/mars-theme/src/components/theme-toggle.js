import React, { useContext, useMemo } from "react";
import { connect, styled } from "frontity";
import { ThemeContext } from "./theme-context";

const ThemeToggle = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const ThemeToggleButton = styled.button`
        border: ${darkTheme ? '1px solid white' : '1px solid black'};
        color: ${darkTheme ? 'white' : 'black'};
        background: ${darkTheme ? '#282828' : 'white'};
        padding: 3px 18px 3px 18px;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 30px;
        @media screen and (min-width: 769px & max-width: 1025px) {
            top: 70px;
            left: unset;
            right: 24px;
        }
        @media (max-width: 768px) {
            top: 105px;
        }
    `;

    const toggleTheme = () => {
        if (darkTheme) {
            setDarkTheme(false);
        }
        else {
            setDarkTheme(true);
        }
    }

    return (
        <>
            <ThemeToggleButton onClick={toggleTheme}>
                {darkTheme ? 'Light Theme' : 'Dark Theme'}
            </ThemeToggleButton>
        </>
    );
};

export default ThemeToggle;


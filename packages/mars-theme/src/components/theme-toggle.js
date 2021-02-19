import React, { useContext } from "react";
import { connect, styled } from "frontity";
import { ThemeContext } from "./theme-context";

const ThemeToggle = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    console.log(darkTheme);

    const ThemeToggleButton = styled.button`
        border: ${darkTheme ? '1px solid white' : '1px solid black'};
        color: ${darkTheme ? 'white' : 'black'};
        background: ${darkTheme ? '#282828' : 'white'};
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 700;
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


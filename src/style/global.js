import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --very-dark-blue: rgb(29, 32, 37);
        --dark-grayish-blue: rgb(104, 112, 125);
        --grayish-blue: hsl(220, 14%, 75%);
        --light-grayish-blue: hsl(223, 64%, 98%);
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);
        --orange: hsl(26, 100%, 55%);
        --pale-orange: hsl(25, 100%, 94%);
        --fml: 'Kumbh Sans', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--fml);
        background-color: var(--white);
    }
    img{
        max-width:100%;
        display: block;
    }

    
`;

export default GlobalStyle;

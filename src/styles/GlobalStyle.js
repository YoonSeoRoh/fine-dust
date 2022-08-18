import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
    }
    ul{
        margin: 0,
        padding: 0;
        list-style: none;
    }
    input: focus {
        outline: none;
    }
    img{
        display: block;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
`;

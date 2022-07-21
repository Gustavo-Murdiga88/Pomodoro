import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        border:0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]}
    }
    
    body, input, button, textarea {
        font-family: "Roboto", sans-serif;
        font: 1rem;
        color: ${({ theme }) => theme["gray-300"]};
        font-weight:400;
        -webkit-font-smoothing: antialiased;
    }

    body {
        background-color: ${(props) => props.theme["gray-900"]};
    }

    button {
        cursor: pointer;
    }
    
`;

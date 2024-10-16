import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const StyledSvgButton = styled('svg')({
    width: '100px',
    height: 'auto',
    cursor: 'pointer',
    padding: '20px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)', // Add hover effects if needed
    },
});

export default function StyledSettingsButton({ fill = "white" }) {
    return (
        <Link to={"/settings"}>
            <StyledSvgButton
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 500 500" 
                style={{ enableBackground: 'new 0 0 500 500' }} 
                xml:space="preserve">
                    <path style={{fill: fill}} 
                    d="M441.137,280.205v-60.691l57.864-33.408c-6.129-24.168-15.669-46.976-28.088-67.876l-63.839,17.105
                    l-42.915-42.915l17.153-64.015C360.27,15.833,337.281,6.182,312.909,0l-33.413,57.872h-60.691L185.474,0.141
                    c-23.719,6.074-46.119,15.439-66.685,27.583l17.54,65.462L93.414,136.1l-65.56-17.567C15.56,139.287,6.101,161.916,0,185.887
                    l58.244,33.627v60.691L0.148,313.747c6.224,24.221,15.878,47.066,28.423,67.981l65.312-17.5l42.915,42.915l-17.309,64.597
                    c20.648,12.104,43.133,21.41,66.933,27.407l33.465-57.963h60.691l33.271,57.627c24.005-6.185,46.656-15.741,67.415-28.139
                    l-17.102-63.826l42.915-42.915l63.727,17.076c12.373-20.783,21.899-43.456,28.052-67.48L441.137,280.205z M249.73,374.761
                    c-69.308,0-125.493-56.185-125.493-125.493c0-69.308,56.185-125.493,125.493-125.493s125.493,56.185,125.493,125.493
                    C375.224,318.575,319.039,374.761,249.73,374.761z"/>
            </StyledSvgButton>
        </Link>
    )
}

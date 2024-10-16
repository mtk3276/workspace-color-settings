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

function StyledHomeButton({ fill = "white" }) {
  return (
    <Link to={"/"}>
        <StyledSvgButton 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 450.35 478.86" 
          style={{ enableBackground: 'new 0 0 450.35 478.86' }}>
            <defs>
              <rect id="SVGID_1_" width="450.35" height="478.86"/>
            </defs>
            <clipPath id="SVGID_00000028319998961188680560000014633425521071089585_">
            </clipPath>
                <path id="Path_3" style={{ fill: fill }} d="M438.71,200.52L254.08,12.14c-15.65-15.96-41.27-16.22-57.24-0.58
                  c-0.19,0.19-0.39,0.38-0.58,0.58L11.65,200.52C-4,216.48-3.74,242.11,12.22,257.76c7.57,7.42,17.74,11.57,28.33,11.57h369.24
                  c22.35,0,40.47-18.12,40.48-40.47c0-10.59-4.15-20.77-11.57-28.33 M176.2,203.89c2.09,2.08,2.09,5.46,0,7.55l0,0l-11.71,11.71
                  c-2.09,2.08-5.47,2.08-7.56,0l-19.64-19.64l-19.65,19.64c-2.09,2.08-5.47,2.08-7.55,0l-11.71-11.71c-2.08-2.09-2.08-5.47,0-7.56
                  l19.65-19.64l-19.65-19.65c-2.08-2.09-2.08-5.47,0-7.55l11.7-11.73c2.09-2.08,5.47-2.08,7.55,0l19.65,19.65l19.65-19.65
                  c2.09-2.08,5.47-2.08,7.56,0l11.71,11.74c2.09,2.08,2.09,5.46,0,7.54l0,0l-19.64,19.65l19.64,19.63L176.2,203.89z M304.68,140.06
                  c6.39,0,11.57,5.17,11.57,11.56s-5.17,11.57-11.56,11.57c-6.39,0-11.57-5.17-11.57-11.56l0,0
                  C293.12,145.24,298.3,140.06,304.68,140.06L304.68,140.06 M304.68,228.41c-6.39,0-11.56-5.18-11.56-11.56
                  c0-6.39,5.18-11.56,11.56-11.56s11.56,5.18,11.56,11.56S311.06,228.41,304.68,228.41L304.68,228.41 M345.38,191.4
                  c0,2.55-2.07,4.63-4.63,4.63h-71.7c-2.55,0-4.63-2.07-4.63-4.63v-14.33c0-2.55,2.06-4.63,4.61-4.64c0,0,0,0,0.01,0h71.7
                  c2.55,0,4.63,2.07,4.63,4.63v14.34H345.38z"/>
                <path id="Path_4" style={{ fill: fill }}  d="M385.15,291.47H65.2c-11.4,0-20.64,16.45-20.64,36.74v113.91
                  c0,20.29,9.24,36.74,20.64,36.74h319.95c11.4,0,20.64-16.45,20.64-36.74V328.21C405.79,307.92,396.55,291.47,385.15,291.47
                  M177.77,392.34c0,2.55-2.07,4.63-4.63,4.63h-24.05v24.05c0,2.55-2.07,4.63-4.63,4.63h-14.34c-2.55,0-4.63-2.07-4.63-4.63v-24.05
                  h-24.05c-2.55,0-4.63-2.07-4.63-4.63V378c0-2.55,2.07-4.63,4.63-4.63h24.05v-24.05c0-2.55,2.07-4.62,4.62-4.62h14.34
                  c2.55,0,4.62,2.07,4.63,4.62l0,0v24.06h24.05c2.55,0,4.63,2.07,4.63,4.63v14.34L177.77,392.34z M344.93,392.34
                  c0,2.55-2.07,4.63-4.63,4.63h-71.7c-2.55,0-4.63-2.07-4.63-4.63V378c0-2.55,2.07-4.63,4.63-4.63h71.7c2.55,0,4.63,2.07,4.63,4.63
                  L344.93,392.34L344.93,392.34z"/>
          </StyledSvgButton>
    </Link>
  );
}

export default StyledHomeButton;
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

export default function StyledWorksheetButton({ fill = "white" }) {
  return (
      <Link to={"/worksheet"}>
          <StyledSvgButton
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            style={{ enableBackground: 'new 0 0 500 500' }}
          >
            <path 
              d="M28.57,175h442.86c15.78,0,28.57,13.17,28.57,29.41v91.18
              c0,16.24-12.79,29.41-28.57,29.41H28.57C12.79,325,0,311.83,0,295.59v-91.18C0,188.17,12.79,175,28.57,175z" 
              style={{ fill: fill }} 
            />
            <path 
              d="M325,28.57v442.86c0,15.78-13.17,28.57-29.41,28.57h-91.18
              c-16.24,0-29.41-12.79-29.41-28.57V28.57C175,12.79,188.17,0,204.41,0h91.18C311.83,0,325,12.79,325,28.57z" 
              style={{ fill: fill }} 
            />
          </StyledSvgButton>
      </Link>
  );
}

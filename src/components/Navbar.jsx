import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import StyledHomeButton from './StyledHomeButton';
import StyledWorksheetButton from './StyledWorksheetButton';
import StyledSettingsButton from './StyledSettingsButton';
import './styles.css';

function Navbar() {
  const buttonColor = 'var(--secondary-color)';

  return (
    <AppBar id='navbar' position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <StyledHomeButton fill={buttonColor} />
          <StyledWorksheetButton fill={buttonColor} />
          <StyledSettingsButton fill={buttonColor} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
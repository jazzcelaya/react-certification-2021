import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { BiChevronLeft, BiChevronRight, BiMenu } from 'react-icons/bi';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchBar from './SearchBar.component';
import ToggleSwitch from './ToggleSwitch.components';
import {
  StyledHeader,
  StyledUserIcon,
  StyledRowContainer,
} from '../../styled/Header.styled';
import { Main, DrawerHeader } from '../../styled/Drawer.styled';
import GeneralContext from '../../state/GeneralContext';
import ThemeContext from '../../state/ThemeContext';

const drawerWidth = 240;

function HeaderBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { keyword, setKeyword } = useContext(GeneralContext);
  const { toggleTheme } = useContext(ThemeContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '64px' }}>
      <CssBaseline />
      <StyledHeader style={{ position: 'fixed' }} open={open}>
        <StyledHeader>
          <StyledRowContainer>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <BiMenu />
            </IconButton>
            <SearchBar setKeyword={setKeyword} keyword={keyword} />
          </StyledRowContainer>
          <StyledRowContainer>
            <ToggleSwitch functionality={toggleTheme} />
            <Typography variant="h6" noWrap component="div">
              Dark Mode
            </Typography>
            <StyledUserIcon>
              <img alt="user" src="default_user.webp" />
            </StyledUserIcon>
          </StyledRowContainer>
        </StyledHeader>
      </StyledHeader>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <BiChevronLeft /> : <BiChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Home', route: '/' },
            { text: 'Login', route: '/login' },
          ].map((menuItem) => (
            <Link to={menuItem.route} style={{ color: 'black' }}>
              <ListItem button key={menuItem.text}>
                <ListItemIcon>
                  <BiChevronRight />
                </ListItemIcon>
                <ListItemText primary={menuItem.text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open} />
    </Box>
  );
}

export default HeaderBar;

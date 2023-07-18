import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#fff',
  color: '#000',
}));

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`


const HeaderBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  return (
      <Header  open={open}>
      <Toolbar>
      <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
        <MenuIcon />
        </IconButton>
          
          <img src={logo} alt="logo" style={{width: 30, marginLeft: 25,}} />
        
        <Heading >
          Keep Clone
        </Heading>
      </Toolbar>
    </Header>
  )
}

export default HeaderBar; 
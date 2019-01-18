import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const style = {
  root: { 
    width: '100%', 
    height: '75vh',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column', 
  },
};

const Layout = ({ children }) => (
  <div style={style.root}>
    <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Frontend Challenge #1
          </Typography>
        </Toolbar>
      </AppBar>
    {children}
  </div>
);

export default Layout;
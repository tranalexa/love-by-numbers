import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Container, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';

const sections = [
  { id: '/', label: 'Introduction' },
  { id: '/meeting-places', label: 'Meeting Places' },
  { id: '/church-marriage', label: 'Church & Marriage' },
  { id: '/meeting-age', label: 'Meeting Age' },
  { id: '/bayesian', label: 'Bayesian Analysis' },
  { id: '/clt', label: 'CLT Analysis' },
  { id: '/regression', label: 'Regression' },
];

function Navigation() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {sections.map((section) => (
                  <MenuItem
                    key={section.id}
                    onClick={() => handleMenuItemClick(section.id)}
                    selected={location.pathname === section.id}
                  >
                    {section.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Tabs
              value={location.pathname}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{ flexGrow: 1 }}
            >
              {sections.map((section) => (
                <Tab
                  key={section.id}
                  label={section.label}
                  value={section.id}
                  sx={{
                    minWidth: 'auto',
                    px: 3,
                    '&.Mui-selected': {
                      color: 'primary.main',
                    },
                  }}
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;

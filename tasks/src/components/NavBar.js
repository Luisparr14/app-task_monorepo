import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import './style/NavBar.css'

const paginas = [
  {
    name: 'Tasks',
    path: '/tasks'
  },
  {
    name: 'Add Task',
    path: '/add/task'
  }
]

const NavBar = ({ sessionActive = false, logOut }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const settings = sessionActive ? ['Logout'] : ['Login']
  const pages = sessionActive ? paginas : []

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={{

    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              EASY TASKS
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {sessionActive && <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path}>
                    <Typography sx={{ color: '#000' }} textAlign="left">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>}
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            EASY TASKS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.name} to={page.path} style={{ textDecoration: 'none', height: '100%' }}>
                <Typography
                  variant="h7"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: '#fff' }}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
          {sessionActive &&
            <MenuItem onClick={logOut}>
              <Typography textAlign="left">{settings[0]}</Typography>
            </MenuItem>}
          {!sessionActive &&
            <Link to={'/login'} style={{ textDecoration: 'none', height: '100%' }}>
              <Typography sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, color: '#fff' }} textAlign="left">{settings[0]}</Typography>
            </Link>}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar

import { FC, useState } from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Navigation from './Navigation'

const Header: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen((s) => !s)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Stowe
          </Typography>
          <Navigation open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

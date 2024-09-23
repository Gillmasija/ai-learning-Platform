import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExploreIcon from '@mui/icons-material/Explore';
import StarIcon from '@mui/icons-material/Star';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SearchIcon from '@mui/icons-material/Search';
import LineChart from './LineChart'; // Custom component for course progress chart

function Dashboard() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      
      {/* Top Navigation Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#F9FAFB' }}>
        
        {/* Left Section: Logo and Search */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Logo */}
          <IconButton>
            <HomeIcon sx={{ fontSize: '30px', color: '#4F8EF7' }} />
          </IconButton>
          
          {/* Search Bar */}
          <TextField
            variant="outlined"
            placeholder="Search anything"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { width: '300px', backgroundColor: 'white', borderRadius: '20px' }
            }}
          />
        </Box>

        {/* Right Section: User, Notifications, etc. */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>

          {/* Profile Circle */}
          <Box sx={{ width: '40px', height: '40px', backgroundColor: '#D3D3D3', borderRadius: '50%' }}></Box>
          
          {/* Explore More Button */}
          <Button variant="contained" sx={{ backgroundColor: '#4F8EF7', color: 'white', textTransform: 'none' }}>
            Explore More
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: '20px', display: 'flex' }}>
        
        {/* Sidebar */}
        <Box sx={{ width: '80px', backgroundColor: '#F3F4F6', padding: '10px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {/* Sidebar Icons */}
            <IconButton>
              <HomeIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton>
              <ExploreIcon />
            </IconButton>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <AccountBalanceWalletIcon />
            </IconButton>
            <IconButton>
              <HelpIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Main Content (Skills, Course Progress, etc.) */}
        <Box sx={{ flexGrow: 1 }}>
          
          {/* Top Section: Skills */}
          <Grid container spacing={3}>
            {[
              { label: 'Skill One', videos: '16 Videos', color: '#4F8EF7' },
              { label: 'Skill Two', videos: '23 Videos', color: '#00C4CC' },
              { label: 'Skill Three', videos: '36 Videos', color: '#004F7F' },
              { label: 'Skill Four', videos: '18 Videos', color: '#FF6F61' }
            ].map((skill, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: skill.color }}>
                  <Typography variant="h6" color="white">
                    {skill.label}
                  </Typography>
                  <Typography variant="body1" color="white" gutterBottom>
                    {skill.videos}
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: 'white', color: skill.color }}>
                    Start Now
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Course Progress and Right Section */}
          <Grid container spacing={3} sx={{ marginTop: '20px' }}>
            
            {/* Course Progress Section */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ padding: '20px' }}>
                <Typography variant="h6" gutterBottom>
                  Course Progress
                </Typography>
                <LineChart /> {/* Custom chart component for course progress */}
              </Paper>
            </Grid>

            {/* Buttons Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <Grid container spacing={2}>
                  {[
                    { label: 'Best Seller', icon: <ShoppingCartIcon />, color: '#FFCC00' },
                    { label: 'Explore', icon: <ExploreIcon />, color: '#00BFA5' },
                    { label: 'Favorites', icon: <StarIcon />, color: '#FF7043' },
                    { label: 'My Wallet', icon: <AccountBalanceWalletIcon />, color: '#42A5F5' },
                    { label: 'Support', icon: <HelpIcon />, color: '#FFCA28' },
                    { label: 'Notifications', icon: <NotificationsIcon />, color: '#EC407A' }
                  ].map((btn, index) => (
                    <Grid item xs={6} key={index}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: btn.color,
                          color: 'white',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '80px',
                          textTransform: 'none',
                          borderRadius: '15px'
                        }}
                        startIcon={btn.icon}
                      >
                        {btn.label}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;

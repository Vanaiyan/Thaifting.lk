import React, { useEffect, useState, useRef } from 'react';
import { Paper, Typography, Box, Avatar } from '@mui/material';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import { getBestSeller } from '../../Actions/adminActions';

const BestSellers = () => {
  const [sellers, setSellers] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const data = await getBestSeller();
        setSellers(data);
      } catch (error) {
        console.error('Error fetching best sellers:', error);
      }
    };

    fetchSellers();
  }, []);

  const getRandomColor = () => {
    const colors = ['#3f51b5', '#f50057', '#00bcd4', '#4caf50', '#ff9800', '#9c27b0']; // Add more colors as needed
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: 500, // Fixed height
        // backgroundColor: '#DEE0EC', // Set background color 
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Best Sellers
      </Typography>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }} ref={containerRef}>
        {sellers.map((seller, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Avatar
              src={seller.profileImageUrl}
              alt={`${seller.firstName} ${seller.lastName}`}
              sx={{
                width: 40,
                height: 40,
                marginRight: 2,
                backgroundColor: seller.profileImageUrl ? undefined : getRandomColor(), // Use dynamic color
              }}
            >
              {!seller.profileImageUrl && seller.firstName.charAt(0)}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1">{`${seller.firstName} ${seller.lastName}`}</Typography>
              <Typography variant="body2" color="textSecondary">{seller.email}</Typography>
            </Box>
            <Typography variant="body1" sx={{ marginLeft: 'auto', marginRight: 6 }}>Rating: {seller.rating.toFixed(1)}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 2,
          padding: 2,
          backgroundColor: '#ff5003',
          borderRadius: 1,
          color: '#fff' // Set text color to white
        }}
      >
        <StarPurple500Icon sx={{ marginRight: 1, color: '#fff' }} />
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          Top Rated Sellers
        </Typography>
        <StarPurple500Icon sx={{ marginLeft: 1, color: '#fff' }} />
      </Box>
    </Paper>
  );
};

export default BestSellers;

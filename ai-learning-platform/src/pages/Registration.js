import { TextField, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to the backend
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Registration</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Name" 
          name="name" 
          fullWidth 
          margin="normal" 
          onChange={handleChange} 
        />
        <TextField 
          label="Email" 
          name="email" 
          type="email" 
          fullWidth 
          margin="normal" 
          onChange={handleChange} 
        />
        <TextField 
          label="Password" 
          name="password" 
          type="password" 
          fullWidth 
          margin="normal" 
          onChange={handleChange} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          style={{ marginTop: '20px' }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
}

export default Registration;

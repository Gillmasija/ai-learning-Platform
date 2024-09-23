import { Container, Typography, Card, CardContent } from '@mui/material';

function CareerGuidance() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Career Guidance</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">Software Developer</Typography>
          <Typography>Skills Required: JavaScript, React, Node.js</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CareerGuidance;

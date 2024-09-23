import { Container, Typography, Card, CardContent } from '@mui/material';

function LearningPath() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Learning Path</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">Introduction to React</Typography>
          <Typography>Learn the basics of React, a popular frontend library.</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default LearningPath;

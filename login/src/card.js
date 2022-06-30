import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TajMahal from './tajMahal.jpg'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={TajMahal}
        alt="tajMahal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TajMahal
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Use Template</Button>
      </CardActions>
    </Card>
  );
}

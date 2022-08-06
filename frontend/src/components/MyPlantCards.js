import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import plantWatered from '../utilities/userfront.js';
import { testPost } from '../api/index.js';

export default function PlantCard() {
  // you'll want props to put your info into the title, img, ect - that info may come from app, not here
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fiddle Leaf Fig
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        {/* 

          Back End:
            backEndFunc(plantWatered)
                let NewWaterDate = today
                mongodb wayToWriteYourUser'sNewWaterDate // This is to store for the user for next time
        */}
        <Button size="small" onClick={testPost}>Watered</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

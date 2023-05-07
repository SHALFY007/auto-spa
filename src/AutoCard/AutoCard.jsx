import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function AutoCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }} style={{width: '345px', marginBottom: '20px'}} className="auto-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.value.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span className='car-title'>{props.value.title}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Стоимость- {props.value.price} <br />
            Пробег- {props.value.kmAge} <br />
            Год выпуска- {props.value.year} <br />
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <a href={props.value.link} target='_blank'>Открыть</a>
        </Button>
      </CardActions>
    </Card>
    )
}

export default AutoCard
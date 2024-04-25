import { Button, CardActionArea, CardActions,Typography, CardMedia, CardContent, Card } from '@mui/material';
import { AddShoppingCart, Troubleshoot } from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';


const ProductCard=({element})=>{

  const dispatch = useDispatch();
    
  

    return(
      <div className='flex justify-center items-start mt-5'>
      <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={element.image}
          alt="greeniguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className='flex justify-center items-center'>
      <CardActions>
        <Button size="small" color="inherit" startIcon={<Troubleshoot/>}>
          Info
        </Button>
        <Button onClick={()=>{dispatch(addToCart(element))}} size="small" color='inherit' endIcon={<AddShoppingCart/>}>
          Add
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    )

}

export default ProductCard
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector,useDispatch } from "react-redux";
import { Button } from "reactstrap";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  media: {
    height: 300,
    width: "100%",
  },
});

const Product = () => {

  const classes = useStyles();
  const {count,productList}=useSelector((state)=>state.cartStore)
  const {selectedProduct}=useSelector((state)=>state.productStore)
  const dispatch=useDispatch()

 const removeCart=()=>{
  dispatch({
      type:'ADD_TO_CART',
      payload:{
          count:count? count-1 :0,
          productList:productList?productList.concat(selectedProduct) :[...selectedProduct]
      }
  })
}

//  const removeItemFromCart = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     cartItem => cartItem.id === cartItemToRemove.id
//   );

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
//   }
// }
  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        {productList &&
          productList.map((product, index) => {
            return (
              <Grid item md={4} sm={6} key={index}>
                <Card className={classes.root}>
                  <CardActionArea onClick={() => product.id}>
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{ fontSize: "16px" }}
                      >
                        {product.title}
                      </Typography>
                      <br />
                      <Typography variant="subtitle1" color="primary">
                        Price: ${product.price}
                      </Typography>
                      <Button className='btn-danger' onClick={removeCart}>
                        Remove
                      </Button>
                      
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Product;

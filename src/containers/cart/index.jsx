import React, { useEffect, useState } from "react";
import { Container, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkoutOrder } from "../../store/action/cartAction";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Product = () => {
  const dispatch = useDispatch();
  const [total_price, setTotal_price] = useState(0);
  const { count, productList } = useSelector((state) => state.cartStore);
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/product_detail/${id}`);
  };
  useEffect(() => {
    let total = 0;
    if (count > 0) {
      productList.forEach((obj) => {
        total += obj.productId.price;
      });
      setTotal_price(total);
    }
  }, []);
  const checkout = () => {
    dispatch(checkoutOrder());
    // here cartAction page checkout system is dispatch
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>

              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>

          <>
            {productList &&
              productList.map((product, index) => {
                return (
                  <TableBody onClick={() => handleClick(product.productId._id)}>
                    <TableRow key={product.quantity}>
                      <TableCell component="th" scope="row">
                        {product.productId.title}
                      </TableCell>
                      <TableCell align="right">
                        {product.productId.price}
                      </TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="right">
                        <i class="fas fa-trash-alt"></i>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
          </>
        </Table>
      </TableContainer>

      {count > 0 && (
        <TableBody>
          <TableRow>
            <TableCell>
              {" "}
              Total Price: <b>${total_price}</b>
            </TableCell>
            <TableCell align="right">
              <Button variant="contained" color="secondary" onClick={checkout}>
                Checkout
              </Button>
              <ShoppingCartIcon />
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </Container>
  );
};

export default Product;

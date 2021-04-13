import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Container } from "@material-ui/core";
import { Col, Row, CardImg, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { storeSingleProduct } from "../../store/action/productAction";
import Loading from "../../components/loader";
const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const ProductDetail = () => {
  const { count, productList } = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productStore);
  const { loading } = useSelector((state) => state.loaderStore);
  const classes = useStyles();
  const params = useParams();
  let { id } = params;
  useEffect(() => {
    dispatch(storeSingleProduct(id));
  }, [id]);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        count: count ? count + 1 : 1,
        productList: productList
          ? productList.concat(selectedProduct)
          : [...selectedProduct],
      },
    });
  };

  return (
    <>
      {loading === true ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Container>
          <Link to="/" className="btn btn-light my-3">
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Card>
                <CardImg
                  style={{ width: "350px", height: "350px" }}
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fluid
                />
              </Card>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>{selectedProduct.title}</ListGroupItem>
                <ListGroupItem>
                  {" "}
                  selectedProduct : ${selectedProduct.price}
                </ListGroupItem>
                <ListGroupItem>
                  Description : {selectedProduct.description}
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${selectedProduct.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>In Stock</Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
                <ListGroupItem>
                  <Button  onClick={addToCart}
                    className="btn-block" variant="contained" color="primary">
                    Add to Cart
                  </Button>
                 
                </ListGroupItem>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductDetail;

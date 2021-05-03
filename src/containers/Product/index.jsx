import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  Container,
  Collapse,
  IconButton,

} from "@material-ui/core";
import { Col, Row, CardImg, ListGroup, ListGroupItem } from "reactstrap";
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import { storeSingleProduct } from "../../store/action/productAction";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/action/cartAction";
import { setNotificationDisplay } from "../../store/action/notificationAction";
import Loading from "../../components/loader";
import { BASE_URL } from "../../static";


const ProductDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedProduct } = useSelector((state) => state.productStore);
  const { loading } = useSelector((state) => state.loaderStore);
  const notification = useSelector((state) => state.notificationStore);
  const session = useSelector((state) => state.sessionStore);
  const params = useParams();

  let { id } = params;
  useEffect(() => {
    dispatch(storeSingleProduct(id));
  }, [id]);
  const add_product = () => {
    // Here dispatch cart action method
    if (session.token && session.expire_at > new Date().valueOf()) {
      dispatch(addToCart(selectedProduct));
    } else {
      history.push("/login");
    }
  };
  const setDisplay = () => {
    dispatch(setNotificationDisplay());
  };
  useEffect(() => {
    return () => {
      dispatch(setNotificationDisplay());
    };
  }, []);

  return (
    <>
      {loading === true ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Container>
          <Collapse in={notification.display}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setDisplay();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {notification.message}
            </Alert>
          </Collapse>
          <Link to="/" className="btn btn-light my-3">
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Card>
                <CardImg
                  style={{ width: "350px", height: "350px" }}
                  src={BASE_URL + selectedProduct.image}
                  alt={selectedProduct.name}
                  fluid
                />
              </Card>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>{selectedProduct.title}</ListGroupItem>
                <ListGroupItem>
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
                  <Button
                    onClick={add_product}
                    className="btn-block"
                    variant="contained"
                    color="primary"
                  >
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



import React, { useEffect,useState } from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Container } from "@material-ui/core";
import { Col, Row, CardImg, ListGroup, ListGroupItem } from "reactstrap";
import axios from "axios";
import  {useHistory} from 'react-router-dom'
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
  const history=useHistory()
  const params = useParams();
  const [open, setOpen] =useState(false);
  const [msg, setMsg] =useState('');
  let { id } = params;
  useEffect(() => {
    dispatch(storeSingleProduct(id));
  }, [id]);

  const addToCart=()=>{
    let user=JSON.parse(sessionStorage.getItem('jwtToken'));
    if(!user){
        history.push('/login')
    }else{
        let token=user.token
        dispatch({
            type:'ADD_TO_CART',
            payload:{
                count:count? count+1 :1,
                productList:productList?productList.concat(selectedProduct) :[...selectedProduct]
            }
        })
        axios.post('http://127.0.0.1:8080/cart',{
            product:{
                id: selectedProduct._id,
                quantity : 1
            },
        },{
            headers: {
            'authorization': `bearer ${token}` 
            }
        }).then((res)=>{
            setMsg('Product added to cart.');
            setOpen(true);
            
        }).catch((e)=>{
           setMsg(e.response.data.error);
        setOpen(true);
        })
        
    }
    
}

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

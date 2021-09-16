import React, { useContext }from "react";
import { GlobalContext } from "../context/globalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";


const ProductList = () => {
  const {products, removeProduct} = useContext(GlobalContext);
 
  return (
    <ListGroup className="mt-4">
      {products.length > 0 ? (
        <>
          {products.map(product => (
          <ListGroupItem className="d-flex" key={product.id}>
            <strong>{product.name}</strong>
            <div className="ml-auto">
              <Link to={`/editProducts/${product.id}`} className="btn btn-warning mr-1">
                Editar
              </Link>
              <Button onClick={()=> removeProduct(product.id)} color="danger">Delete</Button>
            </div>
          </ListGroupItem>))}
        </>
      ) : (
        <h4 className="text-center">Sem produto</h4>
      )}

    </ListGroup>
  );
};

export default ProductList;

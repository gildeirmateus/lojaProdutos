import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalState";
import { Link, useHistory } from "react-router-dom";
import {} from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditProduct = (props) => {
  const {editProduct, products} = useContext(GlobalContext);
  const [selectedProduct, setSelectProduct] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const currentProductId = props.match.params.id;

  
  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = products.find(product => product.id === productId)
    setSelectProduct(selectedProduct);
   
  }, [currentProductId, products])

  const onChange = (e) => {
    setSelectProduct({ ...selectedProduct, [e.target.name]: e.target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editProduct(selectedProduct)
    history.push("/home")
  };


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Nome</Label>
        <Input
          type="text"
          name="name"
          value={selectedProduct.name}
          onChange={onChange}
          placeholder="Edite o produto"
        ></Input>
      </FormGroup>
      <Button type="submit" className="btn btn-primary ">
        Salvar
      </Button>
      <Link to="/home" className="btn btn-danger ml-2">
        Cancelar
      </Link>
    </Form>
  );
};

export default EditProduct;

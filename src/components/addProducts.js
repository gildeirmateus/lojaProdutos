import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/globalState";
import { v4 as uuid } from 'uuid';

const AddProducts = () => {
  const [name, setName] = useState('');
  const { addProduct } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) =>{
    e.preventDefault();
    const newProduct = {
      id: uuid(),
      name
    }
    console.log(newProduct);
    addProduct(newProduct);
    history.push("/home");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Nome</Label>
        <Input type="text" value={name} onChange={onChange} placeholder="Adicione um produto"></Input>
      </FormGroup>
      <Button type="submit" className="btn btn-success">Adicionar</Button>
      <Link to="/home" className="btn btn-danger">
        Cancelar
      </Link>
    </Form>
  );
};

export default AddProducts;

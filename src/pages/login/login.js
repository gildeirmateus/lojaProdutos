import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Adicione o email"
          {...register("email", { required: true })}
        ></Input>
        <div className="inputError">
          {errors.email?.type === "required" && "Email necessário"}
        </div>
      </FormGroup>

      <FormGroup className="mb-2">
        <Label>Senha</Label>
        <Input
          type="password"
          name="password"
          placeholder="Adicione a senha"
          {...register("password", { required: true })}
        ></Input>
        <div className="inputError">
          {errors.password?.type === "required" && "Senha necessária"}
        </div>
      </FormGroup>

      <Button type="button" className="btn btn-outline-primary">
        <Link class="text-white" type="submit" to="/home">
          Login
        </Link>
      </Button>
      <Button  type="button" className="btn btn-outline-info">
        
        <Link class="text-white" to="/register">
          Cadastrar
        </Link>
      </Button>
    </Form>
   
  );
}

export default Login;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Register() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
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
        <Label>Nome</Label>
        <Input
          type="text"
          name="name"
          placeholder="Adicione um nome"
          {...register("name", { required: true })}
        ></Input>
        <div className="inputError">
          {errors.name?.type === "required" && "Nome necessário"}
        </div>
      </FormGroup>
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

      <FormGroup className="mb-2">
        <Label>Confirme a senha</Label>
        <Input
          type="password"
          name="password"
          placeholder="Confirme a senha"
          {...register("password", { required: true })}
        ></Input>
        <div className="inputError">
          {errors.confirmPassword?.type === "required" && "As senhas devem combinar!"}
        </div>
      </FormGroup>
    
      <Button type="submit" className="btn btn-outline-info">
        <Link className="text-white" to="/home">
          Cadastrar
        </Link>
      </Button>
    </Form>

    
  );
}

export default Register;

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/forms/button';
import loginService from '../../../services/login/loginService';
import { createUserService, userService } from '../../../services/user/userService';
import { Container, InputGroup } from '../style';
import { RegisterStyle } from './style';

interface UserProps {
  children?: any
}

export interface IUserEdit {
  name: string;
  email: string;
  password: string;  
}

interface UserEditState extends IUserEdit{};

export function Register(props: UserProps) {
  const history = useHistory();

  const [formData, setFormData] = useState<UserEditState>({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, email, password } = formData;

    const data = {
      name,
      email,
      password
    };

    const user = await createUserService(data);
    
    if(user != null)
      history.push('/');
  }

  return (
    <Container>
      <RegisterStyle>
        <h1>Realize seu cadastro</h1>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="name">Nome</label>
            <input
              name="name"
              required
              onChange={handleInputChange}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              required
              onChange={handleInputChange}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Senha</label>
            <input
              name="password"
              type="password"
              required
              onChange={handleInputChange}
            />
          </InputGroup>

          <Button type="submit">Entrar</Button>
        </form>

      </RegisterStyle >
    </Container>
  )
}
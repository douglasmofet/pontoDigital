import * as React from 'react';
import Button from '../../../components/forms/button';
import { Home, Form } from './style';

export function HomePage() {
  return (
    <Home>
      <h1>Ponto digital</h1>
      <p>Controle quantas horas você está <strong>REAMENTE</strong> fazendo, organize-se e aproveite o seu tempo como quiser!</p>
      <Form>
        <Button path={'/login'}>Realizar login</Button>
        <h4>OU</h4>
        <Button
          path={'/register'}
          cta>
            Quero me cadastrar
        </Button>
      </Form>
    </Home>
  )
}
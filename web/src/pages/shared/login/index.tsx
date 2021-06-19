import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../../../components/forms/button';
import loginService from '../../../services/login/loginService';
import { Container, InputGroup } from '../style';
import { Login } from './style';
export interface LoginProps {
	children?: any
}

export interface LoginState {
	email: string;
	password: string;
}

export function LoginPage(props: LoginProps) {
	const [formData, setFormData] = useState<LoginState>({
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

		const { email, password } = formData;

		const data = {
			email,
			password
		};

		loginService(data);
	}

	return (
		<Container>
			<Login>
				<h1>Login</h1>

				<form onSubmit={handleSubmit}>
					<InputGroup>
						<label htmlFor="email">E-mail</label>
						<input
							name="email"
							placeholder="E-mail"
							onChange={handleInputChange}
						/>
					</InputGroup>

					<InputGroup>
						<label htmlFor="password">Senha</label>
						<input
							name="password"
							type="password"
							placeholder="Senha"
							onChange={handleInputChange}
						/>
					</InputGroup>

					<Button type="submit">Entrar</Button>
				</form>
				
			</Login>
		</Container>
	)
}
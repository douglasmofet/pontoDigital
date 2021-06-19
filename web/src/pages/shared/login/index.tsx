import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/forms/button';
import { useAuth } from '../../../hooks/auth';

import { authServiceLogin } from '../../../services/auth/authService';
import handleErrors from '../../../services/shared/errorsService';

import { Container, InputGroup } from '../style';
import { Login } from './style';

export interface LoginProps {
	children?: any
}

export interface LoginState {
	email: string;
	password: string;
}

export const LoginPage : React.FC = (props: LoginProps) => {
	const history = useHistory();
	const { signIn } = useAuth();

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

		try {
			const user = await authServiceLogin(data);
			await signIn(user);
			history.push('/admin');
		} catch (error) {
			handleErrors(error);
		}
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
							type="email"
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
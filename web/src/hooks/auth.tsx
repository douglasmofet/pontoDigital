import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/shared/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {

    const user = sessionStorage.getItem('@PontoEletronico:user');

    if (user) {
      // api.defaults.headers.authorization = `Bearer ${'token'}`;

      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ id, name, email }) => {
    const user = { id: id, name: name, email: email };

    sessionStorage.setItem('@PontoEletronico:user', JSON.stringify(user));

    //api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user });
  }, []);

  const signOut = useCallback(() => {
    sessionStorage.removeItem('@PontoEletronico:user');
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({
        user
      });
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

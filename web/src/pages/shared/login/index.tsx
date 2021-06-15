import * as React from 'react'

export interface LoginPageProps {
    children?: any
}

export function LoginPage(props:LoginPageProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'login-page'}>
            <h4>Login</h4>
        </div>
    )
}
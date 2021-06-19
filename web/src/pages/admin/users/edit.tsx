import * as React from 'react'
import { RouteChildrenProps } from 'react-router'

export interface UserEditUrlParams {
    userId?: string
}

export function UserEdit(props: RouteChildrenProps<UserEditUrlParams> ) {
    return (
        <div className={'dc-user-edit'}>
            <h4>Quero me cadastrar</h4>
        </div>
    )
}
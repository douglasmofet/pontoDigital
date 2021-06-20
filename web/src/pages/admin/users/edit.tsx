import * as React from 'react'
import { RouteChildrenProps } from 'react-router'

export interface UserEditUrlParams {
    userId?: string
}

export function UserEdit(props: RouteChildrenProps<UserEditUrlParams> ) {
    return (
        <div>
            <h4>Edição</h4>
        </div>
    )
}
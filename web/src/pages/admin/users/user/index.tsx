import * as React from 'react'
import { RouteChildrenProps } from 'react-router'

export interface UserPageUrlParams {
    userUuid?: string
}

export function UserPage(props: RouteChildrenProps<UserPageUrlParams> ) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'dc-user-page'}>
            <h4>Quero me cadastrar</h4>
        </div>
    )
}
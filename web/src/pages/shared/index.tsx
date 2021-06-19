import { Route, Switch } from "react-router";
import { HomePage } from "./home";
import { LoginPage } from "./login";
import { Register } from "./register";

export default function SharedModule() {
    return (
        <Switch>
            <Route path={`/login`} component={LoginPage}/>
            <Route path={`/register`} component={Register}/>
            <Route path={`/`} component={HomePage}/>
        </Switch>
    )
}
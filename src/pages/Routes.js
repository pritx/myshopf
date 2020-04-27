import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Category from "./Category";
import ProductDetails from "./ProductDetails";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Confirm from "./Confirm";
import Home from "./Home";
import UserDashboard from './UserDashboard';

const NotFound = () => {
    return(<div>
        404 Not Found
    </div>)
}

const Routes = () => {  
    return (
        <Switch>
            <Route path="/" component={Category} exact />
            <Route path="/dash" component={UserDashboard} />
            <Route path="/home" component={Home} />
            <Route path="/product" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout}/>
            <Route path="/confirm" component={Confirm}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes

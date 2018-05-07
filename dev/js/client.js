import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Dashbord from "./pages/Dashboard";
import Layout from "./pages/Layout";
import '../sass/style.sass'
import History from "./pages/History";
import Review from "./pages/Review";
import Gross from "./pages/Gross";
import SettingAccount from "./pages/SettingAccount";
import SettingService from "./pages/SettingService";
import SettingAvailability from "./pages/SettingAvailability";
import SettingPricing from "./pages/SettingPricing";
import Login from './pages/Login'

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Layout}>
            <IndexRoute name="Dashboard" component={Dashbord}/>
            <Route path="/history" name="History" component={History}/>
            <Route path="/review" name="Review" component={Review}/>
            <Route path="/gross" name="Gross Summary" component={Gross}/>
            <Route path="/setting/account" name="Account Setting" component={SettingAccount}/>
            <Route path="/setting/service" name="Services" component={SettingService}/>
            <Route path="/setting/availability" name="Availability" component={SettingAvailability}/>
            <Route path="/setting/pricing" name="Pricing" component={SettingPricing}/>
        </Route>
    </Router>,
app);
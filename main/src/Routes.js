import React, { Component } from "react";
import { Router, Route, Switch, HashRouter } from "react-router-dom";
import history from "./History";
import Home from "./components/Home";
import About from "./components/About";
import AllPages from "./components/AllPages";
import BillPay from "./components/BillPay";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Carts from "./components/Carts";
import Components from "./components/Components";
import ComponentsAccordion from "./components/ComponentsAccordion";
import ComponentsAlerts from "./components/ComponentsAlerts";
import ComponentsButtons from "./components/ComponentsButtons";
import ComponentsModals from "./components/ComponentsModals";
import ComponentsNotifications from "./components/ComponentsNotifications";
import ComponentsProgress from "./components/ComponentsProgress";
import ComponentsTabs from "./components/ComponentsTabs";
// import ComponentsTooltip from "./components/ComponentsTooltip";
import Contact from "./components/Contact";
import Notification from "./components/Notification";
import Saving from "./components/Saving";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Transaction from "./components/Transaction";
import TransactionDetails from "./components/TransactionDetails";
import UserSetting from "./components/UserSetting";
import UserVerification from "./components/UserVerification";
import StartupPage from "./components/StartupPage"; // Import the StartupPage component

import EditProfile from "./components/EditProfile";      // Assuming you've created this component
import ChangePassword from "./components/ChangePassword"; // Assuming you've created this component
import ManageWallets from "./components/ManageWallets";   // Assuming you've created this component
import ChangeUsername from "./components/ChangeUsername";
import UpdateEmail from "./components/UpdateEmail"; // Import the UpdateEmail component
import EditAddress from "./components/EditAddress"; // Adjust the path as necessary
import KYCForm from "./components/KYCForm"; // Import the KYCForm component

class Routes extends Component {
    state = {
        isLoaded: false  // To control splash screen visibility
    };

    componentDidMount() {
        // Simulate loading time (3 seconds) before showing the routes
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 3500);  // Adjust the time as needed
    }

    render() {
        return (
            <Router history={history}>
                <HashRouter basename="/">
                    {!this.state.isLoaded ? (
                        // Show the startup page if the app is still loading
                        <StartupPage />
                    ) : (
                        // Otherwise, display the app routes
                        <Switch>
                            <Route exact path={'/'} render={(props) => (<Home {...props} />)} />
                            <Route exact path={'/about'} render={(props) => (<About {...props} />)} />
                            <Route exact path={'/all-pages'} render={(props) => (<AllPages {...props} />)} />
                            <Route exact path={'/bill-pay'} render={(props) => (<BillPay {...props} />)} />
                            <Route exact path={'/blog'} render={(props) => (<Blog {...props} />)} />
                            <Route exact path={'/blog-details'} render={(props) => (<BlogDetails {...props} />)} />
                            <Route exact path={'/carts'} render={(props) => (<Carts {...props} />)} />
                            <Route exact path={'/components'} render={(props) => (<Components {...props} />)} />
                            <Route exact path={'/components-accordion'} render={(props) => (<ComponentsAccordion {...props} />)} />
                            <Route exact path={'/components-alerts'} render={(props) => (<ComponentsAlerts {...props} />)} />
                            <Route exact path={'/components-buttons'} render={(props) => (<ComponentsButtons {...props} />)} />
                            <Route exact path={'/components-modal'} render={(props) => (<ComponentsModals {...props} />)} />
                            <Route exact path={'/components-notifications'} render={(props) => (<ComponentsNotifications {...props} />)} />
                            <Route exact path={'/components-progress'} render={(props) => (<ComponentsProgress {...props} />)} />
                            <Route exact path={'/components-tabs'} render={(props) => (<ComponentsTabs {...props} />)} />
                            {/*<Route exact path={'/components-tooltip'} render={(props) => (<ComponentsTooltip {...props} />)} />*/}
                            <Route exact path={'/contact'} render={(props) => (<Contact {...props} />)} />
                            <Route exact path={'/notification'} render={(props) => (<Notification {...props} />)} />
                            <Route exact path={'/saving'} render={(props) => (<Saving {...props} />)} />
                            <Route exact path={'/signin'} render={(props) => (<Signin {...props} />)} />
                            <Route exact path={'/signup'} render={(props) => (<Signup {...props} />)} />
                            <Route exact path={'/transaction'} render={(props) => (<Transaction {...props} />)} />
                            <Route exact path={'/transaction-details'} render={(props) => (<TransactionDetails {...props} />)} />
                            <Route exact path={'/user-setting'} render={(props) => (<UserSetting {...props} />)} />
                            <Route exact path={'/user-verification'} render={(props) => (<UserVerification {...props} />)} />
                            <Route exact path={'/edit-profile'} render={(props) => (<EditProfile {...props} />)} />
                            <Route exact path={'/change-password'} render={(props) => (<ChangePassword {...props} />)} />
                            <Route exact path={'/manage-wallets'} render={(props) => (<ManageWallets {...props} />)} />
                            <Route exact path={'/change-username'} render={(props) => (<ChangeUsername {...props} />)} />
                            <Route exact path={'/update-email'} render={(props) => (<UpdateEmail {...props} />)} />
                            <Route exact path={'/edit-address'} render={(props) => (<EditAddress {...props} />)} />
                            <Route exact path={"/kyc"} render={(props) => (<KYCForm {...props} />)} /> 

                        </Switch>
                    )}
                </HashRouter>
            </Router>
        );
    }
}

export default Routes;

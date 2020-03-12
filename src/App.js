import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route ,Redirect } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import QRCodeScannerContainer from "./components/QRCodeScannerContainer";
import OverViewOfInvoiceRefund from "./components/OverViewOfInvoiceRefund";
import RefundConfirmContainer from "./components/RefundConfirmContainer";
import LoadingComponent from './components/LoadingComponent'
import Component404 from "./components/Component404";

function App() {
  return (
    <Provider store={store}>
      {/* React Fragment helps in simulating the html tag */}
      <React.Fragment>
        <h2 className="center">Welcome to Refund App</h2>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="refundoverview" />
            <Route exact path="/refundoverview" component={OverViewOfInvoiceRefund} />
            <Route exact path="/refundoverview" component={LoadingComponent} />
            <Route exact path="/qrscan" component={QRCodeScannerContainer} />
            <Route exact path="/refundConfirm" component={RefundConfirmContainer} />
            <Route component={Component404} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
}

export default App;

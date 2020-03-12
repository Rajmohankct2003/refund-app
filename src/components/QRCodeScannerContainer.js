import React, { Component } from "react";
import RefundConfirmContainer from "./RefundConfirmContainer";
import LoadingComponent from "./LoadingComponent";
import QrCodeReader from "react-qr-reader";
import { loadInvoiceDetail } from "../actions/RefundInvoice"; //importing action for RefundInvoice details
import { connect } from "react-redux";

//This component is used to display camera to scan the QR -code.
class QRCodeScannerContainer extends Component {
  state = {
    loading: true,
    ScannedInvoice: ""
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState(
        {
          loading: false
        }
      );
    },1000);
  };
  handleScan = data => {
    if (data) {
      this.props.loadInvoiceDetail(data);
      this.setState({
        ScannedInvoice: data
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return this.state.loading ? (
      <LoadingComponent />
    ) : this.state.ScannedInvoice ? (
      <RefundConfirmContainer />
    ) : (
      <React.Fragment>
        <div className="center">
          <h2> Scan your invoice below</h2>
        </div>
        <div className="arrow">&#8674;</div>
        <div className="qrScanner">
          <QrCodeReader onError={this.handleError} onScan={this.handleScan} />
        </div>
      </React.Fragment>
    );
  }
}
export default connect(null, { loadInvoiceDetail })(QRCodeScannerContainer);

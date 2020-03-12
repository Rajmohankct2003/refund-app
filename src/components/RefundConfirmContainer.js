import React, { Component } from "react";
import RefundConfirmForm from "./RefundConfirmForm";
import { Redirect } from "react-router-dom";
import {
  loadInvoiceDetail,
  updateInvoiceDetail
} from "../actions/RefundInvoice"; //importing action for RefundInvoice.
import { connect } from "react-redux";

//This component is to display the confirmation form for refunding the invoice .
class RefundConfirmContainer extends Component {
  state = {
    confirmRefund: "",
    percentageRefund: "",
    submitted: false
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      submitted: true
    });
    if (this.state.confirmRefund === "yes") {
      const refundAmount =
        Number(this.props.InvoiceDetails[0].amount) *
        (Number(this.state.percentageRefund) / 100);

      const refundAmountPlusVAT = refundAmount + refundAmount * (21 / 100);
      this.props.updateInvoiceDetail({
        percentageRefund: Number(this.state.percentageRefund),
        refundAmount: refundAmountPlusVAT.toFixed(2)
      });
    } else if (
      (this.state.confirmRefund === "no") ||
      (this.state.confirmRefund === "")
    )
      this.props.updateInvoiceDetail({
        percentageRefund: 0,
        refundAmount: 0
      });
  };
  render() {
    return this.state.confirmRefund === "no" &&
      this.state.submitted === true ? (
      <Redirect to="/refundoverview" />
    ) : this.state.confirmRefund === "yes" && this.state.submitted === true ? (
      <Redirect to="/refundoverview" />
    ) : (
      <div>
        <RefundConfirmForm
          value={this.state}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
/*mapStateToProps is used for selecting part of data from the store.
gettig InvoiceDetails from the store*/
const mapStateToProps = state => {
  return {
    InvoiceDetails: state.InvoiceDetails
  };
};
export default connect(mapStateToProps, {
  loadInvoiceDetail,
  updateInvoiceDetail
})(RefundConfirmContainer);

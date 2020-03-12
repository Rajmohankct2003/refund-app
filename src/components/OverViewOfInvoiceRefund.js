import React from "react";
import { connect } from "react-redux";
import {
  loadInvoiceDetail
} from "../actions/RefundInvoice";
import { Link } from "react-router-dom";

//This component is used to display overview of the invoice refunded .
function OverViewOfInvoiceRefund(props) {
  if (!props.InvoiceDetails)
    return "No Invoice Available";
  return (
    <React.Fragment>
      <h2>Overview of Refunded Invoice Items:</h2>
        <table role="table" >
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader">Sender</th>
              <th role="columnheader">Invoice_No</th>
              <th role="columnheader">Description</th>
              <th role="columnheader">Amount</th>
              <th role="columnheader">Refund %</th>
              <th role="columnheader">Refund Amount</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
              {props.InvoiceDetails &&
                props.InvoiceDetails.map(invoicedetail => {
                  return (
                    <tr role="row" className="invoice1">
                      <td role="cell">{invoicedetail.sender}</td>
                      <td role="cell">{invoicedetail.invoice_no}</td>
                      <td role="cell">{invoicedetail.description}</td>
                      <td role="cell">{invoicedetail.amount}</td>
                      <td role="cell">{invoicedetail.percentageRefund}</td>
                      <td role="cell">{invoicedetail.refundAmount}</td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
      {/* </div> */}
    
      <Link to={`/qrscan`} className="link">Scan QR-Code</Link>
    </React.Fragment>
  );
}

// mapStateToProps is used for selecting part of data from the store.
// gettig InvoiceDetails and PercentageRefund from the store
const mapStateToProps = state => {
  return {
    InvoiceDetails: state.InvoiceDetails,
  };
};
export default connect(mapStateToProps, {
  loadInvoiceDetail,
})(OverViewOfInvoiceRefund);

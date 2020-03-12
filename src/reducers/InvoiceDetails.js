import {
  GET_INVOICE_DETAIL,
  UPDATE_INVOICE_DETAIL
} from "../actions/RefundInvoice";
//store the detail of invoice to be refunded
export default (state = [], action = {}) => {
  switch (action.type) {
    case GET_INVOICE_DETAIL:
      return [...state, JSON.parse(action.invoicedata)];

    case UPDATE_INVOICE_DETAIL:
      state[state.length - 1].percentageRefund =
        action.newinvoicedata.percentageRefund;
      state[state.length - 1].refundAmount = action.newinvoicedata.refundAmount;
      return state;
    default:
      return state;
  }
};

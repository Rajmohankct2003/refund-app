// action which will be dispatched for getting invoicedetail
const invoiceDetailFetched = invoicedata => {
  return {
    type: GET_INVOICE_DETAIL,
    invoicedata
  };
};

/* action to get the invoicedetail when the supplier
 scans the QR code through the camera */

export const loadInvoiceDetail = invoicedata => dispatch => {
  return dispatch(invoiceDetailFetched(invoicedata));
};

// action which will be dispatched for updating invoicedetail
const invoiceDetailUpdated = newinvoicedata => {
  return {
    type: UPDATE_INVOICE_DETAIL,
    newinvoicedata
  };
};

/* action to update invoicedetail with refunded amount and percentage 
value to be refunded */

export const updateInvoiceDetail = newinvoicedata => dispatch => {
  return dispatch(invoiceDetailUpdated(newinvoicedata));
};

// exporting all the dispatched actions.
export const GET_INVOICE_DETAIL = "GET_INVOICE_DETAIL";
export const UPDATE_INVOICE_DETAIL = "UPDATE_INVOICE_DETAIL";

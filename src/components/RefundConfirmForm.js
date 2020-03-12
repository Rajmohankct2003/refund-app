import React from "react";

export default function RefundConfirmForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onSubmit} className="formItems">
        <p>Do you want to refund the invoice? </p>
        <div>
          <label>
            Yes:{" "}
          </label>
          <input
            type="radio"
            value="yes"
            name="confirmRefund"
            onChange={props.onChange}
          ></input>
        </div>
        <div>
          <label>
            No :{" "}
          </label>
          <input
            type="radio"
            value="no"
            name="confirmRefund"
            onChange={props.onChange}
          ></input>
        </div>
        <div>
          <label>
            <br />
            How much percentage do you want to refund?
            <br />
          </label>
          <input
            type="text"
            className="inputText"
            name="percentageRefund"
            onChange={props.onChange}
            value={props.value.percentageRefund}
            placeholder="Enter refund percentage"
          ></input>
        </div>
        <input type="submit" className="button"></input>
      </form>
    </React.Fragment>
  );
}

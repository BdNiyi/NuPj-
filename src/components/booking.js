import React from "react";
import Bookingform from "./bookingform";

const Booking = (props) => {
  return (
    <Bookingform
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      SubmitForm={props.SubmitForm}
    />
  );
};

export default Booking;

import React, { useState } from "react";

const Bookingform = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };
  const handleOnChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                type="date"
                required
                onChange={(e) => handleOnChange(e.target.value)}
              />
            </div>
            {/*  for time selection */}

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            {/* for number of guests */}

            <div>
              <label htmlFor="book-guests">Number of guest:</label>
              <input
                type="text"
                id="book-guests"
                min={1}
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>

            {/* For Ocassion */}

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Hangout</option>
                <option>Family Dinner</option>
              </select>
            </div>

            {/* for Submit Button */}
            <div className="btnReceive">
              <input
                aria-label="on Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default Bookingform;

import classes from "./EventsSearch.module.css";

import Button from "../ui/Button";
import { useRef } from "react";
function EventsSearch(params) {
  const monthRef = useRef();
  const yearRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    params.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">Jan</option>
            <option value="2">Fab</option>
            <option value="3">Mar</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
        <Button>Search</Button>
      </div>
    </form>
  );
}

export default EventsSearch;

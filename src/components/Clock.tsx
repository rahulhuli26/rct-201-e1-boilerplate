import React from "react";

type Props = {
  //  TODO
  label: string;
  hours: number;
  minutes: number;
  seconds: number;
};

const Clock = (props: Props) => {
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        {props.label}
        
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {props.hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {props.minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {props.seconds}
        </span>
    </div>
  );
};

export default Clock;

import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./calendar";
import cn from "./cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./Appointment.css";
export default function Calendar({ setSelectDate, selectDate }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  return (
    <div className="flex gap-10 sm:divide-x justify-center   items-center sm:flex-row flex-col">
      <div className="">
        <div className="flex lg:w-[350px]   justify-between items-center">
          <h1 className="select-none text-[#07332F] text-2xl font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-2  items-center ">
            <div className="p-4  btn border rounded-lg border-[#07332F]">
              <GrFormPrevious
                className=" cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
            </div>
            <div className="p-4 btn border rounded-lg border-[#07332F]">
              <GrFormNext
                className="  cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-[#07332F] select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-[#F7A582] text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 rounded-md grid place-content-center hover:bg-[#07332F] hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

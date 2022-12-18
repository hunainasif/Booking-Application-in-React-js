import React, { useState } from "react";
import KingBedIcon from "@mui/icons-material/KingBed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useHistory } from "react-router-dom";
 

export default function Banner() {
  const [openOption, setOpenOption] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  
  const [destination,setDestination]=useState("")

  const [option, setOptions] = useState({
    adult: 2,
    children: 1,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const hanldeOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
    const history=useHistory()
  const hanldeClick=()=>{
    history.push("/hotels",{destination,option,date})
  }
  return (
    <div className=" h-3/4  relative bg-[url('https://q-xx.bstatic.com/xdata/images/xphoto/3000x1033/180907220.jpeg?k=f9ea45cc02cc617033a05a4a88ee816c57fe190590cfb3d268e7a524e1b43c76&o=')] object-cover bg-no-repeat">
      <div className="container text-white w-3/4 m-auto py-4 ">
        <span className=" text-2xl">Offer ends in 10 days</span>
        <h1 className="text-5xl py-3 font-bold w-3/4">
          Save 30% or more with Black Friday Deals
        </h1>
        <p className="text-4xl w-2/3 py-4">
          From seaside villas to city homes, book the perfect stay for less
        </p>
        <button className="p-2 my-11 text-lg bg-blue-700 text-white w-20">
          Find !
        </button>
      </div>
      <div className="search  justify-between items-center bg-white absolute left-[10.5rem] bottom-[-1.5rem]  w-3/4 m-auto rounded-lg p-3 flex border-2 border-solid border-yellow-400">
        <div className="searchItem space-x-1 text-gray-400">
          <KingBedIcon />
          <input
            type="text"
            placeholder="Where are you going?"
            className=" focus:outline-none"
            onChange={e=>setDestination(e.target.value)}
          />
        </div>
        <div className=" relativesearchItem space-x-1 flex justify-between items-center text-gray-400">
          <CalendarMonthIcon className="cursor-pointer" />
          <span
            onClick={() => {
              setOpenDate(!openDate);
            }}
            className=""
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              className="absolute  top-[4.3rem]"
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          )}
        </div>
        <div className="searchItem space-x-2 flex justify-between items-center text-gray-400 ">
          <PersonIcon />
          <span
            onClick={() => {
              setOpenOption(!openOption);
            }}
            className=" relative"
          >
            {`${option.adult} ${option.adult <= 1 ? "adult" : "adults"} ${
              option.children
            } ${option.children <= 1 ? "child" : "children"} ${option.room} ${
              option.room <= 1 ? "room" : "rooms"
            }`}{" "}
          </span>

          {openOption && (
            <div className="options top-[4.4rem] flex flex-col w-64 absolute bg-white border-2 px-3">
              <div className="optionItem   my-4 border-solid flex items-center justify-between text-black">
                <span>Adult</span>
                <div className="op  space-x-1  flex justify-between items-center px-2">
                  <button
                    disabled={option.adult <= 1}
                    className="px-2 py-1 border-2 rounded"
                    onClick={() => {
                      hanldeOption("adult", "d");
                    }}
                  >
                    -
                  </button>
                  <span>{option.adult}</span>
                  <button
                    className="px-2 py-1 border-2 rounded"
                    onClick={() => {
                      hanldeOption("adult", "i");
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem  my-4   flex items-center justify-between text-black">
                <span>Children</span>
                <div className="op  space-x-1 flex justify-between items-center px-2">
                  <button
                    disabled={option.children <= 1}
                    className="px-2 py-1 border-2 rounded"
                    onClick={() => {
                      hanldeOption("children", "d");
                    }}
                  >
                    -
                  </button>
                  <span>{option.children}</span>
                  <button
                    className="px-2 py-1 border-2 rounded"
                    onClick={() => {
                      hanldeOption("children", "i");
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem   my-4 flex items-center justify-between text-black">
                <span>Room</span>
                <div className="op space-x-1 flex justify-between items-center px-2">
                  <button
                    disabled={option.room <= 1}
                    className="px-2 py-1 border-2 rounded"
                    onClick={() => {
                      hanldeOption("room", "d");
                    }}
                  >
                    -
                  </button>
                  <span>{option.room}</span>
                  <button
                    className="px-2 py-1 border-2 rounded"
                    onClick={() => {
                      hanldeOption("room", "i");
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button onClick={hanldeClick} className=" text-white text-lg py-2 my-0 w-24 bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
}

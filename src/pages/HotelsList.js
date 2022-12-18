import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mail from "../components/Mail";
import Navbar from "../components/Navbar";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

export default function HotelsList() {
  const location=useLocation()
  console.log(location)
  const [openDate,setOpenDate]=useState(false)
  const [destination,setDestination]=useState(location.state.destination)
  const [date,setDate]=useState(location.state.date)
  const [option,setOption]=useState(location.state.option)
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container w-3/4 m-auto flex space-x-4 mt-4">
        <div className="search basis-1/4 h-1/2 sticky  top-8 mt-4    bg-yellow-500">
          <h1 className="text-lg font-bold px-3">Search</h1>
          <div className="px-3 item">
            <label htmlFor="">Destination</label>
            <input type="text" placeholder={destination} className="text-black w-48 p-2" />
          </div>
          <div className="px-3 item flex relative flex-col">
            <label htmlFor="">Check in Date</label>
            <input onClick={()=>{setOpenDate(!openDate)}} type="text" placeholder={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}  className="text-black w-48 p-2"/>
          {openDate && <DateRange 
              className="absolute top-16 left-0"
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />}

          </div>
          <span className="px-3 text-lg font-bold">Options</span>
          <div className="px-3 item flex flex-col">
            <label htmlFor="">Min Price Per Night</label>
            <input type="text" className="text-black w-48 p-2" />
          </div>
          <div className="px-3 item flex flex-col">
            <label htmlFor="">Max Price Per Night</label>
            <input type="text" className="text-black w-48 p-2" />
          </div>
          <div className="px-3 item flex flex-col">
            <label htmlFor="">Adult</label>
            <input type="number" placeholder={option.adult} min={1} className=" w-8 " />
          </div>
          <div className="px-3 item flex flex-col">
            <label htmlFor=""   >Children</label>
            <input type=" number" placeholder={option.children} className="w-8" />
          </div>
          <div className="px-3 item flex flex-col">
            <label htmlFor="" >Room</label>
            <input type="number"  placeholder={option.room} min={1} className="w-8" />
          </div>

        </div>
        {/* Hotels List */}
        <div className="hotelsList basis-3/4">
          <div className="item border-2 mb-4 flex justify-between">
            <img
              className="m-3 w-60 border-2 border-black"
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />

            <div className="desc flex flex-col py-4">
              <h2 className="text-xl font-bold">
                The Other House - South Kensington
              </h2>
              <span className="text-lg font-light">
                Kensington and Chelsea, London
              </span>
              <p className="text-lg text-justify ">
                Welcome to The Other House, your home in South Kensington,
                perfectly located close to Hyde Park and Knightsbridge and on
                the doorstep of some of London’s most iconic cultural landmarks.
              </p>
            </div>
            <div className="details p-3 flex flex-col ">
              <div>
                <h1>Wonderful</h1>
                <span>100 reviews</span>
              </div>
              <button className="bg-black my-2 w-11 text-white p-2 rounded">
                9.2
              </button>
              <button className="p-2 w-24 h-8 bg-blue-500 text-white text-[13px]">
                Show Prices
              </button>
            </div>
          </div>
          <div className="item border-2 mb-4 flex justify-between">
            <img
              className="m-3 w-60 border-2 border-black"
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />

            <div className="desc flex flex-col py-4">
              <h2 className="text-xl font-bold">
                The Other House - South Kensington
              </h2>
              <span className="text-lg font-light">
                Kensington and Chelsea, London
              </span>
              <p className="text-lg text-justify ">
                Welcome to The Other House, your home in South Kensington,
                perfectly located close to Hyde Park and Knightsbridge and on
                the doorstep of some of London’s most iconic cultural landmarks.
              </p>
            </div>
            <div className="details p-3 flex flex-col ">
              <div>
                <h1>Wonderful</h1>
                <span>100 reviews</span>
              </div>
              <button className="bg-black my-2 w-11 text-white p-2 rounded">
                9.2
              </button>
              <button className="p-2 w-24 h-8 bg-blue-500 text-white text-[13px]">
                Show Prices
              </button>
            </div>
          </div>
          <div className="item border-2 mb-4 flex justify-between">
            <img
              className="m-3 w-60 border-2 border-black"
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />

            <div className="desc flex flex-col py-4">
              <h2 className="text-xl font-bold">
                The Other House - South Kensington
              </h2>
              <span className="text-lg font-light">
                Kensington and Chelsea, London
              </span>
              <p className="text-lg text-justify ">
                Welcome to The Other House, your home in South Kensington,
                perfectly located close to Hyde Park and Knightsbridge and on
                the doorstep of some of London’s most iconic cultural landmarks.
              </p>
            </div>
            <div className="details p-3 flex flex-col ">
              <div>
                <h1>Wonderful</h1>
                <span>100 reviews</span>
              </div>
              <button className="bg-black my-2 w-11 text-white p-2 rounded">
                9.2
              </button>
              <button className="p-2 w-24 h-8 bg-blue-500 text-white text-[13px]">
                Show Prices
              </button>
            </div>
          </div>
          <div className="item border-2 mb-4 flex justify-between">
            <img
              className="m-3 w-60 border-2 border-black"
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />

            <div className="desc flex flex-col py-4">
              <h2 className="text-xl font-bold">
                The Other House - South Kensington
              </h2>
              <span className="text-lg font-light">
                Kensington and Chelsea, London
              </span>
              <p className="text-lg text-justify ">
                Welcome to The Other House, your home in South Kensington,
                perfectly located close to Hyde Park and Knightsbridge and on
                the doorstep of some of London’s most iconic cultural landmarks.
              </p>
            </div>
            <div className="details p-3 flex flex-col ">
              <div>
                <h1>Wonderful</h1>
                <span>100 reviews</span>
              </div>
              <button className="bg-black my-2 w-11 text-white p-2 rounded">
                9.2
              </button>
              <button className="p-2 w-24 h-8 bg-blue-500 text-white text-[13px]">
                Show Prices
              </button>
            </div>
          </div>
          <div className="item border-2 mb-4 flex justify-between">
            <img
              className="m-3 w-60 border-2 border-black"
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />

            <div className="desc flex flex-col py-4">
              <h2 className="text-xl font-bold">
                The Other House - South Kensington
              </h2>
              <span className="text-lg font-light">
                Kensington and Chelsea, London
              </span>
              <p className="text-lg text-justify ">
                Welcome to The Other House, your home in South Kensington,
                perfectly located close to Hyde Park and Knightsbridge and on
                the doorstep of some of London’s most iconic cultural landmarks.
              </p>
            </div>
            <div className="details p-3 flex flex-col ">
              <div>
                <h1>Wonderful</h1>
                <span>100 reviews</span>
              </div>
              <button className="bg-black my-2 w-11 text-white p-2 rounded">
                9.2
              </button>
              <button className="p-2 w-24 h-8 bg-blue-500 text-white text-[13px]">
                Show Prices
              </button>
            </div>
          </div>
          <div className="item border-2 mb-4 flex justify-between">
            <img
              className="m-3 w-60 border-2 border-black"
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />

            <div className="desc flex flex-col py-4">
              <h2 className="text-xl font-bold">
                The Other House - South Kensington
              </h2>
              <span className="text-lg font-light">
                Kensington and Chelsea, London
              </span>
              <p className="text-lg text-justify ">
                Welcome to The Other House, your home in South Kensington,
                perfectly located close to Hyde Park and Knightsbridge and on
                the doorstep of some of London’s most iconic cultural landmarks.
              </p>
            </div>
            <div className="details p-3 flex flex-col ">
              <div>
                <h1>Wonderful</h1>
                <span>100 reviews</span>
              </div>
              <button className="bg-black my-2 w-11 text-white p-2 rounded">
                9.2
              </button>
              <button className="p-2 w-24 h-8 bg-blue-500 text-white text-[13px]">
                Show Prices
              </button>
            </div>
          </div>
          <div className="item border-2 mb-4 flex justify-between">
            <img
              className="m-3 w-60 border-2 border-black"
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />

            <div className="desc flex flex-col py-4">
              <h2 className="text-xl font-bold">
                The Other House - South Kensington
              </h2>
              <span className="text-lg font-light">
                Kensington and Chelsea, London
              </span>
              <p className="text-lg text-justify ">
                Welcome to The Other House, your home in South Kensington,
                perfectly located close to Hyde Park and Knightsbridge and on
                the doorstep of some of London’s most iconic cultural landmarks.
              </p>
            </div>
            <div className="details p-3 flex flex-col ">
              <div>
                <h1>Wonderful</h1>
                <span>100 reviews</span>
              </div>
              <button className="bg-black my-2 w-11 text-white p-2 rounded">
                9.2
              </button>
              <button className="p-2 w-24 h-8 bg-blue-500 text-white text-[13px]">
                Show Prices
              </button>
            </div>
          </div>
          <div className="item border-2 mb-4 flex justify-between">
            <img
              className="m-3 w-60 border-2 border-black"
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />

            <div className="desc flex flex-col py-4">
              <h2 className="text-xl font-bold">
                The Other House - South Kensington
              </h2>
              <span className="text-lg font-light">
                Kensington and Chelsea, London
              </span>
              <p className="text-lg text-justify ">
                Welcome to The Other House, your home in South Kensington,
                perfectly located close to Hyde Park and Knightsbridge and on
                the doorstep of some of London’s most iconic cultural landmarks.
              </p>
            </div>
            <div className="details p-3 flex flex-col ">
              <div>
                <h1>Wonderful</h1>
                <span>100 reviews</span>
              </div>
              <button className="bg-black my-2 w-11 text-white p-2 rounded">
                9.2
              </button>
              <button className="p-2 w-24 h-8 bg-blue-500 text-white text-[13px]">
                Show Prices
              </button>
            </div>
          </div>
        </div>
      </div>
      <Mail/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

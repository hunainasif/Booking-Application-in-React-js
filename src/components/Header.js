import React from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
export default function Header() {
  return (
    <div className='bg-[#003580] py-5 '>
        <div className="list flex w-3/4 m-auto gap-8 justify-center ">
            <div className="listItem text-white space-x-2 p-1 rounded border-2  border-white border-solid">
                <HotelIcon/>
                <span>Hotels</span>
            </div>
            <div className="listItem text-white space-x-2">
                <FlightIcon/>
                <span>Flights</span>
            </div>
            <div className="listItem text-white space-x-2">
                <LocalTaxiIcon/>
                <span>Taxis</span>
            </div>
            <div className="listItem text-white space-x-2">
                <FlightTakeoffIcon/>
                <span>AirPort</span>
            </div>
        </div>
    </div>
  )
}

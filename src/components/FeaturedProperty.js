import React from "react";

export default function FeaturedProperty() {
  return (
    <div className="w-3/4 m-auto pt-6   ">
      <h1 className="text-center text-4xl py-5 border-b-2 mb-3">
        Featured Properties
      </h1>
      <div className="first flex space-x-3 ">
        <div className="propertyItem w-1/2 flex flex-col">
          <img
            className="object-cover"
            src="https://cf.bstatic.com/xdata/images/hotel/max500/30565641.jpg?k=5aa6e2c62d9f84253c10d3c625617a70d8a1e93579091081e1229850934bc556&o="
            alt=""
          />
          <span className="text-xl">Nishat Hotel</span>
          <span className="text-lg">Lahore</span>
          <span>Starting from $ 100</span>
          <div className="flex space-x-2 items-center py-2">
            <button className="p-2 text-white bg-blue-700 rounded">8.3</button>
            <span>Excellent</span>
            <span>80 reviews</span>
          </div>
        </div>
        <div className="propertyItem w-1/2 flex flex-col">
          <img
            className="object-cover"
            src="https://cf.bstatic.com/xdata/images/hotel/max500/30565641.jpg?k=5aa6e2c62d9f84253c10d3c625617a70d8a1e93579091081e1229850934bc556&o="
            alt=""
          />
          <span className="text-xl">Nishat Hotel</span>
          <span className="text-lg">Lahore</span>
          <span>Starting from $ 100</span>
          <div className="flex space-x-2 items-center py-2">
            <button className="p-2 text-white bg-blue-700 rounded">8.3</button>
            <span>Excellent</span>
            <span>80 reviews</span>
          </div>
        </div>
      </div>
      <div className="second mt-4 flex space-x-3 ">
        <div className="propertyItem w-1/2 flex flex-col ">
          <img
            className="object-cover"
            src="https://cf.bstatic.com/xdata/images/hotel/max500/30565641.jpg?k=5aa6e2c62d9f84253c10d3c625617a70d8a1e93579091081e1229850934bc556&o="
            alt=""
          />
          <span className="text-xl"> Nishat Hotel</span>
          <span className="text-lg">Lahore</span>
          <span>Starting from $ 100</span>
          <div className="flex space-x-2 items-center py-2">
            <button className="p-2 text-white bg-black rounded">8.3</button>
            <span>Excellent</span>
            <span>80 reviews</span>
          </div>
        </div>
        <div className="propertyItem w-1/2 flex flex-col ">
          <img
            className="object-cover"
            src="https://cf.bstatic.com/xdata/images/hotel/max500/30565641.jpg?k=5aa6e2c62d9f84253c10d3c625617a70d8a1e93579091081e1229850934bc556&o="
            alt=""
          />
          <span className="text-xl"> Nishat Hotel</span>
          <span className="text-lg">Lahore</span>
          <span>Starting from $ 100</span>
          <div className="flex space-x-2 items-center py-2">
            <button className="p-2 text-white bg-black rounded">8.3</button>
            <span>Excellent</span>
            <span>80 reviews</span>
          </div>
        </div>
        <div className="propertyItem w-1/2 flex flex-col ">
          <img
            className="object-cover"
            src="https://cf.bstatic.com/xdata/images/hotel/max500/30565641.jpg?k=5aa6e2c62d9f84253c10d3c625617a70d8a1e93579091081e1229850934bc556&o="
            alt=""
          />
          <span className="text-xl"> Nishat Hotel</span>
          <span className="text-lg">Lahore</span>
          <span>Starting from $ 100</span>
          <div className="flex space-x-2 items-center py-2">
            <button className="p-2 text-white bg-black rounded">8.3</button>
            <span>Excellent</span>
            <span>80 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

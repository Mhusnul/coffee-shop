import React from "react";
import layout from "../../assets/cofe.png";

function Menu() {
  const menuItems = [
    {
      name: "CAFFE LATTE",
      description: "Fresh brewed coffee and steamed milk",
      price: "$2.95",
      isNew: true,
    },
    {
      name: "CAFFE MOCHA",
      description: "Espresso With Milk, and Whipped Cream",
      price: "$3.67",
    },
    {
      name: "WHITE CHOCOLATE MOCHA",
      description: "Espresso, White Chocolate, Milk, Ice and Cream",
      price: "$2.79",
    },
    {
      name: "CAFFE AMERICANO",
      description: "Espresso Shots and Light Layer of Crema",
      price: "$3.06",
    },
    {
      name: "CAPPUCCINO",
      description: "Espresso, and Smoothed Layer of Foam",
      price: "$4.03",
    },
    {
      name: "VANILLA LATTE",
      description: "Espresso Milk With Flavor and Cream",
      price: "$3.65",
    },
    {
      name: "ICED CARAMEL LATTE",
      description: "Espresso, Milk, Ice and Caramel Sauce",
      price: "$4.67",
    },
    {
      name: "ESPRESSO MACCHIATO",
      description: "Rich Espresso With Milk and Foam",
      price: "$2.98",
    },
    {
      name: "CARAMEL MACCHIATO",
      description: "Espresso, vanilla flavored syrup and milk",
      price: "$2.54",
    },
    {
      name: "ICED SMOKED LATTE",
      description: "Espresso, Ice, with smoked butterscotch",
      price: "$3.05",
      isNew: true,
    },
    {
      name: "ICED CAFFE MOCHA",
      description: "Espresso, bittersweet mocha sauce, milk and ice",
      price: "$2.60",
    },
    {
      name: "ICED GINGERBREAD LATTE",
      description: "Espresso, Milk, Ice, and Gingerbread Flavor",
      price: "$3.92",
    },
  ];

  const drinks = menuItems.slice(0, 6);
  const desserts = menuItems.slice(6);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="z-50">
        <div className="text-center mb-8">
          <h1 className="text-[#B2CD9C] font-semibold italic">
            What Happens Here
          </h1>
          <p className="text-4xl font-bold text-[#F0F2BD] uppercase">
            explore our menu
          </p>
          <hr className=" w-16 mt-4 text-[#F0F2BD] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div>
            {drinks.map((item, index) => (
              <div className="flex justify-between mb-2" key={index}>
                <div className="">
                  <h2 className="text-[#F0F2BD] font-semibold">{item.name}</h2>
                  <hr className="text-[#F0F2BD]" />
                  <p className="text-[#B2CD9C]">{item.description}</p>
                </div>
                <div className="text-right text-[#F0F2BD]">
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {desserts.map((item, index) => (
              <div className="flex justify-between mb-2" key={index}>
                <div className="">
                  <h2 className="text-[#F0F2BD] font-semibold">{item.name}</h2>
                  <hr className="text-[#F0F2BD]" />
                  <p className="text-[#B2CD9C]">{item.description}</p>
                </div>
                <div className="text-right text-[#F0F2BD]">
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0  ">
        <img className="blur-sm" src={layout} alt="cofe" />
      </div>
    </div>
  );
}

export default Menu;

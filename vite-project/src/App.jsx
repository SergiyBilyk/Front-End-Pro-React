import * as React from "react";
import Costs from "./components/Costs";
import CostForm from "./components/NewCosts/CostForm";
import { useState } from "react";

const INITIAL_COSTS = [
  {
    date: new Date(2020, 8, 8),
    name: "Black box",
    amount: 238,
    id: 1,
  },
  {
    date: new Date(2020, 11, 11),
    name: "Bike",
    amount: 697.89,
    id: 2,
  },
  {
    date: new Date(2022, 4, 2),
    name: "Laptop",
    amount: 256.55,
    id: 3,
  },
  {
    date: new Date(2023, 7, 11),
    name: "Phone",
    amount: 986.46,
    id: 4,
  },
];

function App() {
  const [costsData, setCostsData] = useState(INITIAL_COSTS);

  const dataHandle = (costData) => {
    setCostsData((prevState) => {
      return [costData, ...prevState];
    });
  };

  return (
    <div className="wrap">
      <CostForm dataHandle={dataHandle} />
      <Costs costs={costsData} />
    </div>
  );
}
export default App;

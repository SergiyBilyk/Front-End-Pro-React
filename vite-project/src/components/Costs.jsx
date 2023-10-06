import React from "react";
import CostList from "./CostList";
import Card from "./Card";
import { useState } from "react";
import CostsFilter from "./CostsFilter";
import CostsDiagram from "./CostsDiagram";
import "./Costs.css";

const Costs = (props) => {
  const [year, setYear] = useState("2020");
  const onChangeYear = (changeYear) => {
    setYear(changeYear);
  };

  const filteredCosts = props.costs.filter((cost)=> {
    return year === cost.date.getFullYear().toString();
  });

  return (
    <li>
      <Card className="costs">
        <CostsFilter year={year} onChangeYear={onChangeYear} />
        <CostsDiagram costs={filteredCosts} />
        <CostList cost={filteredCosts} />
      </Card>
    </li>
  );
};

export default Costs;

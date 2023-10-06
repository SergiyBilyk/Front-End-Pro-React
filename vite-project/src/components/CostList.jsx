import React from "react";
import CostItem from "./CostItem";

const CostList = (props) => {
  if (props.cost.length === 0) {
    return <p>В цьому році витрат немає</p>;
  }

  return (
    <ul className="cost-list">
      {props.cost.map((cost, index) => (
        <CostItem
          key={index}
          date={cost.date}
          name={cost.name}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;

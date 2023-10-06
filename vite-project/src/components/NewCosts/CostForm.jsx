import React from "react";
import NewCost from "./NewCost";
import "./CostForm.css";
import { useState } from "react";

const CostForm = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandle = () => setOpenForm(!openForm);

  const onSaveCostData = (inputCostData) => {
    const costData = {
      ...inputCostData,
    };
    props.dataHandle(costData);
  };
  return (
    <div className="new-cost">
      {openForm === false ? (
        <button onClick={openFormHandle}>Додати нові витрати</button>
      ) : (
        <NewCost
          saveCostData={onSaveCostData}
          openForm={openFormHandle}
          changeForm={setOpenForm}
        ></NewCost>
      )}
    </div>
  );
};

export default CostForm;

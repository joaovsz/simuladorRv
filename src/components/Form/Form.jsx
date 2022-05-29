import React from "react";
import { InputForms } from "./Inputs/Input-forms";
import "./Form.css";

export const Form = () => {
  return (
    <>
      <div id="form">
        <div className="form-group">
          <InputForms />
        </div>
      </div>
    </>
  );
};

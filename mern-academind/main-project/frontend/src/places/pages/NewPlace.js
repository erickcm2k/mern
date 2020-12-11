import React from "react";
import Input from "../../shared/components/formelements/Input";
import "./NewPlace.css";
const NewPlace = () => {
  return (
    <form action="" className="place-form">
      <Input type="text" label="Title" element="input" />
    </form>
  );
};
export default NewPlace;

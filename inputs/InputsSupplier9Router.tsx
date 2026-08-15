import React from "react";
import InputsSupplier9Screens from "./InputsSupplier9Screens";

export default function InputsSupplier9Router(){
  const route = window.location.hash.replace(/^#/, "").replace(/^inputs-?/, "");
  return <InputsSupplier9Screens screen={route || "dashboard"}/>;
}

import React from "react";
import ServiceRequest10Screens from "./ServiceRequest10Screens";

export default function ServiceRequest10ScreenRouter(){
  const route=window.location.hash.replace(/^#/,"");
  const key=route.replace(/^svc-/,"");
  return <ServiceRequest10Screens screen={key||"marketplace"}/>;
}

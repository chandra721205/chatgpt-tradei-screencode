import React from "react";
import Producer55Screens from "./Producer55Screens";

export default function Producer55ScreenRouter(){
  const route=window.location.hash.replace(/^#/,"");
  const key=route.replace(/^producer-/,"");
  return <Producer55Screens screen={key||"dashboard"}/>;
}

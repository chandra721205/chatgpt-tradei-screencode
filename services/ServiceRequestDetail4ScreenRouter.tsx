import React from "react";
import ServiceRequestDetail4Screens from "./ServiceRequestDetail4Screens";

export default function ServiceRequestDetail4ScreenRouter(){
  const route=window.location.hash.replace(/^#/,'');
  const key=route.replace(/^svc-/,'');
  return <ServiceRequestDetail4Screens screen={key||'marketplace'} />;
}

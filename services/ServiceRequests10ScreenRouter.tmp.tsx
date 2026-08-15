import React from "react";
import ServiceRequests10Screens from "./ServiceRequests10Screens";

export default function ServiceRequests10ScreenRouterTmp() {
  const route = window.location.hash.replace(/^#/, "");
  const screen = route.startsWith("svc-") ? route.slice(4) : "marketplace";
  return <ServiceRequests10Screens screen={screen} />;
}

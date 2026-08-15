import React from "react";
import ServiceProvider8Screens from "./ServiceProvider8Screens";

export default function ServiceProvider8ScreenRouter() {
  const route = window.location.hash.replace(/^#/, "");
  const key = route.replace(/^service-provider-?/, "") || "dashboard";
  return <ServiceProvider8Screens screen={(key || "dashboard") as any} />;
}

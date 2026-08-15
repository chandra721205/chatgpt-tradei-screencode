import React, { useEffect, useState } from "react";
import { verifierRoutes } from "./Verifier9Screens";

export default function Verifier9ScreenRouter() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "verifier-dashboard");
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace(/^#/, "") || "verifier-dashboard");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const Screen = verifierRoutes[route] ?? verifierRoutes["verifier-dashboard"];
  return <Screen />;
}

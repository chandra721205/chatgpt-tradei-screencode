import { useEffect, useState } from "react";
import { labRoutes } from "./Lab8Screens";

export default function Lab8ScreenRouter() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "lab-dashboard");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace(/^#/, "") || "lab-dashboard");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Screen = labRoutes[route];
  if (!Screen) {
    window.location.hash = "lab-dashboard";
    return null;
  }
  return <Screen />;
}

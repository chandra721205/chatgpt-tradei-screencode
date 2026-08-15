import { useEffect, useState, type ComponentType } from "react";
import { adminRoutes } from "./Admin20Screens";

export default function Admin20ScreenRouter() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "admin-dashboard");
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace(/^#/, "") || "admin-dashboard");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const Screen: ComponentType<{ onBack?: () => void }> | undefined = adminRoutes[route];
  if (!Screen) {
    window.location.hash = "admin-dashboard";
    return null;
  }
  return <Screen onBack={() => window.history.back()} />;
}

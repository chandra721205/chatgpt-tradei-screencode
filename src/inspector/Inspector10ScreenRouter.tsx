import { useEffect, useState, type ComponentType } from "react";
import { inspectorRoutes } from "./Inspector10Screens";

export default function Inspector10ScreenRouter() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "inspector-dashboard");
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace(/^#/, "") || "inspector-dashboard");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const Screen: ComponentType<{ onBack?: () => void }> | undefined = inspectorRoutes[route];
  if (!Screen) {
    window.location.hash = "inspector-dashboard";
    return null;
  }
  return <Screen onBack={() => window.history.back()} />;
}

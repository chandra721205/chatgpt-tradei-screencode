import { createRoot } from "react-dom/client";
import Admin20ScreenRouter from "./app/components/Admin20ScreenRouter";
import AuthOnboarding11ScreenRouter from "./auth/AuthOnboarding11ScreenRouter";
import Producer55ScreenRouter from "./producer/Producer55ScreenRouter";
import "./styles/index.css";

function RootRouter(){
  const route=window.location.hash.replace(/^#/,'');
  if(route.startsWith('auth-') || route==='auth') return <AuthOnboarding11ScreenRouter />;
  if(route.startsWith('producer-') || route==='producer') return <Producer55ScreenRouter />;
  return <Admin20ScreenRouter />;
}

createRoot(document.getElementById("root")!).render(<RootRouter />);

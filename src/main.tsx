import { createRoot } from "react-dom/client";
import Admin20ScreenRouter from "./app/components/Admin20ScreenRouter";
import AuthOnboarding11ScreenRouter from "./auth/AuthOnboarding11ScreenRouter";
import KycMarket14Router from "./modules/kyc-market/KycMarket14Screens";
import "./styles/index.css";

function RootRouter(){
  const route=window.location.hash.replace(/^#/,'');
  if(route.startsWith('auth-') || route==='auth') return <AuthOnboarding11ScreenRouter />;
  if(route.startsWith('kyc-') || route==='kyc' || route==='market-prices') return <KycMarket14Router />;
  return <Admin20ScreenRouter />;
}

createRoot(document.getElementById("root")!).render(<RootRouter />);

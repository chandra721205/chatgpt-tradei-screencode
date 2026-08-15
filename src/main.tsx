import { createRoot } from "react-dom/client";
import Admin20ScreenRouter from "./app/components/Admin20ScreenRouter";
import AuthOnboarding11ScreenRouter from "./auth/AuthOnboarding11ScreenRouter";
import KycMarket14Router from "./modules/kyc-market/KycMarket14Screens";
import CommissionAgentProducers8Router from "./src/modules/commission-agent/CommissionAgentProducers8Screens";
import Buyer5ScreenRouter from "./modules/buyer/Buyer5Screens";
import "./styles/index.css";

function RootRouter(){
  const route=window.location.hash.replace(/^#/,'');
  if(route.startsWith('auth-') || route==='auth') return <AuthOnboarding11ScreenRouter />;
  if(route.startsWith('kyc-') || route==='kyc' || route==='market-prices') return <KycMarket14Router />;
  if(route.startsWith('ca-producers') || route.startsWith('ca-add-producer') || route.startsWith('ca-producer-profile') || route.startsWith('ca-confirm-arrival') || route.startsWith('ca-advance-ledger') || route.startsWith('ca-producer-activity') || route.startsWith('ca-report-discrepancy') || route.startsWith('ca-issue-advance')) return <CommissionAgentProducers8Router />;
  if(route.startsWith('buyer-') || route==='buyers') return <Buyer5ScreenRouter />;
  return <Admin20ScreenRouter />;
}

createRoot(document.getElementById("root")!).render(<RootRouter />);

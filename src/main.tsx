import { createRoot } from "react-dom/client";
import Admin20ScreenRouter from "./app/components/Admin20ScreenRouter";
import AuthOnboarding11ScreenRouter from "./auth/AuthOnboarding11ScreenRouter";
import KycMarket14Router from "./modules/kyc-market/KycMarket14Screens";
import CommissionAgentProducers8Router from "./src/modules/commission-agent/CommissionAgentProducers8Screens";
import Buyer5ScreenRouter from "./modules/buyer/Buyer5Screens";
import ListingAuction10ScreenRouter from "./src/modules/listing-auction/ListingAuction10Screens";
import WeighmentSettlement7Router from "./modules/weighment/WeighmentSettlement7Screens";
import BillDiscounting5Screens from "./src/modules/bill-discounting/BillDiscounting5Screens";
import "./styles/index.css";

function RootRouter(){
  const route=window.location.hash.replace(/^#/,'');
  if(route.startsWith('auth-') || route==='auth') return <AuthOnboarding11ScreenRouter />;
  if(route.startsWith('kyc-') || route==='kyc' || route==='market-prices') return <KycMarket14Router />;
  if(route.startsWith('ca-producers') || route.startsWith('ca-add-producer') || route.startsWith('ca-producer-profile') || route.startsWith('ca-confirm-arrival') || route.startsWith('ca-advance-ledger') || route.startsWith('ca-producer-activity') || route.startsWith('ca-report-discrepancy') || route.startsWith('ca-issue-advance')) return <CommissionAgentProducers8Router />;
  if(route.startsWith('buyer-') || route==='buyers') return <Buyer5ScreenRouter />;
  if(route.startsWith('listing-') || route.startsWith('auction-')) return <ListingAuction10ScreenRouter />;
  if(route.startsWith('ca-weighment') || route.startsWith('ca-start-weighment') || route.startsWith('ca-weighing') || route.startsWith('ca-weight-variance') || route.startsWith('ca-final-weight') || route.startsWith('ca-generate-bill') || route.startsWith('ca-settlement')) return <WeighmentSettlement7Router />;
  if(route.startsWith('bill-')) {
    const id = route.replace(/^bill-/, '').replace(/-/g, ':');
    return <BillDiscounting5Screens screen={id} />;
  }
  return <Admin20ScreenRouter />;
}

createRoot(document.getElementById("root")!).render(<RootRouter />);

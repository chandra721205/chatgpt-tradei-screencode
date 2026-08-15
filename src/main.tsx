import { createRoot } from "react-dom/client";
import Admin20ScreenRouter from "./app/components/Admin20ScreenRouter";
import AuthOnboarding11ScreenRouter from "./auth/AuthOnboarding11ScreenRouter";
import KycMarket14Router from "./modules/kyc-market/KycMarket14Screens";
import CommissionAgentProducers8Router from "./src/modules/commission-agent/CommissionAgentProducers8Screens";
import Buyer5ScreenRouter from "./modules/buyer/Buyer5Screens";
import ListingAuction10ScreenRouter from "./src/modules/listing-auction/ListingAuction10Screens";
import WeighmentSettlement7Router from "./modules/weighment/WeighmentSettlement7Screens";
import BillDiscounting5Screens from "./src/modules/bill-discounting/BillDiscounting5Screens";
import BillDiscounting5ScreensAlt from "./src/modules/bill-discounting/BillDiscounting5ScreensAlt";
import BillDiscountingDetailed2Screens from "./src/modules/bill-discounting/BillDiscountingDetailed2Screens";
import StorageSample4Screens from "./src/modules/storage-sample/StorageSample4Screens";
import TraderMarket12Screens from "./src/modules/trader-market/TraderMarket12Screens";
import TraderNegotiations7Router from "./src/modules/trader-negotiations/TraderNegotiations7Screens";
import "./styles/index.css";

function RootRouter(){
  const route=window.location.hash.replace(/^#/,'');
  if(route.startsWith('auth-') || route==='auth') return <AuthOnboarding11ScreenRouter />;
  if(route.startsWith('kyc-') || route==='kyc' || route==='market-prices') return <KycMarket14Router />;
  if(route.startsWith('ca-producers') || route.startsWith('ca-add-producer') || route.startsWith('ca-producer-profile') || route.startsWith('ca-confirm-arrival') || route.startsWith('ca-advance-ledger') || route.startsWith('ca-producer-activity') || route.startsWith('ca-report-discrepancy') || route.startsWith('ca-issue-advance')) return <CommissionAgentProducers8Router />;
  if(route.startsWith('buyer-') || route==='buyers') return <Buyer5ScreenRouter />;
  if(route.startsWith('listing-') || route.startsWith('auction-')) return <ListingAuction10ScreenRouter />;
  if(route.startsWith('ca-weighment') || route.startsWith('ca-start-weighment') || route.startsWith('ca-weighing') || route.startsWith('ca-weight-variance') || route.startsWith('ca-final-weight') || route.startsWith('ca-generate-bill') || route.startsWith('ca-settlement')) return <WeighmentSettlement7Router />;
  if(route.startsWith('bill-detail-')) {
    const id = route.replace(/^bill-detail-/, '').replace(/-/g, ':');
    return <BillDiscounting5ScreensAlt screen={id} />;
  }
  if(route.startsWith('bill-detailed-')) {
    const id = route.replace(/^bill-detailed-/, '').replace(/-/g, ':');
    return <BillDiscountingDetailed2Screens screen={id} />;
  }
  if(route.startsWith('bill-')) {
    const id = route.replace(/^bill-/, '').replace(/-/g, ':');
    return <BillDiscounting5Screens screen={id} />;
  }
  if(route.startsWith('storage-') || route.startsWith('sample-')) {
    const id = route.replace(/^(?:storage|sample)-/, '').replace(/-/g, ':');
    return <StorageSample4Screens screen={id} />;
  }
  if(route.startsWith('trader-negotiations-') || route.startsWith('trader-contract-') || route.startsWith('trader-amendment-') || route==='negotiations' || route==='contracts' || route==='request-amendment') {
    const id = route.replace(/^(?:trader-negotiations-|trader-contract-|trader-amendment-)/, '').replace(/-/g, ':') || '2041:206';
    return <TraderNegotiations7Router screen={id} />;
  }
  if(route.startsWith('trader-') || route==='marketplace' || route==='discover') {
    const id = route.replace(/^(?:trader-|marketplace|discover)-?/, '').replace(/-/g, ':') || '2041:194';
    return <TraderMarket12Screens screen={id} />;
  }
  return <Admin20ScreenRouter />;
}

createRoot(document.getElementById("root")!).render(<RootRouter />);

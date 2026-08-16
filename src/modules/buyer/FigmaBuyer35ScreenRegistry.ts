export type BuyerScreenRegistryEntry = {
  nodeId: string;
  title: string;
  figmaUrl: string;
  component: string;
  implementationStatus: "implemented" | "partial" | "blocked";
  visualVerification: "verified" | "pending" | "blocked";
};

const base = "https://www.figma.com/design/hKY3pin20vvMPcVAn3Yi6I/trade-app-master-copy---Copy---Copy-?node-id=";

const screens: Array<[number, string, string]> = [
  [277,"Buyer Dashboard","BuyerDashboard"],[278,"Post Requirement","PostRequirement"],[279,"RFQ Detail","RfqDetail"],[280,"Browse Lots","BrowseLots"],[281,"Live Bidding","LiveBidding"],
  [282,"Hire Inspector","HireInspector"],[283,"Inspection Report","InspectionReport"],[284,"Track Delivery","TrackDelivery"],[285,"Confirm Delivery","ConfirmDelivery"],[286,"Record Payment","RecordPayment"],
  [287,"Ledger","Ledger"],[288,"Rate Seller","RateSeller"],[289,"Raise Dispute","RaiseDispute"],[290,"Dispute Chat","DisputeChat"],[291,"Repeat Purchase","RepeatPurchase"],
  [292,"Lot Details","LotDetail"],[293,"Negotiation Chat","NegotiationChat"],[294,"Trade Contract","TradeContract"],[295,"Request Sample","RequestSample"],[296,"Weighment Certificate","WeighmentCert"],
  [297,"Lab Quality Report","LabReport"],[298,"Price History","PriceHistory"],[299,"Seller Profile","SellerProfile"],[300,"Order Details","OrderDetails"],[301,"Notifications","Notifications"],
  [302,"Buyer Profile","BuyerProfile"],[303,"KYC & Verification","KycStatus"],[304,"Help & Support","HelpSupport"],[305,"My Documents","Documents"],[306,"TRD Wallet","TrdWallet"],
  [307,"Market Feed","MarketFeed"],[308,"Advanced Search","AdvancedSearch"],[309,"My Addresses","Addresses"],[310,"Payment Methods","PaymentMethods"],[311,"Settings","Settings"],
];

export const figmaBuyer35ScreenRegistry: BuyerScreenRegistryEntry[] = screens.map(([id,title,component]) => ({
  nodeId: `2041:${id}`,
  title,
  component,
  implementationStatus: "partial",
  visualVerification: "pending",
  figmaUrl: `${base}2041-${id}`,
}));

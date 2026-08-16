# Figma Buyer 35-screen implementation status

Source Figma file: `hKY3pin20vvMPcVAn3Yi6I`
Branch: `figma-buyer-2041-262-276`

All 35 requested node IDs now have an individual React/TypeScript component and a direct route. The registry intentionally reports `partial` + `visualVerification: pending` because this environment cannot run the browser and perform a pixel-diff against the live Figma render. No screen is falsely marked pixel-perfect.

| # | Node | Screen | Component | Status |
|---:|---|---|---|---|
| 1 | 2041:277 | Buyer Dashboard | BuyerDashboard | Partial / visual diff pending |
| 2 | 2041:278 | Post Requirement | PostRequirement | Partial / visual diff pending |
| 3 | 2041:279 | RFQ Detail | RfqDetail | Partial / visual diff pending |
| 4 | 2041:280 | Browse Lots | BrowseLots | Partial / visual diff pending |
| 5 | 2041:281 | Live Bidding | LiveBidding | Partial / visual diff pending |
| 6 | 2041:282 | Hire Inspector | HireInspector | Partial / visual diff pending |
| 7 | 2041:283 | Inspection Report | InspectionReport | Partial / visual diff pending |
| 8 | 2041:284 | Track Delivery | TrackDelivery | Partial / visual diff pending |
| 9 | 2041:285 | Confirm Delivery | ConfirmDelivery | Partial / visual diff pending |
| 10 | 2041:286 | Record Payment | RecordPayment | Partial / visual diff pending |
| 11 | 2041:287 | Ledger | Ledger | Partial / visual diff pending |
| 12 | 2041:288 | Rate Seller | RateSeller | Partial / visual diff pending |
| 13 | 2041:289 | Raise Dispute | RaiseDispute | Partial / visual diff pending |
| 14 | 2041:290 | Dispute Chat | DisputeChat | Partial / visual diff pending |
| 15 | 2041:291 | Repeat Purchase | RepeatPurchase | Partial / visual diff pending |
| 16 | 2041:292 | Lot Details | LotDetail | Partial / visual diff pending |
| 17 | 2041:293 | Negotiation Chat | NegotiationChat | Partial / visual diff pending |
| 18 | 2041:294 | Trade Contract | TradeContract | Partial / visual diff pending |
| 19 | 2041:295 | Request Sample | RequestSample | Partial / visual diff pending |
| 20 | 2041:296 | Weighment Certificate | WeighmentCert | Partial / visual diff pending |
| 21 | 2041:297 | Lab Quality Report | LabReport | Partial / visual diff pending |
| 22 | 2041:298 | Price History | PriceHistory | Partial / visual diff pending |
| 23 | 2041:299 | Seller Profile | SellerProfile | Partial / visual diff pending |
| 24 | 2041:300 | Order Details | OrderDetails | Partial / visual diff pending |
| 25 | 2041:301 | Notifications | Notifications | Partial / visual diff pending |
| 26 | 2041:302 | Buyer Profile | BuyerProfile | Partial / visual diff pending |
| 27 | 2041:303 | KYC & Verification | KycStatus | Partial / visual diff pending |
| 28 | 2041:304 | Help & Support | HelpSupport | Partial / visual diff pending |
| 29 | 2041:305 | My Documents | Documents | Partial / visual diff pending |
| 30 | 2041:306 | TRD Wallet | TrdWallet | Partial / visual diff pending |
| 31 | 2041:307 | Market Feed | MarketFeed | Partial / visual diff pending |
| 32 | 2041:308 | Advanced Search | AdvancedSearch | Partial / visual diff pending |
| 33 | 2041:309 | My Addresses | Addresses | Partial / visual diff pending |
| 34 | 2041:310 | Payment Methods | PaymentMethods | Partial / visual diff pending |
| 35 | 2041:311 | Settings | Settings | Partial / visual diff pending |

## Routes

Use hashes such as `#buyer35-2041-277`, `#buyer35-2041-310`, and `#buyer35-2041-311`. `#buyer35` opens the dashboard.

## Verification gate

A screen should only be changed from `partial` to `implemented`/`verified` after rendering the React app at the Figma 375px artboard size and comparing it against the corresponding Figma node for typography, spacing, imagery, iconography, overflow, and interactive states.

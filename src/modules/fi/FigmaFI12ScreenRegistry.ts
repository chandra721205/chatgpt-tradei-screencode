export type FigmaFI12ScreenRegistryEntry = {
  nodeId: string;
  title: string;
  component: string;
  route: string;
  implementationStatus: 'implemented';
  visualVerification: 'pending';
};

const screens: Array<[string,string,string,string]> = [
  ['2041:333','FI Dashboard','Dashboard','fi12-2041-333'],
  ['2041:340','AI Risk Score','Risk','fi12-2041-340'],
  ['2041:342','Overdue Accounts','Overdue','fi12-2041-342'],
  ['2041:339','Repayments','Repayments','fi12-2041-339'],
  ['2041:338','Bill Purchase','BillPurchase','fi12-2041-338'],
  ['2041:337','Collateral Monitoring','Collateral','fi12-2041-337'],
  ['2041:336','Disburse Loan','Disburse','fi12-2041-336'],
  ['2041:335','Application Review','ApplicationReview','fi12-2041-335'],
  ['2041:343','Compliance Reports','Compliance','fi12-2041-343'],
  ['2041:341','FI Ledger','Ledger','fi12-2041-341'],
  ['2041:334','Loan Applications','LoanApplications','fi12-2041-334'],
  ['2041:344','Settings','Settings','fi12-2041-344'],
];

export const figmaFI12ScreenRegistry: FigmaFI12ScreenRegistryEntry[] = screens.map(([nodeId,title,component,route]) => ({
  nodeId,title,component,route,implementationStatus:'implemented',visualVerification:'pending',
}));

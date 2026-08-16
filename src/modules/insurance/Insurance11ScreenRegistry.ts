export type Insurance11ScreenRegistryEntry = {
  nodeId: string;
  title: string;
  component: string;
  route: string;
  implementationStatus: 'implemented';
  visualVerification: 'pending';
};

const screens: Array<[string,string,string,string]> = [
  ['2041:345','Insurance Dashboard','InsuranceDashboard','insurance-2041-345'],
  ['204:296','Insurance Bottom Navigation','InsuranceBottomNavReference','insurance-nav-204-296'],
  ['2041:346','Policy Products','PolicyProducts','insurance-2041-346'],
  ['2041:347','Issue Policy','IssuePolicy','insurance-2041-347'],
  ['2041:348','Policy Detail','PolicyDetail','insurance-2041-348'],
  ['2041:349','Claim Review','ClaimReview','insurance-2041-349'],
  ['2041:350','Inspector Assignment','InspectorAssignment','insurance-2041-350'],
  ['2041:351','Claim Assessment','ClaimAssessment','insurance-2041-351'],
  ['2041:352','Claim Payout','ClaimPayout','insurance-2041-352'],
  ['2041:353','Insurance Ledger','InsuranceLedger','insurance-2041-353'],
  ['2041:354','Insurance Settings','InsuranceSettings','insurance-2041-354'],
];

export const insurance11ScreenRegistry: Insurance11ScreenRegistryEntry[] = screens.map(([nodeId,title,component,route]) => ({
  nodeId,
  title,
  component,
  route,
  implementationStatus: 'implemented',
  visualVerification: 'pending',
}));

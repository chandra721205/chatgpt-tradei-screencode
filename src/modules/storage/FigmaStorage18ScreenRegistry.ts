export type Storage18ScreenRegistryEntry = {
  nodeId: string;
  title: string;
  component: string;
  route: string;
  implementationStatus: 'implemented';
  visualVerification: 'pending';
};

const screens: Array<[string, string, string, string]> = [
  ['2041:312','Storage Dashboard','StorageDashboard','storage18-2041-312'],
  ['2041:313','Inward Requests','InwardRequests','storage18-2041-313'],
  ['2041:314','Inward Scanning','InwardScanning','storage18-2041-314'],
  ['2041:315','Assign Storage Location','AssignStorage','storage18-2041-315'],
  ['2041:316','Bond Generated','BondGenerated','storage18-2041-316'],
  ['2041:317','Storage Inventory','StorageInventory','storage18-2041-317'],
  ['2041:318','Lot Detail','LotDetail','storage18-2041-318'],
  ['2041:320','Rent Invoice','RentInvoice','storage18-2041-320'],
  ['2041:321','Outward Requests','OutwardRequests','storage18-2041-321'],
  ['2041:322','Outward Scanning','OutwardScanning','storage18-2041-322'],
  ['2041:323','NOC Generated','NocGenerated','storage18-2041-323'],
  ['2041:324','Sample Requests','SampleRequests','storage18-2041-324'],
  ['2041:327','Condition Monitoring','ConditionMonitoring','storage18-2041-327'],
  ['2041:328','Storage Ledger','StorageLedger','storage18-2041-328'],
  ['2041:329','Storage Rating','StorageRating','storage18-2041-329'],
  ['2041:330','Capacity Update','CapacityUpdate','storage18-2041-330'],
  ['2041:331','Storage Settings','StorageSettings','storage18-2041-331'],
  ['2041:332','Storage Reports','StorageReports','storage18-2041-332'],
];

export const figmaStorage18ScreenRegistry: Storage18ScreenRegistryEntry[] = screens.map(([nodeId, title, component, route]) => ({
  nodeId, title, component, route, implementationStatus: 'implemented', visualVerification: 'pending',
}));

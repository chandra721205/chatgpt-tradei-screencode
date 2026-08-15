import React from "react";

type Props = { onBack?: () => void };

const nav = ["Home", "Users", "Finance", "Disputes", "Settings"];

function Shell({ title, children, active = "Finance", back = true }: { title: string; children: React.ReactNode; active?: string; back?: boolean }) {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-[#0f172a]">
      <div className="mx-auto flex min-h-screen w-full max-w-[375px] flex-col">
        <header className="bg-[#1e293b] pb-4 text-white">
          <div className="flex h-11 items-center justify-between px-6 text-[14px] font-semibold"><span>9:41</span><span className="text-[11px] opacity-90">▮▮◉</span></div>
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">{back && <button onClick={onBack} className="text-xl" aria-label="Back">‹</button>}<div><div className="text-[18px] font-bold">{title}</div></div></div>
            <span className="text-lg">◔</span>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">{children}</main>
        <footer className="border-t border-[#e2e8f0] bg-white px-2 py-2">
          <div className="flex items-center justify-between">
            {nav.map(x => <div key={x} className={`flex w-[64px] flex-col items-center gap-1 text-[10px] ${active===x ? "font-semibold text-[#3b82f6]" : "text-[#64748b]"}`}><div className="text-base">{x === "Home" ? "⌂" : x === "Users" ? "♙" : x === "Finance" ? "▣" : x === "Disputes" ? "ⓘ" : "⚙"}</div><span>{x}</span></div>)}
          </div>
          <div className="mx-auto mt-2 h-[5px] w-[134px] rounded-full bg-[#e2e8f0]" />
        </footer>
      </div>
    </div>
  );
}
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) { return <div className={`rounded-[10px] border border-[#e2e8f0] bg-white p-3 ${className}`}>{children}</div>; }
function Btn({ children, danger = false, outline = false }: { children: React.ReactNode; danger?: boolean; outline?: boolean }) { return <button className={`rounded-[7px] px-3 py-2 text-xs font-bold ${outline ? "border border-[#cbd5e1] bg-white text-[#334155]" : danger ? "bg-[#ef4444] text-white" : "bg-[#3b82f6] text-white"}`}>{children}</button>; }
function ListScreen({ title, items, active = "Finance" }: { title: string; items: string[]; active?: string }) { return <Shell title={title} active={active}><div className="space-y-2">{items.map(x => <Card key={x}><div className="flex items-center justify-between"><div><div className="text-sm font-semibold">{x}</div><div className="text-xs text-[#64748b]">Platform event record</div></div><span className="text-xs text-[#64748b]">Details ›</span></div></Card>)}</div></Shell>; }

export function AdminDashboard({ onBack }: Props) {
  return <Shell title="Admin Dashboard" active="Home" back={false} onBack={onBack}>
    <div className="mb-4 flex gap-3 overflow-x-auto">{[["Total Users", "12,450", "+340 New 7d"], ["Total GMV", "₹85 Cr", "Rev ₹4.25 Cr"], ["TRD Supply", "850M", "of 1B Cap"]].map(([a,b,c]) => <Card key={a} className="min-w-[160px]"><div className="text-xs text-[#64748b]">{a}</div><div className="mt-2 text-xl font-bold">{b}</div><div className="text-[11px] text-[#64748b]">{c}</div></Card>)}</div>
    <div className="space-y-4">
      <section><h2 className="mb-2 text-base font-semibold">Pending Approvals</h2><div className="grid grid-cols-3 gap-2">{[["KYC","12"],["Entities","5"],["Rectify","8"]].map(([a,b]) => <Card key={a} className="flex items-center justify-between"><span className="text-xs font-semibold text-[#334155]">{a}</span><b className="text-xs">{b}</b></Card>)}</div></section>
      <section><h2 className="mb-2 text-base font-semibold">System Alerts</h2><div className="space-y-2"><div className="rounded-lg border border-[#ef4444] bg-[#fee2e2] p-3 text-xs">⚠ Smart contract upgrade pending V2.4</div><div className="rounded-lg border border-[#f59e0b] bg-[#fef3c7] p-3 text-xs">▣ Storage node #4 latent heartbeat</div></div></section>
      <section><h2 className="mb-2 text-base font-semibold">Quick Actions</h2><div className="grid grid-cols-2 gap-2">{["User Mgmt","KYC Queue","Dispute Center","System"].map(x => <button key={x} className="rounded-lg border border-[#e2e8f0] bg-white p-4 text-xs font-semibold">{x}</button>)}</div></section>
    </div>
  </Shell>;
}

export function AdminUsers({ onBack }: Props) { return <Shell title="User Management" active="Users" onBack={onBack}><Card><div className="rounded-lg bg-[#f8fafc] p-3 text-xs text-[#64748b]">⌕ Search by name or ID...</div><div className="mt-3 flex gap-2"><span className="rounded bg-[#dbeafe] px-2 py-1 text-[10px] text-[#3b82f6]">All Roles</span><span className="rounded border px-2 py-1 text-[10px]">KYC Pending</span><span className="rounded border px-2 py-1 text-[10px]">Active</span></div></Card><div className="mt-3 space-y-px">{[["Rajesh Kumar","Producer","12/01/24"],["Priya Singh","Consumer","15/01/24"],["Amit Patel","Logistics","05/12/23"]].map(([n,r,d]) => <div key={n} className="flex items-center gap-3 border border-[#e2e8f0] bg-white p-3"><div className="h-9 w-9 rounded-full bg-[#e2e8f0]"/><div className="flex-1"><div className="text-sm font-semibold">{n}</div><div className="text-[11px] text-[#64748b]">{r} • {d}</div></div><span className="text-xs text-[#64748b]">◉ ◌</span></div>)}</div><div className="mt-3 flex justify-between rounded border bg-white p-3 text-xs font-semibold"><span>3 users selected</span><span className="flex gap-4"><span className="text-blue-600">Export CSV</span><span className="text-red-500">Suspend</span></span></div></Shell>; }

export function AdminKyc({ onBack }: Props) { return <Shell title="KYC Approval Queue" active="Users" onBack={onBack}><div className="space-y-3">{[["Rajesh Kumar","92%"],["Sunil Verma","86%"]].map(([n,p]) => <Card key={n}><div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-[#e2e8f0]"/><div className="flex-1"><div className="text-sm font-semibold">{n}</div><div className="text-[11px] text-[#64748b]">Producer • KYC</div></div><span className="text-xs text-[#22c55e]">{p}</span></div><div className="mt-3 flex gap-2"><Btn>Approve</Btn><Btn danger>Reject</Btn><Btn outline>Request Resubmission</Btn></div></Card>)}</div></Shell>; }

export function AdminEntity({ onBack }: Props) { return <Shell title="Entity Management" onBack={onBack}><div className="flex gap-2 rounded border bg-white p-2 text-xs">{["All","Storage","Finance","Logistics"].map((x,i)=><span key={x} className={`flex-1 pb-2 text-center ${i===0 ? "border-b-2 border-[#3b82f6] text-[#3b82f6]" : "text-[#64748b]"}`}>{x}</span>)}</div><div className="mt-3 rounded-lg border bg-white p-3 text-xs text-[#64748b]">⌕ Search entity name...</div><div className="mt-3 space-y-3">{[["AgroTrans Logistics","Suresh Babu","Active","Logistics"],["Farmer Finance Co.","Anita Iyer","Under Review","Finance"],["Central Silos","Vikram Seth","Pending","Storage"]].map(([n,p,s,t]) => <Card key={n}><div className="flex items-center justify-between"><div><div className="text-sm font-bold">{n}</div><div className="text-xs text-[#64748b]">{p}</div></div><span className={`rounded px-2 py-1 text-[10px] font-semibold ${s==='Active'?'bg-green-50 text-green-600':'bg-amber-50 text-amber-600'}`}>{s}</span></div><div className="mt-3 flex justify-between text-xs"><span className="rounded border border-blue-500 px-2 py-1 text-blue-600">{t}</span><span className="flex gap-4"><span className="text-blue-600">Edit</span><span className="text-red-500">Deactivate</span></span></div></Card>)}</div></Shell>; }

export function AdminRectification({ onBack }: Props) { return <Shell title="Rectification Requests" onBack={onBack}><div className="flex rounded bg-[#e2e8f0] p-1 text-xs"><span className="flex-1 rounded bg-white py-2 text-center font-bold">V1 Basic</span><span className="flex-1 py-2 text-center">V2 Tradie</span><span className="flex-1 py-2 text-center">V3 Self</span></div><Card className="mt-3 border-amber-400"><div className="flex justify-between"><div><div className="text-sm font-bold">Priya Agencies</div><div className="text-xs text-[#64748b]">GST Number Change</div></div><span className="rounded bg-amber-50 px-2 py-1 text-[10px] text-amber-600">Pending</span></div><div className="mt-3 rounded bg-[#f8fafc] p-3 text-xs"><div>Current Value <span className="text-red-500 line-through">27AADCP1234A1Z5</span></div><div className="mt-2">New Value <span className="font-bold text-green-600">27AADCP9999A1Z5</span></div></div><div className="mt-3 text-xs">Reason: Mismatch in GST portal vs initial registration documents.</div><div className="mt-3 grid grid-cols-2 gap-2"><Btn>Approve</Btn><Btn danger>Reject</Btn></div></Card></Shell>; }

export const AdminAILog = (p: Props) => <ListScreen {...p} title="AI Decision Log" items={["TX-902 • Approve - Tier 1 • 98%","TX-905 • Reject - Duplicate ID • 62%","TX-910 • Request Info - Blurry • 81%"]} />;
export const AdminDispute = (p: Props) => <ListScreen {...p} title="Dispute Center" active="Disputes" items={["D-124 • Rajesh K. vs TransLogi • Escalated","D-125 • Sita Farm vs Global Trade • Open","D-126 • Finance issue • Open"]} />;
export const AdminLedger = (p: Props) => <ListScreen {...p} title="Ledger Correction" items={["TX-902 • Correction pending","TX-905 • Amount mismatch","TX-910 • Fee adjustment"]} />;
export const AdminAudit = (p: Props) => <ListScreen {...p} title="Transaction Audit Trail" items={["Rajesh K. • Edit","System • Approval","Priya S. • Transfer","Amit P. • Login"]} />;
export const AdminBroadcast = (p: Props) => <ListScreen {...p} title="Notification Broadcast" active="Settings" items={["System Maintenance Notice","KYC Reminder","Market Update"]} />;
export const AdminFees = (p: Props) => <Shell {...p} title="Fee Configuration"><Card><div className="text-sm text-[#64748b]">Total Platform Revenue (MTD)</div><div className="mt-2 text-xl font-bold">₹4.25 Cr</div></Card><div className="mt-4"><h2 className="mb-2 font-semibold">Platform Fee Matrix</h2><Card className="p-0 overflow-hidden"><div className="grid grid-cols-[1fr_60px_60px] bg-[#f8fafc] p-3 text-[11px] text-[#64748b]"><span>Transaction Type</span><span className="text-right">Current</span><span className="text-right">New</span></div>{[["Spot Trade","0.50%","0.45%"],["Forward Contract","1.20%","1.20%"],["Storage","0.15%","0.20%"],["Finance","2.50%","2.50%"]].map(([a,b,c])=><div key={a} className="grid grid-cols-[1fr_60px_60px] items-center border-t border-[#e2e8f0] p-3 text-sm"><span>{a}</span><span className="text-right text-[#64748b]">{b}</span><span className="rounded border border-[#22c55e] p-1 text-right text-xs">{c}</span></div>)}</Card></div><Card className="mt-4"><div className="text-[11px] text-[#64748b]">Fee Collection Wallet</div><div className="mt-2 flex justify-between text-xs text-blue-600">0x7a2...f892 <span>⧉</span></div></Card><button className="mt-4 w-full rounded-lg bg-[#3b82f6] py-3 font-bold text-white">Update Rates</button><div className="mt-2 text-center text-[10px] text-[#94a3b8]">🔒 Requires Admin OTP & Biometric Verification</div></Shell>);
export const AdminSupply = (p: Props) => <Shell {...p} title="TRD Supply Monitor"><Card className="bg-[#1e293b] text-white"><div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-8 border-[#3b82f6] text-center"><div><div className="text-2xl font-bold">850M</div><div className="text-xs text-slate-300">Circulating</div></div></div><div className="mt-3 text-center text-xs text-slate-300">Max Cap: 1,000,000,000 TRD</div></Card><div className="mt-3 grid grid-cols-2 gap-3"><Card className="border-green-500 bg-green-50"><b className="text-green-600">MINT TRD</b><div className="mt-3 text-2xl">+</div><div className="text-xs">New Supply</div></Card><Card className="border-red-500 bg-red-50"><b className="text-red-600">BURN TRD</b><div className="mt-3 text-2xl">-</div><div className="text-xs">Deflationary</div></Card></div><Card className="mt-3"><div className="flex justify-between font-semibold"><span>Multi-Sig Queue</span><span className="text-xs text-amber-500">2 / 5 Signed</span></div>{["CEO Office","Compliance","Security Eng","Finance Lead","Ops Manager"].map((x,i)=><div key={x} className="flex justify-between border-b py-2 text-xs"><span>{x}</span><span className={i<2?"text-green-600":"text-[#94a3b8]"}>{i<2?"Signed":"Pending"}</span></div>)}</Card><div className="mt-3"><Btn>Execute Transaction</Btn></div></Shell>);
export const AdminContract = (p: Props) => <ListScreen {...p} title="Contract Registry" items={["TRDToken • Active","TradeLink escrow • Active","CA Commission • Draft"]} />;
export const AdminNetwork = (p: Props) => <ListScreen {...p} title="Network Infrastructure" items={["RPC-01 • 98%","RPC-02 • 97%","Blockchain Sync Height • 12,345,678","Storage 85% Full","Maintenance Actions"]} />;
export const AdminKeys = (p: Props) => <ListScreen {...p} title="API Key Management" items={["Stripe Finance • Active","Logistics Hub • Revoke","Old Analytics • Revoke"]} />;
export const AdminRoles = (p: Props) => <ListScreen {...p} title="Role Template Editor" items={["Logistics • Permissions Matrix","Finance • Permissions Matrix","Compliance • Permissions Matrix"]} />;
export const AdminSettings = (p: Props) => <ListScreen {...p} title="System Settings" items={["Session Settings","Financial Settings","Maintenance Mode","Backup Schedule"]} />;
export const AdminBackup = (p: Props) => <ListScreen {...p} title="Backup & Restore" items={["Last Backup • 2.4 GB","System Restore","Backup History"]} />;
export const AdminSupport = (p: Props) => <ListScreen {...p} title="Support Tickets" items={["Rajesh K. • KYC Error • Urgent","Priya S. • Finance • High","Amit P. • System • Resolved"]} />;
export const AdminReports = (p: Props) => <Shell {...p} title="Report Builder"><Card><div className="text-xs text-[#64748b]">Data Source</div><div className="mt-2 flex gap-2">{["Users","Transactions","Tokens","Disputes"].map((x,i)=><span key={x} className={`rounded px-2 py-1 text-[10px] ${i===1 ? "bg-[#3b82f6] text-white" : "bg-[#f8fafc] text-[#64748b]"}`}>{x}</span>)}</div><div className="mt-4 text-xs text-[#64748b]">Select Fields</div><div className="mt-2 space-y-2">{["Tx ID","Amount (₹)","Status","Timestamp","Entity Name","Payment Method","Currency"].map((x,i)=><label key={x} className="flex items-center gap-2 text-xs"><input type="checkbox" defaultChecked={i<3}/>{x}</label>)}</div><div className="mt-4 text-xs text-[#64748b]">Filters</div><div className="mt-2 rounded bg-[#f8fafc] p-2 text-xs">Amount &gt; 100,000</div><div className="mt-4"><Btn>Run Report</Btn></div><div className="mt-2 grid grid-cols-2 gap-2"><Btn outline>Export CSV</Btn><Btn outline>Export PDF</Btn></div></Card><Card className="mt-3"><div className="font-semibold">Saved Reports</div>{["Monthly Settlement Log","Quarterly Dispute Summary"].map(x=><div key={x} className="flex justify-between border-b py-2 text-xs"><span>{x}</span><span>↗</span></div>)}</Card></Shell>);

export const adminRoutes: Record<string, React.ComponentType<Props>> = {
  "admin-dashboard": AdminDashboard,
  "admin-users": AdminUsers,
  "admin-kyc": AdminKyc,
  "admin-entity": AdminEntity,
  "admin-rectification": AdminRectification,
  "admin-ai": AdminAILog,
  "admin-dispute": AdminDispute,
  "admin-ledger": AdminLedger,
  "admin-audit": AdminAudit,
  "admin-broadcast": AdminBroadcast,
  "admin-fees": AdminFees,
  "admin-supply": AdminSupply,
  "admin-contract": AdminContract,
  "admin-network": AdminNetwork,
  "admin-keys": AdminKeys,
  "admin-roles": AdminRoles,
  "admin-settings": AdminSettings,
  "admin-backup": AdminBackup,
  "admin-support": AdminSupport,
  "admin-reports": AdminReports,
};

import React, { useMemo, useState } from "react";

const C = {
  bg: "#f5f5f5",
  white: "#ffffff",
  text: "#212121",
  muted: "#757575",
  border: "#e0e0e0",
  orange: "#e65100",
  orangeSoft: "#fff3e0",
  green: "#2e7d32",
  greenSoft: "#e8f5e9",
  red: "#d32f2f",
  greySoft: "#eeeeee",
};

const Screen = ({ children, nodeId }: { children: React.ReactNode; nodeId: string }) => (
  <div data-node-id={nodeId} style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "Arial, sans-serif" }}>
    <div style={{ width: 375, minHeight: 812, margin: "0 auto", background: C.bg, display: "flex", flexDirection: "column" }}>{children}</div>
  </div>
);

const Header = ({ title, right, nodeId }: { title: string; right?: React.ReactNode; nodeId: string }) => (
  <>
    <div style={{ height: 44, padding: "14px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }} data-node-id={`${nodeId}-status`}>
      <span>9:41</span><span style={{ letterSpacing: 4 }}>⌁⌁</span>
    </div>
    <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }} data-node-id={nodeId}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ fontSize: 22 }}>‹</span><strong style={{ fontSize: 22 }}>{title}</strong></div>
      {right}
    </div>
  </>
);

const BottomNav = ({ active = "Home" }: { active?: string }) => (
  <div style={{ marginTop: "auto", background: C.white, borderTop: `1px solid ${C.border}`, display: "flex", padding: 8, height: 72 }}>
    {["Home", "Orders", "Advances", "Stock", "Account"].map((item) => (
      <div key={item} style={{ flex: 1, textAlign: "center", fontSize: 10, color: item === active ? C.orange : C.muted }}><div style={{ fontSize: 20, lineHeight: "28px" }}>{item === "Account" ? "◯" : item === "Orders" ? "▣" : item === "Advances" ? "₹" : item === "Stock" ? "◇" : "⌂"}</div>{item.toUpperCase()}</div>
    ))}
  </div>
);

const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, boxShadow: "0 2px 2px rgba(0,0,0,.02)", ...style }}>{children}</div>
);

const Chip = ({ children, active }: { children: React.ReactNode; active?: boolean }) => (
  <span style={{ display: "inline-flex", padding: "6px 12px", borderRadius: 999, border: `1px solid ${active ? C.orange : C.border}`, background: active ? C.orangeSoft : C.white, color: active ? C.orange : C.muted, fontSize: 12 }}>{children}</span>
);

function Producers() {
  return <Screen nodeId="2041:132">
    <Header title="Producers" right={<div style={{ display: "flex", gap: 14, fontSize: 24 }}><span>⊕</span><span>⌕</span></div>} nodeId="44:20" />
    <div style={{ padding: "0 16px 12px" }}><div style={{ background: "#e8e8e8", borderRadius: 12, padding: "10px 12px", color: C.muted }}>⌕ &nbsp; Search by name, village, or mobile</div></div>
    <div style={{ display: "flex", gap: 8, padding: "0 16px 16px", overflow: "hidden" }}><Chip active>All</Chip><Chip>Advance Taken</Chip><Chip>Active</Chip><Chip>Inactive</Chip></div>
    <div style={{ display: "flex", gap: 8, padding: "0 16px 20px" }}>{[["Total Producers","12"],["Advance O/S","₹2.5L"],["Pending Sett.","₹3.8L"]].map(([l,v]) => <Card key={l} style={{ flex: 1, padding: 12 }}><div style={{ fontSize: 10, textTransform: "uppercase", color: C.muted }}>{l}</div><div style={{ fontWeight: 700, marginTop: 4 }}>{v}</div></Card>)}</div>
    <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 12 }}>
      <ProducerRow initials="RK" name="Rajesh Kumar" sub="Guntur Rural" status="ADVANCE TAKEN" color={C.orange} amount="₹50,000 outstanding" extra="₹3,29,650 pending" />
      <ProducerRow initials="SR" name="Suresh Reddy" sub="Tenali" status="ACTIVE" color={C.green} amount="₹0 advance" />
      <ProducerRow initials="RN" name="Ramesh Naidu" sub="Last sale: 3 months ago" status="INACTIVE" color={C.muted} />
    </div>
    <BottomNav active="Home" />
  </Screen>;
}

const ProducerRow = ({ initials, name, sub, status, color, amount, extra }: any) => <Card style={{ display: "flex", alignItems: "center", gap: 12 }}>
  <div style={{ width: 40, height: 40, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", background: `${color}18`, color, fontWeight: 700 }}>{initials}</div>
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}><strong style={{ fontSize: 15 }}>{name}</strong><span style={{ background: status === "ACTIVE" ? C.greenSoft : status === "INACTIVE" ? C.greySoft : C.orangeSoft, color, padding: "2px 8px", borderRadius: 4, fontSize: 10 }}>{status}</span></div>
    <div style={{ color: C.muted, fontSize: 13, marginTop: 2 }}>{sub}</div>
    {amount && <div style={{ color, fontWeight: 700, fontSize: 13, marginTop: 2 }}>{amount}</div>}
    {extra && <div style={{ color: C.muted, fontSize: 12 }}>{extra}</div>}
  </div>
  <span style={{ color: C.border, fontSize: 22 }}>›</span>
</Card>;

function AddProducer() {
  const [phone, setPhone] = useState("");
  return <Screen nodeId="2041:133"><Header title="Add Producer" nodeId="44:add" /><div style={{ padding: 16 }}>
    <div style={{ color: C.orange, fontSize: 12, marginBottom: 12 }}>● Step 1 of 2: Find Producer</div>
    <label style={{ fontSize: 11, color: C.muted }}>PRODUCER MOBILE NUMBER</label>
    <div style={{ display: "flex", gap: 8, marginTop: 6 }}><div style={{ border: `1px solid ${C.border}`, borderRadius: 8, padding: 12 }}>+91</div><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Enter Mobile" style={{ flex:1, border:`1px solid ${C.border}`, borderRadius:8, padding:12 }} /></div>
    <button style={{ width:"100%", marginTop: 10, padding:14, background:C.orange, color:C.white, border:0, borderRadius:8, fontWeight:700 }}>Search</button>
    <Card style={{ marginTop:16 }}><strong>Rajesh Kumar</strong><div style={{ color:C.muted, fontSize:12, marginTop:4 }}>Village: Guntur Rural</div><div style={{ fontSize:12 }}>KYC Status: Gold ✓</div><div style={{ color:C.orange, fontWeight:700, marginTop:3 }}>₹50,000 outstanding</div></Card>
    <button style={{ width:"100%", marginTop:16, padding:14, background:C.orange, color:C.white, border:0, borderRadius:8, fontWeight:700 }}>Send Request</button>
    <Card style={{ marginTop:12, background:C.orangeSoft }}><div style={{ fontSize:11, color:C.orange }}>OTP sent to producer’s mobile. Ask them to share it.</div><div style={{ display:"flex", gap:6, marginTop:12 }}>{Array.from({length:6}).map((_,i)=><div key={i} style={{ flex:1, height:38, border:`1px solid ${C.border}`, background:C.white, borderRadius:6 }} />)}</div></Card>
    <button style={{ width:"100%", marginTop:10, padding:14, background:C.orange, color:C.white, border:0, borderRadius:8, fontWeight:700 }}>Verify OTP</button>
  </div><BottomNav active="Account" /></Screen>;
}

function ProducerProfile(){
  return <Screen nodeId="2041:134"><Header title="Producer Profile" nodeId="44:p" right={<span>⋮</span>} /><div style={{ padding:16 }}>
    <div style={{ textAlign:"center" }}><div style={{ width:80,height:80,borderRadius:40,background:C.orangeSoft,border:`2px solid ${C.orange}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",color:C.orange,fontWeight:700,fontSize:28 }}>RK</div><h2 style={{margin:"10px 0 2px"}}>Rajesh Kumar</h2><div style={{fontSize:12,color:C.muted}}>Guntur Rural | Since Mar 2025</div><div style={{fontSize:12,color:C.green,fontWeight:700,marginTop:6}}>KYC: GOLD ✓ · ⭐ 4.8</div></div>
    <div style={{display:"flex",justifyContent:"space-around",padding:"12px 0",fontSize:10,color:C.orange}}><span>Overview</span><span>Tokens</span><span>Ledger</span><span>Activity</span></div>
    <Card><div style={{fontSize:12}}>Contact&nbsp;&nbsp;&nbsp;+91 98765 43210</div><div style={{fontSize:12}}>Total Sales YTD&nbsp;&nbsp;₹12,50,000</div><div style={{fontSize:12}}>Outstanding Advance&nbsp;&nbsp;<b style={{color:C.orange}}>₹50,000</b></div><div style={{fontSize:12}}>Pending Settlement&nbsp;&nbsp;₹3,29,650</div><div style={{fontSize:12}}>Last Transaction&nbsp;&nbsp;20 Jun 2025</div></Card>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12}}><button style={actionBtn}>Issue Advance</button><button style={actionBtn}>Record Payment</button><button style={{...actionBtn,gridColumn:"1/3"}}>View Settlements</button></div>
    <Card style={{marginTop:16}}><div style={{display:"flex",justifyContent:"space-between"}}><b>ACTIVITY</b><span style={{fontSize:10}}>REQUESTED</span></div><p style={{fontSize:12,color:C.muted}}>Producer has not shared activity data.</p><button style={outlineBtn}>Request Access</button></Card>
    <div style={{color:C.red,fontSize:11,textAlign:"center",marginTop:20}}>Deactivate Producer</div>
  </div><BottomNav active="Account" /></Screen>
}

function ConfirmArrival(){
  return <Screen nodeId="2041:135"><Header title="Confirm Arrival" nodeId="44:arr" /><div style={{padding:16}}><div style={{height:180,border:`2px dashed ${C.muted}`,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:C.muted}}>◫<br/>Scan transporter’s QR code</div><button style={outlineBtn}>Open Camera</button><Card style={{marginTop:16}}><b>ARRIVAL DETAILS</b><div style={{fontSize:12,marginTop:8}}>Token ID&nbsp;&nbsp; TRD-CHL-089234</div><div style={{fontSize:12}}>Producer&nbsp;&nbsp; Rajesh Kumar</div><div style={{fontSize:12}}>Crop&nbsp;&nbsp; Chilli (Teja) Grade A</div><div style={{fontSize:12}}>Vehicle&nbsp;&nbsp; AP28AB1234</div></Card><div style={{display:"flex",gap:10,marginTop:12}}>{[["BAGS","50"],["WEIGHT (KG)","2500"],["MOISTURE %","10%"]].map(([l,v])=><div key={l} style={{flex:1}}><div style={{fontSize:9,color:C.muted}}>{l}</div><input value={v} readOnly style={{width:"100%",boxSizing:"border-box",padding:10,border:`1px solid ${C.border}`,borderRadius:6}} /></div>)}</div><div style={{marginTop:16,color:C.red,background:C.orangeSoft,padding:12,borderRadius:8,fontSize:11}}>⚠ Expected 50 bags, received 48. Discrepancy detected. <button style={{float:"right",background:C.white,border:`1px solid ${C.orange}`,borderRadius:6}}>Dispute</button></div><button style={{...primaryBtn,marginTop:12}}>Confirm Arrival</button></div><BottomNav active="Orders" /></Screen>
}

function AdvanceLedger(){
  return <Screen nodeId="2041:136"><Header title="Advance Ledger" nodeId="44:led" right={<span>⇩</span>} /><div style={{padding:16}}><Card><b>Rajesh Kumar</b><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:8,fontSize:11}}><div>REPAID <b style={{color:C.red}}>₹0</b></div><div>DUE <b style={{color:C.orange}}>₹50,000</b></div></div></Card><div style={{marginTop:12}}>{[["20 Jun 25","Advance disbursement","+₹50,000"],["10 May 25","Repayment (cash)","-₹20,000"],["01 Apr 25","Advance disbursement","+₹50,000"]].map(([d,desc,amt])=><Card key={d} style={{marginBottom:8,display:"flex",justifyContent:"space-between"}}><div><div style={{fontSize:11,color:C.muted}}>{d}</div><div style={{fontSize:12}}>{desc}</div></div><b style={{color:amt.startsWith("+")?C.orange:C.green}}>{amt}</b></Card>)}</div><button style={{...primaryBtn,marginTop:12}}>Record Repayment</button><button style={{...outlineBtn,marginTop:10}}>Export PDF / Excel</button></div><BottomNav active="Advances" /></Screen>
}

function ProducerActivity(){ return <Screen nodeId="2041:137"><Header title="Producer Activity" nodeId="44:act" /><div style={{padding:16}}><Card><div style={{display:"flex",justifyContent:"space-between"}}><b>Rajesh Kumar</b><span style={{color:C.orange,fontSize:11}}>Advance outstanding: ₹50,000</span></div><div style={{marginTop:12,color:C.green,border:`1px solid ${C.green}`,padding:12,borderRadius:8,fontSize:11}}>Activity sharing: Active (consent given)<br/>Last updated: 2 hours ago <span style={{float:"right",color:C.red}}>REVOKE ACCESS</span></div></Card><div style={{marginTop:12}}>{[["Chilli (Teja) – North Field","Irrigation","19 Jun 2025, 8:00 AM"],["Fertilizer application","Applied Urea + NPK","16 Jun 2025"],["Pest scouting","No pests detected","15 Jun 2025"]].map(([t,s,d],i)=><div key={t} style={{display:"flex",gap:8,margin:"14px 0"}}><div style={{width:10,height:10,borderRadius:5,background:C.orange,marginTop:6}} /><div><b style={{fontSize:12}}>{t}</b><div style={{fontSize:10,color:C.muted}}>{s}</div><div style={{fontSize:10,color:C.muted}}>{d}</div></div></div>)}<div style={{height:70,background:"#ddd",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:C.muted}}>Plot GPS location</div><button style={{...outlineBtn,marginTop:12}}>Request More Data</button></div></Screen> }

function ReportDiscrepancy(){ return <Screen nodeId="2041:138"><Header title="Report Discrepancy" nodeId="44:591" /><div style={{padding:16}}><Card><div style={{fontSize:11,color:C.muted}}>Token</div><b>TRD-CHL-089234</b><div style={{fontSize:11,color:C.muted,marginTop:8}}>Producer</div><div>Rajesh Kumar</div><div style={{fontSize:11,color:C.muted,marginTop:8}}>Expected Summary</div><div>50 bags / 2,500 kg</div></Card>{[["50 bags","48","Difference: -2 bags"],["2,500 kg","2,400","Difference: -100 kg"],["≤10% Moisture","13%",""]].map(([exp,act,diff])=><Card key={exp} style={{marginTop:12}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}><div><div style={{fontSize:11,color:C.muted}}>Expected</div><div>{exp}</div></div><div><div style={{fontSize:11,color:C.muted}}>Actual</div><input value={act} readOnly style={{width:"100%",boxSizing:"border-box",padding:10,border:`1px solid ${C.orange}`,borderRadius:8,fontWeight:700}}/></div></div>{diff&&<div style={{color:C.red,fontWeight:700,fontSize:12,marginTop:10}}>{diff}</div>}</Card>)}<div style={{marginTop:14,fontSize:12,color:C.muted}}>Packaging Condition</div><div style={{display:"flex",gap:8,marginTop:6}}>{["Damaged","Torn","Wet","✓ OK"].map((x,i)=><Chip key={x} active={i===3}>{x}</Chip>)}</div><div style={{marginTop:14,fontSize:12,color:C.muted}}>Upload Evidence</div><div style={{display:"flex",gap:8,marginTop:6}}>{[1,2,3].map(n=><div key={n} style={{flex:1,height:80,border:`1px dashed ${C.border}`,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:C.muted}}>＋<br/>Photo {n}</div>)}</div><Card style={{marginTop:12,height:80,color:C.muted}}>Add any additional notes...</Card><div style={{marginTop:12,background:C.orangeSoft,padding:16,borderRadius:12}}><div style={{color:C.orange,textAlign:"center",fontSize:11}}>Enter producer OTP to confirm dispute notification</div><div style={{display:"flex",gap:6,marginTop:12}}>{Array.from({length:6}).map((_,i)=><div key={i} style={{flex:1,height:44,border:`1px solid ${C.orange}`,background:C.white,borderRadius:7}} />)}</div></div><button style={{...primaryBtn,marginTop:12}}>Submit Dispute</button><div style={{fontSize:10,color:C.muted,textAlign:"center",marginTop:8}}>If unresolved in 48h, dispute escalates to market yard authority.</div></div></Screen> }

function IssueAdvance(){ const [amount,setAmount]=useState("50,000"); return <Screen nodeId="2041:139"><Header title="Issue Advance" nodeId="44:adv" /><div style={{padding:16}}><Card><div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:40,height:40,borderRadius:20,background:C.orange,color:C.white,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>RK</div><div><b>Rajesh Kumar</b><div style={{fontSize:10,color:C.orange}}>Outstanding: ₹50,000 · Limit: ₹1,20,000</div></div></div></Card><Card style={{marginTop:12}}><div style={{fontSize:11,color:C.muted}}>Link to Token (recommended)</div><div style={{padding:10,border:`1px solid ${C.border}`,borderRadius:8,marginTop:6}}>TRD-123 – Chilli (2,500 kg)</div><div style={{fontSize:11,color:C.muted,marginTop:14}}>Advance Amount (₹)</div><input value={amount} onChange={e=>setAmount(e.target.value)} style={{width:"100%",boxSizing:"border-box",padding:14,border:`1px solid ${C.orange}`,borderRadius:8,fontSize:18,fontWeight:700,marginTop:6}}/><div style={{fontSize:10,color:C.orange,marginTop:6}}>Max: ₹80,000 based on credit limit</div><div style={{display:"flex",justifyContent:"space-between",marginTop:14,fontSize:11}}><span>Interest Rate</span><span>1.5% per month ⓘ</span></div><div style={{marginTop:12,padding:12,border:`1px solid ${C.orange}`,borderRadius:8,fontSize:11}}>Repayment will be automatically deducted from sale proceeds of linked token TRD-123.</div></Card><button style={{...primaryBtn,marginTop:12}}>Send Advance Request</button><div style={{marginTop:10,background:C.orangeSoft,padding:12,borderRadius:8,color:C.orange,fontSize:10,textAlign:"center"}}>OTP sent to Rajesh Kumar’s mobile (+91 98765 43210)</div><div style={{display:"flex",gap:6,marginTop:10}}>{Array.from({length:6}).map((_,i)=><div key={i} style={{flex:1,height:42,border:`1px solid ${C.orange}`,background:C.white,borderRadius:6}} />)}</div><button style={{...primaryBtn,marginTop:10}}>Confirm & Issue</button><Card style={{marginTop:10,background:C.greenSoft,color:C.green,fontSize:11}}>✓ Advance of ₹50,000 issued to Rajesh Kumar.</Card></div></Screen> }

const primaryBtn: React.CSSProperties = { width:"100%", padding:14, background:C.orange, color:C.white, border:0, borderRadius:8, fontWeight:700 };
const outlineBtn: React.CSSProperties = { width:"100%", padding:12, background:C.white, color:C.orange, border:`1px solid ${C.orange}`, borderRadius:8, fontWeight:700 };
const actionBtn: React.CSSProperties = { padding:12, background:C.white, color:C.orange, border:`1px solid ${C.orange}`, borderRadius:8, fontWeight:700 };

export default function CommissionAgentProducers8Router(){
  const [route] = useState(()=>window.location.hash.replace(/^#/,'') || 'ca-producers');
  const component = useMemo(()=>({
    'ca-producers': <Producers />,
    'ca-add-producer': <AddProducer />,
    'ca-producer-profile': <ProducerProfile />,
    'ca-confirm-arrival': <ConfirmArrival />,
    'ca-advance-ledger': <AdvanceLedger />,
    'ca-producer-activity': <ProducerActivity />,
    'ca-report-discrepancy': <ReportDiscrepancy />,
    'ca-issue-advance': <IssueAdvance />,
  } as Record<string, React.ReactNode>)[route] || <Producers />,
  [route]);
  return <>{component}</>;
}

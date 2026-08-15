import React, { useEffect, useState } from "react";

const purple = "#7b1fa2";
const bg = "#f5f5f5";
const gray = "#6b7280";
const lightBorder = "#e5e7eb";
const white = "#ffffff";

const icons = {
  signal: "https://www.figma.com/api/mcp/asset/3d20171f-bdfa-4176-b252-7ac4425d53bb.svg",
  wifi: "https://www.figma.com/api/mcp/asset/e7888627-7b57-4d03-bc6d-8935bb757953.svg",
  battery: "https://www.figma.com/api/mcp/asset/b3f4eefa-69e0-4f2c-8699-24400c1c7c1c.svg",
  arrowLeft: "https://www.figma.com/api/mcp/asset/e35760bf-df92-42ef-ad1a-a08ab6943787.svg",
  home: "https://www.figma.com/api/mcp/asset/8b3d2675-6548-40e8-85db-f40176d4e2b7.svg",
  beaker: "https://www.figma.com/api/mcp/asset/0268dea8-1665-415d-8797-e003f0bc9b14.svg",
  clipboard: "https://www.figma.com/api/mcp/asset/ae7c3cf5-76d5-4659-a115-e49c72b1a5e7.svg",
  fileText: "https://www.figma.com/api/mcp/asset/fe883a4c-e43f-4867-8c95-21ab52aaf53e.svg",
  menu: "https://www.figma.com/api/mcp/asset/a3ad08dc-f81a-4ba0-9c30-b408839180ff.svg",
};

function Img({src, size=24}: {src:string; size?:number}) {
  return <img src={src} alt="" style={{ width:size, height:size, objectFit:"contain", display:"block" }} />;
}

function StatusBar() {
  return <div style={{height:44,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px"}}>
    <span style={{fontSize:14,fontWeight:700,color:"#1f1f1f",fontFamily:"Inter, sans-serif"}}>9:41</span>
    <div style={{display:"flex",gap:6,alignItems:"center"}}>
      <Img src={icons.signal} size={18}/><Img src={icons.wifi} size={18}/><Img src={icons.battery} size={20}/>
    </div>
  </div>;
}

function Header({title}:{title:string}) {
  return <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 20px"}}>
    <Img src={icons.arrowLeft} size={24}/>
    <div style={{fontFamily:"Outfit, sans-serif",fontWeight:700,fontSize:20,color:purple}}>{title}</div>
  </div>;
}

function BottomNav({active}:{active:"home"|"samples"|"tests"|"reports"}) {
  const items = [
    ["home", "Home", icons.home],
    ["samples", "Samples", icons.beaker],
    ["tests", "Tests", icons.clipboard],
    ["reports", "Reports", icons.fileText],
    ["more", "More", icons.menu],
  ] as const;
  return <div style={{borderTop:`1px solid ${lightBorder}`,background:white,height:80,display:"flex",justifyContent:"space-between",padding:"0 20px"}}>
    {items.map(([key,label,src]) => <div key={key} style={{width:60,display:"flex",flexDirection:"column",alignItems:"center",paddingTop:12,gap:4}}>
      <Img src={src} size={24}/><div style={{fontSize:10,fontWeight:key===active?700:500,color:key===active?purple:"#9ca3af",fontFamily:"Inter, sans-serif"}}>{label}</div>
    </div>)}
  </div>;
}

function Layout({title, children, active}:{title:string; children:React.ReactNode; active:"home"|"samples"|"tests"|"reports"}) {
  return <div style={{width:375,minHeight:812,background:bg,color:"#1f1f1f",fontFamily:"Inter, sans-serif",display:"flex",flexDirection:"column"}}>
    <StatusBar/><Header title={title}/><div style={{flex:1,overflowY:"auto"}}>{children}</div><BottomNav active={active}/>
    <div style={{height:24,background:white,display:"flex",justifyContent:"center",paddingTop:8}}><div style={{width:134,height:5,borderRadius:100,background:"#000"}}/></div>
  </div>;
}

function Card({children, style}:{children:React.ReactNode; style?:React.CSSProperties}) {
  return <div style={{background:white,borderRadius:12,padding:16,boxShadow:"0 4px 5px rgba(0,0,0,.05)",...style}}>{children}</div>;
}

export function LabDashboard() {
  return <Layout title="AgriTest Labs" active="home"><div style={{padding:"10px 20px 20px"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}><div><div style={{fontSize:20,fontWeight:700,color:purple}}>AgriTest Labs</div><div style={{fontSize:12,color:gray}}>NABL Accredited • 20 Jun 2025</div></div><div style={{fontSize:24,color:purple}}>◔</div></div>
    <div style={{display:"flex",gap:12,overflowX:"auto",marginBottom:20}}>{[["Samples Received","12"],["Tests In Progress","08"],["Reports Completed","45"],["Disputes","02"]].map(([l,v])=><div key={l} style={{minWidth:140,height:80,borderRadius:12,background:purple,color:white,padding:12,display:"flex",flexDirection:"column",justifyContent:"space-between"}}><div style={{fontSize:12,opacity:.85}}>{l}</div><div style={{fontSize:24,fontWeight:800}}>{v}</div></div>)}</div>
    <h3 style={{fontSize:16,margin:"0 0 12px"}}>Pending Intake</h3>
    {["S-20250620-001","S-20250620-002"].map((id,i)=><Card key={id} style={{marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between"}}><div><div style={{fontSize:14,fontWeight:700,color:purple}}>{id}</div><div style={{fontSize:12,color:gray}}>{i===0?"Lot: LOT-09923 • Vikas Organic Farms":"Lot: LOT-09945 • Green Valley Coop"}</div></div><span style={{background:"#fff3cd",color:"#856404",padding:"4px 8px",borderRadius:100,fontSize:11}}>Awaiting intake</span></div><div style={{display:"flex",gap:8,margin:"10px 0"}}><span style={{background:bg,padding:"2px 8px",borderRadius:4,fontSize:10}}>{i===0?"Moisture":"Pesticide"}</span>{i===0&&<span style={{background:bg,padding:"2px 8px",borderRadius:4,fontSize:10}}>Oil %</span>}</div><button style={{width:"100%",height:48,border:0,borderRadius:8,background:purple,color:white,fontWeight:700}}>Process Intake</button></Card>)}
    <h3 style={{fontSize:16,margin:"16px 0 12px"}}>Quick Actions</h3><div style={{display:"flex",gap:12}}>{["New Sample","Upload Cert","Disputes"].map(t=><div key={t} style={{flex:1,background:white,borderRadius:12,padding:16,textAlign:"center"}}><div style={{fontSize:24,color:purple}}>＋</div><div style={{fontSize:11,fontWeight:700}}>{t}</div></div>)}</div>
  </div></Layout>;
}

export function SampleIntake() {
  const [tests,setTests]=useState(["Moisture %","Pesticide"]);
  const all=["Aflatoxin","Protein %","Oil Content","Other"];
  return <Layout title="Sample Intake" active="samples"><div style={{padding:20}}>
    <div style={{height:160,border:`2px dashed ${purple}`,background:"#f3e5f5",borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,color:purple,fontWeight:700}}><div style={{fontSize:48}}>⌗</div><div>Scan Sample QR</div></div>
    <div style={{display:"flex",alignItems:"center",gap:12,margin:"18px 0",color:"#9ca3af",fontSize:12}}><div style={{flex:1,borderTop:"1px solid #e5e7eb"}}/><span>OR Enter Manually</span><div style={{flex:1,borderTop:"1px solid #e5e7eb"}}/></div>
    {[['LOT ID / TOKEN ID *','LOT-09923',true],['REQUESTER NAME','Vikas Organic Farms',false]].map(([l,v,active])=><div key={String(l)} style={{marginBottom:14}}><label style={{display:"block",fontSize:12,fontWeight:700,marginBottom:8,color:active?purple:"#111"}}>{l}</label><div style={{height:48,border:`${active?1.5:0}px solid ${active?purple:"transparent"}`,background:active?bg:"#e5e7eb",borderRadius:8,display:"flex",alignItems:"center",padding:"0 16px",color:active?"#1f1f1f":gray}}>{v}</div></div>)}
    <div style={{display:"flex",gap:16,marginBottom:16}}>{[['SAMPLE QUANTITY','2.5 kg'],['RECEIPT DATE','20/06/2025']].map(([l,v])=><div style={{flex:1}} key={l as string}><label style={{display:"block",fontSize:12,fontWeight:700,marginBottom:8}}>{l}</label><div style={{height:48,background:bg,borderRadius:8,padding:"0 16px",display:"flex",alignItems:"center"}}>{v}</div></div>)}</div>
    <div style={{fontSize:12,fontWeight:700,marginBottom:8}}>TESTS REQUESTED</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",rowGap:12}}>{[...tests,...all].map((t,i)=><label key={t} style={{display:"flex",alignItems:"center",gap:8,fontSize:13}}><input type="checkbox" checked={tests.includes(t)} onChange={e=>setTests(e.target.checked?[...tests,t]:tests.filter(x=>x!==t))} style={{accentColor:purple}}/>{t}</label>)}</div>
    <div style={{display:"flex",justifyContent:"center",margin:"18px 0"}}><span style={{background:"#f3e5f5",color:purple,padding:"4px 8px",borderRadius:100,fontSize:11}}>Auto-generated ID: S-20250620-001</span></div>
    <button style={{width:"100%",height:48,border:0,borderRadius:8,background:purple,color:white,fontWeight:700}}>Register Sample</button>
  </div></Layout>;
}

export function TestProgress() {
  return <Layout title="Test Progress" active="tests"><div style={{padding:20}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{background:"#f3e5f5",color:purple,padding:"4px 8px",borderRadius:100,fontSize:11}}>Moisture %</span><span style={{fontSize:12,color:gray}}>Step 2 of 3</span></div>
    <div style={{height:8,background:bg,borderRadius:4,margin:"16px 0 20px"}}><div style={{height:"100%",width:"67%",background:purple,borderRadius:4}}/></div>
    <div style={{display:"flex",justifyContent:"center",marginBottom:24}}><div style={{width:160,height:160,borderRadius:"50%",border:`6px solid ${purple}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><div style={{fontSize:28,fontWeight:800,color:purple}}>02:34:10</div><div style={{fontSize:12,fontWeight:700,color:gray}}>ELAPSED</div></div></div>
    <FieldLabel title="CURRENT STATUS"/><div style={{display:"flex",background:bg,borderRadius:8,padding:4,marginBottom:20}}>{["In Progress","Completed","Re-test"].map((x,i)=><div key={x} style={{flex:1,height:44,display:"flex",alignItems:"center",justifyContent:"center",background:i===0?"#2196f3":"transparent",color:i===0?white:gray,borderRadius:6,fontSize:12,fontWeight:700}}>{x}</div>)}</div>
    <FieldLabel title="EQUIPMENT USED"/><div style={{height:48,border:`1px solid ${lightBorder}`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",marginBottom:16}}><span>⚙️ Oven-Drying MT-04</span><span>⌄</span></div>
    <FieldLabel title="OPERATOR NAME"/><div style={{height:48,background:bg,borderRadius:8,padding:"0 16px",display:"flex",alignItems:"center",color:gray,marginBottom:16}}>Dr. S. Kulkarni</div>
    <FieldLabel title="OBSERVATIONS"/><div style={{height:100,border:`1px solid ${lightBorder}`,borderRadius:8,padding:12,color:"#9ca3af",marginBottom:20}}>Enter initial mass measurements or notes...</div>
    <button style={{width:"100%",height:48,border:0,borderRadius:8,background:purple,color:white,fontWeight:700,marginBottom:12}}>Mark Complete</button><button style={{width:"100%",height:48,border:`1.5px solid ${purple}`,borderRadius:8,background:"transparent",color:purple,fontWeight:700}}>Save Progress</button>
  </div></Layout>;
}

function FieldLabel({title}:{title:string}){return <div style={{fontSize:12,fontWeight:700,marginBottom:8}}>{title}</div>}

export function EnterResults(){return <Layout title="Enter Results" active="tests"><div style={{padding:20}}><span style={{background:"#f3e5f5",color:purple,padding:"4px 12px",borderRadius:100,fontSize:12,fontWeight:700}}>Moisture %</span><Card style={{marginTop:20}}><FieldLabel title="TEST RESULT"/><div style={{height:64,border:`2px solid ${purple}`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",background:bg}}><span style={{fontSize:32,fontWeight:800}}>8.5</span><span style={{background:purple,color:white,padding:"6px 12px",borderRadius:6,fontWeight:700}}>%</span></div><div style={{display:"flex",justifyContent:"space-between",marginTop:8,color:gray,fontSize:13}}><span>Acceptable Range: ≤10%</span><span style={{background:"#e8f5e9",color:"#4caf50",padding:"4px 12px",borderRadius:100,fontWeight:700}}>PASS</span></div></Card><FieldLabel title="ATTACHMENTS"/><div style={{height:100,border:`2px dashed ${lightBorder}`,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:gray}}>Upload CSV / PDF / Image</div><div style={{height:120,border:`1px solid ${lightBorder}`,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",fontStyle:"italic",marginTop:12}}>Sign here</div><button style={{width:"100%",height:48,marginTop:24,border:0,borderRadius:8,background:purple,color:white,fontWeight:700}}>Save & Mark Complete</button><button style={{width:"100%",height:48,marginTop:12,border:`1.5px solid ${purple}`,borderRadius:8,background:"transparent",color:purple,fontWeight:700}}>Next Test →</button></div></Layout>}

export function GenerateCertificate(){return <Layout title="Generate Certificate" active="reports"><div style={{padding:20}}><Card><div style={{fontWeight:700}}>Lab Analysis Certificate</div><div style={{fontSize:12,color:gray}}>S-20250620-001 • 20 Jun 2025</div><span style={{background:purple,color:white,padding:"2px 6px",borderRadius:4,fontSize:9}}>NABL</span> <span style={{color:purple,fontWeight:700,textDecoration:"underline",fontSize:12}}>Regenerate</span></Card><h3>Included Parameters</h3><Card style={{padding:4}}>{["Moisture %","Pesticide Residue","Aflatoxin"].map(x=><div key={x} style={{padding:12,borderBottom:`1px solid ${lightBorder}`}}>☑ {x}</div>)}</Card><h3>Digital Signature</h3><div style={{display:"flex",gap:12}}><button style={{flex:1,height:44,border:`1px solid ${lightBorder}`,background:white,borderRadius:8}}>Upload PNG</button><button style={{flex:1,height:44,border:`1px solid ${lightBorder}`,background:white,borderRadius:8}}>Draw Sign</button></div><FieldLabel title="COMMENTS"/><div style={{height:80,border:`1px solid ${lightBorder}`,borderRadius:8,padding:12,color:"#9ca3af"}}>e.g. Sample meets export standards</div><div style={{marginTop:12,color:purple,fontSize:11,fontWeight:700,display:"flex",justifyContent:"space-between"}}><span>Generating Certificate...</span><span>80%</span></div><div style={{height:6,background:"#e5e7eb",borderRadius:100,margin:"6px 0 16px"}}><div style={{width:"80%",height:"100%",background:purple}}/></div><button style={{width:"100%",height:48,border:0,borderRadius:8,background:purple,color:white,fontWeight:700}}>Generate & Upload Certificate</button></div></Layout>}

export function ShareReport(){return <Layout title="Share Report" active="reports"><div style={{padding:20}}><Card><div style={{display:"flex",justifyContent:"space-between"}}><div style={{fontWeight:800,color:purple}}>S-20250620-001</div><span style={{background:"#e8f5e9",color:"#4caf50",padding:"4px 8px",borderRadius:4,fontSize:10}}>Passed</span></div><div style={{fontSize:13,color:gray,marginTop:6}}>Lot: TRD-123 • Vikas Organic Farms</div><div style={{fontSize:12,color:"#9ca3af"}}>Completed: 20 Jun 2025</div></Card>{["Send to Requester","Append to Token","Download PDF"].map(x=><Card key={x} style={{marginTop:12}}><div style={{fontWeight:700}}>{x}</div><div style={{fontSize:12,color:gray}}>{x==='Send to Requester'?"In-app + SMS/WhatsApp":x==='Append to Token'?"Attach to blockchain record":"Save to device"}</div></Card>)}<Card style={{marginTop:12}}><div style={{fontWeight:700}}>Email Report</div><div style={{marginTop:12,height:40,background:bg,border:`1px solid ${lightBorder}`,borderRadius:6,padding:"0 12px",display:"flex",alignItems:"center"}}>vikas.organic@farms.com</div></Card><button style={{width:"100%",height:48,marginTop:20,border:0,borderRadius:8,background:purple,color:white,fontWeight:700}}>Send</button><div style={{textAlign:"center",marginTop:12,color:"#4caf50",fontWeight:700,fontSize:12}}>✓ Report Shared & Token Updated</div></div></Layout>}

export function FailedSample(){return <Layout title="Failed Sample" active="samples"><div style={{padding:20}}><div style={{border:`1px solid #f44336`,background:"rgba(244,67,54,.1)",borderRadius:8,padding:12,textAlign:"center",color:"#f44336",fontWeight:700}}>Sample Failed Quality Check</div><Card style={{marginTop:12}}><div style={{fontSize:11,color:"#9ca3af",fontWeight:700}}>SAMPLE IDENTITY</div><div style={{fontWeight:800}}>S-20250620-001</div><div style={{fontSize:13,color:gray}}>Vikas Organic Farms • Lot TRD-123</div><span style={{display:"inline-block",marginTop:8,background:"rgba(244,67,54,.13)",color:"#f44336",padding:"4px 8px",borderRadius:4,fontSize:10,fontWeight:700}}>Moisture Fail</span></Card><FieldLabel title="FAILURE REASON"/><div style={{border:`1px solid #f44336`,background:"rgba(244,67,54,.05)",borderRadius:8,padding:12,color:"#f44336",fontWeight:700}}>Moisture: 14% (Limit: ≤10%)</div><h3>Escalation Path</h3>{[["Notify Requester","Standard failure notification",true],["Request Re-sample","Generate new sample ID",false],["Escalate to Dispute","Dispute resolution workflow",false]].map(([a,b,sel])=><Card key={String(a)} style={{marginTop:12,border:sel?`2px solid ${purple}`:`1px solid ${lightBorder}`}}><div style={{display:"flex",gap:16,alignItems:"center"}}><div style={{width:20,height:20,borderRadius:"50%",border:`2px solid ${sel?purple:"#e5e7eb"}`,background:sel?purple:"transparent"}}/ ><div><div style={{fontWeight:700}}>{a}</div><div style={{fontSize:12,color:gray}}>{b}</div></div></div></Card>)}<FieldLabel title="ADDITIONAL NOTES"/><div style={{height:80,border:`1px solid ${lightBorder}`,borderRadius:8,padding:12,color:"#9ca3af"}}>Provide context for the escalation...</div><button style={{width:"100%",height:48,marginTop:20,border:0,borderRadius:8,background:purple,color:white,fontWeight:700}}>Submit Escalation</button></div></Layout>}

export const labRoutes: Record<string, React.ComponentType> = {
  "lab-dashboard": LabDashboard,
  "lab-sample-intake": SampleIntake,
  "lab-test-progress": TestProgress,
  "lab-enter-results": EnterResults,
  "lab-generate-certificate": GenerateCertificate,
  "lab-share-report": ShareReport,
  "lab-failed-sample": FailedSample,
};

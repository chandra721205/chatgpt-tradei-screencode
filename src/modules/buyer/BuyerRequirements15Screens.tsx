import React from "react";

const screens: Record<string,string> = {
  "2041:262": "Buyer Dashboard",
  "2041:263": "Post Requirement",
  "2041:264": "Requirement Details",
  "2041:265": "AI Potential Matches",
  "2041:266": "Browse Lots",
  "2041:267": "Live Auction",
  "2041:268": "Hire Inspector",
  "2041:269": "Inspection Report",
  "2041:270": "Confirm Delivery",
  "2041:271": "Record Payment",
  "2041:272": "My Ledger",
  "2041:273": "Rate This Seller",
  "2041:274": "Raise Dispute",
  "2041:275": "Dispute #D-2041",
  "2041:276": "Repeat Purchase",
};

const TEAL = "#00796b";
const DARK_TEAL = "#004d40";
const GREEN = "#2e7d32";
const RED = "#d32f2f";
const BG = "#f5f7f7";
const TEXT = "#1a1c1e";
const MUTED = "#6b7280";

const imgByScreen: Record<string,string[]> = {
  "2041:264": [
    "https://www.figma.com/api/mcp/asset/a9dffeeb-1dd9-448e-9b26-a413f4f78c92.png",
    "https://www.figma.com/api/mcp/asset/af88d2ae-13ef-4c0a-ab3a-0691af60c3fc.png",
  ],
  "2041:265": [
    "https://www.figma.com/api/mcp/asset/d196885a-2a9f-4270-a7f3-1027dff3ac08.png",
    "https://www.figma.com/api/mcp/asset/b1326a2e-c930-4d13-b62b-7e4dd0140751.png",
    "https://www.figma.com/api/mcp/asset/249059c2-47cf-40f9-8d46-26a524972e55.png",
    "https://www.figma.com/api/mcp/asset/921b451c-8784-4b20-96b1-d51fcbb8055e.png",
  ],
  "2041:266": ["https://www.figma.com/api/mcp/asset/11c89748-11cb-49af-8091-6b4a45948d6a.png"],
  "2041:268": [
    "https://www.figma.com/api/mcp/asset/0edd5490-e483-4a65-8219-bdae25c684c5.png",
    "https://www.figma.com/api/mcp/asset/b6d0436b-d400-4b27-9e53-383a61ada3ce.png",
    "https://www.figma.com/api/mcp/asset/036573d8-f67d-4f77-8736-c5d594f7d64f.png",
    "https://www.figma.com/api/mcp/asset/71e2b248-56c3-478a-ae08-4392f842bf11.png",
  ],
  "2041:269": ["https://www.figma.com/api/mcp/asset/fc9414d1-b614-45ca-9b2f-f0595b157d57.png"],
  "2041:275": [
    "https://www.figma.com/api/mcp/asset/11394b05-dc62-4f45-a6a7-36bad858f05f.png",
    "https://www.figma.com/api/mcp/asset/75ec56b2-f4f9-4006-8a5e-45d425479a82.png",
    "https://www.figma.com/api/mcp/asset/61df9a0e-5df6-45d8-802c-43e4a3974551.png",
  ],
};

function StatusBar({dark = false}:{dark?:boolean}) {
  return <div style={styles.statusBar} data-node-id="status-bar"><span>9:41</span><span style={{fontSize:12,color:dark?"#fff":"#1a1c1e"}}>⌁ ◌ ▣</span></div>;
}
function Header({title,dark=false}:{title:string;dark?:boolean}) {
  return <div style={{...styles.header,color:dark?"#fff":TEXT}}><span style={styles.back}>‹</span><h1 style={styles.headerTitle}>{title}</h1></div>;
}
function BottomNav({active="Home"}:{active?:string}) {
  const items=["Home","Requirements","Browse","Orders","More"];
  return <div style={styles.bottomNav}>{items.map(x=><div key={x} style={{...styles.navItem,color:x===active?TEAL:MUTED}}><div style={{fontSize:22}}>{x==="Home"?"⌂":x==="Requirements"?"☷":x==="Browse"?"⌕":x==="Orders"?"▣":"…"}</div><div>{x}</div></div>)}</div>;
}
function ActionBar({children}:{children:React.ReactNode}) { return <div style={styles.actionBar}>{children}</div>; }
function Button({children,kind="primary"}:{children:React.ReactNode;kind?:"primary"|"secondary"|"danger"}) {
  const palette=kind==="danger"?{bg:RED,fg:"#fff",border:RED}:kind==="secondary"?{bg:"#fff",fg:TEAL,border:TEAL}:{bg:TEAL,fg:"#fff",border:TEAL};
  return <button style={{...styles.button,background:palette.bg,color:palette.fg,border:`1px solid ${palette.border}`}}>{children}</button>;
}

function Dashboard(){return <><div style={{padding:20}}>
  <div style={styles.rowBetween}><div><div style={{fontSize:24,fontWeight:700}}>Hello, Sonia</div><div style={styles.row}><span style={styles.badge}>1,200 TRD</span><span style={styles.muted12}>Balance</span></div></div><div style={styles.row}><span style={{fontSize:24}}>♧</span><div style={styles.avatar}></div></div></div>
  <div style={styles.kpiRow}>{[["3","Active RFQs",TEAL],["5","Active Bids","#26a69a"],["2","In Transit",DARK_TEAL]].map(([n,t,c])=><div key={t} style={{...styles.kpi,bg:c}}><div style={{fontSize:24,fontWeight:800}}>{n}</div><div style={{fontSize:12,opacity:.85}}>{t}</div></div>)}</div>
  <h2 style={styles.sectionTitle}>Quick Actions</h2><div style={styles.actionsRow}>{["＋\nPost RFQ","▦\nBrowse Lots","♧\nTrack"].map(t=><div key={t} style={styles.quick}>{t.split("\n").map((s,i)=><div key={i} style={{fontSize:i===0?22:11,fontWeight:i===0?400:700}}>{s}</div>)}</div>)}</div>
  <div style={styles.aiCard}><b style={{fontSize:12,color:DARK_TEAL}}>AI INSIGHT • GROK</b><div style={{fontSize:14,marginTop:6}}>Chilli prices expected to drop next week. Wait before buying.</div></div>
  <div style={styles.rowBetween}><h2 style={styles.sectionTitle}>Active RFQs</h2><span style={{color:TEAL,fontWeight:700}}>View All</span></div>
  {[1,2,3].map(i=><div key={i} style={styles.listCard}><div><div style={{fontSize:13}}>Chilli (Dry Whole)</div><div style={styles.muted12}>200 Quintals • 5 Matches</div></div><Button kind="secondary">View</Button></div>)}
</div><BottomNav active="Home"/></>}

function PostRequirement(){return <><main style={{padding:20}}>{[
  ["Commodity","Dry Red Chilli","⌄"],["Grade","Grade A - Premium","⌄"],["Quantity (Quintals)","500","⌨"],["Moisture Tolerance (%)","Max 12%","◔"],["Packaging Preference","Jute Bags - 50kg","◈"],["Delivery Location","Guntur, Andhra Pradesh",""]].map(([l,v,ic])=><div key={l} style={styles.fieldGroup}><label>{l}</label><div style={styles.input}><span>{v}</span><span>{ic}</span></div></div>)}<div style={styles.fieldGroup}><label>Special Instructions</label><div style={{...styles.input,height:100,alignItems:"flex-start",justifyContent:"flex-start"}}>E.g. specific certification requirements...</div></div></main><ActionBar><Button>Publish RFQ</Button></ActionBar></>}

function RequirementDetails(){return <><main style={{padding:16}}><section style={styles.card}><div style={styles.rowBetween}><div><h2 style={styles.cardTitle}>Dry Red Chilli</h2><div style={styles.muted14}>RFQ-99238 • Guntur</div></div><span style={styles.activeBadge}>ACTIVE</span></div><hr style={{border:0,borderTop:"1px solid #e0e0e0",width:"100%"}}/><div style={styles.threeCols}>{[["QUANTITY","500 Qt"],["TARGET PRICE","₹155 - ₹162"],["VALID UNTIL","15 Aug"]].map(([a,b])=><div key={a}><div style={styles.cap}>{a}</div><div>{b}</div></div>)}</div></section><h2 style={styles.sectionTitle}>AI Potential Matches</h2>{[["Krishi Exports","98% Match","450 Qt • ₹160/kg"],["Guntur Traders","92% Match","1,200 Qt • ₹158/kg"]].map(([n,m,v],i)=><div style={styles.matchCard} key={n}><img style={styles.thumb60} src={imgByScreen["2041:264"]?.[i]} /><div style={{flex:1}}><div style={styles.rowBetween}><span>{n}</span><b style={{color:TEAL}}>{m}</b></div><div style={styles.muted12}>{v}</div><Button>View Lot</Button></div></div>)}</main></>}

function BrowseLots(){return <><div style={{background:"#fff",padding:16}}><div style={styles.search}>⌕ <span>Search Chilli, Cotton...</span></div><div style={styles.filterRow}>{["Commodity","Price","Distance","Grade"].map(x=><span key={x} style={styles.filter}>{x}⌄</span>)}</div></div><main style={{padding:16}}>{imgByScreen["2041:265"].map((src,i)=><div style={styles.lotCard} key={src}><img src={src} style={styles.lotImg}/><div style={{flex:1}}><div style={styles.rowBetween}><span>Teja S17 Chilli</span><span style={styles.matchBadge}>95% MATCH</span></div><div style={styles.muted12}>150 Quintals • Grade A</div><div style={{fontSize:12,color:TEAL}}>₹162/kg <span style={styles.muted12}>• Raghavan Agri ★ 4.8</span></div></div><div style={styles.row}><Button kind="secondary">Bid Now</Button><Button>View Details</Button></div></div>)}</main><BottomNav active="Browse"/></>}

function LiveAuction(){return <><main style={{padding:16}}><div style={styles.card}><div style={styles.row}><img src={imgByScreen["2041:266"][0]} style={styles.thumb50}/><div><div>Teja Red Chilli • 150 Qt</div><div style={styles.muted12}>Bidding Ends: <span style={{color:RED}}>02:15:33</span></div></div></div></div><div style={styles.rowBetween}><span style={styles.muted12}>Stop-loss: ₹150</span><b style={{color:TEAL,fontSize:12}}>Current: ₹158</b></div><div style={styles.progress}><div style={{width:"70%",height:"100%",background:TEAL}}/></div><div style={styles.cap}>CURRENT BID LADDER</div>{[["#1","₹158.50/kg","Leading"],["#2","₹158.00/kg",""] ,["#3","₹157.25/kg",""]].map(([a,b,c])=><div style={{...styles.listCard,background:c?"#e0f2f1":"#fff"}} key={a}><span>{a}</span><span>{b}</span><span style={{color:GREEN,fontWeight:700}}>{c}</span></div>)}<div style={styles.card}><div style={styles.rowBetween}><span>Auto-Bid AI Assistant</span><span style={styles.toggle}></span></div><div style={styles.muted12}>AI bids incrementally up to your cap price.</div><div style={{...styles.input,background:BG}}>Max Cap Price <b>₹162/kg</b></div></div></main><ActionBar><div style={styles.row}><div style={{...styles.input,flex:1,background:BG}}>₹ 159.00</div><Button>Place Bid</Button></div><Button kind="secondary">▣ Remote Verification</Button></ActionBar></>}

function HireInspector(){return <><main style={{padding:16}}><p style={styles.muted14}>Get independent quality verification for LOT-556 before shipping.</p>{[["Global Agri Lab","4.9 (124 reviews)","₹2,500",["QC","Chemical Lab"],true],["SGS India Ltd.","4.8 (124 reviews)","₹3,200",["International","Storage"],false],["VerifyAgro Svc","4.6 (124 reviews)","₹1,800",["Fast","Field QC"],false]].map(([n,r,p,tags,sel])=><div style={{...styles.card,border:sel?`2px solid ${TEAL}`:"1px solid #e0e0e0"}} key={n as string}><div style={styles.rowBetween}><div><div>{n}</div><div>★ {r}</div></div><span style={{color:TEAL}}>{p}</span></div><div style={styles.row}>{(tags as string[]).map(t=><span style={styles.badge} key={t}>{t}</span>)}</div><Button kind={sel?"primary":"secondary"}>{sel?"Selected":"Hire"}</Button></div>)}<label style={{fontSize:12}}>Schedule Inspection</label><div style={styles.row}><div style={{...styles.input,flex:1}}>12 Aug 2024 ⌄</div><div style={{...styles.input,flex:1}}>10:00 AM ◷</div></div></main><ActionBar><Button>Confirm Hire & Pay</Button><div style={styles.help}>OTP will be sent to the inspector once you confirm.</div></ActionBar></>}

function InspectionReport(){return <><main style={{padding:16}}><div style={{...styles.aiCard,background:GREEN,color:"white"}}><b style={{fontSize:20}}>✓ PASSED</b><div style={{opacity:.85}}>Lot meets all primary requirements.</div></div><div style={styles.card}><div style={styles.tableHeader}><span>Parameter</span><span>Value</span><span>Result</span></div>{[["Moisture Content","11.2%"],["Grade Selection","A"],["Impurities","1.5%"],["Foreign Matter","0.2%"],["Color Consistency","Good"]].map(([a,b])=><div key={a} style={styles.tableRow}><span>{a}</span><b>{b}</b><span style={{color:GREEN}}>✓</span></div>)}</div><div style={styles.muted12}>Inspection Photos</div><div style={styles.row}>{imgByScreen["2041:268"].map(src=><img key={src} src={src} style={styles.photo75}/>)}</div><Button kind="secondary">⇩ Download Full PDF Report</Button></main><ActionBar><div style={styles.row}><Button>Accept Lot</Button><Button kind="danger">Reject</Button></div></ActionBar></>}

function Tracking(){return <><div style={{height:400,backgroundImage:`url(${imgByScreen["2041:269"][0]})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={styles.eta}>🚚 ETA: 4h 30m</span></div><div style={styles.sheet}><h2 style={styles.sectionTitle}>Order Status</h2>{[["Pickup Completed","10 Aug, 11:30 AM"],["In Transit","Arrived at Hyderabad Hub"],["Delivery Arrived","Expected by 12 Aug"]].map(([a,b],i)=><div key={a} style={styles.timelineRow}><span style={{color:i===2?MUTED:TEAL}}>●</span><div><div>{a}</div><div style={styles.muted12}>{b}</div></div></div>)}<div style={styles.listCard}><div><div style={styles.cap}>ORDER ID</div><div>TRD-88219</div></div><Button kind="secondary">☎ Contact Transporter</Button></div></div></>}

function ConfirmDelivery(){return <><main style={{padding:20}}><div style={styles.card}><div style={styles.cap}>ORDER TOKEN: TRD-9902</div><h2 style={styles.cardTitle}>Chilli (Teja S17)</h2><div style={styles.muted14}>Raghavan Agri • 200 Quintals</div></div><div style={{textAlign:"center"}}><p>Enter 6-digit OTP provided by the transporter to confirm receipt.</p><div style={styles.otpRow}>{["5","","","","",""] .map((v,i)=><div style={styles.otp} key={i}>{v}</div>)}</div></div></main><ActionBar><Button>Confirm Delivery</Button><div style={{textAlign:"center",color:RED,fontWeight:700}}>Raise Issue</div></ActionBar></>}

function RecordPayment(){return <><main style={{padding:20}}><div style={{...styles.card,background:DARK_TEAL,color:"white"}}><div style={{opacity:.7,textTransform:"uppercase",fontSize:10}}>Outstanding Amount</div><div style={{fontSize:32,fontWeight:800}}>₹24,800</div><div style={{opacity:.7,fontSize:12}}>Invoice: #INV-2210 • Due: 15 Aug</div></div><label style={styles.label}>Payment Mode</label><div style={styles.row}>{["Bank Transfer","UPI","Cash"].map((x,i)=><span key={x} style={{...styles.pill,background:i===0?TEAL:"#fff",color:i===0?"#fff":TEXT,borderColor:i===0?TEAL:"#e0e0e0"}}>{x}</span>)}</div><div style={styles.fieldGroup}><label>Reference Number</label><div style={styles.input}>TXN-902188412</div></div><div style={styles.fieldGroup}><label>Upload Proof</label><div style={{...styles.card,border:"1px dashed #e0e0e0",textAlign:"center",color:TEAL}}>▣<div>Click to upload photo or receipt</div></div></div></main><ActionBar><Button>Record Payment</Button><div style={styles.help}>OTP from seller required to confirm</div></ActionBar></>}

function Ledger(){return <><main style={{padding:16}}><div style={{...styles.card,display:"grid",gridTemplateColumns:"1fr auto 1fr auto 1fr",gap:12}}>{[["Purchased","₹1.2M",TEXT],["Paid","₹1.15M",TEAL],["Outstanding","₹50,000",RED]].map(([a,b,c],i)=><React.Fragment key={a}><div><div style={styles.cap}>{a}</div><b style={{color:c}}>{b}</b></div>{i<2&&<div style={{width:1,background:"#eee"}}/>}</React.Fragment>)}</div><div style={styles.row}>{["All","Last 30 Days","Last 3 Months"].map((x,i)=><span key={x} style={{...styles.filter,background:i===1?"#e0f2f1":"#fff",borderColor:i===1?TEAL:"#e0e0e0",color:i===1?TEAL:TEXT}}>{x}</span>)}</div><div style={styles.card}><div style={styles.tableHeader}><span>Transaction</span><span>Type</span><span>Amount</span></div>{[["Chilli Lot-556","Debit","₹24,800",RED],["Payment-INV220","Credit","₹50,000",GREEN],["Cotton Lot-121","Debit","₹18,200",RED],["Cumin Lot-042","Debit","₹12,400",RED]].map(([a,b,c,d])=><div style={styles.tableRow} key={a as string}><div><div>{a}</div><div style={styles.cap}>2024</div></div><span style={{color:d}}>{b}</span><b>{c}</b></div>)}</div><Button kind="secondary">Export Ledger PDF</Button></main></>}

function RateSeller(){return <><main style={{padding:20}}><div style={styles.card}><b>Raghavan Agri Svc.</b><div style={styles.muted12}>Chilli • 200 Quintals</div></div>{["Quality","Punctuality","Communication"].map(x=><div style={styles.rowBetween} key={x}><b>{x}</b><span style={{color:TEAL,fontSize:22}}>★★★★☆</span></div>)}<div style={styles.fieldGroup}><label>Share your experience</label><div style={{...styles.input,height:120,alignItems:"flex-start",justifyContent:"flex-start"}}>Excellent quality chilli. The delivery was on time and packaging was exactly as requested.</div></div></main><ActionBar><Button>Submit Rating</Button><div style={styles.help}>Rating appears on seller's public profile</div></ActionBar></>}

function RaiseDispute(){return <><main style={{padding:20}}><div style={styles.fieldGroup}><label>Select Order</label><div style={styles.input}>LOT-556 Chilli (Teja Red) ⌄</div></div><div style={styles.fieldGroup}><label>Dispute Type</label>{["Quality Issue","Quantity Mismatch","Delayed Delivery","Payment Dispute"].map((x,i)=><div key={x} style={{...styles.input,borderColor:i===0?RED:"#e0e0e0",color:i===0?RED:TEXT}}><span>{i===0?"◉":"○"}</span>{x}</div>)}</div><div style={styles.fieldGroup}><label>Description</label><div style={{...styles.input,height:100,alignItems:"flex-start",justifyContent:"flex-start"}}>Moisture content is higher than the 12% agreed upon. Verifier report shows 14.5%.</div></div><div style={styles.fieldGroup}><label>Upload Evidence</label><div style={{...styles.card,border:"1px dashed #d32f2f",background:"#ffebee",textAlign:"center",color:RED}}>☁<div>Attach photos, videos, or documents</div></div></div></main><ActionBar><Button kind="danger">Submit Dispute</Button><div style={styles.help}>Goes to arbitration panel for review</div></ActionBar></>}

function DisputeChat(){const imgs=imgByScreen["2041:275"];return <><div style={styles.participants}>{[["Buyer (You)",imgs[0]],["Seller",imgs[1]],["Arbitrator",imgs[2]]].map(([n,s])=><div key={n as string} style={{textAlign:"center",flex:1}}><img src={s as string} style={styles.avatar40}/><div style={styles.cap}>{n}</div></div>)}</div><main style={{padding:16}}><div style={styles.chatLeft}><b style={{color:TEAL,fontSize:10}}>SELLER</b><div style={{marginTop:4}}>The moisture content was 11.8% at the time of pickup. The delay in transit might have affected it.</div><div style={styles.help}>10:30 AM</div></div><div style={styles.chatRight}><b style={{color:DARK_TEAL,fontSize:10}}>ARBITRATOR</b><div style={{marginTop:4}}>I have reviewed the verifier report and storage logs. Based on the 14.5% moisture at delivery, I propose a 5% discount on the total price.</div><div style={styles.card}><b>Resolution Proposal</b><div style={styles.muted14}>New price: ₹154/kg (Original: ₹162). Accept this to close the dispute.</div><div style={styles.row}><Button>Accept</Button><Button kind="danger">Reject</Button></div></div></div></main></>}

function RepeatPurchase(){return <><main style={{padding:16}}><div style={styles.cap}>Select from past orders</div>{[["Chilli (Dry Red)","Raghavan Agri • 15 Jul 2024","₹162/kg",true],["Chilli (Teja S17)","Guntur Traders • 02 Jun 2024","₹158/kg",false]].map(([a,b,c,sel])=><div key={a as string} style={{...styles.card,border:sel?`2px solid ${TEAL}`:"1px solid #e0e0e0"}}><div style={styles.rowBetween}><div><b>{a}</b><div style={styles.muted12}>{b}</div><div style={{color:TEAL,fontWeight:700}}>{c}</div></div><span style={{...styles.badge,background:sel?TEAL:BG,color:sel?"#fff":TEXT}}>{sel?"Selected":"Select"}</span></div></div>)}<div style={{...styles.card,background:"#e0f2f1",border:"none"}}><b style={{color:DARK_TEAL}}>Order Configuration</b><div style={styles.cap}>Adjust Quantity (Quintals)</div><div style={styles.stepper}><span>−</span><b>200</b><span>+</span></div></div></main><ActionBar><Button>Send Order</Button><div style={styles.help}>Creates new RFQ or direct offer to same seller</div><div style={{textAlign:"center",color:TEAL,fontWeight:700}}>Post New RFQ Instead</div><BottomNav active="Orders"/></ActionBar></>}

function Generic({title}:{title:string}){return <><main style={{padding:20}}><section style={styles.card}><h2 style={styles.cardTitle}>{title}</h2><div style={styles.muted14}>Screen wired to the requested Figma node.</div></section><Button>Continue</Button></main></>}

const styles: Record<string,React.CSSProperties>={
  shell:{minHeight:"100vh",background:BG,fontFamily:"DM Sans, Arial, sans-serif",color:TEXT},
  statusBar:{height:44,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",fontSize:14,fontWeight:700},
  header:{display:"flex",alignItems:"center",gap:12,height:56,padding:"0 16px"},
  back:{fontSize:28,lineHeight:1},headerTitle:{fontSize:20,margin:0,fontWeight:700},
  row:{display:"flex",alignItems:"center",gap:8},rowBetween:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},
  avatar:{width:40,height:40,borderRadius:20,background:"linear-gradient(135deg,#93c5a6,#1f2937)"},avatar40:{width:40,height:40,borderRadius:20,objectFit:"cover"},
  badge:{padding:"4px 8px",background:"#e0f2f1",borderRadius:4,color:TEAL,fontSize:12,fontWeight:700},activeBadge:{padding:"4px 8px",background:"#e8f5e9",borderRadius:4,color:GREEN,fontSize:12,fontWeight:700},matchBadge:{padding:"4px 8px",background:"#e0f2f1",borderRadius:4,color:TEAL,fontSize:12,fontWeight:700},
  muted12:{fontSize:12,color:MUTED},muted14:{fontSize:14,color:MUTED},
  kpiRow:{display:"flex",gap:12,overflow:"hidden",marginTop:20},kpi:{width:120,minWidth:120,padding:16,borderRadius:12,color:"white"},actionsRow:{display:"flex",gap:12},quick:{flex:1,background:"#fff",border:"1px solid #e0e0e0",borderRadius:12,padding:16,textAlign:"center"},
  sectionTitle:{fontSize:20,lineHeight:"28px",margin:"20px 0 12px"},aiCard:{background:"#e0f2f1",borderRadius:12,padding:16,margin:"20px 0"},listCard:{background:"#fff",borderRadius:12,padding:16,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:8},
  button:{height:52,borderRadius:8,padding:"0 20px",fontSize:16,fontWeight:700,width:"100%"},fieldGroup:{display:"flex",flexDirection:"column",gap:8,marginBottom:18},label:{fontSize:14,fontWeight:700,color:MUTED},input:{background:"#fff",border:"1px solid #e0e0e0",borderRadius:8,minHeight:48,padding:"12px",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14},
  actionBar:{background:"#fff",borderTop:"1px solid #eee",padding:20,display:"flex",flexDirection:"column",gap:12,position:"sticky",bottom:0},help:{fontSize:11,color:MUTED,textAlign:"center"},card:{background:"#fff",borderRadius:12,padding:16,boxSizing:"border-box",width:"100%",border:"1px solid #e0e0e0",marginBottom:16},cardTitle:{fontSize:20,margin:"0 0 4px"},threeCols:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,fontSize:12},cap:{fontSize:10,textTransform:"uppercase",fontWeight:700,color:MUTED},matchCard:{background:"#fff",borderRadius:12,padding:16,display:"flex",gap:12,alignItems:"center",marginBottom:12},thumb60:{width:60,height:60,borderRadius:8,objectFit:"cover"},search:{height:44,background:BG,borderRadius:8,display:"flex",alignItems:"center",gap:8,padding:"0 12px",color:MUTED},filterRow:{display:"flex",gap:8,overflow:"hidden",marginTop:12},filter:{border:"1px solid #e0e0e0",borderRadius:20,padding:"6px 12px",fontSize:12,whiteSpace:"nowrap"},lotCard:{background:"#fff",borderRadius:16,padding:16,display:"flex",flexDirection:"column",gap:12,marginBottom:12},lotImg:{width:80,height:80,borderRadius:8,objectFit:"cover"},progress:{height:10,background:"#eee",borderRadius:5,overflow:"hidden",margin:"8px 0 16px"},toggle:{width:40,height:20,borderRadius:10,background:TEAL},thumb50:{width:50,height:50,borderRadius:6,objectFit:"cover"},tableHeader:{background:BG,padding:12,display:"grid",gridTemplateColumns:"1fr 70px 80px",fontSize:10,fontWeight:700,color:MUTED,textTransform:"uppercase",gap:8},tableRow:{padding:12,display:"grid",gridTemplateColumns:"1fr 60px 80px",gap:8,borderBottom:"1px solid #eee",fontSize:14,alignItems:"center"},photo75:{width:75,height:75,borderRadius:8,objectFit:"cover"},sheet:{background:"#fff",borderRadius:"24px 24px 0 0",padding:20,marginTop:-20,position:"relative"},eta:{background:"#fff",padding:"8px 12px",borderRadius:20,fontSize:12,fontWeight:700,boxShadow:"0 4px 5px rgba(0,0,0,.1)"},timelineRow:{display:"flex",gap:16,alignItems:"flex-start",marginBottom:12},otpRow:{display:"flex",gap:8,justifyContent:"center"},otp:{width:48,height:56,border:"1px solid #e0e0e0",borderRadius:8,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,fontWeight:700},pill:{padding:"10px 16px",border:"1px solid",borderRadius:24,fontWeight:700},participants:{background:"#fff",borderBottom:"1px solid #eee",display:"flex",padding:16},chatLeft:{background:"#fff",border:"1px solid #e0e0e0",borderRadius:"12px 12px 12px 0",padding:12,width:260,marginBottom:16},chatRight:{background:"#e0f2f1",borderRadius:12,padding:12,width:280},stepper:{background:"#fff",border:"1px solid #e0e0e0",height:52,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",fontSize:22},bottomNav:{height:84,background:"#fff",borderTop:"1px solid #e0e0e0",display:"flex",justifyContent:"space-around",alignItems:"center"},navItem:{fontSize:10,textAlign:"center"},
};

export default function BuyerRequirements15Screens({screen="2041:262"}:{screen?:string}) {
  const title=screens[screen]||"Buyer";
  let body: React.ReactNode;
  switch(screen){
    case "2041:262": body=<Dashboard/>; break;
    case "2041:263": body=<PostRequirement/>; break;
    case "2041:264": body=<RequirementDetails/>; break;
    case "2041:265": body=<Generic title="AI Potential Matches"/>; break;
    case "2041:266": body=<BrowseLots/>; break;
    case "2041:267": body=<LiveAuction/>; break;
    case "2041:268": body=<HireInspector/>; break;
    case "2041:269": body=<InspectionReport/>; break;
    case "2041:270": body=<Tracking/>; break;
    case "2041:271": body=<ConfirmDelivery/>; break;
    case "2041:272": body=<RecordPayment/>; break;
    case "2041:273": body=<Ledger/>; break;
    case "2041:274": body=<RateSeller/>; break;
    case "2041:275": body=<RaiseDispute/>; break;
    case "2041:276": body=<RepeatPurchase/>; break;
    default: body=<Generic title={title}/>;
  }
  const screenHasHeader = !["2041:262","2041:264","2041:265","2041:269","2041:270","2041:271","2041:272","2041:273","2041:274","2041:275","2041:276"].includes(screen);
  return <div style={styles.shell} data-node-id={screen}><div style={{width:375,maxWidth:"100%",minHeight:"100vh",margin:"0 auto",display:"flex",flexDirection:"column"}}><StatusBar/>{screenHasHeader && <Header title={title}/>} {!screenHasHeader && screen!=="2041:262" && <Header title={title}/>} {body}</div></div>;
}

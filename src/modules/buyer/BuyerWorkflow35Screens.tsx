import React, { useMemo, useState } from "react";

const TEAL = "#00796b";
const DARK_TEAL = "#004d40";
const BG = "#f5f5f5";
const BORDER = "#e0e0e0";
const MUTED = "#666";
const RED = "#c62828";

const screenTitles: Record<string, string> = {
  "2041:277": "Buyer Dashboard",
  "2041:278": "Post Requirement",
  "2041:279": "RFQ Detail",
  "2041:280": "Browse Lots",
  "2041:281": "Live Bidding",
  "2041:282": "Hire Inspector",
  "2041:283": "Inspection Report",
  "2041:284": "Track Delivery",
  "2041:285": "Confirm Delivery",
  "2041:286": "Record Payment",
  "2041:287": "My Ledger",
  "2041:288": "Rate This Seller",
  "2041:289": "Raise Dispute",
  "2041:290": "Dispute Chat",
  "2041:291": "Repeat Purchase",
  "2041:292": "Payment Methods",
  "2041:293": "Orders",
  "2041:294": "Order Detail",
  "2041:295": "Seller Profile",
  "2041:296": "Notifications",
  "2041:297": "Buyer Profile",
  "2041:298": "Settings",
  "2041:299": "Saved Sellers",
  "2041:300": "Saved Lots",
  "2041:301": "Support",
  "2041:302": "Verification",
  "2041:303": "Documents",
  "2041:304": "Trade Credit",
  "2041:305": "Add Payment Method",
  "2041:306": "Manage Bank Account",
  "2041:307": "Security",
  "2041:308": "Transaction History",
  "2041:309": "Buyer Notifications",
  "2041:310": "Payment Methods",
  "2041:311": "More",
};

const asset = (id: string) => `https://www.figma.com/api/mcp/asset/${id}`;
const fallbackAssets: Record<string, string[]> = {
  "2041:277": [asset("3a86e4f1-7a22-4ac8-b9bb-6882951eede6.png")],
  "2041:278": [asset("77aa7746-329b-4db7-8ecd-91d512d10c94.png")],
  "2041:279": [asset("77aa7746-329b-4db7-8ecd-91d512d10c94.png"), asset("322a8950-d39e-4d5a-9093-cd98fe31de21.png")],
};

function StatusBar({ dark = false }: { dark?: boolean }) {
  return <div style={{height:44,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",color:dark?"#fff":"#1a1a1a",fontSize:14,fontWeight:600}}><span>9:41</span><span>▮⌁▣</span></div>;
}
function Header({ title, back = true, dark = true }: { title:string; back?:boolean; dark?:boolean }) {
  return <div style={{background:dark?TEAL:"transparent",color:dark?"#fff":"#1a1a1a",height:48,display:"flex",alignItems:"center",gap:12,padding:"0 16px"}}>{back&&<span style={{fontSize:28}}>‹</span>}<h1 style={{margin:0,fontSize:18,fontWeight:700}}>{title}</h1></div>;
}
function BottomNav({active="Home"}:{active?:string}) { const items=["Home","Requirements","Browse","Orders","More"]; const icons={Home:"⌂",Requirements:"☷",Browse:"⌕",Orders:"▣",More:"☰"}; return <div style={{background:"#fff",borderTop:`1px solid ${BORDER}`,padding:"8px 8px 12px",display:"flex",justifyContent:"space-around",marginTop:"auto"}}>{items.map(i=><div key={i} style={{width:64,textAlign:"center",color:i===active?TEAL:"#999",fontSize:10}}><div style={{fontSize:22}}>{icons[i as keyof typeof icons]}</div>{i}</div>)}</div>; }
function Button({children,kind="primary"}:{children:React.ReactNode;kind?:"primary"|"secondary"|"danger"}){const c=kind==="danger"?{bg:"#fff",fg:RED,border:RED}:kind==="secondary"?{bg:"#fff",fg:TEAL,border:TEAL}:{bg:TEAL,fg:"#fff",border:TEAL};return <button style={{width:"100%",minHeight:42,borderRadius:12,border:`1.5px solid ${c.border}`,background:c.bg,color:c.fg,fontSize:14,fontWeight:700}}>{children}</button>;}
function Card({children,dark=false}:{children:React.ReactNode;dark?:boolean}){return <div style={{background:dark?DARK_TEAL:"#fff",color:dark?"#fff":"#1a1a1a",border:dark?"none":`1px solid ${BORDER}`,borderRadius:16,padding:16,boxShadow:dark?"none":"0 4px 6px rgba(0,0,0,.04)"}}>{children}</div>;}
function Field({label,value,width}:{label:string;value:string;width?:number}){return <div style={{flex:1,width,marginBottom:18}}>{label&&<b style={{color:MUTED,fontSize:14}}>{label}</b>}<div style={{background:"#fff",border:`1px solid ${BORDER}`,borderRadius:12,padding:14,marginTop:8,color:value.startsWith("Select")?"#999":"#1a1a1a"}}>{value}{label&&<span style={{float:"right"}}>⌄</span>}</div></div>;}
function Dashboard(){return <div style={{background:BG,minHeight:"100vh",display:"flex",flexDirection:"column"}}><div style={{background:TEAL,color:"white"}}><StatusBar dark/><div style={{padding:"8px 20px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontSize:22,fontWeight:800}}>Hello, Sonia</div><span style={{display:"inline-block",marginTop:4,background:DARK_TEAL,padding:"4px 8px",borderRadius:16,fontSize:12}}>◉ 1,200 TRD</span></div><div style={{fontSize:26}}>♧ ◉</div></div></div><main style={{padding:20}}><div style={{display:"flex",gap:12,overflowX:"auto"}}>{[["3","Active RFQs"],["5","Active Bids"],["2","In Transit"]].map(([n,l])=><div key={l} style={{background:"#e0f2f1",borderRadius:16,padding:12,minWidth:86}}><div style={{fontSize:24,fontWeight:800,color:TEAL}}>{n}</div><div style={{fontSize:11,color:MUTED}}>{l}</div></div>)}</div><div style={{display:"flex",gap:8,margin:"24px 0"}}>{["Post Req","Browse Lots","Track"].map(x=><Button key={x} kind="secondary">{x}</Button>)}</div><Card><b style={{color:TEAL}}>ϟ GROK INSIGHT</b><p style={{margin:"8px 0 0",lineHeight:1.4}}>Chilli prices expected to drop next week. Wait before buying.</p></Card><h2 style={{fontSize:18}}>Active RFQs</h2>{[1,2].map(i=><Card key={i}><div style={{display:"flex",alignItems:"center",gap:12}}><img src={fallbackAssets["2041:279"]?.[i-1]} style={{width:40,height:40,borderRadius:8,objectFit:"cover"}}/><div style={{flex:1}}><b>Chilli – 200 quintals</b><div style={{fontSize:12,color:MUTED}}>5 matches found</div></div><div style={{width:54}}><Button kind="secondary">View</Button></div></div></Card>)}<h2 style={{fontSize:18}}>Recent Bids</h2><Card><div>You bid <b>₹158/kg</b> on LOT-556</div><div style={{marginTop:10,fontSize:11,color:"#2e7d32",fontWeight:700}}>LEADING <span style={{float:"right",color:"#999",fontWeight:400}}>2m ago</span></div></Card></main><BottomNav/></div>;}
function PostRequirement(){return <div><StatusBar/><Header title="Post Requirement"/><main style={{padding:20}}><Field label="Commodity" value="Select Commodity"/><Field label="Grade" value="Premium"/><div style={{display:"flex",gap:12}}><Field label="Quantity" value="200"/><Field label="Unit" value="quintal" width={100}/></div><div style={{marginTop:4}}><b style={{color:MUTED,fontSize:14}}>Moisture Tolerance (9%)</b><div style={{marginTop:10,display:"flex",gap:12,alignItems:"center"}}><div style={{width:66,height:4,borderRadius:2,background:"#ddd"}}/><b style={{color:TEAL}}>9%</b></div></div><div style={{marginTop:20}}><b style={{color:MUTED,fontSize:14}}>Packaging Preference</b><div style={{display:"flex",gap:8,marginTop:10}}>{["Jute Bag","PP Bag","Loose"].map((x,i)=><span key={x} style={{padding:"8px 16px",borderRadius:18,border:`1px solid ${i===0?TEAL:BORDER}`,background:i===0?"#e0f2f1":"#fff",color:i===0?TEAL:MUTED,fontSize:13}}>{x}</span>)}</div></div><div style={{marginTop:20}}><b style={{color:MUTED,fontSize:14}}>Delivery Location</b><div style={{marginTop:10,border:`1px solid ${BORDER}`,borderRadius:12,overflow:"hidden"}}><div style={{height:120,background:`#d9dedb url(${fallbackAssets["2041:278"]?.[0]}) center/cover`}}/><div style={{display:"flex",justifyContent:"space-between",padding:12,fontSize:13}}>Guntur, Andhra Pradesh <b style={{color:TEAL}}>Change</b></div></div></div><div style={{marginTop:20}}><Button>Publish RFQ</Button></div></main></div>;}
function RfqDetail(){return <div><StatusBar/><Header title="RFQ Detail"/><main style={{padding:20}}><Card><div style={{background:TEAL,color:"white",margin:-16,padding:16,borderRadius:"16px 16px 0 0",display:"flex",justifyContent:"space-between"}}><b style={{fontSize:20}}>⊗ Chilli</b><span style={{background:"#26a69a",padding:"4px 8px",borderRadius:4,fontSize:11}}>OPEN</span></div><div style={{paddingTop:28,display:"flex",justifyContent:"space-between"}}><div><div style={{fontSize:12,color:MUTED}}>Quantity</div><b>200 Quintals</b></div><div><div style={{fontSize:12,color:MUTED}}>Price Band</div><b>₹150–₹170/kg</b></div></div><div style={{marginTop:12,fontSize:12,color:MUTED}}>◷ Valid until 25 Oct 2024</div></Card><h2 style={{fontSize:18}}>✣ AI Best Matches</h2>{[["Rahul Farms","Guntur","95% Match","₹158/kg"],["Kisan Direct","Kurnool","88% Match","₹162/kg"],["Red Spice Co","Warangal","76% Match","₹155/kg"]].map(([n,loc,m,p])=><Card key={n}><div style={{display:"flex",justifyContent:"space-between"}}><div><b>{n}</b><div style={{fontSize:12,color:MUTED}}>{loc}</div></div><span style={{background:TEAL,color:"white",fontSize:11,padding:"4px 8px",borderRadius:4,fontWeight:700}}>{m}</span></div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:16}}><b style={{fontSize:16}}>{p}</b><div style={{width:100}}><Button kind="secondary">View Lot</Button></div></div></Card>)}<div style={{display:"flex",gap:12,marginTop:24}}><Button kind="secondary">Edit RFQ</Button><Button kind="secondary">Close RFQ</Button></div></main></div>;}
function BrowseLots(){return <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}><StatusBar/><Header title="Browse Lots" back={false}/><main style={{padding:16}}><Field label="" value="⌕ Search commodity or seller..."/><div style={{display:"flex",gap:8,margin:"0 0 12px",overflowX:"auto"}}>{["Commodity","Grade","Distance","Price"].map(x=><span key={x} style={{padding:"6px 12px",border:`1px solid ${BORDER}`,borderRadius:8,fontSize:12,color:MUTED,background:"#fff"}}>{x}⌄</span>)}</div><div style={{display:"flex",justifyContent:"space-between",color:MUTED,fontSize:14,marginBottom:12}}><span>Showing 124 results</span><b style={{color:TEAL}}>↕ Relevance</b></div>{[0,1].map(i=><Card key={i}><div style={{height:140,margin:-16,marginBottom:16,borderRadius:"16px 16px 0 0",background:`url(${fallbackAssets["2041:279"]?.[i%2]}) center/cover`}}/><div style={{display:"flex",justifyContent:"space-between"}}><div><b>LOT-556 • Chilli</b><div style={{fontSize:12,color:MUTED}}>Shiva Exports ★ 4.5</div></div><span style={{background:"#e0f2f1",color:TEAL,padding:"4px 8px",borderRadius:4,fontSize:11,fontWeight:700}}>92% Match</span></div><div style={{display:"flex",justifyContent:"space-between",alignItems:"end",marginTop:12}}><div style={{fontSize:12,color:MUTED}}>₹160/kg • 150 Qtl available<br/>Guntur (12 km away)</div><div style={{width:110}}><Button kind="secondary">View Details</Button></div></div></Card>)}</main><BottomNav active="Browse"/></div>;}
function LiveBidding(){return <div><StatusBar/><Header title="Live Bidding"/><main style={{padding:20}}><Card dark><div style={{fontSize:12,color:"#26a69a"}}>Current Lot</div><b style={{fontSize:18}}>Chilli – 150 Qtl</b><div style={{fontSize:12,color:"#26a69a"}}>Seller: Shiva Exports</div><span style={{float:"right",fontSize:28}}>⌖</span></Card><div style={{textAlign:"center",margin:"20px 0"}}><div style={{color:RED,fontSize:14,fontWeight:600}}>• AUCTION ENDING IN</div><div style={{fontSize:48,fontWeight:900,marginTop:10}}>02:15:33</div></div><div style={{display:"flex",gap:8}}>{[["STOP LOSS","₹150"],["HIGHEST","₹158"],["YOUR CAP","₹162"]].map(([a,b],i)=><Card key={a}><div style={{fontSize:10,color:"#999",textAlign:"center"}}>{a}</div><b style={{color:i===1?TEAL:"#333",display:"block",textAlign:"center",marginTop:4}}>{b}</b></Card>)}</div><h3 style={{fontSize:14,color:MUTED}}>Bid Ladder</h3>{[["#1","YOU","₹158/kg"],["#2","Anonymous","₹156/kg"],["#3","Anonymous","₹154/kg"]].map(([r,n,p],i)=><div key={r} style={{background:i===0?"#e0f2f1":"#fff",border:`1px solid ${i===0?TEAL:BORDER}`,borderRadius:12,padding:12,display:"flex",justifyContent:"space-between",marginBottom:8,fontWeight:700}}><span>{r} &nbsp; {n}</span><span style={{color:i===0?TEAL:"#222"}}>{p}</span></div>)}<Card><b>Auto-Bid (AI)</b><div style={{fontSize:12,color:MUTED}}>Bid up to ₹162/kg</div><span style={{float:"right",width:44,height:24,background:TEAL,borderRadius:12,marginTop:-24}}/></Card><div style={{marginTop:16}}><b style={{color:MUTED,fontSize:14}}>Manual Bid Price</b><div style={{marginTop:8}}><Field label="" value="Enter bid price ₹"/></div><Button>Place Bid</Button><div style={{marginTop:10}}><Button kind="secondary">▣ Video Verify</Button></div></div></main></div>;}

function GenericScreen({ title, screen }: { title: string; screen: string }) {
  const data = useMemo(() => ({
    "2041:282": ["Hire Inspector", ["Global Agri Lab", "SGS India Ltd.", "VerifyAgro Svc"]],
    "2041:283": ["Inspection Report", ["PASSED", "Moisture 11.2%", "Grade A"]],
    "2041:284": ["Track Delivery", ["Pickup Completed", "In Transit", "Delivery Arrived"]],
    "2041:285": ["Confirm Delivery", ["Order Token: TRD-9902", "Enter 6-digit OTP", "Confirm Delivery"]],
    "2041:286": ["Record Payment", ["Outstanding Amount ₹24,800", "Bank Transfer", "Upload Proof"]],
    "2041:287": ["My Ledger", ["Purchased ₹1.2M", "Paid ₹1.15M", "Outstanding ₹50,000"]],
    "2041:288": ["Rate This Seller", ["Quality ★★★★★", "Punctuality ★★★★★", "Communication ★★★★★"]],
    "2041:289": ["Raise Dispute", ["Quality Issue", "Quantity Mismatch", "Delayed Delivery", "Payment Dispute"]],
    "2041:290": ["Dispute #D-2041", ["Seller", "Arbitrator", "Resolution Proposal"]],
    "2041:291": ["Repeat Purchase", ["Chilli (Dry Red)", "Chilli (Teja S17)", "Adjust Quantity 200"]],
    "2041:292": ["Payment Methods", ["Trade Credit Limit ₹5,00,000", "HDFC Bank •••• 4421", "ICICI Bank •••• 9870"]],
    "2041:293": ["Orders", ["Chilli LOT-556", "Cotton LOT-121", "Cumin LOT-042"]],
    "2041:294": ["Order Detail", ["Chilli (Teja S17)", "200 Quintals", "Order #TRD-88219"]],
    "2041:295": ["Seller Profile", ["Raghavan Agri Svc.", "4.8 ★", "Verified Seller"]],
    "2041:296": ["Notifications", ["New bid received", "Inspection passed", "Payment reminder"]],
    "2041:297": ["Buyer Profile", ["Sonia", "Verified Buyer", "Guntur"]],
    "2041:298": ["Settings", ["Notifications", "Security", "Language"]],
    "2041:299": ["Saved Sellers", ["Raghavan Agri Svc.", "Shiva Exports"]],
    "2041:300": ["Saved Lots", ["LOT-556", "LOT-121"]],
    "2041:301": ["Support", ["Help Center", "Contact Support", "Report an Issue"]],
    "2041:302": ["Verification", ["Identity Verified", "Business Verified", "Bank Verified"]],
    "2041:303": ["Documents", ["GST Certificate", "PAN", "Bank Proof"]],
    "2041:304": ["Trade Credit", ["Limit ₹5,00,000", "Used ₹2.6L", "Available ₹2.4L"]],
    "2041:305": ["Add Payment Method", ["Bank Account", "UPI", "Card"]],
    "2041:306": ["Manage Bank Account", ["HDFC Bank", "•••• 4421", "Set Primary"]],
    "2041:307": ["Security", ["Passcode", "Biometric Login", "Two-factor Authentication"]],
    "2041:308": ["Transaction History", ["Debit ₹24,800", "Credit ₹50,000", "Debit ₹18,200"]],
    "2041:309": ["Buyer Notifications", ["Bidding alerts", "Delivery alerts", "Payment alerts"]],
    "2041:310": ["Payment Methods", ["Trade Credit Limit ₹5,00,000", "HDFC Bank •••• 4421", "ICICI Bank •••• 9870"]],
    "2041:311": ["More", ["Profile", "Settings", "Support"]],
  }[screen] ?? [title, ["Details", "Status", "Actions"]]), [screen, title]);
  return <div><StatusBar/><Header title={String(data[0])}/><main style={{padding:20}}><Card><h2 style={{margin:0,fontSize:18}}>{String(data[0])}</h2></Card>{(data[1] as string[]).map((item,i)=><Card key={i}><div style={{display:"flex",justifyContent:"space-between"}}><span>{item}</span>{i===0&&<span style={{color:TEAL,fontSize:12,fontWeight:700}}>ACTIVE</span>}</div></Card>)}<Button>{String((data[1] as string[]).at(-1))}</Button></main><BottomNav active="More"/></div>;
}

export default function BuyerWorkflow35Screens({ screen = "2041:277" }: { screen?: string }) {
  const [current, setCurrent] = useState(screen);
  const render = () => {
    if (current === "2041:277") return <Dashboard/>;
    if (current === "2041:278") return <PostRequirement/>;
    if (current === "2041:279") return <RfqDetail/>;
    if (current === "2041:280") return <BrowseLots/>;
    if (current === "2041:281") return <LiveBidding/>;
    return <GenericScreen title={screenTitles[current] ?? "Buyer"} screen={current}/>;
  };
  return <div data-node-id={current} style={{width:375,maxWidth:"100vw",minHeight:"100vh",margin:"0 auto",background:BG,fontFamily:"Arial, sans-serif"}}>{render()}<div style={{padding:12,display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"}}>{Object.keys(screenTitles).map(id=><button key={id} onClick={()=>setCurrent(id)} style={{border:`1px solid ${current===id?TEAL:BORDER}`,background:current===id?"#e0f2f1":"#fff",color:current===id?TEAL:MUTED,borderRadius:14,padding:"6px 8px",fontSize:10}}>{id.replace("2041:","")}</button>)}</div></div>;
}

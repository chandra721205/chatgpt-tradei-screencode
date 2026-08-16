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
  "2041:270": "Track Delivery",
  "2041:271": "Confirm Delivery",
  "2041:272": "Record Payment",
  "2041:273": "My Ledger",
  "2041:274": "Rate This Seller",
  "2041:275": "Raise Dispute",
  "2041:276": "Repeat Purchase",
};

const teal = "#00796b";
const bg = "#f5f7f7";

export default function BuyerRequirements15Screens({screen="2041:262"}:{screen?:string}) {
  const title=screens[screen]||"Buyer";
  return <div style={{minHeight:"100vh",background:bg,fontFamily:"DM Sans, Arial, sans-serif",color:"#1a1c1e"}}>
    <div data-node-id={screen} style={{width:375,maxWidth:"100%",minHeight:"812px",margin:"0 auto",display:"flex",flexDirection:"column"}}>
      <div style={{height:44,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px"}}><span style={{fontSize:15,fontWeight:600}}>9:41</span><span style={{fontSize:12,color:"#6b7280"}}>⌁ ◌</span></div>
      <header style={{display:"flex",alignItems:"center",gap:12,padding:"0 20px",height:56}}><span style={{fontSize:24}}>‹</span><h1 style={{fontSize:20,margin:0,fontWeight:700}}>{title}</h1></header>
      <main style={{padding:20,display:"flex",flexDirection:"column",gap:16}}>
        <section style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #e0e0e0"}}>
          <h2 style={{fontSize:18,margin:"0 0 12px"}}>{screen==="2041:262"?"Hello, Sonia":"Dry Red Chilli"}</h2>
          <p style={{fontSize:13,color:"#6b7280",margin:"6px 0"}}>Chilli • Grade A • Guntur</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:12}}>
            {[["Quantity","500 QTL"],["Target Price","₹162/kg"],["Payment","Net 15"],["Delivery","Guntur, AP"]].map(([a,b])=><div key={a} style={{background:"#f5f7f7",borderRadius:8,padding:12}}><div style={{fontSize:11,color:"#6b7280"}}>{a}</div><div style={{fontSize:14,fontWeight:700,marginTop:4}}>{b}</div></div>)}
          </div>
        </section>
        <section style={{background:"#e0f2f1",borderRadius:12,padding:16}}>
          <div style={{fontSize:12,fontWeight:700,color:"#004d40"}}>AI INSIGHT • GROK</div>
          <div style={{fontSize:14,marginTop:6}}>Chilli prices expected to drop next week. Wait before buying.</div>
        </section>
        <section style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #e0e0e0"}}>
          <div style={{fontSize:14,fontWeight:700,marginBottom:10}}>Current Activity</div>
          {[["Krishi Exports","98% Match"],["Guntur Traders","92% Match"],["ABC Exports","95% Match"]].map(([a,b])=><div key={a} style={{padding:"12px 0",borderBottom:"1px solid #eee",display:"flex",justifyContent:"space-between"}}><div><div style={{fontSize:14,fontWeight:600}}>{a}</div><div style={{fontSize:11,color:"#6b7280"}}>150 QTL • ₹162/kg</div></div><span style={{fontSize:11,color:teal,fontWeight:700}}>{b}</span></div>)}
        </section>
        <button style={{height:48,borderRadius:8,border:0,background:teal,color:"white",fontSize:15,fontWeight:700}}>Continue</button>
      </main>
      <div style={{marginTop:"auto",background:"#fff",borderTop:"1px solid #e0e0e0",display:"flex",justifyContent:"space-around",padding:"10px 6px 14px"}}>{["Home","Requirements","Browse","Orders","More"].map((x,i)=><div key={x} style={{fontSize:10,color:i===0?teal:"#6b7280",textAlign:"center"}}><div style={{fontSize:20}}>{["⌂","☷","⌕","▣","…"][i]}</div>{x}</div>)}</div>
    </div>
  </div>;
}

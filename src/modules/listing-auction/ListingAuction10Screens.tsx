import React from 'react';

const screenStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: '#f8fafc',
  color: '#0f172a',
  fontFamily: 'Inter, system-ui, sans-serif',
};

const topBar: React.CSSProperties = { padding: '14px 20px 10px', fontSize: 14, display: 'flex', justifyContent: 'space-between' };
const header: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', borderBottom: '1px solid #e2e8f0', background: '#fff' };
const title: React.CSSProperties = { fontSize: 20, fontWeight: 700, margin: 0 };
const content: React.CSSProperties = { padding: 20, display: 'flex', flexDirection: 'column', gap: 16 };
const card: React.CSSProperties = { background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 };
const button = (bg: string, fg = '#fff'): React.CSSProperties => ({ width: '100%', minHeight: 46, borderRadius: 8, border: 'none', background: bg, color: fg, fontWeight: 700, fontSize: 15 });
const input: React.CSSProperties = { width: '100%', boxSizing: 'border-box', minHeight: 44, borderRadius: 8, border: '1px solid #e2e8f0', padding: '0 12px', fontSize: 14, background: '#fff' };

function Layout({ title: t, children }: { title: string; children: React.ReactNode }) {
  return <div style={screenStyle}>
    <div style={topBar}><span>9:41</span><span>◔ ◜▾</span></div>
    <div style={header}><span style={{fontSize: 24}}>‹</span><h1 style={title}>{t}</h1></div>
    <div style={content}>{children}</div>
  </div>;
}

function CreateListing(){ return <Layout title="Create Listing">
  <span style={{background:'#f3f4f6',padding:'6px 12px',borderRadius:999,fontSize:10,fontWeight:700,width:'fit-content'}}>STEP 1 OF 2: SELECT & CONFIGURE</span>
  <label>Select Producer<input style={input} placeholder="Choose a producer" /></label>
  <label>Select Token<input style={input} value="Teja Chilli | A Grade | 2,500kg" readOnly /></label>
  <div style={card}><div style={{display:'flex',justifyContent:'space-between',fontWeight:700}}>Token ID <span style={{color:'#2563eb'}}>TRD-CHL-089234</span></div><p style={{color:'#94a3b8',fontSize:12}}>Crop: Chilli (Teja) · Grade: A</p><p style={{color:'#94a3b8',fontSize:12}}>Available: 2,500 kg (50 bags)</p><div style={{borderTop:'1px solid #e5e7eb',paddingTop:8,fontSize:10,color:'#94a3b8'}}>STORAGE: PRODUCER'S FARM</div></div>
  <label>Quantity to List<input style={input} value="2,500 kg" readOnly /></label>
  <div style={{fontSize:10,color:'#94a3b8',fontWeight:700}}>LISTING CONFIGURATION</div>
  <label>Offer Price (₹/kg)<input style={input} value="160" readOnly /></label>
  <label>Stop-Loss Price (minimum)<input style={input} placeholder="e.g. 150" /></label>
  <p style={{fontSize:12,color:'#94a3b8'}}>Bids below this will be rejected automatically</p>
  <label>Listing Duration<input style={input} value="3 days" readOnly /></label>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontWeight:700}}>Auto-extend if bids active? <div style={{width:44,height:24,background:'#f97316',borderRadius:999}} /></div>
  <div style={{background:'#fffbeb',padding:12,borderRadius:8,color:'#f59e0b'}}>ⓘ Producer OTP required for price confirmation</div>
  <button style={button('#f97316')}>Preview Listing</button>
</Layout> }

function EditListing(){ return <Layout title="Edit Listing"><div style={card}><b>TRD-CHL-089234</b><span style={{float:'right',color:'#16a34a'}}>ACTIVE</span><p style={{color:'#16a34a'}}>Current bid: ₹158/kg</p></div><label>Offer Price<input style={input} value="160" readOnly/></label><label>Stop-Loss Price<input style={input} value="150" readOnly/></label><label>Listing Duration<input style={input} value="3 days" readOnly/></label><div style={{background:'#fffbeb',padding:12,borderRadius:8,color:'#f59e0b'}}>Changing price requires producer OTP</div><button style={button('#f97316')}>Save Changes</button><button style={button('#fff','#ef4444')}>Delete Listing</button></Layout> }

function Listings(){ return <Layout title="Listings"><input style={input} placeholder="Search token ID, crop, producer"/><div style={{display:'flex',gap:8,fontSize:12}}><span style={{background:'#f97316',color:'#fff',padding:'6px 10px',borderRadius:999}}>Active (3)</span><span style={{padding:'6px 10px'}}>Paused (1)</span><span style={{padding:'6px 10px'}}>Expired (2)</span><span style={{padding:'6px 10px'}}>Sold (5)</span></div>{['Chilli (Teja) – Grade A','Turmeric (Salem) – Premium','Paddy (Basmati) – Super','Cumin (Bold) – Export'].map((x,i)=><div key={x} style={card}><div style={{display:'flex',justifyContent:'space-between'}}><b>{x}</b><span style={{color:i===0?'#16a34a':'#64748b'}}>{i===0?'ACTIVE':'PAUSED'}</span></div><p style={{fontSize:12,color:'#64748b'}}>Token: TRD-{i+1}2345 · Producer Rajesh K.</p><p>Current bid: <b>₹{158-i*2}/kg</b></p>{i===0&&<button style={button('#f97316')}>Edit</button>}</div>)}</Layout> }

function LiveAuction(){ return <Layout title="Live Auction"><div style={card}><b>Chilli (Teja) – Grade A</b><p>Token TRD-CHL-089234 · Current Highest ₹158/kg</p><div style={{color:'#f97316',fontSize:30,fontWeight:800,textAlign:'center',padding:10}}>02:15:33</div><button style={button('#f97316')}>Accept Highest Bid</button></div><div style={card}><b>Bid Ladder</b>{['₹158/kg · Buyer A','₹155/kg · Buyer C','₹152/kg · Buyer B'].map((b,i)=><div key={i} style={{padding:'12px 0',borderBottom:'1px solid #e2e8f0',display:'flex',justifyContent:'space-between'}}><span>{b}</span><span style={{color:i===0?'#16a34a':'#64748b'}}>{i===0?'LIVE':'OUTBID'}</span></div>)}<button style={button('#f97316')}>Force Close Auction</button></div></Layout> }

function Negotiation(){ return <Layout title="Negotiation"><div style={card}><b>Chilli – 2,500 kg</b><p>Buyer A · Current Offer ₹148/kg</p><div style={{background:'#fff7ed',padding:10,borderRadius:8,color:'#f97316'}}>Any price change requires producer OTP approval</div><p>Counter Offer: ₹150/kg</p><button style={button('#f97316')}>Send Counter Offer</button><button style={button('#16a34a')}>Accept Offer (₹150)</button><button style={button('#fff','#ef4444')}>Reject Offer</button></div></Layout> }

function SamplingRequest(){ return <Layout title="Sampling Request"><div style={card}><b>Buyer Rank A</b><p>Quantity: 2,500 kg</p><label>Sampling Date<input style={input} value="Tomorrow, 21 Jun 2025" readOnly/></label><label>Select Time<input style={input} value="10:00 AM – 5:00 PM" readOnly/></label><label>Sampling Location<input style={input} value="Market yard" readOnly/></label><button style={button('#f97316')}>Send Sampling Invitation</button></div></Layout> }

function SamplingResult(){ return <Layout title="Sampling Result"><div style={card}><b>Buyer Rank A</b><p style={{color:'#64748b'}}>Date: 21 Jun 2025, 10:00 AM | Random (6/50)</p>{[['Moisture %','≤10%','8.5%'],['Grade','A','A'],['Foreign Matter','≤2%','1.5%']].map(([n,e,a])=><div key={n} style={{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:'1px solid #e2e8f0'}}><div><b>{n}</b><div style={{fontSize:12,color:'#64748b'}}>Exp: {e} | Act: {a}</div></div><span style={{color:'#22c55e',fontWeight:700}}>PASS ✓</span></div>)}<div style={{background:'#f0fdf4',padding:12,borderRadius:8,color:'#22c55e',fontWeight:700}}>PASS Overall Result ✓</div><button style={button('#22c55e')}>Confirm Sale</button><button style={button('#fff','#ef4444')}>Raise Dispute</button></div></Layout> }

function CancelAuction(){ return <Layout title="Cancel Auction"><div style={{background:'#fef2f2',padding:16,borderRadius:12,color:'#ef4444',fontWeight:700}}>⚠ Action is irreversible. Bids will be invalidated.</div><label>Cancellation Reason<input style={input} value="Select Reason" readOnly /></label><label>Additional Details<textarea style={{...input,minHeight:100,paddingTop:12}} placeholder="Specify reason for cancellation..." /></label><button style={button('#ef4444')}>Cancel Auction</button></Layout> }

function NextBidder(){ return <Layout title="Next Bidder"><div style={{background:'#fef2f2',padding:16,borderRadius:12}}><b>Original High: Buyer A (₹158/kg)</b><p style={{color:'#ef4444'}}>Cancelled · Quality not matching</p></div><div style={card}><b>Bidder B</b><p style={{color:'#64748b'}}>₹156/kg · ACTIVE</p><button style={button('#f97316')}>Notify</button></div><div style={card}><b>Bidder C</b><p style={{color:'#64748b'}}>₹155/kg · QUEUED</p><button style={button('#e2e8f0','#64748b')}>Notify</button></div><div style={{background:'#0f172a',color:'#fff',padding:16,borderRadius:12}}>Message to Bidder B: The highest bidder has withdrawn. You are now the highest bidder at ₹156/kg.<button style={{...button('#f97316'),marginTop:12}}>Send Notification</button></div><div style={{textAlign:'center',color:'#f97316',fontWeight:800}}>01:59:32</div></Layout> }

function ForceClose(){ return <Layout title="Force Close Auction"><div style={{background:'#fef2f2',padding:16,borderRadius:12,color:'#ef4444',fontWeight:700}}>⚠ Auction will close immediately. All bids invalidated.</div><div style={card}><b>Token TRD-CHL-089234</b><p>Time Left: 20m · Highest Bid: ₹148/kg</p><label>Reason for Force Close<input style={input} value="Stop-loss not met" readOnly /></label><label>Additional Details<textarea style={{...input,minHeight:90,paddingTop:12}} placeholder="Market price trend is downward..." /></label><button style={button('#ef4444')}>Force Close Auction</button></div></Layout> }

export default function ListingAuction10ScreenRouter(){
  const route = window.location.hash.replace(/^#/,'');
  switch(route){
    case 'listing-create': return <CreateListing/>;
    case 'listing-edit': return <EditListing/>;
    case 'listing-list': return <Listings/>;
    case 'auction-live': return <LiveAuction/>;
    case 'auction-negotiation': return <Negotiation/>;
    case 'auction-sampling-request': return <SamplingRequest/>;
    case 'auction-sampling-result': return <SamplingResult/>;
    case 'auction-cancel': return <CancelAuction/>;
    case 'auction-next-bidder': return <NextBidder/>;
    case 'auction-force-close': return <ForceClose/>;
    default: return <Listings/>;
  }
}

import React from 'react';

const screens = [
  { id:'2041:174', title:'Bill Discounting', body:'Total Outstanding ₹4,28,500 · Eligible for Discount ₹3,20,000 · 3 invoices. Eligible / Pending / Discounted invoice workflow.' },
  { id:'2041:175', title:'Financiers', body:'HDFC Bank 1.2%–2.0% · Sharma Enterprises 1.5% flat · compare financiers.' },
  { id:'2041:176', title:'Request Bill Purchase', body:'Selected invoice INV-20250620-001 · HDFC Bank · proposed discount 1.5% · processing fee ₹200 · net payable ₹1,18,000.' },
  { id:'2041:177', title:'Discount Offer', body:'HDFC Bank offer valid until 22 Jun 2025 · discount ₹1,800 · fee ₹200 · net payable ₹1,18,000 · accept/reject with OTP.' },
  { id:'2041:178', title:'Discount Receipt', body:'Bill Discounted Successfully · transaction TRD-BD-20250620-001 · net received ₹1,18,000 · download PDF / share via WhatsApp.' },
] as const;

const style: React.CSSProperties = {
  maxWidth:375, minHeight:812, margin:'0 auto', background:'#f5f5f5', color:'#1f2937', fontFamily:'Inter, Arial, sans-serif', padding:20, boxSizing:'border-box'
};

export default function BillDiscounting5Screens({screen='2041:174'}:{screen?:string}) {
  const active = screens.find(s=>s.id===screen) ?? screens[0];
  return <div style={style} data-node-id={active.id}>
    <div style={{fontSize:14,fontWeight:600,display:'flex',justifyContent:'space-between',marginBottom:16}}>9:41 <span>⌁ ◔</span></div>
    <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}><span style={{fontSize:24}}>‹</span><h1 style={{margin:0,fontSize:20}}>{active.title}</h1></div>
    <div style={{background:'#fff',borderRadius:12,padding:16,boxSizing:'border-box'}}>
      <p style={{fontSize:13,lineHeight:1.5,marginTop:0}}>{active.body}</p>
      {active.id==='2041:174' && <><div style={{borderLeft:'4px solid #2563eb',padding:12,marginTop:16}}>₹3,20,000 eligible</div><button style={{...btn('#2563eb'),marginTop:16}}>Request Bulk Discount</button></>}
      {active.id==='2041:175' && <><div style={card}>HDFC Bank · 1.2%–2.0%<button style={btn('#2563eb')}>Select Financier</button></div><div style={card}>Sharma Enterprises · 1.5% flat<button style={btn('#2563eb')}>Select Financier</button></div></>}
      {active.id==='2041:176' && <><div style={row}>Invoice Amount <b>₹1,20,000</b></div><div style={row}>Discount <b style={{color:'#ef4444'}}>-₹1,800</b></div><div style={row}>Processing Fee <b style={{color:'#ef4444'}}>-₹200</b></div><div style={{...row,borderTop:'1px solid #e5e7eb',paddingTop:12}}>Net Payable <b style={{color:'#2563eb'}}>₹1,18,000</b></div><button style={btn('#2563eb')}>Submit Request</button></>}
      {active.id==='2041:177' && <><div style={{background:'#fff7ed',padding:12,borderRadius:8}}>Offer valid until 22 Jun 2025 · 2 DAYS LEFT</div><button style={btn('#2563eb')}>Accept Offer</button><button style={{...btn('#fff'),color:'#ef4444',border:'1px solid #ef4444'}}>Reject Offer</button></>}
      {active.id==='2041:178' && <><div style={{background:'#16a34a',color:'#fff',padding:20,borderRadius:12,textAlign:'center',marginBottom:16}}><h2 style={{margin:'0 0 8px',fontSize:18}}>Bill Discounted Successfully</h2><div style={{opacity:.8,fontSize:12}}>20 Jun 2025 · 10:42 AM</div></div><div style={row}>Invoice Amount <b>₹1,20,000</b></div><div style={row}>Discount <b style={{color:'#ef4444'}}>-₹1,800</b></div><div style={row}>Processing Fee <b style={{color:'#ef4444'}}>-₹200</b></div><div style={{...row,borderTop:'1px solid #e5e7eb',paddingTop:12}}>Net Received <b style={{color:'#16a34a'}}>₹1,18,000</b></div><button style={btn('#2563eb')}>Download PDF</button><button style={{...btn('#fff'),color:'#16a34a',border:'1px solid #16a34a'}}>Share via WhatsApp</button></>}
    </div>
    <div style={{display:'flex',gap:8,marginTop:18,flexWrap:'wrap'}}>{screens.map(s=><a key={s.id} href={`#bill-${s.id.replace(':','-')}`} style={{fontSize:11,color:s.id===active.id?'#2563eb':'#6b7280',textDecoration:'none'}}>{s.id}</a>)}</div>
  </div>
}

const btn=(bg:string):React.CSSProperties=>({width:'100%',height:48,borderRadius:10,border:bg==='#fff'?'1px solid #e5e7eb':'none',background:bg,color:bg==='#fff'?'#2563eb':'#fff',fontWeight:700,marginTop:12});
const card:React.CSSProperties={border:'1px solid #e5e7eb',borderRadius:12,padding:16,marginTop:12};
const row:React.CSSProperties={display:'flex',justifyContent:'space-between',padding:'10px 0',fontSize:14};
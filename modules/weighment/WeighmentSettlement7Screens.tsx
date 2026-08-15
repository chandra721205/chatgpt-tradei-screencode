import React from 'react';

const screens = {
  schedule: {
    title: 'Weighment Schedule',
    token: 'TRD-CHL-089234',
    status: 'AWAITING START',
    crop: 'Chilli Grade A',
    buyer: 'Sonia Enterprises',
    time: 'Today, 3:00 PM',
    location: 'Guntur Yard Weighbridge 2',
    primary: 'Start Weighment',
  },
  start: {
    title: 'Start Weighment',
    token: 'TRD-CHL-089234',
    buyer: 'Sonia Enterprises',
    total: '50',
  },
  weighing: { title: 'Weighing', id: 'W-20250620-001' },
  variance: { title: 'Weight Variance', expected: '2,500 kg', actual: '2,400 kg', difference: '-100 kg' },
  final: { title: 'Final Weight', gross: '2,750 kg', tare: '350 kg', net: '2,400 kg' },
  bill: { title: 'Generate Bill', buyer: 'Sonia Enterprises', rate: '₹158/kg', gross: '₹3,79,200', net: '₹3,14,324' },
  settlement: { title: 'Settlement', producer: 'Rajesh Kumar', amount: '₹3,14,324' },
};

const baseStyle: React.CSSProperties = {
  width: 375,
  minHeight: 812,
  background: '#f5f5f5',
  color: '#1f2937',
  fontFamily: 'Geist, Inter, system-ui, sans-serif',
};

const cardStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 4px 6px rgba(0,0,0,.03)',
  padding: 16,
};

function StatusBadge({children, tone='orange'}:{children:React.ReactNode; tone?:'orange'|'blue'|'gray'|'green'}) {
  const tones={orange:['#fff7ed','#f97316'],blue:['#eff6ff','#3b82f6'],gray:['#f3f4f6','#9ca3af'],green:['#ecfdf5','#059669']} as const;
  const [bg,color]=tones[tone];
  return <span style={{background:bg,color,padding:'3px 8px',borderRadius:4,fontSize:10,fontWeight:700,textTransform:'uppercase'}}>{children}</span>
}

function Header({title}:{title:string}) {
  return <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 16px'}}>
    <div style={{display:'flex',gap:12,alignItems:'center'}}><span style={{fontSize:24}}>‹</span><h1 style={{margin:0,fontSize:20,fontWeight:700}}>{title}</h1></div>
    <span style={{fontSize:20,color:'#6b7280'}}>☷</span>
  </div>
}

export function WeighmentSchedule(){
  const items=[
    {...screens.schedule, tone:'orange'},
    {token:'TRD-123',status:'IN PROGRESS',tone:'blue',crop:'Cotton',buyer:'ABC Exports',time:'Started 2:00 PM (Duration 25 min)',location:'Platform 1',primary:'Resume'},
    {token:'TRD-456',status:'COMPLETED',tone:'gray',crop:'Turmeric',buyer:'Local Mandi',time:'Completed 19 Jun',location:'Yard A',primary:'View Slip'},
  ];
  return <div style={baseStyle} data-node-id="2041:167"><Header title="Weighment Schedule"/><div style={{display:'flex',gap:8,padding:'8px 16px 16px'}}>{['Pending (3)','In Progress (1)','Completed (5)'].map((x,i)=><span key={x} style={{padding:'8px 12px',borderRadius:20,background:i===0?'#f97316':'#fff',color:i===0?'#fff':'#6b7280',border:i===0?'none':'1px solid #e5e7eb',fontSize:13}}>{x}</span>)}</div><div style={{display:'grid',gap:12,padding:'0 16px'}}>{items.map((it:any)=><div key={it.token} style={cardStyle}><div style={{display:'flex',justifyContent:'space-between'}}><div><div style={{fontSize:12,color:'#6b7280',textTransform:'uppercase'}}>Token ID</div><div style={{fontSize:14,fontFamily:'ui-monospace',fontWeight:600}}>{it.token}</div></div><StatusBadge tone={it.tone}>{it.status}</StatusBadge></div><div style={{borderTop:'1px dashed #e5e7eb',margin:'12px 0'}}/><div style={{fontWeight:700,fontSize:14,marginBottom:10}}>⚖️ {it.crop}</div><div style={{display:'grid',gap:6,fontSize:13,color:'#6b7280'}}><div>♙ Buyer: <b style={{color:'#1f2937'}}>{it.buyer}</b></div><div>◫ {it.time}</div><div>⌖ {it.location}</div></div><button style={{marginTop:16,width:'100%',height:48,borderRadius:12,border:it.tone==='orange'?'none':`1px solid ${it.tone==='blue'?'#f97316':it.tone==='gray'?'#d1d5db':'#f97316'}`,background:it.tone==='orange'?'#f97316':it.tone==='gray'?'#e5e7eb':'#fff',color:it.tone==='orange'?'#fff':it.tone==='gray'?'#9ca3af':'#f97316',fontWeight:700}}>{it.primary}</button></div>)}</div><div style={{padding:'36px 16px',textAlign:'center',fontSize:12,color:'#6b7280'}}>No more weighments for today</div><BottomNav active="CA Module"/></div>
}

function Simple({title, children}:{title:string;children:React.ReactNode}){return <div style={baseStyle}><Header title={title}/><div style={{padding:16,display:'grid',gap:16}}>{children}</div><BottomNav active="CA Module"/></div>}
function Box({label,value,color='#1f2937'}:{label?:string;value:string;color?:string}){return <div style={{...cardStyle}}>{label&&<div style={{fontSize:12,color:'#6b7280',textTransform:'uppercase'}}>{label}</div>}<div style={{fontSize:22,fontWeight:800,color}}>{value}</div></div>}

export function StartWeighment(){return <Simple title="Start Weighment"><Box value={'Buyer: '+screens.start.buyer+'\nTotal expected bags: '+screens.start.total}/><div style={{...cardStyle,textAlign:'center',padding:28}}><div style={{fontSize:48,marginBottom:12}}>▣</div><div style={{fontWeight:700}}>Scan to pair with Buyer's device</div><div style={{marginTop:16,color:'#059669'}}>Connected to Buyer's iPhone</div></div><div style={cardStyle}><b>Select your role</b><div style={{marginTop:14,padding:12,border:'1px solid #f97316',borderRadius:10}}>This device is REFERENCE<br/><span style={{fontSize:12,color:'#6b7280'}}>Commission Agent staff / Weighing Lead</span></div><div style={{marginTop:10,padding:12,border:'1px solid #e5e7eb',borderRadius:10}}>This device is CLIENT<br/><span style={{fontSize:12,color:'#6b7280'}}>Buyer staff / Witness</span></div></div><button style={{height:48,border:0,borderRadius:12,background:'#f97316',color:'#fff',fontWeight:700}}>Start Weighing</button></Simple>}
export function Weighing(){return <Simple title="Weighing"><Box label="ID" value={screens.weighing.id}/><div style={cardStyle}><div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',fontSize:12,fontWeight:700,color:'#6b7280',gap:8}}>{['BAG #','CA (KG)','BUYER (KG)','STATUS'].map(x=><div key={x}>{x}</div>)}{['#1','42.0','42.0','✓','#2','43.0','43.0','✓','#3','42.5','43.0','!','#4','0.0','0.0','—'].map((x,i)=><div key={i} style={{padding:'10px 4px',color:i===10?'#f97316':'#1f2937'}}>{x}</div>)}</div></div><div style={{...cardStyle,border:'1px solid #fed7aa',background:'#fff7ed'}}>Bag #3 Mismatch (0.5 kg)</div><button style={{height:48,border:0,borderRadius:12,background:'#e5e7eb',color:'#9ca3af',fontWeight:700}}>Complete Weighment</button></Simple>}
export function WeightVariance(){return <Simple title="Weight Variance"><div style={{...cardStyle,background:'#fef9c3',border:'1px solid #facc15'}}><div style={{fontWeight:700}}>Variance Detected <span style={{color:'#ef4444'}}>-4% VARIANCE</span></div><div style={{display:'flex',justifyContent:'space-between',marginTop:14}}><div><div style={{fontSize:12,color:'#6b7280'}}>Expected</div><b style={{fontSize:22}}>2,500</b> kg</div><div><div style={{fontSize:12,color:'#6b7280'}}>Actual</div><b style={{fontSize:22}}>2,400</b> kg</div></div><div style={{color:'#ef4444',marginTop:12}}>Difference: -100 kg</div></div><div><h3 style={{fontSize:14}}>Reason for variance</h3>{['Natural moisture loss','Bag damage / spillage','Weighbridge calibration issue','Other'].map((x,i)=><div key={x} style={{padding:14,background:'#fff',border:`1px solid ${i===0?'#f97316':'#e5e7eb'}`,borderRadius:10,marginBottom:8}}>{i===0?'◉':'○'} {x}</div>)}</div><button style={{height:48,border:0,borderRadius:12,background:'#f97316',color:'#fff',fontWeight:700}}>Lock Weight</button></Simple>}
export function FinalWeight(){return <Simple title="Final Weight"><div style={cardStyle}><div style={{display:'flex',justifyContent:'space-between'}}><div><div style={{fontSize:12,color:'#6b7280'}}>GROSS WEIGHT</div><b>2,750 kg</b></div><div><div style={{fontSize:12,color:'#6b7280'}}>TARE WEIGHT</div><b>350 kg</b></div></div><div style={{textAlign:'center',marginTop:28}}><div style={{fontSize:12,color:'#f97316',fontWeight:700}}>FINAL NET WEIGHT</div><div style={{fontSize:36,fontWeight:800}}>2,400 kg</div></div></div><div style={{...cardStyle,height:160,border:'1px dashed #d1d5db',display:'grid',placeItems:'center',color:'#9ca3af'}}>Preview Weight Slip</div><button style={{height:48,border:0,borderRadius:12,background:'#f97316',color:'#fff',fontWeight:700}}>Lock Weight</button></Simple>}
export function GenerateBill(){return <Simple title="Generate Bill"><div style={cardStyle}><div style={{fontSize:12,color:'#f97316'}}>TRD-CHL-089234</div><h3>Buyer: Sonia Enterprises</h3><div>Weight: 2,400 kg · Rate: ₹158/kg</div><div style={{marginTop:14,background:'#1f2937',color:'#fff',padding:12,borderRadius:8,display:'flex',justifyContent:'space-between'}}><span>Gross Amount</span><b>₹3,79,200</b></div><div style={{marginTop:16}}>Deductions & Fees</div><div style={{marginTop:10,display:'grid',gap:8}}>{[['Transport charges','₹3,500'],['Market fee (1%)','₹3,792'],['CA Commission (2%)','₹7,584'],['Advance repayment','₹50,000'],['Storage charges','₹0'],['Insurance','₹0']].map(([a,b])=><div key={a} style={{display:'flex',justifyContent:'space-between',fontSize:13}}><span>{a}</span><b>{b}</b></div>)}</div></div><Box label="Net Payable to Producer" value="₹3,14,324" color="#059669"/><button style={{height:48,border:0,borderRadius:12,background:'#f97316',color:'#fff',fontWeight:700}}>Generate Bill & Send to Buyer</button></Simple>}
export function Settlement(){return <Simple title="Settlement"><div style={cardStyle}><div style={{fontSize:13,color:'#6b7280'}}>Producer: {screens.settlement.producer}</div><div style={{fontSize:14,marginTop:8}}>Net Amount to Settle</div><div style={{fontSize:34,fontWeight:800,color:'#059669',marginTop:6}}>{screens.settlement.amount}</div></div><div style={{...cardStyle,textAlign:'center',padding:28}}><div style={{fontSize:48,color:'#22c55e'}}>✓</div><h2>Settlement Confirmed!</h2><button style={{height:48,border:0,borderRadius:12,background:'#f97316',color:'#fff',fontWeight:700,width:'100%'}}>Download Settlement Receipt</button><div style={{marginTop:14,color:'#6b7280'}}>Done</div></div></Simple>}

function BottomNav({active}:{active:string}){return <div style={{position:'sticky',bottom:0,marginTop:20,background:'#fff',borderTop:'1px solid #e5e7eb',display:'flex',justifyContent:'space-around',padding:'10px 8px'}}>{['Home','Trade','CA Module','Accounts','Profile'].map(x=><div key={x} style={{fontSize:11,color:x===active?'#f97316':'#9ca3af',fontWeight:x===active?700:500,textAlign:'center'}}>{x}</div>)}</div>}

export default function WeighmentSettlement7Router(){const route=window.location.hash.replace('#','');switch(route){case 'ca-weighment':return <WeighmentSchedule/>;case 'ca-start-weighment':return <StartWeighment/>;case 'ca-weighing':return <Weighing/>;case 'ca-weight-variance':return <WeightVariance/>;case 'ca-final-weight':return <FinalWeight/>;case 'ca-generate-bill':return <GenerateBill/>;case 'ca-settlement':return <Settlement/>;default:return <WeighmentSchedule/>;}}

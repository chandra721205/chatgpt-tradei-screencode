import React from 'react';

const P = '#6A1B9A';
const BG = '#FFFFFF';
const MUTED = '#666666';
const BORDER = '#EEEEEE';

const nav = (active: string) => (
  <div style={{display:'flex',justifyContent:'space-between',padding:'12px 16px 24px',borderTop:`1px solid ${BORDER}`,background:BG}}>
    {['Home','Discover','Inventory','Finance','More'].map(label=>(
      <div key={label} style={{width:64,textAlign:'center',fontSize:10,color:active===label?P:MUTED,fontWeight:600}}>{label}</div>
    ))}
  </div>
);

function Shell({title,children,active='Discover'}:{title:string;children:React.ReactNode;active?:string}){
  return <div style={{width:375,minHeight:812,background:BG,color:'#1A1A1A',fontFamily:'Arial, sans-serif',display:'flex',flexDirection:'column'}} data-screen={title}>
    <div style={{padding:'12px 20px',display:'flex',justifyContent:'space-between',fontSize:14}}><span>9:41</span><span>••• ◔</span></div>
    <div style={{padding:'16px',fontSize:22,fontWeight:800}}>{title}</div>
    <div style={{flex:1}}>{children}</div>
    {nav(active)}
  </div>
}

const Button=({children,outline=false}:{children:React.ReactNode;outline?:boolean})=><button style={{flex:1,height:40,borderRadius:8,border:`1px solid ${P}`,background:outline?'#FFF':P,color:outline?P:'#FFF',fontWeight:700}}>{children}</button>;

function Card({children}:{children:React.ReactNode}){return <div style={{background:'#fff',border:`1px solid ${BORDER}`,borderRadius:12,padding:16,boxShadow:'0 4px 12px rgba(0,0,0,.03)'}}>{children}</div>}

export default function TraderMarket12Screens({screen}:{screen?:string}){
  const s=screen||'2041:194';
  if(s==='2041:194') return <Shell title="Good morning, Amit" active="Home"><div style={{padding:'0 16px'}}><div style={{display:'flex',gap:12,overflow:'hidden'}}>{['Active Buys|3','Inventory Value|₹18.2L','Finance Utilized|₹5L/₹10L','Pending Deliveries|2'].map(x=>{const [a,b]=x.split('|');return <Card key={a}><div style={{color:MUTED,fontSize:12}}>{a}</div><div style={{fontSize:18,fontWeight:800,marginTop:4}}>{b}</div></Card>})}</div><div style={{display:'flex',gap:8,overflow:'hidden',padding:'16px 0'}}>{['Discover Lots','Create RFQ','Book Logistics','View Inventory'].map(x=><span key={x} style={{border:`1px solid ${BORDER}`,borderRadius:20,padding:'8px 16px',fontSize:12,whiteSpace:'nowrap'}}>{x}</span>)}</div><div style={{background:'#F3E5F5',padding:16,borderRadius:12}}><b style={{color:P}}>✦ Market Intelligence</b><p>Chilli prices expected to rise 5% in Guntur due to harvest delays. Consider buying now.</p><a style={{color:P,fontWeight:700,textDecoration:'underline'}}>View Details</a></div><h2>Alerts <span style={{float:'right',color:P,fontSize:12}}>Clear All</span></h2>{[['Payment due for Lot #234','2h ago'],['Price change in Chilli (Teja)','5h ago'],['Logistics confirmed for Pune','1d ago']].map(([a,b],i)=><div key={a} style={{padding:'12px 0',display:'flex',gap:12}}><span style={{color:i===0?'#C62828':i===1?'#EF6C00':'#2E7D32'}}>●</span><div><b>{a}</b><div style={{fontSize:12,color:MUTED}}>{b}</div></div><span style={{marginLeft:'auto'}}>›</span></div>)}</div></Shell>;
  if(s==='2041:195') return <Shell title="Marketplace"><div style={{padding:'0 16px'}}><div style={{background:'#F5F5F7',padding:12,borderRadius:12,color:MUTED}}>⌕ Search commodity, location...</div><div style={{display:'flex',gap:8,padding:'16px 0',overflow:'hidden'}}>{['Commodity: Chilli','Grade: A','Price'].map((x,i)=><span key={x} style={{background:i===0?P:'#FFF',color:i===0?'#FFF':'#1A1A1A',border:i===0?'none':`1px solid ${BORDER}`,borderRadius:20,padding:'8px 16px',fontSize:12,whiteSpace:'nowrap'}}>{x}</span>)}</div><div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:MUTED,marginBottom:12}}><span>Found 12 Lots</span><span>Sort by: Price (Low)⌄</span></div>{['Chilli (Teja) – Grade A','Chilli (334) – Grade B'].map((x,i)=><Card key={x}><div style={{display:'flex',justifyContent:'space-between'}}><div><b>{x}</b><div style={{fontSize:12,color:MUTED}}>{i?'85 MT • Warangal':'120 MT • Guntur'}</div></div><span>☆</span></div><div style={{background:'#F5F5F7',padding:12,borderRadius:8,margin:'12px 0',display:'flex',gap:24}}><div><small>Moisture</small><br/><b>{i?'13.4%':'12.1%'}</b></div><div><small>QC Status</small><br/><b style={{color:'#2E7D32'}}>Certified</b></div></div><div style={{display:'flex',justifyContent:'space-between'}}><div><small>Exp. Price</small><br/><b style={{color:P}}>{i?'₹24,500':'₹28,000'}/quintal</b></div><div style={{fontSize:11}}>{i?'Siva Traders':'Priya Agencies (CA)'}<br/>★★★★☆</div></div><div style={{display:'flex',gap:8,marginTop:12}}><Button outline>View Details</Button><Button>Make Offer</Button></div></Card>)}</div></Shell>;
  const names:Record<string,string>={'2041:196':'Lot Details','2041:197':'Provenance','2041:198':'QC Report','2041:199':'Market Trends','2041:200':'Watchlist','2041:201':'Create RFQ','2041:202':'My RFQs','2041:203':'AI Matches for RFQ #RQ-123','2041:204':'Compare Lots','2041:205':'Market Alerts'};
  return <Shell title={names[s]||'Trader Marketplace'}><div style={{padding:'0 16px'}}><Card><h3>{names[s]||'Trader Marketplace'}</h3><p style={{color:MUTED}}>Chilli (Teja) · Grade A · Guntur</p><div style={{display:'flex',gap:8,marginTop:12}}><Button outline>View Details</Button><Button>Make Offer</Button></div></Card><Card><h3>Current Market Insight</h3><p>Price and quality signals are aligned with your requirements.</p><p style={{color:P,fontWeight:700}}>Recommended next action</p></Card></div></Shell>;
}

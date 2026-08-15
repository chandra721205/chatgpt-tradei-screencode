import React from 'react';

const A = {
  bg: '#f9fafb', white: '#ffffff', text: '#111827', muted: '#6b7280', soft: '#9ca3af',
  border: '#e5e7eb', purple: '#7c3aed', purpleSoft: '#f5f3ff', green: '#10b981',
  greenSoft: '#f0fdf4', red: '#ef4444', redSoft: '#fef2f2', amber: '#f59e0b', amberSoft: '#fffbeb', blue: '#3b82f6', blueSoft: '#eff6ff'
};

const assets = {
  buyers: {
    signal: 'https://www.figma.com/api/mcp/asset/50422473-b63f-41cd-9289-5d16ec1eda06.svg',
    wifi: 'https://www.figma.com/api/mcp/asset/7011e204-cb87-4df1-8d45-04340a0d233a.svg',
    back: 'https://www.figma.com/api/mcp/asset/a2600a6d-7aa5-4a6a-a4f9-881acda57cda.svg',
    plus: 'https://www.figma.com/api/mcp/asset/04610bd9-e70a-47d7-8cbb-2d875dce21a4.svg',
    filter: 'https://www.figma.com/api/mcp/asset/03807477-0f5d-48aa-80ba-cb4899bf16fb.svg',
    search: 'https://www.figma.com/api/mcp/asset/0c8c51c7-c5f2-40d0-ace5-47d69a6d9adc.svg',
    userPlus: 'https://www.figma.com/api/mcp/asset/84f04ed6-520e-4c73-9900-c8e7291bc560.svg',
    line: 'https://www.figma.com/api/mcp/asset/df1d45eb-05d2-4ada-92e3-0882ba82cce6.svg',
    users: 'https://www.figma.com/api/mcp/asset/c5f8716b-e34f-42fb-b804-531099772232.svg',
    file: 'https://www.figma.com/api/mcp/asset/09bce5d0-2b14-436e-bad0-a6d9d6966f60.svg',
    message: 'https://www.figma.com/api/mcp/asset/c3ae4fe4-942c-4edd-a988-5e8920490d10.svg',
    bag: 'https://www.figma.com/api/mcp/asset/da7bb9b5-a988-4746-95dd-b6ac33cd6369.svg'
  },
  quotation: {
    signal: 'https://www.figma.com/api/mcp/asset/832b45de-0fa0-4cd0-9426-67604f891ca0.svg',
    wifi: 'https://www.figma.com/api/mcp/asset/e5041871-6751-4d36-9154-e8b5c3268c89.svg',
    battery: 'https://www.figma.com/api/mcp/asset/8e19bf62-cf55-4677-bfa5-af20cbf7aba0.svg',
    back: 'https://www.figma.com/api/mcp/asset/8a6ce944-fb02-4c89-b7cf-0a112bf24729.svg',
    chevron: 'https://www.figma.com/api/mcp/asset/c5e54b6a-e848-40b8-8965-8c982698905b.svg',
    knob: 'https://www.figma.com/api/mcp/asset/2f432073-1ed4-4148-9e7b-b62e2ef5a748.svg',
    line: 'https://www.figma.com/api/mcp/asset/7edf3d91-107f-415d-99cb-040fb61a9c06.svg',
    users: 'https://www.figma.com/api/mcp/asset/2939fda0-3016-474e-9bf0-345e5d74f9bc.svg',
    file: 'https://www.figma.com/api/mcp/asset/e1eec772-606a-4244-9b0d-584cf612407a.svg',
    message: 'https://www.figma.com/api/mcp/asset/797fa1de-283b-4803-af1a-6cfcd2cda1ec.svg',
    bag: 'https://www.figma.com/api/mcp/asset/8ae3792e-3270-4fca-a138-b48aeec3043f.svg'
  },
  negotiation: {
    signal: 'https://www.figma.com/api/mcp/asset/7f876fe7-c0f6-48aa-9733-21dfdceba548.svg',
    wifi: 'https://www.figma.com/api/mcp/asset/64e1fbd2-c665-4937-8b06-7a38035b7825.svg',
    battery: 'https://www.figma.com/api/mcp/asset/ec084de3-ce22-43f7-a7cd-6f40741702c6.svg',
    back: 'https://www.figma.com/api/mcp/asset/b3308ef2-1dd5-4acb-9dfd-92d9e114d023.svg',
    help: 'https://www.figma.com/api/mcp/asset/be2afb3d-730c-4bbf-920f-8041537ecae5.svg',
    star: 'https://www.figma.com/api/mcp/asset/096a04da-207b-4bf7-959b-30a74a61e453.svg',
    chevron: 'https://www.figma.com/api/mcp/asset/a6d4f139-ad44-4787-936a-c626c30e9bea.svg',
    dots: 'https://www.figma.com/api/mcp/asset/52ee01f6-479a-42af-8c5d-2eb3c7a5fcac.svg',
    close: 'https://www.figma.com/api/mcp/asset/dae11e49-bf48-4e5c-aa18-e8b2942b1890.svg',
    rupee: 'https://www.figma.com/api/mcp/asset/0753b48f-ab71-4562-a255-a8efbf8dc71f.svg'
  },
  orders: {
    signal: 'https://www.figma.com/api/mcp/asset/56d0d48e-1c8f-4341-ab0e-60ca084034e0.svg',
    wifi: 'https://www.figma.com/api/mcp/asset/126313d1-ddea-41f1-993e-957254b28b52.svg',
    battery: 'https://www.figma.com/api/mcp/asset/cdc0b907-5274-4622-916e-430fb9230d28.svg',
    back: 'https://www.figma.com/api/mcp/asset/281d9099-8148-4a64-8686-dbf3eaf30a67.svg',
    filter: 'https://www.figma.com/api/mcp/asset/41fbd074-06ab-4c40-845d-815835cbc611.svg',
    line: 'https://www.figma.com/api/mcp/asset/e42ac2b2-8074-4535-a74d-7d4f7c9bbc73.svg',
    users: 'https://www.figma.com/api/mcp/asset/762f6ad4-cf29-4c5d-8f2b-d4f272561e9e.svg',
    file: 'https://www.figma.com/api/mcp/asset/618dd39a-7a6c-457e-997b-ce52f7707b3c.svg',
    message: 'https://www.figma.com/api/mcp/asset/a5eae2a7-0ce6-4b43-9260-e50a5fa60adf.svg',
    bag: 'https://www.figma.com/api/mcp/asset/e419cb30-e443-4b91-92dc-398db0c5ec23.svg'
  }
};

const img = (src: string, width: number, height: number, alt = '') => <img src={src} alt={alt} style={{width, height, display:'block', objectFit:'contain'}} />;

function StatusBar({kind}:{kind:'buyers'|'quotation'|'negotiation'|'orders'}) {
  const s = assets[kind];
  return <div style={{height:44,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px',boxSizing:'border-box'}}>
    <span style={{fontFamily:'Geist, Arial, sans-serif',fontWeight:600,fontSize:14,color:A.text}}>9:41</span>
    <div style={{display:'flex',gap:6,alignItems:'center'}}>{img(s.signal,17,11)}{img(s.wifi,15,11)}{'battery' in s && img(s.battery,24,12)}</div>
  </div>;
}

function Header({kind,title,right}:{kind:'buyers'|'quotation'|'negotiation'|'orders';title:string;right?:React.ReactNode}) {
  const s = assets[kind];
  return <div style={{height:56,background:A.white,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 16px',boxSizing:'border-box'}}>
    <div style={{display:'flex',gap:12,alignItems:'center'}}>{img(s.back,24,24)}<span style={{fontFamily:'Geist, Arial, sans-serif',fontWeight:700,fontSize:24,lineHeight:1.2,color:A.text}}>{title}</span></div>
    <div>{right}</div>
  </div>;
}

function Nav({active}:{active:'Buyers'|'Quotations'|'Negotiation'|'Orders'}) {
  const s = assets.quotation;
  const items = [['Buyers',s.users],['Quotations',s.file],['Negotiation',s.message],['Orders',s.bag]] as const;
  return <div style={{background:A.white,borderTop:`1px solid ${A.border}`}}>
    <div style={{display:'flex',height:64,padding:'0 16px',boxSizing:'border-box'}}>{items.map(([label,src])=><div key={label} style={{flex:1,display:'flex',flexDirection:'column',gap:4,alignItems:'center',justifyContent:'center',color:active===label?A.purple:A.soft,fontFamily:'Geist, Arial, sans-serif',fontSize:12,fontWeight:active===label?600:400}}>{img(src,24,24)}<span>{label}</span></div>)}</div>
    <div style={{height:34,display:'flex',alignItems:'flex-end',justifyContent:'center',paddingBottom:8}}><div style={{width:134,height:5,borderRadius:100,background:A.text,opacity:.2}} /></div>
  </div>;
}

function BuyerList(){
  const buyers = [
    {name:'ABC Exports',type:'Exporter • GST: 36AAACA...',initial:'A',risk:'3.2/10 HIGH',riskTone:'red',outstanding:'₹120000',status:'5 Days Overdue',line:A.red},
    {name:'Sonia Enterprises',type:'Local Processor',initial:'S',risk:'6.5/10 MEDIUM',riskTone:'amber',outstanding:'₹250000',status:'Due in 3 days',line:A.amber},
    {name:'Sharma Trading',type:'Wholesaler',initial:'S',risk:'8.9/10 LOW',riskTone:'green',outstanding:'₹0',status:'No Outstanding',line:A.green}
  ];
  return <div style={{width:375,minHeight:812,background:A.bg,color:A.text,fontFamily:'Geist, Arial, sans-serif',display:'flex',flexDirection:'column'}} data-node-id="2041:238">
    <div style={{flex:1}}>
      <StatusBar kind="buyers" />
      <Header kind="buyers" title="Buyers" right={<div style={{display:'flex',gap:16}}>{img(assets.buyers.plus,24,24)}{img(assets.buyers.filter,24,24)}</div>} />
      <div style={{padding:16,display:'flex',flexDirection:'column',gap:16,boxSizing:'border-box'}}>
        <div style={{height:40,background:A.white,border:`1px solid ${A.border}`,borderRadius:8,display:'flex',gap:10,alignItems:'center',padding:'0 12px',boxSizing:'border-box'}}>{img(assets.buyers.search,20,20)}<span style={{fontSize:14,color:A.soft}}>Search by name, GST, or location</span></div>
        <div style={{display:'flex',gap:8,overflow:'hidden'}}>{['All','Credit Hold','High Risk','Export','Local'].map((x,i)=><span key={x} style={{padding:'6px 12px',borderRadius:20,whiteSpace:'nowrap',fontSize:12,fontWeight:600,color:i===0?A.white:A.muted,background:i===0?A.purple:A.white,border:i===0?'none':`1px solid ${A.border}`}}>{x}</span>)}</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>{[['Total Buyers','12'],['Outstanding','₹8.2L'],['Overdue','3']].map(([k,v])=><div key={k} style={{background:A.white,border:`1px solid ${A.border}`,borderRadius:8,padding:12}}><div style={{fontSize:11,textTransform:'uppercase',color:A.muted,fontWeight:600}}>{k}</div><div style={{fontSize:18,fontWeight:600,marginTop:4}}>{v}</div></div>)}</div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>{buyers.map((b)=><div key={b.name} style={{background:A.white,border:`1px solid ${A.border}`,borderRadius:8,display:'flex',overflow:'hidden'}}>
          <div style={{width:4,background:b.line,flexShrink:0}} />
          <div style={{flex:1,padding:12,display:'flex',flexDirection:'column',gap:12}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{display:'flex',gap:12,alignItems:'center'}}><div style={{width:40,height:40,borderRadius:20,background:A.purpleSoft,display:'flex',alignItems:'center',justifyContent:'center',color:A.purple,fontWeight:700,fontSize:16}}>{b.initial}</div><div><div style={{fontSize:14,fontWeight:600}}>{b.name}</div><div style={{fontSize:12,color:A.muted,marginTop:2}}>{b.type}</div></div></div><span style={{padding:'4px 8px',borderRadius:4,fontSize:11,fontWeight:600,background:b.riskTone==='red'?A.redSoft:b.riskTone==='amber'?A.amberSoft:A.greenSoft,color:b.riskTone==='red'?A.red:b.riskTone==='amber'?A.amber:A.green}}>{b.risk}</span></div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}><div><div style={{fontSize:11,textTransform:'uppercase',color:A.soft,fontWeight:600}}>Outstanding</div><div style={{fontSize:14,fontWeight:600,marginTop:4}}>{b.outstanding}</div></div><div><div style={{fontSize:11,textTransform:'uppercase',color:A.soft,fontWeight:600}}>Status</div><div style={{fontSize:14,fontWeight:600,marginTop:4,color:b.riskTone==='red'?A.red:A.muted}}>{b.status}</div></div></div>
            <div style={{display:'flex',gap:12}}><button style={{flex:1,height:36,border:0,borderRadius:6,background:A.purple,color:A.white,fontFamily:'inherit',fontSize:14,fontWeight:600}}>Create Quotation</button><button style={{height:36,padding:'0 12px',border:`1px solid ${A.border}`,borderRadius:6,background:A.white,color:A.muted,fontFamily:'inherit',fontSize:14,fontWeight:600}}>History</button></div>
          </div>
        </div>)}</div>
        <div style={{display:'flex',flexDirection:'column',gap:12,alignItems:'center',padding:'24px 0'}}>{img(assets.buyers.userPlus,64,64)}<div style={{fontSize:14,fontWeight:600,color:A.muted}}>Add your first buyer</div><button style={{padding:'10px 20px',background:A.purpleSoft,border:`1px solid ${A.purple}`,borderRadius:8,color:A.purple,fontFamily:'inherit',fontWeight:600}}>+ Add Buyer</button></div>
      </div>
    </div>
    <Nav active="Buyers" />
  </div>;
}

function Quotation(){
  return <div style={{width:375,minHeight:812,background:A.bg,color:A.text,fontFamily:'Geist, Arial, sans-serif',display:'flex',flexDirection:'column'}} data-node-id="2041:239">
    <div style={{flex:1}}><StatusBar kind="quotation" /><Header kind="quotation" title="Create Quotation" right={<div style={{width:100}}/>}/>
      <div style={{padding:16,display:'flex',flexDirection:'column',gap:16}}>
        <FieldLabel label="Select Buyer"><Select text={<><b>ABC Exports</b><span style={{fontSize:12,color:A.green}}>Credit available: ₹3,80,000</span></>} /></FieldLabel>
        <FieldLabel label="Select Inventory Lot"><Select text={<span>Chilli (Teja) 120 MT - Grade A</span>} /></FieldLabel>
        <div style={{background:A.bg,border:`1px solid ${A.border}`,borderRadius:8,padding:12,display:'flex',flexDirection:'column',gap:12,fontSize:12}}>{[['Commodity','Chilli (Teja) Grade A',A.text],['Storage','Guntur C.S. Rack B-12',A.text],['Quality','Moisture 8.2%',A.green]].map(([k,v,c])=><div key={k} style={{display:'flex',justifyContent:'space-between'}}><span style={{color:A.muted}}>{k}</span><b style={{color:String(c)}}>{v}</b></div>)}</div>
        <div><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:11,textTransform:'uppercase',color:A.muted,fontWeight:600}}>Quantity</span><div style={{display:'flex',gap:8,alignItems:'center'}}><b style={{fontSize:14}}>120</b><span style={{background:A.border,padding:'4px 8px',borderRadius:4,fontSize:12,fontWeight:600}}>MT</span></div></div><div style={{height:4,background:A.border,borderRadius:2,marginTop:10,position:'relative'}}><div style={{height:4,width:'100%',background:A.purple,borderRadius:2}}/><img src={assets.quotation.knob} style={{position:'absolute',right:-1,top:'50%',transform:'translateY(-50%)',width:20,height:20}} /></div></div>
        <FieldLabel label="Price per MT"><div><div style={{height:40,background:A.white,border:`1px solid ${A.border}`,borderRadius:8,display:'flex',alignItems:'center',padding:'0 12px',fontSize:14}}><b>₹</b><span style={{marginLeft:8}}>28,000</span></div><div style={{marginTop:8,background:A.purpleSoft,borderRadius:4,padding:'4px 10px',display:'inline-flex',fontSize:12,color:A.purple}}>🤖 Market avg ₹27,800–₹28,200</div></div></FieldLabel>
        <FieldLabel label="Payment Terms"><Select text={<span>50% Advance + 30-day credit</span>} /></FieldLabel>
        <div style={{background:A.purpleSoft,borderRadius:12,padding:16,color:A.purple}}><div style={{fontSize:11,textTransform:'uppercase',fontWeight:600}}>Total Estimate</div><div style={{fontSize:32,fontWeight:800,marginTop:4}}>₹33,60,000</div><div style={{fontSize:12,opacity:.7,marginTop:4}}>Quantity 120 MT × ₹28,000/MT</div></div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}><button style={{height:52,border:0,borderRadius:8,background:A.purple,color:A.white,fontFamily:'inherit',fontSize:18,fontWeight:600}}>Send Quotation</button><button style={{height:52,border:`1px solid ${A.border}`,borderRadius:8,background:A.white,color:A.muted,fontFamily:'inherit',fontSize:18,fontWeight:600}}>Save as Draft</button></div>
      </div>
    </div><Nav active="Quotations" />
  </div>;
}

function FieldLabel({label,children}:{label:string;children:React.ReactNode}){return <div style={{display:'flex',flexDirection:'column',gap:8}}><div style={{fontSize:11,textTransform:'uppercase',color:A.muted,fontWeight:600}}>{label}</div>{children}</div>}
function Select({text}:{text:React.ReactNode}){return <div style={{minHeight:40,background:A.white,border:`1px solid ${A.border}`,borderRadius:8,padding:12,display:'flex',alignItems:'center',justifyContent:'space-between',boxSizing:'border-box'}}><div style={{display:'flex',flexDirection:'column',gap:2,fontSize:14}}>{text}</div>{img(assets.quotation.chevron,20,20)}</div>}

function Negotiation(){
  return <div style={{width:375,minHeight:812,background:A.bg,color:A.text,fontFamily:'Geist, Arial, sans-serif',display:'flex',flexDirection:'column'}} data-node-id="2041:240">
    <div style={{flex:1}}><StatusBar kind="negotiation"/><Header kind="negotiation" title="Negotiation" right={img(assets.negotiation.help,24,24)} />
      <div style={{background:A.white,padding:'0 16px 12px'}}><div style={{background:A.bg,borderRadius:10,padding:8,display:'flex',gap:12,alignItems:'center'}}><div style={{width:32,height:32,borderRadius:16,background:A.red,color:A.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700}}>ABC</div><div><div style={{fontSize:14,fontWeight:600}}>ABC Exports</div><div style={{display:'flex',alignItems:'center',gap:4,fontSize:12}}>{img(assets.negotiation.star,12,12)}<span style={{color:A.muted}}>3.2 Score • </span><b style={{color:A.red}}>HIGH RISK</b></div></div></div></div>
      <div style={{background:A.purple,color:A.white,padding:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{fontSize:12,opacity:.8}}>Q-20250620-001</div><div style={{fontSize:14,fontWeight:600,marginTop:2}}>Chilli 120 MT @ ₹28,000/qt</div></div>{img(assets.negotiation.chevron,20,20)}</div>
      <div style={{padding:16,display:'flex',flexDirection:'column',gap:20}}><div style={{display:'flex',justifyContent:'center'}}><span style={{background:A.border,borderRadius:12,padding:'4px 12px',fontSize:12,color:A.muted}}>Quotation sent 20 Jun 2025</span></div>
        <div><div style={{background:A.border,display:'inline-block',padding:12,borderRadius:'12px 12px 12px 4px',fontSize:14,color:'#000'}}>Can you do ₹27,500/quintal for 100 MT?<span style={{marginLeft:6,color:A.soft,fontSize:10}}>10:15 AM</span></div></div>
        <div style={{display:'flex',justifyContent:'flex-end'}}><div style={{background:A.purpleSoft,color:A.purple,display:'inline-block',padding:12,borderRadius:'12px 12px 4px 12px',fontSize:14}}>Lowest is ₹27,800 for 120 MT. Take all.<span style={{marginLeft:6,fontSize:10,opacity:.5}}>10:20 AM</span></div></div>
        <div style={{background:A.white,border:`2px solid ${A.purple}`,borderRadius:12,boxShadow:'0 4px 6px rgba(0,0,0,.1)',padding:16,width:280,boxSizing:'border-box'}}><div style={{display:'flex',justifyContent:'space-between',fontSize:11}}><b style={{color:A.purple}}>🟣 COUNTER OFFER</b><span style={{color:A.soft,fontSize:12}}>10:25 AM</span></div><div style={{display:'flex',flexDirection:'column',gap:8,marginTop:12,fontSize:12}}>{[['Price','₹27,700/qt'],['Quantity','120 MT'],['Advance','50%']].map(([k,v])=><div key={k} style={{display:'flex',justifyContent:'space-between'}}><span style={{color:A.muted}}>{k}</span><b>{v}</b></div>)}</div><div style={{display:'flex',gap:8,marginTop:12}}><button style={{flex:1,height:32,border:0,borderRadius:6,background:A.green,color:A.white,fontFamily:'inherit',fontWeight:700,fontSize:12}}>Accept</button><button style={{flex:1,height:32,border:0,borderRadius:6,background:A.amber,color:A.white,fontFamily:'inherit',fontWeight:700,fontSize:12}}>Counter</button><button style={{flex:1,height:32,border:0,borderRadius:6,background:A.red,color:A.white,fontFamily:'inherit',fontWeight:700,fontSize:12}}>Decline</button></div></div>
        <div style={{background:A.border,borderRadius:16,padding:'8px 16px',width:52,boxSizing:'border-box'}}>{img(assets.negotiation.dots,20,4)}</div>
      </div>
    </div>
    <div style={{background:A.white,borderTop:`1px solid ${A.border}`,padding:16,display:'flex',flexDirection:'column',gap:12}}><div style={{height:44,background:A.bg,borderRadius:22,display:'flex',alignItems:'center',padding:'0 16px',color:A.soft,fontSize:14}}>Type a message...<span style={{marginLeft:'auto'}}>{img(assets.negotiation.close,20,20)}</span></div><button style={{height:48,border:0,borderRadius:8,background:A.purple,color:A.white,fontFamily:'inherit',fontSize:18,fontWeight:600,display:'flex',gap:8,alignItems:'center',justifyContent:'center'}}>{img(assets.negotiation.rupee,20,20)}<span>Propose New Offer</span></button></div>
  </div>;
}

function Orders(){
  const orders = [
    {id:'#SO-20250620-001',name:'ABC Exports',status:'AWAITING DELIVERY',tone:'blue',items:'Chilli 120 MT',amount:'₹33,24,000'},
    {id:'#SO-20250618-002',name:'Sonia Enterprises',status:'IN TRANSIT',tone:'amber',items:'Chilli 40 MT',amount:'₹11,20,000',eta:'ETA: 22 Jun 2025',progress:'60% complete'},
    {id:'#SO-20250615-003',name:'Sharma Trading',status:'DELIVERED',tone:'green',items:'Chilli 80 MT',amount:'₹22,40,000'}
  ];
  return <div style={{width:375,minHeight:812,background:A.bg,color:A.text,fontFamily:'Geist, Arial, sans-serif',display:'flex',flexDirection:'column'}} data-node-id="2041:241">
    <div style={{flex:1}}><StatusBar kind="orders"/><Header kind="orders" title="Sales Orders" right={img(assets.orders.filter,24,24)} />
      <div style={{background:A.white,display:'grid',gridTemplateColumns:'repeat(4,1fr)',padding:'0 16px'}}>{['All (8)','Pending (3)','Shipped (2)','Delivered'].map((x,i)=><div key={x} style={{textAlign:'center',padding:'12px 0',fontSize:12,fontWeight:i===1?700:500,color:i===1?A.purple:A.muted,borderBottom:i===1?`2px solid ${A.purple}`:'none'}}>{x}</div>)}</div>
      <div style={{padding:16,display:'flex',flexDirection:'column',gap:12}}>{orders.map((o)=><div key={o.id} style={{background:A.white,border:`1px solid ${A.border}`,borderRadius:8,display:'flex',overflow:'hidden'}}><div style={{width:4,background:o.tone==='blue'?A.blue:o.tone==='amber'?A.amber:A.green}}/><div style={{flex:1,padding:12,display:'flex',flexDirection:'column',gap:12}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{fontSize:12,fontWeight:700,color:A.muted}}>{o.id}</div><div style={{fontSize:14,fontWeight:600,marginTop:2}}>{o.name}</div></div><span style={{padding:'4px 8px',borderRadius:4,fontSize:11,fontWeight:600,background:o.tone==='blue'?A.blueSoft:o.tone==='amber'?A.amberSoft:A.greenSoft,color:o.tone==='blue'?A.blue:o.tone==='amber'?A.amber:A.green}}>{o.status}</span></div>
        <div style={{display:'flex',justifyContent:'space-between'}}><div><div style={{fontSize:11,textTransform:'uppercase',color:A.soft,fontWeight:600}}>Items</div><div style={{fontSize:14,marginTop:4}}>{o.items}</div></div><div style={{textAlign:'right'}}><div style={{fontSize:11,textTransform:'uppercase',color:A.soft,fontWeight:600}}>Amount</div><div style={{fontSize:14,color:A.purple,marginTop:4}}>{o.amount}</div></div></div>
        {o.eta && <div><div style={{display:'flex',justifyContent:'space-between',fontSize:12}}><span style={{color:A.muted}}>{o.eta}</span><b style={{color:A.amber}}>{o.progress}</b></div><div style={{height:4,background:A.border,borderRadius:2,marginTop:8}}><div style={{width:'60%',height:4,background:A.amber,borderRadius:2}} /></div></div>}
        <div style={{display:'flex',gap:8}}><button style={{flex:1,height:32,border:`1px solid ${o.tone==='amber'?A.purple:A.border}`,borderRadius:6,background:o.tone==='green'?A.purple:o.tone==='amber'?A.purpleSoft:A.white,color:o.tone==='green'?A.white:o.tone==='amber'?A.purple:A.muted,fontFamily:'inherit',fontSize:12,fontWeight:700}}>{o.tone==='blue'?'Track Delivery':o.tone==='amber'?'Live Tracking':'Record Payment'}</button><button style={{height:32,padding:'0 10px',border:`1px solid ${A.border}`,borderRadius:6,background:A.white,color:A.muted,fontFamily:'inherit',fontSize:12,fontWeight:700}}>View Invoice</button></div>
      </div></div>)}</div>
      <div style={{background:A.white,borderTop:`1px solid ${A.border}`,padding:20,display:'flex',flexDirection:'column',gap:12,fontSize:14}}><div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:A.muted}}>Total Sales (June)</span><b>₹85,00,000</b></div><div style={{display:'flex',justifyContent:'space-between'}}><span style={{color:A.muted}}>Pending Collections</span><b style={{color:A.red}}>₹12,00,000</b></div></div>
    </div><Nav active="Orders" />
  </div>;
}

export default function BuyerCrmQuotationOrdersRouter(){
  const route = window.location.hash.replace(/^#/,'');
  switch(route){
    case 'buyers-crm':
    case 'buyers': return <BuyerList/>;
    case 'create-quotation': return <Quotation/>;
    case 'negotiation': return <Negotiation/>;
    case 'sales-orders':
    case 'orders': return <Orders/>;
    default: return <BuyerList/>;
  }
}

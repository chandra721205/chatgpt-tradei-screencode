import React from 'react';

type ScreenId = '2041:190' | '2041:191' | '2041:192' | '2041:193';

type Props = { screen?: ScreenId | string };

const orange = '#f97316';
const navy = '#111827';
const gray = '#6b7280';
const muted = '#9ca3af';
const bg = '#f5f5f5';
const white = '#ffffff';
const blueBg = '#eff6ff';

const page: React.CSSProperties = {
  width: 375,
  minHeight: 812,
  margin: '0 auto',
  background: bg,
  color: navy,
  fontFamily: 'Inter, Arial, sans-serif',
  boxSizing: 'border-box',
};

const card: React.CSSProperties = {
  background: white,
  borderRadius: 12,
  padding: 16,
  boxShadow: '0 1px 2px rgba(0,0,0,.08)',
  boxSizing: 'border-box',
};

const button = (background: string, color = '#fff'): React.CSSProperties => ({
  width: '100%',
  height: 48,
  borderRadius: 10,
  border: background === white ? '1px solid ' + orange : 'none',
  background,
  color,
  fontWeight: 700,
  fontSize: 14,
});

const field: React.CSSProperties = {
  height: 48,
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  background: white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 12px',
  boxSizing: 'border-box',
};

const pill = (background: string, color: string): React.CSSProperties => ({
  background,
  color,
  borderRadius: 999,
  padding: '4px 8px',
  fontSize: 10,
  fontWeight: 700,
});

function Header({ title, back = true }: { title: string; back?: boolean }) {
  return (
    <div style={{ height: 56, background: white, borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', padding: '0 16px', boxSizing: 'border-box' }}>
      {back ? <span style={{ fontSize: 26, lineHeight: 1, marginRight: 12 }}>‹</span> : <span style={{ width: 24, marginRight: 12 }} />}
      <div style={{ flex: 1, textAlign: 'center', fontWeight: 700, fontSize: 18 }}>{title}</div>
      <span style={{ fontSize: 20, color: gray }}>?</span>
    </div>
  );
}

function BookStorage() {
  return (
    <div style={page} data-node-id="2041:190">
      <Header title="Book Storage" />
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ background: '#fff7ed', border: `1px solid ${orange}`, borderRadius: 12, padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: orange, fontWeight: 600 }}>
          <span>🟠 Step 1 of 2: Select Producer &amp; Token</span><strong>50%</strong>
        </div>

        <section style={card}>
          <div style={{ fontSize: 11, color: muted, fontWeight: 700, marginBottom: 14, textTransform: 'uppercase' }}>Producer &amp; Token Details</div>
          <label style={{ fontSize: 12, color: gray }}>Select Producer</label>
          <div style={{ ...field, marginTop: 6 }}> <span style={{ color: muted, fontSize: 14 }}>Select producer from your network</span><span>⌄</span></div>
          <label style={{ fontSize: 12, color: gray, marginTop: 12 }}>Select Token</label>
          <div style={{ ...field, marginTop: 6 }}> <span style={{ color: muted, fontSize: 14 }}>Select tokenized lot</span><span>⌄</span></div>
          <div style={{ marginTop: 12, background: blueBg, border: '1px solid #bfdbfe', borderRadius: 10, padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><strong style={{ color: '#1d4ed8', fontSize: 14 }}>🌾 TRD-CHL-089234</strong><span style={pill('#ecfdf5','#10b981')}>Grade A</span></div>
            <div style={{ borderTop: '1px solid #dbeafe', margin: '10px 0' }} />
            {[["Crop",'Chilli (Teja)'],['Quantity','2,500 kg (50 bags)'],['Location',"Producer's farm"]].map(([a,b]) => <div key={a} style={{ display:'flex', justifyContent:'space-between', fontSize: 12, marginTop: 6 }}><span style={{ color: gray }}>{a}</span><strong>{b}</strong></div>)}
          </div>
        </section>

        <section style={card}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 10 }}><div style={{ fontSize: 11, color: muted, fontWeight: 700, textTransform:'uppercase' }}>Step 2: Choose Storage Facility</div><span style={pill('#fff7ed',orange)}>2/2</span></div>
          <div style={{ ...field, background:'#f9fafb' }}>🔎 <span style={{ color: muted, fontSize: 14, flex:1, marginLeft:8 }}>Search by facility name, city</span></div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:10 }}>
            {['Cold Storage','Godown','Near Market Yard','Top Rated'].map((x,i)=><span key={x} style={{ border:`1px solid ${i===0?orange:'#e5e7eb'}`, background:i===0?'#fff7ed':'#f9fafb', color:i===0?orange:gray, borderRadius:8, padding:'6px 8px', fontSize:12 }}>{x}</span>)}
          </div>
          <div style={{ marginTop:12, border:`2px solid ${orange}`, borderRadius:12, padding:16 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}><strong>🏭 Guntur Cold Storage</strong><span style={{ background: orange, color:'#fff', borderRadius:4, padding:'4px 7px', fontSize:10 }}>Selected ✓</span></div>
            <div style={{ marginTop:8, fontSize:12, color:gray }}>⭐ 4.8 · 📍 2.3 km · 💰 ₹5/bag/day</div>
            <div style={{ display:'flex', justifyContent:'space-between', marginTop:10, fontSize:12 }}><span style={{ color:gray }}>Capacity</span><strong style={{ color:'#10b981' }}>85% available</strong></div>
            <div style={{ height:6, background:'#f3f4f6', borderRadius:10, marginTop:4 }}><div style={{ width:'47%', height:6, background:'#10b981', borderRadius:10 }} /></div>
            <div style={{ marginTop:8, fontSize:11, color:gray }}>Services: <span style={pill('#ecfdf5','#10b981')}>Insurance</span> <span style={pill('#eff6ff','#1d4ed8')}>Loan pledge</span></div>
          </div>
          <div style={{ marginTop:12, ...card, boxShadow:'none', padding:0 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}><strong>🏭 Rajahmundry Agri Godown</strong><button style={{ width:80, height:32, background:white, color:orange, border:`1px solid ${orange}`, borderRadius:8 }}>Select</button></div>
            <div style={{ marginTop:8, fontSize:12, color:gray }}>⭐ 4.3 · 📍 5.1 km · 💰 ₹3.5/bag/day</div>
            <div style={{ display:'flex', justifyContent:'space-between', marginTop:8, fontSize:12 }}><span style={{ color:gray }}>Capacity</span><strong style={{ color:'#10b981' }}>72% available</strong></div>
            <div style={{ height:6, background:'#f3f4f6', borderRadius:10, marginTop:4 }}><div style={{ width:'72%', height:6, background:'#f59e0b', borderRadius:10 }} /></div>
            <div style={{ marginTop:8, fontSize:11, color:gray }}>Services: <span style={pill('#eff6ff','#1d4ed8')}>Loan pledge</span></div>
          </div>
        </section>

        <section style={card}>
          <div style={{ fontSize:11, color:muted, fontWeight:700, textTransform:'uppercase', marginBottom: 12 }}>Booking Details</div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}><span style={{ fontSize:13, color:'#374151' }}>Expected Duration</span><span style={pill('#fff7ed',orange)}>30 days</span></div>
          <div style={{ marginTop: 14 }}><div style={{ height:4, background:'#e5e7eb', borderRadius:10 }}><div style={{ width:'14%', height:4, background:orange, borderRadius:10 }} /></div><div style={{ fontSize:11, color:muted, display:'flex', justifyContent:'space-between', marginTop:6 }}><span>30 days min</span><span>365 days max</span></div></div>
          <div style={{ marginTop:12, background:blueBg, borderRadius:8, padding:12, fontSize:12 }}>ⓘ 50 bags × ₹5 × 30 days = <strong style={{ color:'#1d4ed8' }}>₹7,500</strong></div>
          <div style={{ margin:'12px 0', borderTop:'1px solid #e5e7eb' }} />
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}><div><strong style={{ fontSize:14 }}>Add storage insurance</strong><div style={{ fontSize:11, color:gray }}>Premium ₹500 · Covers fire, theft, spoilage</div></div><span style={{ color:orange }}>🟠</span></div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}><div><strong style={{ fontSize:14 }}>Avail loan against stored stock</strong><div style={{ fontSize:11, color:gray }}>Est. loan: ₹2,80,000 (70% of value)</div></div><span style={{ color:muted }}>⚪</span></div>
          <label style={{ fontSize:12, color:gray }}>Special Instructions</label>
          <div style={{ ...field, height:80, marginTop:6, alignItems:'flex-start', paddingTop:12 }}><span style={{ color:muted, fontSize:14 }}>Optional notes for the facility...</span><span>⌄</span></div>
        </section>

        <section style={{ background:blueBg, borderRadius:12, padding:16 }}>
          <strong style={{ color:'#1e40af' }}>💳 Cost Summary</strong>
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:10, fontSize:14 }}><span>Estimated rent</span><strong>₹7,500</strong></div>
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:8, fontSize:14 }}><span>Insurance premium</span><strong style={{ color:'#10b981' }}>+ ₹500</strong></div>
          <div style={{ margin:'10px 0', borderTop:'1px solid #bfdbfe' }} />
          <div style={{ display:'flex', justifyContent:'space-between', fontWeight:700 }}><span style={{ color:'#1e40af' }}>Total due at release</span><span style={{ color:orange, fontSize:18 }}>₹8,000</span></div>
        </section>

        <button style={button(orange)}>▣&nbsp;&nbsp;Request Storage</button>
      </div>
    </div>
  );
}

function OtpModal() {
  return <div style={{ width:375, minHeight:400, margin:'0 auto', background:'#fff', borderRadius:'20px 20px 0 0', overflow:'hidden' }} data-node-id="2041:191">
    <div style={{height:40, background:'rgba(0,0,0,.4)'}} />
    <div style={{ padding:24, display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
      <div style={{fontSize:32}}>🔒</div><h2 style={{margin:0,fontSize:18}}>Producer OTP Required</h2>
      <p style={{margin:0,textAlign:'center',color:gray,fontSize:12,lineHeight:1.45}}>Enter the OTP sent to producer's registered mobile number to confirm this storage booking.</p>
      <div style={{display:'flex',gap:8}}>{Array.from({length:6}).map((_,i)=><div key={i} style={{height:52,width:44,border:`2px solid ${orange}`,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>{i===0 && <div style={{width:2,height:20,background:orange}}/>}</div>)}</div>
      <button style={button(orange)}>Verify OTP</button><p style={{margin:0,color:gray,fontSize:13}}>Resend OTP in 0:45</p><p style={{margin:0,color:muted,fontSize:14}}>Cancel</p>
    </div>
  </div>
}

function StorageRequestSent() {
  return <div style={{ width:375, minHeight:340, margin:'0 auto', background:'#fff', borderRadius:'20px 20px 0 0', overflow:'hidden' }} data-node-id="2041:192">
    <div style={{height:40, background:'rgba(0,0,0,.4)'}} />
    <div style={{ padding:24, display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
      <div style={{fontSize:32}}>✓</div><h2 style={{margin:0,fontSize:18}}>Storage Request Sent!</h2>
      <p style={{margin:0,textAlign:'center',color:gray,fontSize:12,lineHeight:1.45}}>Request sent to Guntur Cold Storage. Facility will confirm within 2 hours.</p>
      <div style={{ background:'#f3f4f6', borderRadius:999, padding:'6px 12px', color:gray, fontSize:12 }}>📱 Producer will receive confirmation SMS</div>
      <button style={button(white,orange)}>View Bond (when ready)</button>
      <p style={{margin:0,color:orange,fontWeight:600,fontSize:14}}>Back to Dashboard</p>
    </div>
  </div>
}

function RequestSample() {
  return <div style={page} data-node-id="2041:193">
    <Header title="Request Sample" />
    <div style={{ padding:16, display:'flex', flexDirection:'column', gap:16 }}>
      <section style={card}><div style={{fontSize:11,color:muted,fontWeight:700,textTransform:'uppercase'}}>Storage Bond</div><div style={{...field,marginTop:8}}>GCS-BOND-20250620-001 <span>⌄</span></div>
        <div style={{marginTop:12,border:'1px solid #e5e7eb',borderRadius:10,padding:12}}><div style={{display:'flex',justifyContent:'space-between'}}><strong>🧾 GCS-BOND-20250620-001</strong><span style={pill('#ecfdf5','#10b981')}>Active</span></div><div style={{fontSize:12,color:gray,marginTop:8}}>Token <strong style={{color:navy}}>TRD-CHL-089234 · Chilli (Teja)</strong></div><div style={{fontSize:12,color:gray,marginTop:4}}>Stored <strong style={{color:navy}}>50 bags (2,500 kg)</strong></div><div style={{fontSize:12,color:gray,marginTop:4}}>Location <strong style={{color:navy}}>Guntur Cold Storage, Rack B-12</strong></div><div style={{fontSize:12,color:gray,marginTop:4}}>Owner <strong style={{color:navy}}>👤 Rajesh Kumar (Producer)</strong></div></div>
      </section>
      <section style={card}><div style={{fontSize:11,color:muted,fontWeight:700,textTransform:'uppercase'}}>Sample Request Details</div><div style={{marginTop:10,fontSize:13}}>Requesting on behalf of</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',border:'1px solid #e5e7eb',borderRadius:8,overflow:'hidden',marginTop:6}}><div style={{padding:10,textAlign:'center',fontWeight:700}}>Self (CA)</div><div style={{padding:10,textAlign:'center',background:'#f3f4f6',color:muted}}>Buyer</div></div><div style={{marginTop:12,fontSize:13}}>Sample Quantity</div><div style={{display:'flex',gap:8,marginTop:6}}>{['1 Bag','2 Bags','3 Bags','Custom'].map((x,i)=><span key={x} style={{border:`1px solid ${i===0?orange:'#e5e7eb'}`,color:i===0?orange:gray,borderRadius:8,padding:'6px 8px',fontSize:12}}>{x}</span>)}</div><div style={{fontSize:11,color:gray,marginTop:6}}>≈ 50 kg per bag · Total: 50 kg sample</div><div style={{marginTop:12,fontSize:13}}>Purpose of Sample</div><div style={{...field,marginTop:6}}>Quality check for bidding <span>⌄</span></div></section>
      <section style={card}><div style={{fontSize:11,color:muted,fontWeight:700,textTransform:'uppercase'}}>Delivery Method</div>{['Pickup from storage facility','Courier to CA office','Courier to buyer address'].map((x,i)=><div key={x} style={{marginTop:8,border:`1px solid ${i===0?orange:'#e5e7eb'}`,borderRadius:8,padding:12,display:'flex',alignItems:'center',gap:8}}><span style={{color:i===0?orange:muted}}>◉</span><div><strong style={{fontSize:13}}>{x}</strong><div style={{fontSize:11,color:gray}}>{i===0?'CA or buyer picks up in person':i===1?'Delivery to your registered address':'Direct delivery to buyer'}</div></div></div>)}<div style={{marginTop:12,fontSize:12,color:gray}}>Notes (optional)</div><div style={{...field,height:80,marginTop:6,alignItems:'flex-start',paddingTop:12}}><span style={{color:muted,fontSize:14}}>Special handling or packaging instructions...</span><span>⌄</span></div></section>
      <button style={button(orange)}>⚗&nbsp;&nbsp;Send Sample Request</button>
      <section style={card}><div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:muted,fontWeight:700,textTransform:'uppercase'}}><span>Pending Requests</span><span style={pill('#fff7ed',orange)}>1 active</span></div><div style={{marginTop:10,border:'1px solid #e5e7eb',borderRadius:10,padding:12}}><div style={{display:'flex',justifyContent:'space-between'}}><strong>SMP-20250620-001</strong><span style={pill('#ecfdf5','#10b981')}>Approved</span></div><div style={{fontSize:11,color:gray,marginTop:6}}>🧾 GCS-BOND-001 · Chilli (Teja)</div><div style={{fontSize:12,color:orange,fontWeight:600,marginTop:8}}>📍 Samples ready for pickup at Guntur Cold Storage</div><div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:10}}><button style={{...button(white,orange),width:92,height:34}}>View Details</button><button style={{...button(orange),width:66,height:34}}>Track →</button></div></div></section>
    </div>
  </div>
}

export default function StorageSample4Screens({screen='2041:190'}:Props){
  switch(screen){case '2041:191': return <OtpModal/>; case '2041:192': return <StorageRequestSent/>; case '2041:193': return <RequestSample/>; default: return <BookStorage/>;}
}

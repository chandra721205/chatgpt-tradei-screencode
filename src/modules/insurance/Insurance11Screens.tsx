import React, { ReactNode, useState } from 'react';

const C = {
  bg: '#f5f5f5',
  white: '#ffffff',
  text: '#1f2937',
  muted: '#6b7280',
  border: '#e5e7eb',
  orange: '#f57c00',
  orangeDark: '#e65100',
  orangeSoft: '#fff3e0',
  green: '#10b981',
  greenSoft: '#e8f5e9',
  red: '#ef4444',
  redSoft: '#fee2e2',
  blue: '#0288d1',
  blueSoft: '#e3f2fd',
  navy: '#111827',
  amber: '#f59e0b',
  amberSoft: '#fef3c7',
};

const A = {
  avatarDash: 'https://www.figma.com/api/mcp/asset/5f83c83d-aab0-42b6-b742-f8b0b5f9319f.png',
  avatar1: 'https://www.figma.com/api/mcp/asset/efd34f36-0f1e-4a0c-9c0d-e9d16f66b587.png',
  avatar2: 'https://www.figma.com/api/mcp/asset/4c9f5cf1-aebe-4501-ae39-69e4d35b3afa.png',
  avatar3: 'https://www.figma.com/api/mcp/asset/eaa2f752-140a-4ef6-8d86-e2a1f306040f.png',
  evidence1: 'https://www.figma.com/api/mcp/asset/14128918-3cd9-4542-82af-bfd68c7586c0.png',
  evidence2: 'https://www.figma.com/api/mcp/asset/653497ba-90c3-4be2-bfb1-ccb4dd3fbc5c.png',
  evidence3: 'https://www.figma.com/api/mcp/asset/de49e221-defd-4b38-9d31-2f31ef27a191.png',
  assess1: 'https://www.figma.com/api/mcp/asset/dc91e72c-64a2-4979-b01e-037282ed02fa.png',
  assess2: 'https://www.figma.com/api/mcp/asset/0f3f3fd2-940f-4a4c-a748-33451180e7f5.png',
  assess3: 'https://www.figma.com/api/mcp/asset/0fa99e20-a0f5-4396-9b5b-1ff02864efdc.png',
  assess4: 'https://www.figma.com/api/mcp/asset/1d159906-191b-435a-bc4e-d68e315f8ad1.png',
  signal: 'https://www.figma.com/api/mcp/asset/5ee4f414-634f-4e7b-b48f-d1e30a39cde3.svg',
  wifi: 'https://www.figma.com/api/mcp/asset/7abf93ad-ba82-4d3a-9d1c-947ce3e12f70.svg',
  battery: 'https://www.figma.com/api/mcp/asset/a6d74ddf-95fb-4b67-980e-60e023a91eac.svg',
  back: 'https://www.figma.com/api/mcp/asset/afdd4fd7-e4dd-4e46-8ce2-6524172b80c1.svg',
  home: 'https://www.figma.com/api/mcp/asset/041f432c-e1e3-4a69-ade6-b1137f706777.svg',
  policies: 'https://www.figma.com/api/mcp/asset/811df341-88d9-4798-a3b9-a2cab86388da.svg',
  claims: 'https://www.figma.com/api/mcp/asset/a57d4cee-6e31-4147-8db6-af610d7e4be6.svg',
  inspectors: 'https://www.figma.com/api/mcp/asset/b6bcdbf2-c208-4a30-a375-8b7b4950f883.svg',
  more: 'https://www.figma.com/api/mcp/asset/c7747492-1609-43ab-b544-58c34d0c8b56.svg',
  bell: 'https://www.figma.com/api/mcp/asset/90a40016-d09a-4be3-9e8b-f5c6f6a178de.svg',
  plus: 'https://www.figma.com/api/mcp/asset/02a4bca1-68d7-4556-b0c6-4b99bbea3d71.svg',
  arrow: 'https://www.figma.com/api/mcp/asset/3b199d99-1061-459d-8392-aad3854d6115.svg',
  shieldOff: 'https://www.figma.com/api/mcp/asset/aea31ce6-cfeb-4c7f-acaf-cd47bda39834.svg',
  checkCircle: 'https://www.figma.com/api/mcp/asset/8992e90e-5bea-4921-b3f1-377528878d5c.svg',
  xCircle: 'https://www.figma.com/api/mcp/asset/dce02c80-5e51-40b2-930d-e5470ae52992.svg',
  star: 'https://www.figma.com/api/mcp/asset/15f8ce38-638d-41fe-accc-c10fb841451e.svg',
  qr: 'https://www.figma.com/api/mcp/asset/f585a976-9ec3-4391-84cd-12b2d76aa160.svg',
  wallet: 'https://www.figma.com/api/mcp/asset/a86f6dbf-7ce4-4beb-b302-5f32f727059a.svg',
  building: 'https://www.figma.com/api/mcp/asset/3976ab2e-4586-4186-9aa8-109d6c61d89a.svg',
  payoutCheck: 'https://www.figma.com/api/mcp/asset/a531fefc-4c27-4bbe-b9a7-cbde9aa5143b.svg',
};

const base: React.CSSProperties = {
  width: 375,
  minHeight: 812,
  margin: '0 auto',
  boxSizing: 'border-box',
  background: C.bg,
  color: C.text,
  fontFamily: 'Inter, Arial, sans-serif',
};

const btn = (background: string, color = '#fff'): React.CSSProperties => ({
  border: background === C.white ? `1px solid ${C.border}` : 0,
  background,
  color,
  height: 48,
  borderRadius: 8,
  padding: '0 16px',
  fontWeight: 700,
  fontSize: 15,
});

const card: React.CSSProperties = {
  background: C.white,
  borderRadius: 12,
  padding: 16,
  boxSizing: 'border-box',
};

function Img({ src, size = 24, style }: { src: string; size?: number; style?: React.CSSProperties }) {
  return <img src={src} alt="" style={{ width: size, height: size, display: 'block', objectFit: 'contain', ...style }} />;
}

function StatusBar({ battery = false }: { battery?: boolean }) {
  return (
    <div style={{ height: 44, padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
      <span style={{ fontSize: 14, fontWeight: 700 }}>9:41</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <Img src={A.signal} size={18} />
        <Img src={A.wifi} size={16} />
        {battery && <Img src={A.battery} size={24} />}
      </div>
    </div>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', gap: 12, boxSizing: 'border-box' }}>
      <Img src={A.back} size={24} />
      <h1 style={{ margin: 0, fontSize: 20, lineHeight: 1.2, fontWeight: 800 }}>{title}</h1>
    </div>
  );
}

function BottomNav({ active }: { active: 'Home' | 'Policies' | 'Claims' | 'Inspectors' | 'More' }) {
  const items = [
    ['Home', A.home],
    ['Policies', A.policies],
    ['Claims', A.claims],
    ['Inspectors', A.inspectors],
    ['More', A.more],
  ] as const;
  return (
    <div style={{ background: C.navy, color: '#9ca3af' }} data-node-id="204:296">
      <div style={{ height: 70, padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        {items.map(([label, icon]) => {
          const activeItem = label === active;
          return (
            <div key={label} style={{ width: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color: activeItem ? C.orange : '#9ca3af' }}>
              <Img src={icon} size={24} style={{ filter: activeItem ? 'none' : 'grayscale(1) opacity(.85)' }} />
              <div style={{ fontSize: 10, fontWeight: 700 }}>{label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 8, boxSizing: 'border-box' }}>
        <div style={{ width: 134, height: 5, borderRadius: 100, background: 'rgba(255,255,255,.25)' }} />
      </div>
    </div>
  );
}

function Page({ id, children, active, height }: { id: string; children: ReactNode; active: 'Home' | 'Policies' | 'Claims' | 'Inspectors' | 'More'; height?: number }) {
  return (
    <div data-node-id={id} style={{ ...base, minHeight: height || 812, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>{children}</div>
      <BottomNav active={active} />
    </div>
  );
}

function Badge({ children, background, color }: { children: ReactNode; background: string; color: string }) {
  return <span style={{ background, color, borderRadius: 4, padding: '3px 8px', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' }}>{children}</span>;
}

function Field({ label, value, placeholder, right }: { label: string; value?: string; placeholder?: string; right?: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ color: C.muted, fontSize: 14, fontWeight: 600 }}>{label}</div>
      <div style={{ height: 52, background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        <span style={{ fontSize: 15, color: value ? C.text : C.muted }}>{value || placeholder}</span>{right}
      </div>
    </div>
  );
}

function InsuranceDashboard() {
  const stats = [['Active Policies', '1,245'], ['Pending Claims', '18'], ['Premiums', '₹12,50,000'], ['Claims Ratio', '62%']];
  return (
    <Page id="2041:345" active="Home" height={1096}>
      <StatusBar />
      <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div><div style={{ fontSize: 12, color: C.muted }}>TRADIE Insurance</div><div style={{ fontSize: 18, fontWeight: 800 }}>Bajaj Allianz – Agri</div></div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}><Img src={A.bell} size={24} /><div style={{ width: 36, height: 36, borderRadius: 18, overflow: 'hidden' }}><img src={A.avatarDash} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></div>
      </div>
      <div style={{ padding: '0 20px 20px', display: 'flex', gap: 12, overflow: 'hidden' }}>
        {stats.map(([label, value], i) => <div key={label} style={{ ...card, flex: '0 0 150px', height: 90, borderLeft: `4px solid ${i === 1 ? C.amber : C.orange}` }}><div style={{ color: C.muted, fontSize: 12 }}>{label}</div><div style={{ marginTop: 10, fontSize: 18, fontWeight: 800 }}>{value}</div></div>)}
      </div>
      <section style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}><b style={{ fontSize: 16 }}>Pending Claims</b><span style={{ color: C.orange, fontWeight: 700, fontSize: 14 }}>View All</span></div>
        <div style={{ ...card, borderLeft: `4px solid ${C.amber}`, boxShadow: '0 2px 4px rgba(0,0,0,.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}><div><div style={{ fontSize: 13, fontWeight: 800 }}>#CL-20250620-001</div><div style={{ fontSize: 14, fontWeight: 700, marginTop: 8 }}>Transit Insurance</div><div style={{ fontSize: 13, color: C.muted }}>Claimant: Rajesh Kumar</div></div><Badge background={C.orangeSoft} color={C.orange}>Awaiting Assessment</Badge></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}><b style={{ fontSize: 16 }}>₹25,000</b><button style={{ ...btn(C.orange), width: 100 }}>Review</button></div>
        </div>
      </section>
      <section style={{ padding: '0 20px 20px' }}>
        <div style={{ ...card }}><b style={{ fontSize: 14 }}>Performance Trends</b><div style={{ height: 60, display: 'flex', gap: 8, alignItems: 'flex-end', marginTop: 12 }}>{[40,65,30,55,55,55,55].map((h, i) => <div key={i} style={{ flex: 1, height: h, background: C.orange, opacity: .8, borderRadius: '4px 4px 0 0' }} />)}</div></div>
      </section>
      <section style={{ padding: '0 20px 20px' }}>
        <b style={{ fontSize: 16 }}>Quick Actions</b>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
          {[['New Policy', A.plus], ['All Claims', A.claims], ['Add Product', A.policies], ['Reports', A.inspectors]].map(([label, icon]) => <div key={label as string} style={{ ...card, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}><Img src={icon as string} size={24} /><b style={{ fontSize: 13 }}>{label}</b></div>)}
        </div>
      </section>
    </Page>
  );
}

function PolicyProducts() {
  const products = [
    ['Crop Insurance – Standard', '80%', '2.5%', 'Flood, War'],
    ['Transit Insurance – Basic', '90%', '1.8%', 'Theft by staff'],
    ['Storage Bond Insurance', '70%', '3.0%', 'Natural Decay'],
  ];
  return <Page id="2041:346" active="Policies" height={1096}><StatusBar battery /><Header title="Policy Products" /><div style={{ padding: '0 20px 20px' }}><div style={{ display: 'flex', gap: 12, height: 40 }}><div style={{ background: C.orange, color: C.white, padding: '8px 16px', borderRadius: 20, fontWeight: 700, fontSize: 13 }}>Active (5)</div><div style={{ border: `1px solid ${C.border}`, padding: '8px 16px', borderRadius: 20, fontWeight: 600, fontSize: 13, color: C.muted }}>Draft (2)</div><div style={{ border: `1px solid ${C.border}`, padding: '8px 16px', borderRadius: 20, fontWeight: 600, fontSize: 13, color: C.muted }}>Archived</div></div>{products.map(p => <div key={p[0]} style={{ ...card, marginTop: 16, boxShadow: '0 4px 6px rgba(0,0,0,.05)' }}><b style={{ fontSize: 16 }}>{p[0]}</b><div style={{ display: 'flex', gap: 12, fontSize: 13, color: C.muted, marginTop: 4 }}><span>Coverage: <b style={{ color: C.text }}>{p[1]}</b></span><span>Premium: <b style={{ color: C.text }}>{p[2]}</b></span></div><div style={{ color: C.muted, fontSize: 13, marginTop: 4 }}>Exclusions: {p[3]}</div><div style={{ display: 'flex', gap: 8, marginTop: 16 }}>{['Edit', 'View', 'Deactivate'].map(x => <button key={x} style={{ ...btn(C.white, C.text), flex: 1 }}>{x}</button>)}</div></div>)}</div><div style={{ padding: 20 }}><button style={{ ...btn(C.orange), width: '100%' }}>＋ Add New Product</button></div></Page>;
}

function IssuePolicy() {
  return <Page id="2041:347" active="Policies" height={1096}><StatusBar battery /><Header title="Issue Policy" /><div style={{ padding: '12px 20px 20px' }}><div style={{ display: 'flex', gap: 8, marginBottom: 20 }}><div style={{ flex: 1, height: 4, background: C.orange, borderRadius: 2 }} /><div style={{ flex: 1, height: 4, background: C.orange, borderRadius: 2 }} /><div style={{ flex: 1, height: 4, background: C.border, borderRadius: 2 }} /></div><div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><Field label="Insurance Type" value="Transit Insurance" right={<span>⌄</span>} /><Field label="Token / Shipment / Storage ID" placeholder="Enter ID or Scan" right={<span>⌗</span>} /><div style={{ ...card, borderLeft: `4px solid ${C.orange}` }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 800 }}><span>TRD-CHL-089234</span><span style={{ color: C.orange }}>Chilli 120 MT</span></div><div style={{ marginTop: 8, fontSize: 14, fontWeight: 600 }}>Value: ₹33.6L</div></div><Field label="Coverage Amount" value="₹25,00,000" /><div style={{ color: C.muted, fontSize: 11 }}>* Maximum coverage is 80% of asset value</div><div style={{ ...card, background: C.orange, color: C.white }}><div style={{ fontSize: 12, opacity: .8 }}>Estimated Premium (Rate 2.5%)</div><div style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>₹62,500</div></div><div style={{ display: 'flex', gap: 12 }}><Field label="Start Date" value="20/06/2025" /><Field label="End Date" value="20/12/2025" /></div><div style={{ background: C.blueSoft, color: C.blue, borderRadius: 8, padding: 12, fontSize: 12, fontWeight: 600 }}>ⓘ 6-digit OTP from policyholder required to finalize issuance.</div><button style={{ ...btn(C.orange), width: '100%' }}>Issue Policy</button></div></div></Page>;
}

function PolicyDetail() {
  return <Page id="2041:348" active="Policies" height={1096}><StatusBar battery /><Header title="Policy Detail" /><div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 20 }}><div style={{ background: `linear-gradient(90deg, ${C.orange}, ${C.orangeDark})`, color: C.white, padding: 24, borderRadius: 16, boxShadow: '0 8px 8px rgba(245,124,0,.30)' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, opacity: .85 }}><b>POL-20250620-001</b><Badge background={C.green} color={C.white}>ACTIVE</Badge></div><div style={{ fontSize: 24, fontWeight: 800, marginTop: 16 }}>Crop Insurance</div><div style={{ fontSize: 15, opacity: .85, marginTop: 4 }}>Rajesh Kumar • Farmer ID #8821</div></div><div style={{ display: 'flex', gap: 12 }}>{[['Sum Insured','₹25,00,000'],['Premium','₹62,500']].map(([a,b])=><div key={a} style={{ ...card, flex: 1 }}><div style={{ color: C.muted, fontSize: 12 }}>{a}</div><div style={{ marginTop: 4, fontWeight: 800, color: a === 'Premium' ? C.orange : C.text }}>{b}</div></div>)}</div><div style={{ ...card }}><b style={{ fontSize: 14 }}>Coverage Period</b><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}><div><b style={{ fontSize: 13 }}>20 Jun 2025</b><div style={{ color: C.muted, fontSize: 11 }}>Issue Date</div></div><div style={{ width: 40, height: 1, background: C.border }} /><div style={{ textAlign: 'right' }}><b style={{ fontSize: 13 }}>20 Dec 2025</b><div style={{ color: C.muted, fontSize: 11 }}>Expiry Date</div></div></div></div><div style={{ ...card }}><b style={{ fontSize: 14 }}>Coverage & Perils</b><div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 12 }}>{['Fire','Pests','Rain','Drought'].map(x=><span key={x} style={{ display: 'inline-flex', gap: 4, alignItems: 'center', fontSize: 13 }}><span style={{ color: C.green }}>✓</span>{x}</span>)}</div><div style={{ height: 1, background: C.border, margin: '12px 0' }}><div /></div><div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>{['Flood','War'].map(x=><span key={x} style={{ display: 'inline-flex', gap: 4, alignItems: 'center', color: C.muted, fontSize: 13 }}><span style={{ color: C.red }}>×</span>{x}</span>)}</div></div><div><b style={{ fontSize: 14 }}>Claims History</b><div style={{ ...card, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 12, padding: 32 }}><Img src={A.shieldOff} size={40} /><span style={{ color: C.muted, fontSize: 14 }}>No claims filed yet</span></div></div><div style={{ display: 'flex', gap: 8 }}><button style={{ ...btn(C.orange), flex: 1 }}>Renew</button><button style={{ ...btn(C.white, C.text), flex: 1 }}>Cancel</button><button style={{ ...btn(C.blue), flex: 1 }}>File Claim</button></div></div></Page>;
}

function ClaimReview() {
  return <Page id="2041:349" active="Claims" height={1096}><StatusBar battery /><Header title="Claim Review" /><div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 20 }}><div style={{ ...card, borderLeft: `4px solid ${C.blue}` }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><b style={{ fontSize: 13 }}>Claim #CL-001</b><div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>Policy: POL-001</div></div><b style={{ color: C.blue, fontSize: 18 }}>₹25,000</b></div><div style={{ height: 1, background: C.border, margin: '12px 0' }} /><b style={{ fontSize: 14 }}>Claimant: Rajesh Kumar</b><div style={{ color: C.muted, fontSize: 13, lineHeight: 1.5, marginTop: 4 }}>Incident: Transit damage – 50 kg spoiled due to humidity.</div></div><div><b style={{ fontSize: 14 }}>Evidence Portfolio</b><div style={{ display: 'flex', gap: 12, marginTop: 12 }}>{[A.evidence1,A.evidence2,A.evidence3].map((src,i)=><div key={i} style={{ width: 100, height: 100, borderRadius: 8, overflow: 'hidden', position: 'relative' }}><img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /><span style={{ position: 'absolute', left: 4, bottom: 4, background: 'rgba(0,0,0,.5)', color: C.white, borderRadius: 4, fontSize: 8, padding: '2px 6px' }}>GPS: 12.97, 77.59</span></div>)}</div></div><div style={{ ...card, border: `1px solid ${C.border}` }}><b style={{ fontSize: 14 }}>AI Fraud Risk Score</b><div style={{ display: 'flex', gap: 24, alignItems: 'center', marginTop: 16 }}><div style={{ width: 80, height: 80, borderRadius: '50%', background: `conic-gradient(${C.green} 0 12%, #dbeafe 12% 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 64, height: 64, borderRadius: '50%', background: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: C.green }}>12%</div></div><div style={{ flex: 1 }}><Badge background={C.greenSoft} color={C.green}>LOW RISK</Badge><div style={{ color: C.muted, fontSize: 12, lineHeight: 1.4, marginTop: 4 }}>Cross-checked with weather data and token history – matches reported incident.</div></div></div></div><div><b style={{ fontSize: 14 }}>Inspector Assignment</b><div style={{ ...card, border: `1px solid ${C.border}`, marginTop: 12, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ color: C.muted, fontSize: 14 }}>Select Inspector</span><span>⌄</span></div><button style={{ ...btn(C.white, C.text), width: '100%', marginTop: 12 }}>Assign Inspector</button></div><div style={{ display: 'flex', gap: 8 }}><button style={{ ...btn(C.green), flex: 1 }}>Approve</button><button style={{ ...btn(C.red), flex: 1 }}>Reject</button></div><button style={{ ...btn(C.white, C.text), width: '100%' }}>Request More Info</button></div></Page>;
}

function InspectorAssignment() {
  const inspectors = [
    [A.avatar1, 'Arjun Sharma', '4.8', 'Available Today', C.greenSoft, C.green, 'Crop & Transit', '₹2,500', true],
    [A.avatar2, 'Priya Nair', '4.6', 'Available Tomorrow', C.amberSoft, C.amber, 'Storage & Warehouse', '₹2,000', false],
    [A.avatar3, 'Mohammed Khan', '4.4', 'Unavailable', C.redSoft, C.red, 'All Types', '₹3,000', false],
  ] as const;
  return <Page id="2041:350" active="Inspectors" height={1096}><StatusBar battery /><div style={{ padding: '12px 20px' }}><Header title="Assign Inspector" /><div style={{ color: C.muted, fontSize: 14, margin: '-2px 0 12px 36px' }}>For Claim #CL-001</div></div><div style={{ padding: '0 20px 20px' }}>{inspectors.map((r) => <div key={r[1]} style={{ ...card, marginBottom: 12, boxShadow: '0 4px 6px rgba(0,0,0,.05)' }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div style={{ display: 'flex', gap: 12, alignItems: 'center' }}><img src={r[0]} alt="" style={{ width: 44, height: 44, borderRadius: 22, objectFit: 'cover' }} /><div><b style={{ fontSize: 12 }}>{r[1]}</b><div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>★ {r[2]}</div></div></div><Badge background={r[4]} color={r[5]}>{r[3]}</Badge></div><div style={{ color: C.muted, fontSize: 13, marginTop: 12, lineHeight: 1.5 }}>Specialization: <b style={{ color: C.text }}>{r[6]}</b><br />Service Fee: <b style={{ color: C.text }}>{r[7]}</b></div><button style={{ ...btn(r[8] ? C.orange : C.white, r[8] ? C.white : C.text), width: '100%', marginTop: 12 }}>{r[8] ? 'Assign' : r[3] === 'Unavailable' ? 'Reschedule' : 'Assign'}</button></div>)}</div><div style={{ ...card, margin: '0 20px 16px' }}><b style={{ fontSize: 14 }}>Schedule Inspection</b><div style={{ display: 'flex', gap: 12, marginTop: 12 }}><div style={{ flex: 1 }}><div style={{ color: C.muted, fontSize: 12, marginBottom: 6 }}>Inspection Date</div><div style={{ border: `1px solid ${C.border}`, borderRadius: 8, height: 44, display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 14 }}>22/06/2025</div></div><div style={{ flex: 1 }}><div style={{ color: C.muted, fontSize: 12, marginBottom: 6 }}>Time Slot</div><div style={{ border: `1px solid ${C.border}`, borderRadius: 8, height: 44, display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 14 }}>10:00 AM</div></div></div></div><div style={{ padding: '0 20px' }}><button style={{ ...btn(C.orange), width: '100%' }}>Confirm Assignment</button></div><div style={{ padding: '20px 40px', display: 'flex', alignItems: 'center' }}><div style={{ textAlign: 'center' }}><div style={{ width: 24, height: 24, borderRadius: 12, background: C.orange, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div><div style={{ color: C.orange, fontSize: 10, fontWeight: 700 }}>Pending</div></div><div style={{ flex: 1, height: 2, background: C.orange }} /><div style={{ textAlign: 'center' }}><div style={{ width: 24, height: 24, borderRadius: 12, background: C.orange }} /><div style={{ color: C.orange, fontSize: 10, fontWeight: 700 }}>Assigning</div></div><div style={{ flex: 1, height: 2, background: C.border }} /><div style={{ textAlign: 'center' }}><div style={{ width: 24, height: 24, borderRadius: 12, background: C.white, border: `2px solid ${C.border}` }} /><div style={{ color: '#9ca3af', fontSize: 10, fontWeight: 700 }}>Visit</div></div></div></Page>;
}

function ClaimAssessment() {
  return <Page id="2041:351" active="Claims" height={1096}><StatusBar battery /><Header title="Claim Assessment" /><div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}><div style={{ ...card, boxShadow: '0 4px 6px rgba(0,0,0,.05)' }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><img src={A.avatar1} alt="" style={{ width: 32, height: 32, borderRadius: 16, objectFit: 'cover' }} /><div><b style={{ fontSize: 13 }}>Arjun Sharma</b><div style={{ fontSize: 11, color: C.muted }}>Inspector Report • 22/06/2025</div></div></div><Badge background={C.greenSoft} color={C.green}>REPORT SUBMITTED</Badge></div><div style={{ display: 'flex', gap: 8, marginTop: 12 }}>{[A.assess1,A.assess2,A.assess3].map((src,i)=><img key={i} src={src} alt="" style={{ width: 100, height: 70, objectFit: 'cover', borderRadius: 8 }} />)}</div><div style={{ background: C.bg, padding: 12, borderRadius: 8, color: C.muted, fontSize: 13, lineHeight: 1.4, marginTop: 12 }}>Transit damage confirmed. 48 kg of chilli spoiled due to moisture exposure. Packaging failure noted during shipment process.</div></div><div style={{ ...card }}><b style={{ fontSize: 14 }}>Damage Assessment</b><div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 80px', gap: 8, fontSize: 12, color: C.muted, padding: '12px 0', borderBottom: `1px solid ${C.border}` }}><span>Item</span><span>Damaged Qty</span><span style={{ textAlign: 'right' }}>Value</span></div><div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 80px', gap: 8, fontSize: 14, padding: '12px 0' }}><b>Chilli</b><span>48 kg</span><b style={{ textAlign: 'right' }}>₹19,200</b></div><div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 14 }}>Total Assessed Loss</b><b style={{ color: C.orange, fontSize: 18 }}>₹19,200</b></div></div><div><div style={{ display: 'flex', justifyContent: 'space-between' }}><b style={{ fontSize: 14 }}>Recommendation</b><Badge background={C.amberSoft} color={C.amber}>AI: PARTIAL APPROVAL</Badge></div><div style={{ display: 'flex', gap: 8, marginTop: 12 }}><button style={{ ...btn(C.white, C.muted), flex: 1, padding: 8, fontSize: 10 }}>Approve Full ₹25,000</button><button style={{ ...btn(C.orangeSoft, C.orange), flex: 1, padding: 8, fontSize: 10, border: `1px solid ${C.orange}` }}>Partial Approval ₹19,200</button><button style={{ ...btn(C.white, C.muted), flex: 1, fontSize: 12 }}>Reject</button></div></div><div style={{ ...card, borderLeft: `4px solid ${C.orange}` }}><div style={{ color: C.muted, fontSize: 13 }}>Payout Amount</div><div style={{ fontSize: 28, fontWeight: 800, marginTop: 2 }}>₹19,200</div><div style={{ color: C.amber, fontSize: 11, fontWeight: 700, marginTop: 4 }}>* 23% deductible applied to original claim ₹25,000</div></div><button style={{ ...btn(C.orange), width: '100%' }}>Approve &amp; Proceed to Payout</button><button style={{ ...btn(C.white, C.text), width: '100%' }}>Request Revision</button></div></Page>;
}

function ClaimPayout() {
  const [success, setSuccess] = useState(true);
  return <Page id="2041:352" active="Claims" height={1999}><StatusBar battery /><Header title="Claim Payout" /><div style={{ padding: '0 20px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}><div style={{ ...card, borderLeft: `4px solid ${C.green}`, padding: 20 }}><div style={{ fontSize: 13, fontWeight: 700 }}>#CL-20250620-001</div><div style={{ fontSize: 32, fontWeight: 800, marginTop: 4 }}>₹19,200</div><div style={{ color: C.muted, fontSize: 12 }}>Approved amount after moisture-damage assessment</div></div><div><b style={{ fontSize: 14 }}>Payment Mode</b><div style={{ display: 'flex', gap: 8, marginTop: 12 }}>{[['Bank Transfer',A.building],['UPI',A.qr],['Wallet',A.wallet]].map(([label,icon],i)=><div key={label} style={{ ...card, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, border: `1px solid ${i===0?C.orange:C.border}` }}><Img src={icon as string} size={24} /><b style={{ fontSize: 11, color: i===0?C.orange:C.muted }}>{label}</b></div>)}</div></div><div style={{ ...card }}>{[['Beneficiary Name','Rajesh Kumar',false],['Account Number','**** **** 8821',true],['IFSC Code','HDFC0001245',true]].map(([label,value,outlined]) => <div key={label as string} style={{ marginBottom: 12 }}><div style={{ color: C.muted, fontSize: 12, fontWeight: 600, marginBottom: 8 }}>{label}</div><div style={{ height: 48, background: outlined ? C.white : C.bg, border: outlined ? `1px solid ${C.border}` : 0, borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 12px', boxSizing: 'border-box', fontSize: 14 }}>{value}</div></div>)}</div><div><b style={{ fontSize: 14 }}>Security Verification</b><div style={{ ...card, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', marginTop: 12 }}><div style={{ color: C.muted, fontSize: 13 }}>Enter 6-digit OTP sent to claimant <b style={{ color: C.text }}>+91 98765-43210</b></div><div style={{ display: 'flex', gap: 8 }}>{Array.from({ length: 6 }).map((_,i)=><div key={i} style={{ width: 42, height: 50, background: C.bg, border: `1px solid ${i===0?C.orange:C.bg}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>•</div>)}</div><div style={{ color: C.orange, fontSize: 12, fontWeight: 700 }}>Resend OTP in 0:45</div></div></div><button style={{ ...btn(C.orange), width: '100%' }}>Confirm Payout</button></div>{success && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}><div style={{ width: 320, background: C.white, borderRadius: 24, padding: 32, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}><div style={{ width: 80, height: 80, borderRadius: 40, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Img src={A.payoutCheck} size={40} /></div><div style={{ textAlign: 'center' }}><div style={{ fontSize: 24, fontWeight: 800 }}>Payout Successful!</div><div style={{ fontSize: 14, color: C.muted, marginTop: 8 }}>₹19,200 has been initiated to Rajesh Kumar's bank account.</div></div><div style={{ width: '100%', background: C.bg, padding: 16, borderRadius: 12, color: C.muted, fontSize: 12, textAlign: 'center' }}>Transaction Ref: <b style={{ color: C.text }}>TRAD-PAY-881023</b></div><button onClick={() => setSuccess(false)} style={{ ...btn(C.orange), width: '100%' }}>Close Claim</button></div></div>}</Page>;
}

function InsuranceLedger() {
  const rows = [['20 Jun','POL-001','Credit','₹62,500','₹62,500'],['21 Jun','CL-001 Payout','Debit','-₹19,200','₹43,300'],['22 Jun','POL-002','Credit','₹45,000','₹88,300'],['23 Jun','POL-003','Credit','₹38,000','₹1,26,300']];
  return <Page id="2041:353" active="More" height={1096}><StatusBar battery /><Header title="Insurance Ledger" /><div style={{ padding: '0 20px 20px' }}><div style={{ display: 'flex', gap: 8 }}>{[['Premiums','₹12.5L',C.green],['Claims','₹7.75L',C.red],['Net Income','₹4.75L',C.orange]].map(([a,b,color])=><div key={a} style={{ ...card, flex: 1, padding: 12, borderLeft: `3px solid ${color}` }}><div style={{ color: C.muted, fontSize: 11 }}>{a}</div><b style={{ color: color as string, fontSize: 15, marginTop: 4, display: 'block' }}>{b}</b></div>)}</div><div style={{ ...card, marginTop: 16, padding: 4, display: 'flex' }}>{['Jun 2025','May 2025','Apr 2025'].map((m,i)=><div key={m} style={{ flex: 1, textAlign: 'center', padding: 8, borderRadius: 6, background: i===0?C.orange:'transparent', color: i===0?C.white:C.muted, fontSize: 13, fontWeight: 700 }}>{m}</div>)}</div><div style={{ ...card, marginTop: 16, padding: 4, overflow: 'hidden' }}><div style={{ display: 'grid', gridTemplateColumns: '45px 1fr 70px 80px', background: C.bg, padding: 12, gap: 4, fontSize: 11, fontWeight: 800 }}><span>Date</span><span>Policy/Claim</span><span style={{ textAlign: 'right' }}>Amount</span><span style={{ textAlign: 'right' }}>Balance</span></div>{rows.map((r,i)=><div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '45px 1fr 70px 80px', padding: 12, gap: 4, fontSize: 12, background: i%2?C.bg:C.white }}><span>{r[0]}</span><div><b style={{ fontSize: 13 }}>{r[1]}</b><div style={{ color: C.muted, fontSize: 10 }}>{r[2]}</div></div><b style={{ textAlign: 'right', color: r[2]==='Credit'?C.green:C.red }}>{r[3]}</b><b style={{ textAlign: 'right', color: C.orange }}>{r[4]}</b></div>)}</div><div style={{ display: 'flex', gap: 12, marginTop: 16 }}><button style={{ ...btn(C.white, C.text), flex: 1 }}>Export PDF</button><button style={{ ...btn(C.white, C.text), flex: 1 }}>Export CSV</button></div></div></Page>;
}

function InsuranceSettings() {
  const groups: Record<string, [string,string][]> = {
    Products: [['Manage Policy Catalog','book'],['Risk Parameters','shield']],
    Operations: [['Assign Inspector Pool','users'],['Payout Accounts','card']],
    Technology: [['Risk Models (AI Config)','cpu'],['API Keys & Webhooks','code'],['Integration Status','activity']],
    Account: [['Notifications','bell'],['Security & 2FA','lock'],['Help & Support','help'],['Logout','logout']],
  };
  return <Page id="2041:354" active="More" height={1198}><StatusBar battery /><Header title="Settings" /><div style={{ padding: '0 20px 20px' }}><div style={{ ...card, display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}><div style={{ width: 64, height: 64, borderRadius: 12, background: C.orangeSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>▦</div><div><b style={{ fontSize: 16 }}>Bajaj Allianz – Agri</b><div style={{ color: C.muted, fontSize: 11, marginTop: 4 }}>IRDA License: IRDA/HLT/2025/001</div><Badge background={C.greenSoft} color={C.green}>VERIFIED PARTNER</Badge></div></div>{Object.entries(groups).map(([group,items])=><div key={group} style={{ marginBottom: 20 }}><div style={{ color: C.muted, fontSize: 12, fontWeight: 700, marginBottom: 10 }}>{group.toUpperCase()}</div><div style={{ background: C.white, borderRadius: 12, overflow: 'hidden' }}>{items.map(([label,icon],i)=><div key={label} style={{ height: 52, borderBottom: i < items.length-1 ? `1px solid ${C.border}` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', color: label==='Logout'?C.red:C.text, fontSize: 14 }}><div style={{ display: 'flex', gap: 12, alignItems: 'center' }}><span style={{ width: 20, textAlign: 'center', color: label==='Logout'?C.red:C.muted }}>{icon==='bell'?'◔':icon==='lock'?'▣':icon==='help'?'?':icon==='logout'?'↪':icon==='users'?'♙':icon==='card'?'▤':icon==='cpu'?'◫':icon==='code'?'<>':icon==='activity'?'⌁':icon==='shield'?'◉':'▤'}</span>{label}</div><span style={{ color: C.muted }}>{label==='Integration Status'?<Badge background={C.greenSoft} color={C.green}>CONNECTED</Badge>:'›'}</span></div>)}</div></div>)}<div style={{ textAlign: 'center', color: C.muted, fontSize: 11, padding: '4px 0 20px' }}>TRADIE Insurance Module v2.4.1<br />Build 2025.06.20.1042</div></div></Page>;
}

function InsuranceBottomNavReference() {
  return <div style={{ ...base, minHeight: 94, background: C.navy, display: 'flex', alignItems: 'stretch' }}><BottomNav active="Claims" /></div>;
}

export type InsuranceScreenEntry = { nodeId: string; title: string; component: string; route: string };
export const insurance11ScreenRegistry: InsuranceScreenEntry[] = [
  ['2041:345','Insurance Dashboard','InsuranceDashboard','insurance-2041-345'],
  ['204:296','Insurance Bottom Navigation','InsuranceBottomNavReference','insurance-nav-204-296'],
  ['2041:352','Claim Payout','ClaimPayout','insurance-2041-352'],
  ['2041:351','Claim Assessment','ClaimAssessment','insurance-2041-351'],
  ['2041:350','Inspector Assignment','InspectorAssignment','insurance-2041-350'],
  ['2041:349','Claim Review','ClaimReview','insurance-2041-349'],
  ['2041:348','Policy Detail','PolicyDetail','insurance-2041-348'],
  ['2041:347','Issue Policy','IssuePolicy','insurance-2041-347'],
  ['2041:346','Policy Products','PolicyProducts','insurance-2041-346'],
  ['2041:353','Insurance Ledger','InsuranceLedger','insurance-2041-353'],
  ['2041:354','Insurance Settings','InsuranceSettings','insurance-2041-354'],
].map(([nodeId,title,component,route]) => ({ nodeId,title,component,route }));

export default function Insurance11Screens({ screen = '2041:345' }: { screen?: string }) {
  switch (screen) {
    case '2041:345': return <InsuranceDashboard />;
    case '204:296': return <InsuranceBottomNavReference />;
    case '2041:346': return <PolicyProducts />;
    case '2041:347': return <IssuePolicy />;
    case '2041:348': return <PolicyDetail />;
    case '2041:349': return <ClaimReview />;
    case '2041:350': return <InspectorAssignment />;
    case '2041:351': return <ClaimAssessment />;
    case '2041:352': return <ClaimPayout />;
    case '2041:353': return <InsuranceLedger />;
    case '2041:354': return <InsuranceSettings />;
    default: return <InsuranceDashboard />;
  }
}

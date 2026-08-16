import React from 'react';

type ScreenId = '202:7' | '2041:355' | '2041:361' | '2041:366' | '2041:362' | '2041:356' | '2041:367' | '2041:357' | '2041:359' | '2041:365' | '2041:368' | '2041:358' | '2041:364' | '2041:363' | '2041:360';

type NavItem = { label: string; icon?: string };

const C = {
  bg: '#f1f5f9',
  card: '#fff',
  text: '#1e293b',
  muted: '#64748b',
  border: '#e2e8f0',
  green: '#558b2f',
  greenSoft: '#f1f8e9',
  orange: '#ff8f00',
  orangeSoft: '#fff3e0',
  amber: '#ffb300',
  amberSoft: '#fff8e1',
  blue: '#3b82f6',
  red: '#ef4444',
  dark: '#1e293b',
};

const ASSETS = {
  // Shared market-yard navigation assets.
  home: 'https://www.figma.com/api/mcp/asset/a153d143-f9af-4f6e-b02d-f4772270b856.svg',
  entry: 'https://www.figma.com/api/mcp/asset/44a02c1b-22cd-4689-a169-2f317d66fe5e.svg',
  auctions: 'https://www.figma.com/api/mcp/asset/8d9c7ba8-2693-4075-abf8-d368ba02daf8.svg',
  weigh: 'https://www.figma.com/api/mcp/asset/6df94e24-bb8c-4938-82f6-07188268e024.svg',
  reports: 'https://www.figma.com/api/mcp/asset/8d6a6567-5c6b-42ae-999b-8fecb9ec1520.svg',
};

const base: React.CSSProperties = {
  width: 375,
  minHeight: 812,
  margin: '0 auto',
  boxSizing: 'border-box',
  background: C.bg,
  color: C.text,
  fontFamily: 'Geist, Inter, Arial, sans-serif',
};

function Img({ src, size = 24, style }: { src: string; size?: number; style?: React.CSSProperties }) {
  return <img src={src} alt="" style={{ width: size, height: size, display: 'block', objectFit: 'contain', ...style }} />;
}

function StatusBar({ signal, wifi, battery }: { signal?: string; wifi?: string; battery?: string }) {
  return (
    <div style={{ height: 44, padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <span style={{ fontSize: 14, fontWeight: 700 }}>9:41</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {signal && <Img src={signal} size={18} />}
        {wifi && <Img src={wifi} size={16} />}
        {battery && <Img src={battery} size={24} />}
      </div>
    </div>
  );
}

function Header({ title, back }: { title: string; back?: string }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 16, boxSizing: 'border-box' }}>
      {back && <Img src={back} size={24} />}
      <h1 style={{ margin: 0, fontSize: 20, lineHeight: '28px', fontWeight: 800 }}>{title}</h1>
    </div>
  );
}

function BottomNav({ active }: { active: string }) {
  const items: NavItem[] = [
    { label: 'Home', icon: ASSETS.home },
    { label: 'Entry', icon: ASSETS.entry },
    { label: 'Auctions', icon: ASSETS.auctions },
    { label: 'Weigh', icon: ASSETS.weigh },
    { label: 'Reports', icon: ASSETS.reports },
  ];
  return (
    <div style={{ background: '#fff', borderTop: `1px solid ${C.border}` }}>
      <div style={{ height: 72, padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        {items.map(item => {
          const isActive = item.label === active;
          return (
            <div key={item.label} style={{ width: 60, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', color: isActive ? C.green : C.muted }}>
              <Img src={item.icon!} size={24} />
              <div style={{ fontSize: 11, lineHeight: '14px', fontWeight: isActive ? 700 : 400 }}>{item.label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ height: 34, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 21, paddingBottom: 8, boxSizing: 'border-box' }}>
        <div style={{ width: 134, height: 5, borderRadius: 10, background: C.dark }} />
      </div>
    </div>
  );
}

function Page({ nodeId, children, active = 'Reports', bottom = true }: { nodeId: string; children: React.ReactNode; active?: string; bottom?: boolean }) {
  return (
    <div data-node-id={nodeId} style={{ ...base, minHeight: 812, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>{children}</div>
      {bottom && <BottomNav active={active} />}
    </div>
  );
}

function StatCard({ label, value, accent = C.green, extra }: { label: string; value: string; accent?: string; extra?: string }) {
  return (
    <div style={{ ...card, flex: 1, borderLeft: `3px solid ${accent}`, minWidth: 0 }}>
      <div style={{ color: C.muted, fontSize: 11, lineHeight: '14px' }}>{label}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 4 }}>
        <div style={{ fontSize: 16, lineHeight: '24px', fontWeight: 800 }}>{value}</div>
        {extra && <div style={{ color: C.green, fontSize: 11, fontWeight: 700 }}>{extra}</div>}
      </div>
    </div>
  );
}

const card: React.CSSProperties = { background: '#fff', borderRadius: 8, padding: 12, boxSizing: 'border-box' };
const button = (background: string, color = '#fff'): React.CSSProperties => ({ border: 0, background, color, height: 48, borderRadius: 8, fontSize: 14, fontWeight: 700, padding: '0 16px' });

export function YardDashboard() {
  const stats = [
    ['Vehicles in Queue', '8'],
    ['Lots Awaiting', '12'],
    ['Active Auctions', '3'],
    ['Tax Collected', '₹1,25,000'],
  ];
  return (
    <Page nodeId="2041:355" active="Home">
      <StatusBar />
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, lineHeight: '28px' }}>Guntur Market Yard</div>
          <div style={{ fontSize: 14, color: C.muted, lineHeight: '20px' }}>20 Jun 2025</div>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ fontSize: 26 }}>♧</div>
          <div style={{ width: 32, height: 32, borderRadius: 16, background: '#94a3b8' }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, overflow: 'hidden', padding: '0 16px', height: 110 }}>
        {stats.map(([label, value]) => (
          <div key={label} style={{ ...card, borderLeft: `4px solid ${C.green}`, width: 160, flex: '0 0 160px', height: '100%' }}>
            <div style={{ width: 32, height: 32, borderRadius: 16, background: C.greenSoft, marginBottom: 12 }} />
            <div style={{ fontSize: 12, color: C.muted }}>{label}</div>
            <div style={{ marginTop: 2, fontSize: 20, fontWeight: 800 }}>{value}</div>
          </div>
        ))}
      </div>
      <section style={{ padding: '24px 16px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 18, lineHeight: '24px' }}>Live Queue Summary</h2>
          <span style={{ color: C.green, fontSize: 14, fontWeight: 700 }}>View All</span>
        </div>
        <div style={{ ...card, boxShadow: '0 4px 6px rgba(0,0,0,.05)', padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <b style={{ fontSize: 14 }}>AP28AB1234 • Chilli</b>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>Producer: Rajesh • CA: Priya Agencies</div>
            </div>
            <span style={{ background: C.amberSoft, color: C.amber, borderRadius: 4, padding: '4px 8px', fontSize: 11, fontWeight: 700 }}>WAITING</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
            <b style={{ fontSize: 14 }}>120 MT</b>
            <span style={{ fontSize: 11, color: C.muted }}>15 min waiting</span>
            <button style={{ ...button(C.green), width: 100 }}>Process</button>
          </div>
        </div>
      </section>
      <div style={{ marginTop: 52, background: C.orangeSoft, border: `1px solid ${C.orange}`, padding: 12, display: 'flex', gap: 10 }}>
        <span style={{ color: C.orange, fontWeight: 700 }}>ⓘ</span>
        <b style={{ color: C.orange, fontSize: 14 }}>Tax Alert: Overdue payments from 4 buyers.</b>
      </div>
      <section style={{ padding: '24px 16px 20px' }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Quick Actions</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          {['Gate Entry', 'Auction', 'Weighbridge', 'Reports'].map(x => (
            <div key={x} style={{ width: 75, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, background: '#fff', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>◫</div>
              <span style={{ fontSize: 11 }}>{x}</span>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}

export function TaxCollection() {
  const rows = [
    ['B-234', 'Sri Ram Traders', '₹4,500', 'OVERDUE', C.orangeSoft, C.orange, true],
    ['B-235', 'Jai Kisan Ent.', '₹12,200', 'PENDING', C.amberSoft, C.amber, true],
    ['B-236', 'Kiran Exports', '₹8,000', 'PAID', C.greenSoft, C.green, false],
  ] as const;
  return (
    <Page nodeId="2041:361">
      <StatusBar />
      <Header title="Tax Collection" back="https://www.figma.com/api/mcp/asset/002ce2c6-11cd-4945-bc0c-655cd90d60af.svg" />
      <div style={{ display: 'flex', gap: 12, padding: '0 16px' }}>
        <StatCard label="Collected" value="₹1.25L" accent={C.green} />
        <StatCard label="Pending" value="₹25K" accent={C.amber} />
        <StatCard label="Overdue" value="₹5K" accent={C.red} />
      </div>
      <div style={{ paddingTop: 24 }}>
        <div style={{ background: '#cbd5e1', padding: 12, display: 'grid', gridTemplateColumns: '60px 1fr 80px', fontSize: 11, fontWeight: 800 }}><span>BILL #</span><span>BUYER</span><span style={{ textAlign: 'right' }}>DUE</span></div>
        {rows.map(([bill, buyer, due, status, bg, color, showButton]) => (
          <div key={bill} style={{ background: '#fff', borderBottom: `1px solid ${C.border}`, padding: 12 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px', alignItems: 'center', fontSize: 14 }}>
              <b>{bill}</b><span>{buyer}</span><b style={{ textAlign: 'right' }}>{due}</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
              <span style={{ background: bg, color, padding: '4px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700 }}>{status}</span>
              {showButton && <button style={{ background: '#fff', border: `1px solid ${C.green}`, color: C.green, borderRadius: 4, padding: '6px 12px', fontWeight: 700, fontSize: 11 }}>Record Payment</button>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: 16 }}><button style={{ ...button(C.dark), width: '100%' }}>⊗&nbsp; Generate Tax Report</button></div>
    </Page>
  );
}

export function StateDashboard() {
  const bars = [['Chilli', '204px'], ['Cotton', '166px'], ['Turmeric', '115px'], ['Onion', '77px'], ['Paddy', '64px']];
  return (
    <Page nodeId="2041:366">
      <StatusBar />
      <Header title="Andhra Pradesh Overview" />
      <div style={{ display: 'flex', gap: 12, padding: '0 16px 20px' }}>
        <StatCard label="Trade Volume" value="28.4K MT" extra="↑ 12%" />
        <StatCard label="Revenue" value="₹2.4 Cr" extra="↑ 8%" />
        <StatCard label="Active Yards" value="42" />
      </div>
      <div style={{ ...card, border: `1px solid ${C.border}`, margin: '0 0 16px', borderRadius: 12 }}>
        <b style={{ fontSize: 14 }}>Volume by Commodity (MT)</b>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
          {bars.map(([name, width]) => <div key={name} style={{ display: 'flex', gap: 12, alignItems: 'center' }}><span style={{ width: 60, fontSize: 11, color: C.muted }}>{name}</span><div style={{ flex: 1, height: 16, borderRadius: 2, overflow: 'hidden', background: C.bg }}><div style={{ width, height: '100%', background: C.green }} /></div></div>)}
        </div>
      </div>
      <div style={{ padding: '0 16px 16px' }}>
        <b style={{ fontSize: 14 }}>Tax Revenue by District</b>
        <div style={{ marginTop: 12, height: 140, border: `1px solid #cbd5e1`, borderRadius: 8, background: '#fff' }} />
      </div>
    </Page>
  );
}

export function DailyArrivalReport() {
  const rows = [
    ['Chilli', '120 MT', 'Guntur', 'Priya Agencies', '08:30'],
    ['Turmeric', '80 MT', 'Nizamabad', 'Krishna Traders', '09:15'],
    ['Cotton', '200 MT', 'Adilabad', 'Ravi & Co', '10:00'],
    ['Onion', '80 MT', 'Kurnool', 'Lakshmi Agencies', '11:30'],
  ];
  return (
    <Page nodeId="2041:362">
      <StatusBar />
      <Header title="Daily Arrival Report" back="https://www.figma.com/api/mcp/asset/786e2ca7-bced-44e0-a623-0d735f29088c.svg" />
      <div style={{ padding: '0 16px 16px' }}><div style={{ ...card, border: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>‹</span><b>◷&nbsp; 20 Jun 2025</b><span>›</span></div></div>
      <div style={{ display: 'flex', gap: 12, padding: '0 16px 20px' }}><StatCard label="Total Arrivals" value="24 lots" /><StatCard label="Total Weight" value="480 MT" /></div>
      <div style={{ background: '#fff' }}>
        <div style={{ background: '#cbd5e1', padding: 12, display: 'grid', gridTemplateColumns: '70px 55px 70px 1fr 40px', fontSize: 10, fontWeight: 800 }}><span>COMMODITY</span><span>QTY(MT)</span><span>ORIGIN</span><span>CA</span><span style={{ textAlign: 'right' }}>TIME</span></div>
        {rows.map(row => <div key={row[0]} style={{ padding: 12, display: 'grid', gridTemplateColumns: '70px 55px 70px 1fr 40px', borderBottom: `1px solid ${C.border}`, fontSize: 12 }}><b>{row[0]}</b><span>{row[1]}</span><span style={{ color: C.muted }}>{row[2]}</span><span style={{ color: C.muted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row[3]}</span><span style={{ textAlign: 'right', color: C.muted }}>{row[4]}</span></div>)}
      </div>
      <div style={{ padding: 16, display: 'flex', justifyContent: 'flex-end', gap: 12 }}><button style={{ border: `1px solid ${C.green}`, background: C.greenSoft, color: C.green, borderRadius: 6, padding: '8px 12px', fontWeight: 700 }}>PDF</button><button style={{ border: `1px solid ${C.green}`, background: C.greenSoft, color: C.green, borderRadius: 6, padding: '8px 12px', fontWeight: 700 }}>Excel</button></div>
    </Page>
  );
}

export function GateEntryQR() {
  return (
    <Page nodeId="2041:356" active="Entry">
      <StatusBar />
      <Header title="Gate Entry" back="https://www.figma.com/api/mcp/asset/3ecb3620-4419-4c32-b954-e4d01ff54c98.svg" />
      <div style={{ padding: 40, textAlign: 'center' }}>
        <div style={{ width: 220, height: 220, background: '#000', borderRadius: 24, margin: '0 auto', position: 'relative', overflow: 'hidden' }}><img src="https://www.figma.com/api/mcp/asset/5f305902-d56c-449d-a5ec-7e56c8a071ff.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /><div style={{ position: 'absolute', left: 10, top: 110, width: 200, height: 2, background: C.green, opacity: .6 }} /></div>
        <div style={{ marginTop: 24, fontSize: 14, color: C.muted }}>Align QR code within frame</div>
        <div style={{ marginTop: 12, color: C.green, fontWeight: 700, textDecoration: 'underline' }}>Manual Entry</div>
      </div>
      <div style={{ background: C.greenSoft, border: `1px dashed ${C.green}`, borderRadius: 12, padding: 16, margin: '0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><div><b>AP28AB1234 • Chilli</b><div style={{ color: C.muted, fontSize: 11, marginTop: 4 }}>Token ID: TRD-CHL-089234</div></div><span style={{ background: C.greenSoft, color: C.green, padding: '4px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700 }}>Verified</span></div>
        <div style={{ height: 1, background: '#d8e9cc', margin: '16px 0' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}><SmallValue label="Driver" value="Mahesh" /><SmallValue label="Weight" value="2500 kg" /><SmallValue label="Bags" value="50" /></div>
      </div>
      <div style={{ padding: 16 }}><button style={{ ...button(C.green), width: '100%' }}>Admit Vehicle</button></div>
    </Page>
  );
}

function SmallValue({ label, value }: { label: string; value: string }) { return <div style={{ width: 100 }}><div style={{ fontSize: 11, color: C.muted }}>{label}</div><div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>{value}</div></div>; }

export function ManualEntryOffline() {
  const fields = [['Vehicle Number','AP 28 AB 1234'],['Driver Name','Mahesh Kumar'],['Commodity','Chilli (Dry)'],['No. of Bags','50'],['Producer Name','Rajesh Kumar'],['CA Name','Priya Agencies']];
  return (
    <Page nodeId="2041:357" active="Entry">
      <StatusBar />
      <div style={{ background: C.amber, color: '#fff', padding: 8, textAlign: 'center', fontSize: 11, fontWeight: 800 }}>OFFLINE MODE: Sync will resume when connected</div>
      <Header title="Manual Entry" back="https://www.figma.com/api/mcp/asset/d08bf651-39e8-4d0e-880c-d71f32da1ae0.svg" />
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {fields.map(([label, value]) => <div key={label}><div style={{ fontSize: 12, color: C.muted, fontWeight: 600, marginBottom: 8 }}>{label}</div><div style={{ height: 44, background: '#fff', border: `1px solid ${C.border}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', boxSizing: 'border-box' }}><span style={{ fontSize: 14 }}>{value}</span>{label === 'Commodity' && <span>⌄</span>}</div></div>)}
        <button style={{ ...button(C.green), width: '100%' }}>Submit &amp; Generate Temp QR</button>
      </div>
    </Page>
  );
}

export function QueueManagement() {
  const items = [
    ['AP28AB1234', 'Chilli • 45m wait', 'High'],
    ['TS09CD4567', 'Cotton • 20m wait', 'Normal'],
    ['AP07XY9988', 'Chilli • 15m wait', 'Normal'],
  ];
  return (
    <Page nodeId="2041:358">
      <StatusBar />
      <div style={{ padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><h1 style={{ margin: 0, fontSize: 20 }}>Queue Management</h1><b style={{ fontSize: 14, color: C.muted }}>3/5 Bays •</b></div>
      <div style={{ background: '#fff', height: 44, display: 'flex', gap: 20, alignItems: 'center', padding: '0 16px' }}><b style={{ color: C.green }}>All Queue</b><span style={{ color: C.muted }}>By Commodity</span><span style={{ color: C.muted }}>By Priority</span></div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map(([id, detail, priority], i) => <div key={id} style={{ ...card, border: `1px solid ${priority === 'High' ? C.orange : '#fff'}`, display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ color: C.muted }}>⋮⋮</span><div style={{ flex: 1 }}><b>{id}</b><div style={{ color: C.muted, fontSize: 11, marginTop: 2 }}>{detail}</div></div><div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}><span style={{ background: priority === 'High' ? C.orangeSoft : C.bg, color: priority === 'High' ? C.orange : C.muted, borderRadius: 4, padding: '4px 8px', fontSize: 11, fontWeight: 700 }}>{priority}</span><button style={{ background: C.green, color: '#fff', border: 0, borderRadius: 4, padding: '6px 12px', fontWeight: 700, fontSize: 11 }}>Assign Bay</button></div></div>)}
      </div>
      <div style={{ padding: '4px 16px 16px' }}><h2 style={{ fontSize: 18 }}>Bay Map</h2><div style={{ display: 'flex', gap: 8 }}>{[['B1','occupied',C.green],['B2','occupied',C.green],['B3','reserved',C.amber],['B4','available','#10b981'],['B5','available','#10b981']].map(([id, text, color]) => <div key={id} style={{ flex: 1, height: 60, borderRadius: 8, background: color, color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: .8 }}><b>{id}</b><span style={{ fontSize: 11, opacity: .8 }}>{text}</span></div>)}</div></div>
    </Page>
  );
}

export function AuctionBoard() {
  const lots = ['AG-556', 'AG-557'];
  return (
    <Page nodeId="2041:359" active="Auctions">
      <StatusBar />
      <Header title="Auction Board" back="https://www.figma.com/api/mcp/asset/38748716-19b0-4f41-b5da-89e2ee86f69f.svg" />
      <div style={{ background: '#fff', height: 44, display: 'flex', gap: 20, alignItems: 'center', padding: '0 16px' }}><b style={{ color: C.orange }}>Live (3)</b><span style={{ color: C.muted }}>Upcoming (2)</span><span style={{ color: C.muted }}>Completed (5)</span></div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {lots.map(lot => <div key={lot} style={{ ...card, borderTop: `4px solid ${C.orange}`, padding: 16, boxShadow: '0 4px 6px rgba(255,143,0,.1)' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><b>● LOT #{lot}</b><div style={{ color: C.muted, fontSize: 11 }}>Chilli Grade A • 120 MT</div></div><div style={{ textAlign: 'right' }}><div style={{ color: C.orange, fontSize: 11, fontWeight: 700 }}>TIME LEFT</div><b style={{ color: C.orange }}>◷ 02:15</b></div></div><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}><div><div style={{ fontSize: 11, color: C.muted }}>CURRENT BID</div><div style={{ color: C.orange, fontSize: 24, fontWeight: 800 }}>₹158/kg</div></div><div style={{ textAlign: 'center' }}><div style={{ fontSize: 11, color: C.muted }}>RANK</div><b style={{ color: '#10b981', fontSize: 18 }}>A</b></div><button style={{ ...button(C.green), width: 72, height: 40 }}>View</button></div><div style={{ height: 1, background: C.border, margin: '16px 0' }} /><div style={{ color: C.muted, fontSize: 11 }}>12 Participants &nbsp; Last bid 10s ago</div></div>)}
      </div>
      <div style={{ background: '#fff', borderTop: `1px solid ${C.border}`, padding: 16 }}><div style={{ color: C.muted, fontSize: 12, marginBottom: 12 }}>AUTHORIZED STAFF ACTIONS</div><div style={{ display: 'flex', gap: 8 }}><button style={{ ...button(C.green), flex: 1 }}>Start</button><button style={{ ...button(C.red), flex: 1 }}>Force Close</button><button style={{ ...button(C.orange), flex: 1 }}>Extend</button></div></div>
    </Page>
  );
}

export function Weighbridge() {
  return (
    <Page nodeId="2041:360" active="Weigh">
      <StatusBar />
      <Header title="Weighbridge" back="https://www.figma.com/api/mcp/asset/e6248942-2f0b-41d6-8e66-a352c9f68bac.svg" />
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div><div style={{ fontSize: 12, color: C.muted, fontWeight: 600, marginBottom: 8 }}>Select Lot</div><div style={{ height: 44, background: '#fff', border: `2px solid ${C.green}`, borderRadius: 8, padding: '0 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><b>LOT-556 Chilli</b><span>⌄</span></div></div>
        <div style={{ display: 'flex', gap: 12 }}><WeightCard label="Gross Weight" value="12,500 kg" tone={C.green} /><WeightCard label="Tare Weight" value="2,500 kg" tone="#2196f3" /></div>
        <div style={{ ...card, textAlign: 'center', padding: 20 }}><div style={{ color: C.muted, fontSize: 12, fontWeight: 700 }}>NET WEIGHT</div><div style={{ color: C.green, fontSize: 36, fontWeight: 900, marginTop: 4 }}>10,000 kg</div><span style={{ display: 'inline-block', marginTop: 4, background: C.greenSoft, color: C.green, borderRadius: 4, padding: '4px 8px', fontSize: 11, fontWeight: 700 }}>Verified</span></div>
        <div><h2 style={{ margin: 0, fontSize: 18 }}>Unloading Confirmation</h2><div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 14 }}><span style={{ color: C.muted }}>Bag Count</span><b>50 Bags</b></div><div style={{ display: 'flex', gap: 8, marginTop: 12 }}>{[0,1,2].map((i) => <div key={i} style={{ width: 60, height: 60, borderRadius: 8, overflow: 'hidden', background: '#cbd5e1' }}><img src={['https://www.figma.com/api/mcp/asset/b5037f18-fbcf-4edc-8d22-4ac87a97e928.png','https://www.figma.com/api/mcp/asset/1d551ef1-1a9f-4ac4-be69-10895128314b.png','https://www.figma.com/api/mcp/asset/996eeca1-f1bc-4492-9b4e-ebf5935833ce.png'][i]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>)}<div style={{ width: 60, height: 60, borderRadius: 8, background: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>◉</div></div></div>
        <button style={{ ...button(C.green), width: '100%' }}>◫&nbsp; Save &amp; Sync</button>
        <div style={{ textAlign: 'center', color: '#10b981', fontSize: 11 }}>Synced to CA and Buyer successfully</div>
      </div>
    </Page>
  );
}
function WeightCard({ label, value, tone }: { label: string; value: string; tone: string }) { return <div style={{ ...card, border: `1px solid ${tone}`, flex: 1 }}><div style={{ color: C.muted, fontSize: 12 }}>{label}</div><div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>{value}</div><div style={{ color: C.muted, fontSize: 11, marginTop: 2 }}>WB-01</div><button style={{ ...button(tone), width: '100%', marginTop: 12 }}>Capture</button></div>; }

export function PriceBulletin() {
  const cards = [
    ['Chilli','Grade: A','Range: ₹145 – ₹168','Avg: ₹158','↑',C.greenSoft,C.green],
    ['Turmeric','Grade: FAQ','Range: ₹82 – ₹95','Avg: ₹88','→',C.bg,C.muted],
    ['Cotton','Grade: Long Staple','Range: ₹62 – ₹70','Avg: ₹66','↓','#ffebee',C.red],
  ] as const;
  return <Page nodeId="2041:363"><StatusBar /><Header title="Price Bulletin" back="https://www.figma.com/api/mcp/asset/d2eb12cd-1812-4ddb-b2d8-75addc86c88b.svg" /><div style={{ padding: '0 16px 8px', color: C.muted, fontSize: 14, fontWeight: 600 }}>Today: 20 Jun 2025</div><div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>{cards.map(([name, grade, range, avg, dir, bg, color]) => <div key={name} style={{ ...card, boxShadow: '0 4px 6px rgba(0,0,0,.05)', padding: 16 }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><div><b style={{ fontSize: 16 }}>{name}</b><div style={{ fontSize: 12, color: C.muted }}>{grade}</div></div><span style={{ background: bg, color, padding: '4px 8px', borderRadius: 4, fontWeight: 800 }}>{dir}</span></div><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}><div><div style={{ color: C.muted, fontSize: 11 }}>{range}</div><b style={{ fontSize: 18 }}>{avg}</b></div><div style={{ width: 60, height: 20, background: '#e2e8f0', borderRadius: 2 }} /></div></div>)}</div><div style={{ padding: '0 16px 16px' }}><b style={{ fontSize: 14 }}>30-Day Trend (Chilli)</b><div style={{ height: 100, marginTop: 12, background: '#fff', border: `1px solid ${C.border}`, borderRadius: 8 }} /></div><div style={{ padding: 16 }}><button style={{ ...button(C.green), width: '100%', height: 64 }}>◉&nbsp; Publish to App</button></div></Page>;
}

export function DisputeOversight() {
  const rows = [
    ['DIS-001','Rajesh vs Buyer Corp','Commodity: Chilli','Referred',C.orange,'rgba(255,143,0,.1)'],
    ['DIS-002','Ramesh vs AgriTrade','Commodity: Cotton','In Arbitration',C.blue,'rgba(59,130,246,.1)'],
    ['DIS-003','Suresh vs Global Mart','Commodity: Turmeric','Resolved','#10b981','rgba(16,185,129,.1)'],
  ] as const;
  return <Page nodeId="2041:364"><StatusBar /><Header title="Dispute Oversight" back="https://www.figma.com/api/mcp/asset/f5b464b4-ee55-4b0b-ac31-5304ffbb2d35.svg" /><div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>{rows.map(([id,name,commodity,status,color,bg]) => <div key={id} style={{ ...card, border: `1px solid ${C.border}`, padding: 16 }}><div style={{ display:'flex',justifyContent:'space-between' }}><b style={{ color: C.muted, fontSize: 12 }}>{id}</b><span style={{ background: bg, color, padding:'4px 8px', borderRadius:4, fontSize:11, fontWeight:800 }}>{status}</span></div><div style={{ marginTop: 16 }}><b style={{ fontSize: 15 }}>{name}</b><div style={{ color:C.muted,fontSize:13,marginTop:4 }}>{commodity}</div></div>{id==='DIS-001' && <button style={{ marginTop:16,width:'100%',height:40,background:'#fff',border:`1px solid ${C.green}`,color:C.green,borderRadius:8,fontWeight:700 }}>Assign Arbitrator</button>}</div>)}<div><h2 style={{ fontSize:16, marginBottom:12 }}>Resolution Log</h2><div style={{ ...card, border:`1px solid #cbd5e1`, padding:16 }}><div style={{ color:C.muted,fontSize:11,fontWeight:800 }}>LATEST DECISION (DIS-003)</div><p style={{ fontSize:14,lineHeight:'20px',margin:'8px 0 16px' }}>Full payment released to farmer after quality re-verification by certified lab.</p><div style={{ color:C.blue,fontSize:12,textDecoration:'underline' }}>📎 lab-report-003.pdf</div></div></div></div></Page>;
}

export function DistrictDashboard() {
  const yards = [['Guntur Main','640 MT','₹4.2L','98%'],['Tenali','320 MT','₹2.1L','92%'],['Narasaraopet','280 MT','₹2.2L','89%']];
  return <Page nodeId="2041:365"><StatusBar /><Header title="Guntur — Market Yards" /><div style={{ padding:'0 16px 24px' }}><div style={{ height:180, borderRadius:16, background:'#cbd5e1', display:'flex',alignItems:'center',justifyContent:'center',color:C.muted,fontWeight:600,position:'relative' }}>[ Interactive Map Area ]</div></div><div style={{ display:'flex',gap:12,padding:'0 16px 24px' }}><div style={{ flex:1, display:'flex',flexDirection:'column',gap:8 }}><StatCard label="Arrivals" value="1,240 MT"/><StatCard label="Tax" value="₹8.5L"/></div><div style={{ flex:1, display:'flex',flexDirection:'column',gap:8 }}><StatCard label="Disputes" value="5" accent={C.orange}/><StatCard label="Compliance" value="94%"/></div></div><div><div style={{ padding:'8px 16px' }}><b style={{ fontSize:14 }}>Yard Performance</b></div>{yards.map(([name,qty,tax,score])=><div key={name} style={{ background:'#fff',borderBottom:`1px solid ${C.border}`,padding:16,display:'flex',justifyContent:'space-between',alignItems:'center' }}><div><b>{name}</b><div style={{ color:C.muted,fontSize:11,marginTop:4 }}>{qty} • {tax}</div></div><div style={{ textAlign:'right' }}><span style={{ background:C.greenSoft,color:C.green,padding:'2px 6px',borderRadius:4,fontSize:10,fontWeight:800 }}>{score}</span><div style={{ color:C.blue,fontSize:11,marginTop:4 }}>View</div></div></div>)}</div></Page>;
}

export function ComplianceAuditLog() {
  const logs = [['Priya Sharma','Duty Supervisor','12 min ago','Open'],['Rajesh Kumar','Yard Inspector','1 hr ago','Completed'],['Admin','System Audit','3 hrs ago','Reviewed']];
  return <Page nodeId="2041:367"><StatusBar /><Header title="Compliance Audit Log" back="https://www.figma.com/api/mcp/asset/d2eb12cd-1812-4ddb-b2d8-75addc86c88b.svg" /><div style={{ padding:16 }}><div style={{ ...card,border:`1px solid ${C.border}`,marginBottom:12,display:'flex',justifyContent:'space-between' }}><span>20 Jun 2025</span><span style={{ background:C.greenSoft,color:C.green,padding:'4px 8px',borderRadius:4,fontSize:11,fontWeight:700 }}>AUDIT</span></div>{logs.map(([name,role,time,status])=><div key={name} style={{ background:'#fff',borderBottom:`1px solid ${C.border}`,padding:16 }}><div style={{ display:'flex',justifyContent:'space-between' }}><div><b>{name}</b><div style={{ color:C.muted,fontSize:11,marginTop:4 }}>{role}</div></div><span style={{ color: status==='Open'?C.orange:C.green,fontSize:11,fontWeight:700 }}>{status}</span></div><div style={{ color:C.muted,fontSize:11,marginTop:10 }}>{time}</div></div>)}</div></Page>;
}

export function UnknownMarketScreen({ title }: { title: string }) {
  return <Page nodeId="market-yard-placeholder"><StatusBar /><Header title={title} /><div style={{ padding: 16 }}><div style={{ ...card, border:`1px solid ${C.border}` }}><b>{title}</b><p style={{ color:C.muted,fontSize:13,lineHeight:'18px' }}>Screen container prepared in the market-yard module. Detailed content will use the same market-yard design tokens and interaction shell.</p></div></div></Page>;
}

export default function MarketYard14Screens({ screen = '2041:355' }: { screen?: ScreenId | string }) {
  switch (screen) {
    case '2041:355': return <YardDashboard />;
    case '2041:361': return <TaxCollection />;
    case '2041:366': return <StateDashboard />;
    case '2041:362': return <DailyArrivalReport />;
    case '2041:356': return <GateEntryQR />;
    case '2041:357': return <ManualEntryOffline />;
    case '2041:358': return <QueueManagement />;
    case '2041:359': return <AuctionBoard />;
    case '2041:360': return <Weighbridge />;
    case '2041:363': return <PriceBulletin />;
    case '2041:364': return <DisputeOversight />;
    case '2041:365': return <DistrictDashboard />;
    case '2041:367': return <ComplianceAuditLog />;
    case '202:7': return <YardDashboard />;
    default: return <UnknownMarketScreen title="Market Yard" />;
  }
}

import React from "react";

const asset = (id: string, ext = "svg") => `https://www.figma.com/api/mcp/asset/${id}.${ext}`;
const colors = { bg: "#f5f5f5", text: "#1a1a1a", muted: "#666", pink: "#d81b60", green: "#43a047", orange: "#ffb300", red: "#e53935", border: "#eee", white: "#fff" };

const screens = {
  dashboard: { title: "Sharma Farm Services", subtitle: "3,120 TRD" },
  services: { title: "My Services" },
  bookings: { title: "Booking Requests" },
  assign: { title: "Assign Job" },
  progress: { title: "Job Progress" },
  complete: { title: "Complete Job" },
  invoice: { title: "Invoice" },
  dispute: { title: "Dispute Resolution" },
} as const;

type ScreenKey = keyof typeof screens;

type Props = { screen?: ScreenKey };

function Mobile({ children }: { children: React.ReactNode }) {
  return <div style={{ width: 375, minHeight: 812, margin: "0 auto", background: colors.bg, color: colors.text, fontFamily: "'DM Sans', Arial, sans-serif", overflow: "hidden" }}>{children}</div>;
}

function StatusBar() {
  return <div data-node-id="243:9" style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", fontSize: 14, fontWeight: 600 }}><span>9:41</span><div style={{ display: "flex", gap: 6 }}><span>▥</span><span>⌁</span></div></div>;
}

function Header({ title, right }: { title: string; right?: React.ReactNode }) {
  return <div style={{ background: colors.white, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}><div style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ fontSize: 22 }}>‹</span><h1 style={{ margin: 0, fontSize: 22, lineHeight: 1.2 }}>{title}</h1></div>{right}</div>;
}

function BottomNav({ active }: { active: string }) {
  const items = ["Home", "Services", "Bookings", "Jobs", "More"];
  return <div style={{ background: colors.white, borderTop: `1px solid ${colors.border}`, padding: "0 12px", height: 96, display: "flex", alignItems: "center", justifyContent: "space-between" }}>{items.map((item) => <div key={item} style={{ width: 64, textAlign: "center", fontSize: 10, color: item === active ? colors.pink : colors.muted, fontWeight: item === active ? 700 : 500 }}><div style={{ fontSize: 20, lineHeight: 1, marginBottom: 4 }}>{item === "More" ? "•••" : item === "Jobs" ? "▣" : item === "Bookings" ? "▦" : item === "Services" ? "▦" : "⌂"}</div>{item}</div>)}</div>;
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) { return <div style={{ background: colors.white, borderRadius: 12, padding: 16, boxShadow: "0 2px 4px rgba(0,0,0,.08)", ...style }}>{children}</div>; }
function Pill({ children, color = colors.muted, bg = "#eee" }: { children: React.ReactNode; color?: string; bg?: string }) { return <span style={{ display: "inline-block", background: bg, color, borderRadius: 6, padding: "4px 8px", fontSize: 11, fontWeight: 700 }}>{children}</span>; }
function Btn({ children, filled = false, color = colors.pink, onClick }: { children: React.ReactNode; filled?: boolean; color?: string; onClick?: () => void }) { return <button onClick={onClick} style={{ flex: 1, height: 36, borderRadius: 8, border: `1px solid ${color}`, background: filled ? color : colors.white, color: filled ? colors.white : color, fontWeight: 700, fontSize: 13 }}>{children}</button>; }

function Dashboard() {
  return <Mobile><StatusBar/><div style={{ background: colors.white, display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16 }}><div><div style={{ fontWeight: 700, fontSize: 20 }}>Sharma Farm Services</div><Pill bg={colors.orange} color={colors.white}>3,120 TRD</Pill></div><div style={{ display: "flex", gap: 12, alignItems: "center" }}><span>♧</span><span style={{ width: 32, height: 32, borderRadius: 16, background: "#ddd", display: "inline-block" }} /></div></div><div style={{ background: colors.green, color: colors.white, padding: "12px 16px", display: "flex", justifyContent: "space-between", fontWeight: 600 }}><span>Available for new bookings</span><span style={{ width: 44, height: 24, borderRadius: 12, background: colors.white, display: "inline-flex", justifyContent: "flex-end", alignItems: "center", padding: 2 }}><span style={{ width: 20, height: 20, borderRadius: 10, background: colors.pink }} /></span></div><div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 24 }}><div style={{ display: "flex", gap: 12, overflow: "hidden" }}>{[["Active Services","6"],["Pending Bookings","4"],["Completed (mo)","18"],["Earnings","₹28,500"]].map(([a,b])=><Card key={a} style={{ width: 150, flex: "0 0 auto" }}><div style={{ fontSize: 12, color: colors.muted }}>{a}</div><div style={{ marginTop: 6, fontSize: 20, fontWeight: 700 }}>{b}</div></Card>)}</div><div><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><h2 style={{ margin: 0, fontSize: 18 }}>Pending Bookings</h2><span style={{ color: colors.pink, fontWeight: 600 }}>View All</span></div><Card><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ color: colors.muted, fontWeight: 700, fontSize: 12 }}>Job #J-001</span><Pill bg="#fff3e0" color={colors.orange}>Pending acceptance</Pill></div><div style={{ fontWeight: 700, fontSize: 15 }}>Rajesh Kumar · Tractor Hiring</div><div style={{ color: colors.muted, fontSize: 13, marginTop: 4 }}>4 hours · Scheduled: Today 2:00 PM</div><div style={{ color: colors.pink, fontWeight: 700, marginTop: 4, marginBottom: 12 }}>₹2,500</div><div style={{ display: "flex", gap: 8 }}><Btn filled>Accept</Btn><Btn color={colors.red}>Reject</Btn><Btn>Counter</Btn></div></Card></div><div><h2 style={{ fontSize: 18, margin: "0 0 12px" }}>Active Jobs</h2><Card><div style={{ display: "flex", justifyContent: "space-between" }}><div><div style={{ color: colors.muted, fontSize: 12, fontWeight: 700 }}>Job #J-002</div><div style={{ fontWeight: 700, marginTop: 4 }}>Drone Spraying</div><div style={{ color: colors.muted, fontSize: 13, marginTop: 2 }}>Assigned to: Mahesh</div></div><Pill bg="#e8f5e9" color={colors.green}>In Progress</Pill></div></Card></div><div style={{ display: "flex", gap: 12 }}><Card style={{ flex: 1, textAlign: "center", padding: 12, boxShadow: "none", border: `1px solid ${colors.border}` }}><div style={{ color: colors.pink, fontSize: 22 }}>⊕</div><div style={{ marginTop: 6, fontWeight: 600, fontSize: 11 }}>Add Service</div></Card><Card style={{ flex: 1, textAlign: "center", padding: 12, boxShadow: "none", border: `1px solid ${colors.border}` }}><div style={{ color: colors.pink, fontSize: 22 }}>♧</div><div style={{ marginTop: 6, fontWeight: 600, fontSize: 11 }}>Manage Staff</div></Card><Card style={{ flex: 1, textAlign: "center", padding: 12, boxShadow: "none", border: `1px solid ${colors.border}` }}><div style={{ color: colors.pink, fontSize: 22 }}>▦</div><div style={{ marginTop: 6, fontWeight: 600, fontSize: 11 }}>View Calendar</div></Card></div></div><BottomNav active="Home"/></Mobile>;
}

function Services() {
  return <Mobile><StatusBar/><Header title="My Services" right={<div style={{ width: 40, height: 40, borderRadius: 20, background: colors.pink, color: colors.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>+</div>}/><div style={{ display: "flex", gap: 8, padding: 16, overflow: "hidden" }}>{["All","Equipment","Labour","Drone","Harvesting"].map((x,i)=><span key={x} style={{ padding: "8px 16px", borderRadius: 100, background: i===0 ? colors.pink : colors.white, color: i===0 ? colors.white : colors.muted, border: `1px solid ${i===0?colors.pink:colors.border}`, whiteSpace: "nowrap", fontWeight: 600 }}>{x}</span>)}</div><div style={{ padding: "0 16px 24px", display: "flex", flexDirection: "column", gap: 16 }}><ServiceCard title="Tractor Hiring (with operator)" category="Equipment" status="Available" price="₹600/hour" icon="🚜"/><ServiceCard title="Drone Spraying Service" category="Drone" status="Busy" price="₹1,200/acre" icon="⚡" statusColor="#fb8c00" statusBg="#fff3e0"/><div style={{ textAlign: "center", color: colors.muted, padding: 40 }}><div style={{ fontSize: 48, opacity: .25 }}>⬡</div><div style={{ fontSize: 16, fontWeight: 600, marginTop: 8 }}>Add your first service</div></div></div><BottomNav active="Services"/></Mobile>;
}

function ServiceCard({ title, category, status, price, icon, statusColor=colors.green, statusBg="#e8f5e9" }: any) {
  return <Card><div style={{ display: "flex", gap: 12 }}><div style={{ width: 48, height: 48, borderRadius: 8, background: "#fce4ec", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{icon}</div><div style={{ flex: 1 }}><div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}><div style={{ fontWeight: 700, fontSize: 16 }}>{title}</div><div style={{ fontSize: 12, fontWeight: 700 }}>★ 4.9</div></div><div style={{ display: "flex", gap: 8, marginTop: 6 }}><Pill>{category}</Pill><Pill bg={statusBg} color={statusColor}>{status}</Pill></div><div style={{ color: colors.pink, fontSize: 16, fontWeight: 700, marginTop: 6 }}>{price}</div></div></div><div style={{ display: "flex", gap: 8, marginTop: 12 }}><Btn color={colors.muted}>Edit</Btn><Btn color={colors.red}>Pause</Btn><Btn>Bookings</Btn></div></Card>;
}

function Assign() {
 return <Mobile><StatusBar/><Header title="Assign Job"/><div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 24 }}><Card style={{ background: "#fce4ec" }}><div style={{ color: colors.pink, fontWeight: 700, fontSize: 14 }}>JOB SUMMARY</div><div style={{ marginTop: 8, fontWeight: 700, fontSize: 16 }}>Job #J-001 · Tractor Hiring</div><div style={{ color: colors.muted, marginTop: 4 }}>Rajesh Kumar · 20 Jun 2:00 PM</div><div style={{ color: colors.muted, marginTop: 4 }}>Guntur Farm · ₹2,400</div></Card><div><h2 style={{ margin: "0 0 12px", fontSize: 18 }}>Assign Staff</h2>{[["Mahesh Kumar","Tractor Operator · 4.9★",true],["Suresh Reddy","General Hand · 4.8★",false],["Ravi","Driver · 4.7★",false]].map(([n,d,sel]: any)=><Card key={n} style={{ marginBottom: 8, border: `1px solid ${sel?colors.pink:colors.border}` }}><div style={{ display: "flex", gap: 12, alignItems: "center" }}><div style={{ width: 40, height: 40, borderRadius: 20, background: "#ddd" }} /><div style={{ flex: 1 }}><div style={{ fontWeight: 700 }}>{n} <span style={{ color: colors.green }}>●</span></div><div style={{ color: colors.muted, fontSize: 12 }}>{d}</div></div>{sel&&<span style={{ color: colors.pink }}>✓</span>}</div></Card>)}</div><div><h2 style={{ margin: "0 0 12px", fontSize: 18 }}>Equipment Checklist</h2><div style={{ display: "flex", flexDirection: "column", gap: 10 }}><div>☑ Tractor (TR-01) <Pill bg="#e8f5e9" color={colors.green}>Available</Pill></div><div>☐ Rotavator attachment <Pill bg="#fff3e0" color="#fb8c00">needs prep</Pill></div></div></div><div><h2 style={{ margin: "0 0 12px", fontSize: 18 }}>Schedule</h2><div style={{ border: `1px solid ${colors.border}`, borderRadius: 8, padding: 12 }}>20 Jun 2025 · 2:00 PM <span style={{ float: "right", color: colors.pink }}>✎</span></div></div><Btn filled>Confirm Assignment</Btn></div><div style={{ position: "absolute", top: 60, left: "50%", transform: "translateX(-50%)", background: "#333", color: colors.white, borderRadius: 100, padding: "12px 20px", fontWeight: 600, fontSize: 14 }}>✓ Staff notified via app & SMS</div><BottomNav active="Jobs"/></Mobile>;
}

function Placeholder({ title }: { title: string }) { return <Mobile><StatusBar/><Header title={title}/><div style={{ padding: 16 }}><Card><h2 style={{ marginTop: 0 }}>{title}</h2><p style={{ color: colors.muted }}>Figma-derived screen placeholder with the existing service-provider visual system. Connect this route to the full flow when required.</p></Card></div><BottomNav active={title === "Job Progress" || title === "Complete Job" ? "Jobs" : title === "Invoice" || title === "Dispute Resolution" ? "More" : "Bookings"}/></Mobile>; }

export default function ServiceProvider8Screens({ screen = "dashboard" }: Props) {
 switch(screen){
  case "services": return <Services/>;
  case "assign": return <Assign/>;
  case "bookings": return <Placeholder title="Booking Requests"/>;
  case "progress": return <Placeholder title="Job Progress"/>;
  case "complete": return <Placeholder title="Complete Job"/>;
  case "invoice": return <Placeholder title="Invoice"/>;
  case "dispute": return <Placeholder title="Dispute Resolution"/>;
  default: return <Dashboard/>;
 }
}

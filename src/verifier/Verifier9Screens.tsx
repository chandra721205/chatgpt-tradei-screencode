import React from "react";

const screens = {
  dashboard: { title: "Verifier Dashboard", route: "verifier-dashboard" },
  queue: { title: "Verification Queue", route: "verifier-queue" },
  details: { title: "Lot Details", route: "verifier-lot-details" },
  auth: { title: "Authenticity Check", route: "verifier-authenticity" },
  documents: { title: "Validate Documents", route: "verifier-documents" },
  weight: { title: "Weight Verification", route: "verifier-weight" },
  decision: { title: "Verification Decision", route: "verifier-decision" },
  otp: { title: "Confirm with OTP", route: "verifier-otp" },
  dispute: { title: "Escalate Dispute", route: "verifier-dispute" },
} as const;

function Shell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#f8f9fa] text-[#1a1a1a] font-sans flex flex-col" data-node-id="verifier-shell">
      <div className="h-11 flex items-center justify-between px-6 bg-[#f8f9fa] text-sm font-semibold">9:41<div className="flex gap-2 text-xs">◔ ◡ ▯</div></div>
      <header className="h-14 bg-white border-b border-[#e0e0e0] flex items-center px-4 gap-3 text-[18px] font-semibold">
        {title}
      </header>
      <main className="flex-1 p-4 overflow-auto">{children}</main>
      <nav className="h-20 bg-white border-t border-[#e0e0e0] flex items-start justify-between px-3 pt-3 text-[10px] text-[#757575]">
        {["Home","Requests","In Progress","Completed","More"].map((x, i) => (
          <div key={x} className={`w-[68px] flex flex-col items-center gap-1 ${i===0 ? "text-[#00acc1]" : ""}`}>
            <div className="text-[22px]">{["⌂","▣","◷","✓","≡"][i]}</div><div>{x}</div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export function VerifierDashboard() {
  return <Shell title={screens.dashboard.title}>
    <div className="space-y-5">
      <div className="flex items-center justify-between"><div><h1 className="text-xl font-bold">Hello, Meera</h1><div className="text-sm text-[#757575]">Field Auditor <span className="ml-2 rounded bg-[#e0f7fa] px-1.5 py-0.5 text-xs font-bold text-[#00acc1]">620 TRD</span></div></div><div>◉　👤</div></div>
      <div className="flex gap-3 overflow-hidden">{[["Pending","5"],["In Progress","2"],["Completed","18"],["Disputes","1"]].map(([a,b])=><div key={a} className="w-[100px] shrink-0 rounded-xl border border-[#e0e0e0] bg-white p-3"><div className="text-xs text-[#757575]">{a}</div><div className="text-2xl font-bold mt-2">{b}</div></div>)}</div>
      <section><h2 className="font-bold text-base mb-3">New Requests</h2><div className="rounded-xl border border-[#e0e0e0] bg-white p-4 space-y-3"><div className="flex justify-between text-[#00acc1] font-semibold"><span>#VR-001</span><span className="bg-[#ffebee] text-[#d32f2f] rounded px-2 py-1 text-[11px]">HIGH</span></div><div><div className="font-semibold">Authenticity Verification</div><div className="text-sm text-[#757575]">Lot: TRD-CHL-089234</div><div className="text-sm text-[#757575]">Requestor: Priya Agencies</div></div><div className="flex gap-3"><button className="flex-1 h-12 rounded-lg bg-[#00acc1] text-white font-semibold">Accept</button><button className="flex-1 h-12 rounded-lg border border-[#00acc1] text-[#00acc1] font-semibold">Reject</button></div></div></section>
      <section><h2 className="font-bold text-base mb-3">Today&apos;s Tasks</h2><div className="bg-white rounded-lg p-3 flex items-center gap-3"><div className="text-xl text-[#00acc1]">⌖</div><div className="flex-1"><div className="font-semibold">Guntur Market Yard</div><div className="text-xs text-[#757575]">Slot: 10:30 AM - 12:00 PM</div></div><div>›</div></div></section>
    </div>
  </Shell>
}

export function VerificationDecision() {
  return <Shell title={screens.decision.title}><div className="space-y-5"><div className="rounded-xl border border-[#e0e0e0] bg-white p-4"><div className="flex justify-between"><b>Lot: TRD-CHL-0892</b><b className="text-[#00acc1]">Dried Chili</b></div><div className="my-3 border-t border-[#e0e0e0]"/><div className="space-y-2 text-sm"><div className="text-[#2e7d32]">✓ Authenticity Check PASSED</div><div className="text-[#2e7d32]">✓ Documents VALIDATED</div><div className="text-[#ffa000]">! Weight VERIFIED with Variance</div></div></div><div><h2 className="font-bold mb-3">Final Decision</h2><div className="space-y-3">{[["Approve","#2e7d32"],["Reject","#d32f2f"],["Need More Info","#ffa000"]].map(([label,color],i)=><button key={label} className={`w-full flex items-center gap-3 p-4 rounded-lg border ${i===0?"border-2":"border"} bg-white`} style={{borderColor:color as string}}><span className="inline-block w-5 h-5 rounded-full border-2" style={{borderColor:color as string}}/><span className="font-semibold" style={{color:color as string}}>{label}</span></button>)}</div></div><div><div className="font-semibold mb-2">Remarks</div><div className="h-20 rounded-lg border border-[#e0e0e0] bg-white p-3 text-sm text-[#757575]">Enter final comments...</div></div><div className="text-center text-xs text-[#757575]">OTP from requestor required to finalize</div><button className="w-full h-12 rounded-lg bg-[#00acc1] text-white font-semibold">Submit Decision</button></div></Shell>
}

export function WeightVerification() { return <Shell title={screens.weight.title}><div className="space-y-5"><div className="rounded-xl bg-[#e0f7fa] p-4 text-[#00acc1]"><div className="text-xs font-bold uppercase">Claimed on Token</div><div className="flex items-baseline justify-between"><div className="text-3xl font-bold">2,500 <span className="text-base">kg</span></div><div className="text-sm">Bag Count: 50</div></div></div><div><div className="font-semibold mb-2">Measured Weight (kg)</div><div className="h-14 rounded-lg border border-[#e0e0e0] bg-white px-4 flex items-center text-2xl font-bold">2485</div></div><div className="rounded-lg bg-[#fff8e1] p-3 text-sm font-semibold text-[#ffa000]">⚠ Variance detected: -15 kg (0.6%)</div><div><div className="font-bold mb-3">Physical Verification</div><div className="grid grid-cols-2 gap-3"><div><div className="text-sm font-semibold mb-1">Bag Count</div><div className="h-11 rounded border bg-white flex items-center px-3">49</div></div><div><div className="text-sm font-semibold mb-1">Bag Type</div><div className="h-11 rounded border bg-white flex items-center justify-between px-3">Jute <span>⌄</span></div></div></div></div><div><div className="font-semibold mb-2">Upload Weighbridge Slip</div><div className="border border-dashed rounded-lg bg-white p-4 text-center text-sm text-[#757575]">⇧ Add photo or scan</div></div><div className="flex gap-3"><button className="flex-1 h-12 rounded-lg bg-[#2e7d32] text-white font-semibold">Accept Weight</button><button className="flex-1 h-12 rounded-lg bg-[#ffa000] text-white font-semibold">Flag Mismatch</button></div></div></Shell> }

export function GenericVerifierScreen({ title }: { title: string }) { return <Shell title={title}><div className="rounded-xl border border-[#e0e0e0] bg-white p-4 space-y-4"><div className="font-bold">{title}</div><div className="text-sm text-[#757575]">Verified workflow screen from the supplied Figma design.</div><div className="h-12 rounded-lg bg-[#00acc1] text-white flex items-center justify-center font-semibold">Continue</div></div></Shell> }

export const verifierRoutes: Record<string, React.ComponentType> = {
  "verifier-dashboard": VerifierDashboard,
  "verifier-queue": () => <GenericVerifierScreen title={screens.queue.title} />,
  "verifier-lot-details": () => <GenericVerifierScreen title={screens.details.title} />,
  "verifier-authenticity": () => <GenericVerifierScreen title={screens.auth.title} />,
  "verifier-documents": () => <GenericVerifierScreen title={screens.documents.title} />,
  "verifier-weight": WeightVerification,
  "verifier-decision": VerificationDecision,
  "verifier-otp": () => <GenericVerifierScreen title={screens.otp.title} />,
  "verifier-dispute": () => <GenericVerifierScreen title={screens.dispute.title} />,
};

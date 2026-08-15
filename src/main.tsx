import React from "react";
import { createRoot } from "react-dom/client";
import Admin20ScreenRouter from "./app/components/Admin20ScreenRouter";
import Inspector10ScreenRouter from "./inspector/Inspector10ScreenRouter";
import Verifier9ScreenRouter from "./verifier/Verifier9ScreenRouter";
import InputsSupplier9Router from "./inputs/InputsSupplier9Router";
import ServiceRequestDetail4ScreenRouter from "./services/ServiceRequestDetail4ScreenRouter";
import "./styles/index.css";

function RootRouter() {
  const route = window.location.hash.replace(/^#/, "");
  if (route.startsWith("svc-") || route === "svc") return <ServiceRequestDetail4ScreenRouter />;
  if (route.startsWith("inputs-") || route === "inputs") return <InputsSupplier9Router />;
  if (route.startsWith("verifier-")) return <Verifier9ScreenRouter />;
  if (route.startsWith("inspector-") || [
    "assigned-inspections","visit-schedule","inspection-detail","sample-collection","evidence-photos","quality-checklist","submit-grade","otp-confirmation","dispute-reinspection"
  ].includes(route)) return <Inspector10ScreenRouter />;
  return <Admin20ScreenRouter />;
}

createRoot(document.getElementById("root")!).render(<RootRouter />);

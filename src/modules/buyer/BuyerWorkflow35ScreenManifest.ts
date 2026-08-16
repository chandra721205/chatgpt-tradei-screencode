import { figmaBuyer35ScreenRegistry } from "./FigmaBuyer35ScreenRegistry";

export const buyerWorkflow35ScreenManifest = figmaBuyer35ScreenRegistry.map((entry) => ({
  nodeId: entry.nodeId,
  title: entry.title,
  source: entry.figmaUrl,
  component: entry.component,
  implementationStatus: entry.implementationStatus,
  visualVerification: entry.visualVerification,
}));

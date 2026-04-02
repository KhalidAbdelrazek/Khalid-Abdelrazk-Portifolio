// ─── Demo Asset Imports ──────────────────────────────────────────────────────
// Vite resolves these at build time so URLs are correct in both dev & prod.

import idhHouseCallVideo from "@/assets/demo/Idh House Call Prediction.mp4";
import tlcTripsVideo from "@/assets/demo/Tlc Trips Etl Pipeline 36M+ Records.mp4";
import ecommerceEtl1Video from "@/assets/demo/E-Commerce Etl Pipeline.mp4";
import ecommerceEtl2Video from "@/assets/demo/E-Commerce Etl Pipeline 2.mp4";
import ecommerceBiVideo from "@/assets/demo/E-Commerce Business Intelligence Dashboard.mp4";
import idhDailyVisitsVideo from "@/assets/demo/Idh Daily Visits Analysis.mp4";
import idhDelayVideo from "@/assets/demo/Idh Delay Analysis.mp4";
import hrAttritionVideo from "@/assets/demo/Hr Employee Attrition Analysis.mp4";
import salesDashboardVideo from "@/assets/demo/Sales Analytics Dashboard.mp4";
import telecomVideo from "@/assets/demo/Telecom Business Performance.mp4";
import customerChurnPdf from "@/assets/demo/Customer churn analysis with python.pdf";

// ─── Types ───────────────────────────────────────────────────────────────────

export type VideoItem = {
  type: "video";
  src: string;
  label?: string;
};

export type PdfItem = {
  type: "pdf";
  src: string;
  label?: string;
};

export type DemoItem = VideoItem | PdfItem;

export interface DemoEntry {
  items: DemoItem[];
}

// ─── Demo Map ─────────────────────────────────────────────────────────────────
// Keys must exactly match project titles in Projects.tsx

export const demoMap: Record<string, DemoEntry> = {
  "IDH House Call Prediction": {
    items: [{ type: "video", src: idhHouseCallVideo, label: "Demo" }],
  },
  // Campaign Patient Flag shares the same IDH House Call video
  "Campaign Patient Flag Prediction": {
    items: [{ type: "video", src: idhHouseCallVideo, label: "Demo" }],
  },
  "TLC Trips ETL Pipeline 36M+ Records": {
    items: [{ type: "video", src: tlcTripsVideo, label: "Demo" }],
  },
  "E-Commerce ETL Pipeline": {
    items: [
      { type: "video", src: ecommerceEtl1Video, label: "Part 1 — Pipeline" },
      { type: "video", src: ecommerceEtl2Video, label: "Part 2 — Analysis" },
    ],
  },
  "E-Commerce Business Intelligence Dashboard": {
    items: [{ type: "video", src: ecommerceBiVideo, label: "Demo" }],
  },
  "IDH Daily Visits Analysis": {
    items: [{ type: "video", src: idhDailyVisitsVideo, label: "Demo" }],
  },
  "IDH Delay Analysis": {
    items: [{ type: "video", src: idhDelayVideo, label: "Demo" }],
  },
  "HR Employee Attrition Analysis": {
    items: [{ type: "video", src: hrAttritionVideo, label: "Demo" }],
  },
  "Sales Analytics Dashboard": {
    items: [{ type: "video", src: salesDashboardVideo, label: "Demo" }],
  },
  "Telecom Business Performance": {
    items: [{ type: "video", src: telecomVideo, label: "Demo" }],
  },
  "Customer Churn Analysis": {
    items: [{ type: "pdf", src: customerChurnPdf, label: "Analysis Report" }],
  },
  // Projects with no demo (COVID-19 Dashboard, Real Estate Analysis,
  // Bike Buyer Analysis using Excel) are intentionally omitted — no button shown.
};

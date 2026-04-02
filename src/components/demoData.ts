// ─── Types ───────────────────────────────────────────────────────────────────

export type IframeItem = {
  type: "iframe";
  src: string;
  label?: string;
};

export type DemoItem = IframeItem;

export interface DemoEntry {
  items: DemoItem[];
}

// ─── Demo Map ─────────────────────────────────────────────────────────────────
// Keys must exactly match project titles in Projects.tsx

export const demoMap: Record<string, DemoEntry> = {
  "TLC Trips ETL Pipeline 36M+ Records": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1YVVNH6qrb5fa0pbSMJDNPnF6-bo7Rnv9/preview", label: "Demo" }]
  },
  "Telecom Business Performance": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1UKC8mmKOXRd1Zk_Yru35tk-eeeU9hHb9/preview", label: "Demo" }]
  },
  "Sales Analytics Dashboard": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1y7YOAE5mgV9TWv41Q_TFcuk0L5NBJV3F/preview", label: "Demo" }]
  },
  "IDH House Call Prediction": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1aYJc0Q3Y1BkspMN8nmztT3GPIhnfbXDc/preview", label: "Demo" }]
  },
  "Campaign Patient Flag Prediction": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1aYJc0Q3Y1BkspMN8nmztT3GPIhnfbXDc/preview", label: "Demo" }]
  },
  "IDH Delay Analysis": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1mU9dkkvg9OikeJkoOF6VzyFcflgEEu_q/preview", label: "Demo" }]
  },
  "IDH Daily Visits Analysis": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1fO9vVitrH1g_oh2fV4VfafZYEvKZKQXz/preview", label: "Demo" }]
  },
  "HR Employee Attrition Analysis": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/195zbfePxQFTp13QV1NnXv5eXmUxOn-TH/preview", label: "Demo" }]
  },
  "E-Commerce ETL Pipeline": {
    items: [
      { type: "iframe", src: "https://drive.google.com/file/d/1dImiAKkfE6M0Kjr7YRhPcyoyAGbox8P9/preview", label: "Part 1" },
      { type: "iframe", src: "https://drive.google.com/file/d/1Xi5-nQ8MV43OQjOOO6lWurT-Hrzwvt8T/preview", label: "Part 2" }
    ]
  },
  "E-Commerce Business Intelligence Dashboard": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1ziC31HNS1CXJupP_aO4t5Z5cgEOvQpHq/preview", label: "Demo" }]
  },
  "Customer Churn Analysis": {
    items: [{ type: "iframe", src: "https://drive.google.com/file/d/1sO5Vif7W217hVYaNe6QZFZKFkZWljJ_Z/preview", label: "Analysis Report" }]
  }
};

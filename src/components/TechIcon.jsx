import React from "react";
import {
  SiDotnet,
  SiPython,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiLinux,
  SiNginx,
  SiFastapi,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSalesforce,
  SiSelenium,
  SiTensorflow,
  SiGoogle,
  SiPostman,
  SiPhp
} from "react-icons/si";

import {
  Server,
  Code2,
  Cpu,
  BrainCircuit,
  Database,
  Workflow,
  ShieldCheck,
  Terminal,
  Code,
  Binary,
  Layers,
  Sparkles
} from "lucide-react";

const ICON_MAP = {
  // Simple Icons with authentic brand colors softened for dark pine
  SiDotnet: { comp: SiDotnet, color: "text-[#512bd4]" },
  SiPython: { comp: SiPython, color: "text-[#3776ab]" },
  SiReact: { comp: SiReact, color: "text-[#61dafb]" },
  SiPostgresql: { comp: SiPostgresql, color: "text-[#4169e1]" },
  SiMysql: { comp: SiMysql, color: "text-[#00758f]" },
  SiDocker: { comp: SiDocker, color: "text-[#2496ed]" },
  SiGithubactions: { comp: SiGithubactions, color: "text-[#2088ff]" },
  SiGit: { comp: SiGit, color: "text-[#f05032]" },
  SiLinux: { comp: SiLinux, color: "text-[#fcc624]" },
  SiNginx: { comp: SiNginx, color: "text-[#009639]" },
  SiFastapi: { comp: SiFastapi, color: "text-[#009688]" },
  SiExpress: { comp: SiExpress, color: "text-[#c2d1c7]" },
  SiJavascript: { comp: SiJavascript, color: "text-[#f7df1e]" },
  SiTypescript: { comp: SiTypescript, color: "text-[#3178c6]" },
  SiTailwindcss: { comp: SiTailwindcss, color: "text-[#38bdf8]" },
  SiSalesforce: { comp: SiSalesforce, color: "text-[#00a1e0]" },
  SiSelenium: { comp: SiSelenium, color: "text-[#43b02a]" },
  SiTensorflow: { comp: SiTensorflow, color: "text-[#ff6f00]" },
  SiGoogle: { comp: SiGoogle, color: "text-[#4285f4]" },
  SiPostman: { comp: SiPostman, color: "text-[#ff6c37]" },
  SiPhp: { comp: SiPhp, color: "text-[#777bb4]" },

  // Lucide Icons with Earthy Tech palette
  Database: { comp: Database, color: "text-[#52b788]" },
  Server: { comp: Server, color: "text-[#52b788]" },
  Code2: { comp: Code2, color: "text-[#80d4a6]" },
  Cpu: { comp: Cpu, color: "text-[#a3e635]" },
  BrainCircuit: { comp: BrainCircuit, color: "text-[#72c999]" },
  Workflow: { comp: Workflow, color: "text-[#e2c08d]" },
  ShieldCheck: { comp: ShieldCheck, color: "text-[#52b788]" },
  Terminal: { comp: Terminal, color: "text-[#80d4a6]" },
  Code: { comp: Code, color: "text-[#72c999]" },
  Binary: { comp: Binary, color: "text-[#52b788]" },
  Layers: { comp: Layers, color: "text-[#80d4a6]" },
  Sparkles: { comp: Sparkles, color: "text-[#e2c08d]" }
};

export default function TechIcon({ name, className = "w-6 h-6", customColor }) {
  const match = ICON_MAP[name];
  if (!match) {
    return <Layers className={`${className} ${customColor || "text-[#52b788]"}`} />;
  }
  const IconComponent = match.comp;
  return <IconComponent className={`${className} ${customColor || match.color}`} />;
}

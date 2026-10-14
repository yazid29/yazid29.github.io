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
  // Simple Icons
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
  SiExpress: { comp: SiExpress, color: "text-slate-300" },
  SiJavascript: { comp: SiJavascript, color: "text-[#f7df1e]" },
  SiTypescript: { comp: SiTypescript, color: "text-[#3178c6]" },
  SiTailwindcss: { comp: SiTailwindcss, color: "text-[#06b6d4]" },
  SiSalesforce: { comp: SiSalesforce, color: "text-[#00a1e0]" },
  SiSelenium: { comp: SiSelenium, color: "text-[#43b02a]" },
  SiTensorflow: { comp: SiTensorflow, color: "text-[#ff6f00]" },
  SiGoogle: { comp: SiGoogle, color: "text-[#4285f4]" },
  SiPostman: { comp: SiPostman, color: "text-[#ff6c37]" },
  SiPhp: { comp: SiPhp, color: "text-[#777bb4]" },

  // Lucide Icons
  Database: { comp: Database, color: "text-rose-400" },
  Server: { comp: Server, color: "text-cyan-400" },
  Code2: { comp: Code2, color: "text-indigo-400" },
  Cpu: { comp: Cpu, color: "text-emerald-400" },
  BrainCircuit: { comp: BrainCircuit, color: "text-purple-400" },
  Workflow: { comp: Workflow, color: "text-amber-400" },
  ShieldCheck: { comp: ShieldCheck, color: "text-emerald-400" },
  Terminal: { comp: Terminal, color: "text-cyan-400" },
  Code: { comp: Code, color: "text-indigo-400" },
  Binary: { comp: Binary, color: "text-sky-400" },
  Layers: { comp: Layers, color: "text-teal-400" },
  Sparkles: { comp: Sparkles, color: "text-amber-300" }
};

export default function TechIcon({ name, className = "w-6 h-6", customColor }) {
  const match = ICON_MAP[name];
  if (!match) {
    return <Layers className={`${className} ${customColor || "text-cyan-400"}`} />;
  }
  const IconComponent = match.comp;
  return <IconComponent className={`${className} ${customColor || match.color}`} />;
}

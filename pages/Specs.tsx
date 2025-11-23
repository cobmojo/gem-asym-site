
import React from 'react';
import { Section, Reveal, SpotlightCard, DitherGrid } from '../components/UI';
import { 
    Layout, 
    Server, 
    Database, 
    Globe, 
    Box, 
    Cloud, 
    Shield, 
    Zap, 
    PenTool,
    Terminal,
    Cpu
} from 'lucide-react';

interface StackCategory {
    id: string;
    label: string;
    icon: React.ElementType;
    description: string;
    items: string[];
}

const STACK_DATA: StackCategory[] = [
    {
        id: "languages",
        label: "Languages & Core",
        icon: CodeIcon,
        description: "The primitives we build with.",
        items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "NestJS", "GraphQL", "TanStack"]
    },
    {
        id: "data",
        label: "Data Persistence",
        icon: Database,
        description: "Polyglot storage layer.",
        items: ["PostgreSQL", "Amazon Aurora MySQL", "Redis", "TanStack DB", "pgvector", "TanStack Query", "TanStack Table"]
    },
    {
        id: "mission-control",
        label: "Mission Control Modules",
        icon: Box,
        description: "Core application domains.",
        items: ["Twenty CRM", "Documenso CE", "Chatwoot CE"]
    },
    {
        id: "cms",
        label: "Content Engine",
        icon: Globe,
        description: "Headless publishing pipeline.",
        items: ["WordPress (Headless)", "Gutenberg", "Faust.js", "WPGraphQL", "Gotenberg (chromium-based)", "Unlayer"]
    },
    {
        id: "infra",
        label: "Infrastructure & Ops",
        icon: Cloud,
        description: "Edge delivery and observability.",
        items: ["Vercel", "AWS", "Docker", "GitHub", "Sentry", "OpenTelemetry"]
    },
    {
        id: "security",
        label: "Identity & Security",
        icon: Shield,
        description: "Auth, secrets, and keys.",
        items: ["Keycloak", "Unkey", "Infisical"]
    },
    {
        id: "integrations",
        label: "Integrations & Async",
        icon: Zap,
        description: "External services and queues.",
        items: ["Stripe", "SendGrid", "Zapier", "Inngest", "BullMQ"]
    },
    {
        id: "ui",
        label: "Interface & Design",
        icon: PenTool,
        description: "Design system and tooling.",
        items: ["shadcn/ui", "Recharts", "Figma"]
    },
    {
        id: "ai",
        label: "Intelligence",
        icon: Cpu,
        description: "Generative capabilities.",
        items: ["OpenAI"]
    }
];

// Simple internal icon wrapper to avoid import errors if specific icons are missing in environment
function CodeIcon(props: any) {
    return <Terminal {...props} />;
}

const Specs: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <DitherGrid />
      
      {/* Header */}
      <Section className="relative z-10">
        <Reveal>
            <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                    Tech Stack Manifest v1.0
                </div>
                <h1 className="text-6xl md:text-9xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                    The<br/>Architecture.
                </h1>
                <p className="text-xl text-muted font-light max-w-2xl leading-relaxed text-balance border-l border-white/20 pl-6">
                    We don't hide our choices. We build on a foundation of best-in-class open source technologies and proven cloud primitives.
                    This is the engine room of Asymmetric.al.
                </p>
            </div>
        </Reveal>
      </Section>

      {/* The Stack Grid */}
      <Section grid className="bg-white/[0.02] border-y border-white/5">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {STACK_DATA.map((category, i) => (
                <Reveal key={category.id} delay={i * 50} className="h-full">
                    <SpotlightCard className="h-full p-8 bg-black/50 border-white/5 group hover:border-white/20 transition-colors backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/5 rounded border border-white/10 text-white group-hover:text-emerald-400 transition-colors">
                                <category.icon size={20} />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-white tracking-tight">{category.label}</h3>
                                <p className="text-[10px] text-muted font-mono uppercase tracking-widest">{category.description}</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item, idx) => (
                                <span 
                                    key={idx} 
                                    className="inline-flex px-3 py-1.5 text-[11px] font-mono text-gray-400 bg-white/[0.03] border border-white/5 rounded hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-default select-none"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>
                </Reveal>
            ))}
         </div>
      </Section>

      {/* System Quality Targets */}
      <Section>
         <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
                <div className="bg-black p-12">
                    <h2 className="text-3xl font-display font-bold text-white mb-8">Performance Standards</h2>
                    <div className="grid grid-cols-2 gap-8">
                        {[
                             { k: "Edge Protocol", v: "HTTP/3 + QUIC" },
                             { k: "API Read Latency", v: "< 150ms (p50)" },
                             { k: "API Write Latency", v: "< 600ms (p95)" },
                             { k: "Core Web Vitals", v: "75th % Pass" },
                             { k: "Availability", v: "99.9% SLO" },
                             { k: "Render Start", v: "~1.0s Global" },
                        ].map((s, i) => (
                            <div key={i}>
                                <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">{s.k}</div>
                                <div className="text-xl font-bold text-white font-display">{s.v}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-black p-12">
                     <h2 className="text-3xl font-display font-bold text-white mb-8">Release Gates</h2>
                     <ul className="space-y-4">
                        {[
                            "Statement Studio totals match source gifts",
                            "Reconciliation ties Stripe payouts to journals",
                            "SPF, DKIM, DMARC green across tenants",
                            "Secrets scan verified clean (Infisical)",
                            "PII masking verified in OpenTelemetry logs",
                            "Zapier flows verified idempotent",
                            "Two-step donor recovery paths verified"
                        ].map((gate, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm text-gray-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 flex-shrink-0"></span>
                                {gate}
                            </li>
                        ))}
                     </ul>
                </div>
            </div>
         </Reveal>
      </Section>

    </div>
  );
};

export default Specs;

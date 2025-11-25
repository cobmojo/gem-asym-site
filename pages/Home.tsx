
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Section, Button, Reveal, DitherGrid, DitherGlobe, SpotlightCard, Container, ScrambleText } from '../components/UI';
import { ButtonVariant } from '../types';
import { ArrowRight, Terminal, Activity, Code, Zap, Layout, Mail, Fingerprint, Scale, FileCheck, PieChart } from 'lucide-react';

// --- Types ---

interface PhilosophyItem {
  readonly title: string;
  readonly desc: string;
}

interface FeatureItem {
  readonly icon: React.ElementType;
  readonly title: string;
  readonly description: string;
  readonly tech: string;
  readonly colSpan?: string; // For bento grid layout
}

// --- Static Data ---

const TICKER_ITEMS: readonly string[] = [
  "Unified Operating System",
  "Accelerating the Great Commission",
  "Open Source Core",
  "Soli Deo Gloria",
  "Zero Admin Drag",
  "Tenant Sovereign Architecture",
  "Missions-First Design",
  "Small Inputs, Exponential Outputs",
  "By Missionaries, For Missionaries",
  "Nonprofit 501(c)(3)",
  "Secure Data Stewardship",
  "No Vendor Lock-in",
  "Offline-First Architecture",
  "Automated Reconciliation",
  "Deploy with Confidence",
  "Global Edge Network",
  "Real-time Observability",
  "Donation Processing",
  "Partner Relationship Management",
  "Digital Security",
  "Kingdom Impact",
  "Headless CMS",
  "Audit-Ready Finance",
  "Mobilization Pipelines"
];

const PHILOSOPHY_CARDS: readonly PhilosophyItem[] = [
    { 
        title: "Unified Surface", 
        desc: "One login for finance, mobilization, and care. No context switching between fragmented tools. Your people stay focused." 
    },
    { 
        title: "Tenant Sovereignty", 
        desc: "You own your data. You own your payment keys. No lock-in. Your domains, your reputation. We are stewards, not owners." 
    },
    { 
        title: "Open Foundations", 
        desc: "Built on proven open-source standards (Next.js, Keycloak, WordPress). Extensible by design. Safe for the long haul." 
    }
];

const FEATURES_DATA: readonly FeatureItem[] = [
    { 
        icon: Layout, 
        title: "Sovereign Web Architecture", 
        description: "Break free from the 'Vendor Trap.' Proprietary site builders lure you in with templates but hold you hostage with expensive change orders. We deploy Headless WordPress coupled with Next.js—industry-standard, portable, and owned entirely by you. Stop paying thousands for simple site updates or feeling stuck with a mediocre template. Own your code, own your content, and escape the cycle of rent-seeking dependencies.",
        tech: "Next.js / Headless WP",
        colSpan: "md:col-span-2"
    },
    { 
        icon: Mail, 
        title: "High-Fidelity Communications", 
        description: "Every touchpoint is a reflection of your stewardship. From a simple password reset to a complex End-of-Year Tax Statement, we utilize best-in-class tooling (Unlayer) to ensure pixel-perfect branding. No more ugly, generated receipts. Deliver modern, responsive, and beautiful documents that build trust with your partners.",
        tech: "Unlayer / PDF Generation",
        colSpan: "md:col-span-2"
    },
    { 
        icon: PieChart, 
        title: "Native Missionary Intelligence", 
        description: "Eliminate the 'Fragmentation Tax.' Third-party fundraising overlays (like MPDX or DonorElf) add unnecessary cost, sync errors, and administrative burden. Asymmetric.al provides a unified Mission Control where finance and fundraising live in the same database. Give your workers real-time clarity without the extra fees.",
        tech: "Real-time / Unified",
        colSpan: "md:col-span-1"
    },
    { 
        icon: Zap, 
        title: "Enterprise Orchestration", 
        description: "We don't rely on fragile, hacked-together scripts. Our backend emits high-fidelity events directly to Zapier, the industry leader in automation. Whether it's triggering a welcome sequence or alerting a director, you can build complex workflows in minutes without writing code.",
        tech: "Event-Driven / Zapier",
        colSpan: "md:col-span-1"
    },
    {
        icon: Fingerprint,
        title: "Fortress Identity",
        description: "Security isn't an add-on; it's the foundation. We deploy Keycloak—the gold standard in identity management—to protect your people. Enforce Multi-Factor Authentication (MFA) globally and revoke access instantly across all apps.",
        tech: "Keycloak SSO",
        colSpan: "md:col-span-1"
    },
    {
        icon: Scale,
        title: "Zero-Touch Balance",
        description: "Stop wrestling with spreadsheets at month-end. Our engine listens to webhooks from the banking layer, automatically matching Stripe payouts to individual ledger entries. Real-time solvency without the manual toil.",
        tech: "Auto-Reconciliation",
        colSpan: "md:col-span-1"
    },
    {
        icon: Activity,
        title: "Radical Transparency",
        description: "You can't steward what you can't see. We instrument the entire stack with OpenTelemetry. From a slow database query to a failed email delivery, you have X-ray vision into the health of your digital operations.",
        tech: "OpenTelemetry",
        colSpan: "md:col-span-1"
    },
    {
        icon: FileCheck,
        title: "Audit-Grade Trust",
        description: "Integrity is non-negotiable. We maintain a tamper-evident audit log of every critical system action. Who changed that designation? When was that content published? The answer is always one click away.",
        tech: "Immutable Logs",
        colSpan: "md:col-span-1"
    }
];

// --- Sub-Components ---

const HeroSection: React.FC = () => (
    <div className="relative min-h-screen flex items-center justify-center isolate overflow-hidden">
        <DitherGrid />
        
        {/* Layer 0: Background Globe - CSS Containment for Perf */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-70 scale-50 md:scale-100 pointer-events-none will-change-transform">
            <DitherGlobe scale={1.2} />
        </div>

        {/* Layer 1: Content - LCP Critical Path */}
        <div className="relative z-10 w-full">
            <Container className="text-center">
                
                {/* Badge - CSS Animation (Immediate) */}
                <div className="flex justify-center mb-12 opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-black/60 text-[10px] font-mono uppercase tracking-widest text-muted backdrop-blur-md rounded-full shadow-2xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                        <ScrambleText text="Mission Operating System" delay={200} />
                    </div>
                </div>
                
                {/* H1 - LCP Element - CSS Animation (Immediate + 100ms delay) */}
                <div className="opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_100ms_forwards]">
                    <h1 className="text-6xl md:text-9xl font-display font-semibold tracking-tighter mb-8 text-white leading-[0.9] drop-shadow-2xl">
                        Run the Work<br/>
                        In One Place
                    </h1>
                </div>
                
                {/* Subtext - CSS Animation (Immediate + 200ms delay) */}
                <div className="relative inline-block opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_200ms_forwards]">
                    {/* Subtle backdrop to ensure text readability over globe */}
                    <div className="absolute inset-0 bg-black/40 blur-2xl -z-10 rounded-full"></div>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed text-balance">
                        Less admin. More ministry.
                        The unified platform for the modern missions agency.
                    </p>
                </div>
                
                {/* Buttons - CSS Animation (Immediate + 300ms delay) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">
                    <Link to="/missions">
                        <Button variant={ButtonVariant.PRIMARY} icon={<Terminal size={14}/>}>
                            Request a Call
                        </Button>
                    </Link>
                    <Link to="/product">
                        <Button variant={ButtonVariant.SECONDARY}>
                            See the Platform
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    </div>
);

const TickerSection: React.FC = memo(() => {
    return (
        <div 
            className="border-y border-white/10 bg-black overflow-hidden py-4 relative z-20 flex select-none group"
            aria-hidden="true"
        >
            {/* 
                Seamless Loop Strategy:
                Two identical flex containers animate side-by-side. 
                As the first one moves fully out of view (-100%), the second one has perfectly replaced it.
                The animation instantly resets to 0% at that exact moment.
            */}
            {[0, 1].map((i) => (
                <div 
                    key={i} 
                    className="flex min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused] will-change-transform"
                >
                    {TICKER_ITEMS.map((text, j) => (
                        <div key={`${i}-${j}`} className="flex items-center mx-3 group/item cursor-default">
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-muted group-hover/item:text-white transition-colors duration-300 whitespace-nowrap">
                                {text}
                            </span>
                            <span className="ml-6 text-[10px] md:text-xs text-white/10 font-normal font-mono select-none">//</span>
                        </div>
                    ))}
                </div>
            ))}
            
            {/* Gradient masks for smooth fade-in/out on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
    );
});

TickerSection.displayName = 'TickerSection';

const PhilosophySection: React.FC = () => (
    <Section className="bg-black relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: The Concept (Sticky on Desktop) */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32 self-start">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 text-white text-balance tracking-tight">Why the name?</h2>
                    <p className="text-muted leading-relaxed mb-10 text-lg font-light text-balance">
                        Good tools let simple actions create larger outcomes. We believe God multiplies faithfulness. 
                        If God is in it, little becomes much.
                    </p>
                    
                    {/* 1 -> Infinity Graphic */}
                    <div className="p-12 border border-white/10 bg-offblack/50 backdrop-blur-sm rounded-sm">
                        <div className="flex justify-between items-center mb-8 px-2 md:px-6">
                            <span className="text-7xl md:text-8xl font-display font-bold text-white leading-none">1</span>
                            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent flex-1 mx-4 md:mx-8 relative">
                                <ArrowRight className="text-white absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" size={20} />
                            </div>
                            <span className="text-7xl md:text-8xl font-display font-bold text-white leading-none">∞</span>
                        </div>
                        <div className="text-xs font-mono uppercase tracking-widest text-white/80 text-center border-t border-white/10 pt-6">
                            Simple Faithfulness → Exponential Impact
                        </div>
                    </div>
                </Reveal>
            </div>
            
            {/* Right Column: The Pillars */}
            <div className="lg:col-span-7 space-y-6 pt-8 lg:pt-0">
                {PHILOSOPHY_CARDS.map((item, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <SpotlightCard className="p-10 group bg-offblack/40 border-white/5">
                            <div className="grid grid-cols-1 gap-4">
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-muted font-light text-lg leading-relaxed border-l border-white/10 pl-6 text-balance">
                                    {item.desc}
                                </p>
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </div>
    </Section>
);

const FeaturesSection: React.FC = () => (
    <Section grid className="bg-white/[0.02] border-t border-white/5 relative">
         <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter mb-4">Infrastructure as<br/>Stewardship.</h2>
                    <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed">
                        We don't look for ways to extract rent from your basic needs. 
                        We build the digital rails for high-trust organizations to operate with sovereignty and speed.
                    </p>
                </Reveal>
                <Reveal delay={200}>
                    <div className="flex items-center gap-2 mt-6 md:mt-0">
                        <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs text-muted uppercase tracking-widest block">System Capabilities</span>
                    </div>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FEATURES_DATA.map((feature, i) => (
                    <Reveal key={i} delay={i * 100} className={`h-full ${feature.colSpan || ''}`}>
                        <SpotlightCard className="p-8 h-full bg-black/40 border-white/5 flex flex-col justify-between group">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-sm text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                        <feature.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-white/20 group-hover:text-success transition-colors">
                                        <Code size={10} />
                                        {feature.tech}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 font-display tracking-tight group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed text-balance group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
         </Container>
    </Section>
);

const RecruitmentSection: React.FC = () => (
    <Section className="relative z-10 border-t border-white/5 bg-offblack/30">
        <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-2 mb-6">
                        <Code size={14} className="text-success" />
                        <span className="font-mono text-xs text-success uppercase tracking-widest">Hiring Builders</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                        Write code for the<br />Great Commission.
                    </h2>
                    <p className="text-muted text-lg leading-relaxed text-balance">
                        We are looking for high-agency senior engineers, designers, and problem solvers who want to use their craft for a higher purpose. 
                        Join the core team or contribute to the open source ecosystem.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/join">
                        <Button 
                            variant={ButtonVariant.SECONDARY} 
                            className="border-white text-white hover:bg-white hover:!text-black transition-all duration-300 group"
                        >
                            Join the Team <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </Reveal>
    </Section>
);

// --- Main Component ---

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black overflow-x-hidden">
      <HeroSection />
      <TickerSection />
      <PhilosophySection />
      <FeaturesSection />
      <RecruitmentSection />
    </div>
  );
};

export default Home;

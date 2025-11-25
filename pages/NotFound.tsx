
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Map, ArrowLeft, Home, Search, LifeBuoy, LucideIcon } from 'lucide-react';
import { Button, DitherGrid, Reveal, Container, DitherGlobe, SpotlightCard } from '../components/UI';
import { ButtonVariant } from '../types';

// --- Types ---

interface NavOption {
    to: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

// --- Static Data ---

const NAV_OPTIONS: readonly NavOption[] = [
    { 
        to: "/", 
        icon: Home, 
        title: "Mission Control", 
        description: "Return to the dashboard homepage." 
    },
    { 
        to: "/product", 
        icon: Search, 
        title: "The Platform", 
        description: "See the tools we are building." 
    },
    { 
        to: "/contact", 
        icon: LifeBuoy, 
        title: "Support", 
        description: "Reach out if you think this is an error." 
    }
];

// --- Sub-Components ---

const NavigationCard: React.FC<{ option: NavOption }> = ({ option }) => (
    <Link to={option.to} className="group h-full block">
        <SpotlightCard className="h-full bg-white/[0.02] border-white/10 p-1 group-hover:border-white/30 transition-all">
            <div className="bg-black p-8 h-full flex flex-col items-center text-center">
                <div className="p-4 bg-white/5 rounded-full mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <option.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight">
                    {option.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed text-balance">
                    {option.description}
                </p>
            </div>
        </SpotlightCard>
    </Link>
);

// --- Main Component ---

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden selection:bg-white selection:text-black pt-20 pb-20">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <DitherGrid className="opacity-10" />
        
        {/* Distant Globe: Represents being "off the map" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-sm scale-150 mix-blend-screen">
           <DitherGlobe scale={2} />
        </div>
        
        {/* Massive 404 Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-[30vw] leading-none text-white/[0.02] select-none tracking-tighter">
            404
        </div>
      </div>
      
      <Container className="relative z-10 w-full max-w-4xl">
        <Reveal>
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-8 backdrop-blur-md">
                    <Map size={12} className="text-white" />
                    <span>Coordinates Unknown</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight">
                    Uncharted Territory.
                </h1>
                
                <p className="text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed text-balance">
                    You've wandered off the map. The page you are looking for has either moved or never existed. Let's get you back to solid ground.
                </p>
            </div>

            {/* --- Compass Navigation --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {NAV_OPTIONS.map((option) => (
                    <NavigationCard key={option.to} option={option} />
                ))}
            </div>

            <div className="mt-16 text-center">
                 <Button 
                    variant={ButtonVariant.TERTIARY} 
                    onClick={() => navigate(-1)}
                    icon={<ArrowLeft size={14} />}
                 >
                    Go Back Previous Page
                 </Button>
            </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default NotFound;


import React from 'react';
import { Container, DitherGrid, ScrambleText, Reveal, DitherGlobe } from '../components/UI';
import { BookOpen } from 'lucide-react';

const FAITH_POINTS = [
    { label: "One", text: "We believe that the writings of both Old and New Testaments were breathed out by God through the Holy Spirit, perfectly and without error, and are the final authority in all matters of faith and practice." },
    { label: "Two", text: "We believe in one true and living God the maker of heaven and earth, who exists eternally as three distinct persons: Father, Son, and Holy Spirit." },
    { label: "Three", text: "We believe man was created in the image of God, to glorify God, and enjoy Him forever. But, because of Adam's sin, man lost his innocence and incurred the penalty of spiritual and physical death, so that all human beings are now born with a sinful nature, unable to please God, unable to satisfy God's just requirements, and are therefore separated from God, lost, and unable to save themselves." },
    { label: "Four", text: "We believe Jesus Christ is the only begotten Son of God, who was born of the virgin Mary, lived a life of perfect obedience, suffered under Pontius Pilate, was crucified, died, and was buried; and that on the third day He arose bodily from the tomb, ascended into heaven, and now sits at the right hand of the throne of God." },
    { label: "Five", text: "We believe salvation is in no way a work of man, but a gracious gift of God, received by faith, and made possible only by the substitutionary death of Jesus Christ on the cross." },
    { label: "Six", text: "We believe in one church, which is the body of Christ, and includes all those who have been born again by the Holy Spirit. We affirm that believers in Jesus Christ should be baptized, and should participate together in the Lord's Supper to remember His death until He comes." },
    { label: "Seven", text: "We believe Jesus Christ is coming again in glory to receive His church to Himself, and to judge the world in righteousness." },
    { label: "Eight", text: "We believe in the resurrection of the dead, the punishment of the wicked, and the eternal blessedness of the redeemed." }
];

const Faith: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
        <DitherGrid className="opacity-10 fixed inset-0 z-0" />
        
        {/* Background Atmosphere */}
        <div className="fixed top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0">
            <DitherGlobe scale={1.8} />
        </div>

        <Container className="relative z-10 pb-24">
            {/* Header */}
            <div className="max-w-4xl mx-auto mt-12 mb-20 text-center">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-muted mb-6 backdrop-blur-md">
                        <BookOpen size={12} className="text-primary" />
                        <ScrambleText text="DOCTRINAL FOUNDATION" delay={200} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-6">
                        Statement of Faith
                    </h1>
                    <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                         The theological bedrock upon which we build.
                    </p>
                </Reveal>
            </div>

            {/* Doctrinal Points */}
            <div className="max-w-3xl mx-auto space-y-16">
                {FAITH_POINTS.map((item, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <div className="relative pl-8 md:pl-12 group">
                             {/* Large background number */}
                             <div className="absolute left-0 top-0 text-4xl md:text-6xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none -translate-x-2 md:-translate-x-4">
                                {(i + 1).toString().padStart(2, '0')}
                             </div>
                             
                             {/* Vertical line connector */}
                             <div className="absolute left-0 top-4 bottom-0 w-px bg-white/10 group-hover:bg-white/20 transition-colors hidden md:block"></div>
                             
                             <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                                <span className="text-white font-bold mr-3 uppercase text-sm tracking-widest font-mono block mb-2 opacity-60">
                                    {item.label}.
                                </span>
                                {item.text}
                             </p>
                        </div>
                    </Reveal>
                ))}
            </div>
            
            {/* Footer Seal */}
            <Reveal delay={800}>
                <div className="mt-24 pt-12 border-t border-white/10 text-center">
                     <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Soli Deo Gloria</div>
                </div>
            </Reveal>

        </Container>
    </div>
  );
};

export default Faith;

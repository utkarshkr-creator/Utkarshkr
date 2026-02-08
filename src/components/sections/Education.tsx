import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { GraduationCap } from 'lucide-react';
import educationData from '../../data/education.json';

export const Education = () => {
    return (
        <section id="education" className="py-24 relative">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-sm md:text-base uppercase tracking-widest text-fg-secondary mb-16"
                >
                    Education
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <div className="flex flex-col gap-12 border-l-2 border-border-primary pl-8 relative">
                        {educationData.map((edu, idx) => (
                            <div key={idx} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-fg-primary border-4 border-bg-primary" />
                                
                                <div className="flex gap-6 md:gap-10">
                                    <div className="shrink-0 bg-bg-secondary/50 p-4 rounded-xl h-fit">
                                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-fg-primary" />
                                    </div>
                                    
                                    <div>
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                            <h3 className="font-display font-bold text-2xl md:text-3xl text-fg-primary">
                                                {edu.institution}
                                            </h3>
                                            <span className="hidden md:inline text-fg-secondary/30">•</span>
                                            <span className="font-mono text-sm text-fg-secondary bg-fg-primary/5 px-3 py-1 rounded-full w-fit">{edu.period}</span>
                                        </div>
                                        
                                        <h4 className="text-xl text-fg-secondary mb-4">{edu.degree}</h4>
                                        
                                        <div className="inline-block px-4 py-2 border border-fg-primary/20 rounded-lg bg-bg-secondary/30">
                                            <span className="font-mono text-sm text-fg-secondary">CGPA: <strong className="text-fg-primary">{edu.cgpa}</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

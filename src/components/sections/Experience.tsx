import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Briefcase } from 'lucide-react';
import experienceData from '../../data/experience.json';

export const Experience = () => {
    const experiences = experienceData;

    return (
        <section id="experience" className="py-24 relative">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-sm md:text-base uppercase tracking-widest text-fg-secondary mb-16"
                >
                    Experience
                </motion.h2>

                <div className="max-w-4xl relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border-primary" />

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-8 relative"
                            >
                                {/* Icon */}
                                <div className="z-10 bg-bg-primary p-2 h-fit">
                                    <div className="w-10 h-10 rounded-full bg-bg-secondary border border-border-primary flex items-center justify-center">
                                        <Briefcase className="w-4 h-4 text-fg-secondary" />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                                        <h3 className="font-display font-bold text-2xl text-fg-primary">{exp.company}</h3>
                                        <span className="font-mono text-xs md:text-sm text-fg-secondary/60 uppercase tracking-widest">{exp.period}</span>
                                    </div>
                                    <h4 className="text-lg text-fg-secondary font-medium mb-3">{exp.role}</h4>
                                    <p className="text-fg-secondary/80 leading-relaxed max-w-xl">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

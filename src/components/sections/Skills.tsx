import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import {
    SiNodedotjs, SiTypescript, SiPython, SiCplusplus, SiJavascript, SiGo,
    SiPostgresql, SiMysql, SiMongodb, SiRedis,
    SiDocker, SiAmazon, SiGit,
    SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3,
    SiSocketdotio, SiWebrtc
} from 'react-icons/si';
import { FaJava, FaCloud, FaServer, FaCode, FaDatabase } from 'react-icons/fa';
import { IconType } from 'react-icons';
import skillsData from '../../data/skills.json';

// Skill icon mapping with brand colors
const skillIconMap: Record<string, { icon: IconType; color: string }> = {
    // Languages
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6" },
    "Java": { icon: FaJava, color: "#007396" },
    "Python": { icon: SiPython, color: "#3776AB" },
    "C/C++": { icon: SiCplusplus, color: "#00599C" },
    "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
    "Go": { icon: SiGo, color: "#00ADD8" },

    // Databases
    "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
    "MySQL": { icon: SiMysql, color: "#4479A1" },
    "MongoDB": { icon: SiMongodb, color: "#47A248" },
    "Redis": { icon: SiRedis, color: "#DC382D" },
    "TimescaleDB": { icon: FaDatabase, color: "#FDB515" },

    // DevOps
    "Docker": { icon: SiDocker, color: "#2496ED" },
    "AWS": { icon: SiAmazon, color: "#FF9900" },
    "Git/GitHub": { icon: SiGit, color: "#F05032" },

    // Concepts
    "System Design": { icon: FaCloud, color: "#6366F1" },
    "REST API": { icon: FaServer, color: "#10B981" },
    "WebSocket": { icon: SiSocketdotio, color: "#010101" },
    "WebRTC": { icon: SiWebrtc, color: "#333333" },
    "DSA": { icon: FaCode, color: "#EF4444" },
    "OOP": { icon: FaCode, color: "#8B5CF6" },

    // Frontend
    "React.js": { icon: SiReact, color: "#61DAFB" },
    "Next.js": { icon: SiNextdotjs, color: "#000000" },
    "TailwindCSS": { icon: SiTailwindcss, color: "#06B6D4" },
    "HTML": { icon: SiHtml5, color: "#E34F26" },
    "CSS": { icon: SiCss3, color: "#1572B6" },
};

// Skill badge component with hover effect
const SkillBadge = ({ skill }: { skill: string }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const skillData = skillIconMap[skill];
    const Icon = skillData?.icon;
    const brandColor = skillData?.color || "#888888";

    return (
        <span
            className="inline-flex items-center gap-[1.5vw] md:gap-2 px-[3vw] py-[1.5vw] md:px-4 md:py-2 rounded-full bg-fg-primary/5 border border-fg-primary/10 text-[3vw] md:text-sm font-mono text-fg-secondary cursor-default hover:scale-105 hover:border-fg-primary/30 transition-all"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {Icon && (
                <Icon
                    className="w-[3.5vw] h-[3.5vw] md:w-4 md:h-4 transition-all duration-300"
                    style={{
                        color: isHovered ? brandColor : undefined,
                        filter: isHovered ? 'none' : 'grayscale(100%)',
                        opacity: isHovered ? 1 : 0.5
                    }}
                />
            )}
            <span
                className={`transition-all duration-300 ${isHovered ? 'text-fg-primary' : 'text-fg-secondary'}`}
            >
                {skill}
            </span>
        </span>
    );
};

export const Skills = () => {
    const skillCategories = skillsData.categories;
    
    return (
        <section id="skills" className="pt-[12vw] pb-[16vw] md:pt-12 md:pb-24 relative overflow-hidden">
            <Container>
                <h2 className="font-mono text-[2.5vw] md:text-base uppercase tracking-widest text-fg-secondary mb-[12vw] md:mb-16">Technical Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6vw] md:gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.7,
                                delay: idx * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="p-[6vw] md:p-6 rounded-2xl border border-border-primary bg-bg-secondary/30 backdrop-blur-sm group hover:border-fg-primary/20 hover:-translate-y-2 hover:shadow-2xl transition-all"
                        >
                            <h3 className="font-display font-bold text-[5vw] md:text-2xl mb-[6vw] md:mb-5 text-fg-primary group-hover:text-fg-primary transition-colors">{category.title}</h3>
                            <div className="flex flex-wrap gap-[2vw] md:gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <SkillBadge key={sIdx} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

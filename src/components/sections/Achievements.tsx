import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Crown, Code, Users } from 'lucide-react';
import { Container } from '../ui/Container';
import achievementsData from '../../data/achievements.json';

// Icon mapping for the original style
const iconMap: Record<string, typeof Trophy> = {
    meta: Crown,
    trophy: Trophy,
    code: Code,
    codeforces: Trophy,
    leetcode: Medal,
    leadership: Users,
};

// Color mapping for the original style
const colorMap: Record<string, { color: string; bg: string; border: string }> = {
    'text-blue-500': { color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    'text-purple-500': { color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    'text-red-500': { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    'text-yellow-500': { color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
    'text-gray-400': { color: 'text-gray-400', bg: 'bg-gray-400/10', border: 'border-gray-400/20' },
    'text-green-500': { color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    'text-orange-500': { color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
};

export const Achievements = () => {
    const achievements = achievementsData.map(a => ({
        title: a.title,
        description: `${a.subtitle} — ${a.description}`,
        icon: iconMap[a.iconType] || Code,
        ...colorMap[a.iconColor] || colorMap['text-gray-400'],
        hasLink: a.hasLink,
        iconType: a.iconType,
    }));

    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Title Column */}
                    <div className="w-full md:w-1/3 sticky top-32">
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-display font-black text-6xl md:text-7xl mb-6 uppercase leading-[0.9]"
                        >
                            <span className="text-fg-primary block">Proven</span>
                            <span className="text-fg-secondary block">Results</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-mono text-sm md:text-base text-fg-secondary/70 uppercase tracking-widest max-w-sm"
                        >
                            Competitive Programming & Leadership
                        </motion.p>
                    </div>

                    {/* Achievements Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievements.map((item, i) => {
                            const link = item.hasLink 
                                ? (item.iconType === 'codeforces' 
                                    ? import.meta.env.VITE_CODEFORCES_URL 
                                    : import.meta.env.VITE_LEETCODE_URL)
                                : undefined;
                            
                            const CardContent = (
                                <>
                                    <div className={`w-12 h-12 rounded-xl ${item.color} bg-bg-primary/50 flex items-center justify-center mb-6`}>
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-display font-bold text-2xl mb-2 text-fg-primary">{item.title}</h3>
                                    <p className="font-mono text-sm text-fg-secondary">{item.description}</p>
                                </>
                            );

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-8 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-sm group hover:scale-[1.02] transition-transform duration-300`}
                                >
                                    {link ? (
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                                            {CardContent}
                                        </a>
                                    ) : (
                                        CardContent
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

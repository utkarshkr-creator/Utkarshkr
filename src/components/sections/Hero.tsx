import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import { Container } from '../ui/Container';
import { SocialButton } from '../ui/SocialButton';
import { ResumeButton } from '../ui/ResumeButton';

interface HeroProps {
    theme?: 'light' | 'dark';
    onResumeClick?: () => void;
}

export const Hero = ({ theme = 'dark', onResumeClick }: HeroProps) => {
    return (
        <section id="hero" className="min-h-[100dvh] lg:min-h-[90vh] relative flex flex-col pb-0 overflow-visible">
            {/* Split Background */}
            <div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
                <div className={`h-[55%] lg:h-[42%] w-full ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
                <div className="h-[35%] lg:h-[58%] w-full bg-bg-primary" />
            </div>

            <Container className="relative z-10 min-h-[100dvh] lg:h-full flex flex-col pt-4 lg:pt-8 pb-24 lg:pb-10 overflow-visible">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end lg:items-start overflow-visible"
                >
                    {/* Left Column: Text */}
                    <div className="order-2 lg:order-1 lg:row-start-1 lg:col-start-1 lg:col-span-7 relative z-30 pt-12 md:pt-24 h-full flex flex-col pointer-events-none">
                        {/* Huge Heading */}
                        <div className="-translate-y-[25%] lg:translate-y-0 -mb-24 lg:-mb-0 relative z-40">
                            <h1 className={`font-display font-black text-[13vw] md:text-[11vw] lg:text-9xl xl:text-[9rem] leading-[0.9] lg:leading-[0.95] tracking-tighter uppercase mb-4 lg:mb-6 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="block"
                                >
                                    UTKARSH
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className={`block ${theme === 'dark' ? 'text-outline text-transparent' : ''}`}
                                >
                                    KUMAR
                                </motion.span>
                            </h1>
                        </div>

                        {/* Description & Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-full mt-auto mb-2 lg:mb-28 lg:mt-16 pt-[10vh] pointer-events-auto"
                        >
                            <p className="hero-intro-text max-w-2xl text-sm md:text-xl lg:text-3xl text-fg-secondary leading-relaxed font-medium mb-4 lg:mb-10">
                                An <strong className="text-fg-primary font-bold">M.Tech Student</strong> at <span className="text-fg-primary">IIIT Allahabad</span>. 
                                Passionate about <strong className="text-fg-primary">Backend Engineering</strong> and <strong className="text-fg-primary">Distributed Systems</strong> | 
                                <strong className="text-fg-primary"> Expert @ Codeforces</strong>.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 md:gap-4 relative z-50">
                                <SocialButton href={import.meta.env.VITE_GITHUB_URL} icon={Github} label="GitHub Profile" />
                                <SocialButton href={import.meta.env.VITE_TWITTER_URL} icon={Twitter} label="Twitter Profile" />
                                <SocialButton href={import.meta.env.VITE_CODEFORCES_URL} icon={SiCodeforces} label="Codeforces Profile" />
                                <SocialButton href={import.meta.env.VITE_LEETCODE_URL} icon={SiLeetcode} label="LeetCode Profile" />
                                <ResumeButton onClick={onResumeClick} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Image - THEME-AWARE, STATIC */}
                    <div className="order-1 lg:order-2 absolute lg:relative inset-0 lg:inset-auto lg:row-start-1 lg:col-start-6 lg:col-span-12 flex justify-center lg:justify-end items-center lg:items-start z-10 pointer-events-none overflow-visible">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="w-full h-full lg:h-auto relative md:opacity-100 transition-opacity duration-1000 overflow-visible"
                        >
                            {/* Gradient overlay for better text readability */}
                            <div className={`absolute inset-x-0 bottom-0 top-[40%] lg:hidden z-20 pointer-events-none ${theme === 'dark'
                                ? 'bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent'
                                : 'bg-gradient-to-t from-white via-white/40 to-transparent'
                                }`} />

                            {/* User's Hero Image - PREMIUM REFINED AESTHETICS, ELEVATED, STATIC */}
                            <motion.img
                                src={`/Pic/${import.meta.env.VITE_HERO_IMAGE}`}
                                alt="Utkarsh Kumar - Backend Engineer"
                                loading="eager"
                                fetchPriority="high"
                                initial={false}
                                animate={{
                                    filter: theme === 'dark'
                                        ? 'grayscale(10%) contrast(125%) brightness(1.1) saturate(1.15)'
                                        : 'grayscale(15%) contrast(110%) brightness(0.95) saturate(1.1)',
                                }}
                                transition={{ duration: 0.8 }}
                                style={{
                                    willChange: 'transform, filter',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
                                    maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)'
                                }}
                                className="relative w-full h-[100%] lg:h-full object-contain object-bottom drop-shadow-2xl z-10 scale-100 md:scale-105 lg:scale-95 translate-y-[0%] md:translate-y-[5%] lg:translate-y-12"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}

            </Container>
        </section>
    );
};

import { motion } from 'framer-motion';
import { Mail, Calendar, Coffee } from 'lucide-react';
import { Container } from '../ui/Container';
import { MagneticButton } from '../ui/MagneticButton';
import { ResumeButton } from '../ui/ResumeButton';

interface FooterProps {
    theme: 'light' | 'dark';
    onResumeClick?: () => void;
}

export const Footer = ({ onResumeClick }: FooterProps) => {


    return (
        <footer id="contact" className="min-h-[50vh] flex flex-col justify-between pt-12 relative overflow-hidden">
            <Container>
                <div className="flex flex-col gap-12 text-center items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display font-black text-[15vw] md:text-[10rem] leading-[0.85] tracking-tighter uppercase"
                    >
                        Let's<br />Talk.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        {[
                            { href: `mailto:${import.meta.env.VITE_EMAIL || "2022krutkarsh@gmail.com"}`, icon: <Mail className="w-5 h-5" />, label: import.meta.env.VITE_EMAIL || "2022krutkarsh@gmail.com", className: "bg-fg-primary text-bg-primary hover:scale-105" },
                            { href: import.meta.env.VITE_TWITTER_URL || "https://x.com/utkarsh_kumar", icon: <Coffee className="w-5 h-5" />, label: "Twitter", className: "border border-border-primary hover:bg-bg-secondary" },
                            { href: import.meta.env.VITE_CODEFORCES_URL || "https://codeforces.com/profile/utkarsh_09", icon: <Calendar className="w-5 h-5" />, label: "Codeforces", className: "bg-[#FFDD00] text-black hover:scale-105" }
                        ].map((btn, i) => (
                            <MagneticButton key={i}>
                                <a
                                    href={btn.href}
                                    target={btn.href.startsWith('http') ? "_blank" : undefined}
                                    className={`px-8 py-4 rounded-full font-bold font-mono text-base uppercase transition-all flex items-center gap-3 ${btn.className}`}
                                >
                                    {btn.icon} {btn.label}
                                </a>
                            </MagneticButton>
                        ))}
                        <ResumeButton
                            className="font-bold border border-border-primary hover:bg-bg-secondary"
                            onClick={onResumeClick}
                        />
                    </motion.div>
                </div>
            </Container>

            <Container className="flex justify-between items-end text-sm py-8 font-mono uppercase text-fg-secondary mt-12">
                <span>© 2025 Utkarsh Kumar</span>
                <div className="flex gap-[6vw] md:gap-4">
                    <a href="https://github.com/utkarshkr-creator" target="_blank" rel="noopener noreferrer" className="hover:text-fg-primary transition-colors">GitHub</a>
                    <a href="https://twitter.com/utkarsh_kumar" target="_blank" rel="noopener noreferrer" className="hover:text-fg-primary transition-colors">Twitter</a>
                    <a href="https://codeforces.com/profile/utkarshkr" target="_blank" rel="noopener noreferrer" className="hover:text-fg-primary transition-colors">Codeforces</a>
                </div>
            </Container>

            {/* Bottom Watermark - Separate & Faded - keeping vw for decorative scaling */}
            <div className="w-full flex justify-center items-end mt-[12vw] md:mt-4 overflow-hidden pointer-events-none select-none">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 0.3, y: 16 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="font-display font-black text-[24vw] md:text-[20.5vw] leading-[0.7] bg-gradient-to-b from-fg-primary to-transparent bg-clip-text text-transparent tracking-tighter uppercase whitespace-nowrap transform"
                >
                    UTKARSH
                </motion.h1>
            </div>
        </footer>
    );
};

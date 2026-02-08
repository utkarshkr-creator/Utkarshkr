
export interface Project {
    title: string;
    category: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    repoUrl: string;
    techStack: string[];
}

const githubUrl = import.meta.env.VITE_GITHUB_URL;

export const projects: Project[] = [
    {
        title: "Real-Time Trading Engine",
        category: "High-Frequency Trading / Distributed Systems",
        description: "A high-throughput trading engine capable of processing 5000+ orders/sec with sub-millisecond latency. Features event-driven microservices architecture using Kafka for reliable order matching and trade execution.",
        videoUrl: "",
        thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop",
        repoUrl: `${githubUrl}/REAL-TIME-TRADING-ENGINE`,
        techStack: [
            "Next.js",
            "Node.js",
            "Express",
            "WebSockets",
            "Redis",
            "PostgreSQL",
            "Docker"
        ]
    },
    {
        title: "Job Watcher",
        category: "Automation / AI",
        description: "Automated job monitoring system that scrapes company career pages, scores jobs using Gemini AI to match with resume, and sends Telegram notifications with deduplication.",
        videoUrl: "",
        thumbnailUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop",
        repoUrl: `${githubUrl}/job-watcher`,
        techStack: [
            "Golang",
            "Ollama",
            "Gemini API",
            "Telegram Bot"
        ]
    },
    {
        title: "FinPay Wallet",
        category: "Digital Payment / Fintech",
        description: "Comprehensive digital wallet with P2P payments and bank transfers using secure webhook handlers. Architected a scalable monorepo system reducing build times by 30%.",
        videoUrl: "",
        thumbnailUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
        repoUrl: `${githubUrl}/FinPay-Wallet`,
        techStack: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "Express.js",
            "PostgreSQL",
            "Turbo Monorepo"
        ]
    },
    {
        title: "PeerStream",
        category: "P2P / WebRTC",
        description: "Real-time video streaming application enabling direct peer-to-peer communication. Implemented signaling server using Socket.IO for seamless connection establishment.",
        videoUrl: "",
        thumbnailUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=630&fit=crop",
        repoUrl: `${githubUrl}/PeerStream`,
        techStack: [
            "WebRTC",
            "Socket.io",
            "Node.js",
            "React",
            "Tailwind CSS",
            "TypeScript"
        ]
    },
    {
        title: "Airline Management System",
        category: "Microservices / Backend",
        description: "Comprehensive microservices ecosystem for airline operations management with RESTful APIs for flight search, booking management, and seat reservation.",
        videoUrl: "",
        thumbnailUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=630&fit=crop",
        repoUrl: `${githubUrl}/Airline-Service`,
        techStack: [
            "JavaScript",
            "Node.js",
            "Express.js",
            "MySQL",
            "Microservices",
            "sequelize"
        ]
    }
];

export default projects;

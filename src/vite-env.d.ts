/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HERO_IMAGE: string
    readonly VITE_RESUME_URL: string
    readonly VITE_GITHUB_URL: string
    readonly VITE_TWITTER_URL: string
    readonly VITE_CODEFORCES_URL: string
    readonly VITE_LEETCODE_URL: string
    readonly VITE_LINKEDIN_URL: string
    readonly VITE_EMAIL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

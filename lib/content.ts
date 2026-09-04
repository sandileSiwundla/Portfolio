export type Title = {
  id: string
  title: string
  description: string
  image: string
  /** Optional ambient screencast; falls back to `image` when absent. */
  video?: string
  link: string
  tags: string[]
  badge?: string
  meta?: string
  kind: "project" | "article"
}

export const profile = {
  name: "Sandile Siwundla",
  role: "Software Developer & Cloud Technologist",
  location: "Johannesburg, South Africa",
  portrait: "/sandile.jpeg",
  tagline: "Full-stack engineer building for Africa's tech ecosystem.",
  bio: "WeThinkCode_ graduate working across full-stack development, AWS cloud, and blockchain research. I build things that ship — six live products, ten published research pieces — and I care most about work that moves Africa's tech ecosystem forward. Currently a technical researcher at the Africa Blockchain Club.",
  links: {
    github: "https://github.com/sandileSiwundla",
    linkedin: "https://www.linkedin.com/in/sandile-siwundla-51b0b5307/",
    twitter: "https://x.com/San_Olivegarden",
    email: "mailto:sandilemsiwundla@gmail.com",
  },
}

/**
 * Optional pull-quote. Set `text` to render the block; leave it null to hide
 * the whole thing — nothing here is invented on your behalf.
 */
export const quote: { text: string; attribution?: string } | null = null

export type Role = {
  title: string
  org: string
  period: string
  kind: "work" | "education"
  points: string[]
}

export const experience: Role[] = [
  {
    title: "Technical Researcher",
    org: "Africa Blockchain Club",
    period: "2024 — Present",
    kind: "work",
    points: [
      "Researches blockchain ecosystems, DeFi protocols, and Web3 adoption across Africa.",
      "Produces technical reports representing the Johannesburg blockchain community.",
    ],
  },
  {
    title: "Bootcamp Assistant",
    org: "WeThinkCode_",
    period: "2024 — 2025",
    kind: "work",
    points: [
      "Selected post-graduation to mentor the following cohort.",
      "Facilitated peer learning, code review, and workshop delivery alongside instructors.",
    ],
  },
  {
    title: "National Certificate: IT (Systems Development)",
    org: "WeThinkCode_ · NQF Level 5",
    period: "2023 — 2024",
    kind: "education",
    points: [
      "16-month full-time, project-based programme in software engineering and algorithms.",
    ],
  },
]

export type Achievement = { placement: string; event: string; year?: string; top?: boolean }

export const achievements: Achievement[] = [
  { placement: "1st Place", event: "AWS DeepRacer — WeThinkCode_ Hackathon", year: "2024", top: true },
  { placement: "Runner-up", event: "AWS Summit DeepRacer Hackathon", year: "2024" },
  { placement: "Runner-up", event: "WeThinkCode_ Koedr Open Day Hackathon" },
  { placement: "Honorary Placement", event: "Celo Hackathon", year: "2024" },
]

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "Solidity", "HTML", "CSS"] },
  { label: "Frameworks", items: ["Next.js", "React", "Tailwind CSS", "SCSS"] },
  { label: "Cloud & DevOps", items: ["AWS EC2", "S3", "RDS", "Lambda", "Networking", "Databases"] },
  { label: "AI & ML", items: ["ML Foundations", "Generative AI", "Amazon Q Developer"] },
  { label: "Blockchain", items: ["Solidity contracts", "Web3 research", "DeFi"] },
  { label: "Version Control", items: ["Git / GitHub"] },
]

export const certifications: { issuer: string; items: string[] }[] = [
  {
    issuer: "AWS Educate",
    items: [
      "Cloud 101",
      "AWS Management Console",
      "Networking",
      "Databases",
      "Storage",
      "Explore Cloud Computing",
      "Machine Learning Foundations",
    ],
  },
  {
    issuer: "Amazon Development Centre SA",
    items: [
      "Introduction to Generative AI",
      "Amazon Q Developer",
      "Cloud Support Associate",
      "Working with User Data",
    ],
  },
  { issuer: "Microsoft AI", items: ["AI Fluency", "Explore Responsible AI"] },
]

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Zulu", level: "Fluent" },
  { name: "Xhosa", level: "Proficient" },
]

export const projects: Title[] = [
  {
    id: "crypto-aggregator",
    kind: "project",
    title: "AssetView",
    description:
      "A cryptocurrency research platform with real-time market data, advanced analytics, and side-by-side token comparison tools.",
    image: "/crypto.png",
    link: "https://crypto-aggregator-virid.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    badge: "Live",
    meta: "Research Platform",
  },
  {
    id: "abc-hub",
    kind: "project",
    title: "Africa's Blockchain Club Hub",
    description:
      "The official platform for Africa's leading blockchain community, featuring research publications, events, and member engagement.",
    image: "/ABC.png",
    video: "/ABC.webm",
    link: "https://africasblockchainclub.com/",
    tags: ["React", "Next.js", "Tailwind", "REST API"],
    badge: "Live",
    meta: "Community Platform",
  },
  {
    id: "companions-fintech",
    kind: "project",
    title: "CompanionsFintech",
    description:
      "A fintech platform unlocking liquidity for grassroots SMEs through alternative credit profiling, invoice funding, and fractional investing.",
    image: "/companions.png",
    link: "https://www.companionsfintech.com/",
    tags: ["Vite", "TypeScript", "Vercel", "Railway"],
    badge: "Live",
    meta: "Fintech",
  },
  {
    id: "gatsheni-puissance",
    kind: "project",
    title: "Gatsheni Puissance",
    description:
      "A luxury e-commerce platform with a dual interface: a seamless storefront for customers, and an admin console that lets the owner edit products, inventory, and site content in real time without touching code.",
    image: "/gatsheni.png",
    link: "https://gatsheni-puissance.vercel.app/",
    tags: ["Next.js", "TypeScript", "Stripe"],
    badge: "Live",
    meta: "E-commerce",
  },
  {
    id: "biohealthchain",
    kind: "project",
    title: "BioHealthChain",
    description:
      "A privacy-first healthcare platform using blockchain and zero-knowledge proofs to secure medical records as patient-owned, tamper-proof data.",
    image: "/Biohealth.png",
    link: "https://bio-health-chain-4.vercel.app",
    tags: ["Next.js", "TypeScript", "Ethereum", "ZK-Proofs"],
    badge: "Beta",
    meta: "Healthcare",
  },
  {
    id: "charity-nft",
    kind: "project",
    title: "Charity NFT",
    description:
      "A Web3 platform enabling gasless NFT minting with social logins. Every purchase automatically donates to verified charities via smart contracts.",
    image: "/Charity.png",
    link: "https://nft-app-dun-six.vercel.app",
    tags: ["Next.js", "ZeroDev AA", "Scroll", "ERC-721"],
    badge: "Live",
    meta: "Web3",
  },
]

export const articles: Title[] = [
  {
    id: "x402",
    kind: "article",
    title: "x402: The Payment Protocol for AI Agents",
    description:
      "x402 lets AI agents and humans make fast, automated, per-request payments online — replacing subscriptions and API keys by embedding stablecoin payments into web requests.",
    image: "/x402.webp",
    link: "https://medium.com/@africablockchainclub/x402-the-payment-protocol-for-ai-agents-6caf81f22e8c",
    tags: ["AI", "Payments", "DeFi"],
    badge: "Pinned",
    meta: "12 min read",
  },
  {
    id: "kelp",
    kind: "article",
    title: "The Drift and Kelp DAO Hacks: What Went Wrong?",
    description:
      "Within roughly three weeks, two major protocols — Drift and Kelp DAO — were hit by large-scale exploits, with combined losses approaching half a billion dollars.",
    image: "/kelp.webp",
    link: "https://medium.com/@africablockchainclub/the-breach-that-rocked-the-crypto-world-bybits-1-5-billion-heist-9a1b0d50ebd3",
    tags: ["Security", "Hack", "Exploit"],
    badge: "Pinned",
    meta: "6 min read",
  },
  {
    id: "ai-evolution",
    kind: "article",
    title: "The Evolution of AI: From Prediction to Execution",
    description:
      "Tracing AI's journey from simple prediction to autonomous action — from pattern-matching models to agents with memory, planning, and goal-driven workflows.",
    image: "/ai.webp",
    link: "https://medium.com/@africablockchainclub/the-evolution-of-ai-from-prediction-to-execution-f37c9ec866c6",
    tags: ["AI", "Agents"],
    badge: "Pinned",
    meta: "18 min read",
  },
  {
    id: "aster",
    kind: "article",
    title: "Aster: The Hyperliquid Killer?",
    description:
      "A comparison of Hyperliquid and Aster, two leading perp DEXs with contrasting approaches to speed, multi-chain liquidity, and the future of DeFi.",
    image: "/aster.webp",
    link: "https://medium.com/@africablockchainclub/aster-the-hyperliquid-killer-4904c3b832c3",
    tags: ["DeFi", "DEX"],
    meta: "16 min read",
  },
  {
    id: "flying-tulip",
    kind: "article",
    title: "Flying Tulip: A Unified DeFi System",
    description:
      "Exploring a unified DeFi architecture where lending, trading, and derivatives operate within a single system, improving capital efficiency through composability.",
    image: "/ft.webp",
    link: "https://medium.com/@africablockchainclub/flying-tulip-a-unified-defi-system-5003840c1bab",
    tags: ["DeFi"],
    meta: "14 min read",
  },
  {
    id: "pendle",
    kind: "article",
    title: "Pendle Finance: Redefining Yield in DeFi",
    description:
      "How Pendle transforms yield-bearing assets by splitting them into Principal Tokens and Yield Tokens, letting users trade and hedge yield independently.",
    image: "/pendle.webp",
    link: "https://medium.com/@africablockchainclub/pendle-finance-redefining-yield-in-defi-d02f9ea0492d",
    tags: ["DeFi", "Yield"],
    meta: "11 min read",
  },
  {
    id: "web3-gaming",
    kind: "article",
    title: "Unlocking Value in Web3 Gaming",
    description:
      "How Web3 gaming and GameFi give players true ownership of digital items through play-to-earn models and community-led decision-making.",
    image: "/gamify.webp",
    link: "https://medium.com/@africablockchainclub/unlocking-value-in-web3-gaming-e92401d553ff",
    tags: ["Web3", "Gaming"],
    meta: "9 min read",
  },
  {
    id: "kaito",
    kind: "article",
    title: "Kaito AI: Turning Crypto Knowledge into Earnings",
    description:
      "A Web3 intelligence platform combining AI-driven search, real-time analytics, and tokenized incentives into a single ecosystem built on Base.",
    image: "/kaito.webp",
    link: "https://medium.com/@africablockchainclub/kaito-ai-turning-crypto-knowledge-into-earnings-493dc8cd1ba0",
    tags: ["AI", "Crypto"],
    meta: "9 min read",
  },
  {
    id: "cex-dex",
    kind: "article",
    title: "CEX or DEX? The FTX Collapse Disruption",
    description:
      "The downfall of FTX exposed the vulnerabilities of centralized exchanges and highlighted the transparency and accountability of decentralized ones.",
    image: "/Dex.webp",
    link: "https://medium.com/@africablockchainclub/cex-or-dex-the-ftx-collapse-disruption-f20a863f416a",
    tags: ["DeFi", "Security"],
    meta: "8 min read",
  },
  {
    id: "bybit",
    kind: "article",
    title: "The Breach That Rocked the Crypto World",
    description:
      "In February 2025 Bybit fell victim to a sophisticated attack resulting in the theft of over 400,000 ETH — nearly $1.5 billion — raising critical security questions.",
    image: "/bybit.webp",
    link: "https://medium.com/@africablockchainclub/the-breach-that-rocked-the-crypto-world-bybits-1-5-billion-heist-9a1b0d50ebd3",
    tags: ["Security", "Hack"],
    meta: "6 min read",
  },
]

export const catalog: Title[] = [...projects, ...articles]

/** Derived, so the numbers cannot drift from the content that backs them. */
export const stats = [
  { value: String(projects.length), label: "Live products" },
  { value: String(articles.length), label: "Published articles" },
  { value: String(achievements.length), label: "Hackathon placements" },
  {
    value: String(certifications.reduce((n, c) => n + c.items.length, 0)),
    label: "Certifications",
  },
]

const byId = (id: string) => {
  const found = catalog.find((item) => item.id === id)
  if (!found) throw new Error(`Unknown catalog id: ${id}`)
  return found
}

/** Billboard rotation — the work that should be seen first. */
export const featuredItems: Title[] = [
  "crypto-aggregator",
  "abc-hub",
  "companions-fintech",
  "gatsheni-puissance",
  "biohealthchain",
  "charity-nft",
].map(byId)

export type Row = { id: string; title: string; items: Title[] }

export const rows: Row[] = [
  { id: "projects", title: "Websites & Products", items: projects },
  { id: "articles", title: "Research & Writing", items: articles },
  {
    id: "trending",
    title: "Trending This Month",
    items: ["x402", "kelp", "ai-evolution", "crypto-aggregator", "abc-hub"].map(byId),
  },
  {
    id: "deep-dives",
    title: "Security & DeFi Deep Dives",
    items: articles.filter((a) => a.tags.some((t) => ["Security", "DeFi"].includes(t))),
  },
]

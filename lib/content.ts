export type Title = {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  badge?: string
  meta?: string
}

export const profile = {
  name: "Sandile Siwundla",
  role: "Software Developer & Blockchain Researcher",
  bio: "Full-stack developer and WeThinkCode_ graduate building impactful solutions for Africa's tech ecosystem. Researcher at the Africa Blockchain Club, AWS cloud technologist, and multiple hackathon winner.",
  links: {
    github: "https://github.com/sandileSiwundla",
    linkedin: "https://www.linkedin.com/in/sandile-siwundla-51b0b5307/",
    twitter: "https://x.com/San_Olivegarden",
    email: "mailto:sandilemsiwundla@gmail.com",
  },
}

export const featuredItems = [
  {
    id: "abc-hub",
    title: "Africa's Blockchain Club Hub",
    description:
      "The official platform for Africa's leading blockchain community — featuring research, events, and member engagement. Showcasing African blockchain innovation through educational content and interactive experiences.",
    image: "/ABC.png",
    link: "https://africasblockchainclub.com/",
    tags: ["React", "Next.js", "Tailwind", "RestAPI", "Typescript"],
    badge: "Live",
    meta: "Community Platform",
  },
  {
    id: "project-2",
    title: "CompanionsFintech",
    description:
      "A fintech platform unlocking liquidity for grassroots SMEs through alternative credit profiling, invoice funding, and fractional investing — enabling anyone to invest in real businesses with transparent opportunities.",
    image: "/companions.png",
    link: "https://www.companionsfintech.com/",
    tags: ["React", "Next.js", "Tailwind", "RestAPI", "Typescript"],
    badge: "Live",
    meta: "Conference",
  },
  {
    id: "project-3",
    title: "BioHealthChain (Beta)",
    description:
      "A privacy-first healthcare platform using blockchain and zero-knowledge proofs to secure medical records. Enables patient-owned data with verifiable and tamper-proof access for providers.",
    image: "/Biohealth.png",
    link: "https://bio-health-chain-4.vercel.app",
    tags: ["Next.js", "TypeScript", "Ethereum", "IPFS", "ZK-Proofs"],
    badge: "Active",
    meta: "Learning",
  },
  {
    id: "project-4",
    title: "Charity NFT",
    description:
      "A Web3 platform enabling gasless NFT minting with social logins. Each purchase automatically donates to verified charities, combining digital ownership with real-world impact through smart contracts.",
    image: "/Charity.png",
    link: "https://nft-app-dun-six.vercel.app",
    tags: ["Next.js", "TypeScript", "ZeroDev AA", "Scroll", "ERC-721", "EIP-4337"],
    badge: "Active",
    meta: "Learning",
  },
    {
    id: "project-5",
    title: "CompanionsFintech MVP (Beta)",
    description:
      "An early-stage implementation showcasing SME funding flows, investor onboarding, and listing mechanics — validating a hybrid on-chain/off-chain model for transparent SME financing.",
    image: "/companions.png",
    link: "https://bio-health-chain-4.vercel.app",
    tags: ["Next.js", "TypeScript", "ZeroDev AA", "Scroll", "ERC-721", "EIP-4337"],
    badge: "Beta",
    meta: "Learning",
  },
]
export const projects: Title[] = [
  {
    id: "abc-hub",
    title: "Africa's Blockchain Club Hub",
    description:
      "The official platform for Africa's leading blockchain community, featuring research, events, and member engagement.",
    image: "/ABC.png",
    link: "https://africasblockchainclub.com/",
    tags: ["React", "Next.js", "Tailwind CSS", "IPFS"],
    badge: "Live",
    meta: "Web Platform",
  },
  {
    id: "companions-fintech",
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
    id: "biohealthchain",
    title: "BioHealthChain",
    description:
      "A privacy-first healthcare platform using blockchain and zero-knowledge proofs to secure medical records with patient-owned, tamper-proof data.",
    image: "/Biohealth.png",
    link: "https://bio-health-chain-4.vercel.app",
    tags: ["Next.js", "TypeScript", "Ethereum", "ZK-Proofs"],
    badge: "Beta",
    meta: "Blockchain",
  },
  {
    id: "charity-nft",
    title: "Charity NFT",
    description:
      "A Web3 platform enabling gasless NFT minting with social logins. Each purchase automatically donates to verified charities via smart contracts.",
    image: "/Charity.png",
    link: "https://nft-app-dun-six.vercel.app",
    tags: ["Next.js", "ZeroDev AA", "Scroll", "ERC-721"],
    badge: "Live",
    meta: "Blockchain",
  },
  {
    id: "companions-mvp",
    title: "CompanionsFintech MVP",
    description:
      "An early-stage implementation showcasing SME funding flows, investor onboarding, and listing mechanics — validating a hybrid on-chain/off-chain model.",
    image: "/companions.png",
    link: "https://bio-health-chain-4.vercel.app",
    tags: ["Next.js", "Smart Contracts", "IPFS"],
    badge: "Beta",
    meta: "Fintech",
  },
]

export const articles: Title[] = [
  {
    id: "x402",
    title: "x402: The Payment Protocol for AI Agents",
    description:
      "x402 lets AI agents and humans make fast, automated, per-request payments online — replacing subscriptions and API keys by embedding stablecoin payments into web requests.",
    image: "/thumbnails/ai.png",
    link: "https://medium.com/@africablockchainclub/x402-the-payment-protocol-for-ai-agents-6caf81f22e8c",
    tags: ["AI", "Payments", "DeFi"],
    badge: "Pinned",
    meta: "12 min read",
  },
  {
    id: "aster",
    title: "Aster: The Hyperliquid Killer?",
    description:
      "A comparison of Hyperliquid and Aster, two leading perp DEXs with contrasting approaches to speed, multi-chain liquidity, and the future of DeFi.",
    image: "/thumbnails/defi.png",
    link: "https://medium.com/@africablockchainclub/aster-the-hyperliquid-killer-4904c3b832c3",
    tags: ["DeFi", "DEX"],
    badge: "Pinned",
    meta: "16 min read",
  },
  {
    id: "ai-evolution",
    title: "The Evolution of AI: From Prediction to Execution",
    description:
      "Tracing AI's journey from simple prediction to autonomous action — from pattern-matching models to agents with memory, planning, and goal-driven workflows.",
    image: "/thumbnails/ai.png",
    link: "https://medium.com/@africablockchainclub/the-evolution-of-ai-from-prediction-to-execution-f37c9ec866c6",
    tags: ["AI", "Agents"],
    badge: "Pinned",
    meta: "18 min read",
  },
  {
    id: "flying-tulip",
    title: "Flying Tulip: A Unified DeFi System",
    description:
      "Exploring a unified DeFi architecture where lending, trading, and derivatives operate within a single system, improving capital efficiency through composability.",
    image: "/thumbnails/defi.png",
    link: "https://medium.com/@africablockchainclub/flying-tulip-a-unified-defi-system-5003840c1bab",
    tags: ["DeFi"],
    meta: "14 min read",
  },
  {
    id: "pendle",
    title: "Pendle Finance: Redefining Yield in DeFi",
    description:
      "How Pendle transforms yield-bearing assets by splitting them into Principal Tokens and Yield Tokens, enabling users to trade and hedge yield independently.",
    image: "/thumbnails/defi.png",
    link: "https://medium.com/@africablockchainclub/pendle-finance-redefining-yield-in-defi-d02f9ea0492d",
    tags: ["DeFi", "Yield"],
    meta: "11 min read",
  },
  {
    id: "web3-gaming",
    title: "Unlocking Value in Web3 Gaming",
    description:
      "How Web3 gaming and GameFi give players true ownership of digital items through play-to-earn models and community-led decision-making.",
    image: "/thumbnails/gaming.png",
    link: "https://medium.com/@africablockchainclub/unlocking-value-in-web3-gaming-e92401d553ff",
    tags: ["Web3", "Gaming"],
    meta: "9 min read",
  },
  {
    id: "kaito",
    title: "Kaito AI: Turning Crypto Knowledge into Earnings",
    description:
      "A Web3 intelligence platform combining AI-driven search, real-time analytics, and tokenized incentives into a single seamless ecosystem built on Base.",
    image: "/thumbnails/ai.png",
    link: "https://medium.com/@africablockchainclub/kaito-ai-turning-crypto-knowledge-into-earnings-493dc8cd1ba0",
    tags: ["AI", "Crypto"],
    meta: "9 min read",
  },
  {
    id: "cex-dex",
    title: "CEX or DEX? The FTX Collapse Disruption",
    description:
      "The downfall of FTX exposed the vulnerabilities of centralized exchanges and highlighted the transparency and accountability of decentralized exchanges.",
    image: "/thumbnails/security.png",
    link: "https://medium.com/@africablockchainclub/cex-or-dex-the-ftx-collapse-disruption-f20a863f416a",
    tags: ["DeFi", "Security"],
    meta: "8 min read",
  },
  {
    id: "bybit",
    title: "The Breach That Rocked the Crypto World",
    description:
      "On February 21st 2025, Bybit fell victim to a sophisticated cyberattack resulting in the theft of over 400,000 ETH — nearly $1.5 billion — raising critical security questions.",
    image: "/thumbnails/security.png",
    link: "https://medium.com/@africablockchainclub/the-breach-that-rocked-the-crypto-world-bybits-1-5-billion-heist-9a1b0d50ebd3",
    tags: ["Security", "Hack"],
    meta: "6 min read",
  },
]

export const rows = [
  { title: "My Websites & Projects", items: projects },
  { title: "Research & Articles", items: articles },
  {
    title: "Trending Now",
    items: [articles[0], articles[1], articles[2], projects[0], projects[1]],
  },
  {
    title: "Security & DeFi Deep Dives",
    items: articles.filter((a) => a.tags.some((t) => ["Security", "DeFi"].includes(t))),
  },
]

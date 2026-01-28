module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/Projects/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ProjectsPage() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const projects = [
        {
            title: "Africa's Blockchain Club Hub",
            description: "The official platform for Africa's leading blockchain community, featuring research papers, event coordination, and member networking. Showcasing African blockchain innovation through interactive content and educational resources for enthusiasts of all levels.",
            technologies: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "IPFS integration",
                "Community Platform"
            ],
            status: "Live",
            link: "https://africasblockchainclub.com/",
            category: "web"
        },
        {
            title: "Charity NFT",
            description: "A Web3 platform leveraging account abstraction for gasless transactions and social logins. Each NFT purchase automatically donates to verified charities, combining digital art collection with real-world impact through smart contract automation.",
            technologies: [
                "Next.js",
                "TypeScript",
                "ZeroDev AA",
                "Scroll Blockchain",
                "ERC-721",
                "Social Logins",
                "Paymaster"
            ],
            status: "Live",
            link: "https://nft-app-dun-six.vercel.app",
            category: "blockchain"
        },
        {
            title: "BioHealthChain (Beta)",
            description: "A privacy-first healthcare data platform leveraging blockchain for secure, transparent medical records management. Enables patients to own their health data while providing healthcare providers with verifiable, tamper-proof medical histories through zero-knowledge proof technology.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Ethereum",
                "IPFS",
                "ZK-Proofs"
            ],
            status: "Beta",
            link: "https://bio-health-chain-4.vercel.app",
            category: "blockchain"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || !savedTheme && systemPrefersDark) {
            setIsDarkMode(true);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)';
            localStorage.setItem('theme', 'light');
        }
    }, [
        isDarkMode,
        mounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        const elements = [];
        const elementCount = 8;
        for(let i = 0; i < elementCount; i++){
            elements.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 60 + 20,
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: (Math.random() - 0.5) * 0.4,
                opacity: Math.random() * 0.1 + 0.05
            });
        }
        elementsRef.current = elements;
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const gradient = isDarkMode ? ctx.createLinearGradient(0, 0, canvas.width, canvas.height) : ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            if (isDarkMode) {
                gradient.addColorStop(0, 'rgba(102, 126, 234, 0.03)');
                gradient.addColorStop(1, 'rgba(159, 122, 234, 0.02)');
            } else {
                gradient.addColorStop(0, 'rgba(79, 70, 229, 0.02)');
                gradient.addColorStop(1, 'rgba(99, 102, 241, 0.01)');
            }
            elementsRef.current.forEach((element)=>{
                element.x += element.speedX;
                element.y += element.speedY;
                if (element.x <= 0 || element.x >= canvas.width) element.speedX *= -1;
                if (element.y <= 0 || element.y >= canvas.height) element.speedY *= -1;
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(element.x, element.y, element.size, 0, 2 * Math.PI);
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [
        isDarkMode,
        mounted
    ]);
    const toggleDarkMode = ()=>{
        setIsDarkMode(!isDarkMode);
    };
    const StatusBadge = ({ status })=>{
        const statusConfig = {
            Live: {
                color: '#10B981',
                background: 'rgba(16, 185, 129, 0.1)',
                label: '🚀 Live'
            },
            Beta: {
                color: '#F59E0B',
                background: 'rgba(245, 158, 11, 0.1)',
                label: '🔬 Beta'
            },
            Development: {
                color: '#3B82F6',
                background: 'rgba(59, 130, 246, 0.1)',
                label: '⚡ Dev'
            }
        };
        const config = statusConfig[status] || statusConfig.Development;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                backgroundColor: config.background,
                color: config.color,
                border: `1px solid ${config.color}40`
            },
            children: config.label
        }, void 0, false, {
            fileName: "[project]/app/Projects/page.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this);
    };
    const CategoryBadge = ({ category })=>{
        const categoryConfig = {
            blockchain: {
                color: '#8B5CF6',
                background: 'rgba(139, 92, 246, 0.1)',
                label: '🔗 Blockchain'
            },
            web: {
                color: '#3B82F6',
                background: 'rgba(59, 130, 246, 0.1)',
                label: '🌐 Web App'
            }
        };
        const config = categoryConfig[category] || categoryConfig.web;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '500',
                backgroundColor: config.background,
                color: config.color,
                border: `1px solid ${config.color}40`,
                marginLeft: '0.5rem'
            },
            children: config.label
        }, void 0, false, {
            fileName: "[project]/app/Projects/page.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this);
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
                color: 'white'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '20px',
                            height: '20px',
                            border: '2px solid #667eea',
                            borderTop: '2px solid transparent',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/Projects/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    "Loading Projects..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Projects/page.tsx",
            lineNumber: 197,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "de9dbbe17c381215",
                [
                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                ]
            ]
        ]) + " " + `projects-page ${isDarkMode ? 'dark' : 'light'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 1,
                    opacity: 0.6
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "de9dbbe17c381215",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                        ]
                    ]
                ]) + " " + "floating-elements"
            }, void 0, false, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleDarkMode,
                "aria-label": isDarkMode ? 'Switch to light mode' : 'Switch to dark mode',
                style: {
                    position: 'fixed',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                    border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
                    borderRadius: '20px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    zIndex: 1000,
                    color: isDarkMode ? '#e2e8f0' : '#4f46e5'
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "de9dbbe17c381215",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                        ]
                    ]
                ]) + " " + "dark-mode-toggle",
                children: isDarkMode ? '☀️ Light' : '🌙 Dark'
            }, void 0, false, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    padding: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 10
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "de9dbbe17c381215",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        color: isDarkMode ? '#667eea' : '#4f46e5',
                        textDecoration: 'none',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease',
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.05)',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)'}`
                    },
                    children: "← Back to Home"
                }, void 0, false, {
                    fileName: "[project]/app/Projects/page.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem 4rem',
                    position: 'relative',
                    zIndex: 10
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "de9dbbe17c381215",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '3rem'
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "de9dbbe17c381215",
                                [
                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '3rem',
                                    fontWeight: '700',
                                    background: isDarkMode ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '1rem',
                                    margin: '0'
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "de9dbbe17c381215",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                        ]
                                    ]
                                ]),
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/app/Projects/page.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '1.2rem',
                                    color: isDarkMode ? '#cbd5e1' : '#4a5568',
                                    maxWidth: '600px',
                                    margin: '0 auto',
                                    lineHeight: '1.6'
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "de9dbbe17c381215",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                        ]
                                    ]
                                ]),
                                children: "Building the future of Web3, blockchain, and digital experiences through cutting-edge technology"
                            }, void 0, false, {
                                fileName: "[project]/app/Projects/page.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Projects/page.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            gap: '2rem',
                            marginBottom: '3rem'
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "de9dbbe17c381215",
                                [
                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                ]
                            ]
                        ]),
                        children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'white',
                                    borderRadius: '16px',
                                    padding: '2.5rem',
                                    boxShadow: isDarkMode ? '0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
                                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '430px',
                                    minHeight: '430px'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = isDarkMode ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(102, 126, 234, 0.3)' : '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(102, 126, 234, 0.2)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = isDarkMode ? '0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)';
                                },
                                onClick: ()=>window.open(project.link, '_blank'),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "de9dbbe17c381215",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: '1rem',
                                            flexShrink: 0
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "de9dbbe17c381215",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.5rem',
                                                    fontWeight: '700',
                                                    color: isDarkMode ? '#f1f5f9' : '#2d3748',
                                                    margin: '0',
                                                    flex: '1',
                                                    marginRight: '1rem',
                                                    lineHeight: '1.3'
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "de9dbbe17c381215",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                        ]
                                                    ]
                                                ]),
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/Projects/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    flexShrink: 0
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "de9dbbe17c381215",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                        status: project.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Projects/page.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryBadge, {
                                                        category: project.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Projects/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Projects/page.tsx",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Projects/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: '1',
                                            marginBottom: '1.5rem',
                                            overflow: 'hidden'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "de9dbbe17c381215",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                ]
                                            ]
                                        ]),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: isDarkMode ? '#cbd5e1' : '#4a5568',
                                                lineHeight: '1.6',
                                                fontSize: '0.95rem',
                                                margin: 0,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 4,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "de9dbbe17c381215",
                                                    [
                                                        isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                    ]
                                                ]
                                            ]),
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/Projects/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Projects/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '2rem',
                                            flexShrink: 0
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "de9dbbe17c381215",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                ]
                                            ]
                                        ]),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '0.5rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "de9dbbe17c381215",
                                                    [
                                                        isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                    ]
                                                ]
                                            ]),
                                            children: project.technologies.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
                                                        color: '#667eea',
                                                        padding: '0.4rem 0.8rem',
                                                        borderRadius: '12px',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'}`,
                                                        backdropFilter: 'blur(10px)'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "de9dbbe17c381215",
                                                            [
                                                                isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                            ]
                                                        ]
                                                    ]),
                                                    children: tech
                                                }, i, false, {
                                                    fileName: "[project]/app/Projects/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Projects/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Projects/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 'auto',
                                            flexShrink: 0
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "de9dbbe17c381215",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                ]
                                            ]
                                        ]),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                color: '#667eea',
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem',
                                                background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
                                                padding: '0.75rem 1.5rem',
                                                borderRadius: '12px',
                                                border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)'}`,
                                                fontSize: '0.9rem',
                                                width: '100%',
                                                textAlign: 'center'
                                            },
                                            onClick: (e)=>e.stopPropagation(),
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.gap = '0.75rem';
                                                e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)';
                                                e.currentTarget.style.transform = 'translateX(4px)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.gap = '0.5rem';
                                                e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)';
                                                e.currentTarget.style.transform = 'translateX(0)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "de9dbbe17c381215",
                                                    [
                                                        isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                    ]
                                                ]
                                            ]),
                                            children: "Explore Live Demo →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Projects/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Projects/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/Projects/page.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Projects/page.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    textAlign: 'center',
                    padding: '3rem',
                    marginTop: '4rem',
                    color: isDarkMode ? '#a0aec0' : '#a0aec0',
                    borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                    position: 'relative',
                    zIndex: 10
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "de9dbbe17c381215",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: 0,
                        fontSize: '0.9rem'
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "de9dbbe17c381215",
                            [
                                isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                            ]
                        ]
                    ]),
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Sandile Siwundla. Building the future, one block at a time."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Projects/page.tsx",
                    lineNumber: 479,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "de9dbbe17c381215",
                dynamic: [
                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                ],
                children: `@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.projects-page.__jsx-style-dynamic-selector{min-height:100vh;transition:all .3s;position:relative;overflow-x:hidden}.projects-page.light.__jsx-style-dynamic-selector{color:#1e293b;background:linear-gradient(135deg,#f8fafc 0%,#f1f5f9 50%,#e2e8f0 100%)}.projects-page.dark.__jsx-style-dynamic-selector{color:#f1f5f9;background:linear-gradient(135deg,#0f0f23 0%,#1a1a2e 50%,#16213e 100%)}.dark-mode-toggle.__jsx-style-dynamic-selector:hover{background:${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'};transform:translateY(-2px)}@media (width<=768px){.projects-page.__jsx-style-dynamic-selector{padding:1rem}h1.__jsx-style-dynamic-selector{font-size:2.5rem!important}.projects-grid.__jsx-style-dynamic-selector{grid-template-columns:1fr!important;gap:1.5rem!important}.project-card.__jsx-style-dynamic-selector{height:auto!important;min-height:400px!important;padding:1.5rem!important}}@media (width<=480px){h1.__jsx-style-dynamic-selector{font-size:2rem!important}.dark-mode-toggle.__jsx-style-dynamic-selector{padding:.4rem .8rem;font-size:.8rem;top:1rem;right:1rem}.project-card.__jsx-style-dynamic-selector{min-height:380px!important;padding:1.25rem!important}}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Projects/page.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11d7b5c0._.js.map
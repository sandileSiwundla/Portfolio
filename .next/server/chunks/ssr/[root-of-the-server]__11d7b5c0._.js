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
            title: "ABC Website",
            description: "A sleek, interactive platform showcasing research papers, software prototypes, and blockchain initiatives. Built with a focus on user experience and responsive design, ABC Website allows users to explore projects seamlessly while maintaining high performance and accessibility.",
            technologies: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "IPFS integration"
            ],
            status: "Live",
            link: "https://africasblockchainclub.vercel.app",
            category: "web"
        },
        {
            title: "BioHealthChain (Beta)",
            description: "A blockchain-based healthcare data platform that allows secure, on-chain storage and management of medical information. BioHealthChain emphasizes privacy, accessibility, and data integrity, giving users and healthcare providers a transparent and reliable solution for patient data management.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Ethereum",
                "IPFS"
            ],
            status: "Beta",
            link: "https://bio-health-chain-4.vercel.app",
            category: "blockchain"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        // Check system preference or saved theme
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
    // Floating elements animation
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
        // Initialize subtle floating elements
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
                label: 'Live'
            },
            Beta: {
                color: '#F59E0B',
                background: 'rgba(245, 158, 11, 0.1)',
                label: 'Beta'
            },
            Development: {
                color: '#3B82F6',
                background: 'rgba(59, 130, 246, 0.1)',
                label: 'Dev'
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
            lineNumber: 151,
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
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/Projects/page.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "5c39c2b09513de38",
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
                        "5c39c2b09513de38",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                        ]
                    ]
                ]) + " " + "floating-elements"
            }, void 0, false, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 183,
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
                        "5c39c2b09513de38",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                        ]
                    ]
                ]) + " " + "dark-mode-toggle",
                children: isDarkMode ? '☀️ Light' : '🌙 Dark'
            }, void 0, false, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 199,
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
                        "5c39c2b09513de38",
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
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 223,
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
                        "5c39c2b09513de38",
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
                                "5c39c2b09513de38",
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
                                    background: isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '1rem',
                                    margin: '0'
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "5c39c2b09513de38",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                        ]
                                    ]
                                ]),
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/app/Projects/page.tsx",
                                lineNumber: 260,
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
                                        "5c39c2b09513de38",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                        ]
                                    ]
                                ]),
                                children: "A collection of my recent work in software development and blockchain research"
                            }, void 0, false, {
                                fileName: "[project]/app/Projects/page.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Projects/page.tsx",
                        lineNumber: 256,
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
                                "5c39c2b09513de38",
                                [
                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                ]
                            ]
                        ]),
                        children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'white',
                                    borderRadius: '12px',
                                    padding: '2rem',
                                    boxShadow: isDarkMode ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
                                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = isDarkMode ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(102, 126, 234, 0.2)' : '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(102, 126, 234, 0.1)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = isDarkMode ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)';
                                },
                                onClick: ()=>window.open(project.link, '_blank'),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "5c39c2b09513de38",
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
                                            marginBottom: '1rem'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "5c39c2b09513de38",
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
                                                    marginRight: '1rem'
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "5c39c2b09513de38",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                        ]
                                                    ]
                                                ]),
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/Projects/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                status: project.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/Projects/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Projects/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: isDarkMode ? '#cbd5e1' : '#4a5568',
                                            lineHeight: '1.6',
                                            marginBottom: '1.5rem'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "5c39c2b09513de38",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                ]
                                            ]
                                        ]),
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/Projects/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem',
                                            marginBottom: '1.5rem'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "5c39c2b09513de38",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                ]
                                            ]
                                        ]),
                                        children: project.technologies.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
                                                    color: '#667eea',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '500',
                                                    border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'}`
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "5c39c2b09513de38",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                        ]
                                                    ]
                                                ]),
                                                children: tech
                                            }, i, false, {
                                                fileName: "[project]/app/Projects/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/Projects/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "5c39c2b09513de38",
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
                                                gap: '0.5rem',
                                                background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '8px',
                                                border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)'}`
                                            },
                                            onClick: (e)=>e.stopPropagation(),
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.gap = '0.75rem';
                                                e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.gap = '0.5rem';
                                                e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "5c39c2b09513de38",
                                                    [
                                                        isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                                                    ]
                                                ]
                                            ]),
                                            children: "Visit Project →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Projects/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Projects/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/Projects/page.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Projects/page.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    textAlign: 'center',
                    padding: '2rem',
                    marginTop: '4rem',
                    color: isDarkMode ? '#a0aec0' : '#a0aec0',
                    borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                    position: 'relative',
                    zIndex: 10
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "5c39c2b09513de38",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: 0
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "5c39c2b09513de38",
                            [
                                isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                            ]
                        ]
                    ]),
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Sandile Siwundla. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Projects/page.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Projects/page.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "5c39c2b09513de38",
                dynamic: [
                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'
                ],
                children: `.projects-page.__jsx-style-dynamic-selector{min-height:100vh;transition:all .3s;position:relative;overflow-x:hidden}.projects-page.light.__jsx-style-dynamic-selector{color:#1e293b;background:linear-gradient(135deg,#f8fafc 0%,#f1f5f9 50%,#e2e8f0 100%)}.projects-page.dark.__jsx-style-dynamic-selector{color:#f1f5f9;background:linear-gradient(135deg,#0f0f23 0%,#1a1a2e 50%,#16213e 100%)}.dark-mode-toggle.__jsx-style-dynamic-selector:hover{background:${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'};transform:translateY(-1px)}@media (width<=768px){.projects-page.__jsx-style-dynamic-selector{padding:1rem}h1.__jsx-style-dynamic-selector{font-size:2.5rem!important}.projects-grid.__jsx-style-dynamic-selector{grid-template-columns:1fr!important;gap:1.5rem!important}.project-card.__jsx-style-dynamic-selector{padding:1.5rem!important}}@media (width<=480px){h1.__jsx-style-dynamic-selector{font-size:2rem!important}.dark-mode-toggle.__jsx-style-dynamic-selector{padding:.4rem .8rem;font-size:.8rem;top:1rem;right:1rem}}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Projects/page.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11d7b5c0._.js.map
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const LandingPage = ()=>{
    _s();
    const [typedText, setTypedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentWordIndex, setCurrentWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orbsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const words = [
        'Developer',
        'Researcher',
        'Innovator'
    ];
    const name = "Sandile Siwundla";
    const bio = "I create elegant solutions to complex problems through code and research. Passionate about pushing boundaries in software engineering and scientific discovery.";
    // Toggle dark mode
    const toggleDarkMode = ()=>{
        setIsDarkMode(!isDarkMode);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            // Apply dark mode class to body
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
    }["LandingPage.useEffect"], [
        isDarkMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const currentWord = words[currentWordIndex];
            if (typedText.length < currentWord.length) {
                const timer = setTimeout({
                    "LandingPage.useEffect.timer": ()=>{
                        setTypedText(currentWord.slice(0, typedText.length + 1));
                    }
                }["LandingPage.useEffect.timer"], 100);
                return ({
                    "LandingPage.useEffect": ()=>clearTimeout(timer)
                })["LandingPage.useEffect"];
            } else {
                const timer = setTimeout({
                    "LandingPage.useEffect.timer": ()=>{
                        setTypedText('');
                        setCurrentWordIndex({
                            "LandingPage.useEffect.timer": (prev)=>(prev + 1) % words.length
                        }["LandingPage.useEffect.timer"]);
                    }
                }["LandingPage.useEffect.timer"], 2000);
                return ({
                    "LandingPage.useEffect": ()=>clearTimeout(timer)
                })["LandingPage.useEffect"];
            }
        }
    }["LandingPage.useEffect"], [
        typedText,
        currentWordIndex
    ]);
    // Floating orbs animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const resizeCanvas = {
                "LandingPage.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["LandingPage.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Initialize orbs
            const orbs = [];
            const orbCount = 8;
            for(let i = 0; i < orbCount; i++){
                orbs.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 100 + 50,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.1 + 0.05,
                    color: isDarkMode ? "rgba(102, 126, 234, ".concat(Math.random() * 0.3 + 0.1, ")") : "rgba(102, 126, 234, ".concat(Math.random() * 0.2 + 0.05, ")")
                });
            }
            orbsRef.current = orbs;
            const animate = {
                "LandingPage.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    orbsRef.current.forEach({
                        "LandingPage.useEffect.animate": (orb)=>{
                            // Update position
                            orb.x += orb.speedX;
                            orb.y += orb.speedY;
                            // Bounce off edges
                            if (orb.x <= 0 || orb.x >= canvas.width) orb.speedX *= -1;
                            if (orb.y <= 0 || orb.y >= canvas.height) orb.speedY *= -1;
                            // Draw orb
                            const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size);
                            gradient.addColorStop(0, isDarkMode ? "rgba(102, 126, 234, ".concat(orb.opacity, ")") : "rgba(102, 126, 234, ".concat(orb.opacity * 0.5, ")"));
                            gradient.addColorStop(1, 'transparent');
                            ctx.fillStyle = gradient;
                            ctx.beginPath();
                            ctx.arc(orb.x, orb.y, orb.size, 0, 2 * Math.PI);
                            ctx.fill();
                        }
                    }["LandingPage.useEffect.animate"]);
                    requestAnimationFrame(animate);
                }
            }["LandingPage.useEffect.animate"];
            animate();
            return ({
                "LandingPage.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                }
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], [
        isDarkMode
    ]);
    const handleDownloadCV = ()=>{
        const link = document.createElement('a');
        link.href = '/cv/SandileSiwundlaCV.pdf';
        link.download = 'SandileSiwundlaCV.pdf';
        link.click();
    };
    const handleViewProjects = ()=>{
        router.push('/Projects');
    };
    const handleViewPapers = ()=>{
        router.push('/Papers');
    };
    const handleViewWebsite = ()=>{
        window.open('https://github.com/sandileSiwundla', '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "17064b26b46e9945",
                [
                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                    isDarkMode ? '#cbd5e1' : '#4a5568',
                    isDarkMode ? '#cbd5e1' : '#4a5568',
                    isDarkMode ? '#cbd5e1' : '#4a5568',
                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                ]
            ]
        ]) + " " + "landing-page ".concat(isDarkMode ? 'dark' : 'light'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleDarkMode,
                "aria-label": isDarkMode ? 'Switch to light mode' : 'Switch to dark mode',
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "17064b26b46e9945",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                        ]
                    ]
                ]) + " " + "dark-mode-toggle",
                children: isDarkMode ? '☀️' : '🌙'
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "17064b26b46e9945",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                        ]
                    ]
                ]) + " " + "floating-orbs"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "17064b26b46e9945",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? '#cbd5e1' : '#4a5568',
                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                        ]
                    ]
                ]) + " " + "main-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "17064b26b46e9945",
                            [
                                isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                isDarkMode ? '#cbd5e1' : '#4a5568',
                                isDarkMode ? '#cbd5e1' : '#4a5568',
                                isDarkMode ? '#cbd5e1' : '#4a5568',
                                isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                            ]
                        ]
                    ]) + " " + "content-wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "17064b26b46e9945",
                                [
                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                ]
                            ]
                        ]) + " " + "profile-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "17064b26b46e9945",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                        ]
                                    ]
                                ]) + " " + "profile-image-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/sandile.jpeg",
                                        alt: "Profile picture of ".concat(name),
                                        width: 320,
                                        height: 320,
                                        className: "profile-image",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "17064b26b46e9945",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "image-glow"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "17064b26b46e9945",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                        ]
                                    ]
                                ]) + " " + "text-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "17064b26b46e9945",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "name",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "17064b26b46e9945",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "title-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "title-prefix",
                                                children: "/ "
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "typed-title",
                                                children: typedText
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "cursor",
                                                children: "|"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "17064b26b46e9945",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "bio",
                                        children: bio
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "17064b26b46e9945",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "action-buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleDownloadCV,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "minimal-button primary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "17064b26b46e9945",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "button-icon",
                                                        children: "📄"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Download CV"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleViewProjects,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "minimal-button secondary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "17064b26b46e9945",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "button-icon",
                                                        children: "🚀"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "View Projects"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleViewPapers,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "minimal-button tertiary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "17064b26b46e9945",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "button-icon",
                                                        children: "📚"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "View Papers"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleViewWebsite,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "minimal-button quaternary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "17064b26b46e9945",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "button-icon",
                                                        children: "💻"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "GitHub"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "17064b26b46e9945",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "social-links",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.linkedin.com/in/sandile-siwundla-51b0b5307/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "17064b26b46e9945",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "social-icon",
                                                        children: "💼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "LinkedIn"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://x.com/San_Olivegarden",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "17064b26b46e9945",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "social-icon",
                                                        children: "🐦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Twitter"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:sandilemsiwundla@gmail.com",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "17064b26b46e9945",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                            isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                            isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? '#cbd5e1' : '#4a5568',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "17064b26b46e9945",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                                                                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                                                                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? '#cbd5e1' : '#4a5568',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "social-icon",
                                                        children: "✉️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Email"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "17064b26b46e9945",
                dynamic: [
                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)',
                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                    isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)',
                    isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                    isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)',
                    isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                    isDarkMode ? '#cbd5e1' : '#4a5568',
                    isDarkMode ? '#cbd5e1' : '#4a5568',
                    isDarkMode ? '#cbd5e1' : '#4a5568',
                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                ],
                children: ".landing-page.__jsx-style-dynamic-selector{min-height:100vh;transition:all .3s;position:relative}.landing-page.light.__jsx-style-dynamic-selector{color:#2d3748;background:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)}.landing-page.dark.__jsx-style-dynamic-selector{color:#f1f5f9;background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%)}.dark-mode-toggle.__jsx-style-dynamic-selector{background:".concat(isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)', ";border:1px solid ").concat(isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)', ";cursor:pointer;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:1000;border-radius:50%;width:50px;height:50px;font-size:1.2rem;transition:all .3s;position:fixed;top:2rem;right:2rem}.dark-mode-toggle.__jsx-style-dynamic-selector:hover{background:").concat(isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)', ";transform:scale(1.1)}.floating-orbs.__jsx-style-dynamic-selector{pointer-events:none;width:100%;height:100%;position:fixed;top:0;left:0}.main-content.__jsx-style-dynamic-selector{z-index:10;justify-content:center;align-items:center;min-height:100vh;padding:2rem;display:flex;position:relative}.content-wrapper.__jsx-style-dynamic-selector{width:100%;max-width:1200px}.profile-section.__jsx-style-dynamic-selector{grid-template-columns:auto 1fr;align-items:center;gap:4rem;display:grid}.profile-image-container.__jsx-style-dynamic-selector{justify-content:center;display:flex;position:relative}.profile-image.__jsx-style-dynamic-selector{object-fit:cover;border:4px solid ").concat(isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)', ";width:320px;height:320px;box-shadow:0 20px 40px ").concat(isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)', ";border-radius:20px;transition:all .3s}.profile-image.__jsx-style-dynamic-selector:hover{border-color:").concat(isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)', ";transform:scale(1.02)}.image-glow.__jsx-style-dynamic-selector{background:").concat(isDarkMode ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)', ";filter:blur(20px);z-index:-1;border-radius:25px;width:340px;height:340px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.text-content.__jsx-style-dynamic-selector{max-width:600px}.name.__jsx-style-dynamic-selector{background:").concat(isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)', ";-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;margin-bottom:.5rem;font-size:3.5rem;font-weight:700}.title-container.__jsx-style-dynamic-selector{color:").concat(isDarkMode ? '#cbd5e1' : '#4a5568', ";margin-bottom:2rem;font-size:2rem}.typed-title.__jsx-style-dynamic-selector{color:#667eea;font-weight:600}.cursor.__jsx-style-dynamic-selector{color:#667eea;animation:1s infinite blink}@keyframes blink{0%,50%{opacity:1}51%,to{opacity:0}}.bio.__jsx-style-dynamic-selector{color:").concat(isDarkMode ? '#cbd5e1' : '#4a5568', ";margin-bottom:3rem;font-size:1.2rem;line-height:1.6}.action-buttons.__jsx-style-dynamic-selector{flex-wrap:wrap;gap:1rem;margin-bottom:2rem;display:flex}.minimal-button.__jsx-style-dynamic-selector{cursor:pointer;border:2px solid;border-radius:12px;align-items:center;gap:.5rem;padding:1rem 2rem;font-size:1rem;font-weight:600;text-decoration:none;transition:all .3s;display:flex}.minimal-button.primary.__jsx-style-dynamic-selector{color:#fff;background:#667eea;border-color:#667eea}.minimal-button.primary.__jsx-style-dynamic-selector:hover{background:#5a6fd8;transform:translateY(-2px);box-shadow:0 10px 20px rgba(102,126,234,.3)}.minimal-button.secondary.__jsx-style-dynamic-selector{color:#48bb78;background:0 0;border-color:#48bb78}.minimal-button.secondary.__jsx-style-dynamic-selector:hover{color:#fff;background:#48bb78;transform:translateY(-2px);box-shadow:0 10px 20px rgba(72,187,120,.3)}.minimal-button.tertiary.__jsx-style-dynamic-selector{color:#ed8936;background:0 0;border-color:#ed8936}.minimal-button.tertiary.__jsx-style-dynamic-selector:hover{color:#fff;background:#ed8936;transform:translateY(-2px);box-shadow:0 10px 20px rgba(237,137,54,.3)}.minimal-button.quaternary.__jsx-style-dynamic-selector{color:#9f7aea;background:0 0;border-color:#9f7aea}.minimal-button.quaternary.__jsx-style-dynamic-selector:hover{color:#fff;background:#9f7aea;transform:translateY(-2px);box-shadow:0 10px 20px rgba(159,122,234,.3)}.button-icon.__jsx-style-dynamic-selector{font-size:1.2rem}.social-links.__jsx-style-dynamic-selector{flex-wrap:wrap;gap:1.5rem;display:flex}.social-links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:").concat(isDarkMode ? '#cbd5e1' : '#4a5568', ";border-radius:8px;align-items:center;gap:.5rem;padding:.5rem 1rem;text-decoration:none;transition:all .3s;display:flex}.social-links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:#667eea;background:").concat(isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)', ";transform:translateY(-1px)}.social-icon.__jsx-style-dynamic-selector{font-size:1.1rem}@media (max-width:968px){.profile-section.__jsx-style-dynamic-selector{text-align:center;grid-template-columns:1fr;gap:2rem}.profile-image.__jsx-style-dynamic-selector{width:280px;height:280px}.image-glow.__jsx-style-dynamic-selector{width:300px;height:300px}.name.__jsx-style-dynamic-selector{font-size:2.5rem}.title-container.__jsx-style-dynamic-selector{font-size:1.5rem}.action-buttons.__jsx-style-dynamic-selector,.social-links.__jsx-style-dynamic-selector{justify-content:center}}@media (max-width:640px){.main-content.__jsx-style-dynamic-selector{padding:1rem}.name.__jsx-style-dynamic-selector{font-size:2rem}.title-container.__jsx-style-dynamic-selector{font-size:1.2rem}.bio.__jsx-style-dynamic-selector{font-size:1rem}.action-buttons.__jsx-style-dynamic-selector{flex-direction:column;align-items:center}.minimal-button.__jsx-style-dynamic-selector{justify-content:center;width:100%;max-width:300px}}")
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LandingPage, "5oEPPdqD0LAY/x6Sy349ZeTvCIM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LandingPage;
const __TURBOPACK__default__export__ = LandingPage;
var _c;
__turbopack_context__.k.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_tsx_dda9881a._.js.map
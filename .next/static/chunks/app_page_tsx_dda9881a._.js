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
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const words = [
        'Developer',
        'Researcher'
    ];
    const name = "Sandile Siwundla";
    const bio = "I create elegant solutions to complex problems through code and research. Passionate about pushing boundaries in software engineering.";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            setMounted(true);
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const storedMode = localStorage.getItem('darkMode');
            setIsDarkMode(storedMode ? JSON.parse(storedMode) : prefersDark);
        }
    }["LandingPage.useEffect"], []);
    const toggleDarkMode = ()=>{
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            if (!mounted) return;
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                document.body.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
            } else {
                document.body.classList.remove('dark-mode');
                document.body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)';
            }
        }
    }["LandingPage.useEffect"], [
        isDarkMode,
        mounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const currentWord = words[currentWordIndex];
            if (typedText.length < currentWord.length) {
                const timer = setTimeout({
                    "LandingPage.useEffect.timer": ()=>{
                        setTypedText(currentWord.slice(0, typedText.length + 1));
                    }
                }["LandingPage.useEffect.timer"], 120);
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
                }["LandingPage.useEffect.timer"], 2500);
                return ({
                    "LandingPage.useEffect": ()=>clearTimeout(timer)
                })["LandingPage.useEffect"];
            }
        }
    }["LandingPage.useEffect"], [
        typedText,
        currentWordIndex
    ]);
    // Simplified floating elements animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            if (!mounted) return;
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
            const animate = {
                "LandingPage.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const gradient = isDarkMode ? ctx.createLinearGradient(0, 0, canvas.width, canvas.height) : ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                    if (isDarkMode) {
                        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.03)');
                        gradient.addColorStop(1, 'rgba(159, 122, 234, 0.02)');
                    } else {
                        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.02)');
                        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.01)');
                    }
                    elementsRef.current.forEach({
                        "LandingPage.useEffect.animate": (element)=>{
                            element.x += element.speedX;
                            element.y += element.speedY;
                            if (element.x <= 0 || element.x >= canvas.width) element.speedX *= -1;
                            if (element.y <= 0 || element.y >= canvas.height) element.speedY *= -1;
                            ctx.fillStyle = gradient;
                            ctx.beginPath();
                            ctx.arc(element.x, element.y, element.size, 0, 2 * Math.PI);
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
        isDarkMode,
        mounted
    ]);
    const handleDownloadCV = ()=>{
        const link = document.createElement('a');
        link.href = '/cv/SandileSiwundlaCV.pdf';
        link.download = 'SandileSiwundlaCV.pdf';
        link.click();
    };
    const handleViewProjects = ()=>router.push('/Projects');
    const handleViewPapers = ()=>router.push('/Papers');
    const handleViewWebsite = ()=>window.open('https://github.com/sandileSiwundla', '_blank');
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loading-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "cb4c64967a66892c",
                [
                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                    isDarkMode ? '#cbd5e1' : '#64748b',
                    isDarkMode ? '#667eea' : '#4f46e5',
                    isDarkMode ? '#667eea' : '#4f46e5',
                    isDarkMode ? '#cbd5e1' : '#64748b',
                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                    isDarkMode ? '#cbd5e1' : '#64748b',
                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                    isDarkMode ? '#667eea' : '#4f46e5',
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
                        "cb4c64967a66892c",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                        ]
                    ]
                ]) + " " + "dark-mode-toggle",
                children: isDarkMode ? '☀️ Light' : '🌙 Dark'
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "cb4c64967a66892c",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                        ]
                    ]
                ]) + " " + "floating-elements"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "cb4c64967a66892c",
                        [
                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                            isDarkMode ? '#cbd5e1' : '#64748b',
                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                            isDarkMode ? '#667eea' : '#4f46e5',
                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                        ]
                    ]
                ]) + " " + "main-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "cb4c64967a66892c",
                            [
                                isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                isDarkMode ? '#e2e8f0' : '#4f46e5',
                                isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                isDarkMode ? '#cbd5e1' : '#64748b',
                                isDarkMode ? '#667eea' : '#4f46e5',
                                isDarkMode ? '#667eea' : '#4f46e5',
                                isDarkMode ? '#cbd5e1' : '#64748b',
                                isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                isDarkMode ? '#cbd5e1' : '#64748b',
                                isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                isDarkMode ? '#667eea' : '#4f46e5',
                                isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                            ]
                        ]
                    ]) + " " + "content-wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "cb4c64967a66892c",
                                [
                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                    isDarkMode ? '#667eea' : '#4f46e5',
                                    isDarkMode ? '#667eea' : '#4f46e5',
                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                    isDarkMode ? '#667eea' : '#4f46e5',
                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                ]
                            ]
                        ]) + " " + "profile-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "cb4c64967a66892c",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                            isDarkMode ? '#667eea' : '#4f46e5',
                                            isDarkMode ? '#667eea' : '#4f46e5',
                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                            isDarkMode ? '#667eea' : '#4f46e5',
                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                        ]
                                    ]
                                ]) + " " + "profile-image-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "cb4c64967a66892c",
                                            [
                                                isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                isDarkMode ? '#cbd5e1' : '#64748b',
                                                isDarkMode ? '#667eea' : '#4f46e5',
                                                isDarkMode ? '#667eea' : '#4f46e5',
                                                isDarkMode ? '#cbd5e1' : '#64748b',
                                                isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                isDarkMode ? '#cbd5e1' : '#64748b',
                                                isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                isDarkMode ? '#667eea' : '#4f46e5',
                                                isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                            ]
                                        ]
                                    ]) + " " + "image-frame",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/sandile.jpeg",
                                        alt: "Profile picture of ".concat(name),
                                        width: 300,
                                        height: 300,
                                        className: "profile-image",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "cb4c64967a66892c",
                                        [
                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                            isDarkMode ? '#667eea' : '#4f46e5',
                                            isDarkMode ? '#667eea' : '#4f46e5',
                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                            isDarkMode ? '#667eea' : '#4f46e5',
                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                        ]
                                    ]
                                ]) + " " + "text-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "cb4c64967a66892c",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "name-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "name",
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "title-container",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "cb4c64967a66892c",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "typed-title",
                                                        children: typedText
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "cb4c64967a66892c",
                                                                [
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                                ]
                                                            ]
                                                        ]) + " " + "cursor",
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "cb4c64967a66892c",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "bio",
                                        children: bio
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "cb4c64967a66892c",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                ]
                                            ]
                                        ]) + " " + "action-buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleDownloadCV,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "btn btn-primary",
                                                children: "📄 Download CV"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleViewProjects,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "btn btn-secondary",
                                                children: "🚀 Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleViewPapers,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "btn btn-accent",
                                                children: "📚 Research"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleViewWebsite,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]) + " " + "btn btn-tertiary",
                                                children: "💻 GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "cb4c64967a66892c",
                                                [
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                    isDarkMode ? '#cbd5e1' : '#64748b',
                                                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                    isDarkMode ? '#667eea' : '#4f46e5',
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
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]),
                                                children: "💼 LinkedIn"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://x.com/San_Olivegarden",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]),
                                                children: "🐦 Twitter"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:sandilemsiwundla@gmail.com",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "cb4c64967a66892c",
                                                        [
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                                                            isDarkMode ? '#e2e8f0' : '#4f46e5',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                                                            isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                                                            isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                                                            isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                                                            isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                                                            isDarkMode ? '#cbd5e1' : '#64748b',
                                                            isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                                                            isDarkMode ? '#667eea' : '#4f46e5',
                                                            isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                                                        ]
                                                    ]
                                                ]),
                                                children: "✉️ Email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "cb4c64967a66892c",
                dynamic: [
                    isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                    isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                    isDarkMode ? '#e2e8f0' : '#4f46e5',
                    isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                    isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)',
                    isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                    isDarkMode ? '#cbd5e1' : '#64748b',
                    isDarkMode ? '#667eea' : '#4f46e5',
                    isDarkMode ? '#667eea' : '#4f46e5',
                    isDarkMode ? '#cbd5e1' : '#64748b',
                    isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)',
                    isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)',
                    isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)',
                    isDarkMode ? '#cbd5e1' : '#64748b',
                    isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                    isDarkMode ? '#667eea' : '#4f46e5',
                    isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'
                ],
                children: ".landing-page.__jsx-style-dynamic-selector{min-height:100vh;transition:all .3s;position:relative;overflow:hidden}.landing-page.light.__jsx-style-dynamic-selector{color:#1e293b;background:linear-gradient(135deg,#f8fafc 0%,#f1f5f9 50%,#e2e8f0 100%)}.landing-page.dark.__jsx-style-dynamic-selector{color:#f1f5f9;background:linear-gradient(135deg,#0f0f23 0%,#1a1a2e 50%,#16213e 100%)}.loading-container.__jsx-style-dynamic-selector{color:#fff;background:linear-gradient(135deg,#0f0f23 0%,#1a1a2e 50%,#16213e 100%);justify-content:center;align-items:center;min-height:100vh;display:flex}.dark-mode-toggle.__jsx-style-dynamic-selector{background:".concat(isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)', ";border:1px solid ").concat(isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)', ";cursor:pointer;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:1000;color:").concat(isDarkMode ? '#e2e8f0' : '#4f46e5', ";border-radius:20px;padding:.5rem 1rem;font-size:.9rem;transition:all .3s;position:fixed;top:1.5rem;right:1.5rem}.dark-mode-toggle.__jsx-style-dynamic-selector:hover{background:").concat(isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)', ";transform:translateY(-1px)}.floating-elements.__jsx-style-dynamic-selector{pointer-events:none;z-index:1;opacity:.6;width:100%;height:100%;position:fixed;top:0;left:0}.main-content.__jsx-style-dynamic-selector{z-index:10;justify-content:center;align-items:center;min-height:100vh;padding:2rem;display:flex;position:relative}.content-wrapper.__jsx-style-dynamic-selector{width:100%;max-width:1200px;margin:0 auto}.profile-section.__jsx-style-dynamic-selector{grid-template-columns:auto 1fr;align-items:center;gap:4rem;display:grid}.profile-image-container.__jsx-style-dynamic-selector{justify-content:center;display:flex}.image-frame.__jsx-style-dynamic-selector{border-radius:20px;transition:transform .3s;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,.1)}.image-frame.__jsx-style-dynamic-selector:hover{transform:scale(1.02)}.profile-image.__jsx-style-dynamic-selector{object-fit:cover;width:300px;height:300px;filter:").concat(isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)', "}.text-content.__jsx-style-dynamic-selector{max-width:600px}.name-container.__jsx-style-dynamic-selector{margin-bottom:2rem}.name.__jsx-style-dynamic-selector{background:").concat(isDarkMode ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)', ";-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;margin-bottom:.5rem;font-size:3rem;font-weight:700;line-height:1.1}.title-container.__jsx-style-dynamic-selector{color:").concat(isDarkMode ? '#cbd5e1' : '#64748b', ";font-size:1.8rem;font-weight:300}.typed-title.__jsx-style-dynamic-selector{color:").concat(isDarkMode ? '#667eea' : '#4f46e5', ";font-weight:600}.cursor.__jsx-style-dynamic-selector{color:").concat(isDarkMode ? '#667eea' : '#4f46e5', ";animation:1.2s infinite blink}@keyframes blink{0%,50%{opacity:1}51%,to{opacity:0}}.bio.__jsx-style-dynamic-selector{color:").concat(isDarkMode ? '#cbd5e1' : '#64748b', ";margin-bottom:2.5rem;font-size:1.2rem;line-height:1.6}.action-buttons.__jsx-style-dynamic-selector{grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;margin-bottom:2.5rem;display:grid}.btn.__jsx-style-dynamic-selector{cursor:pointer;border:none;border-radius:12px;justify-content:center;align-items:center;gap:.5rem;padding:1rem 1.5rem;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s;display:flex}.btn-primary.__jsx-style-dynamic-selector{color:#fff;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);box-shadow:0 4px 15px rgba(102,126,234,.3)}.btn-secondary.__jsx-style-dynamic-selector{background:").concat(isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)', ";color:#48bb78;border:1px solid #48bb78}.btn-accent.__jsx-style-dynamic-selector{background:").concat(isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)', ";color:#ed8936;border:1px solid #ed8936}.btn-tertiary.__jsx-style-dynamic-selector{background:").concat(isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)', ";color:#9f7aea;border:1px solid #9f7aea}.btn.__jsx-style-dynamic-selector:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,.15)}.btn-primary.__jsx-style-dynamic-selector:hover{background:linear-gradient(135deg,#5a6fd8 0%,#6a42a8 100%)}.btn-secondary.__jsx-style-dynamic-selector:hover{color:#fff;background:#48bb78}.btn-accent.__jsx-style-dynamic-selector:hover{color:#fff;background:#ed8936}.btn-tertiary.__jsx-style-dynamic-selector:hover{color:#fff;background:#9f7aea}.social-links.__jsx-style-dynamic-selector{flex-wrap:wrap;gap:1.5rem;display:flex}.social-links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:").concat(isDarkMode ? '#cbd5e1' : '#64748b', ";background:").concat(isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)', ";border-radius:8px;align-items:center;gap:.5rem;padding:.5rem 1rem;text-decoration:none;transition:all .3s;display:flex}.social-links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:").concat(isDarkMode ? '#667eea' : '#4f46e5', ";background:").concat(isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)', ";transform:translateY(-1px)}@media (max-width:968px){.profile-section.__jsx-style-dynamic-selector{text-align:center;grid-template-columns:1fr;gap:2.5rem}.action-buttons.__jsx-style-dynamic-selector{grid-template-columns:1fr;max-width:300px;margin-left:auto;margin-right:auto}.name.__jsx-style-dynamic-selector{font-size:2.5rem}.title-container.__jsx-style-dynamic-selector{font-size:1.5rem}}@media (max-width:640px){.main-content.__jsx-style-dynamic-selector{padding:1rem}.name.__jsx-style-dynamic-selector{font-size:2rem}.title-container.__jsx-style-dynamic-selector{font-size:1.3rem}.bio.__jsx-style-dynamic-selector{font-size:1.1rem}.profile-image.__jsx-style-dynamic-selector{width:250px;height:250px}.social-links.__jsx-style-dynamic-selector{justify-content:center}}@media (max-width:480px){.name.__jsx-style-dynamic-selector{font-size:1.8rem}.action-buttons.__jsx-style-dynamic-selector{grid-template-columns:1fr}.btn.__jsx-style-dynamic-selector{padding:.875rem 1rem}}")
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LandingPage, "pdyydIIYz7lPiR6h4w/OZBHfWB8=", false, function() {
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
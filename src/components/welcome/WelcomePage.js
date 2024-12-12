import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from 'react';
import { Calendar, Globe, Users, ChevronDown, Clock, MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { motion } from 'framer-motion';
import NoiseTexture from '../components/NoiseTexture';
// Constants for feature data
const FEATURES = [
    {
        Icon: Calendar,
        title: "Smart Calendar",
        description: "Intelligent planning that puts your time first",
        ariaLabel: "Learn more about Smart Calendar feature"
    },
    {
        Icon: Globe,
        title: "Region Aware",
        description: "Seamlessly adapts to your location and policies",
        ariaLabel: "Learn more about Region Aware feature"
    },
    {
        Icon: Users,
        title: "Team Sync",
        description: "Keep your team aligned while you're away",
        ariaLabel: "Learn more about Team Sync feature"
    }
];
// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};
const cardHover = {
    rest: { scale: 1, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
    hover: {
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
        transition: { type: "spring", stiffness: 400, damping: 17 }
    }
};
const FeatureCard = ({ Icon, title, description, ariaLabel }) => (_jsx(motion.div, { className: "group relative", role: "article", "aria-label": ariaLabel, variants: fadeInUp, initial: "rest", whileHover: "hover", animate: "rest", children: _jsxs(motion.div, { variants: cardHover, className: "p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm", children: [_jsx("div", { className: "mb-4 p-3 rounded-lg bg-gradient-to-br from-purple-900/20 to-teal-900/20", children: _jsx(Icon, { className: "w-6 h-6 text-teal-400" }) }), _jsx("h3", { className: "text-xl font-semibold mb-3 text-teal-400 tracking-tight", children: title }), _jsx("p", { className: "text-gray-300 leading-relaxed", children: description })] }) }));
const RegionSelector = () => (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", className: "text-white hover:text-white/90 transition-colors", "aria-label": "Select region", children: ["United States ", _jsx(ChevronDown, { className: "ml-1 w-4 h-4", "aria-hidden": "true" })] }) }), _jsxs(DropdownMenuContent, { className: "bg-gray-900/95 backdrop-blur-md border-gray-800", children: [_jsx(DropdownMenuItem, { className: "text-white hover:bg-white/5", children: "United States" }), _jsx(DropdownMenuItem, { className: "text-white hover:bg-white/5", children: "United Kingdom" })] })] }));
const LocationSelector = () => (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", className: "text-white hover:text-white/90 transition-colors", "aria-label": "Select location", children: ["Atlanta ", _jsx(ChevronDown, { className: "ml-1 w-4 h-4", "aria-hidden": "true" })] }) }), _jsxs(DropdownMenuContent, { className: "bg-gray-900/95 backdrop-blur-md border-gray-800", children: [_jsx(DropdownMenuItem, { className: "text-white hover:bg-white/5", children: "Atlanta" }), _jsx(DropdownMenuItem, { className: "text-white hover:bg-white/5", children: "New York" }), _jsx(DropdownMenuItem, { className: "text-white hover:bg-white/5", children: "Los Angeles" })] })] }));
const ScrollIndicator = () => (_jsx(motion.div, { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2", initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 2 }, children: _jsxs(motion.div, { animate: { y: [0, 8, 0] }, transition: { repeat: Infinity, duration: 2 }, className: "flex flex-col items-center text-white/60", children: [_jsx(MousePointerClick, { className: "w-5 h-5 mb-2" }), _jsx("span", { className: "text-sm", children: "Scroll to explore" })] }) }));
const WelcomePage = () => {
    const [currentTime, setCurrentTime] = useState('');
    const updateTime = useCallback(() => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }));
    }, []);
    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, [updateTime]);
    return (_jsxs("div", { className: "min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950", children: [_jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,92,230,0.1),rgba(0,166,142,0.05))]" }), _jsx(NoiseTexture, {}), _jsx(motion.header, { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 }, className: "relative bg-purple-900/90 backdrop-blur-sm border-b border-purple-800/50", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "h-16 flex items-center justify-between", children: [_jsx(motion.div, { className: "text-2xl font-semibold text-teal-400", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "alfie" }), _jsxs("div", { className: "flex items-center space-x-6", children: [_jsx(RegionSelector, {}), _jsx(LocationSelector, {}), _jsxs("div", { className: "flex items-center space-x-2 text-white", "aria-live": "polite", children: [_jsx(Clock, { className: "w-4 h-4", "aria-hidden": "true" }), _jsx("time", { children: currentTime })] })] })] }) }) }), _jsxs("main", { className: "flex-1 flex flex-col justify-center relative", children: [_jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20", children: [_jsxs(motion.div, { className: "text-center mb-24", initial: "hidden", animate: "visible", variants: staggerContainer, children: [_jsxs(motion.h1, { className: "text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80", variants: fadeInUp, children: ["Create moments for", _jsx("br", {}), "what matters"] }), _jsx(motion.p, { className: "text-2xl text-white/80 mb-12 font-serif italic tracking-wide", variants: fadeInUp, children: "Where inspiration meets organization" }), _jsxs(motion.div, { className: "flex justify-center gap-6", variants: fadeInUp, children: [_jsx(Button, { size: "lg", className: "bg-teal-600 text-white px-8 py-6 rounded-lg text-lg hover:bg-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20", "aria-label": "Sign in with SSO", children: "SSO Login" }), _jsx(Button, { size: "lg", variant: "secondary", className: "bg-white text-teal-600 px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20", "aria-label": "Learn more about Alfie", children: "Learn More" })] })] }), _jsx(motion.div, { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", variants: staggerContainer, initial: "hidden", animate: "visible", children: FEATURES.map((feature) => (_jsx(FeatureCard, { ...feature }, feature.title))) })] }), _jsx(ScrollIndicator, {})] })] }));
};
export default WelcomePage;

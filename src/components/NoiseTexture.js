import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const NoiseTexture = () => (_jsxs("svg", { className: "absolute inset-0 w-full h-full opacity-[0.02]", children: [_jsx("filter", { id: 'noiseFilter', children: _jsx("feTurbulence", { type: 'fractalNoise', baseFrequency: '0.6', stitchTiles: 'stitch', numOctaves: '2' }) }), _jsx("rect", { width: '100%', height: '100%', filter: 'url(#noiseFilter)' })] }));
export default NoiseTexture;

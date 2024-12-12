import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from 'next/dynamic';
const WelcomePage = dynamic(() => import('../components/welcome/WelcomePage.tsx'), {
    ssr: true
});
export default function Home() {
    return _jsx(WelcomePage, {});
}

import dynamic from 'next/dynamic'

const WelcomePage = dynamic(() => import('../components/welcome/WelcomePage.tsx'), {
  ssr: true
})

export default function Home() {
  return <WelcomePage />
}
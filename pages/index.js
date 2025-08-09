import FloatingMenu from "@/components/layout/FloatingMenu"
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog4 from "@/components/sections/Blog4"
import Expertise from "@/components/sections/Expertise"
import HeroSlider1 from "@/components/sections/HeroSlider1"
import Newsteller1 from "@/components/sections/Newsteller1"
import Process1 from "@/components/sections/Process1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Process2 from "@/components/sections/Process2"
import Team3 from "@/components/sections/Team3"
import Testimonial4 from "@/components/sections/Testimonial4"
import { useState } from "react"
import About3 from "@/components/sections/About3"
import Head from 'next/head'
import Project3 from "@/components/sections/Project3"
import { PartnerLogoSlider } from "@/components/sections/TeamSlider"
import SIPCalculator from "@/components/sections/SIPCalculator"
export default function Home1() {
    // Floating
    const [isFloating, setFloating] = useState(false);
    const handleFloating = () => setFloating(!isFloating);

    return (
        <>
            <Head>
                <title>Creote - Corporate & Consulting Business NextJS Template</title>
            </Head>
            <Layout headerStyle={4} footerStyle={4}>
                <HeroSlider1 />
                <About3 />
                <Process2 />
                <Service1 />
                <Project3 />
                <PartnerLogoSlider />
                <SIPCalculator />
                <Testimonial4 />
                <Team3 />
                <Blog4 />
            </Layout>
        </>
    )
}
import FloatingMenu from "@/components/layout/FloatingMenu"
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
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
import Head from 'next/head'
import Project3 from "@/components/sections/Project3"
import { PartnerLogoSlider } from "@/components/sections/TeamSlider"
export default function Home1() {
    // Floating
    const [isFloating, setFloating] = useState(false);
    const handleFloating = () => setFloating(!isFloating);

    return (
        <>
            <Head>
                <title>Creote - Corporate & Consulting Business NextJS Template</title>
            </Head>
            <Layout headerStyle={7} footerStyle={1}>
                <HeroSlider1 />
                <Process2 />

                <Service1 />
                {/* <Process1 /> */}
                <Project3 />

                <PartnerLogoSlider />
                {/* <Project1 /> */}
                <Testimonial4 />
                <Team3 />

                <Blog1 />
                <Newsteller1 />
                <FloatingMenu handleFloating={handleFloating} isFloating={isFloating} />
            </Layout>
        </>
    )
}
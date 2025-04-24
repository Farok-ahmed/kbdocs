"use client";

import Banner from "@/components/page-sections/banner";
import GuideCategories from "@/components/page-sections/guide-categories";
import Solution from "@/components/page-sections/solution";
import FunFact from "@/components/page-sections/fun-fact";
import ThemeDoc from "@/components/page-sections/theme-doc";
import Faq from "@/components/page-sections/faq";
import CallToAction from "@/components/page-sections/call-to-action";

export default function Home() {
    return (
        <>
            <Banner />
            <GuideCategories />
            <Solution />
            <FunFact />
            <ThemeDoc />
            <Faq />
            <CallToAction />
        </>
    );
}

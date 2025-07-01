"use client";

import DefaultLayout from "@/components/layout";
import Banner from "@/components/page-sections/banner";
import CallToAction from "@/components/page-sections/call-to-action";
import Faq from "@/components/page-sections/faq";
import FunFact from "@/components/page-sections/fun-fact";
import GuideCategories from "@/components/page-sections/guide-categories";
import Solution from "@/components/page-sections/solution";
import ThemeDoc from "@/components/page-sections/theme-doc";

export default function Home() {
  return (
    <DefaultLayout>
      <Banner />
      <GuideCategories />
      <Solution />
      <FunFact />
      <ThemeDoc />
      <Faq />
      <CallToAction />
    </DefaultLayout>
  );
}

import type { MetaFunction } from "@remix-run/cloudflare";
import { CallToAction } from '~/components/CallToAction'
import { Faqs } from '~/components/Faqs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Hero } from '~/components/Hero'
import { Pricing } from '~/components/Pricing'
import { PrimaryFeatures } from '~/components/PrimaryFeatures'
import { SecondaryFeatures } from '~/components/SecondaryFeatures'
import { Testimonials } from '~/components/Testimonials'

export const meta: MetaFunction = () => {
  return [
    { title: "TaxPal - Accounting made simple for small businesses" },
    { name: "description", content: "Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited." },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

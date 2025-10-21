import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ProcessSteps } from "@/components/process-steps"
import { Differentials } from "@/components/differentials"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ProcessSteps />
      <Differentials />
      <Testimonials />
      <Gallery />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

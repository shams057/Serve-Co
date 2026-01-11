import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Target, Users, Award } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Care",
    description: "We treat every home as if it were our own, with attention to detail and genuine care.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every service, ensuring consistent quality across all bookings.",
  },
  {
    icon: Users,
    title: "Trust",
    description: "We build trust through transparency, verified professionals, and reliable service.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We operate with honesty and integrity, always putting our customers first.",
  },
]

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "500+", label: "Verified Pros" },
  { value: "50,000+", label: "Services Completed" },
  { value: "4.9", label: "Average Rating" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Making home services simple and trustworthy
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Serve & Co was founded with a simple mission: to connect busy families and professionals with trusted
                  service providers who deliver quality work right to their doorstep.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that your home is your sanctuary. That's why we carefully vet every professional on our
                  platform, ensuring they meet our high standards for quality, reliability, and professionalism.
                </p>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden bg-secondary">
                <img src="/diverse-team-of-service-professionals-standing-tog.jpg" alt="Serve & Co team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">The principles that guide everything we do.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="text-center border-border/50">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Join the Serve & Co family
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to book a service or become a provider, we'd love to have you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/book">Book a Service</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

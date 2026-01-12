import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Shirt, PawPrint, Car, Baby, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "House Cleaning",
    description: "Deep cleaning, regular maintenance, or one-time refresh",
    price: "From 60DT",
    href: "/services#cleaning",
  },
  {
    icon: Shirt,
    title: "Laundry & Ironing",
    description: "Wash, dry, fold, and professional ironing services",
    price: "From 30DT",
    href: "/services#laundry",
  },
  {
    icon: PawPrint,
    title: "Pet Grooming",
    description: "Bathing, grooming, and pampering for your furry friends",
    price: "From 45DT",
    href: "/services#pet",
  },
  {
    icon: Car,
    title: "Car Washing",
    description: "Interior and exterior detailing at your location",
    price: "From 35DT",
    href: "/services#car",
  },
  {
    icon: Baby,
    title: "Babysitting",
    description: "Trusted caregivers for your little ones",
    price: "From 25DT/hr",
    href: "/services#babysitting",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground   mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to keep your home running smoothly, all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

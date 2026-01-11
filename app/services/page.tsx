import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Sparkles, Shirt, PawPrint, Car, Baby, Check } from "lucide-react"

const services = [
  {
    id: "cleaning",
    icon: Sparkles,
    title: "House Cleaning",
    description: "Professional cleaning services for every corner of your home.",
    image: "/professional-house-cleaning-service-bright-modern-.jpg",
    packages: [
      {
        name: "Standard Clean",
        price: "$60",
        features: ["2-3 bedrooms", "Bathroom cleaning", "Kitchen cleaning", "Vacuuming & mopping"],
      },
      {
        name: "Deep Clean",
        price: "$120",
        features: ["All standard features", "Inside appliances", "Window cleaning", "Baseboards & details"],
      },
      {
        name: "Move In/Out",
        price: "$180",
        features: ["Complete deep clean", "Cabinet interiors", "Closet cleaning", "Wall spot cleaning"],
      },
    ],
  },
  {
    id: "laundry",
    icon: Shirt,
    title: "Laundry & Ironing",
    description: "Fresh, clean clothes without the hassle.",
    image: "/professional-laundry-service-folded-clothes.jpg",
    packages: [
      {
        name: "Wash & Fold",
        price: "$30",
        features: ["Up to 10 lbs", "Sorted by color", "Fresh folded", "Same-day available"],
      },
      {
        name: "Wash & Iron",
        price: "$50",
        features: ["Up to 10 lbs", "Professional ironing", "Hung or folded", "Stain treatment"],
      },
      {
        name: "Premium Care",
        price: "$80",
        features: ["Delicates included", "Hand wash items", "Specialty care", "Premium packaging"],
      },
    ],
  },
  {
    id: "pet",
    icon: PawPrint,
    title: "Pet Grooming",
    description: "Keep your furry friends looking and feeling their best.",
    image: "/cute-dog-getting-groomed-happy-pet-grooming.jpg",
    packages: [
      { name: "Basic Groom", price: "$45", features: ["Bath & dry", "Brush out", "Nail trim", "Ear cleaning"] },
      {
        name: "Full Groom",
        price: "$75",
        features: ["Basic + haircut", "Style of choice", "Teeth brushing", "Cologne/bow"],
      },
      { name: "Spa Day", price: "$100", features: ["Full groom", "De-shedding", "Paw treatment", "Skin treatment"] },
    ],
  },
  {
    id: "car",
    icon: Car,
    title: "Car Washing",
    description: "Mobile car detailing that comes to you.",
    image: "/car-detailing-washing-professional-service.jpg",
    packages: [
      { name: "Express Wash", price: "$35", features: ["Exterior wash", "Wheel cleaning", "Windows", "Tire shine"] },
      {
        name: "Interior Detail",
        price: "$65",
        features: ["Vacuum interior", "Dashboard clean", "Seat cleaning", "Air freshener"],
      },
      {
        name: "Full Detail",
        price: "$120",
        features: ["Interior + exterior", "Wax application", "Leather care", "Engine cleaning"],
      },
    ],
  },
  {
    id: "babysitting",
    icon: Baby,
    title: "Babysitting",
    description: "Trusted caregivers for your peace of mind.",
    image: "/babysitter-playing-with-children-happy-family.jpg",
    packages: [
      {
        name: "Standard Care",
        price: "$25/hr",
        features: ["1-2 children", "Meal preparation", "Light cleanup", "Activity time"],
      },
      {
        name: "Extended Care",
        price: "$30/hr",
        features: ["Up to 3 children", "Homework help", "Bedtime routine", "Status updates"],
      },
      {
        name: "Overnight",
        price: "$200",
        features: ["8+ hours", "Morning routine", "Breakfast included", "Flexible timing"],
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional home services delivered by trusted experts. Choose what you need, and we'll take care of the
              rest.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-secondary">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {service.packages.map((pkg) => (
                    <Card key={pkg.name} className="border-border/50">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{pkg.name}</CardTitle>
                          <span className="text-xl font-bold text-primary">{pkg.price}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full mt-4">
                          <Link
                            href={`/book?service=${service.id}&package=${pkg.name.toLowerCase().replace(" ", "-")}`}
                          >
                            Book Now
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

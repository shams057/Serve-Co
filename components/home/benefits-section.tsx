import { Shield, Clock, ThumbsUp, Calendar } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "Every service provider undergoes thorough background checks and verification.",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Book in minutes, get services delivered at your convenience.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "Not satisfied? We'll make it right or give you a full refund.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose the time that works for you, including same-day bookings.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Serve & Co?</h2>
          <p className="text-muted-foreground text-lg">We make booking home services simple, safe, and stress-free.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Busy Mom",
    content:
      "Serve & Co has been a lifesaver! The house cleaning service is impeccable, and I love that I can trust the professionals they send.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    name: "David L.",
    role: "Business Owner",
    content:
      "I use their car washing service weekly. It's so convenient to have my car detailed right in my driveway while I work from home.",
    rating: 5,
    image: "/man-professional-headshot-smiling.jpg",
  },
  {
    name: "Emily R.",
    role: "Pet Parent",
    content:
      "The pet grooming service is fantastic! My dog actually enjoys the grooming sessions now. The groomers are so gentle and professional.",
    rating: 5,
    image: "/young-woman-headshot-smiling-casual.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">Join thousands of happy customers who trust Serve & Co.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const services = [
  {
    value: "cleaning",
    label: "House Cleaning",
    packages: [
      { id: "basic", name: "Basic Clean", price: 75 },
      { id: "standard", name: "Standard Clean", price: 125 },
      { id: "deep", name: "Deep Clean", price: 200 },
    ],
  },
  {
    value: "laundry",
    label: "Laundry & Ironing",
    packages: [
      { id: "wash", name: "Wash & Dry", price: 45 },
      { id: "iron", name: "Wash, Dry & Iron", price: 75 },
      { id: "delicate", name: "Delicate Fabrics", price: 85 },
    ],
  },
  {
    value: "pet",
    label: "Pet Grooming",
    packages: [
      { id: "bath", name: "Bath & Dry", price: 55 },
      { id: "trim", name: "Bath, Trim & Style", price: 95 },
      { id: "full", name: "Full Grooming Package", price: 135 },
    ],
  },
  {
    value: "car",
    label: "Car Washing",
    packages: [
      { id: "exterior", name: "Exterior Wash", price: 40 },
      { id: "interior", name: "Interior Clean", price: 50 },
      { id: "full", name: "Full Detail", price: 100 },
      { id: "premium", name: "Premium Detail + Wax", price: 150 },
    ],
  },
  {
    value: "babysitting",
    label: "Babysitting",
    packages: [
      { id: "hourly", name: "Hourly Rate", price: 20 },
      { id: "evening", name: "Evening (5+ hours)", price: 95 },
      { id: "fullday", name: "Full Day (8+ hours)", price: 160 },
    ],
  },
]

const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
]

function BookingFormContent() {
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get("service") || ""

  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    service: preselectedService,
    package: "",
    date: undefined as Date | undefined,
    time: "",
    name: "",
    phone: "",
    address: "",
    notes: "",
  })

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const isStep1Valid = formData.service && formData.package && formData.date && formData.time
  const isStep2Valid = formData.name && formData.phone && formData.address

  const selectedService = services.find((s) => s.value === formData.service)
  const selectedPackage = selectedService?.packages.find((p) => p.id === formData.package)

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-2">
            Thank you, {formData.name}! Your {selectedService?.label} - {selectedPackage?.name} has been booked for{" "}
            {formData.date && format(formData.date, "MMMM d, yyyy")} at {formData.time}.
          </p>
          <p className="text-muted-foreground mb-6">
            Total: <span className="font-semibold text-foreground">${selectedPackage?.price}</span>
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            You'll receive a confirmation email shortly with all the details.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setStep(1)
              setFormData({
                service: "",
                package: "",
                date: undefined,
                time: "",
                name: "",
                phone: "",
                address: "",
                notes: "",
              })
            }}
          >
            Book Another Service
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="font-serif text-2xl">Book a Service</CardTitle>
          <span className="text-sm text-muted-foreground">Step {step} of 3</span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn("h-2 flex-1 rounded-full transition-colors", i <= step ? "bg-primary" : "bg-muted")}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="service">Select Service</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value, package: "" })}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedService && (
                <div className="space-y-2">
                  <Label htmlFor="package">Select Package</Label>
                  <div className="grid gap-3">
                    {selectedService.packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className={cn(
                          "p-4 border-2 rounded-lg cursor-pointer transition-all",
                          formData.package === pkg.id
                            ? "border-primary bg-primary/5"
                            : "border-muted hover:border-primary/50",
                        )}
                        onClick={() => setFormData({ ...formData, package: pkg.id })}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-foreground">{pkg.name}</p>
                          </div>
                          <p className="text-lg font-bold text-primary">{pkg.price}TND</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label>Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => setFormData({ ...formData, date })}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Select Time</Label>
                <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Service Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter the full address where service will be provided"
                  rows={3}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-foreground">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="text-foreground">{selectedService?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Package:</span>
                    <span className="text-foreground">{selectedPackage?.name}</span>
                  </div>
                  <div className="flex justify-between border-t border-muted pt-2">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="text-foreground font-bold text-primary">${selectedPackage?.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground">{formData.date && format(formData.date, "MMMM d, yyyy")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="text-foreground">{formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="text-foreground">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="text-foreground">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Address:</span>
                    <span className="text-foreground text-right max-w-[200px]">{formData.address}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any special instructions or requests?"
                  rows={3}
                />
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <Button type="button" onClick={handleNext} disabled={step === 1 ? !isStep1Valid : !isStep2Valid}>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button type="submit">Confirm Booking</Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Book Your Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete the form below to schedule your service. Our team will confirm your booking within 24 hours.
            </p>
          </div>

          <Suspense
            fallback={
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">Loading booking form...</p>
                </CardContent>
              </Card>
            }
          >
            <BookingFormContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}

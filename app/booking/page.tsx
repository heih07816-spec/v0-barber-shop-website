"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Check, AlertCircle } from "lucide-react"
import { nb } from "date-fns/locale"

type BookingStep = "service" | "datetime" | "info" | "confirmation"

interface BookingData {
  serviceId: string
  service: string
  servicePrice: string
  date: Date | undefined
  time: string
  name: string
  email: string
  phone: string
}

export default function BookingPage() {
  const [step, setStep] = useState<BookingStep>("service")
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceId: "",
    service: "",
    servicePrice: "",
    date: undefined,
    time: "",
    name: "",
    email: "",
    phone: "",
  })
  const [phoneError, setPhoneError] = useState("")
  const [emailError, setEmailError] = useState("")

  const services = [
    { id: "herreklipp", name: "Herreklipp", price: "399 kr", duration: "30 min" },
    { id: "skjeggstell", name: "Skjeggstell", price: "299 kr", duration: "20 min" },
    { id: "komplett", name: "Komplett Pakke", price: "599 kr", duration: "50 min" },
    { id: "fade", name: "Fade Klipp", price: "449 kr", duration: "40 min" },
    { id: "barn", name: "Barn Klipp", price: "299 kr", duration: "25 min" },
    { id: "ansikt", name: "Ansiktsbehandling", price: "349 kr", duration: "30 min" },
  ]

  const timeSlots = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ]

  const handleServiceSelect = (serviceId: string) => {
    const service = services.find((s) => s.id === serviceId)
    if (service) {
      setBookingData({
        ...bookingData,
        serviceId: service.id,
        service: service.name,
        servicePrice: service.price,
      })
    }
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{8}$/
    const cleanPhone = phone.replace(/\s+/g, "")
    return phoneRegex.test(cleanPhone)
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handlePhoneChange = (value: string) => {
    setBookingData({ ...bookingData, phone: value })
    const cleanPhone = value.replace(/\s+/g, "")
    if (value && !validatePhone(cleanPhone)) {
      setPhoneError("Telefonnummer må være 8 siffer")
    } else {
      setPhoneError("")
    }
  }

  const handleEmailChange = (value: string) => {
    setBookingData({ ...bookingData, email: value })
    if (value && !validateEmail(value)) {
      setEmailError("Vennligst skriv inn en gyldig e-postadresse")
    } else {
      setEmailError("")
    }
  }

  const handleFinalSubmit = () => {
    if (!canSubmit) {
      return
    }

    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    const newBooking = {
      id: Date.now().toString(),
      ...bookingData,
      status: "pending",
      createdAt: new Date().toISOString(),
    }
    bookings.push(newBooking)
    localStorage.setItem("bookings", JSON.stringify(bookings))
    setStep("confirmation")
  }

  const canProceedToDateTime = bookingData.serviceId !== ""
  const canProceedToInfo = bookingData.date && bookingData.time !== ""
  const canSubmit =
    bookingData.name &&
    bookingData.email &&
    bookingData.phone &&
    !phoneError &&
    !emailError &&
    validatePhone(bookingData.phone.replace(/\s+/g, "")) &&
    validateEmail(bookingData.email)

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Book Din Time</h1>
          <p className="text-muted-foreground">Følg stegene for å booke din time hos CutzByBigA</p>
        </div>

        <div className="mb-8 flex items-center justify-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              step === "service"
                ? "bg-accent text-accent-foreground"
                : step !== "service"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
            }`}
          >
            {step !== "service" ? <Check className="h-5 w-5" /> : "1"}
          </div>
          <div className={`h-1 w-12 ${step !== "service" ? "bg-primary" : "bg-muted"}`} />
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              step === "datetime"
                ? "bg-accent text-accent-foreground"
                : step === "info" || step === "confirmation"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
            }`}
          >
            {step === "info" || step === "confirmation" ? <Check className="h-5 w-5" /> : "2"}
          </div>
          <div className={`h-1 w-12 ${step === "info" || step === "confirmation" ? "bg-primary" : "bg-muted"}`} />
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              step === "info"
                ? "bg-accent text-accent-foreground"
                : step === "confirmation"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
            }`}
          >
            {step === "confirmation" ? <Check className="h-5 w-5" /> : "3"}
          </div>
        </div>

        {step === "service" && (
          <Card>
            <CardHeader>
              <CardTitle>Velg Tjeneste</CardTitle>
              <CardDescription>Hvilken tjeneste ønsker du å booke?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={bookingData.serviceId} onValueChange={handleServiceSelect}>
                <div className="space-y-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`flex items-center space-x-3 rounded-lg border-2 p-4 transition-all cursor-pointer ${
                        bookingData.serviceId === service.id
                          ? "border-accent bg-accent/10 shadow-md"
                          : "border-border hover:border-accent/50"
                      }`}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <RadioGroupItem value={service.id} id={service.id} />
                      <Label htmlFor={service.id} className="flex flex-1 cursor-pointer items-center justify-between">
                        <div>
                          <div className="font-semibold">{service.name}</div>
                          <div className="text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                        <div className="text-lg font-bold">{service.price}</div>
                      </Label>
                      {bookingData.serviceId === service.id && <Check className="h-5 w-5 text-accent" />}
                    </div>
                  ))}
                </div>
              </RadioGroup>
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={() => setStep("datetime")}
                  disabled={!canProceedToDateTime}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Neste Steg
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "datetime" && (
          <Card>
            <CardHeader>
              <CardTitle>Velg Dato og Tid</CardTitle>
              <CardDescription>Når ønsker du å komme?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label className="mb-2 block">Velg Dato</Label>
                  <Calendar
                    mode="single"
                    selected={bookingData.date}
                    onSelect={(date) => setBookingData({ ...bookingData, date })}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    locale={nb}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Velg Tid</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={bookingData.time === time ? "default" : "outline"}
                        className={
                          bookingData.time === time ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""
                        }
                        onClick={() => setBookingData({ ...bookingData, time })}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setStep("service")}>
                  Tilbake
                </Button>
                <Button
                  onClick={() => setStep("info")}
                  disabled={!canProceedToInfo}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Neste Steg
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "info" && (
          <Card>
            <CardHeader>
              <CardTitle>Kontaktinformasjon</CardTitle>
              <CardDescription>Fyll inn dine kontaktopplysninger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Fullt Navn</Label>
                  <Input
                    id="name"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    placeholder="Ola Nordmann"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-post</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="ola@example.com"
                    className={emailError ? "border-red-500" : ""}
                  />
                  {emailError && (
                    <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
                      <AlertCircle className="h-4 w-4" />
                      <span>{emailError}</span>
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Telefon (8 siffer)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="98765432"
                    maxLength={8}
                    className={phoneError ? "border-red-500" : ""}
                  />
                  {phoneError && (
                    <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
                      <AlertCircle className="h-4 w-4" />
                      <span>{phoneError}</span>
                    </div>
                  )}
                  <p className="mt-1 text-xs text-muted-foreground">Norsk telefonnummer med 8 siffer</p>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h3 className="mb-2 font-semibold">Oppsummering</h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-muted-foreground">Tjeneste:</span> {bookingData.service}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Pris:</span> {bookingData.servicePrice}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Dato:</span>{" "}
                      {bookingData.date?.toLocaleDateString("nb-NO")}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Tid:</span> {bookingData.time}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setStep("datetime")}>
                  Tilbake
                </Button>
                <Button
                  onClick={handleFinalSubmit}
                  disabled={!canSubmit}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Bekreft Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "confirmation" && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Check className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Booking Bekreftet!</h2>
              <p className="mb-6 text-muted-foreground">Vi gleder oss til å se deg hos CutzByBigA</p>
              <div className="mx-auto mb-6 max-w-md rounded-lg bg-muted p-6 text-left">
                <h3 className="mb-3 font-semibold">Dine Bookingdetaljer:</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Navn:</span> {bookingData.name}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Tjeneste:</span> {bookingData.service}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Dato:</span> {bookingData.date?.toLocaleDateString("nb-NO")}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Tid:</span> {bookingData.time}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Pris:</span> {bookingData.servicePrice}
                  </p>
                </div>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                Du vil motta en bekreftelse på e-post til {bookingData.email}
              </p>
              <Button
                onClick={() => {
                  setStep("service")
                  setBookingData({
                    serviceId: "",
                    service: "",
                    servicePrice: "",
                    date: undefined,
                    time: "",
                    name: "",
                    email: "",
                    phone: "",
                  })
                  setPhoneError("")
                  setEmailError("")
                }}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Book Ny Time
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}

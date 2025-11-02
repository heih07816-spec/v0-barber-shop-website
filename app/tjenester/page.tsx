import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function TjenesterPage() {
  const services = [
    {
      title: "Herreklipp",
      price: "399 kr",
      duration: "30 min",
      description: "Profesjonell klipping tilpasset din ansiktsform og stil",
      features: ["Konsultasjon", "Vask og klipp", "Styling", "Produktanbefalinger"],
    },
    {
      title: "Skjeggstell",
      price: "299 kr",
      duration: "20 min",
      description: "Trimming, forming og styling av skjegg",
      features: ["Skjeggtrimming", "Konturering", "Hot towel behandling", "Skjeggolje"],
    },
    {
      title: "Komplett Pakke",
      price: "599 kr",
      duration: "50 min",
      description: "Klipp, skjegg og styling - alt du trenger",
      features: ["Herreklipp", "Skjeggstell", "Ansiktsbehandling", "Premium styling"],
      popular: true,
    },
    {
      title: "Fade Klipp",
      price: "449 kr",
      duration: "40 min",
      description: "Moderne fade med presis overgang",
      features: ["Low/Mid/High fade", "Lineup", "Styling", "Detaljarbeid"],
    },
    {
      title: "Barn Klipp",
      price: "299 kr",
      duration: "25 min",
      description: "Klipping for barn under 12 år",
      features: ["Tålmodig tilnærming", "Morsom opplevelse", "Foreldreveiledning", "Styling"],
    },
    {
      title: "Ansiktsbehandling",
      price: "349 kr",
      duration: "30 min",
      description: "Dyprengjørende ansiktsbehandling",
      features: ["Ansiktsrens", "Peeling", "Ansiktsmaske", "Fuktighetskrem"],
    },
  ]

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Våre Tjenester</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Vi tilbyr et bredt spekter av tjenester for å holde deg velstelt og stilig
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`relative border-2 transition-all hover:shadow-lg ${
                service.popular ? "border-accent" : "hover:border-accent"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                    Mest Populær
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{service.price}</span>
                  <span className="text-muted-foreground">/ {service.duration}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-accent" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/booking" className="block">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Book Denne Tjenesten
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Clock, Star, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center justify-center bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            Velkommen til <span className="text-accent">CutzByBigA</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
            Din destinasjon for profesjonell barbering og styling. Vi gir deg den perfekte looken hver gang.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/booking">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Book Time Nå
              </Button>
            </Link>
            <Link href="/tjenester">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Se Våre Tjenester
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Våre Tjenester</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
              Vi tilbyr et bredt spekter av tjenester for å holde deg velstelt og stilig
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Scissors className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Herreklipp</h3>
                <p className="mb-4 text-muted-foreground">Profesjonell klipping tilpasset din ansiktsform og stil</p>
                <p className="text-2xl font-bold">399 kr</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Scissors className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Skjeggstell</h3>
                <p className="mb-4 text-muted-foreground">Trimming, forming og styling av skjegg</p>
                <p className="text-2xl font-bold">299 kr</p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Scissors className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Komplett Pakke</h3>
                <p className="mb-4 text-muted-foreground">Klipp, skjegg og styling - alt du trenger</p>
                <p className="text-2xl font-bold">599 kr</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Link href="/tjenester">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Se Alle Tjenester
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hvorfor Velge Oss?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Erfarne Barberer</h3>
              <p className="text-muted-foreground text-pretty">
                Våre barberer har mange års erfaring og holder seg oppdatert på de nyeste trendene
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fleksible Tider</h3>
              <p className="text-muted-foreground text-pretty">
                Vi tilbyr tider som passer din timeplan, inkludert kvelder og helger
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sentral Beliggenhet</h3>
              <p className="text-muted-foreground text-pretty">
                Lett tilgjengelig med god parkeringsmuligheter og kollektivtransport
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Klar for en Fresh Look?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 text-pretty">
              Book din time i dag og opplev forskjellen hos CutzByBigA
            </p>
            <Link href="/booking">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Book Time Nå
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

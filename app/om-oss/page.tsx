import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function OmOssPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Om CutzByBigA</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Din lokale barbershop med fokus på kvalitet og kundetilfredshet
          </p>
        </div>

        <div className="mx-auto mb-16 max-w-3xl">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-bold">Vår Historie</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                CutzByBigA ble grunnlagt med en visjon om å tilby førsteklasses barberingstjenester i et moderne og
                innbydende miljø. Vi kombinerer tradisjonelt håndverk med moderne teknikker for å gi deg den beste
                opplevelsen.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Våre erfarne barberer holder seg oppdatert på de nyeste trendene og teknikkene, samtidig som vi
                respekterer den klassiske barberkunsten. Vi er stolte av å kunne tilby personlig service og
                skreddersydde løsninger til hver enkelt kunde.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Hos oss er du ikke bare en kunde - du er en del av CutzByBigA-familien. Vi ser frem til å ønske deg
                velkommen!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-8 text-3xl font-bold">Kontakt Oss</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">Adresse</h3>
              <p className="text-sm text-muted-foreground">
                Storgata 123
                <br />
                0182 Oslo
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">Telefon</h3>
              <p className="text-sm text-muted-foreground">+47 123 45 678</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">E-post</h3>
              <p className="text-sm text-muted-foreground">post@cutzbybiga.no</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">Åpningstider</h3>
              <p className="text-sm text-muted-foreground">
                Man-Fre: 10:00-19:00
                <br />
                Lør: 10:00-16:00
                <br />
                Søn: Stengt
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

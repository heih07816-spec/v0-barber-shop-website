export default function AdminHjelpPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">Admin Instruksjoner</h1>
          <p className="text-lg text-muted-foreground">Slik bruker du admin-panelet for CutzByBigA</p>
        </div>

        <div className="space-y-8">
          {/* Hvordan logge inn */}
          <section className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-2xl font-bold">1. Hvordan logge inn</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>For å få tilgang til admin-panelet:</p>
              <ol className="ml-6 list-decimal space-y-2">
                <li>
                  Gå til <span className="font-mono text-foreground">/admin</span> i nettleseren
                  <br />
                  <span className="text-sm">(Eksempel: dinside.vercel.app/admin)</span>
                </li>
                <li>
                  Skriv inn passordet: <span className="font-mono font-bold text-accent">0999</span>
                </li>
                <li>Klikk på "Logg Inn"-knappen</li>
              </ol>
              <div className="mt-4 rounded-md bg-yellow-50 p-4 dark:bg-yellow-950">
                <p className="font-semibold text-yellow-800 dark:text-yellow-200">
                  Viktig: Admin-lenken er skjult fra menyen, så bare du som kjenner URL-en kan få tilgang!
                </p>
              </div>
            </div>
          </section>

          {/* Hva kan du gjøre */}
          <section className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-2xl font-bold">2. Hva kan du gjøre i admin-panelet?</h2>
            <div className="space-y-4">
              <div className="rounded-md border-l-4 border-accent bg-muted p-4">
                <h3 className="mb-2 font-semibold">Se alle bookinger</h3>
                <p className="text-sm text-muted-foreground">
                  Du får en oversikt over alle timeavtaler som kundene har bestilt
                </p>
              </div>
              <div className="rounded-md border-l-4 border-accent bg-muted p-4">
                <h3 className="mb-2 font-semibold">Se kundedetaljer</h3>
                <p className="text-sm text-muted-foreground">
                  Navn, telefonnummer, e-post, valgt tjeneste, dato og tidspunkt
                </p>
              </div>
              <div className="rounded-md border-l-4 border-accent bg-muted p-4">
                <h3 className="mb-2 font-semibold">Bekrefte bookinger</h3>
                <p className="text-sm text-muted-foreground">Klikk på grønn hake-knapp for å bekrefte en time</p>
              </div>
              <div className="rounded-md border-l-4 border-accent bg-muted p-4">
                <h3 className="mb-2 font-semibold">Kansellere bookinger</h3>
                <p className="text-sm text-muted-foreground">Klikk på rød X-knapp for å kansellere en time</p>
              </div>
              <div className="rounded-md border-l-4 border-accent bg-muted p-4">
                <h3 className="mb-2 font-semibold">Filtrere bookinger</h3>
                <p className="text-sm text-muted-foreground">
                  Bruk knappene øverst for å vise: Alle, Ventende, Bekreftet eller Kansellert
                </p>
              </div>
            </div>
          </section>

          {/* Forklaring av statuser */}
          <section className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-2xl font-bold">3. Forklaring av statuser</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-600 px-3 py-1 text-sm font-semibold text-white">Ventende</div>
                <p className="text-muted-foreground">Ny booking som venter på din godkjenning</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">Bekreftet</div>
                <p className="text-muted-foreground">Du har godkjent denne bookingen</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">Kansellert</div>
                <p className="text-muted-foreground">Bookingen er kansellert</p>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-2xl font-bold">4. Nyttige tips</h2>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Klikk på øye-ikonet for å se alle detaljer om en booking</li>
              <li>Statistikk-kortene øverst viser antall bookinger i hver status</li>
              <li>Bookingene vises med nyeste først</li>
              <li>Husk å logge ut når du er ferdig ved å klikke "Logg Ut"-knappen</li>
              <li>Del aldri passordet ditt med andre</li>
            </ul>
          </section>

          {/* Kontaktinfo */}
          <section className="rounded-lg border bg-accent/10 p-6">
            <h2 className="mb-4 text-2xl font-bold">Trenger du hjelp?</h2>
            <p className="text-muted-foreground">
              Hvis du har problemer med admin-panelet eller trenger hjelp, kan du alltid gå tilbake til denne siden for
              å lese instruksjonene på nytt.
            </p>
            <div className="mt-4">
              <p className="font-semibold">Admin URL:</p>
              <p className="font-mono text-accent">/admin</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Passord:</p>
              <p className="font-mono text-accent">0999</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, User, Mail, Phone, Check, X, Eye } from "lucide-react"

interface Booking {
  id: string
  service: string
  servicePrice: string
  date: Date
  time: string
  name: string
  email: string
  phone: string
  status: "pending" | "confirmed" | "cancelled"
  createdAt: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [bookings, setBookings] = useState<Booking[]>([])
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "cancelled">("all")

  useEffect(() => {
    if (isAuthenticated) {
      loadBookings()
    }
  }, [isAuthenticated])

  const loadBookings = () => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    const parsedBookings = storedBookings.map((b: any) => ({
      ...b,
      date: new Date(b.date),
    }))
    setBookings(parsedBookings)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Feil passord")
    }
  }

  const updateBookingStatus = (bookingId: string, status: "confirmed" | "cancelled") => {
    const updatedBookings = bookings.map((b) => (b.id === bookingId ? { ...b, status } : b))
    setBookings(updatedBookings)
    localStorage.setItem("bookings", JSON.stringify(updatedBookings))
    setSelectedBooking(null)
  }

  const filteredBookings = bookings
    .filter((b) => (filter === "all" ? true : b.status === filter))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  }

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Innlogging</CardTitle>
            <CardDescription>Logg inn for å administrere bookinger</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Passord</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Skriv inn passord"
                />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Logg Inn
              </Button>
              <p className="text-center text-xs text-muted-foreground">Demo passord: admin123</p>
            </form>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Administrer bookinger for CutzByBigA</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsAuthenticated(false)}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Logg Ut
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-sm text-muted-foreground">Totale Bookinger</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <p className="text-sm text-muted-foreground">Ventende</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">{stats.confirmed}</div>
              <p className="text-sm text-muted-foreground">Bekreftet</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
              <p className="text-sm text-muted-foreground">Kansellert</p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
          >
            Alle
          </Button>
          <Button
            variant={filter === "pending" ? "default" : "outline"}
            onClick={() => setFilter("pending")}
            className={filter === "pending" ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
          >
            Ventende
          </Button>
          <Button
            variant={filter === "confirmed" ? "default" : "outline"}
            onClick={() => setFilter("confirmed")}
            className={filter === "confirmed" ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
          >
            Bekreftet
          </Button>
          <Button
            variant={filter === "cancelled" ? "default" : "outline"}
            onClick={() => setFilter("cancelled")}
            className={filter === "cancelled" ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
          >
            Kansellert
          </Button>
        </div>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle>Bookinger</CardTitle>
            <CardDescription>Oversikt over alle bookinger</CardDescription>
          </CardHeader>
          <CardContent>
            {filteredBookings.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground">Ingen bookinger funnet</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Kunde</TableHead>
                    <TableHead>Tjeneste</TableHead>
                    <TableHead>Dato & Tid</TableHead>
                    <TableHead>Pris</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Handlinger</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div className="font-medium">{booking.name}</div>
                        <div className="text-sm text-muted-foreground">{booking.email}</div>
                      </TableCell>
                      <TableCell>{booking.service}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{booking.date.toLocaleDateString("nb-NO")}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{booking.time}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold">{booking.servicePrice}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            booking.status === "confirmed"
                              ? "default"
                              : booking.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                          className={
                            booking.status === "confirmed"
                              ? "bg-green-600 hover:bg-green-700"
                              : booking.status === "pending"
                                ? "bg-yellow-600 hover:bg-yellow-700"
                                : ""
                          }
                        >
                          {booking.status === "pending"
                            ? "Ventende"
                            : booking.status === "confirmed"
                              ? "Bekreftet"
                              : "Kansellert"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => setSelectedBooking(booking)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          {booking.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                                onClick={() => updateBookingStatus(booking.id, "confirmed")}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                                onClick={() => updateBookingStatus(booking.id, "cancelled")}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Booking Details Dialog */}
        <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Bookingdetaljer</DialogTitle>
              <DialogDescription>Fullstendig informasjon om bookingen</DialogDescription>
            </DialogHeader>
            {selectedBooking && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Kunde</div>
                    <div className="font-medium">{selectedBooking.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">E-post</div>
                    <div className="font-medium">{selectedBooking.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Telefon</div>
                    <div className="font-medium">{selectedBooking.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Dato & Tid</div>
                    <div className="font-medium">
                      {selectedBooking.date.toLocaleDateString("nb-NO")} kl. {selectedBooking.time}
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="mb-2 text-sm text-muted-foreground">Tjeneste</div>
                  <div className="font-semibold">{selectedBooking.service}</div>
                  <div className="mt-1 text-lg font-bold text-accent">{selectedBooking.servicePrice}</div>
                </div>
                <div>
                  <div className="mb-2 text-sm text-muted-foreground">Status</div>
                  <Badge
                    variant={
                      selectedBooking.status === "confirmed"
                        ? "default"
                        : selectedBooking.status === "pending"
                          ? "secondary"
                          : "destructive"
                    }
                    className={
                      selectedBooking.status === "confirmed"
                        ? "bg-green-600 hover:bg-green-700"
                        : selectedBooking.status === "pending"
                          ? "bg-yellow-600 hover:bg-yellow-700"
                          : ""
                    }
                  >
                    {selectedBooking.status === "pending"
                      ? "Ventende"
                      : selectedBooking.status === "confirmed"
                        ? "Bekreftet"
                        : "Kansellert"}
                  </Badge>
                </div>
                {selectedBooking.status === "pending" && (
                  <div className="flex gap-2 pt-4">
                    <Button
                      className="flex-1 bg-green-600 text-white hover:bg-green-700"
                      onClick={() => updateBookingStatus(selectedBooking.id, "confirmed")}
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Bekreft
                    </Button>
                    <Button
                      variant="destructive"
                      className="flex-1"
                      onClick={() => updateBookingStatus(selectedBooking.id, "cancelled")}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Kanseller
                    </Button>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}

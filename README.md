# Ping Pong Garden

A court booking web app for Ping Pong Garden Berlin.

## Pages

- **`index.html`** — Landing page with hero, news feed, upcoming events, and navigation
- **`court-booking.html`** — Court booking interface

## Features

### Booking
- Visual 24h calendar grid across 3 courts
- Drag (desktop) or tap-and-hold then drag (mobile) to select a time slot
- Bookable hours: 7:00 AM – 11:00 PM
- Maximum 2-hour booking duration
- 30-min gap prevention between bookings

### Pricing
- Off-peak 07:00–10:00 — €10/h
- Standard 10:00–17:00 — €15/h
- Peak 17:00–23:00 — €20/h
- Live price shown during drag; breakdown in confirmation modal

### Players
- Add players to a booking by name
- Matches against registered member accounts
- Unknown names added as guests

### Payment
- 3-step flow: Review → Payment → Confirmation
- Saved card selection + new card entry
- Animated success screen

## Usage

Open `index.html` in any modern browser. No build step or server required — everything is plain HTML, CSS, and JavaScript.

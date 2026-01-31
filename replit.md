# Baba Banarasi Solo Scooter Darshan

A Varanasi spiritual tourism website for scooter darshan services.

## Overview

This is a React + Vite + TypeScript application featuring:
- Tailwind CSS for styling
- shadcn/ui component library
- React Router for navigation
- Spiritual-themed design system with Varanasi color palette

## Contact Information

- **Phone:** +91 79913 01043
- **Email:** anshumanjha3333@gmail.com
- **Instagram:** @baba_banarasi10

## Pricing

- **Half Day:** ₹999
- **Full Day (8 AM - 8 PM with 2 hour rest):** ₹1,999

## 13-Point Itinerary

**Morning (Assi Ghat to BHU):**
1. Assi Ghat
2. Tulsi Ghat
3. Durga Mata Mandir (Monkey Temple)
4. Tulsi Manas Mandir
5. Tridev Mandir
6. Mani Mandir (BHU)
7. Sankat Mochan (Hanuman)
8. BHU Vishwanath Temple

**Afternoon (Kabir Math to Ganga Aarti):**
9. Kabir Math
10. Bada Ganesh
11. Kal Bhairav (Guardian of Kashi)
12. Kashi Vishwanath (Golden Temple)
13. Ganga Aarti (Dashashwamedh Ghat)

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/pages` - Page components
  - `/lib` - Utility functions
- `/public` - Static assets
- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## Running the Project

The project runs via npm:
```bash
npm run dev
```

The development server runs on port 5000.

## Building for Production

```bash
npm run build
```

Static files are output to the `dist` directory.

## Recent Changes (Jan 31, 2026)

- Updated contact info (phone, email, Instagram)
- Updated pricing: Half Day ₹999, Full Day ₹1,999
- Added 13-point itinerary to Services section
- Fixed /locations route (created LocationsPage)
- Replaced "Foreigner" with "Bagpackerrs" throughout
- Rebuilt Locations page with Morning/Afternoon session groupings
- Added stock images for all 13 sacred locations (in src/assets/locations/)
- Removed Scooter Type selection from booking form
- Enhanced Testimonials with 12 reviews and "Show More" button
- Default booking duration is now Full Day

# Evivi

> Connecting people, local businesses and event professionals around gifts, celebrations and life's special moments.

## Overview

Evivi is a gifting and celebrations platform designed to make it easier for people to discover gifts, celebration services, and event professionals.

The platform brings together different participants within the gifting and celebrations ecosystem, including:

- Buyers looking for gifts and celebration experiences
- Sellers offering gifts and products
- Delivery partners supporting fulfilment
- Event planners providing planning and coordination services
- Event suppliers providing products and services for events

The current project focuses on establishing the frontend experience, introducing the different Evivi participant journeys, and preparing the foundation for future platform functionality.

---

## Project Status

**Status:** Frontend Development

The current application includes:

- Evivi landing page
- Buyer early access registration
- Seller registration
- Delivery partner registration
- Event planner registration
- Event supplier registration
- Responsive layouts
- Role specific experiences
- Registration forms
- Event service previews
- Consistent Evivi visual design

The platform is currently focused on the frontend experience. Backend services and production integrations will be introduced as development progresses.

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js | Application framework |
| React | User interface |
| JavaScript | Application development |
| Tailwind CSS | Styling and responsive layouts |
| Lucide React | Interface icons |
| Next/Image | Image optimisation |
| Next.js App Router | Routing and page structure |

---

## Project Structure

```text
src/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   │
│   ├── buyer/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   │
│   ├── seller/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   │
│   ├── delivery-partners/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   │
│   ├── event-planners/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   │
│   └── suppliers/
│       ├── layout.jsx
│       └── page.jsx
│
├── components/
│   └── registration/
│       ├── Field.jsx
│       ├── CustomSelect.jsx
│       ├── MultiSelect.jsx
│       ├── BuyerEarlyAccessForm.jsx
│       ├── SellerRegistrationForm.jsx
│       ├── DeliveryPartnerRegistrationForm.jsx
│       ├── EventPlannerRegistrationForm.jsx
│       └── EventSupplierRegistrationForm.jsx
│
└── data/
    └── registration.js
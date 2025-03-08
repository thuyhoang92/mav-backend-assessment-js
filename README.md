# Product API using Cloudflare Workers & Neon.tech

## Project Overview

This API fetches product data from a third-party API, processes/manipulates the data, and persists it into a Neon.tech PostgreSQL database. It's built using TypeScript, Drizzle ORM, and deployed as Cloudflare Workers.

---

## 📂 Project Structure

```
src/
├── api
│   └── products.ts   # Defines routes for product-related endpoints
├── controllers
│   └── productsController.ts   # Handles HTTP requests, calls services, and returns responses
├── services
│   └── productService.ts   # Business logic and database operations
├── db
│   ├── drizzle.ts   # Singleton database connection
│   └── schema.ts    # Database schema definitions
├── utils
│   ├── logger.ts    # Logging utility
│   └── validator.ts # Schema validation
├── types
│   └── index.ts     # Type definitions
└── index.ts        # Entry point of the application
```

---

## ⚙️ Technologies Used

- **Cloudflare Workers**: Serverless computing
- **Neon.tech**: Serverless PostgreSQL Database
- **Drizzle ORM**: Lightweight ORM for TypeScript
- **TypeScript**: Static type checking
- **Hono.js**: Minimalist framework
- **Zod**: Schema validation

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Wrangler CLI (`npm i -g wrangler`)

### Installation

1. Clone repository:

```bash
git clone https://github.com/thuyhoang92/mav-backend-assessment-js.git
cd mav-backend-assessment-js
npm install
```

2. Set environment variables:

Copy example env file:

```bash
cp .dev.vars.example .dev.vars
```

3. Local Development

```bash
npm run start
```

## 🔑 API Endpoints

### Insert Products

```http
GET /api/products
```
- Endpoint to insert products from a JSON mock API.

## Insert Products And Return Results

```http
POST /api/products
```
- Endpoint to insert products from a JSON mock API and return the result.

### Delete Product

```http
DELETE /api/products/:product_id
```
- Endpoint to delete a product by ID.

### Update Products

```http
PUT /api/products
```
- Endpoint to update all products from the database.

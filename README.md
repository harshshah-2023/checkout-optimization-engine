#  Citadel Flow — Payment Reliability & Optimization Platform

Citadel Flow is a **production-grade payment intelligence platform** designed to analyze, optimize, and visualize payment success across modern checkout systems.

It simulates how real payment gateways behave internally  including retries, failure classification, latency tracking, and real-time observability  without integrating directly with live bank networks.

This project demonstrates **how high-scale FinTech systems are actually built**, not just how payments are triggered.

---

##  What Problem Does Citadel Flow Solve?

In real payment systems:
- Transactions fail for many reasons (issuer issues, network errors, timeouts)
- Most failures are **recoverable**
- Gateways that don’t retry intelligently lose revenue
- Teams lack visibility into *why* payments fail

**Citadel Flow solves this by:**
- Applying state-machine-driven payment processing
- Classifying failures accurately
- Retrying only when retries make sense
- Tracking latency and success metrics
- Streaming live payment status to dashboards

---

##  Key Capabilities

###  Intelligent Payment Flow
- Deterministic payment state machine
- Retry logic based on failure type
- Idempotent request handling

###  Real-Time Metrics & Analytics
- Success rate
- Failure distribution
- Latency trends
- Historical event storage

###  Live Payment Updates
- WebSocket-based live status feed
- Dashboard updates without refresh

###  Production-Style Architecture
- Modular services
- Clear separation of concerns
- Designed for extensibility (UPI, NetBanking, Wallets)

---

##  System Architecture

Frontend (React + Tailwind)
↓
Backend API (Express.js)
↓
Payment Engine (State Machine + Retry Logic)
↓
PostgreSQL (Payments + Metrics)
↓
WebSocket Server (Live Updates)

yaml
Copy code

---

##  Tech Stack

### Backend
- Node.js (ES Modules)
- Express.js
- PostgreSQL
- Zod (request validation)
- WebSockets

### Frontend
- React (Vite)
- Tailwind CSS
- Recharts
- WebSocket client

---

##  Prerequisites

Ensure you have:
- Node.js 18+
- PostgreSQL 14+
- Git
- PowerShell / Terminal

---

##  Database Setup

### Create Database
```sql
CREATE DATABASE Citadel Flow;
Create Tables
sql
Copy code
CREATE TABLE payments (
  id UUID PRIMARY KEY,
  merchant_id UUID,
  amount BIGINT,
  currency TEXT,
  payment_method TEXT,
  status TEXT,
  failure_code TEXT,
  attempt_number INT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  settled_at TIMESTAMP
);

CREATE TABLE metrics_events (
  id SERIAL PRIMARY KEY,
  payment_id UUID,
  event_type TEXT,
  failure_code TEXT,
  latency_ms INT,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
⚙ Backend Setup
bash
Copy code
cd backend
npm install
.env
env
Copy code
PORT=4000

PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=your_password_here
PG_DATABASE=Citadel Flow
bash
Copy code
npm run dev

----

 Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs at:

arduino
Copy code
http://localhost:5173
🧪 Testing Payments (PowerShell)
Create Payment
powershell
Copy code
Invoke-RestMethod `
  -Method POST `
  -Uri "http://localhost:4000/api/payments" `
  -ContentType "application/json" `
  -Body '{
    "amount": 50000,
    "currency": "INR",
    "paymentMethod": "CARD",
    "card": {
      "last4": "4242",
      "network": "VISA",
      "issuer": "HDFC"
    }
  }'
Fetch Payment by ID
powershell
Copy code
Invoke-RestMethod http://localhost:4000/api/payments/<PAYMENT_ID>
📊 Dashboard
Open:

bash
Copy code
http://localhost:5173/dashboard
Includes:

KPI metrics

Success & failure charts

Latency trends

Live WebSocket updates

 Authentication
Login & signup are UI-only (prototype).
No real authentication is implemented by design.

 What This Project Does NOT Do
No real bank or card network integration

No money movement

No PCI handling

This mirrors real payment gateway internal systems, which are separate from external rails.

🎓 Why This Project Matters
This project demonstrates:

Real payment-system architecture

Failure-aware retries

Metrics-driven design

Production-grade backend patterns

Professional FinTech UI observability

📌 Future Enhancements
Refund engine

Settlement batching (T+1)

Multi-PSP routing

Auth & RBAC

Dockerized deployment

👤 Author
Built by Harsh Shah
Designed as a real-world FinTech system.
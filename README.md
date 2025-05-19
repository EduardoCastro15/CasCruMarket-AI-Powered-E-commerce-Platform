# 🛒 CasCruMarket – AI-Powered E-commerce Platform

CasCruMarket is a smart and modern e-commerce web application that leverages **AI** to enhance product discovery and customer experience. This project is designed as a monorepo using **TypeScript**, **Next.js**, and **React**, and it is fully deployable via **Vercel**.

## 🌟 Features

- 🧠 **AI-Powered Product Recommendations**  
  Suggests relevant products based on user preferences or natural language input using LLMs (e.g., GPT-4).

- 💬 **Smart Shopping Assistant (Chatbot)**  
  Helps users navigate the marketplace and get tailored product advice.

- ✨ **Review Analysis & Sentiment Detection**  
  Automatically summarizes customer reviews and highlights common opinions using AI.

- 📦 **Modern E-commerce UI**  
  Built with React, TailwindCSS (or ShadCN), and responsive design principles.

---

## 🧱 Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Framework    | Next.js + React + TypeScript   |
| Styling      | Tailwind CSS / ShadCN UI       |
| AI Services  | OpenAI API (GPT-4/3.5)         |
| Hosting      | Vercel                         |
| Data         | JSON dummy data (MVP)          |
| State Mgmt   | React Context or Zustand       |
| Auth (Future)| NextAuth or Clerk (optional)   |

---

## 🗂️ Monorepo Structure

```bash
cascrumarket/
├── apps/
│   └── web/             # Main frontend application
├── packages/
│   └── ui/              # Reusable UI components (optional)
│   └── lib-ai/          # AI utilities and API wrappers
├── public/              # Static assets
├── .env.local           # Local environment config
├── README.md
└── package.json

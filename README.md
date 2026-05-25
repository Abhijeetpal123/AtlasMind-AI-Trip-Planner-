# 🌍 AtlasMind — AI Trip Planner

AtlasMind is an AI-powered trip planning web app that helps users plan personalized trips through a conversational chatbot. Just tell it where you want to go, and it handles flights, hotels, and full itineraries in seconds.

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 (App Router) | Frontend + API Routes |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Clerk | Authentication |
| OpenAI API | AI Chatbot |
| Axios | API Calls |
| Lucide React | Icons |

---

## 📁 Project Structure

```
atlasmind/
├── app/
│   ├── _components/
│   │   ├── Header.tsx        # Navbar with logo, nav links, auth buttons
│   │   ├── Hero.tsx          # Landing page hero section
│   │   ├── ChatBot.tsx       # Main AI chat interface
│   │   └── EmptySection.tsx  # Shown when chat is empty
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── api/
│   │   └── aimodel/
│   │       └── route.ts      # OpenAI API route
│   ├── layout.tsx            # Root layout with ClerkProvider
│   ├── page.tsx              # Home page
│   └── globals.css
├── public/
│   ├── logo.svg
│   └── thumbnail.png
├── .env.local
└── middleware.ts
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/atlasmind.git
cd atlasmind
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# OpenAI
OPENAI_API_KEY=sk-your_openai_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Getting API Keys

### Clerk (Authentication)
1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Copy `Publishable Key` and `Secret Key` from the dashboard

### OpenAI
1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an account and go to API Keys
3. Click `Create new secret key` and copy it

---

## ✨ Features

- **AI Chatbot** — Conversational trip planner powered by OpenAI
- **Authentication** — Sign in / Sign up with Clerk
- **Smart Suggestions** — Quick prompt chips when chat is empty
- **Loading States** — Animated dots while AI is thinking
- **Destination Cards** — Popular destinations with weather & best time to visit
- **Responsive Design** — Works on all screen sizes

---

## 🤖 How the AI Works

The AI collects trip details one question at a time:

1. Starting location
2. Destination
3. Group size (Solo / Couple / Family / Friends)
4. Budget (Low / Medium / High)
5. Trip duration
6. Travel interests (Adventure, Food, Culture, etc.)
7. Special requirements

Once all details are collected, it returns a structured JSON with the complete trip plan.

---

## 🧠 Concepts Used (Interview Important)

| Concept | Where Used |
|---------|-----------|
| `useState` | Chat messages, loading state, user input |
| `async/await` | API calls to OpenAI |
| Conditional Rendering | Empty chat, loading dots, auth buttons |
| Props & Lifting State Up | EmptySection → ChatBot |
| API Routes (Next.js) | `/api/aimodel/route.ts` |
| Middleware | Clerk auth protection |
| Dynamic Class Names | Chat bubble styling (user vs AI) |

---

## 📸 Screenshots

> Add screenshots of your app here

---

## 🛣️ Roadmap

- [ ] Save trips to database
- [ ] Trip result / itinerary page
- [ ] Dark mode
- [ ] Blog section
- [ ] Pricing page

---

## 👨‍💻 Author

Built by **[Your Name]** — learning Next.js by building real projects.

---

## 📄 License

MIT License
"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code,
  Smartphone,
  Layers,
  Star,
  Heart,
  MessageSquare,
  ExternalLink,
  X,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Code is like humor. When you have to explain it, it's bad. — Cory House",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "Innovation distinguishes between a leader and a follower. — Steve Jobs",
  "Stay hungry, stay foolish. — Steve Jobs",
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "The best way to predict the future is to invent it. — Alan Kay",
  "Make it work, make it right, make it fast. — Kent Beck",
  "Don't comment bad code—rewrite it. — Brian W. Kernighan",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
  "The most important property of a program is that it accomplishes the intention of the programmer. — C.A.R. Hoare",
]

const reviews = [
  { name: "Chioma Obi", company: "CaCu Technologies", text: "Terfa delivered the SME management platform ahead of schedule. His ability to handle both mobile and backend simultaneously was invaluable.", stars: 5 },
  { name: "Yusuf Hassan", company: "Foodify9ja", text: "The WhatsApp bot Terfa built transformed our business. It went from concept to handling real transactions in 6 months. Exceptional execution.", stars: 5 },
  { name: "Aisha Patel", company: "Founder/Investor", text: "Smart developer who understands business. Terfa didn't just build features—he optimized for user behavior. His insights on UX were as valuable as the code.", stars: 5 },
  { name: "Ikechukwu Nwosu", company: "IESC Solutions", text: "Terfa mentored our junior team while shipping complex features. Rare combination of technical excellence and leadership. We'd hire him again immediately.", stars: 5 },
  { name: "Zainab Adeyemi", company: "PingBack User", text: "The omnichannel support system works flawlessly. It consolidated our Slack, WhatsApp, and email support into one clean dashboard. Game-changer for our team.", stars: 5 },
  { name: "Thomas Okafor", company: "Product Manager", text: "Terfa ships fast without cutting corners. His code is clean, scalable, and well-documented. Exactly what you want in a founding engineer.", stars: 5 },
]



export default function Portfolio() {
  const [activeQuote, setActiveQuote] = useState(0)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [chatbotStep, setChatbotStep] = useState<"menu" | "contact" | "review" | null>("menu")
  const [modalType, setModalType] = useState<"contact" | "review" | "endorse" | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [reviewStars, setReviewStars] = useState(0)
  const [customerCount, setCustomerCount] = useState(0)
  const [chatbotMessage, setChatbotMessage] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (customerCount < 23) {
      const timer = setTimeout(() => setCustomerCount(customerCount + 1), 50)
      return () => clearTimeout(timer)
    }
  }, [customerCount])

  const skills = [
    { name: "Python", color: "#3776AB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB" },
    { name: "React Native", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "Hono", color: "#FF6B00" },
    { name: "SvelteKit", color: "#FF3B00" },
    { name: "Docker", color: "#2496ED" },
    { name: "PostgreSQL", color: "#336791" },
  ]

  const projects = [
    {
      title: "CaCu",
      overview: "All-in-one business SME management platform with comprehensive invoicing, inventory management, expense tracking, and financial analytics.",
      problem: "SME owners struggled managing invoices, inventory, and expenses across multiple spreadsheets with no real-time insights.",
      solution: "Built an integrated dashboard where users can create invoices, track inventory, log expenses, and view financial analytics in one place.",
      features: "Invoice generation, real-time inventory tracking, expense categorization, financial reports, multi-location support, Stripe integration",
      technologies: [
        { name: "React", use: "Built responsive, dynamic UI for dashboard and forms. Used state management for real-time updates." },
        { name: "Node.js", use: "Created RESTful APIs for invoice processing, inventory management, and expense tracking." },
        { name: "PostgreSQL", use: "Stored business data with relational schemas for invoices, inventory, and transactions." },
        { name: "Stripe", use: "Integrated payment processing for online invoice payments." }
      ],
      challenges: "Handling concurrent updates to inventory when multiple users access the same items. Solved with optimistic locking and real-time sync.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      isCase: false,
    },
    {
      title: "Foodify9ja Bot",
      overview: "Revolutionary AI-powered WhatsApp bot that transforms grocery shopping by enabling browsing, purchasing, and delivery tracking without leaving WhatsApp.",
      problem: "Users in Nigeria struggled with traditional e-commerce—poor internet, complex checkouts, delivery tracking issues. WhatsApp was always available.",
      solution: "Built a conversational WhatsApp bot where users browse groceries, add to cart, make payments, and track deliveries through chat.",
      features: "Product search with NLP, shopping cart management, payment integration, real-time delivery tracking, order history, favorites",
      technologies: [
        { name: "Node.js", use: "Built WhatsApp bot server handling incoming messages, processing orders, and managing conversations." },
        { name: "WhatsApp API", use: "Integrated Twilio/WhatsApp Business API for message delivery and customer communication." },
        { name: "AI/ML", use: "Implemented NLP for product matching—users type 'rice 10kg' and bot understands intent and suggests products." },
        { name: "Redis", use: "Cached product catalog and user sessions for fast response times and reduced database queries." }
      ],
      challenges: "Building intuitive UX within WhatsApp's text-only interface. Customers needed guidance on commands. Solved by creating smart quick-reply buttons.",
      tags: ["Node.js", "WhatsApp API", "AI/ML", "Redis"],
      link: "#",
      isCase: true,
    },
    {
      title: "Sturdivv",
      overview: "Innovative study platform that transforms scattered notes into structured, comprehensive learning material with AI-powered organization and spaced repetition.",
      problem: "Students had disorganized notes scattered across notebooks and apps. They struggled to create effective study materials and track progress.",
      solution: "Platform where students upload notes, and AI organizes them into structured courses with auto-generated summaries, quizzes, and study schedules.",
      features: "Note upload and organization, AI-powered course generation, video integration, interactive quizzes, spaced repetition scheduling, progress tracking",
      technologies: [
        { name: "React", use: "Built interactive UI for note uploading, course viewing, quiz taking, and progress dashboards." },
        { name: "TypeScript", use: "Ensured type-safe frontend code for complex state management and API interactions." },
        { name: "AI", use: "Used OpenAI API to analyze notes, generate summaries, create quiz questions, and suggest study schedules." },
        { name: "PostgreSQL", use: "Stored users, notes, generated courses, quiz responses, and learning progress." }
      ],
      challenges: "Generating high-quality summaries from poorly structured notes. Solved by implementing multi-stage AI processing with validation.",
      tags: ["React", "TypeScript", "AI", "PostgreSQL"],
      link: "https://sturdivv.vercel.app",
      isCase: false,
    },
    {
      title: "PingBack",
      overview: "Enterprise omnichannel customer support platform consolidating conversations from X, Telegram, WhatsApp, Instagram, and web into a single inbox.",
      problem: "Support teams managed 5+ channels separately, missing messages, duplicating responses, and losing context across platforms.",
      solution: "Unified dashboard where all customer messages from different channels appear in one inbox with unified conversation threads.",
      features: "Multi-channel integration, unified inbox, team collaboration, message routing, conversation analytics, knowledge base, automation",
      technologies: [
        { name: "Next.js", use: "Built SSR UI with real-time updates for messages and team collaboration features." },
        { name: "TypeScript", use: "Maintained type safety across complex integrations with multiple third-party APIs." },
        { name: "WebSocket", use: "Implemented real-time message syncing so teams see new messages instantly across channels." },
        { name: "PostgreSQL", use: "Stored conversations, user data, team configurations, and analytics." }
      ],
      challenges: "Handling API rate limits from different platforms (WhatsApp, Telegram, X) while maintaining real-time delivery. Solved with intelligent queuing.",
      tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
      link: "https://pingback.live",
      isCase: false,
    },
    {
      title: "Theo AI",
      overview: "Autonomous AI support agent that manages customer conversations across multiple channels using business knowledge base and real-time integrations.",
      problem: "Support teams spent hours answering repetitive questions. Customers waited for responses. Knowledge scattered across docs and PDFs.",
      solution: "AI agent that reads business knowledge (PDFs, Notion, Google Drive), understands customer issues, and responds automatically 24/7 across channels.",
      features: "Knowledge base ingestion, intelligent message routing, autonomous responses, Slack/Discord integration, Shopify/Stripe customer context, human escalation",
      technologies: [
        { name: "AI/ML", use: "Used LLMs (GPT-4) to understand customer intent and generate context-aware responses based on business knowledge." },
        { name: "LLMs", use: "Fine-tuned language models on business documents to provide accurate, brand-aligned responses." },
        { name: "Integration APIs", use: "Connected to Shopify for order info, Stripe for payment status, Slack for team notifications, Discord for community support." },
        { name: "Node.js", use: "Built backend service orchestrating AI, integrations, and channel management." }
      ],
      challenges: "Ensuring AI responses align with brand voice and handles edge cases. Solved with prompt engineering and human review workflows.",
      tags: ["AI/ML", "LLMs", "Integration APIs", "Node.js"],
      link: "https://pingback.live/theo",
      isCase: true,
    },
    {
      title: "ClearOff",
      overview: "E-commerce marketplace enabling sustainable decluttering and resale of used items with secure transactions and built-in messaging.",
      problem: "People wanted to sell used items but faced friction with fragmented platforms, payment concerns, and shipping complexity.",
      solution: "Simple marketplace where users list items with photos, buyers browse and purchase securely, with built-in messaging and seller verification.",
      features: "Easy listing creation, secure payments, buyer-seller messaging, seller ratings, search and filters, shipping integration",
      technologies: [
        { name: "React", use: "Built intuitive UI for browsing items, creating listings, managing orders, and messaging." },
        { name: "Node.js", use: "Created APIs for listing management, transactions, messaging, and seller/buyer workflows." },
        { name: "Stripe", use: "Integrated payments to securely handle buyer payments and seller payouts." },
        { name: "PostgreSQL", use: "Stored listings, user profiles, transactions, messages, and ratings." }
      ],
      challenges: "Preventing fraudulent sellers and ensuring payment security. Solved with seller verification and escrow-like payment holds.",
      tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
      link: "https://clearoff.vercel.app",
      isCase: false,
    },
    {
      title: "heykaytay.live",
      overview: "Professional portfolio website showcasing 3+ years of full-stack expertise with interactive project modals, real-time customer counter, and AI-powered chatbot.",
      problem: "Needed a memorable, interactive portfolio to land top-tier opportunities and demonstrate full-stack and design capabilities.",
      solution: "Built a Notion-inspired portfolio with detailed project case studies, interactive modals, rotating quotes, and an AI mascot chatbot.",
      features: "Interactive project modals with detailed case studies, mascot chatbot with prebuilt commands, client reviews, tech stack showcase, real-time customer counter",
      technologies: [
        { name: "Next.js", use: "Built SSR website for optimal SEO and performance with App Router." },
        { name: "TypeScript", use: "Ensured type-safe component architecture and API interactions." },
        { name: "Tailwind CSS", use: "Styled with Tailwind for responsive, modern design while maintaining design system consistency." }
      ],
      challenges: "Creating an engaging, interactive experience that doesn't sacrifice performance or load time. Solved with lazy loading and optimized modals.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://heykaytay.live",
      isCase: false,
    },
  ]

  const experience = [
    {
      title: "Founding Fullstack Engineer",
      company: "PingBack",
      period: "July 2025 — Present",
      details: "Leading architectural decisions and core platform development. Building omnichannel support infrastructure using WebSockets and real-time databases. Implemented multi-channel integrations (WhatsApp, Telegram, X, Instagram, Web). Currently architecting Theo AI agent system with knowledge-base management and autonomous response generation.",
      learned: ["Omnichannel architecture", "Real-time systems", "AI/LLM integration", "SaaS scaling"],
      challenges: "Managing complexity of multiple chat APIs with different rate limits and message formats. Solved through abstraction layer and intelligent queuing system.",
    },
    {
      title: "Software / Research Engineer",
      company: "Foodify9ja",
      period: "Mar 2024 — Feb 2025",
      details: "Developed AI-powered WhatsApp bot for grocery e-commerce. Implemented NLP for product matching and order management. Built payment gateway integration and real-time delivery tracking system. Conducted user research to optimize shopping experience on messaging platform.",
      learned: ["WhatsApp Business API", "NLP basics", "Payment integrations", "Real-time tracking systems"],
      challenges: "Building intuitive UX within WhatsApp's limited interface. Solved through context-aware conversations and quick-reply buttons.",
    },
    {
      title: "Contract Mobile Developer",
      company: "CaCu Technologies",
      period: "Sep 2025 — Dec 2025",
      details: "Developed cross-platform mobile app for SME business management. Built inventory tracking, invoice generation, and expense management features. Optimized performance for low-end devices and offline functionality.",
      learned: ["React Native optimization", "Offline-first architecture", "Mobile UX patterns"],
      challenges: "Ensuring smooth performance on various Android devices. Implemented efficient data caching and lazy loading.",
    },
    {
      title: "Frontend Developer",
      company: "IESC Solutions Agency",
      period: "2023 — 2024",
      details: "Built responsive web interfaces for diverse client projects. Implemented complex UI components and animations. Mentored junior developers on React best practices and modern CSS techniques.",
      learned: ["Advanced CSS", "React performance", "Design systems", "Client communication"],
      challenges: "Managing multiple client projects with varying deadlines and requirements. Developed systematic approach to prioritization and scope management.",
    },
  ]

  const handleSendMessage = () => {
    const contactForm = document.getElementById("contact-email") as HTMLInputElement
    const contactMessage = document.getElementById("contact-message") as HTMLTextAreaElement
    if (contactForm?.value && contactMessage?.value) {
      window.location.href = `mailto:terfajohn45@gmail.com?subject=Portfolio Inquiry from ${contactForm.value}&body=${encodeURIComponent(contactMessage.value)}`
      setModalType(null)
      contactForm.value = ""
      contactMessage.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 relative">
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-24">
        {/* Header */}
        <header className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center border border-border text-5xl shadow-sm flex-shrink-0">
              <span role="img" aria-label="profile">
                👓
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Terfa John</h1>
                <div className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">@heykaytay • Fullstack Web & Mobile Developer</p>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Founding Fullstack Engineer at <span className="font-semibold">PingBack</span>. Fullstack web and mobile developer with 3+ years building production-grade applications. Specialized in React, React Native, Node.js, and AI infrastructure. I craft performant, scalable solutions that solve real business problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-[#333] hover:text-white transition-all bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/CyberSage5" target="_blank">
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-[#0077B5] hover:text-white transition-all bg-transparent"
                  asChild
                >
                  <Link href="https://linkedin.com/in/terfajohn" target="_blank">
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-red-500 hover:text-white transition-all bg-transparent"
                  onClick={() => setModalType("contact")}
                >
                  <Mail className="w-4 h-4 mr-2" /> Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-primary">{customerCount}+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">7</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Projects Built Below</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">3+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
        </header>

        {/* Experience */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-500" /> Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-border pl-6 relative pb-8 last:pb-0">
                <div className={`absolute w-3 h-3 rounded-full -left-[7px] top-1 ${idx === 0 ? "bg-primary" : "bg-secondary"}`}></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-foreground leading-relaxed text-sm">{exp.details}</p>
                  <div className="space-y-2 text-sm pt-2">
                    <p className="text-muted-foreground"><strong>Key Learnings:</strong> {exp.learned.join(", ")}</p>
                    <p className="text-muted-foreground"><strong>Challenge:</strong> {exp.challenges}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Code className="w-4 h-4 text-purple-500" /> Technology Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors text-center"
              >
                <div
                  className="w-8 h-8 rounded-lg mx-auto mb-2"
                  style={{ backgroundColor: `${skill.color}20`, borderLeft: `3px solid ${skill.color}` }}
                />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-orange-500" /> Featured Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(idx)}
                className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all shadow-sm cursor-pointer"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      {project.isCase && (
                        <Badge variant="secondary" className="text-xs">
                          Case Study
                        </Badge>
                      )}
                    </div>
                  </div>
                  {project.link !== "#" && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
                <p className="text-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-secondary px-2.5 py-1 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Review Stream */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-500" /> Client Reviews
          </h2>
          <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {reviews.map((rev, i) => (
                <div key={i} className="p-4 rounded-lg border border-border/50 bg-background/50 hover:bg-background/80 transition-colors">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{rev.name}</p>
                      <p className="text-xs text-muted-foreground">{rev.company}</p>
                    </div>
                    <div className="flex gap-0.5 flex-shrink-0">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-3 h-3 ${idx < rev.stars ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground italic">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Motivational Quotes */}
        <section className="py-16 text-center border-t border-border">
          <div className="max-w-2xl mx-auto">
            <div className="animate-in fade-in duration-1000">
              <p className="text-2xl italic font-serif text-muted-foreground leading-relaxed">
                "{quotes[activeQuote]}"
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 pb-12 border-t border-border text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Crafted with precision and passion. Always learning, always building.
          </p>
          <p className="text-xs text-muted-foreground font-mono">© 2025 heykaytay.live • terfajohn45@gmail.com</p>
        </footer>
      </main>

      {/* Mascot Chatbot */}
      <div className="fixed bottom-8 right-8 z-50">
        {isChatbotOpen && (
          <div className="mb-4 bg-background border border-border rounded-2xl shadow-xl p-4 w-80 animate-in slide-in-from-bottom-4 fade-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Kaytay</h3>
              <button
                onClick={() => {
                  setIsChatbotOpen(false)
                  setChatbotStep("menu")
                  setChatbotMessage("")
                }}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {chatbotStep === "menu" && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground mb-4">
                  {chatbotMessage || "Hey there! I'm Kaytay. Let's chat and I can help you get in touch, leave a review, or learn more about me."}
                </p>
                <button
                  onClick={() => setChatbotStep("contact")}
                  className="w-full text-left px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                >
                  💬 Contact Me
                </button>
                <button
                  onClick={() => setChatbotStep("review")}
                  className="w-full text-left px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                >
                  ⭐ Leave a Review
                </button>
              </div>
            )}

            {chatbotStep === "contact" && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground mb-4">
                  I'd love to hear from you! Choose how you'd like to connect:
                </p>
                <Button
                  className="w-full"
                  onClick={() => {
                    window.location.href = "mailto:terfajohn45@gmail.com"
                    setIsChatbotOpen(false)
                    setChatbotStep("menu")
                  }}
                >
                  <Mail className="w-4 h-4 mr-2" /> Email Me
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    window.open("https://wa.me/2348114219349", "_blank")
                    setIsChatbotOpen(false)
                    setChatbotStep("menu")
                  }}
                >
                  <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
                <button
                  onClick={() => {
                    setChatbotStep("menu")
                    setChatbotMessage("")
                  }}
                  className="w-full text-sm text-muted-foreground hover:text-foreground"
                >
                  ← Back
                </button>
              </div>
            )}

            {chatbotStep === "review" && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground mb-4">
                  I'd love your feedback! Rate your experience:
                </p>
                <div className="flex justify-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onClick={() => setReviewStars(s)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${s <= reviewStars ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
                      />
                    </button>
                  ))}
                </div>
                {reviewStars > 0 && (
                  <Button
                    className="w-full"
                    onClick={() => {
                      setModalType("review")
                      setIsChatbotOpen(false)
                      setChatbotStep("menu")
                      setChatbotMessage("Thank you for your honest review! I'll use this to keep improving myself and my services. 🙏")
                    }}
                  >
                    Continue to Review Form
                  </Button>
                )}
                <button
                  onClick={() => {
                    setChatbotStep("menu")
                    setChatbotMessage("")
                    setReviewStars(0)
                  }}
                  className="w-full text-sm text-muted-foreground hover:text-foreground"
                >
                  ← Back
                </button>
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => {
            setIsChatbotOpen(!isChatbotOpen)
            if (!isChatbotOpen) {
              setChatbotStep("menu")
              setChatbotMessage("")
            }
          }}
          className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all text-2xl"
        >
          👓
        </button>
      </div>

      {/* Project Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start gap-4">
            <DialogHeader className="flex-1">
              <DialogTitle className="text-2xl">
                {selectedProject !== null && projects[selectedProject]?.title}
              </DialogTitle>
              {selectedProject !== null && projects[selectedProject]?.isCase && (
                <Badge className="w-fit mt-2">Case Study</Badge>
              )}
            </DialogHeader>
            <button
              onClick={() => setSelectedProject(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 py-4 max-h-[calc(90vh-150px)] overflow-y-auto">
            {selectedProject !== null && (
              <>
                <div>
                  <h3 className="font-semibold mb-2">Overview</h3>
                  <p className="text-foreground leading-relaxed text-sm">
                    {projects[selectedProject]?.overview}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">The Problem</h3>
                  <p className="text-foreground leading-relaxed text-sm">
                    {projects[selectedProject]?.problem}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">The Solution</h3>
                  <p className="text-foreground leading-relaxed text-sm">
                    {projects[selectedProject]?.solution}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <p className="text-foreground leading-relaxed text-sm">
                    {projects[selectedProject]?.features}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Technologies Used</h3>
                  <div className="space-y-3">
                    {projects[selectedProject]?.technologies.map((tech, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-secondary/50 border border-border">
                        <p className="font-medium text-sm mb-1">{tech.name}</p>
                        <p className="text-xs text-muted-foreground">{tech.use}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Challenges & Solutions</h3>
                  <p className="text-foreground leading-relaxed text-sm">
                    {projects[selectedProject]?.challenges}
                  </p>
                </div>

                {projects[selectedProject]?.link !== "#" && (
                  <Button className="w-full" asChild>
                    <Link
                      href={projects[selectedProject]?.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-4 h-4 mr-2" /> View Live Project
                    </Link>
                  </Button>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Modals */}
      <Dialog open={modalType !== null} onOpenChange={() => setModalType(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {modalType === "contact" && "Send Me a Message"}
              {modalType === "review" && "Leave a Review"}
              {modalType === "endorse" && "Endorse Me"}
            </DialogTitle>
            <DialogDescription>
              {modalType === "contact" && "I usually respond within 24 hours. Your message will be sent directly to terfajohn45@gmail.com"}
              {modalType === "review" && "Share your experience working with me or using my projects."}
              {modalType === "endorse" && "Help boost my professional reputation with your kind words."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {modalType === "contact" && (
              <>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">Your Email</label>
                  <Input id="contact-email" placeholder="your@email.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell me about your project or inquiry..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full" onClick={handleSendMessage}>
                  <Mail className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </>
            )}

            {modalType === "review" && (
              <>
                {chatbotMessage ? (
                  <div className="py-4 text-center">
                    <p className="text-lg font-semibold mb-4">{chatbotMessage}</p>
                    <Button className="w-full" onClick={() => { setModalType(null); setChatbotMessage("") }}>
                      Close
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Rating</label>
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            key={s}
                            onClick={() => setReviewStars(s)}
                            className="transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-8 h-8 ${s <= reviewStars ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Name</label>
                      <Input placeholder="Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Review</label>
                      <Textarea placeholder="Share your experience..." className="min-h-[100px]" />
                    </div>
                    <Button className="w-full" onClick={() => {
                      setChatbotMessage("Thank you for your honest review! I'll use this to keep improving myself and my services. 🙏")
                    }}>
                      <Heart className="w-4 h-4 mr-2" /> Submit Review
                    </Button>
                  </>
                )}
              </>
            )}

            {modalType === "endorse" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name *</label>
                  <Input placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title / Company</label>
                  <Input placeholder="Senior Engineer @ Tech Corp" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Endorsement Message *</label>
                  <Textarea placeholder="What skills or qualities would you like to endorse Terfa for?" className="min-h-[100px]" />
                </div>
                <Button className="w-full" onClick={() => setModalType(null)}>
                  <Heart className="w-4 h-4 mr-2" /> Send Endorsement
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

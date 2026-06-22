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
  Plus,
  Star,
  Heart,
  MessageSquare,
  ExternalLink,
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
  { name: "Alex Chen", text: "Terfa is a brilliant engineer with exceptional problem-solving skills. His work on PingBack was transformative.", stars: 5 },
  { name: "Sarah Miller", text: "The Foodify9ja bot completely changed how we approach e-commerce. Highly recommended!", stars: 5 },
  { name: "John Okonkwo", text: "Exceptional full-stack capabilities across web and mobile. Delivered CaCu ahead of schedule.", stars: 5 },
  { name: "David Kim", text: "One of the best problem solvers I've worked with. Excellent communication and technical depth.", stars: 5 },
  { name: "Lisa Wong", text: "Theo AI integration was seamless. Terfa understands both technical complexity and business needs.", stars: 5 },
  { name: "Marcus Peters", text: "Worked with Terfa on Sturdivv. His React Native skills are world-class and his attention to UX is impeccable.", stars: 5 },
]

const reviews = [
  { name: "Alex Chen", text: "Terfa is a brilliant engineer with a keen eye for detail.", stars: 5 },
  { name: "Sarah Miller", text: "Amazing delivery on the Foodify9ja project. Highly recommended!", stars: 5 },
  { name: "John Doe", text: "Exceptional skills in both web and mobile development.", stars: 4 },
  { name: "David Kim", text: "One of the best problem solvers I've worked with.", stars: 5 },
  { name: "Lisa Wong", text: "Foodify9ja bot is a game changer for local grocery shopping.", stars: 5 },
]

export default function Portfolio() {
  const [activeQuote, setActiveQuote] = useState(0)
  const [isFabOpen, setIsFabOpen] = useState(false)
  const [modalType, setModalType] = useState<"contact" | "review" | "endorse" | null>(null)
  const [reviewStars, setReviewStars] = useState(0)
  const [customerCount, setCustomerCount] = useState(0)

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
      description:
        "All-in-one business SME management platform with comprehensive invoicing, inventory management, expense tracking, and financial analytics. Built with React + Node.js + PostgreSQL for seamless operations across multiple business locations.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      isCase: false,
    },
    {
      title: "Foodify9ja Bot",
      description:
        "Revolutionary AI-powered WhatsApp bot that transforms grocery shopping. Users browse products, manage carts, process payments, and track deliveries without leaving WhatsApp. Integrated with payment providers and real-time delivery tracking. Custom NLP for product search and order management.",
      tags: ["Node.js", "WhatsApp API", "AI/ML", "Redis"],
      link: "#",
      isCase: true,
    },
    {
      title: "Sturdivv",
      description:
        "Innovative study platform that transforms scattered notes into structured, comprehensive learning material. Features AI-powered content organization, video integration, interactive quizzes, and spaced repetition algorithms. Helps students learn faster with personalized study paths.",
      tags: ["React", "TypeScript", "AI", "PostgreSQL"],
      link: "https://sturdivv.vercel.app",
      isCase: false,
    },
    {
      title: "PingBack",
      description:
        "Enterprise omnichannel customer support platform consolidating conversations from X, Telegram, WhatsApp, Instagram, and web widgets into a single inbox. Features real-time notifications, team collaboration, conversation routing, and comprehensive analytics. Used by 23+ businesses globally.",
      tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
      link: "https://pingback.live",
      isCase: false,
    },
    {
      title: "Theo AI",
      description:
        "Autonomous AI support agent powered by PingBack, managing customer conversations across multiple channels. Knowledge-base powered by business documents (PDFs, PPTs, Markdown, Google Drive, Notion). Integrated with Slack, Discord, Shopify, and Stripe for comprehensive customer context. Delivers instant, accurate responses 24/7.",
      tags: ["AI/ML", "LLMs", "Integration APIs", "Node.js"],
      link: "https://pingback.live/theo",
      isCase: true,
    },
    {
      title: "ClearOff",
      description:
        "E-commerce marketplace for sustainable decluttering and resale. Users easily list used items with photos and descriptions, buyers browse and purchase, with built-in messaging and secure transactions. Features rating system, seller verification, and eco-friendly packaging recommendations.",
      tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
      link: "https://clearoff.vercel.app",
      isCase: false,
    },
    {
      title: "heykaytay.live",
      description:
        "Professional portfolio website showcasing 3+ years of full-stack development expertise. Clean, Notion-inspired design with interactive modals for contact, reviews, and endorsements. Features real-time customer counter, rotating motivational quotes, and detailed project case studies.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://heykaytay.live",
      isCase: false,
    },
  ]

  const experience = [
    {
      title: "Founding Fullstack Engineer",
      company: "PingBack",
      period: "Feb 2025 — Present",
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
                Founding Fullstack Engineer at <span className="font-semibold">PingBack</span>. Building innovative omnichannel customer support solutions with 3+ years of full-stack expertise across React, React Native, Node.js, and cloud infrastructure. I turn complex problems into elegant, scalable solutions.
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
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Projects Built</p>
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
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all shadow-sm"
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
                      className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
                <p className="text-foreground leading-relaxed mb-4">{project.description}</p>
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

        {/* CTA Section */}
        <section className="py-12 text-center border-t border-border">
          <h2 className="text-2xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Let&apos;s talk about how I can help bring your vision to life.
          </p>
          <Button
            size="lg"
            className="rounded-full"
            onClick={() => setModalType("contact")}
          >
            <Mail className="w-4 h-4 mr-2" /> Get in Touch
          </Button>
        </section>

        {/* Footer */}
        <footer className="pt-10 pb-12 border-t border-border text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Crafted with precision and passion. Always learning, always building.
          </p>
          <p className="text-xs text-muted-foreground font-mono">© 2025 heykaytay.live • terfajohn45@gmail.com</p>
        </footer>
      </main>

      {/* Floating Action Menu */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex flex-col items-center gap-3">
          {isFabOpen && (
            <div className="flex flex-col gap-2 bg-background border border-border p-2 rounded-2xl shadow-xl animate-in slide-in-from-bottom-4 fade-in duration-200">
              <button
                onClick={() => {
                  setModalType("contact")
                  setIsFabOpen(false)
                }}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary rounded-xl text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-red-500" /> Contact Me
              </button>
              <button
                onClick={() => {
                  setModalType("review")
                  setIsFabOpen(false)
                }}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary rounded-xl text-sm font-medium transition-colors"
              >
                <Star className="w-4 h-4 text-yellow-500" /> Leave a Review
              </button>
              <button
                onClick={() => {
                  setModalType("endorse")
                  setIsFabOpen(false)
                }}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary rounded-xl text-sm font-medium transition-colors"
              >
                <Heart className="w-4 h-4 text-pink-500" /> Endorse Me
              </button>
            </div>
          )}
          <button
            onClick={() => setIsFabOpen(!isFabOpen)}
            className={`w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all ${isFabOpen ? "rotate-45" : ""}`}
          >
            <Plus className="w-7 h-7" />
          </button>
        </div>
      </div>

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
                <Button className="w-full" onClick={() => setModalType(null)}>
                  <Heart className="w-4 h-4 mr-2" /> Submit Review
                </Button>
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

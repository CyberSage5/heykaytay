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
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const quotes = [
  "The only way to do great work is to love what you do.",
  "First, solve the problem. Then, write the code.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency.",
  "Innovation distinguishes between a leader and a follower.",
  "Stay hungry, stay foolish.",
  "Talk is cheap. Show me the code.",
  "Programming is the art of telling another human being what one wants the computer to do.",
  "The best way to predict the future is to invent it.",
  "Make it work, make it right, make it fast.",
  "Knowledge is power. Information is liberating.",
  "In theory, there is no difference between theory and practice. In practice, there is.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    { name: "Python", color: "#3776AB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "React", color: "#61DAFB" },
    { name: "React Native", color: "#61DAFB" },
    { name: "Expo", color: "#000020" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "MySQL", color: "#4479A1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Supabase", color: "#3ECF8E" },
  ]

  const projects = [
    {
      title: "Foodify9ja Bot",
      description:
        "An AI-powered WhatsApp bot for grocery shopping that helps users find and order groceries seamlessly.",
      tags: ["AI", "WhatsApp API", "Node.js"],
      link: "#",
    },
    {
      title: "This Portfolio",
      description: "A world-class Notion-style portfolio designed to be highly hirable and intuitive.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://heykaytay.live",
    },
    {
      title: "FinTrack AI",
      description: "Comprehensive wealth management platform with AI-driven budget insights.",
      tags: ["Next.js", "Supabase", "AI"],
      link: "#",
    },
    {
      title: "HealthConnect",
      description: "Cross-platform mobile application for remote patient monitoring.",
      tags: ["React Native", "Expo", "Node.js"],
      link: "#",
    },
    {
      title: "EcoSwap",
      description: "Sustainable peer-to-peer commerce platform for carbon-neutral shipping.",
      tags: ["React", "Python", "MySQL"],
      link: "#",
    },
    {
      title: "Tenski AI Core",
      description: "Foundational software engineering for AI-driven enterprise solutions.",
      tags: ["AI", "TypeScript", "Next.js"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 relative">
      <main className="max-w-[700px] mx-auto px-6 py-24 space-y-20">
        {/* Header */}
        <header className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center border border-border text-4xl shadow-sm">
              <span role="img" aria-label="profile">
                🤓
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight">Terfa John</h1>
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  <span className="ml-4 text-[10px] text-green-600 font-medium uppercase tracking-wider absolute left-0 top-[-2px] whitespace-nowrap">
                    Active
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground mt-0.5">@heykaytay</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-balance">
              Founding Software Engineer at <span className="font-medium text-foreground">Tenski.ai</span>. Software
              Solutions Developer crafting elite web and mobile experiences with 3+ years of expertise.
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
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                onClick={() => setModalType("contact")}
              >
                <Mail className="w-4 h-4 mr-2 text-red-500" /> Contact
              </Button>
            </div>
          </div>
        </header>

        {/* Experience */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-500" /> Experience
          </h2>
          <div className="space-y-10">
            <div className="group border-l-2 border-border pl-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">Founding Software Engineer @ Tenski.ai</h3>
                <span className="text-xs text-muted-foreground font-mono">Nov 2025 — Present</span>
              </div>
            </div>
            <div className="group border-l-2 border-border pl-6 relative">
              <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-1"></div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">Software / Research Engineer @ Foodify9ja</h3>
                <span className="text-xs text-muted-foreground font-mono">Mar 2024 — Feb 2025</span>
              </div>
            </div>
            <div className="group border-l-2 border-border pl-6 relative">
              <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-1"></div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">Contract Mobile Dev @ CaCu Technologies</h3>
                <span className="text-xs text-muted-foreground font-mono">Sep 2025 — Dec 2025</span>
              </div>
            </div>
            <div className="group border-l-2 border-border pl-6 relative">
              <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-1"></div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium">Frontend Developer @ IESC Agency</h3>
                <span className="text-xs text-muted-foreground font-mono">2023 — 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Code className="w-4 h-4 text-purple-500" /> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="outline"
                style={{ borderColor: `${skill.color}40`, borderLeft: `3px solid ${skill.color}` }}
                className="px-3 py-1 font-medium text-xs bg-secondary/30"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-orange-500" /> Selected Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                className="block p-5 rounded-xl border border-border bg-card/50 hover:bg-accent hover:border-primary/20 transition-all group shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-secondary px-1.5 py-0.5 rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Review Stream */}
        <section className="space-y-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-500" /> Reviews
          </h2>
          <div className="relative overflow-hidden p-6 rounded-2xl border border-border bg-secondary/20 backdrop-blur-sm h-32 flex items-center">
            <div className="animate-marquee space-y-4 w-full">
              {reviews.map((rev, i) => (
                <div key={i} className="flex items-center gap-4 py-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium italic">"{rev.text}"</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold text-muted-foreground">— {rev.name}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-2.5 h-2.5 ${idx < rev.stars ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Motivational Quotes */}
        <section className="py-12 text-center border-t border-border">
          <div className="max-w-[500px] mx-auto min-h-[60px] flex items-center justify-center">
            <p className="text-lg italic font-serif text-muted-foreground animate-in fade-in duration-1000">
              "{quotes[activeQuote]}"
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 pb-12 border-t border-border flex flex-col items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">Built with elite precision by Terfa John</p>
          <p className="text-xs text-muted-foreground">© 2025 heykaytay.live • terfajohn45@gmail.com</p>
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {modalType === "contact" && "Contact Terfa John"}
              {modalType === "review" && "Leave a Review"}
              {modalType === "endorse" && "Endorse Me"}
            </DialogTitle>
            <DialogDescription>
              {modalType === "contact" && "Send a direct message. I usually respond within 24 hours."}
              {modalType === "review" && "Share your experience working with me."}
              {modalType === "endorse" && "I appreciate your support in building my professional reputation."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {modalType === "contact" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Reason for Contact</label>
                  <Textarea placeholder="How can I help you today?" className="min-h-[100px]" />
                </div>
                <Button className="w-full" onClick={() => setModalType(null)}>
                  Send Message
                </Button>
              </>
            )}

            {modalType === "review" && (
              <>
                <div className="flex justify-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button key={s} onClick={() => setReviewStars(s)}>
                      <Star
                        className={`w-8 h-8 ${s <= reviewStars ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                      />
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Review Text</label>
                  <Textarea placeholder="Write your feedback..." className="min-h-[100px]" />
                </div>
                <Button className="w-full" onClick={() => setModalType(null)}>
                  Submit Review
                </Button>
              </>
            )}

            {modalType === "endorse" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company / Role</label>
                  <Input placeholder="Tech Lead @ Company" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Endorsement Note</label>
                  <Textarea placeholder="Terfa is excellent at..." className="min-h-[100px]" />
                </div>
                <Button className="w-full" onClick={() => setModalType(null)}>
                  Endorse
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: "Task Organization",
      description: "Organize tasks with categories, tags, and custom fields to fit your workflow.",
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Priority Levels",
      description: "Set priority levels to focus on what matters most and never miss important deadlines.",
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "Share tasks and projects with team members for seamless collaboration.",
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Reminders & Notifications",
      description: "Never miss a deadline with customizable reminders and notifications.",
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
    {
      title: "Progress Tracking",
      description: "Track your progress with visual charts and statistics to stay motivated.",
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Cross-Platform Sync",
      description: "Access your tasks from anywhere with seamless syncing across all your devices.",
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
  ]

  const testimonials = [
    {
      quote:
        "TaskMaster has completely transformed how I manage my daily tasks. The interface is intuitive and the customization options are exactly what I needed.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "As a project manager, I've tried dozens of task management tools. TaskMaster stands out with its powerful features and clean design. It's now essential to our team's workflow.",
      author: "Michael Chen",
      role: "Project Manager",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "The collaboration features in TaskMaster have improved our team's productivity by 40%. We can now coordinate seamlessly across departments.",
      author: "Emily Rodriguez",
      role: "Team Lead",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <CheckCircle className="h-6 w-6 text-primary" />
            <span>TaskMaster</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
              Login
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden container py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/login"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Button asChild onClick={() => setMobileMenuOpen(false)}>
                <Link href="/signup">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master Your Tasks, <br className="hidden sm:inline" />
                    <span className="text-primary">Master Your Life</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    TaskMaster helps you organize, prioritize, and complete your tasks efficiently. Stay focused on what
                    matters most and achieve your goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    onClick={() => {
                      toast("Welcome to TaskMaster!", {
                        description: "You're on your way to better productivity.",
                      })
                    }}
                  >
                    <Link href="/signup">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      toast("Watch Demo", {
                        description: "Learn how TaskMaster can transform your productivity.",
                      })
                    }}
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="TaskMaster Dashboard"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="container mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: "Active Users", value: "50,000+" },
                { label: "Tasks Completed", value: "10M+" },
                { label: "Time Saved", value: "1M+ hours" },
                { label: "Customer Satisfaction", value: "4.9/5" },
              ].map((stat, i) => (
                <div key={i} className="bg-background rounded-lg border p-4 text-center shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Maximum Productivity
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                TaskMaster comes packed with all the tools you need to organize your work and life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => {
                    toast(feature.title, {
                      description: feature.description,
                    })
                  }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground flex-1">{feature.description}</p>
                  <Button
                    variant="ghost"
                    className="mt-4 self-start p-0"
                    onClick={(e) => {
                      e.stopPropagation()
                      toast(`Learn more about ${feature.title}`, {
                        description: "Detailed documentation is available in our knowledge base.",
                      })
                    }}
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How TaskMaster Works</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                A simple yet powerful workflow to help you stay organized and productive.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border transform -translate-x-1/2 md:block hidden"></div>

              <div className="space-y-12 relative">
                {[
                  {
                    title: "Create Tasks",
                    description:
                      "Quickly add tasks with detailed information including due dates, priority levels, and categories.",
                    image:
                      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                  },
                  {
                    title: "Organize & Prioritize",
                    description:
                      "Group tasks into projects, set priorities, and organize your workflow in a way that makes sense for you.",
                    image:
                      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                  },
                  {
                    title: "Track Progress",
                    description:
                      "Monitor your progress with visual indicators and statistics to stay motivated and on track.",
                    image:
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                  },
                  {
                    title: "Complete & Celebrate",
                    description:
                      "Mark tasks as complete, review your accomplishments, and celebrate your productivity.",
                    image:
                      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="flex-1 md:text-right">
                      <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                        {i + 1}
                      </div>
                      <div className="md:hidden flex items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                          {i + 1}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <h3 className="text-xl font-bold hidden md:block">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                      <Button
                        variant="link"
                        className="mt-2 p-0"
                        onClick={() => {
                          toast(step.title, {
                            description: "Click to learn more about this step in our detailed guide.",
                          })
                        }}
                      >
                        Learn more
                      </Button>
                    </div>
                    <div className="flex-1">
                      <div className="rounded-xl overflow-hidden border shadow-sm">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Loved by Productive People
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                See what our users have to say about how TaskMaster has transformed their productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-background rounded-xl border p-6 shadow-sm">
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.quote}</p>
                  <div className="flex items-center mt-6">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                onClick={() => {
                  toast("Success Stories", {
                    description: "Read more success stories from our happy customers.",
                  })
                }}
              >
                Read More Success Stories
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that fits your needs. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Basic",
                  price: "$9",
                  description: "Perfect for individuals and small projects",
                  features: [
                    "Unlimited tasks",
                    "5 projects",
                    "Basic priority levels",
                    "Email reminders",
                    "7-day history",
                  ],
                  cta: "Get Started",
                  popular: false,
                },
                {
                  name: "Pro",
                  price: "$19",
                  description: "Ideal for professionals and growing teams",
                  features: [
                    "Everything in Basic",
                    "Unlimited projects",
                    "Advanced priority system",
                    "Team collaboration (up to 5)",
                    "Recurring tasks",
                    "30-day history",
                    "API access",
                  ],
                  cta: "Get Started",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "$49",
                  description: "For organizations with advanced needs",
                  features: [
                    "Everything in Pro",
                    "Unlimited team members",
                    "Advanced analytics",
                    "Custom integrations",
                    "Dedicated support",
                    "SSO authentication",
                    "Unlimited history",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`flex flex-col p-6 bg-background rounded-xl border shadow-sm ${plan.popular ? "ring-2 ring-primary relative" : ""
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={plan.popular ? "bg-primary hover:bg-primary/90" : ""}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => {
                      if (plan.name === "Enterprise") {
                        toast("Contact Sales", {
                          description: "Our team will reach out to discuss your specific needs.",
                        })
                      } else {
                        toast(`${plan.name} Plan Selected`, {
                          description: "You're on your way to better productivity!",
                        })
                      }
                    }}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">All plans include a 14-day free trial. No credit card required.</p>
              <div className="mt-4 flex justify-center space-x-4">
                <Button
                  variant="link"
                  onClick={() => {
                    toast("FAQ", {
                      description: "Find answers to commonly asked questions about our pricing and features.",
                    })
                  }}
                >
                  Frequently Asked Questions
                </Button>
                <Button
                  variant="link"
                  onClick={() => {
                    toast("Compare Plans", {
                      description: "See a detailed comparison of all plan features.",
                    })
                  }}
                >
                  Compare Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Master Your Tasks?</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-primary-foreground/80 md:text-xl">
              Join thousands of productive individuals and teams who use TaskMaster every day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  toast("Welcome to TaskMaster!", {
                    description: "You're on your way to better productivity.",
                  })
                }}
              >
                Start Your Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => {
                  toast("Schedule a Demo", {
                    description: "Our team will show you how TaskMaster can work for your specific needs.",
                  })
                }}
              >
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-4 text-primary-foreground/80">No credit card required. 14-day free trial.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>TaskMaster</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-xs">
                TaskMaster helps you organize, prioritize, and complete your tasks efficiently.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      toast(social, {
                        description: `Follow us on ${social} for updates and productivity tips.`,
                      })
                    }}
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "Integrations", "Changelog", "Roadmap"].map((item, i) => (
                  <li key={i}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground hover:text-foreground"
                      onClick={() => {
                        toast(item, {
                          description: `Learn more about our ${item.toLowerCase()}.`,
                        })
                      }}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Tutorials", "Blog", "Support", "API"].map((item, i) => (
                  <li key={i}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground hover:text-foreground"
                      onClick={() => {
                        toast(item, {
                          description: `Access our ${item.toLowerCase()} resources.`,
                        })
                      }}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Careers", "Contact", "Privacy", "Terms"].map((item, i) => (
                  <li key={i}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground hover:text-foreground"
                      onClick={() => {
                        toast(item, {
                          description: `Learn more about our company's ${item.toLowerCase()} information.`,
                        })
                      }}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TaskMaster. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => {
                  toast("Privacy Policy", {
                    description: "Read our privacy policy to understand how we protect your data.",
                  })
                }}
              >
                Privacy Policy
              </Button>
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => {
                  toast("Terms of Service", {
                    description: "Read our terms of service to understand your rights and responsibilities.",
                  })
                }}
              >
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


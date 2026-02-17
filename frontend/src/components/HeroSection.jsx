import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const HeroSection = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: TrendingUp, value: "3x", label: "More Leads" },
    { icon: Sparkles, value: "95%", label: "Accuracy" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
      data-testid="hero-section"
    >
      {/* Background glow */}
      <div className="hero-glow top-1/4 -right-40 opacity-50" />
      <div className="hero-glow bottom-1/4 -left-40 opacity-30" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/5"
                data-testid="hero-badge"
              >
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                AI-Powered Lead Generation
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              data-testid="hero-title"
            >
              Turn Visitors Into{" "}
              <span className="text-primary">Qualified Leads</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
              data-testid="hero-description"
            >
              Rixly uses advanced AI to identify, score, and convert your
              website visitors into high-quality leads automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                size="lg"
                className="rounded-full font-medium text-lg px-8 glow-primary glow-primary-hover btn-press"
                data-testid="hero-get-started"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-medium text-lg px-8 btn-press"
                data-testid="hero-book-demo"
                onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3"
                  data-testid={`hero-stat-${index}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative perspective-1000">
              <motion.div
                initial={{ rotateY: 15, rotateX: 5 }}
                animate={{ rotateY: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Dashboard mockup */}
                <div className="bg-card p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  
                  {/* Mock dashboard content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="font-heading font-semibold text-lg">Lead Dashboard</div>
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                        Live
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "New Leads", value: "247" },
                        { label: "Qualified", value: "189" },
                        { label: "Converted", value: "72" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="bg-muted/50 rounded-lg p-4 text-center"
                        >
                          <div className="font-heading font-bold text-2xl text-primary">
                            {item.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mock chart */}
                    <div className="bg-muted/30 rounded-lg p-4 h-40 flex items-end gap-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map(
                        (height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                            className="flex-1 bg-primary/80 rounded-t"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating notification */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">New Lead!</div>
                      <div className="text-xs text-muted-foreground">
                        Score: 92/100
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Chen",
    role: "Founder at TechFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "Rixly transformed our lead generation. We went from 50 to 200 qualified leads per month within 3 months. The AI scoring is incredibly accurate.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "VP Sales at GrowthX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content:
      "The best investment we've made this year. Our sales team now focuses only on high-quality leads. Conversion rates are up 40%.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "Setup took 15 minutes and we saw results the same day. The integrations with our existing CRM made adoption seamless.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO at StartupLab",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content:
      "We tried 5 different lead gen tools before Rixly. Nothing comes close. The AI actually understands buyer intent.",
    rating: 5,
  },
  {
    name: "Michael Park",
    role: "Head of Growth at ScaleUp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content:
      "Rixly pays for itself 10x over. Our cost per lead dropped by 60% while quality improved significantly.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Sales Manager at B2B Corp",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content:
      "The real-time alerts are a game changer. We reach out to hot leads within minutes instead of days.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            data-testid="testimonials-title"
          >
            Loved by Growing Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses using Rixly to accelerate their growth.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling testimonials */}
        <div className="flex animate-marquee">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="testimonial-card flex-shrink-0 mx-3"
              data-testid={`testimonial-card-${index % testimonials.length}`}
            >
              <div className="bg-card border border-border/50 rounded-xl p-6 h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

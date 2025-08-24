import { Code, Wrench, Gamepad2, Network } from "lucide-react";

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Hands-on Workshops",
      description: "Learn PCB design, microcontroller programming, 3D printing, and advanced electronics through interactive sessions.",
      color: "primary"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Project Development",
      description: "Work on real-world projects from IoT devices to robotics, guided by experienced mentors and industry professionals.",
      color: "secondary"
    },
    {
      icon: <Gamepad2 className="h-12 w-12" />,
      title: "Competitions",
      description: "Participate in national and international competitions, hackathons, and innovation challenges to showcase your skills.",
      color: "accent"
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Industry Networking",
      description: "Connect with industry leaders, attend tech talks, and build professional relationships for your future career.",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover opportunities to grow, learn, and innovate in the exciting world of electronics and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl glass neon-border p-8 text-center hover:shadow-glow-primary transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`text-${item.color} mb-6 flex justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative border animation */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
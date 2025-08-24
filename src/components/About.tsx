import { Cpu, Users, Trophy, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Innovation Lab",
      description: "State-of-the-art facilities with latest tools and equipment for prototyping and development."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Connect with like-minded individuals passionate about electronics and technology."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Competitions",
      description: "Participate in hackathons, robotics competitions, and innovation challenges."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Learning",
      description: "Workshops, seminars, and hands-on sessions led by industry experts and faculty."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ElectroNexus is a vibrant community of electronics enthusiasts, innovators, and future engineers. 
            We bring together students passionate about technology to learn, create, and push the boundaries 
            of what's possible in the world of electronics and engineering.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to foster innovation, collaboration, and learning through hands-on projects, 
            workshops, competitions, and real-world applications that prepare our members for the future 
            of technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass neon-border p-6 rounded-xl hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
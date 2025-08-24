import { Cpu, Users, Trophy, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Hardware & IoT",
      description: "Work with Arduino, Raspberry Pi, ESP32, STM microcontrollers, drones, and IoT systems."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "25 Years Legacy",
      description: "Oldest technical club at DA-IICT with Silver Jubilee celebration and proven track record."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Competitions",
      description: "Electrothon, RoboClash, I.Bot racing, and participation in Robofest Gujarat state competitions."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Real Projects",
      description: "Build drones, battle bots, IoT systems, and automation projects with real-world impact."
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
            The Electronics Hobby Club (EHC), established in 2001, is the oldest and most dynamic technical 
            club at DA-IICT. With over two decades of legacy and currently celebrating our Silver Jubilee 
            (25 years), we've been a hub for innovation, creativity, and technical excellence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to ignite curiosity in electronics, robotics, and emerging technologies, empowering 
            students to learn by doing, build impactful projects, and collaborate with like-minded innovators 
            through hands-on experience beyond classrooms.
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
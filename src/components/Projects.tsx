import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ESP32-Based Drone & Controller",
      description: "Lightweight and cost-effective wireless platform for drone control and communication.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["ESP32", "Drone", "Wireless"],
      featured: true
    },
    {
      title: "Air Quality Monitoring with Drone",
      description: "Arduino-based system using MQ135/PMS sensors for real-time environmental monitoring.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      tags: ["Arduino", "Sensors", "Environmental"],
      featured: false
    },
    {
      title: "Automatic Safety Braking System",
      description: "Collision-avoidance prototype using sensors and actuators for vehicle safety.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
      tags: ["Safety", "Automation", "Sensors"],
      featured: true
    },
    {
      title: "Client-Server Chat using ESP32",
      description: "Real-time IoT communication project demonstrating wireless data transmission protocols.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      tags: ["ESP32", "IoT", "Communication"],
      featured: false
    },
    {
      title: "3D Printed Mini Battle Bot",
      description: "Remotely controlled combat robot using Blynk IoT platform for wireless operation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      tags: ["3D Printing", "Robotics", "Blynk IoT"],
      featured: true
    },
    {
      title: "STM32 Microcontroller Projects",
      description: "Advanced embedded systems using STM32 for real-time control and processing applications.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      tags: ["STM32", "Embedded", "Real-time"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-6">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore innovative projects developed by our talented members, showcasing creativity and technical excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl glass neon-border transition-all duration-500 transform hover:scale-105 animate-slide-up ${
              project.featured ? 'lg:col-span-1' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Automation",
      description: "IoT-based home automation system with voice control and mobile app integration.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      tags: ["IoT", "Arduino", "Mobile App"],
      featured: true
    },
    {
      title: "Autonomous Robot",
      description: "Self-navigating robot with computer vision and obstacle avoidance capabilities.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["Robotics", "AI", "Computer Vision"],
      featured: false
    },
    {
      title: "Wireless Power Transfer",
      description: "Efficient wireless charging system for multiple devices using electromagnetic induction.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      tags: ["Power Electronics", "Wireless", "Efficiency"],
      featured: true
    },
    {
      title: "Smart Agriculture Monitor",
      description: "Real-time monitoring system for soil moisture, temperature, and crop health analytics.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      tags: ["Agriculture", "Sensors", "Data Analytics"],
      featured: false
    },
    {
      title: "Electric Vehicle Charger",
      description: "Fast-charging station with smart grid integration and renewable energy support.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
      tags: ["EV Technology", "Smart Grid", "Green Energy"],
      featured: true
    },
    {
      title: "Gesture Control Interface",
      description: "Hand gesture recognition system for controlling devices without physical contact.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      tags: ["Machine Learning", "Sensors", "HCI"],
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

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="glow" size="lg">
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Club President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about IoT and embedded systems with 3+ years of experience in electronics design.",
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@electonexus.com"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b056b6e0?w=300&h=300&fit=crop&crop=face",
      bio: "Robotics enthusiast and AI researcher, leading our autonomous systems projects.",
      social: {
        github: "#",
        linkedin: "#",
        email: "sarah@electonexus.com"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Hardware Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "PCB design expert and power electronics specialist with industry experience.",
      social: {
        github: "#",
        linkedin: "#",
        email: "marcus@electonexus.com"
      }
    },
    {
      name: "Emily Wong",
      role: "Software Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer specializing in IoT applications and embedded programming.",
      social: {
        github: "#",
        linkedin: "#",
        email: "emily@electonexus.com"
      }
    },
    {
      name: "David Kim",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Organizing workshops and competitions, connecting students with industry professionals.",
      social: {
        github: "#",
        linkedin: "#",
        email: "david@electonexus.com"
      }
    },
    {
      name: "Lisa Zhang",
      role: "Research Head",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "PhD candidate in electrical engineering, leading our research initiatives and publications.",
      social: {
        github: "#",
        linkedin: "#",
        email: "lisa@electonexus.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-6">
          Meet Our Team
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Talented individuals driving innovation and fostering a community of electronic enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl glass neon-border p-6 text-center hover:shadow-glow-primary transition-all duration-500 transform hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Profile Image with Glow Effect */}
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 w-32 h-32 mx-auto"></div>
            </div>

            {/* Member Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent font-medium">
                  {member.role}
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 pt-4">
                <a
                  href={member.social.github}
                  className="p-2 rounded-full border border-muted hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-glow-primary"
                >
                  <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="p-2 rounded-full border border-muted hover:border-secondary hover:bg-secondary/10 transition-all duration-300 hover:shadow-glow-secondary"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-secondary transition-colors" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="p-2 rounded-full border border-muted hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:shadow-glow-accent"
                >
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
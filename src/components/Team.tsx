import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Param Savjani",
      role: "Convener",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Leading the Electronics Hobby Club vision and driving innovation in robotics and IoT projects.",
      social: {
        github: "#",
        linkedin: "#",
        email: "param@ehc-daiict.com"
      }
    },
    {
      name: "Shreyas Dutta",
      role: "Deputy Convener",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Supporting club operations and mentoring members in embedded systems and automation projects.",
      social: {
        github: "#",
        linkedin: "#",
        email: "shreyas@ehc-daiict.com"
      }
    },
    {
      name: "Mahir Shah",
      role: "Core Member",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in drone technology and wireless communication systems, leading hardware innovations.",
      social: {
        github: "#",
        linkedin: "#",
        email: "mahir@ehc-daiict.com"
      }
    },
    {
      name: "Malay Vaghasiya",
      role: "Core Member",
      image: "https://images.unsplash.com/photo-1494790108755-2616b056b6e0?w=300&h=300&fit=crop&crop=face",
      bio: "Specializing in combat robotics and mechanical design for competitive bot building.",
      social: {
        github: "#",
        linkedin: "#",
        email: "malay@ehc-daiict.com"
      }
    },
    {
      name: "Preet Patel",
      role: "Core Member",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "IoT and sensor integration specialist, developing smart monitoring and automation systems.",
      social: {
        github: "#",
        linkedin: "#",
        email: "preet@ehc-daiict.com"
      }
    },
    {
      name: "Jeet Patel",
      role: "Extended Core",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Supporting project development and event coordination for club activities and competitions.",
      social: {
        github: "#",
        linkedin: "#",
        email: "jeet@ehc-daiict.com"
      }
    },
    {
      name: "Vyom Patel",
      role: "Extended Core",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
      social: {
        github: "#",
        linkedin: "#",
        email: "vyom@ehc-daiict.com"
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
const Team = () => {
  const teamMembers = [
    {
      name: "Param Savjani",
      role: "Convener",
      category: "Core",
      image: "/team/images/param.jpg",
      bio: "Leading the Electronics Hobby Club vision and driving innovation in robotics and IoT projects.",
    },
    {
      name: "Shreyas Dutta",
      role: "Deputy Convener",
      category: "Core",
      image:
        "",
      bio: "Supporting club operations and mentoring members in embedded systems and automation projects.",
    },
    {
      name: "Ayush Patel",
      role: "Core Member",
      category: "Core",
      image: "/team/images/aayush.jpg",
      bio: "Supporting club operations and mentoring members in embedded systems and automation projects.",
    },
    {
      name: "Mahir Shah",
      role: "Core Member",
      category: "Core",
      image: "/team/images/mahir.jpg",
      bio: "Expert in drone technology and wireless communication systems, leading hardware innovations.",
    },
    {
      name: "Malay Vagasiya",
      role: "Core Member",
      category: "Core",
      image: "/team/images/malay.jpg",
      bio: "Expert in drone technology and wireless communication systems, leading hardware innovations.",
    },
    {
      name: "Preet Patel",
      role: "Core Member",
      category: "Core",
      image:
        "/team/images/preet.jpeg",
      bio: "IoT and sensor integration specialist, developing smart monitoring and automation systems.",
    },
    {
      name: "Jeet Patel",
      role: "Extended Core",
      category: "Core",
      image: "/team/images/jeet.jpg",
      bio: "Supporting project development and event coordination for club activities and competitions.",
    },
    {
      name: "Vyom Patel",
      role: "Extended Core",
      category: "Core",
      image: "/team/images/vyom.jpg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    },

    {
      name: "rakshit Pandhi",
      role: "Mentor",
      category: "Mentors",
      image: "/team/images/rakshit.jpg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    },
    {
      name: "Aum Bavarva",
      role: "Member",
      category: "Members",
      image: "/team/images/Aum_Bavarva.jpg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    },
    {
      name: "Rudra Patel",
      role: "Member",
      category: "Members",
      image: "/team/images/rudra_patel.jpeg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    },
    {
      name: "Hari Sharma",
      role: "Member",
      category: "Members",
      image: "/team/images/hari_sharma.jpg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    },
    {
      name: "Shubh",
      role: "Member",
      category: "Members",
      image: "/team/images/shubh.jpeg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    },
    {
      name: "Akshat",
      role: "Member",
      category: "Members",
      image: "/team/images/akshat.jpg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    },
    {
      name: "Sahil Abbas",
      role: "Member",
      category: "Members",
      image: "/team/images/sahil.jpg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    },{
      name: "Shyam Bhuva",
      role: "Member",
      category: "Members",
      image: "/team/images/SHYAM_BHUVA.jpg",
      bio: "Enthusiastic about microcontroller programming and PCB design for innovative electronics projects.",
    }
  ];

  const categories = ["Core", "Mentors", "Members"];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Talented individuals driving innovation and fostering a community of
          electronic enthusiasts.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-20">
          {/* Sub-heading */}
          <h3 className="text-3xl font-heading font-bold mb-10 text-center gradient-text-primary">
            {category}
          </h3>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers
              .filter((member) => member.category === category)
              .map((member, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-primary font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-200">{member.bio}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Team;

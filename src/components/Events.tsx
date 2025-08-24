import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      type: "upcoming",
      title: "TechFest 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Main Auditorium",
      description: "Annual technology festival featuring project exhibitions, competitions, and guest speakers from leading tech companies.",
      featured: true
    },
    {
      type: "upcoming",
      title: "PCB Design Workshop",
      date: "March 8, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Electronics Lab",
      description: "Hands-on workshop covering PCB design principles, tools, and manufacturing processes.",
      featured: false
    },
    {
      type: "past",
      title: "Robotics Hackathon",
      date: "February 20, 2024",
      time: "24 Hours",
      location: "Innovation Center",
      description: "48-hour intensive hackathon focused on autonomous robotics and AI integration.",
      featured: true
    },
    {
      type: "upcoming",
      title: "Industry Talk: IoT Revolution",
      date: "March 22, 2024",
      time: "4:00 PM - 5:30 PM",
      location: "Conference Hall",
      description: "Expert insights on the latest trends in IoT, smart cities, and connected devices.",
      featured: false
    },
    {
      type: "past",
      title: "Arduino Bootcamp",
      date: "February 10, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Workshop Room",
      description: "Comprehensive introduction to Arduino programming and hardware interfacing.",
      featured: false
    }
  ];

  const upcomingEvents = events.filter(event => event.type === "upcoming");
  const pastEvents = events.filter(event => event.type === "past");

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-6">
            Events & Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting events, workshops, and competitions designed to enhance your skills and expand your network.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-semibold mb-8 text-center text-secondary">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl glass neon-border p-6 hover:shadow-glow-primary transition-all duration-500 transform hover:scale-105 animate-slide-up ${
                  event.featured ? 'border-primary/50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {event.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                
                <div className="space-y-4">
                  <h4 className="text-xl font-heading font-semibold text-foreground">
                    {event.title}
                  </h4>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Button variant="glow" size="sm" className="mt-4">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Timeline */}
        <div>
          <h3 className="text-3xl font-heading font-semibold mb-8 text-center text-accent">
            Recent Activities
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-8">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="glass neon-border p-6 rounded-xl hover:shadow-glow-accent transition-all duration-300">
                      <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <div className="text-sm text-muted-foreground mb-3">
                        {event.date} • {event.location}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-glow-accent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
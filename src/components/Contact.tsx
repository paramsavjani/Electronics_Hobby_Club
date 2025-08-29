import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 particle-bg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to connect with us? Here’s how you can reach
            our team.
          </p>
        </div>

        {/* Info + Hours + Social */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
          {/* Contact Info */}
          <div className="glass neon-border p-8 rounded-xl">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">ehc@dau.ac.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91 79 3052 0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Electronics Lab, DAU <br />
                    Near Indroda Circle, Gandhinagar, Gujarat 382007
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Club Hours */}
          <div className="glass neon-border p-8 rounded-xl">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Club Hours
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span>4:00 PM – 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday – Sunday</span>
                <span>10:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Workshop Days</span>
                <span>Extended Hours</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass neon-border p-8 rounded-xl">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors hover:shadow-glow-primary"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors hover:shadow-glow-secondary"
              >
                <Phone className="h-5 w-5 text-secondary" />
              </a>
              <a
                href="#"
                className="p-3 bg-accent/20 rounded-full hover:bg-accent/30 transition-colors hover:shadow-glow-accent"
              >
                <MapPin className="h-5 w-5 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

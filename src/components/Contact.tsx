import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 particle-bg"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with us through email, Instagram, LinkedIn, or visit our
            club room.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
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
                  <a
                    href="mailto:ehc@dau.ac.in"
                    className="text-muted-foreground hover:underline"
                  >
                    ehc@dau.ac.in
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">CEP 201 Room</p>
                </div>
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
                href="https://www.instagram.com/ehc.daiict"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-500/20 rounded-full hover:bg-pink-500/30 transition-colors hover:shadow-glow-primary"
              >
                <FaInstagram className="h-5 w-5 text-pink-500" />
              </a>
              <a
                href="https://www.linkedin.com/company/ehc-daiict"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors hover:shadow-glow-secondary"
              >
                <FaLinkedin className="h-5 w-5 text-blue-500" />
              </a>
              <a
                href="mailto:ehc@dau.ac.in"
                className="p-3 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors hover:shadow-glow-accent"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

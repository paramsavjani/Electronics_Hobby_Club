import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 particle-bg"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-6">
            Let’s Connect
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Reach out directly or connect with me on social platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-slide-up">
          {/* Contact Information */}
          <div className="glass neon-border p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-heading font-semibold mb-8 text-foreground">
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
                <div className="p-3 bg-secondary/20 rounded-full">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <a
                    href="tel:+916355161862"
                    className="text-muted-foreground hover:underline"
                  >
                    +91 63551 61862
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
          <div className="glass neon-border p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-heading font-semibold mb-8 text-foreground">
              Social Profiles
            </h3>
            <div className="flex space-x-5">
              <a
                href="https://www.instagram.com/ehc.daiict"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-pink-500/20 rounded-full hover:bg-pink-500/30 transition-colors hover:shadow-glow-primary"
              >
                <FaInstagram className="h-6 w-6 text-pink-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/ehc-dau"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors hover:shadow-glow-secondary"
              >
                <FaLinkedin className="h-6 w-6 text-blue-500" />
              </a>

              <a
                href="mailto:ehc@dau.ac.in"
                className="p-4 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors hover:shadow-glow-accent"
              >
                <Mail className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

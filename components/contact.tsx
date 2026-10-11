import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div>
        <h2 className="scribble text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hello, feel free to
          reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start gap-4 p-6 doodle bg-card">
            <Mail
              className="text-ink mt-1 flex-shrink-0"
              size={24}
            />
            <div className="min-w-0 break-words">
              <h3 className="font-bold mb-1">Email</h3>
              <a
                href="mailto:nescoz.dipak@gmail.com"
                className="text-ink hover:underline"
              >
                nescoz.dipak@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 doodle bg-card">
            <Phone
              className="text-ink mt-1 flex-shrink-0"
              size={24}
            />
            <div className="min-w-0 break-words">
              <h3 className="font-bold mb-1">Phone</h3>
              <a
                href="tel:+9841386576"
                className="text-ink hover:underline"
              >
                9866260928
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 doodle bg-card">
            <MapPin
              className="text-ink mt-1 flex-shrink-0"
              size={24}
            />
            <div className="min-w-0 break-words">
              <h3 className="font-bold mb-1">Location</h3>
              <p className="text-muted-foreground">Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 doodle bg-card">
            <Linkedin
              className="text-ink mt-1 flex-shrink-0"
              size={24}
            />
            <div className="min-w-0 break-words">
              <h3 className="font-bold mb-1">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/dipak-bhandari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:underline"
              >
                linkedin.com/in/dipak-bhandari
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Dipak-Bhandari"
            target="_blank"
            rel="noopener noreferrer"
            className="doodle doodle-lift inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium"
          >
            <Github size={20} /> Visit GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dipak-bhandari"
            target="_blank"
            rel="noopener noreferrer"
            className="doodle doodle-lift inline-flex items-center gap-2 px-6 py-3 bg-card text-ink font-medium"
          >
            <Linkedin size={20} /> LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}


import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";

const ContactMe = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSending(true);

    try {
      await emailjs.sendForm(
      "service_ve89k9x",
      "template_46mxn86",
      formRef.current,
      {
        publicKey: "o3kp9TRUXbBiW_4sm",
      }
    );

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[var(--background)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
            Have a project in mind? Feel free to send me a message.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                Get in touch
              </h3>

              <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to work together.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-[var(--background-secondary)] p-3">
                  <Mail
                    size={22}
                    className="text-[var(--primary)]"
                  />
                </div>

                <div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Email
                  </p>

                  <a
                    href="mailto:mohamedabouda484@gmail.com"
                    className="font-medium text-[var(--text-primary)] transition hover:text-[var(--primary)]"
                  >
                    mohamedabouda484@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-[var(--background-secondary)] p-3">
                  <MapPin
                    size={22}
                    className="text-[var(--primary)]"
                  />
                </div>

                <div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Location
                  </p>

                  <p className="font-medium text-[var(--text-primary)]">
                    Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm md:p-8"
          >
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
                />
              </div>

              {/* Status */}
              {status.message && (
                <p
                  className={
                    status.type === "success"
                      ? "text-sm text-green-600"
                      : "text-sm text-red-600"
                  }
                >
                  {status.message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}

                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

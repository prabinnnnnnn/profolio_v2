import { config } from "@/config";

const Contact = () => {
  return (
    <section className="py-16 md:py-32" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-left">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {config.contact.title}
          </h2>
          <p className="mt-4 max-w-xl">{config.contact.subtitle}</p>

          <form className="mt-10 max-w-xl lg:mt-12">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm ">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="h-12 w-full rounded-lg border bg-transparent px-4"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full rounded-lg border bg-transparent p-4 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
              >
                <span className="text-base font-medium">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

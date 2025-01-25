import Link from "next/link";
export default function ContactForm() {
    return (
      <section id="contact-me" className="py-12 px-4 bg-gray-900 text-white">
        <div className="mx-[10%] space-y-8 mt-0.5">
          <div className="space-y-3">
          <h2 className="text-2xl mt-6 font-bold uppercase tracking-wider mb-6 text-center relative">
            <span className="relative inline-block">
              Get in Touch
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-0.5 bg-green-500"></span>
            </span>
          </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link
                href="https://www.linkedin.com/in/ajeet-singh-063978177/"
                className="text-blue-500 hover:underline"
              >
                with a direct question on LinkedIn
              </Link>{" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
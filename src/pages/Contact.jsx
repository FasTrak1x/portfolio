// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const FORMSPREE_URL = "https://formspree.io/f/manpykgk";

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Honeypot field (bots fill it; humans don’t)
    if (formData.get("honey"))
      return setStatus({ state: "success", msg: "Thanks!" });

    setStatus({ state: "loading", msg: "" });
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data?.errors?.[0]?.message || "Failed to send");
      setStatus({
        state: "success",
        msg: "Thanks! I’ll get back to you soon.",
      });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({
        state: "error",
        msg: err.message || "Something went wrong.",
      });
    }
  }

  return (
    <section className="relative w-[min(1100px,calc(100%-220px))] mx-auto py-20">
      {/* <h2>…</h2> decorative tags */}
      <div className="relative mb-6">
        <span className="absolute -top-6 -left-8 text-[#6e6e6e] italic text-sm select-none">
          &lt;h2&gt;
        </span>
        <span className="absolute -top-6 -right-8 text-[#6e6e6e] italic text-sm select-none">
          &lt;/h2&gt;
        </span>
        <h2 className="text-[hsl(174,100%,42%)] text-4xl sm:text-5xl font-extrabold">
          Contact Me
        </h2>
      </div>

      {/* intro <p>…</p> */}
      <div className="relative mb-8">
        <span className="absolute -top-5 -left-7 text-[#6e6e6e] italic text-sm select-none">
          &lt;p&gt;
        </span>
        <span className="absolute -left-7 -bottom-4 text-[#6e6e6e] italic text-sm select-none">
          &lt;/p&gt;
        </span>
        <p className="text-[#c6cbcf] leading-8 text-[1.02rem]">
          Whether you have a question, a project idea, or just want to say
          hello, I’d love to hear from you! Fill out the form below to get in
          touch, and I’ll do my best to respond as quickly as possible. If you
          prefer, you can also book a meeting directly using the scheduling
          widget on the right.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* <form>…</form> with Formspree */}
        <div className="relative">
          <span className="absolute -top-5 -left-10 text-[#6e6e6e] italic text-sm select-none">
            &lt;form&gt;
          </span>
          <span className="absolute -bottom-5 -left-10 text-[#6e6e6e] italic text-sm select-none">
            &lt;/form&gt;
          </span>

          <form className="space-y-3" onSubmit={onSubmit}>
            {/* Honeypot */}
            <input
              type="text"
              name="honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                className="bg-[#151515] border border-[#262626] rounded-md px-3 py-3 text-sm outline-none focus:border-[#00ffd8]"
                placeholder="Name"
                name="name"
                autoComplete="name"
                required
              />
              <input
                className="bg-[#151515] border border-[#262626] rounded-md px-3 py-3 text-sm outline-none focus:border-[#00ffd8]"
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="email"
                required
              />
            </div>

            <input
              className="w-full bg-[#151515] border border-[#262626] rounded-md px-3 py-3 text-sm outline-none focus:border-[#00ffd8]"
              placeholder="Subject"
              name="subject"
            />

            <textarea
              rows={6}
              className="w-full bg-[#151515] border border-[#262626] rounded-md px-3 py-3 text-sm outline-none focus:border-[#00ffd8]"
              placeholder="Message"
              name="message"
              required
            />

            {status.state === "error" && (
              <p className="text-red-400 text-sm">{status.msg}</p>
            )}
            {status.state === "success" && (
              <p className="text-emerald-400 text-sm">{status.msg}</p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={status.state === "loading"}
                className="relative inline-flex items-center justify-center px-6 py-3 border-2 rounded-md 
                           border-[hsl(174,100%,42%)] text-[hsl(174,100%,42%)] font-extrabold tracking-[.12em] text-sm
                           hover:bg-[hsl(174,100%,42%)] hover:text-[hsl(220,13%,9%)] transition disabled:opacity-60"
              >
                {status.state === "loading" ? "Sending..." : "Send Message"}
                <span className="absolute -right-1.5 -bottom-1.5 w-2.5 h-2.5 border-2 border-[hsl(174,100%,42%)] border-l-0 border-t-0 rounded-[2px]" />
              </button>

              <a
                href="/Wasil_Fawad_CV.pdf"
                target="_blank"
                rel="noopener"
                className="relative inline-flex items-center justify-center px-6 py-3 border-2 rounded-md 
                           border-[hsl(174,100%,42%)] text-[hsl(174,100%,42%)] font-extrabold tracking-[.12em] text-sm
                           hover:bg-[hsl(174,100%,42%)] hover:text-[hsl(220,13%,9%)] transition"
              >
                Download Résumé
                <span className="absolute -right-1.5 -bottom-1.5 w-2.5 h-2.5 border-2 border-[hsl(174,100%,42%)] border-l-0 border-t-0 rounded-[2px]" />
              </a>
            </div>
          </form>
        </div>

        {/* booking widget */}
        <div className="rounded-xl border border-[#262626] bg-[#111] p-1 overflow-hidden min-h-[520px]">
          <iframe
            src="https://cal.com/wasil-malik?theme=dark"
            title="Book a meeting"
            className="w-full h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

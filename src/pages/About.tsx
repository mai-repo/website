import { motion } from "motion/react";
import maiPhoto from "@/public/Mai.JPG";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <section id="about" className="py-16 md:py-32">
        <h2 className="text-5xl font-serif tracking-tight mb-10 md:hidden">About</h2>

        {/* Mobile: daisyUI card with image + body stacked */}
        <div className="card card-side bg-brand-bg border border-brand-green/10 shadow-sm md:hidden">
          <figure className="w-2/5 shrink-0">
            <img
              src={maiPhoto}
              alt="Mai Portrait"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-5 gap-4">
            <div className="space-y-3 text-[12px] leading-relaxed opacity-90">
              <p>Mission-driven full-stack engineer and founding engineer at Como, building consumer mobile and web products with React Native + TypeScript.</p>
              <p>Career spans nonprofit, higher-ed, and product-focused engineering.</p>
            </div>
            <div className="space-y-1 mt-auto">
              <p className="text-[9px] font-bold tracking-widest uppercase opacity-60">Book an appointment</p>
              <a
                href="https://calendly.com/ttmai/meeting-w-mai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
              >
                calendly.com/ttmai
              </a>
            </div>
          </div>
        </div>

        {/* Desktop: original side-by-side layout */}
        <div className="hidden md:grid md:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h2 className="text-5xl font-serif tracking-tight">About</h2>
            <div className="space-y-6 text-[13px] leading-relaxed opacity-90 max-w-lg">
              <p>
                Mai is a mission-driven full-stack engineer and founding frontend engineer at Como, with experience building consumer mobile and web products. They specializes in end-to-end mobile app delivery using React Native with TypeScript, translating product needs into polished iOS and Android experiences with strong API integration.
              </p>
              <p>
                Their career path blends nonprofit and higher-ed leadership with a clear shift into software, including roles at Fulbright Lotus and Hasselt University before moving into product-focused engineering at Como. Mai’s strengths span core mobile app foundations like authentication, performance, and real-time features, along with accessibility-minded UI work.
              </p>
            </div>
            <div className="pt-4 flex flex-col gap-6">
              <div className="space-y-2">
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-60">Book an appointment</p>
                <a
                  href="https://calendly.com/ttmai/meeting-w-mai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold underline decoration-1 underline-offset-8 hover:opacity-70 transition-opacity"
                >
                  calendly.com/ttmai
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-square overflow-hidden rounded-3xl border border-brand-green/10 bg-brand-green/5 max-w-sm md:ml-auto"
          >
            <img
              src={maiPhoto}
              alt="Mai Portrait"
              className="object-cover w-full h-full transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type WorkCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  idx: number;
};

export default function WorkCard({ title, description, link, image, tags, idx }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      <div className={`space-y-8 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-bold">{title}</h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-brand-green/5 rounded-full transition-colors"
            >
              <ArrowUpRight size={24} />
            </a>
          </div>
          <p className="text-lg opacity-80 leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase border border-brand-accent/30 text-brand-accent rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative aspect-video overflow-hidden rounded-2xl border border-brand-green/10 bg-brand-green/5 ${idx % 2 === 1 ? "md:order-1" : ""}`}
      >
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-6 py-3 bg-brand-bg text-brand-green text-xs font-bold tracking-widest uppercase rounded-full shadow-xl">
            View Project
          </span>
        </div>
      </a>
    </motion.div>
  );
}

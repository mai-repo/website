import comoImg from "@/public/Como.png";
import vietChefImg from "@/public/VietChef.png";
import WorkCard from "@/components/WorkCard";

const WORKS = [
  {
    title: "Como",
    description: "Founding Frontend Engineer. Built a cross-platform mobile app and company website.",
    link: "https://www.letscomo.com/",
    image: comoImg,
    tags: [
      "React", "React Native", "TypeScript", "JavaScript", "HTML / CSS", 
      "Mobile Development", "Expo", "iOS / Android builds", "Node.js", 
      "Google AI studio", "Redux", "GitHub", "Vercel"
    ]
  },
  {
    title: "Viet Chef",
    description: "A modern recipe generator powered by LLMs.",
    link: "https://vietspark-v1.vercel.app/",
    image: vietChefImg,
    tags: [
      "Svelte", "Vite", "Tailwind CSS", "Python", "FastAPI", "LLM"
    ]
  }
];

export default function Works() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 md:py-20">
      <section id="works" className="space-y-16 md:space-y-32">
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2 className="text-5xl font-serif tracking-tight">Works</h2>
          <p className="text-[10px] font-bold tracking-widest uppercase text-brand-accent">Selected Projects</p>
        </div>

        {WORKS.map((work, idx) => (
          <WorkCard
            key={work.title}
            title={work.title}
            description={work.description}
            link={work.link}
            image={work.image}
            tags={work.tags}
            idx={idx}
          />
        ))}
      </section>
    </main>
  );
}

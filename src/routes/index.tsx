import { createFileRoute } from "@tanstack/react-router";
import { Hero, Today, Reimagined, Business, Footwear, Agent, Proof, Closing, useReveal } from "@/components/microsite/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skechers × Agentic Commerce Search — Reimagining Discovery" },
      { name: "description", content: "An executive concept showing how Salesforce Agentic Commerce Search could transform product discovery for Skechers." },
      { property: "og:title", content: "Skechers × Agentic Commerce Search" },
      { property: "og:description", content: "From matching words to understanding shopper intent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main>
      <Hero />
      <Today />
      <Reimagined />
      <Business />
      <Footwear />
      <Agent />
      <Proof />
      <Closing />
    </main>
  );
}

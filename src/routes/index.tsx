import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Today,
  Reimagined,
  Business,
  Proof,
  Closing,
  useReveal,
} from "@/components/microsite/Sections";
import { Comparison } from "@/components/microsite/Understanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ariat × Agentic Commerce Search — Reimagining Discovery" },
      {
        name: "description",
        content:
          "An executive concept showing how Salesforce Agentic Commerce Search could transform product discovery for Ariat.",
      },
      { property: "og:title", content: "Ariat × Agentic Commerce Search" },
      {
        property: "og:description",
        content: "From matching words to understanding shopper intent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  const [active, setActive] = useState(0);
  return (
    <main>
      <Hero />
      <Today active={active} setActive={setActive} />
      <Reimagined active={active} setActive={setActive} />
      <Proof />
      <Comparison />
      <Business />
      <Closing />
    </main>
  );
}

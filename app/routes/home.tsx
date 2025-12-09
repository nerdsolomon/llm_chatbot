import Layout from "~/components/layout";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LLM ChatBot App" },
    { name: "description", content: "ChatBot" },
  ];
}

export default function Home() {
  return <Layout />;
}

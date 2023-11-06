import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <main>
      <Hero
        title="Promoted Content"
        subtitles={["No fees.", "No minimum deposit.", "High interest rates"]} // Must be an array !IMPORTANT
        text="Open a savings account with Argent Bank today!"
      />
      <Features />
    </main>
  );
}

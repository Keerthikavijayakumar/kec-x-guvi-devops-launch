const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-6">
          <span className="inline-block font-mono text-sm text-muted-foreground border border-border rounded-full px-4 py-1.5 mb-8">
            KEC × GUVI Collaboration
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Industry-Ready{" "}
          <span className="gradient-text">DevOps</span>
          <br />
          Training Program
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          A collaborative initiative by Kongu Engineering College and GUVI
          to bridge the gap between academia and industry.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12">
          <a
            href="#highlights"
            className="gradient-bg text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Explore Program
          </a>
          <a
            href="#cta"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-muted transition-colors text-lg"
          >
            Enroll Now
          </a>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:gap-8 md:grid-cols-3 text-left">
          <div className="rounded-xl border bg-card/60 px-5 py-6">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-2">
              For KEC Students
            </p>
            <h2 className="text-base font-semibold mb-2">Designed with faculty & industry</h2>
            <p className="text-sm text-muted-foreground">
              Curriculum co-created by KEC and GUVI mentors to match real DevOps roles,
              not just theory from textbooks.
            </p>
          </div>

          <div className="rounded-xl border bg-card/60 px-5 py-6">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-2">
              Hands-on first
            </p>
            <h2 className="text-base font-semibold mb-2">Lab-driven learning path</h2>
            <p className="text-sm text-muted-foreground">
              Every module ends with a guided lab where you build, ship, and monitor
              applications using modern DevOps tools.
            </p>
          </div>

          <div className="rounded-xl border bg-card/60 px-5 py-6 md:col-span-1">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-2">
              Career support
            </p>
            <h2 className="text-base font-semibold mb-2">Portfolio & interview ready</h2>
            <p className="text-sm text-muted-foreground">
              Build a portfolio of DevOps projects and get guidance on resumes,
              GitHub profiles, and technical interviews.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

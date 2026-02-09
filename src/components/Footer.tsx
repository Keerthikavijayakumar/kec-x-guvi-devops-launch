const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-lg gradient-text">KEC × GUVI</span>
            <span className="text-muted-foreground text-sm">DevOps Training Program</span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#curriculum" className="hover:text-foreground transition-colors">Curriculum</a>
            <a href="#mentor" className="hover:text-foreground transition-colors">Mentor</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kongu Engineering College × GUVI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

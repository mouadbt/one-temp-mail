const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full border-t border-foreground/10 mt-8 pb-0.5">
      <div className="max-w-5xl mx-auto px-4 py-2 pb-1 text-center text-xs text-foreground/60">
        © {year} One Temp Mail
      </div>
    </footer>
  );
};

export default Footer;

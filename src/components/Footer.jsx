import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} JU-ICT Girls. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 hover:text-primary">
              <Facebook className="h-4 w-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 hover:text-primary">
              <Twitter className="h-4 w-4" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 hover:text-primary">
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



"use client";


export default function Footer() {
    const date = new Date()
  return (
    <footer className="py-10" id="contact">
      <div className="flex flex-col items-center gap-6 text-center text-sm">
              <p className="text-semibold text-muted-foreground">© { date.getFullYear()} Prabin Moktan All rights reserved.</p>
      </div>
    </footer>
  );
}

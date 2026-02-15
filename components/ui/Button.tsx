import Link from "next/link";

type ButtonProps = { href: string; children: React.ReactNode; variant?: "primary" | "outline"; className?: string };

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-all duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background";
  const styles = variant === "primary" ? "bg-background text-gold border-2 border-gold hover:bg-gold/10 hover:opacity-95" : "border-2 border-gold text-gold hover:bg-gold/10";
  return <Link href={href} className={`${base} ${styles} ${className}`}>{children}</Link>;
}

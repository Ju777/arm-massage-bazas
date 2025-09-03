import Link from "next/link";
import { Briefcase, Heart, Hand } from "lucide-react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "third";
  icon?: "business" | "hand" | "heart";
  className?: string; // ajout pour styles externes
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: Readonly<CTAButtonProps>) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-title font-medium transition-transform transform hover:scale-105 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-primary hover:bg-secondary/80",
    third: "bg-dark text-light hover:bg-dark/80",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon === "business" && <Briefcase size={18} aria-hidden="true" />}
      {icon === "hand" && <Hand size={18} aria-hidden="true" />}
      {icon === "heart" && <Heart size={18} aria-hidden="true" />}
      {children}
    </Link>
  );
}

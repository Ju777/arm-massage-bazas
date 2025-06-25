import Link from "next/link";
import { Briefcase, User, Heart } from "lucide-react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "third";
  icon?: "business" | "user" | "heart";
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  icon,
}: Readonly<CTAButtonProps>) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-title font-medium transition transform hover:scale-105 shadow-sm";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-primary hover:bg-secondary/80",
    third: "bg-dark text-light hover:bg-dark/80",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {icon === "business" && <Briefcase size={18} />}
      {icon === "user" && <User size={18} />}
      {icon === "heart" && <Heart size={18} />}
      {children}
    </Link>
  );
}

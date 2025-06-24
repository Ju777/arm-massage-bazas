import Link from "next/link";
import { Briefcase, User } from "lucide-react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: "business" | "user";
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  icon,
}: Readonly<CTAButtonProps>) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-title font-medium transition shadow hover:shadow-lg";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-primary hover:bg-secondary/80",
  };
  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {icon === "business" && <Briefcase size={18} />}
      {icon === "user" && <User size={18} />}
      {children}
    </Link>
  );
}

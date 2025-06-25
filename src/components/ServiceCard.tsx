import { Sparkles } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
};

export default function ServiceCard({
  title,
  description,
  price,
}: Readonly<ServiceCardProps>) {
  return (
    <div className="bg-white p-6 rounded-xl border border-secondary hover:shadow-lg transition transform hover:-translate-y-1 relative">
      <Sparkles
        className="absolute top-4 right-4 text-primary opacity-70"
        size={24}
      />
      <h3 className="font-title text-xl text-primary mb-2">{title}</h3>
      <p className="text-dark mb-4 text-sm leading-relaxed">{description}</p>
      <p className="text-primary font-semibold text-lg">{price}</p>
    </div>
  );
}

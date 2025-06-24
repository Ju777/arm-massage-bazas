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
    <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4 text-gray-700">{description}</p>
      <p className="text-blue-600 font-bold">{price}</p>
    </div>
  );
}

import Image from "next/image"
import Link from "next/link"

export default function GPUSelection() {
  const cards = [
    {
      name: "AMD",
      image: "/images/amd_amaz.avif",
      href: "/gpus/amd",
      position: "left center",
    },
    {
      name: "NVIDIA",
      image: "/images/nvidia_gpu.jpg",
      href: "/gpus/nvidia",
      position: "right center",
    },
  ]

  return (
    <section className="h-screen flex flex-col items-center justify-center py-16 px-4">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Selecciona tu Tarjeta Gráfica
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {cards.map((card) => (
          <Link
            key={card.name}
            href={card.href}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src={card.image}
              alt={card.name}
              width={600}
              height={400}
              className="w-full h-64 group-hover:scale-105 transition-transform duration-300"
              style={{
                  objectFit: 'cover',
                  objectPosition: card.position
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-gray-200 text-2xl md:text-3xl font-semibold">
                {card.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

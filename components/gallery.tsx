import Image from "next/image"

export function Gallery() {
  const images = [
    {
      url: "/buffet-images/elegant-buffet-table-with-gourmet-dishes.jpg",
      alt: "Mesa de buffet elegante",
      width: 800,
      height: 600,
    },
    {
      url: "/buffet-images/professional-chefs-preparing-food-at-event.jpg",
      alt: "Chefs preparando comida",
      width: 800,
      height: 600,
    },
    {
      url: "/buffet-images/beautiful-event-decoration-with-buffet.jpg",
      alt: "Decoração de evento",
      width: 800,
      height: 600,
    },
    {
      url: "/buffet-images/variety-of-gourmet-appetizers-on-display.jpg",
      alt: "Variedade de aperitivos",
      width: 800,
      height: 600,
    },
    {
      url: "/buffet-images/dessert-buffet-table-with-elegant-presentation.jpg",
      alt: "Mesa de sobremesas",
      width: 800,
      height: 600,
    },
    {
      url: "/buffet-images/outdoor-buffet-event-setup.jpg",
      alt: "Buffet ao ar livre",
      width: 800,
      height: 600,
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Galeria de Eventos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Veja alguns dos nossos eventos realizados</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300"
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

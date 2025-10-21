export function Gallery() {
  const images = [
    {
      url: "/elegant-buffet-table-with-gourmet-dishes.jpg",
      alt: "Mesa de buffet elegante",
    },
    {
      url: "/professional-chefs-preparing-food-at-event.jpg",
      alt: "Chefs preparando comida",
    },
    {
      url: "/beautiful-event-decoration-with-buffet.jpg",
      alt: "Decoração de evento",
    },
    {
      url: "/variety-of-gourmet-appetizers-on-display.jpg",
      alt: "Variedade de aperitivos",
    },
    {
      url: "/dessert-buffet-table-with-elegant-presentation.jpg",
      alt: "Mesa de sobremesas",
    },
    {
      url: "/outdoor-buffet-event-setup.jpg",
      alt: "Buffet ao ar livre",
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
              <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

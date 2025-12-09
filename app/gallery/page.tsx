export default function Gallery() {
  const images = [
    "/art1.jpg",
    "/art2.jpg",
    "/art3.jpg",
    "/art4.jpg",
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Galería</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} className="rounded-lg shadow" />
        ))}
      </div>
    </section>
  );
}

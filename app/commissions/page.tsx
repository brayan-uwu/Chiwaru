export default function Commissions() {
  const items = [
    { title: "Chibi", price: "$10", img: "/chibi.jpg" },
    { title: "Headshot", price: "$15", img: "/head.jpg" },
    { title: "Full Body", price: "$25", img: "/full.jpg" },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Comisiones</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl shadow flex flex-col items-center"
          >
            <img src={item.img} className="w-full rounded-lg mb-3" />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-pink-500 font-bold">{item.price}</p>

            <a
              href="https://vgen.co/chiwaru"
              className="mt-3 bg-pink-500 text-white px-3 py-1 rounded-lg"
            >
              Ordenar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

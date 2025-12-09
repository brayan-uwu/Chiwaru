export default function Contact() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>

      <p className="text-gray-600 mb-4">
        Si quieres una comisión personalizada, envía un mensaje:
      </p>

      <a
        href="https://wa.me/1234567890"
        className="block bg-green-500 text-white text-center p-3 rounded-lg"
      >
        Enviar mensaje por WhatsApp
      </a>
    </main>
  );
}

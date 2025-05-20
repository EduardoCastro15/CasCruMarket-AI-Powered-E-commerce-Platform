// components/Hero.tsx

export function Hero() {
    return (
      <section className="text-center py-16 px-4 bg-gradient-to-b from-white to-gray-50 w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Bienvenido a CasCruMarket
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Tu plataforma de e-commerce potenciada con inteligencia artificial
        </p>
        <a
          href="#productos"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
        >
          Explorar productos
        </a>
      </section>
    );
  }
  
import Image from "next/image";
import davidImg from "../public/david.jpg";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white px-4 py-20 space-y-40">
      {/* HERO SECTION */}
      <section className="container mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
        <div className="flex-shrink-0">
          <Image
            src={davidImg}
            alt="David"
            className="rounded-full border-4 border-[#511f3a] shadow-xl"
            width={220}
            height={220}
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold ${orbitron.className}`}>
            Hello! I'm <span className="text-[#511f3a]">David</span>
          </h1>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            💻 Full-stack developer passionate about crafting clean, functional, and scalable digital experiences.
          </p>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            ⚙️ Focused on Next.js, TailwindCSS, MongoDB & modern web tooling.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row gap-16 items-start">
  {/* ABOUT ME */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className={`text-4xl font-bold mb-6 ${orbitron.className}`}>
      <span className="text-[#511f3a]">About</span> Me
    </h2>
    <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
      I'm a dedicated developer with a love for clean code and intuitive UI. I enjoy solving complex problems and turning ideas into real products. When I’m not coding, I’m exploring new tech or hiking in nature.
    </p>
  </div>

  {/* PROJECTS */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className={`text-4xl font-bold mb-6 ${orbitron.className}`}>
      <span className="text-[#511f3a]">My</span> Projects
    </h2>

    <div className="grid gap-6 sm:grid-cols-1">
      {/* MindCast Project */}
      <div className=" p-8 rounded-3xl shadow-[0_0_25px_rgba(81,31,58,0.6)]  space-y-6 max-w-lg ">
  {/* Titlu */}
  <div className="flex items-center gap-3 mx-auto">
    <span className="text-3xl">🧠</span>
    <h3 className="text-3xl font-semibold text-white">MindCast</h3>
  </div>

  {/* Descriere scurtă */}
  <p className="text-gray-300 text-sm leading-relaxed">
    MindCast este o platformă inovatoare pentru Biblioteca de Idei și Conversații Temporare. Utilizatorii pot crea, partaja și explora playlisturi tematice de idei, iar discuțiile se desfășoară în chat-uri efemere, care dispar după 24h.
  </p>

  {/* Secțiunea "Descriere" */}
  <div>
    <h4 className="text-[#511f3a] font-semibold mb-1">Descriere</h4>
    <p className="text-gray-400 text-sm leading-relaxed">
      MindCast permite utilizatorilor să construiască colecții tematice de idei — citate, articole, concepte sau întrebări filosofice. Fiecare playlist este un spațiu colaborativ cu discuții temporare, ce încurajează schimbul spontan și inspirația continuă.
    </p>
  </div>

  {/* Funcționalități principale */}
  <div>
    <h4 className="text-[#511f3a] font-semibold mb-2">Funcționalități principale</h4>
    <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
      <li>🤖 Sugestii inteligente AI: Recomandări personalizate de playlisturi, asemănător muzicii pe Spotify.</li>
      <li>🔒 Anonimat controlat: Opțiuni pentru conversații private sau publice, pentru libertate și siguranță.</li>
    </ul>
  </div>

  {/* Tehnologii */}
  <div>
    <h4 className="text-[#511f3a] font-semibold mb-2">🛠️ Tehnologii folosite</h4>
    <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
      <li><strong>Frontend:</strong> React — UI fluidă și animații performante.</li>
      <li><strong>Backend:</strong> Node.js + ExpressJS — chat în timp real.</li>
      <li><strong>Bază de date:</strong> MongoDB — stocare citate și cărți.</li>
    </ul>
  </div>

  {/* Buton demo live */}
  <div className="mt-4">
    <a
      href="https://mindcast.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#511f3a] hover:bg-[#72214f] text-white text-sm px-6 py-3 rounded-full transition-all font-medium"
    >
      🌐 Demo Live
    </a>
  </div>
</div>
</div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-6 ${orbitron.className}`}>
          <span className="text-[#511f3a]">Contact</span> Me
        </h2>
        <p className="text-gray-300 mb-6 text-lg">Let's build something amazing together. Drop me a message anytime!</p>
        <a
          href="mailto:dstef068@gmail.com"
          className="inline-block bg-[#511f3a] hover:bg-[#72214f] text-white px-8 py-3 rounded-full text-lg font-semibold transition"
        >
          📩 Send an Email
        </a>
      </section>
    </main>
  );
}

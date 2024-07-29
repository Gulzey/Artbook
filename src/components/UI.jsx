import { atom, useAtom } from "jotai";
import sound from '../assets/music.wav';
import { useEffect } from "react";

const Music = () => {
  useEffect(() => {
    // Create a new audio element and play it
    const audio = new Audio(sound);
    audio.volume = 0.1;
    audio.loop = true;

    audio.play().catch(error => {
      console.error('Error playing sound automatically:', error);
      // If the browser prevented autoplay, provide a fallback to play on user interaction
      document.addEventListener('click', () => {
        audio.play().catch(err => console.error('Error playing sound on user interaction:', err));
      }, { once: true });
    });
  }, []);

  return null; // This component doesn't render anything visible
};

const pictures = [
  "GL", //gurren
  "Simon",
  "Vaga2", //vagabond
  "Vaga",
  "AOT", //aot
  "AOT2",
  "Vinland", //vinland
  "Thorfinn",
  "csm", //csm
  "Denji",
  "Mob2", //mob
  "Mob",
  "bleach2", //
  "Bleach1",
  "Naruto2", //
  "Naruto",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  return (
    <>
      <Music />
      <main id="1" className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        <a className="pointer-events-auto mt-10 ml-10" href="1">
          <img className="w-20" src="/images/g3.png" alt="G3" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none hidden">
        <div className="relative">
          <div className="bg-white/0 animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black">G3</h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Top Anime Characters
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              of All-Time!
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black">Wawa Sensei</h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Three.js
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;

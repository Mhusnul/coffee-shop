import React from "react";
import { ChevronLast, ChevronFirst, Quote } from "lucide-react";
import grid1 from "../../assets/2.png";
import grid2 from "../../assets/3.png";
import grid3 from "../../assets/4.png";
import grid4 from "../../assets/5.png";

const testimonials = [
  {
    quote:
      "Coffee is more than just a drink — it's a daily ritual, a moment of calm in a world that never stops moving. In every cup lies a chance to pause, reflect, and breathe.",
    author: "Sarah Bennett",
    url: grid1, // pakai variabel gambar
  },
  {
    quote:
      "A good cup of coffee doesn’t just wake you up, it stirs the soul. It's in those quiet sips that we find inspiration, comfort, and the strength to take on whatever lies ahead.",
    author: "James Caldwell",
    url: grid2,
  },
  {
    quote:
      "Behind every great conversation, idea, or memory, there's often a cup of coffee in hand. It’s the unseen thread weaving warmth and connection into our lives.",
    author: "Clara Hwang",
    url: grid3,
  },
  {
    quote:
      "Life moves fast, but coffee reminds us to slow down. To savor. To notice the little things — the aroma, the warmth, the taste — and be fully present, even if just for a moment.",
    author: "Thomas Lane",
    url: grid4,
  },
];

function Quotes() {
  return (
    <div className="w-full h-screen mx-auto">
      <div className="carousel">
        {testimonials.map((item, index) => {
          const prev = index === 0 ? testimonials.length - 1 : index - 1;
          const next = index === testimonials.length - 1 ? 0 : index + 1;
          return (
            <div
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full flex justify-center items-center"
            >
              {/* Background Image */}
              <img
                src={item.url}
                alt={`testimonial-${index}`}
                className="w-full h-screen object-cover"
              />

              {/* Quote Overlay */}
              <div className="absolute bg-[#4B352A]/50 backdrop-blur-sm rounded-xl p-8 max-w-xl text-center text-[#F0F2BD]">
                <div className="mb-2">
                  <Quote color="#F0F2BD" strokeWidth={2} />
                </div>
                <p className="italic text-lg">{item.quote}</p>
                <p className="mt-4 font-semibold">{item.author}</p>
              </div>

              {/* Navigation */}
              <div className="absolute left-8 right-8 top-1/2 flex justify-between transform -translate-y-1/2">
                <a href={`#slide${prev + 1}`} className="btn btn-circle">
                  <ChevronFirst color="#ffffff" strokeWidth={1} />
                </a>
                <a href={`#slide${next + 1}`} className="btn btn-circle">
                  <ChevronLast color="#ffffff" strokeWidth={1} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Quotes;

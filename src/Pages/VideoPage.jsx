import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayouts from "../Components/Fragments/MainLayouts";
import Buttons from "../Components/Elements/Buttons";
import Heading from "../Components/Fragments/Heading";
import { SiImessage } from "react-icons/si";

// BARU: Data untuk konten Accordion. Lebih rapi dan mudah di-manage.
const messages = [
  {
    id: 1,
    title: "Sebutin 5 Benda Padat yang paling aku suka",
    content: "KAMU, KAMU, KAMU, KAMU, KAMU",
  },
  {
    id: 2,
    title: "Coba sebutin 3 hal yang bikin aku nagih",
    content: "Senyum kamu, ketawa kamu, dan kebersamaan kita bertiga, shea, aku dan kamu",
  },
  {
    id: 3,
    title: "Tau gak kenapa aku suka banget sama alfabet? ",
    content: "Soalnya di antara 26 huruf itu, ada 'U' (you).",
  },
  {
    id: 4,
    title: "Satu Hal Sederhana ",
    content:
      "Entah kenapa, sesibuk atau se-capek apapun hariku, cerita sama kamu di penghujung hari itu rasanya kayak 'pulang'.",
  },
];

const VideoPage = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  // BARU: State untuk melacak accordion mana yang sedang terbuka.
  const [openAccordion, setOpenAccordion] = useState(messages[0].id); // Langsung buka item pertama

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // BARU: Fungsi untuk menangani klik pada header accordion.
  const handleAccordionClick = (id) => {
    // Jika item yang diklik sudah terbuka, tutup. Jika tidak, buka.
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <MainLayouts
      className={"bg-transparent sm:bg-primary !p-0 sm:!py-5 sm:!px-8"}
      background={`bg-primary`}
    >
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mx-auto">
        <div className="p-6 md:p-8">
          <Heading aos={"zoom-in"} aosDelay={200}>
            FAQ and video
          </Heading>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sisi Kiri - DIUBAH menjadi Accordion */}
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 h-full">
                <div
                  className="flex items-center mb-6 gap-4"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  data-aos-offset="20"
                >
                  <SiImessage />
                  <h3 className="text-xl font-bold text-blue-800">
                    Special Message
                  </h3>
                </div>

                {/* --- Mulai Accordion --- */}
                <div
                  className="space-y-4"
                  data-aos="zoom-in"
                  data-aos-delay="350"
                  data-aos-offset="20"
                >
                  {messages.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      {/* Header Accordion yang bisa diklik */}
                      <button
                        onClick={() => handleAccordionClick(item.id)}
                        className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700 focus:outline-none"
                      >
                        <span>{item.title}</span>
                        {/* Ikon panah yang bisa berputar */}
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openAccordion === item.id
                              ? "transform rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      {/* Konten Accordion yang bisa membuka/menutup */}
                      <div
                        className={`accordion-content ${
                          openAccordion === item.id ? "open" : ""
                        }`}
                      >
                        <p className="p-4 pt-0 text-gray-700">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* --- Selesai Accordion --- */}

                {/* <div className="mt-8 flex items-center gap-4">
                  <IoIosGift />
                  <div>
                    <h4 className="font-bold text-blue-800">
                      A Gift From The Heart
                    </h4>
                    <p className="text-gray-600">Made with love just for you</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Sisi Kanan - Video (Tidak ada perubahan) */}
            <div
              className="md:w-1/2 flex flex-col gap-2"
              data-aos="zoom-in"
              data-aos-delay="350"
              data-aos-offset="20"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 h-full">
                <div className="bg-gray-900 p-2 overflow-hidden shadow-lg">
                  <div className="relative pt-[56.25%]">
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <div className="w-full h-full relative">
                        {isPlaying ? (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/qcYfi-2kYf0?autoplay=1&controls=1&rel=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <>
                            <img
                              src="https://img.youtube.com/vi/qcYfi-2kYf0/maxresdefault.jpg"
                              alt="video thumbnail"
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={handlePlay}
                              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 focus:outline-none"
                              aria-label="Play video"
                            >
                              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center transform hover:scale-110 transition-transform">
                                <svg
                                  className="w-8 h-8 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-2 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                <div className="bg-gray-800 p-4 flex items-center">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">
                      birthday greetings from the most handsome person
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {new Date()
                        .toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                        .replaceAll("/", "-")}
                    </p>
                  </div>
                  {!isPlaying && (
                    <button
                      onClick={handlePlay}
                      className="bg-primary hover:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
                      aria-label="Play"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Buttons onClick={() => navigate("/home")}></Buttons>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default VideoPage;

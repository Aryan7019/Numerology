import { useState, useEffect } from "react";
import { Instagram, Facebook } from "lucide-react";

function Home() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    const generateUniqueNumbers = () => {
      let numbersArray = [];
      const maxAttempts = 100;

      for (let i = 0; i < 50; i++) {
        let attempts = 0;
        let newNumber;
        let isOverlapping;

        do {
          newNumber = {
            number: Math.floor(Math.random() * 10),
            top: Math.random() * 90,
            left: Math.random() * 90,
            opacity: Math.random() * 0.5 + 0.2,
          };

          isOverlapping = numbersArray.some(
            (item) =>
              Math.abs(item.top - newNumber.top) < 5 &&
              Math.abs(item.left - newNumber.left) < 5
          );

          attempts++;
        } while (isOverlapping && attempts < maxAttempts);

        numbersArray.push(newNumber);
      }

      setRandomNumbers(numbersArray);
    };

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    generateUniqueNumbers();
  }, []);

  return (
    <div className="relative px-6 py-10 bg-gray-100 min-h-screen overflow-hidden">
      {/* Floating Random Numbers */}
      {randomNumbers.map((item, index) => (
        <span
          key={index}
          className="absolute text-orange-300 text-7xl md:text-9xl font-bold pointer-events-none"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            opacity: item.opacity,
          }}
        >
          {item.number}
        </span>
      ))}

      {/* Hero Section */}
      <div className="flex items-center justify-center mt-40">
        <div className="p-10 relative flex flex-col items-center justify-center text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl shadow-xl w-full md:w-2/3">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 md:mb-8 font-serif drop-shadow-lg">
            What is Numerology?
          </h2>
          <p className="md:text-3xl text-2xl text-white max-w-4xl mx-auto font-light leading-relaxed">
            Numerology is the study of numbers and their connection to people's lives. It offers deep insights into personality, relationships, career paths, and personal growth.
          </p>
        </div>
      </div>

      {/* Key Numerology Benefits Section */}
      <div className="relative mt-20 md:mt-32 grid gap-12 md:gap-16 max-w-6xl mx-auto z-10">
        {[
          {
            title: "Personal Growth & Self-Discovery",
            text: "Numerology helps individuals uncover their strengths, weaknesses, and life purpose, guiding them toward personal transformation.",
            img: "/images/1.jpg",
            align: "left",
          },
          {
            title: "Career & Business Success",
            text: "Understanding numerology can help in choosing the right career path, optimizing business decisions, and improving financial stability.",
            img: "/images/2.jpg",
            align: "right",
          },
          {
            title: "Relationships & Compatibility",
            text: "By analyzing life path numbers, numerology provides insights into compatibility, helping individuals build stronger and more fulfilling relationships.",
            img: "/images/3.jpg",
            align: "left",
          },
          {
            title: "Spiritual Awakening & Intuition",
            text: "Many use numerology as a tool for spiritual growth, enhancing intuition, and aligning with their higher self.",
            img: "/images/4.jpg",
            align: "right",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              item.align === "right" ? "md:flex-row-reverse" : ""
            } items-center gap-8 md:gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-36 md:w-48 h-36 md:h-48 rounded-full shadow-lg"
            />
            <div className={item.align === "right" ? "text-right" : "text-left"}>
              <h3 className="text-3xl md:text-4xl font-bold text-orange-700">
                {item.title}
              </h3>
              <p className="text-lg md:text-2xl text-gray-700 mt-4">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="relative mt-24 bg-white shadow-lg rounded-xl p-8 md:p-16 text-center z-10 max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-orange-700">
          Explore Our Features
        </h3>
        <p className="text-lg md:text-2xl text-gray-700 mt-4 max-w-4xl mx-auto">
          Our website provides powerful tools to explore numerology and
          understand its impact on your life.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          {[
            {
              title: "📊 Study Numerology",
              text: "Learn about different numerology charts, including Master numbers, destiny numbers, and more.",
            },
            {
              title: "🔢 Numerology Calculator",
              text: "Calculate your life path number, expression number, and other key numerology numbers.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 p-8 bg-orange-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-orange-700">
                {feature.title}
              </h4>
              <p className="text-lg md:text-xl text-gray-700 mt-4">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Numerologist Profiles Section */}
      <div className="relative mt-10 mx-auto max-w-6xl z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-orange-700 text-center mb-10">
          Meet Your Numerologists
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Numerologist Card */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-8">
            <img
              src="/images/Profile2.jpg"
              alt="Yashraj Guruji"
              className="w-36 md:w-48 h-36 md:h-48 rounded-full shadow-lg border-4 border-white"
            />
            <div className="w-full md:w-2/3 p-6 text-center md:text-left text-white">
              <h4 className="text-xl md:text-2xl font-semibold mb-2">Senior Vastu Consultant</h4>
              <h3 className="text-2xl md:text-3xl font-bold">Yashraj Guruji</h3>
              <p className="text-md md:text-lg mt-2">
                With years of experience in vastu and numerology, Aarav specializes in harmonizing spaces and guiding spiritual alignment.
              </p>
              <p className="mt-4">📍 C1, Yamuna Vihar, Delhi-110053</p>
              <p>📞 (+91) 9650189822 </p>
              <div className="flex justify-center md:justify-start mt-4 gap-4">
                <a
                  href="https://www.instagram.com/yashrajguruji?igsh=b2U1aXpzcXh5amI="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-300 transition-colors duration-200"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/share/16GB7zP53k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-300 transition-colors duration-200"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Second Numerologist Card */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-8">
            <img
              src="/images/Profile.jpg"
              alt="Rishabh Goel"
              className="w-36 md:w-48 h-36 md:h-48 rounded-full shadow-lg border-4 border-white"
            />
            <div className="w-full md:w-2/3 p-6 text-center md:text-left text-white">
              <h4 className="text-xl md:text-2xl font-semibold mb-2">Vastu Consultant</h4>
              <h3 className="text-2xl md:text-3xl font-bold">Rishabh Goel</h3>
              <p className="text-md md:text-lg mt-2">
                A professional numerologist helping individuals understand their life paths and harness the power of numbers.
              </p>
              <p className="mt-4">📍 C1, Yamuna Vihar, Delhi-110053</p>
              <p>📞 (+91) 9650881509</p>
              <div className="flex justify-center md:justify-start mt-4 gap-4">
                <a
                  href="https://www.instagram.com/goel_bhaiji?utm_source=qr&igsh=MTdmdTJseXdsbGV2cg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-300 transition-colors duration-200"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/share/1BTUVN8G2S/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-300 transition-colors duration-200"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;

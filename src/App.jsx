import "./App.css";
import { useState } from "react";
import GoogleLogo from "./assets/googlelogo.png";
import { IoMdSearch } from "react-icons/io";
import googleMic from "./assets/googlevoice.svg";
import googleLens from "./assets/googlelens.svg";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      <nav className="nav flex">nav</nav>
      <section className="main relative flex flex-col items-center space-y-5 self-center">
        <img src={GoogleLogo} alt="Google Logo" className="h-24 w-72" />
        <div className="flex w-[30rem] items-center justify-between gap-1 rounded-full border border-black/20 px-2 focus:shadow-lg">
          <IoMdSearch className="w-[1.2rem] text-black/40" />
          <input
            type="text"
            placeholder=""
            className="mr-0 flex-1 py-[0.55rem] outline-none"
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.location.href = `https://www.google.com/search?q=${searchInput}`;
              }
            }}
          />
          <button>
            <img src={googleMic} alt="Google Voice" className="w-7" />
          </button>
          <button>
            <img src={googleLens} alt="Google Lens" className="w-7" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <button
            onClick={() =>
              (window.location.href = `https://www.google.com/search?q=${searchInput}`)
            }
            className="mx-2 rounded-md bg-gray-100 px-4 py-[0.4rem]"
          >
            Google Search
          </button>
          <button className="mr-4 rounded-md bg-gray-100 px-4 py-[0.4rem]">
            I&apos;m Feeling Lucky
          </button>
        </div>
        <div className="flex gap-2 text-black/80">
          Google offered in:{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCM">
            हिन्दी
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCQ">
            বাংলা
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCU">
            తెలుగు
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCY">
            मराठी
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCc">
            தமிழ்
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCg">
            ગુજરાતી
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCk">
            ಕನ್ನಡ
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCo">
            മലയാളം
          </a>{" "}
          <a href="https://www.google.com/setprefs?sig=0_cHJE--mWrvugREUP7xq_EkpYnFc%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiLy6jy9YaKAxWpUPUHHa3NIEYQ2ZgBCCs">
            ਪੰਜਾਬੀ
          </a>{" "}
        </div>
      </section>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;

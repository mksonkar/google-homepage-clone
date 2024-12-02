import "./App.css";
import GoogleLogo from "./assets/googlelogo.png";
import { IoMdSearch } from "react-icons/io";
import googleMic from "./assets/googlevoice.svg";
import googleLens from "./assets/googlelens.svg";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      <div className="nav flex">nav</div>
      <div className="main relative flex flex-col items-center space-y-5 self-center">
        <img src={GoogleLogo} alt="Google Logo" className="h-24 w-72" />
        <div className="flex w-[30rem] items-center justify-between gap-1 rounded-full border border-black/20 px-2 focus:shadow-lg">
          <IoMdSearch className="w-[1.2rem] text-black/40" />
          <input
            type="text"
            placeholder=""
            className="mr-0 flex-1 rounded-full py-[0.55rem] outline-none"
          />
          <button>
            <img src={googleMic} alt="Google Voice" className="w-7" />
          </button>
          <button>
            <img src={googleLens} alt="Google Lens" className="w-7" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <button className="mx-2 rounded-md bg-gray-100 px-4 py-[0.4rem]">
            Google Search
          </button>
          <button className="mr-4 rounded-md bg-gray-100 px-4 py-[0.4rem]">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;

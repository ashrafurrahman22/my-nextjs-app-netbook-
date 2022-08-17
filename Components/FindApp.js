import Image from "next/image";
import mobile from '../assetts/Group 249.png'
import apple from '../assetts/btn-apple.png';
import play from '../assetts/btn-playstore.png';


export default function FindApp() {
  return (
    <div className="bg-base-300 px-10 pt-7 mt-12">
      <div className="flex justify-center gap-10 items-center ">
        <div className="py-10">
          <p className="text-blue-600">Get Our Application</p>
          <h2 className="text-3xl font-bold">You Can Easily Find <br /> 
          This App…!</h2>
          <p className="py-2">
            I say chap that’s suing lavatory chip shop <br /> gosh off his smashing
            boot are you taking <br /> the piss posh loo brilliant.
          </p>
          <div className="flex items-center">
          <button>
          <Image src={apple} alt="" />
          </button>
          <button>
          <Image src={play} alt="" />
          </button>
          </div>
        </div>

        <div>
          <Image src={mobile} alt="" className="mt-1" />
        </div>
      </div>
    </div>
  );
}

import img1 from '../assetts/Images.png'
import img2 from '../assetts/Images (3).png';
import img3 from '../assetts/Images (2).png';
import Image from 'next/image';

export default function Social() {
    return (
      <div className="bg-base-100 py-10">
         <div className="lg:flex justify-center items-center gap-20">
         <div>
                <p className="text-blue-700 cursor-pointer">Whats Netbooks?</p>
                <h2 className="text-4xl py-3 font-bold">Why Join to Netbook <br /> Social Network?</h2>
                <p>Recent surveys have indicated that small businesses <br /> recognise the need they have to connect with <br /> consumer.</p>
                <ul className="list-disc py-3 ml-5 font-semibold">
                    <li>Groups</li>
                    <li>Messages</li>
                    <li>Share</li>
                </ul>
          </div>

        <div className="flex gap-5">
            <Image src={img1} alt="" />
            <div className="flex flex-col gap-5">
                <Image src={img2} alt="" />
                <Image src={img3} alt="" />
            </div>
        </div>
         </div>

      </div>
    )
  }
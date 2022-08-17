import Image from 'next/image';
import img from '../assetts/Iamge.png'

export default function Heading() {
  return (
    <div className="bg-base-200 px-32 py-10">
      <div className="lg:flex justify-center items-center">
        <div>
          <button className="btn btn-info">Netbook Community</button>
          <h2 className="text-5xl font-bold py-4">
            Your Solutions For Community!
          </h2>
          <p>
            More than 2 billion people in over countries use socibook <br /> to
            stay in touch with friends & family.
          </p>
          <div className="py-4 flex gap-4">
            <button className="btn btn-primary rounded-2xl">About More</button>
            <button className="btn bg-base-100 rounded-2xl  text-black">
              Invite Friend
            </button>
          </div>
        </div>

        <div>
          <Image src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

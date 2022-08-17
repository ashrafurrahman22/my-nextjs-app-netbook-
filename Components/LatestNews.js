import Image from 'next/image';
import img1 from '../assetts/Image (2).png'
import img2 from '../assetts/Image (1).png'
import img3 from '../assetts/Image (3).png'
import arrow from '../assetts/ArrowRight.png'

export default function LatestNews() {
  return (
    <div className="px-20 py-10">

        <div className='text-center py-8'>
        <p className="text-blue-700 cursor-pointer">Get Our Application</p>
          <h2 className="text-4xl font-bold">Latest News</h2>
        </div>


      <div className="lg:grid grid-cols-3">

        {/* card */}
        <div className="card w-96 bg-base-100">
          <figure>
            <Image src={img1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div style={{height:"2px"}} className="badge badge-secondary"></div>
            It Does Not Matter Hows Slowly go as Long
            </h2>
            <p className='text-blue-600 text-center'>Continue Reading
            <Image src={arrow} alt="" />
            </p>
          </div>
        </div>

        {/* card */}
        <div className="card w-96 bg-base-100">
          <figure>
            <Image src={img2} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div style={{height:"2px"}} className="badge badge-secondary"></div>
              Netbook Network Added New Photo Filter
            </h2>
            <p className='text-blue-600 text-center'>Continue Reading
            <Image src={arrow} alt="" />
            </p>
          </div>
        </div>

        {/* card */}
        <div className="card w-96 bg-base-100">
          <figure>
            <Image src={img3} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div style={{height:"2px"}} className="badge badge-secondary"></div>
              We Optimised Netbooks Better Navigation
            </h2>
            <p className='text-blue-600 text-center'>Continue Reading
            <Image src={arrow} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

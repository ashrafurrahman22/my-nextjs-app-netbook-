import Image from 'next/image'
import star from '../assetts/Star.png'
import arrow from '../assetts/ArrowRight.png';
import people from '../assetts/people.png';
import trophy from '../assetts/Trophy.png';
import png from '../assetts/Ellipse 14.png'


export default function Reviews() {
    return (
      <div className='px-20 py-10'>
        <div className='lg:grid grid-cols-3 gap-8'>

        <div className="card w-96 bg-base-100 shadow-xl p-5">
        <div className="flex items-center justify-start">
      <div>
      <Image src={star} alt="" />
          </div> 
      <div>
          <p className='text-md font-bold mb-2 ml-3'>4.8 Rating</p>
      </div>
    </div>
  <div className="card-body">
    <h2 className="card-title">
    <Image src={people} alt="" />
      <div className="badge badge-secondary">+836k Members</div>
    </h2>
    <p>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
    <div className="card-actions justify-end">
        <p className='text-blue-600'>Join Our Community
        <Image src={arrow} alt="" />
        </p>
    </div>
  </div>
</div>

        {/* second card */}
        <div className="card w-96 bg-base-100 shadow-xl p-5">
        <div className="flex items-center justify-start">
      <div>
      <Image src={trophy} alt="" />
          </div> 
      <div>
          <p className='text-md font-bold mb-2 ml-3'>Awwards</p>
      </div>
    </div>
  <div className="card-body">
    <h2 className="card-title">
    <Image src={png} alt="" />
      <div className="badge badge-secondary">Best of 2021 on Github</div>
    </h2>
    <p>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
    <div className="card-actions justify-end">
        <p className='text-blue-600'>Go to Awwards
        <Image src={arrow} alt="" />
        </p>
    </div>
  </div>
</div>

        <div className='card card-body'>
            <p className='text-blue-600'>Our Achivement</p>
            <h2 className='text-3xl font-bold'>We are Connecting You The Digital Life.</h2>
            <p>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>
            <button className='btn btn-primary flex gap-4'>Discover Me
            <Image src={arrow} alt="" className="mt-1" />
            </button>
        </div>

        </div>
      </div>
    )
  }
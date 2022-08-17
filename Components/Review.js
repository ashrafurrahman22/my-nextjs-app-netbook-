import Image from 'next/image'
import star from '../assetts/Star.png'
import arrow from '../assetts/ArrowRight.png';
import people from '../assetts/people.png';
import trophy from '../assetts/Trophy.png';
import png from '../assetts/Ellipse 14.png'

export default function Main() {
    return (
      <div className="grid grid-cols-3 px-20 py-10 gap-6">
        
        <div className='card card-body shadow-xl'>
            <div className='flex'>
            <Image src={star} alt="" className="mt-1" />
        <p className='px-2 text-xl font-bold'>4.8 Rating</p>
            </div>

          <div className='flex items-center'>
          <Image src={people} alt="" className='mt-10' />
            <p className='mb-2'><span className='text-blue-600'>+836k</span> Members</p>
          </div>

            <p>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
            <p><small className="text-blue-800 cursor-pointer flex items-center justify-center gap-3"><p>Join Our Community</p> 
                        <Image src={arrow} alt="" className="mt-1" />
                        </small></p>
        </div>

        <div className='card card-body shadow-xl'>
            <div className='flex'>
            <Image src={trophy} alt="" className="mt-1" />
        <p className='px-2 text-xl font-semibold'>Awwards</p>
            </div>

          <div className='flex items-center'>
          <Image src={png} alt="" className='mt-10' />
            <p className='mb-2'>Best of <span className='text-blue-600'>2021</span> on Github</p>
          </div>

            <p>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
            <p><small className="text-blue-800 cursor-pointer flex items-center justify-center gap-3"><p>Go to Awwards</p> 
                        <Image src={arrow} alt="" className="mt-1" />
                        </small></p>
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
    )
  }
  
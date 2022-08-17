import Image from 'next/image'
import star from '../assetts/Star.png'
import arrow from '../assetts/ArrowRight.png';
import people from '../assetts/people.png';
import trophy from '../assetts/Trophy.png';
import png from '../assetts/Ellipse 14.png'


export default function Reviews() {
    return (
      <div className='px-20 py-10'>
        <div className='grid grid-cols-3'>

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
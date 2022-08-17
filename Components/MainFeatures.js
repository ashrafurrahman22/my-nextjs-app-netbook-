import img1 from '../assetts/icons/Icon (1).png';
import img2 from '../assetts/icons/Icon.png';
import img3 from '../assetts/icons/Icon (4).png';
import img4 from '../assetts/icons/Icon (3).png';
import img5 from '../assetts/icons/Icon (2).png';
import img6 from '../assetts/icons/Icon (5).png';
import Image from 'next/image'

export default function MainFeatures() {
    return (
      <div className='text-center pt-8'>
          <p className="text-blue-700 cursor-pointer">Our Community</p>
          <h2 className="text-4xl font-bold">Community Main Feature</h2>
          <p className="text-center pt-5">The wise man therefore always holds in these matters <br /> to this principle of selection.</p>

        <div className="text-left grid grid-cols-2 w-2/3 mx-auto px-10 py-8 gap-6">
        <div className='card card-body shadow-xl w-96'>
            <div className="flex">
            <div>
            <Image src={img1} alt="" className="mt-1" />
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Members, Friends</h3>
                <p>Members, Friends Connection ( like followers ), Private Message</p>
            </div>
            </div>
            
        </div>
        
        <div className='card card-body shadow-xl w-96'>
            <div className="flex">
            <div>
            <Image src={img2} alt="" className="mt-1" />
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Groups</h3>
                <p>Your users can create groups to let other users to join and talk</p>
            </div>
            </div>
        </div>
        <div className='card card-body shadow-xl w-96'>
            <div className="flex">
            <div>
            <Image src={img5} alt="" className="mt-1" />
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Forum</h3>
                <p>Forum is ready by BBPress. Your users can make topics and talk.</p>
            </div>
            </div>
        </div>
        <div className='card card-body shadow-xl w-96'>
            <div className="flex">
            <div>
            <Image src={img4} alt="" className="mt-1" />
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Custom Module</h3>
                <p>You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.</p>
            </div>
            </div>
        </div>
        <div className='card card-body shadow-xl w-96'>
            <div className="flex">
            <div>
            <Image src={img6} alt="" className="mt-1" />
            </div>
            <div>
                <h3 className='text-xl font-semibold'>List Builder</h3>
                <p>Members, Groups list can be modified by drag & drop live builder.</p>
            </div>
            </div>
        </div>
        <div className='card card-body shadow-xl w-96'>
            <div className="flex">
            <div>
            <Image src={img3} alt="" className="mt-1" />
            </div>
            <div>
                <h3 className='text-xl font-semibold'>List Scroll Effects</h3>
                <p>8 different scroll effects are ready.
You can always change by your tastes.</p>
            </div>
            </div>
        </div>


        </div>

      </div>
    )
  }
import Image from 'next/image'
import fahim from '../assetts/people/fahim.png';
import Kazi from '../assetts/people/Kazi.png';
import alia from '../assetts/people/alia.png';
import master from '../assetts/people/master.png';


export default function ActiveMembers() {
    return (
      <div className="text-center py-16 px-20">
          <p className="text-blue-700 cursor-pointer">Valuable Team</p>
          <h2 className="text-4xl font-bold">Our Active Members</h2>
          <p className="text-center pt-5">when an unknown printer took a galley of type and meeting <br /> fari scrambled it.</p>
        
        <div style={{width:"385px"}} className="bg-accent my-6 mx-auto rounded-xl">
            <button className="btn btn-accent w-32">Newest</button>
            <button className="btn btn-accent w-32">Popular</button>
            <button className="btn btn-primary w-32">Active</button>
        </div>

        <div className="lg:grid grid-cols-4 gap-6 pt-5 px-10">

        {/* card */}
        <div className="card w-64 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <Image src={fahim} alt="" className='rounded-xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Fahim Rahman</h2>
    <p>@rahman</p>
  </div>
</div>
        {/* card */}
        <div className="card w-64 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <Image src={Kazi} alt="" className='rounded-xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Kazi Rahman</h2>
    <p>@rahman</p>
  </div>
</div>
        {/* card */}
        <div className="card w-64 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <Image src={master} alt="" className='rounded-xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Masterero Ali</h2>
    <p>@master</p>
  </div>
</div>
        {/* card */}
        <div className="card w-64 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <Image src={alia} alt="" className='rounded-xl' />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Alia Karon</h2>
    <p>@alia</p>
  </div>
</div>

        </div>


      </div>
    )
  }
import img1 from '../assetts/Image (2).png'
import img2 from '../assetts/Image (1).png'
import img3 from '../assetts/Image (3).png'
import arrow from '../assetts/ArrowRight.png'
import Image from 'next/image'

export default function News() {
    return (
      <div className="text-center bg-base-100 px-10 py-20">
          <p className="text-blue-700 cursor-pointer">Get Our Application</p>
          <h2 className="text-4xl font-bold">Latest News</h2>

            <div className="lg:flex gap-8 justify-center items-center">
                
                <div className="py-5">
                    <Image src={img1} alt="" />
                    <div className="flex pt-5 pb-3  justify-center gap-2 w-10/12">
                    <div style={{height:"2px"}} className="bg-blue-700 mt-3 w-12"></div>
                    <p className="font-bold">It Does Not Matter Hows <br /> Slowly go as Long
                    </p>
                    </div>
                    <p><small className="text-blue-800 cursor-pointer flex items-center justify-center gap-3"><p>Continue Reading</p> 
                        <Image src={arrow} alt="" className="mt-1" />
                        </small></p>
                </div>
                <div className="py-5">
                    <Image src={img2} alt="" />
                    <div className="flex pt-5 pb-3  justify-center gap-2 w-10/12">
                    <div style={{height:"2px"}} className="bg-blue-700 mt-3 w-12"></div>
                    <p className="font-bold">Netbook Network Added <br /> New Photo Filter
                    </p>
                    </div>
                    <p><small className="text-blue-800 cursor-pointer flex items-center justify-center gap-3"><p>Continue Reading</p> 
                        <Image src={arrow} alt="" className="mt-1" />
                        </small></p>
                </div>
                <div className="py-5">
                    <Image src={img3} alt="" />
                    <div className="flex pt-5 pb-3  justify-center gap-2 w-10/12">
                    <div style={{height:"2px"}} className="bg-blue-700 mt-3 w-12"></div>
                    <p className="font-bold">We Optimised Netbooks <br /> Better Navigation
                    </p>
                    </div>
                    <p><small className="text-blue-800 cursor-pointer flex items-center justify-center gap-3"><p>Continue Reading</p> 
                        <Image src={arrow} alt="" className="mt-1" />
                        </small></p>
                </div>

            </div>

      </div>
    )
  }
  
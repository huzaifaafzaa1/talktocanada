import Image from "next/image"
import Button from "./ui/Button"

const HeroSection = () => {
  return (
    <div className='relative bg-skyBlue h-[578px] rounded-[50px] mx-10 mb-24 '>

     {/* this div is for inverted borders */}
     <div className="absolute  bg-white rounded-tl-[60px] rounded-tr-[60px]  h-[120px] w-[600px] bottom-[-50px] left-[50%] translate-x-[-50%]  before:absolute before:content-['']  before:h-[70px] before:w-[100px] before:top-0 before:left-[-88px] before:rounded-br-[60px]  before:shadow-[1px_40px] before:shadow-white after:absolute after:content-[''] after:h-[70px] after:w-[100px] after:top-0 after:right-[-88px] after:rounded-bl-[60px] after:shadow-[-1px_30px] after:shadow-white">
      <div className="my-3 flex justify-center items-center gap-10">
        <div className="h-[30px] w-[110px] flex justify-center items-center"><Image src="/logo/fidelity.svg" alt="" height={30} width={120}/></div>
        <div className="h-[50px] w-[140px] flex justify-center items-center"><Image src="/logo/UN.svg" alt="" height={50} width={160}/></div>
        <div className="h-[40px] w-[45px] flex justify-center items-center"><Image src="/logo/EY.svg" alt="" height={40} width={45} /></div>
       </div>
     </div>

     {/* boy image */}
      <div className="h-[260px] w-[260px] absolute left-[70px] top-[30px] z-10 ">
        <Image src="/images/boy.svg" alt="A young boy smiling" height={260} width={260}/>
      </div>

      {/* stars up image */}
      <div className="h-[270px] w-[290px] absolute left-[65px] top-[210px] ">
        <Image src="/illustrations/stars.svg" alt="" height={270} width={290}/>
      </div>

      {/* content in the middle */}
      <div className="text-corporateBlack h-[400px] w-[700px] absolute top-[70px] left-1/2 transform -translate-x-1/2  flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bethany text-[50px] w-[550px] text-center ">Speak clearly <br/> without accent barriers</h1>
        <p className="font-interTight w-[300px] text-center ">Refine your accent and speak with confidence. Start your journey to clear communication today by booking your call. </p>
        <Button className="text-white bg-lightishBlue my-6 h-[55px] w-[320px] rounded-[50px]">
          Schedule a Free Consultation
        </Button>
      </div>

      {/* thumbs up image*/}
      <div className="h-[230px] w-[370px] absolute top-[40px] right-[100px] ">
        <Image src="/illustrations/like.svg" alt="" height={230} width={370}/>
      </div>

      {/* girl image */}
      <div className="h-[260px] w-[260px] absolute top-[246px] right-[70px] ">
        <Image src="/images/girl.svg" alt="" height={260} width={260}/>
      </div>
     
     {/* bubble image */}
     <div className="h-[85px] w-[100px] absolute top-[250px] right-[270px] ">
      <Image src="/illustrations/bubble.svg" alt="" height={80} width={100}/>
     </div>

    </div>
  )
}

export default HeroSection

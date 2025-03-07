import Image from "next/image"
import Button from "./ui/Button"

const HeroSection = () => {
  return (
    <div className='bg-skyBlue h-[580px] relative rounded-[50px] mx-10 mb-14 border-2'>
     
     {/* boy image */}
      <div className="h-[260px] w-[260px] absolute left-[70px] top-[30px] z-10 ">
        <Image src="/images/boy.svg" alt="A young boy smiling" height={260} width={260}/>
      </div>

      {/* stars up image */}
      <div className="h-[270px] w-[290px] absolute left-[65px] top-[210px] ">
        <Image src="/illustrations/stars.svg" alt="" height={270} width={290}/>
      </div>

      {/* content in the middle */}
      <div className="text-corporateBlack h-[400px] w-[650px] absolute top-[70px] left-1/2 transform -translate-x-1/2  flex flex-col gap-4 items-center justify-center ">
        <h1 className="font-bethany text-[45px] w-[475px] text-center ">Speak clearly <br/> without accent barriers</h1>
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

import Image from "next/image"

const VideoSection = () => {
  return (
    <div id="video-section" className="relative h-[700px] max-w-[1270px] flex justify-center items-center mx-auto mt-28 ">
      <Image src="/images/laptopuser1.jpg" alt="laptop user" fill  className="h-[100%] w-[100%] rounded-[50px]"/>
      <div className="absolute border-2 border-white  h-[140px] w-[140px] rounded-[50%] flex justify-center items-center">
        <Image src="/illustrations/play.svg" alt="" height={50} width={50}/>
      </div>
      {/* this div is for inveted borders */}
      <div className=" absolute bg-white h-[100px] w-[100px] right-0 bottom-0 rounded-tl-[20px] before:absolute before:content-['']  before:h-[30px] before:w-[30px] before:top-[-30px] before:right-0 before:rounded-br-[20px] before:shadow-[13px_0px] before:shadow-white after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bottom-0 after:left-[-30px] after:rounded-br-[20px] after:shadow-[6px_6px] after:shadow-white" >

      </div>
    </div>
  )
}

export default VideoSection

import Image from "next/image"

const AboutOwner = () => {
  return (
    <div id="about-owner" className="AboutOwner  max-w-[1270px]  flex gap-8 mt-28 mx-auto ">
        <div className="h-[400px] w-[350px] relative ">
            <Image src="/images/owner.png" className="h-[100%] w-[100%] rounded-[30px]" alt="" fill/>
            <div className="absolute bg-white h-[67px] w-[200px] bottom-0 left-0 rounded-tr-[20px] before:absolute before:content-[''] before:h-[30px] before:w-[30px] before:left-0 before:top-[-30px] before:rounded-bl-[20px] before:shadow-[-6px_6px] before:shadow-white after:absolute after:content[''] after:h-[30px] after:w-[30px] after:bottom-0 after:right-[-30px] after:rounded-bl-[20px] after:shadow-[-6px_6px] after:shadow-white">
              <div className="font-interTight m-3">
              <p className="text-corporateBlack">Marc Anderson</p>
              <p className="text-grey">Owner — TalktoCanada</p> 
              </div>
            </div>
        </div>
        <div className=" w-[650px] text-corporateBlack flex flex-col gap-3 ">
            <h1 className="font-bethany mt-10 text-[34px]">“An accent reduction program <br/> made just for you”</h1>
            <p className="font-interTight">
               I know you want to be understood clearly and confidently in your professional life. You&apos;ve hoped your accent would become less of a barrier, but progress has stalled. I understand how frustrating this can be, and I&apos;m here to help.
            </p>

            <p className="font-interTight">
              That&apos;s why we created our specialized accent reduction program.
            </p>

            <p className="font-interTight">
              Let&apos;s work together to achieve the clear communication you need to succeed.
            </p>

        </div>      
    </div>
  )
}

export default AboutOwner

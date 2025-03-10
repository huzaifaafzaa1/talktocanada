import Image from "next/image"

const AboutOwner = () => {
  return (
    <div className="AboutOwner mx-10  flex gap-8 mb-14  ">
        <div className="h-[400px] w-[350px] ">
            <Image src="/images/man.svg" className="!h-[400px]" alt="" height={400} width={350}/>
        </div>
        <div className=" w-[650px] text-corporateBlack flex flex-col gap-3 ">
            <h1 className="font-bethany mt-10 text-[34px]">“An accent reduction program <br/> made just for you”</h1>
            <p className="font-interTight">I know you want to be understood clearly and confidently in your professional life. You've hoped your accent would become less of a barrier, but progress has stalled. I understand how frustrating this can be, and I’m here to help.</p>
            <p className="font-interTight">That’s why we created our specialized accent reduction program. Designed for professionals like you, it aims to improve clarity and confidence in spoken English. Our expert teachers are ready to provide the targeted support you need to excel in your career.</p>
            <p className="font-interTight">Let’s work together to achieve the clear communication you need to succeed.</p>
        </div>      
    </div>
  )
}

export default AboutOwner

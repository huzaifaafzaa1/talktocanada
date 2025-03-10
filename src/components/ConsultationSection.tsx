import Button from "./ui/Button"

const ConsultationSection = () => {
  return (
    <div className='mx-10 mb-32 flex flex-col justify-center items-center'>
      <h1 className=' w-[800px] font-interTight text-corporateBlack text-[50px] text-center'>
        Schedule a free consultation call and let’s chat about how we can help you refine your accent.
      </h1>
      <Button className="text-white bg-lightishBlue my-6 h-[55px] w-[320px] rounded-[50px]">
          Get a Free Consultation-Call
      </Button>
    </div>
  )
}

export default ConsultationSection

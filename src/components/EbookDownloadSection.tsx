import Image from "next/image"
import Form from "./ui/Form"

const EbookDownloadSection = () => {
  return (
    <div className="font-interTight mx-10 mb-14 rounded-[40px] bg-corporateBlack flex ">
        <div className="h-[500px] w-[480px] mx-10 ">
          <Image src="/images/book.png" alt="book" height={500} width={480} className="-mt-24"/>
        </div>
        <div className="flex flex-col justify-center">
            <h1 className="w-[500px] text-[30px] text-white">Download our new e-book for free, packed with tips and exercises to help you speak clearly and confidently.</h1>
            <Form/>
        </div>
    </div>
  )
}

export default EbookDownloadSection

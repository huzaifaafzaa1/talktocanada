import Image from "next/image"
import Form from "./ui/Form"

const EbookDownloadSection = () => {
  return (
    <div id="ebook-download" className="relative font-interTight mx-auto my-28 rounded-[40px] bg-corporateBlack flex max-w-[1270px]">
        {/* this div is for inverted borders */}
        <div className="absolute top-0 right-0 bg-white h-[100px] w-[90px] rounded-bl-[20px] before:absolute before:content-['']  before:h-[30px] before:w-[30px] before:top-0 before:left-[-30px] before:rounded-tr-[20px] before:shadow-[4px_-7px] before:shadow-white  after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:top-[100px] after:right-0 after:rounded-tr-[20px] after:shadow-[4px_-7px] after:shadow-white">
        </div> 
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

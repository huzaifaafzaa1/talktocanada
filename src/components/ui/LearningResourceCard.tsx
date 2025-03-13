import Image from "next/image";

type LearningResourceCardProps = {
  image: string;
  title: string;
  description: string;
};

const LearningResourceCard: React.FC<LearningResourceCardProps> = ({ image, title, description }) => {
  return (
    <div className="relative rounded-[40px] w-[800px] h-[450px] bg-skyBlue flex flex-col justify-center items-center">
       {/* this div is for inverted borders */}
        <div className="absolute top-0 left-0 bg-white h-[60px] w-[70px] rounded-br-[20px] before:absolute before:content-[''] before:top-0 before:left-[70px] before:h-[30px] before:w-[30px] before:rounded-tl-[20px] before:shadow-[-6px_-6px] before:shadow-white after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:top-[60px] after:left-0  after:rounded-tl-[20px] after:shadow-[-6px_-6px] after:shadow-white ">
          
        </div>
        <div className="flex justify-center items-center w-[400px] h-[250px] ">
          <Image src={image} alt={title} width={400} height={250} />
        </div>
        <h1 className="text-corporateBlack font-interTight text-center font-medium text-[30px] ">{title}</h1>
        <p className="w-[400px] text-corporateBlack font-interTight text-center">{description}</p>
    </div>
  );
};

export default LearningResourceCard;

import Image from "next/image";

type LearningResourceCardProps = {
  image: string;
  title: string;
  description: string;
};

const LearningResourceCard: React.FC<LearningResourceCardProps> = ({ image, title, description }) => {
  return (
    <div className="rounded-[40px] w-[800px] h-[450px] bg-skyBlue flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-[400px] h-[250px] ">
          <Image src={image} alt={title} width={400} height={250} />
        </div>
        <h1 className="text-corporateBlack font-interTight text-center font-medium text-[30px] ">{title}</h1>
        <p className="w-[400px] text-corporateBlack font-interTight text-center">{description}</p>
    </div>
  );
};

export default LearningResourceCard;

import Image from "next/image";

type LearningResourceCardProps = {
  image: string;
  title: string;
  description: string;
};

const LearningResourceCard: React.FC<LearningResourceCardProps> = ({ image, title, description }) => {
  return (
    <div className="rounded-[40px] flex flex-col justify-center items-center gap-2 h-[400px] w-[400px] border-2">
        <div className="flex justify-center items-center w-[120px] h-[160px] ">
          <Image src={image} alt={title} width={130} height={160} />
        </div>
        <div>
            <h1 className="text-corporateBlack font-interTight text-center font-medium text-[30px] ">{title}</h1>
            <p  className=" text-corporateBlack font-interTight text-center">{description}</p>
        </div>
        
    </div>
  );
};

export default LearningResourceCard;

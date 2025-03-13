import Image from "next/image";

type StatsCardProps = {
  image: string;
  title: string;
  description: string;
  borderPosition: "left" | "right";
};

const StatsCard: React.FC<StatsCardProps> = ({ image, title, description, borderPosition }) => {
  return (
    <div className="relative rounded-[40px] flex flex-col justify-center items-center gap-2 h-[400px] w-[400px] border-2">
      <div className="flex justify-center items-center w-[120px] h-[160px]">
        <Image src={image} alt={title} width={130} height={160} />
      </div>
      <div>
        <h1 className="text-corporateBlack font-interTight text-center font-medium text-[30px]">
          {title}
        </h1>
        <p className="text-corporateBlack font-interTight text-center">{description}</p>
      </div>

      {/* Conditional rendering for inverted borders */}
      {borderPosition === "right" ? (
        <div className=" border-t-2 border-l-2 absolute h-[60px] w-[70px] right-[-2px] bottom-[-2px] rounded-tl-[20px] bg-white before:absolute  before:content-[''] before:h-[30px] before:w-[30px]  before:top-[-30px] before:right-0 before:rounded-br-[20px] before:shadow-[5px_8px] before:shadow-white before:border-r-2 before:border-b-2 after:absolute  after:content-[''] after:h-[30px] after:w-[30px] after:bottom-0 after:left-[-30px] after:rounded-br-[20px] after:shadow-[5px_8px] after:shadow-white after:border-r-2 after:border-b-2"></div>
      ) : (
        <div className="absolute h-[60px] w-[70px] left-[-2px] bottom-[-2px] rounded-tr-[20px] bg-white before:absolute border-r-2 border-t-2 before:content-['']  before:h-[30px] before:w-[30px] before:left-0 before:top-[-30px] before:rounded-bl-[20px] before:shadow-[-13px_2px] before:shadow-white before:border-l-2 before:border-b-2 after:absolute after:content-[''] after:h-[30px] after:w-[30px] after:bottom-0  after:right-[-30px] after:rounded-bl-[20px] after:shadow-[-12px_2px] after:shadow-white after:border-l-2 after:border-b-2"></div>
      )}
    </div>
  );
};

export default StatsCard;

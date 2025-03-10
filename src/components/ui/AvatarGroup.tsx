import Image from "next/image";

const AvatarGroup: React.FC = () => {
  const avatars = [
    "/avatar/avatar1.png",
    "/avatar/avatar2.png",
    "/avatar/avatar3.png",
    "/avatar/avatar4.png",
    "/avatar/avatar5.png",
    "/avatar/avatar6.png",
    "/avatar/avatar7.png",
    "/avatar/avatar8.png",
    "/avatar/avatar9.png",
  ];

  return (
    <div className="flex items-center p-4 rounded-lg">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`w-[150px] h-[150px] flex justify-center pt-4 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-300 ${
            index !== 0 ? "-ml-4" : ""
          } z-[${avatars.length - index}]`}
        >
          <Image
            src={avatar}
            alt={`Avatar ${index}`}
            width={150}
            height={150}
            className=""
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;

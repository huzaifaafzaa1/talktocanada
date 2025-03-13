import LearningResourceCard from "./ui/LearningResourceCard"

const LearningResources = () => {
  const resources = [
    {
      image: "/illustrations/roleplay.svg",
      title: "Role-Play & Simulations",
      description: "We'll simulate dealing with customers, colleagues and your boss to get rid of nerves and embarrassment.",
    },
    {
      image: "/illustrations/game.svg",
      title: "Games",
      description: "Play a variety of fun games to sharpen your skills and stay motivated.",
    },
    {
      image: "/illustrations/quizzesandtests.svg",
      title: "Quizzes & Tests",
      description: "Apply what you've learned through short quizzes to strengthen your confidence and comprehension.",
    },
  ];
  return (
    <div className="LearningResources mx-10 mb-24 flex justify-between">
        <h1 className="font-interTight text-corporateBlack text-[50px] ml-2">Several<br/>learning tools</h1> 
        <div className="flex flex-col gap-6 ">
        {resources.map((resource, index) => (
        <LearningResourceCard key={index} {...resource} />
      ))}
        </div>     
    </div>
  )
}

export default LearningResources

import HeroSection from "@/components/HeroSection";
import AboutOwner from "@/components/AboutOwner";
import MeetExperts from "@/components/MeetExperts";
import StudentExperiences from "@/components/StudentExperiences";
import LearningResources from "@/components/LearningResources";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutOwner/>
      <MeetExperts/>
      <StudentExperiences/>
      <LearningResources/>
    </div>
  );
}

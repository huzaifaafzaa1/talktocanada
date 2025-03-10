import HeroSection from "@/components/HeroSection";
import AboutOwner from "@/components/AboutOwner";
import MeetExperts from "@/components/MeetExperts";
import StudentExperiences from "@/components/StudentExperiences";
import LearningResources from "@/components/LearningResources";
import VideoSection from "@/components/VideoSection";
import StatsSection from "@/components/StatsSection";
import ConsultationSection from "@/components/ConsultationSection";
import EbookDownloadSection from "@/components/EbookDownloadSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <AboutOwner/>
      <MeetExperts/>
      <StudentExperiences/>
      <LearningResources/>
      <VideoSection/>
      <StatsSection/>
      <ConsultationSection/>
      <EbookDownloadSection/>
    </div>
  );
}

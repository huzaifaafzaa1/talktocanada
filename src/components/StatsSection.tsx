import StatsCard from "./ui/StatsCard"

import React from 'react'

const StatsSection = () => {
    const stats = [
        {
          image: "/illustrations/worldwide.svg",
          title: "5 250+",
          description: "Students Worldwide",
        },
        {
          image: "/illustrations/hours.svg",
          title: "86 500+",
          description: "Hours Taught",
        },
        {
          image: "/illustrations/satisfaction.svg",
          title: "100% Satisfaction",
          description: "or Your Money Back",
        },
      ];
  return (
    <div className="mx-10 mb-14 flex gap-9">
        {stats.map((resource, index) => (
        <StatsCard key={index} {...resource} />
      ))}
    </div>
  )
}

export default StatsSection

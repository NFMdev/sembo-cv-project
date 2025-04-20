import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, ResponsiveContainer
} from "recharts";

const data = [
  { skill: "Communication", value: 85 },
  { skill: "Adaptability", value: 90 },
  { skill: "Problem-solving", value: 95 },
  { skill: "Teamwork", value: 90 },
  { skill: "Ownership", value: 90 },
  { skill: "Continuous Learning", value: 85 },
];

export const SkillsRadarChart = () => {
  return (
    <div className="soft-skills-chart">
      <h3>Soft Skills</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <Radar name="Skills" dataKey="value" stroke="#6366F1" fill="#6366F1" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

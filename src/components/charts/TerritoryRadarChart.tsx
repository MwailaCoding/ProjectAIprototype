import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface TerritoryRadarChartProps {
  data: Array<{ name: string; progress: number }>;
}

export default function TerritoryRadarChart({ data }: TerritoryRadarChartProps) {
  const chartData = data.map(item => ({
    territory: item.name,
    progress: item.progress
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={chartData} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
        <PolarGrid />
        <PolarAngleAxis 
          dataKey="territory" 
          tick={{ fill: '#94a3b8', fontSize: 12 }}
        />
        <PolarRadiusAxis 
          angle={90} 
          domain={[0, 100]} 
          tick={{ fill: '#94a3b8', fontSize: 10 }}
        />
        <Radar
          name="Progress"
          dataKey="progress"
          stroke="#06b6d4"
          fill="#06b6d4"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}


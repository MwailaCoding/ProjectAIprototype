import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MountainBarChartProps {
  data: Array<{ name: string; progress: number; color: string }>;
}

export default function MountainBarChart({ data }: MountainBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis 
          dataKey="name" 
          angle={-45}
          textAnchor="end"
          height={80}
          tick={{ fill: '#94a3b8', fontSize: 11 }}
          stroke="#475569"
        />
        <YAxis 
          domain={[0, 100]}
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          stroke="#475569"
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px'
          }}
          itemStyle={{ color: '#f8fafc' }}
        />
        <Bar 
          dataKey="progress" 
          radius={[8, 8, 0, 0]}
        >
          {data.map((entry, index) => (
            <Bar key={`cell-${index}`} fill={entry.color.includes('blue') ? '#3b82f6' : 
                                                 entry.color.includes('red') ? '#ef4444' :
                                                 entry.color.includes('green') ? '#22c55e' :
                                                 entry.color.includes('purple') ? '#a855f7' :
                                                 entry.color.includes('pink') ? '#ec4899' :
                                                 entry.color.includes('orange') ? '#f97316' : '#eab308'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}


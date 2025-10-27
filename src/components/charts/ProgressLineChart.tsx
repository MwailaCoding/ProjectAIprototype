import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ProgressLineChartProps {
  data: Array<{ date: string; king: number; priest: number }>;
}

export default function ProgressLineChart({ data }: ProgressLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis 
          dataKey="date" 
          tick={{ fill: '#94a3b8', fontSize: 12 }}
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
        <Legend 
          wrapperStyle={{ color: '#94a3b8', fontSize: '12px' }}
        />
        <Line 
          type="monotone" 
          dataKey="king" 
          stroke="#3b82f6" 
          strokeWidth={2}
          name="King Score"
          dot={{ fill: '#3b82f6', r: 4 }}
        />
        <Line 
          type="monotone" 
          dataKey="priest" 
          stroke="#a855f7" 
          strokeWidth={2}
          name="Priest Score"
          dot={{ fill: '#a855f7', r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}


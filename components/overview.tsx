/*"use client";
import{Line,LineChart,ResponsiveContainer,XAxis,YAxis} from "recharts";

interface OverviewProps{
  data:any[]
}

export const Overview:React.FC<OverviewProps>=({
  data
}) =>{
  return(
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) =>`$${value}`}
        />
        <Line datakey="total" fill="#8884d8" radius={[4,4,0,0]}/>
      </LineChart>
    </ResponsiveContainer>

  )
}*/
"use client";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart, Legend } from "recharts";

interface OverviewProps {
  data: any[];
}

export const Overview: React.FC<OverviewProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Grid */}
        <CartesianGrid strokeDasharray="3 3" />

        {/* X and Y Axes */}
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />

        {/* Area with Gradient */}
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorTotal)"
        />

        {/* Tooltip and Legend */}
        <Tooltip />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
};

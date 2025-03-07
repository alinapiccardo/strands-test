//TASK 3: Displaying the results
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PieChartProps {
  data: { [key: string]: number };
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4560", "#775DD0", "#F3A500", "#E90052", "#60B3F7"];

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  const sortedData = Object.entries(data)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value], index) => ({
      name,
      value,
      color: COLORS[index % COLORS.length],
    }));

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie data={sortedData} cx="50%" cy="50%" outerRadius="80%" dataKey="value" label>
            {sortedData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;

//TASK 3: Displaying the results
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PieChartProps {
  data: { [key: string]: number };
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4560", "#775DD0", "#F3A500", "#E90052", "#60B3F7"];

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  console.log("data", data);
  const totalValue = Object.values(data).reduce((acc, value) => acc + value, 0);
  const sortedData = Object.entries(data)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value], index) => ({
      name,
      value,
      percentage: `${((value / totalValue) * 100).toFixed(2)}%`,
      color: COLORS[index % COLORS.length],
    }));
  console.log("sortedData", sortedData);

  return (
    <div className="w-full mx-auto overflow-hidden">
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie data={sortedData} cx="50%" cy="50%" outerRadius="80%" dataKey="value" label={({ percentage }) => `${percentage}`}>
            {sortedData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name, props) => [`${value} (${props.payload.percentage})`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;

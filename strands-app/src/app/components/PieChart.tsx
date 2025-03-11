//TASK 3: Displaying the results
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PieChartProps {
  data: { [key: string]: number };
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#f74412", "#ff2b4b", "#d05dbf", "#cd5be2", "#5c017d", "#1d2e9a"];

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
    <div className="w-2/3 mx-auto overflow-hidden">
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie data={sortedData} cx="50%" cy="50%" outerRadius="80%" dataKey="value" label={({ percentage, name }) => `${name}: ${percentage} `} labelLine={false}>
            {sortedData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name, props) => [`${props.payload.percentage}`, name]} />
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;

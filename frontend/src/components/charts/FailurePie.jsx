import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#D6B46A", "#9CA3AF", "#6B7280", "#4B5563"];

export default function FailurePie({ data }) {
  return (
    <div className="bg-[#121316] border border-white/10 rounded-xl p-6">
      <h3 className="text-white font-semibold mb-4">
        Failure Distribution
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="reason"
            innerRadius={60}
            outerRadius={90}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

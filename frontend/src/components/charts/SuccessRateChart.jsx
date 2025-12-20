import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SuccessRateChart({ data }) {
  return (
    <div className="bg-[#121316] border border-white/10 rounded-xl p-6">
      <h3 className="text-white font-semibold mb-4">
        Success Rate Trend
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="successRate"
            stroke="#D6B46A"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

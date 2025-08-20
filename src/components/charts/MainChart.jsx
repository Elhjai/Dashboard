import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  { name: "Jan", inflow: 35, commission: 20, gmv: 10 },
  { name: "Feb", inflow: 25, commission: 30, gmv: 12 },
  { name: "Mar", inflow: 15, commission: 10, gmv: 5 },
  { name: "Apr", inflow: 20, commission: 15, gmv: 6 },
  { name: "May", inflow: 18, commission: 25, gmv: 8 },
  { name: "Jun", inflow: 35, commission: 50, gmv: 15 },
  { name: "Jul", inflow: 28, commission: 35, gmv: 18 },
  { name: "Aug", inflow: 32, commission: 25, gmv: 20 },
  { name: "Sep", inflow: 34, commission: 33, gmv: 9 },
];

const SalesOverview = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-7 relative"> {/* Reduced padding from p-5 to p-4 (16px) */}
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
          <p className="text-xs text-gray-500">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <button className="border px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-100">
          View Transactions
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-end mt-1 space-x-2"> {/* Reduced margin from mt-2 to mt-1 (4px) */}
        <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded-full">
          1 Week
        </button>
        <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded-full">
          1 Month
        </button>
        <button className="px-3 py-1 text-xs bg-gray-200 text-gray-900 rounded-full">
          1 Year
        </button>
      </div>

      <div className="grid grid-cols-12 gap-3 mt-3 relative"> {/* Reduced margin from mt-4 to mt-3 (12px) and gap from 4 to 3 */}
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 shadow">
          <ChevronLeft size={16} />
        </button>

        {/* Chart */}
        <div className="col-span-7 h-44"> {/* Reduced height from h-48 to h-44 (176px) */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap={10}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" fontSize={11} />
              <YAxis fontSize={11} />
              <Tooltip />
              <Bar dataKey="inflow" fill="#3B82F6" radius={[3, 3, 0, 0]} />
              <Bar dataKey="commission" fill="#22C55E" radius={[3, 3, 0, 0]} />
              <Bar dataKey="gmv" fill="#EF4444" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 shadow">
          <ChevronRight size={16} />
        </button>

        {/* Stats */}
        <div className="col-span-5 grid grid-cols-2 gap-2"> {/* Reduced gap from 3 to 2 */}
          <div className="border rounded-xl py-1 px-2"> {/* Reduced padding from py-2 to py-1 */}
            <p className="text-blue-600 font-bold text-sm">₦120,000,000.00</p>
            <p className="text-gray-600 text-xs">
              Total Inflow <span className="text-green-500">▲ 2.5%</span>
            </p>
          </div>
          <div className="border rounded-xl p-2"> {/* Reduced padding from p-3 to p-2 */}
            <p className="text-green-600 font-bold text-sm">₦50,000,000.00</p>
            <p className="text-gray-600 text-xs">
              MRR <span className="text-green-500">▲ 2.5%</span>
            </p>
          </div>
          <div className="border rounded-xl p-2"> {/* Reduced padding from p-3 to p-2 */}
            <p className="text-green-600 font-bold text-sm">₦200,000,000.00</p>
            <p className="text-gray-600 text-xs">
              Commission Revenue <span className="text-green-500">▲ 0.5%</span>
            </p>
          </div>
          <div className="border rounded-xl p-2"> {/* Reduced padding from p-3 to p-2 */}
            <p className="text-red-600 font-bold text-sm">₦100,000,000.00</p>
            <p className="text-gray-600 text-xs">
              GMV <span className="text-red-500">▼ 0.5%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
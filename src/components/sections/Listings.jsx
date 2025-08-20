import { Home } from "lucide-react";

const Listings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Home className="text-blue-600 mr-2" size={20} />
          <h2 className="text-lg font-semibold">Listings Overview</h2>
        </div>
        <button className="text-blue-600">View all &gt;</button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-gray-500">Total</p>
          <p className="font-bold text-xl">1.8k</p>
        </div>
        <div>
          <p className="text-gray-500">Active</p>
          <p className="font-bold text-xl">80</p>
        </div>
        <div>
          <p className="text-gray-500">Archived</p>
          <p className="font-bold text-xl">1k</p>
        </div>
      </div>
    </div>
  );
};

export default Listings;
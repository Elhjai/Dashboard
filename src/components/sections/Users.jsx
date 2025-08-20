import { Users as UsersIcon } from "lucide-react";

const Users = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <UsersIcon className="text-blue-600 mr-2" size={20} />
          <h2 className="text-lg font-semibold">Users Overview</h2>
        </div>
        <button className="text-blue-600">View all &gt;</button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-gray-500">Total</p>
          <p className="font-bold text-xl">20.7k</p>
        </div>
        <div>
          <p className="text-gray-500">Riders</p>
          <p className="font-bold text-xl">8.5k</p>
        </div>
        <div>
          <p className="text-gray-500">Subscribers</p>
          <p className="font-bold text-xl">7.5k</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
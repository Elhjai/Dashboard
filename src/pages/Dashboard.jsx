import TopNavbar from '../components/layout/TopNavbar';
import Navbar from '../components/layout/Navbar';
import WelcomeAlert from '../components/ui/Alert';
import MainChart from '../components/charts/MainChart';
import Listings from '../components/sections/Listings';
import Users from '../components/sections/Users';
import Gallery from '../components/sections/Gallery.jsx';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <Navbar />
      <div className="p-4 sm:p-6 md:ml-10 md:mr-10">
        <WelcomeAlert name="Ahmed" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="md:col-span-2 space-y-4 sm:space-y-6">
            <MainChart />
          </div>
          
          {/* Sidebar content */}
          <div className="space-y-4 sm:space-y-6">
            <Listings />
            <Users />
          </div>
          
          {/* Full width content at bottom */}
          <div className="md:col-span-3">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

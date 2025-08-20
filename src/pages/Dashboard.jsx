import TopNavbar from '../components/layout/TopNavbar';
import Navbar from '../components/layout/Navbar';
import WelcomeAlert from '../components/ui/Alert';
import MainChart from '../components/charts/MainChart.jsx';
import Listings from '../components/sections/Listings';
import Users from '../components/sections/Users';
import Gallery from '../components/sections/Gallery.jsx';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <Navbar />
      <div className="p-6 ml-10 mr-10">
        <WelcomeAlert name="Ahmed" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <MainChart />
            
          </div>
          <div className="space-y-6">
            <Listings />
            <Users />
          </div>
          <div className='lg:col-span-3'>
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
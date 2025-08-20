import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Bell,
  Calculator,
  Calendar,
  Mail,
  User,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Lock,
  Shield,
  LogOut,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  MessageSquare,
  Globe,
  Contact
} from 'lucide-react';

const icons = [
  { id: 'alert', icon: <Bell size={25} strokeWidth={3} /> },
  { id: 'budget', icon: <Calculator size={25} strokeWidth={3} /> },
  { id: 'calendar', icon: <Calendar size={25} strokeWidth={3} /> },
  { id: 'news', icon: <Mail size={25} strokeWidth={3} /> },
  { id: 'profile', icon: <User size={25} strokeWidth={3} /> }
];

const AlertComponent = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      icon: AlertTriangle,
      title: 'Budget Variance Alert',
      message: 'Marketing department spending is 15% over budget this month',
      time: '2 hours ago',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 2,
      type: 'success',
      icon: CheckCircle,
      title: 'Budget Approved',
      message: 'Q4 budget proposal has been approved by finance team',
      time: '4 hours ago',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 3,
      type: 'info',
      icon: Clock,
      title: 'Reminder',
      message: 'Monthly budget review meeting scheduled for tomorrow at 2 PM',
      time: '6 hours ago',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 4,
      type: 'warning',
      icon: TrendingUp,
      title: 'Revenue Update',
      message: 'Monthly revenue target achieved 2 days ahead of schedule',
      time: '1 day ago',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Alerts & Notifications</h2>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`${alert.bgColor} ${alert.borderColor} border rounded-lg p-4 hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start space-x-3">
              <alert.icon size={20} className={`${alert.color} mt-0.5 flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  {alert.title}
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  {alert.message}
                </p>
                <p className="text-xs text-gray-500">
                  {alert.time}
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
          Mark All as Read
        </button>
      </div>
    </div>
  );
};


const NewsComponent = () => {
  const newsItems = [
    {
      id: 1,
      category: 'Finance',
      title: 'New Budget Management Features Released',
      excerpt: 'Enhanced forecasting tools and real-time analytics now available for all premium users.',
      author: 'Sarah Johnson',
      publishedAt: '3 hours ago',
      readTime: '2 min read',
      image: '📊'
    },
    {
      id: 2,
      category: 'Company',
      title: 'Q3 Financial Results Exceed Expectations',
      excerpt: 'Revenue growth of 25% year-over-year demonstrates strong market position and operational efficiency.',
      author: 'Michael Chen',
      publishedAt: '1 day ago',
      readTime: '4 min read',
      image: '📈'
    },
    {
      id: 3,
      category: 'Product',
      title: 'Integration with Leading Accounting Platforms',
      excerpt: 'Seamlessly connect with QuickBooks, Xero, and other major accounting software solutions.',
      author: 'Emily Rodriguez',
      publishedAt: '2 days ago',
      readTime: '3 min read',
      image: '🔗'
    },
    {
      id: 4,
      category: 'Industry',
      title: 'Digital Transformation in Financial Management',
      excerpt: 'How modern businesses are leveraging technology to streamline their financial operations and improve decision-making.',
      author: 'David Thompson',
      publishedAt: '3 days ago',
      readTime: '5 min read',
      image: '💼'
    }
  ];

  return (
    <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">News & Updates</h2>
        <Globe size={24} className="text-gray-700" />
      </div>
      
      <div className="space-y-4">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
          >
            <div className="flex items-start space-x-4">
              <div className="text-2xl flex-shrink-0">
                {item.image}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.publishedAt}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>By {item.author}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MessageSquare size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          View All News
        </button>
      </div>
    </div>
  );
};


const BudgetSetupCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="bg-slate-800 px-6 py-8 flex justify-center rounded-t-lg">
        <div className="w-12 h-12 border-2 border-white rounded-xl flex flex-col items-center justify-center">
          <div className="w-6 h-1.5 bg-white rounded-full mb-1"></div>
          <div className="grid grid-cols-3 gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex items-start space-x-3">
          <div className="flex flex-col items-center mt-1">
            <div className="w-1.5 h-1.5 border-2 border-gray-400 rounded-full"></div>
            <div className="w-0.5 h-6 bg-gray-300 mt-1"></div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Set up annual budgets by account category
            </h3>
            <p className="text-xs text-gray-600">
              Allocate funds across income and expense lines with full visibility.
            </p>
          </div>
        </div>

        {/* Second feature */}
        <div className="flex items-start space-x-3">
          <div className="flex flex-col items-center mt-1">
            <div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            </div>
            <div className="w-0.5 h-6 bg-gray-300 mt-1"></div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Track actuals vs budget in real time
            </h3>
            <p className="text-xs text-gray-600">
              See how your community is performing against plan, month by month.
            </p>
          </div>
        </div>

        {/* Third feature */}
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-5 h-5 mt-1">
            <div className="w-5 h-5">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-400">
                <rect x="3" y="14" width="4" height="6" fill="currentColor"/>
                <rect x="10" y="10" width="4" height="10" fill="currentColor"/>
                <rect x="17" y="6" width="4" height="14" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Adjust figures and forecast with ease
            </h3>
            <p className="text-xs text-gray-600">
              Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.
            </p>
          </div>
        </div>

        {/* Create Budget Button */}
        <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Create Budget
        </button>
      </div>
    </div>
  );
};

// Calendar Component 
const CalendarComponent = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  const calendarDays = [
    // October carryover
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    // November days
    { day: 1, isCurrentMonth: true, isFirstDay: true, monthLabel: 'Nov' },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true },
    // December carryover
    { day: 1, isCurrentMonth: false, isFirstDay: true, monthLabel: 'Dec' },
    { day: 2, isCurrentMonth: false },
    { day: 3, isCurrentMonth: false },
    { day: 4, isCurrentMonth: false },
    { day: 5, isCurrentMonth: false },
    { day: 6, isCurrentMonth: false },
    { day: 7, isCurrentMonth: false },
    { day: 8, isCurrentMonth: false },
  ];

  return (
    <div className="h-full flex flex-col bg-black rounded-lg border border-gray-700 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="p-1 hover:bg-gray-800 rounded text-gray-300">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-medium text-gray-300">November 2023</h2>
        <button className="p-1 hover:bg-gray-800 rounded text-gray-300">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Days of week header */}
      <div className="grid grid-cols-7 mb-2 border-b border-gray-700">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-xs text-gray-500 text-center py-2 font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 flex-1 border-t border-l border-gray-700">
        {calendarDays.map((date, index) => (
          <div 
            key={index} 
            className="relative border-r border-b border-gray-700"
            style={{ minHeight: '48px' }}
          >
            <button
              className={`
                w-full h-full text-xs flex items-start justify-start pt-1 pl-1
                ${date.isCurrentMonth 
                  ? 'text-gray-600 hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-900'
                }
              `}
            >
              {date.day}
            </button>
            {date.isFirstDay && (
              <div className="absolute top-1 left-1 flex items-center">
                <span className="text-[10px] text-gray-400 font-medium mr-1">
                  {date.monthLabel}
                </span>
                <span className="text-[10px] text-gray-400">
                  {date.day}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
// User Profile Menu Component 
const UserProfileMenu = () => {
  const menuItems = [
    { icon: Users, label: 'Teams', color: 'text-gray-700' },
    { icon: Contact, label: 'Contact Persons', color: 'text-gray-700' },
    { icon: Lock, label: 'Change password', color: 'text-gray-700' },
    { icon: Shield, label: '2 - Factor Authentication', color: 'text-gray-700' },
    { icon: LogOut, label: 'Logout', color: 'text-red-500' },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden" style={{ width: '320px' }}>
      {/* User info header */}
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F4F4F' }}>
            <span className="text-white font-semibold text-xl">D</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Dylan Frank</h3>
            <p className="text-sm text-gray-500">dylan96@mail.com</p>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center space-x-4 px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
          >
            <item.icon size={20} className={item.color} />
            <span className={`text-sm font-medium ${item.color}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const ModalContent = ({ type, onClose }) => {
  const content = {
    alert: <AlertComponent />,
    budget: <BudgetSetupCard />,
    calendar: <CalendarComponent />,
    news: <NewsComponent />,
    profile: <UserProfileMenu />
  };

  // Budget modal 
  if (type === 'budget') {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div 
          className="bg-transparent"
          onClick={e => e.stopPropagation()}
        >
          {content[type]}
        </div>
      </div>
    );
  }

  // Calendar modal 
  if (type === 'calendar') {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
        onClick={onClose}
      >
        <div 
          className="bg-transparent w-1/4 h-full p-4"
          onClick={e => e.stopPropagation()}
        >
          {content[type]}
        </div>
      </div>
    );
  }

  // Profile modal
  if (type === 'profile') {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
        onClick={onClose}
      >
        <div 
          className="bg-transparent w-1/4 h-full p-6 flex justify-center items-start"
          onClick={e => e.stopPropagation()}
        >
          {content[type]}
        </div>
      </div>
    );
  }

  // Default modal for alert 
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white w-1/3 h-full overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 capitalize">{type}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-700" />
          </button>
        </div>
        {content[type]}
      </div>
    </div>
  );
};

const TopNavbar = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showProfileHover, setShowProfileHover] = useState(false);

  const handleIconClick = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className="bg-black text-white py-7 px-20 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Star className="h-6 w-6 text-white" strokeWidth={3} />
          <span className="font-bold text-2xl">myxellia</span>
        </div>
        
        <div className="flex space-x-8">
          {icons.map((item) => (
            <div key={item.id} className="relative">
              <button
                className="text-xl cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleIconClick(item.id)}
                onMouseEnter={() => item.id === 'profile' && setShowProfileHover(true)}
                onMouseLeave={() => item.id === 'profile' && setShowProfileHover(false)}
              >
                {item.icon}
              </button>
              
              {/* Profile Hover Tooltip */}
              {item.id === 'profile' && showProfileHover && (
                <div className="absolute right-0 top-full mt-2 bg-white text-black p-3 rounded-lg shadow-lg border border-gray-200 min-w-48 z-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F4F4F' }}>
                      <span className="text-white font-semibold text-sm">D</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Dylan Frank</h4>
                      <p className="text-xs text-gray-500">dylan96@mail.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeModal &&
        ReactDOM.createPortal(
          <ModalContent type={activeModal} onClose={closeModal} />,
          document.body
        )}
    </>
  );
};

export default TopNavbar;
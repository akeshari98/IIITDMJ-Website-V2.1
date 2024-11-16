import React, { useState } from 'react';
import {
  Menu,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Users,
  ShoppingBag,
  FileText,
  Settings,
  MessageSquare
} from 'lucide-react';

// Products Module
import ProductsModule from './adminModules/productsModule';
import StaffManager from './adminModules/staffModule';
// Blog Posts Module

// Main Admin Portal Component
const AdminPortal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState('products');

  const modules = [
    { id: 'products', name: 'Products', icon: ShoppingBag },
    { id: 'staff', name: 'Manage Staff', icon: Users },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];
  const [profileOpen, setProfileOpen] = useState(false);
  const renderModule = () => {
    switch (activeModule) {
      case 'products':
        return <ProductsModule />;
      case 'staff':
        return <StaffManager />;
      default:
        return <div>Module under development</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Portal</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? (
              <ChevronLeft className="h-6 w-6" />
            ) : (
              <ChevronRight className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav className="mt-4">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                activeModule === module.id ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <module.icon className="h-5 w-5" />
              {sidebarOpen && <span className="ml-3">{module.name}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {modules.find(m => m.id === activeModule)?.name || 'Dashboard'}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-semibold">John Doe</div>
                    <div className="text-xs text-gray-500">Administrator</div>
                  </div>
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <button
                      onClick={() => {
                        // Handle profile click
                        setProfileOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        // Handle settings click
                        setProfileOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </button>
                    <hr className="my-2" />
                    <button
                      onClick={() => {
                        // Handle logout
                        setProfileOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {renderModule()}
          </div>
        </main>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed lg:hidden bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
};

// Add necessary state for profile dropdown

export default AdminPortal;
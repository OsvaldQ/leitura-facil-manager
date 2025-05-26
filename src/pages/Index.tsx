
import React, { useState } from 'react';
import { LibraryProvider } from '../context/LibraryContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Books from '../components/Books';
import Users from '../components/Users';
import Loans from '../components/Loans';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const getPageTitle = (page: string) => {
    switch (page) {
      case 'dashboard': return 'Dashboard';
      case 'books': return 'Livros';
      case 'users': return 'Usuários';
      case 'loans': return 'Empréstimos';
      default: return 'Dashboard';
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'books': return <Books />;
      case 'users': return <Users />;
      case 'loans': return <Loans />;
      default: return <Dashboard />;
    }
  };

  return (
    <LibraryProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <Sidebar
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        
        <div className="flex-1 flex flex-col">
          <Header title={getPageTitle(currentPage)} />
          <main className="flex-1 overflow-auto">
            {renderCurrentPage()}
          </main>
        </div>
      </div>
    </LibraryProvider>
  );
};

export default Index;

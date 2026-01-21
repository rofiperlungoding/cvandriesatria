import React from 'react';

interface ServiceProductToggleProps {
  activeTab: 'services' | 'products';
  onTabChange: (tab: 'services' | 'products') => void;
}

const ServiceProductToggle = ({ activeTab, onTabChange }: ServiceProductToggleProps) => {
  return (
    <div className="flex justify-center mb-16 animate-fade-in">
      <div className="glass-card rounded-2xl p-2 flex">
        <button
          onClick={() => onTabChange('services')}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
            activeTab === 'services'
              ? 'bg-gradient-to-r from-bolt-accent-blue to-electric-blue text-white shadow-neon'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="relative z-10 font-display">Layanan</span>
          {activeTab === 'services' && (
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-blue opacity-0 hover:opacity-100 transition-opacity duration-300" />
          )}
        </button>
        
        <button
          onClick={() => onTabChange('products')}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
            activeTab === 'products'
              ? 'bg-gradient-to-r from-bolt-accent-blue to-electric-blue text-white shadow-neon'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="relative z-10 font-display">Produk</span>
          {activeTab === 'products' && (
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-blue opacity-0 hover:opacity-100 transition-opacity duration-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceProductToggle;
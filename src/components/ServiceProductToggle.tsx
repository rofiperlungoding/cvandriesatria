
import { motion } from 'framer-motion';

interface ServiceProductToggleProps {
  activeTab: 'services' | 'products';
  onTabChange: (tab: 'services' | 'products') => void;
}

const ServiceProductToggle = ({ activeTab, onTabChange }: ServiceProductToggleProps) => {
  return (
    <div className="flex justify-center mb-16 animate-fade-in">
      <div className="bg-white/[0.05] border border-white/10 rounded-full p-1 inline-flex backdrop-blur-sm relative">
        {(['services', 'products'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative px-8 py-2.5 rounded-full font-medium text-sm tracking-wide transition-colors duration-300 outline-none focus:outline-none focus:ring-0 ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-toggle"
                className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/20"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10 capitalize">
              {tab === 'services' ? 'Layanan' : 'Produk'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceProductToggle;
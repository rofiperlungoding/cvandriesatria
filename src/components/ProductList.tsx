import React from 'react';
import { Package, Shirt, Coffee, Gift, Briefcase, Award } from 'lucide-react';

interface Product {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div 
          key={index}
          className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-bolt-accent-blue/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          
          <div className="relative z-10">
            <div className="mb-6">
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-neon">
                <product.icon className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-gradient transition-all duration-300">{product.title}</h3>
              <p className="text-gray-300 leading-relaxed font-body">{product.description}</p>
            </div>

            <div className="space-y-3">
              {product.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3 group/feature">
                  <div className="w-2 h-2 bg-gradient-to-r from-bolt-accent-blue to-neon-blue rounded-full group-hover/feature:scale-125 transition-transform duration-200" />
                  <span className="text-gray-300 font-medium font-body group-hover:text-white transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
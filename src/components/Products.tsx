import { motion } from "motion/react";
import { Zap, Edit3, ArrowUpRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
const products = [
  {
    title: "Cắt Laser Fiber",
    description: "Giải pháp cắt kim loại tốc độ cao, độ chính xác micromet cho thép, inox, đồng, nhôm.",
    icon: Zap,
    color: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hàn Laser Fiber",
    description: "Công nghệ hàn thế hệ mới, mối hàn ngấu sâu, bền đẹp, không cần mài lại sau khi hàn.",
    icon: Zap,
    color: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Khắc Laser Fiber",
    description: "Đánh dấu, khắc barcode, logo trên mọi bề mặt vật liệu với độ sắc nét cực cao và vĩnh viễn.",
    icon: Edit3,
    color: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4 font-sans">Danh mục sản phẩm</h2>
          <h3 className="text-4xl lg:text-5xl font-bold font-display tracking-tight text-primary">Công nghệ cốt lõi của MQTech</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src={item.image} 
                  alt={item.title} 
                  className="group-hover:scale-105 transition-transform duration-1000" 
                />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className={`w-16 h-16 rounded-full ${item.color} text-white shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 z-20">
                  <div className={`w-12 h-12 rounded-full ${item.color} text-white shadow-lg flex items-center justify-center`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4 font-display tracking-tight">{item.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed font-sans text-sm lg:text-base">
                  {item.description}
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors font-sans uppercase tracking-wider">
                    Chi tiết sản phẩm <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Zap, Edit3, CheckCircle2, ChevronRight, Gauge, Maximize2, Shield } from "lucide-react";
import ImageWithFallback from "../components/ImageWithFallback";
import React from "react";

const categories = [
  {
    id: "cutting",
    title: "Máy Cắt Laser Fiber",
    icon: Zap,
    color: "bg-blue-600",
    products: [
      {
        name: "MQ-3015 Single Table",
        desc: "Máy cắt laser fiber bàn đơn, giải pháp kinh tế cho doanh nghiệp vừa và nhỏ.",
        specs: { power: "1.5kW - 3kW", area: "3000 x 1500mm", accuracy: "±0.03mm" },
        image: "/src/assets/images/regenerated_image_1777725493027.png"
      },
      {
        name: "MQ-3015 Exchange Table",
        desc: "Hệ thống bàn đổi Pallet tự động, tăng 50% hiệu suất sản xuất.",
        specs: { power: "3kW - 12kW", area: "3000 x 1500mm", accuracy: "±0.02mm" },
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000"
      },
      {
        name: "MQ-Tube Series",
        desc: "Máy cắt laser fiber chuyên dụng cho thép ống, hộp, hình H-I-U-V.",
        specs: { power: "1.5kW - 6kW", area: "L6000mm, D20-220mm", accuracy: "±0.05mm" },
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5f649e69?q=80&w=1000"
      }
    ]
  },
  {
    id: "welding",
    title: "Máy Hàn Laser Cầm Tay",
    icon: Zap,
    color: "bg-orange-600",
    products: [
      {
        name: "Handheld Welder MQ-W1500",
        desc: "Hàn nhanh gấp 10 lần MIG/TIG truyền thống, mạch hàn ngấu sâu, ít biến dạng nhiệt.",
        specs: { power: "1.5kW", area: "Handheld", accuracy: "N/A" },
        image: "/src/assets/images/regenerated_image_1777725501356.png"
      },
      {
        name: "Robot Laser Welding Cell",
        desc: "Hệ thống hàn laser tự động kết hợp cánh tay Robot cho dây chuyền sản xuất lớn.",
        specs: { power: "2kW - 4kW", area: "Customizable", accuracy: "±0.05mm" },
        image: "https://images.unsplash.com/photo-1565439380698-5423468bb6a7?q=80&w=1000"
      }
    ]
  },
  {
    id: "marking",
    title: "Máy Khắc Laser Fiber",
    icon: Edit3,
    color: "bg-purple-600",
    products: [
      {
        name: "Marking Minitower v2",
        desc: "Khắc logo, date, QR code trên mọi bề mặt kim loại và nhựa cứng.",
        specs: { power: "30W - 50W", area: "100 x 100mm", accuracy: "±0.001mm" },
        image: "/src/assets/images/regenerated_image_1777725497464.png"
      },
      {
        name: "CO2 Laser Marker",
        desc: "Chuyên dụng khắc trên phi kim như gỗ, da, mica, bao bì giấy.",
        specs: { power: "60W - 100W", area: "300 x 300mm", accuracy: "±0.01mm" },
        image: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=1000"
      }
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50/50 font-sans">
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-display tracking-tight text-primary mb-6">
              Giải pháp <span className="text-accent underline decoration-blue-100">Laser Công Nghiệp</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Từ máy cắt khổ lớn đến các hệ thống khắc mini, MQTech cung cấp giải pháp gia công toàn diện với công nghệ mới nhất từ các đối tác hàng đầu thế giới.
            </p>
          </motion.div>
        </div>
      </section>

      {categories.map((cat, catIdx) => (
        <section key={cat.id} className={`py-24 ${catIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-16">
              <div className={`p-4 rounded-2xl ${cat.color} text-white shadow-xl`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-display tracking-tight">{cat.title}</h2>
                <div className="h-1 w-20 bg-accent mt-2 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {cat.products.map((product, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <ImageWithFallback src={product.image} alt={product.name} />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold font-display mb-3 tracking-tight">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {product.desc}
                    </p>
                    
                    <div className="space-y-3 pt-6 border-t border-gray-50 mb-8">
                      <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Gauge className="w-4 h-4 text-accent" /> Công suất</div>
                        <div className="text-primary">{product.specs.power}</div>
                      </div>
                      <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Maximize2 className="w-4 h-4 text-accent" /> Khổ làm việc</div>
                        <div className="text-primary">{product.specs.area}</div>
                      </div>
                      <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-accent" /> Độ chính xác</div>
                        <div className="text-primary">{product.specs.accuracy}</div>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-accent transition-all flex items-center justify-center gap-2 group">
                      Thông số chi tiết <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

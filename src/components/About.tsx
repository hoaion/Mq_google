import { motion } from "motion/react";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
export default function About() {
  const images = {
    aboutMain: "https://images.unsplash.com/photo-1565193298415-84226999a341?auto=format&fit=crop&q=80&w=800",
    aboutDetail1: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    productImg1: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    productImg2: "https://images.unsplash.com/photo-1517373116369-9bdb8ccddedc?auto=format&fit=crop&q=80&w=800"
  };

  const stats = [
    { icon: Award, label: "Công nghệ", desc: "Top 10 Fiber Laser" },
    { icon: Clock, label: "Kinh nghiệm", desc: "10+ Năm trong ngành" },
    { icon: Users, label: "Đội ngũ", desc: "50+ Kỹ sư chuyên môn" }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-square bg-gray-100">
                  <ImageWithFallback 
                    src={images.aboutMain} 
                    alt="Industrial Fiber Laser" 
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-lg h-48 bg-gray-100">
                  <ImageWithFallback 
                    src={images.aboutDetail1} 
                    alt="Laser Cutting Head" 
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-[2rem] overflow-hidden shadow-lg h-48 bg-gray-100">
                  <ImageWithFallback 
                    src={images.productImg1} 
                    alt="Laser Components" 
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-square bg-gray-100">
                  <ImageWithFallback 
                    src={images.productImg2} 
                    alt="Fiber Laser Technology" 
                  />
                </div>
              </div>
            </motion.div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px]"></div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4 font-sans">Về MQTech</h2>
              <h3 className="text-4xl lg:text-5xl font-bold font-display mb-8 tracking-tight">Dẫn đầu kỷ nguyên gia công Laser chính xác</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans">
                Tại MQTech, chúng tôi tin rằng công nghệ Laser Fiber không chỉ là công cụ, mà là chìa khóa để mở ra hiệu quả sản xuất phi thường. Với hơn một thập kỷ nghiên cứu và phát triển, chúng tôi mang đến những dòng máy tối ưu nhất cho thị trường Việt Nam.
              </p>

              <div className="space-y-4 mb-10">
                {["Hệ thống linh kiện nhập khẩu từ các thương hiệu hàng đầu", "Chế độ bảo hành 24/7 với linh kiện có sẵn tại kho", "Chuyển giao công nghệ và đào tạo vận hành chuyên sâu"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-1 bg-green-100 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-semibold text-gray-800 font-sans">{text}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 p-8 bg-primary rounded-[2.5rem] text-white">
                {stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <s.icon className="w-6 h-6 mx-auto mb-2 opacity-70" />
                    <div className="text-lg font-bold font-display">{s.label}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-60 font-semibold font-sans">{s.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

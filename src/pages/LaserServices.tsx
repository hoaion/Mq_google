import { ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import ImageWithFallback from "../components/ImageWithFallback";
import { motion } from "motion/react";

export default function LaserServices() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 font-sans">
                Dịch vụ chuyên nghiệp
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-display tracking-tight text-primary mb-6">
                Cắt Laser Fiber <br/> <span className="text-accent underline decoration-blue-200">Độ Chính Xác Cao</span>
              </h1>
              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                Công nghệ cắt laser fiber cho phép gia công các chi tiết phức tạp trên hầu hết các loại kim loại như thép, inox, đồng, nhôm với độ chính xác đến từng micromet.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold font-sans">Liên hệ tư vấn</button>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-gray-200">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-159742324403d-d6a89472300a?auto=format&fit=crop&q=80&w=1200" 
                alt="Fiber Laser Cutting" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Tốc độ cực nhanh", desc: "Nhanh gấp 3-5 lần so với công nghệ cắt CO2 truyền thống trên các tấm vật liệu mỏng." },
              { icon: Zap, title: "Mạch cắt nhỏ mịn", desc: "Mạch cắt chính xác, không cần gia công lại sau khi cắt, tiết kiệm vật tư tối đa." },
              { icon: ShieldCheck, title: "An toàn & Bền bỉ", desc: "Hệ thống vận hành ổn định 24/7 với linh kiện nhập khẩu từ Châu Âu và Nhật Bản." }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <f.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4 font-display">{f.title}</h4>
                <p className="text-gray-500 font-sans leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold font-display mb-8">Thông số kỹ thuật vượt trội</h2>
              <div className="space-y-6">
                {[
                  "Công suất nguồn: 1.5kW - 30kW tùy chọn",
                  "Khổ bàn làm việc: 3000x1500mm đến 6000x2500mm",
                  "Sai số lặp lại: ±0.03mm",
                  "Vật liệu: Thép carbon, Inox, Nhôm, Đồng thau, Titan",
                  "Hệ điều hành: Cypcut thế mới nhất thân thiện"
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0" />
                    <span className="font-bold text-white/90 font-sans tracking-wide">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem]">
                <div className="text-sm font-bold text-accent uppercase tracking-widest mb-4 font-sans">Ứng dụng đa ngành</div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-2xl">Cơ khí chế tạo máy</div>
                  <div className="p-4 bg-white/5 rounded-2xl">Trang trí nội ngoại thất</div>
                  <div className="p-4 bg-white/5 rounded-2xl">Công nghiệp ô tô, hàng không</div>
                  <div className="p-4 bg-white/5 rounded-2xl">Sản xuất thang máy, tủ điện</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

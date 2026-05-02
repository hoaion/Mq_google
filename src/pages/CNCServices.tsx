import { Settings, CheckCircle2, Factory } from "lucide-react";
import ImageWithFallback from "../components/ImageWithFallback";
import { motion } from "motion/react";

export default function CNCServices() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
               <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-gray-200">
                 <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200" 
                   alt="CNC Machining" 
                 />
               </div>
             </div>
             <div className="order-1 lg:order-2">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Gia công cơ khí</h2>
                <h1 className="text-4xl lg:text-5xl font-bold font-display tracking-tight text-primary mb-8">Dịch vụ CNC Chuyên nghiệp</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Bên cạnh công nghệ Laser, MQTech cung cấp hệ thống gia công CNC chính xác cho các chi tiết máy, khuôn mẫu với yêu cầu kỹ thuật khắt khe.
                </p>
                <div className="space-y-4 mb-10">
                    {[
                        "Phay CNC 3 trục, 4 trục",
                        "Tiện CNC tốc độ cao",
                        "Gia công khuôn mẫu chính xác",
                        "Xử lý bề mặt sau gia công"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-500 w-5 h-5" />
                            <span className="font-bold text-gray-700">{item}</span>
                        </div>
                    ))}
                </div>
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold">Yêu cầu báo giá CNC</button>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary p-12 rounded-[3.5rem] items-center flex flex-col md:flex-row justify-between gap-8">
                <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white">
                        <Factory className="w-10 h-10" />
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-bold font-display">Xưởng sản xuất hiện đại</h3>
                        <p className="text-white/60">Trang bị máy móc đời mới từ các hãng danh tiếng.</p>
                    </div>
                </div>
                <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold whitespace-nowrap">Tham quan xưởng</button>
            </div>
        </div>
      </section>
    </div>
  );
}

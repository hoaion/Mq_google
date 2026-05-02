import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";
import heroImg from "../assets/images/regenerated_image_1777733060486.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-10 font-sans border border-gray-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              PREMIUM FIBER LASER TECHNOLOGY
            </div>
            <h1 className="text-7xl lg:text-[100px] font-extrabold font-display leading-[0.9] mb-10 tracking-tighter text-primary">
              Laser <br/> <span className="text-accent underline decoration-blue-100 decoration-8">Mastery</span>.
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-md leading-relaxed font-sans font-medium">
              MQTech cung cấp hệ thống máy cắt laser fiber công suất cao từ <span className="font-bold text-accent">6kW - 30kW</span> cho các nhà máy cơ khí hiện đại.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
              <Link to="/san-pham" className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-black transition-all flex justify-center items-center gap-3 group font-sans text-lg shadow-2xl shadow-primary/20">
                Sản phẩm <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full sm:w-auto px-12 py-5 bg-white border border-gray-100 text-primary rounded-2xl font-bold hover:bg-gray-50 transition-all flex justify-center items-center gap-3 font-sans text-lg shadow-sm">
                <Play className="w-6 h-6 fill-current text-accent" /> Xem Video
              </button>
            </div>
            
            <div className="mt-12 flex gap-10 items-center border-t border-gray-100 pt-10">
              <div>
                <div className="text-3xl font-bold font-display">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1 font-sans">Dự án bàn giao</div>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <div className="text-3xl font-bold font-display">99%</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1 font-sans">Khách hàng hài lòng</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative z-10 border-4 border-white/50">
              <ImageWithFallback 
                src={heroImg} 
                alt="High-Power Industrial Fiber Laser Machine" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-8 bottom-20 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-[220px] hidden sm:block font-sans border border-gray-100"
            >
              <div className="flex -space-x-3 mb-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-gray-800 leading-tight">Liên hệ với chuyên gia tư vấn ngay</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { FileText, Download, FileCode, Wrench, ShieldCheck, BookOpen, ExternalLink, ChevronRight } from "lucide-react";
import React from "react";

const documents = [
  {
    category: "Hướng dẫn vận hành",
    items: [
      { id: 1, title: "Quy trình vận hành máy Fiber Laser MQ-3015", size: "2.4 MB", icon: BookOpen },
      { id: 2, title: "Cẩm nang an toàn lao động trong gia công Laser", size: "1.1 MB", icon: ShieldCheck },
      { id: 3, title: "Hướng dẫn xử lý lỗi thường gặp (Troubleshooting)", size: "4.5 MB", icon: Wrench },
    ]
  },
  {
    category: "Thông số kỹ thuật/Cắt",
    items: [
      { id: 4, title: "Bảng thông số cắt Thép Đen (Carbon Steel) 1kW-12kW", size: "0.8 MB", icon: FileText },
      { id: 5, title: "Bảng thông số cắt Inox (Stainless Steel) khí N2/O2", size: "1.2 MB", icon: FileText },
      { id: 6, title: "Thông số cắt Đồng và Nhôm (Vật liệu phản quang mạnh)", size: "0.9 MB", icon: FileText },
    ]
  },
  {
    category: "Phần mềm & Bảo trì",
    items: [
      { id: 7, title: "Hướng dẫn sử dụng phần mềm điều khiển CypCut v6.4", size: "12.0 MB", icon: FileCode },
      { id: 8, title: "Kỹ thuật hiệu chỉnh tiêu cự (Focal Length) đầu cắt", size: "2.1 MB", icon: Settings },
      { id: 9, title: "Lịch trình bảo trì định kỳ hệ thống nguồn Laser", size: "1.5 MB", icon: Wrench },
      { id: 10, title: "Catalogue linh kiện thay thế chính hãng MQTech", size: "8.4 MB", icon: BookOpen },
    ]
  }
];

import { Settings } from "lucide-react";

export default function DocumentsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50/50 font-sans">
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-display tracking-tight mb-6">
              Trung tâm <span className="text-accent underline decoration-blue-100">Tài liệu Kỹ thuật</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Tải xuống các tài liệu hướng dẫn, bảng thông số kỹ thuật và cẩm nang vận hành được biên soạn bởi chuyên gia MQTech.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {documents.map((group, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-1.5 bg-accent rounded-full"></div>
                  <h2 className="text-2xl font-bold font-display tracking-tight">{group.category}</h2>
                </div>
                
                <div className="grid gap-4">
                  {group.items.map((doc) => (
                    <motion.div
                      key={doc.id}
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/5 transition-colors">
                          <doc.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 group-hover:text-accent transition-colors">{doc.title}</h3>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{doc.size} • PDF Document</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-accent hover:text-white transition-all shadow-sm">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-primary rounded-[3rem] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
            <div className="relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold font-display mb-4">Không tìm thấy tài liệu bạn cần?</h3>
                <p className="text-white/60 font-sans">Liên hệ ngay với bộ phận kỹ thuật để được hỗ trợ gửi tài liệu riêng qua email.</p>
              </div>
              <button className="px-10 py-5 bg-accent text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-accent/90 transition-all shadow-xl shadow-accent/20">
                Gửi yêu cầu hỗ trợ <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

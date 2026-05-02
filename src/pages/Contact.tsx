import { Mail, Phone, MapPin, Send, Building2 } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50/50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl lg:text-7xl font-bold font-display tracking-tight text-primary mb-6">
                Kết nối với <span className="text-accent underline decoration-blue-100 italic">MQTech</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Dù bạn đang tìm kiếm giải pháp đầu tư máy mới hay cần hỗ trợ kỹ thuật, chúng tôi luôn sẵn sàng đồng hành cùng doanh nghiệp của bạn.
            </p>
        </div>

        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold font-display mb-12">Thông tin liên hệ</h2>

                  <div className="space-y-10">
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">Văn phòng chính</div>
                        <div className="text-white/60 leading-relaxed">Phòng 402, Tòa nhà MQTech, Khu Công Nghệ Cao, Quận 9, TP. Hồ Chí Minh</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">Hotline tư vấn 24/7</div>
                        <div className="text-white/60 leading-relaxed">090 123 4567 (Kinh doanh)<br/>098 765 4321 (Kỹ thuật)</div>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">Email chính thức</div>
                        <div className="text-white/60 leading-relaxed">sales@mqtech.vn<br/>support@mqtech.vn</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20 pt-10 border-t border-white/10">
                    <div className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Giờ làm việc</div>
                    <div className="text-sm font-medium">Thứ 2 - Thứ 7: 08:00 - 17:30</div>
                  </div>
                </div>
              </div>

              <div className="p-10 lg:p-16">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Họ và tên</label>
                      <input 
                        type="text" 
                        placeholder="Nguyễn Văn A" 
                        className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50/50 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Số điện thoại</label>
                      <input 
                        type="tel" 
                        placeholder="0912 345 678" 
                        className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50/50 font-sans"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Tên công ty / Doanh nghiệp</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Công ty TNHH Cơ Khí MQTech" 
                        className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50/50 font-sans"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Dịch vụ quan tâm</label>
                    <select className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50/50 font-sans font-bold appearance-none cursor-pointer">
                      <option>Tư vấn hệ thống Cắt Laser Fiber</option>
                      <option>Mua máy Hàn Laser cầm tay</option>
                      <option>Giải pháp Khắc Laser Marking</option>
                      <option>Dịch vụ Bảo trì & Phụ tùng</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Nội dung chi tiết</label>
                    <textarea 
                      rows={4} 
                      placeholder="Hãy chia sẻ thêm về yêu cầu của bạn (Vật liệu, độ dày, năng suất mong muốn...)"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50/50 font-sans resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full py-5 bg-accent text-white rounded-2xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-accent/20">
                    Gửi yêu cầu tư vấn <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-16 rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.231222416196!2d106.77382217364653!3d10.84995578926012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527129598274d%3A0xa193d43491f24d77!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUUC5IQ00!5e0!3m2!1svi!2s!4v1714000000000!5m2!1svi!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
    </div>
  );
}

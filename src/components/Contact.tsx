import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 bg-primary text-white">
              <h2 className="text-4xl font-bold font-display mb-8 text-white">Kết nối với chúng tôi</h2>
              <p className="text-white/70 mb-12 text-lg">
                Đội ngũ kỹ thuật của MQTech sẽ tư vấn giải pháp laser phù hợp nhất với nhu cầu sản xuất của doanh nghiệp bạn.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Địa chỉ văn phòng</div>
                    <div className="text-white/60">Khu công nghiệp Hiệp Phước, Nhà Bè, TP. Hồ Chí Minh</div>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Số điện thoại liên hệ</div>
                    <div className="text-white/60">090 123 4567 - 098 765 4321</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Email hỗ trợ kĩ thuật</div>
                    <div className="text-white/60">info@mqtech.vn</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-16 bg-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Họ và tên</label>
                    <input 
                      type="text" 
                      placeholder="Nguyễn Văn A" 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Số điện thoại</label>
                    <input 
                      type="tel" 
                      placeholder="0912 345 678" 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Chào bạn, chúng tôi có thể giúp gì?</label>
                  <select className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50">
                    <option>Yêu cầu báo giá máy cắt</option>
                    <option>Tư vấn hệ thống hàn laser</option>
                    <option>Hỗ trợ bảo trì, sửa chữa</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Nội dung yêu cầu</label>
                  <textarea 
                    rows={4} 
                    placeholder="Vui lòng cho biết thêm chi tiết về vật liệu bạn cần gia công..."
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent transition-all bg-gray-50 resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
                  Gửi yêu cầu ngay <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

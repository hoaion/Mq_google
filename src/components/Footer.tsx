import { Zap, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                MQ<span className="text-accent">TECH</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              MQTech cam kết mang lại những giá trị thiết thực và công nghệ Laser tiên tiến nhất cho ngành công nghiệp phụ trợ Việt Nam.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Sản phẩm</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/san-pham" className="hover:text-accent transition-colors">Máy cắt Laser Fiber</Link></li>
              <li><Link to="/san-pham" className="hover:text-accent transition-colors">Máy hàn Laser cầm tay</Link></li>
              <li><Link to="/san-pham" className="hover:text-accent transition-colors">Máy khắc Laser Fiber</Link></li>
              <li><Link to="/san-pham" className="hover:text-accent transition-colors">Linh kiện thay thế</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Hỗ trợ</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/lien-he" className="hover:text-accent transition-colors">Yêu cầu báo giá</Link></li>
              <li><Link to="/tai-lieu" className="hover:text-accent transition-colors">Tài liệu kỹ thuật</Link></li>
              <li><Link to="/lien-he" className="hover:text-accent transition-colors">Bảo trì định kỳ</Link></li>
              <li><Link to="/lien-he" className="hover:text-accent transition-colors">Đào tạo vận hành</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Tin tức</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-accent transition-colors">Công nghệ Laser 2024</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Dự án tiêu biểu</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Triển lãm Vietbuild</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 italic">
            © 2024 MQTech. Tất cả quyền được bảo lưu. Thiết kế bởi Google AI Studio.
          </div>
          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-accent transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

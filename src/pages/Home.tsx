import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
              <div className="lg:max-w-2xl">
                <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4 font-sans italic">Sản phẩm chủ lực</h2>
                <h3 className="text-4xl lg:text-6xl font-bold font-display tracking-tighter text-primary">Kỹ thuật điều khiển <br/> chính xác tuyệt đối</h3>
              </div>
              <p className="text-gray-500 max-w-md font-sans text-lg">
                Thiết lập tiêu chuẩn mới trong ngành gia công tấm với hệ thống máy Laser fiber hiệu suất cao từ MQTech.
              </p>
            </div>
        </div>
      </div>
      <Products />
      <About />
      <Contact />
    </>
  );
}

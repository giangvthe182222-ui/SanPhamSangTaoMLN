import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Layers, 
  Users, 
  Scale, 
  Globe, 
  ShieldAlert, 
  UserCheck, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileText,
  Lock,
  Compass,
  AlertTriangle,
  Eye,
  CheckCircle2
} from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

const SLIDES_LIST: SlideData[] = [
  {
    id: 1,
    title: "Cơ Cấu Nền Dân Chủ XHCN",
    subtitle: "Quyền lực nhân dân và hệ thống chính trị",
    description: "Khám phá những thành tố cốt lõi tạo nên nền dân chủ xã hội chủ nghĩa, từ nguyên tắc quyền lực thuộc về nhân dân, vai trò lãnh đạo của Đảng, chức năng quản lý của Nhà nước đến cơ chế để công dân tham gia vào quá trình xây dựng và giám sát đời sống chính trị - xã hội."
  },
  {
    id: 2,
    title: "Biện Chứng Dân Chủ & Pháp Luật",
    subtitle: "Dân chủ được bảo đảm bằng pháp luật",
    description: "Tìm hiểu mối quan hệ gắn bó giữa dân chủ và pháp luật, nơi các quyền tự do của công dân được bảo vệ bằng hệ thống pháp lý, đồng thời việc thực hiện các quyền đó phải tuân thủ pháp luật nhằm bảo đảm công bằng, ổn định và trật tự xã hội."
  },
  {
    id: 3,
    title: "Không Gian Mạng & Quyền Ngôn Luận",
    subtitle: "Tự do bày tỏ ý kiến trong môi trường số",
    description: "Phân tích cách quyền tự do ngôn luận được thực hiện trong thời đại số thông qua mạng xã hội và các nền tảng trực tuyến, đồng thời làm rõ trách nhiệm của mỗi cá nhân trong việc tôn trọng pháp luật, sự thật và quyền lợi chính đáng của người khác."
  },
  {
    id: 4,
    title: "Nhận Diện Thách Thức Số",
    subtitle: "Tin giả, xuyên tạc và rủi ro trực tuyến",
    description: "Nhận biết những thách thức nổi bật trên môi trường mạng như tin giả, thao túng thông tin, bạo lực mạng, xâm phạm quyền riêng tư và các hành vi lợi dụng tự do ngôn luận, từ đó nâng cao khả năng đánh giá và ứng xử trước các vấn đề phát sinh trong không gian số."
  },
  {
    id: 5,
    title: "Chân Dung Công Dân Số",
    subtitle: "Trách nhiệm, kỹ năng và đạo đức số",
    description: "Xây dựng hình ảnh công dân số hiện đại với kỹ năng công nghệ, tư duy phản biện, ý thức tuân thủ pháp luật và đạo đức trực tuyến, góp phần tạo nên môi trường mạng an toàn, văn minh và thúc đẩy sự phát triển tích cực của cộng đồng số."
  }
];

export default function PhilosophicalDiagrams() {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [userSelection, setUserSelection] = useState<string>(""); 
  const [interactiveState, setInteractiveState] = useState<boolean>(false);

  const handleSlideChange = (id: number) => {
    setActiveSlide(id);
    setUserSelection("");
    setInteractiveState(false);
  };

  return (
    <div className="bg-[#FAF7F0] border-2 border-[#A69076] rounded-sm shadow-md overflow-hidden grain-overlay text-[#2A2420] font-serif transition-colors p-4 md:p-6" id="philosophical-diagrams-container">
      {/* Top Banner Design */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#A69076] pb-4 mb-6 gap-4">
        <div>
          <h3 className="font-display text-lg md:text-xl font-bold tracking-wider text-[#2A2420] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#A69076]" /> HỌC CỤ TRỰC QUAN: BIỆN CHỨNG DÂN CHỦ SỐ
          </h3>
          <p className="text-[10px] font-mono text-[#615347] mt-1 uppercase tracking-widest leading-relaxed">
            Hệ thống hóa học thuyết dân chủ xã hội chủ nghĩa & an toàn an ninh ngôn luận trực tuyến
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono bg-[#F2ECE4] border border-[#A69076]/45 px-3 py-1.5 rounded-sm">
          <BookOpen className="w-3.5 h-3.5 text-[#A69076]" />
          <span>Bài {activeSlide} / {SLIDES_LIST.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Slide Selectors */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-mono text-[#615347] font-bold uppercase tracking-wider block mb-2">
            CHUYÊN ĐỀ KHẢO SÁT CHÍNH TRỊ - SỐ:
          </span>
          <div className="space-y-1.5">
            {SLIDES_LIST.map((slide) => {
              const isActive = activeSlide === slide.id;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSlideChange(slide.id)}
                  id={`slide-selector-btn-${slide.id}`}
                  className={`w-full text-left p-3 rounded-sm border transition-all relative overflow-hidden block cursor-pointer ${
                    isActive
                      ? "bg-[#2A2420] text-[#FAF7F0] border-[#2A2420] shadow-sm animate-fade-in"
                      : "bg-[#F2ECE4]/50 hover:bg-[#F2ECE4] text-[#2A2420] border-[#A69076]/40"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className={`font-mono text-xs font-bold leading-none px-1.5 py-0.5 rounded-sm mt-0.5 ${
                      isActive ? "bg-[#FAF7F0] text-[#2A2420]" : "bg-[#D1C7B7] text-[#2A2420]"
                    }`}>
                      0{slide.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-xs md:text-sm tracking-tight leading-tight uppercase font-sans">
                        {slide.title}
                      </h4>
                      <p className={`text-[10px] mt-0.5 max-w-xs truncate ${isActive ? "text-[#FAF7F0]/80" : "text-[#615347]"}`}>
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-[#F2ECE4]/75 p-3.5 border border-[#A69076]/45 rounded-sm text-xs space-y-1.5">
            <span className="font-mono font-bold text-[#2A2420] uppercase block text-[10px] tracking-wide">
              HỌC CỤ TƯƠNG TÁC
            </span>
            <p className="text-[#615347] leading-relaxed italic text-[11px]">
              "Dân chủ không phải là bệ đỡ cho hành vi tùy tiện nặc danh bộc phát. Hãy tương tác vào các nút tròn và nhánh sơ đồ bên phải để chiêm nghiệm quy luật vận động biện chứng chân thực."
            </p>
          </div>

          <div className="mt-4 rounded-sm border-2 border-[#A69076]/40 overflow-hidden relative group hidden xl:block shadow-inner">
            <img 
              src="/assets/images/justice_and_light_1780908342960.png" 
              alt="Justice and Light" 
              className="w-full h-32 object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2420]/70 to-transparent flex items-end p-2">
              <span className="text-[9px] text-[#FAF7F0] font-mono uppercase tracking-widest italic opacity-85">
                Biểu tượng Công lý & Ánh sáng tri thức
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive Virtual Diagram View */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#A69076]/70 rounded-sm p-4 md:p-6 shadow-sm min-h-[440px] flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* Slide Header Content */}
                <div className="border-b border-[#A69076]/30 pb-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#A69076] uppercase block font-bold">
                    BIỂU ĐỒ BẢN THỂ &bull; CHUYÊN ĐỀ 0{activeSlide}
                  </span>
                  <h2 className="text-lg md:text-xl font-bold text-[#2A2420] font-serif leading-tight">
                    {SLIDES_LIST[activeSlide - 1].title}
                  </h2>
                  <p className="text-xs text-[#615347] font-serif mt-1 italic leading-relaxed">
                    {SLIDES_LIST[activeSlide - 1].description}
                  </p>
                </div>

                {/* DYNAMIC DIAGRAM AREA */}
                <div className="py-2">

                  {/* CHUYÊN ĐỀ 1: Cơ Cấu Nền Dân Chủ XHCN */}
                  {activeSlide === 1 && (
                    <div className="space-y-4">
                      <div className="text-center py-2">
                        <span className="text-[11px] font-mono text-[#615347] uppercase block mb-3 font-bold">
                          MÔ PHỎNG QUY PHẠM ĐỘNG: HỆ THỐNG PHỐI HỢP "TAM ĐÀI PHÁP"
                        </span>
                        
                        {/* Interactive Grid of 3 Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <button
                            onClick={() => setUserSelection("party")}
                            id="pillar-party-btn"
                            className={`p-3 border rounded-sm transition text-left cursor-pointer flex flex-col justify-between h-32 ${
                              userSelection === "party" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-[#FAF7F0] border-[#A69076]/40 hover:bg-[#F2ECE4]"
                            }`}
                          >
                            <div>
                              <span className="text-[9px] font-mono font-bold uppercase block border-b border-[#A69076]/20 pb-1 mb-1.5 opacity-80">
                                Trụ cột 01 (Đảng)
                              </span>
                              <h4 className="font-sans font-bold text-xs uppercase">Đảng Lãnh Đạo</h4>
                            </div>
                            <p className="text-[10px] leading-relaxed opacity-90 line-clamp-2">
                              Đề ra chủ trương, đường lối cách mạng phát triển văn minh bền vững.
                            </p>
                          </button>

                          <button
                            onClick={() => setUserSelection("state")}
                            id="pillar-state-btn"
                            className={`p-3 border rounded-sm transition text-left cursor-pointer flex flex-col justify-between h-32 ${
                              userSelection === "state" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-[#FAF7F0] border-[#A69076]/40 hover:bg-[#F2ECE4]"
                            }`}
                          >
                            <div>
                              <span className="text-[9px] font-mono font-bold uppercase block border-b border-[#A69076]/20 pb-1 mb-1.5 opacity-80">
                                Trụ cột 02 (Nhà Nước)
                              </span>
                              <h4 className="font-sans font-bold text-xs uppercase">Nhà Nước Quản Lý</h4>
                            </div>
                            <p className="text-[10px] leading-relaxed opacity-90 line-clamp-2">
                              Thể chế hóa hiến hiến định đường lối thành pháp luật công minh trị quốc.
                            </p>
                          </button>

                          <button
                            onClick={() => setUserSelection("people")}
                            id="pillar-people-btn"
                            className={`p-3 border rounded-sm transition text-left cursor-pointer flex flex-col justify-between h-32 ${
                              userSelection === "people" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-[#FAF7F0] border-[#A69076]/40 hover:bg-[#F2ECE4]"
                            }`}
                          >
                            <div>
                              <span className="text-[9px] font-mono font-bold uppercase block border-b border-[#A69076]/20 pb-1 mb-1.5 opacity-80">
                                Trụ cột 03 (Nhân Dân)
                              </span>
                              <h4 className="font-sans font-bold text-xs uppercase">Nhân Dân Làm Chủ</h4>
                            </div>
                            <p className="text-[10px] leading-relaxed opacity-90 line-clamp-2">
                              Thực thi quyền lực làm chủ qua giám sát, hiến ý và thụ hưởng nhân sinh.
                            </p>
                          </button>
                        </div>
                      </div>

                      {/* Display detail explanation */}
                      <AnimatePresence mode="wait">
                        {userSelection ? (
                          <motion.div
                            key={userSelection}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="p-3.5 bg-[#F2ECE4] border-l-4 border-[#2A2420] rounded-sm text-xs space-y-1"
                          >
                            <h5 className="font-mono font-bold uppercase text-[10px] tracking-wider text-[#2A2420]">
                              {userSelection === "party" && "✓ LOGIC ĐẢNG LÃNH ĐẠO (ĐẢNG CỘNG SẢN VIỆT NAM)"}
                              {userSelection === "state" && "✓ VAI TRÒ NHÀ NƯỚC PHÁP QUYỀN XHCN"}
                              {userSelection === "people" && "✓ CƠ CHẾ NĂNG ĐỘNG DÂN LÀM CHỦ TOÀN DIỆN"}
                            </h5>
                            <p className="text-[#615347] leading-relaxed italic">
                              {userSelection === "party" && '"Đảng không làm thay chức năng của Nhà nước mà đóng vai trò kiến tạo vĩ mô, soi đường định hướng chính trị, luôn nằm dưới sự giám sát chân thành của nhân dân theo hiến luật."'}
                              {userSelection === "state" && '"Nhà nước tổ chức thực thi pháp trị xã hội, bảo vệ an sinh quốc gia, bảo vệ nền dân chủ an bình thực chất cho mọi công dân trước mọi đe dọa trực tuyến."'}
                              {userSelection === "people" && '"Bảo toàn cao đẹp qua tôn chỉ: Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát và dân trực tiếp thụ hưởng công sinh thành tựu của chế độ."'}
                            </p>
                          </motion.div>
                        ) : (
                          <div className="text-center p-4 border border-dashed border-[#A69076]/45 rounded-sm text-xs text-[#615347] italic">
                            &bull; Bấm vào một trong ba Trụ cột phía trên để khám phá nguyên lý liên hệ mật thiết &bull;
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* CHUYÊN ĐỀ 2: Biện Chứng Dân Chủ & Pháp Luật */}
                  {activeSlide === 2 && (
                    <div className="space-y-4">
                      <span className="text-[11px] font-mono text-[#615347] uppercase block mb-2 font-bold text-center">
                        TÌNH HUỐNG GIẢ THUYẾT: MỐI TƯƠNG QUAN BIỆN CHỨNG KHÔNG THỂ BẸ KHÁC
                      </span>

                      {/* Interactive toggle switch for legal state visualization */}
                      <div className="bg-[#F2ECE4]/40 border border-[#A69076]/45 p-4 rounded-sm space-y-3">
                        <div className="flex justify-between items-center bg-white px-3 py-2 border border-[#A69076]/30 rounded-sm">
                          <span className="text-xs font-mono font-bold uppercase text-[#2A2420]">
                            Khảo sát xã hội: {interactiveState ? "KHI THƯỢNG TÔN PHÁP LUẬT" : "KHI DÂN CHỦ THIẾU PHÁP TRỊ"}
                          </span>
                          <button
                            onClick={() => {
                              setInteractiveState(!interactiveState);
                              setUserSelection(interactiveState ? "anarchy" : "rule_of_law");
                            }}
                            id="toggle-law-btn"
                            className="px-3 py-1 bg-[#2A2420] text-white text-[10px] font-mono rounded-sm transition hover:bg-[#615347] cursor-pointer uppercase font-bold"
                          >
                            Đổi Trạng Thái
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div className={`p-3 border rounded-sm transition-all duration-300 ${!interactiveState ? "bg-red-50 border-red-300" : "bg-neutral-50 border-neutral-200 opacity-50"}`}>
                            <h4 className="font-sans font-bold text-red-900 uppercase flex items-center gap-1.5 mb-1.5">
                              <AlertTriangle className="w-4 h-4" /> Vô Kỷ Cương (Anarchy)
                            </h4>
                            <p className="leading-relaxed text-stone-600">
                              Dân chủ bị hiểu sái, trở thành cái cớ cho các phần tử lợi dụng quấy nhiễu bôi nhọ, xâm phạm đời tư người khác bừa bãi, tàn phá trật tự đạo đức không gian chung.
                            </p>
                          </div>

                          <div className={`p-3 border rounded-sm transition-all duration-300 ${interactiveState ? "bg-emerald-50 border-emerald-300" : "bg-neutral-50 border-neutral-200 opacity-50"}`}>
                            <h4 className="font-sans font-bold text-emerald-900 uppercase flex items-center gap-1.5 mb-1.5">
                              <Scale className="w-4 h-4" /> Pháp Trị Công Lý (Rule Of Law)
                            </h4>
                            <p className="leading-relaxed text-stone-600">
                              Mọi quyền bình đẳng của bạn được bao bọc vững bền bằng Luật lệ. Đồng thời việc thực thi quyền không được phương hại tới tôn quý, cốt cách của bất kỳ cá nhân hữu trách nào.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-[#FAF7F0] border-l-4 border-[#A69076] text-xs leading-relaxed text-[#615347] font-serif italic">
                        {interactiveState 
                          ? '"Pháp luật chính là bộ giáp hộ mệnh lý tưởng để bảo toàn dân chủ thực sự, không để quyền lực chân chính rơi vào vòng thao túng hoang dã."' 
                          : '"Thiếu hụt sự thượng tôn Pháp pháp luật, nền dân chủ mòn mỏi dần chỉ còn là cái vỏ để mưu xảo ngôn luận tự phát, dệt nên bạo lực trực tuyến vô kỷ cương."'}
                      </div>
                    </div>
                  )}

                  {/* CHUYÊN ĐỀ 3: Không Gian Mạng & Quyền Ngôn Luận */}
                  {activeSlide === 3 && (
                    <div className="space-y-4">
                      {/* Interaction Flow Map */}
                      <span className="text-[11px] font-mono text-[#615347] uppercase block mb-1 font-bold">
                        RANH GIỚI BIỆN CHỨNG TRÊN TRANG MẠNG XÃ HỘI
                      </span>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                        <div 
                          onClick={() => setUserSelection("right")}
                          id="right-node-btn"
                          className={`md:col-span-5 p-3.5 border rounded-sm cursor-pointer transition text-left h-24 flex flex-col justify-between ${
                            userSelection === "right" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-[#FAF7F0] border-[#A69076]/45 hover:bg-[#F2ECE4]"
                          }`}
                        >
                          <h4 className="font-sans font-bold uppercase text-xs">Phần Quyền Lợi (Constitutional Right)</h4>
                          <p className="text-[10px] leading-relaxed opacity-90">
                            Bạn tự do sẻ chia tri thức hữu ích, lên tiếng phản biện xây dựng học tập và xã hội văn minh.
                          </p>
                        </div>

                        <div className="md:col-span-2 text-center text-[#A69076] font-mono font-bold text-sm hidden md:block">
                          &hArr; BIỆN CHỨNG &hArr;
                        </div>

                        <div 
                          onClick={() => setUserSelection("duty")}
                          id="duty-node-btn"
                          className={`md:col-span-5 p-3.5 border rounded-sm cursor-pointer transition text-left h-24 flex flex-col justify-between ${
                            userSelection === "duty" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-[#FAF7F0] border-[#A69076]/45 hover:bg-[#F2ECE4]"
                          }`}
                        >
                          <h4 className="font-sans font-bold uppercase text-xs">Phần Trách Nhiệm (Moral Civic Duty)</h4>
                          <p className="text-[10px] leading-relaxed opacity-90">
                            Tôn trọng tuyệt đối sự thật khách quan khoa học, không phỉ báng xúc phạm nhân phẩm đồng bào tri thức.
                          </p>
                        </div>
                      </div>

                      {/* Mindful response */}
                      <div className="bg-[#F2ECE4]/70 p-3.5 border border-[#A69076]/40 rounded-sm text-xs">
                        {userSelection === "right" ? (
                          <p className="text-[#615347] leading-relaxed italic">
                            &bull; <strong>Chân lý lý luận:</strong> Tự do ngôn sự trên mạng là thước đo tiến bộ xã hội. Tuy nhiên, nó chỉ thực sự sống động khi được đặt trên bệ đỡ của tri thức và tính tương trợ xây dựng, không phá hoại bạo lực mạng.
                          </p>
                        ) : userSelection === "duty" ? (
                          <p className="text-[#615347] leading-relaxed italic">
                            &bull; <strong>Sự thật an ninh:</strong> Mỗi lời lẽ trên bàn phím là hạt giống nhân phẩm bạn gieo trồng xuống cộng đồng số. Trách nhiệm kiểm chứng tin tức dập tắt bạo lực không làm hạn chế tự do của bạn, mà đang thắp sáng văn minh số.
                          </p>
                        ) : (
                          <p className="text-[#615347] leading-relaxed text-center italic font-semibold">
                            &bull; Bấm chọn "Phần Quyền Lợi" hoặc "Phần Trách Nhiệm" phía trên để nghiên cứu sâu sắc ranh giới pháp quyền &bull;
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CHUYÊN ĐỀ 4: Nhận Diện Thách Thức Số */}
                  {activeSlide === 4 && (
                    <div className="space-y-4">
                      <span className="text-[11px] font-mono text-[#615347] uppercase block mb-1 font-bold text-center">
                        3 HIỂM HỌA KHỦNG HOẢNG THÔNG TIN TRỰC TUYẾN
                      </span>

                      {/* Interactive Horizontal Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                        {[
                          { id: "fake", title: "1. Tin Giả (Fake News)", desc: "Thông tin thất thiệt ngụy tạo lý tri nhằm kiếm chác lợi lộc câu view hoặc lừa gạt dẫn dắt đám đông phẫn uất." },
                          { id: "defame", title: "2. Xuyên Tạc Bôi Nhọ", desc: "Xâm phạm thô bạo quyền đời tư, tung tin dơ nặc danh (Confessions ảo) hạ nhục phá hoại uy danh, nhân phẩm đồng loại." },
                          { id: "violence", title: "3. Thao Túng Bạo Lực", desc: "Sử dụng những bình luận hằn học ác độc kích động số đông sỉ vả tâm lý nạn nhân, đẩy cuộc sống học đường vào bế tắc." }
                        ].map((item) => (
                          <div 
                            key={item.id}
                            onClick={() => setUserSelection(item.id)}
                            id={`threat-card-${item.id}`}
                            className={`p-3 border rounded-sm text-left cursor-pointer transition-all ${
                              userSelection === item.id 
                                ? "bg-red-50 border-red-500 shadow-sm ring-1 ring-red-400" 
                                : "bg-white border-[#A69076]/45 hover:border-[#A69076]"
                            }`}
                          >
                            <h4 className="font-sans font-bold text-xs uppercase text-red-950 flex items-center gap-1">
                              <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
                              <span>{item.title}</span>
                            </h4>
                            <p className="text-[10px] leading-relaxed text-[#615347] mt-1.5 line-clamp-4">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Quick Treatment result */}
                      <AnimatePresence mode="wait">
                        {userSelection && (
                          <motion.div
                            key={userSelection}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-yellow-50 border-l-4 border-yellow-600 p-3 text-xs"
                          >
                            <strong className="text-[9px] font-mono text-yellow-800 uppercase block mb-1 font-black">
                              PHƯƠNG ÁN ĐẠO ĐỨC & KHẮC CHẾ (COUNTERMEASURE)
                            </strong>
                            <p className="text-stone-700 leading-relaxed italic">
                              {userSelection === "fake" && '"Đề cao cảnh giác bộ lọc tin, luôn đối chiếu với cổng thông tin an ninh mạng trang chính thức của FPT và quốc gia."'}
                              {userSelection === "defame" && '"Tẩy chay triệt để các trang Confessions dung túng bôi nhọ ẩn danh. Thấu hiểu luật an ninh mạng xử phạt dân sự lẫn hình sự."'}
                              {userSelection === "violence" && '"Hãy can thiệp văn minh, động viên thầm lặng và báo cáo tố tụng bạo lực mạng để dập tắt ngọn lửa uất ức."'}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* CHUYÊN ĐỀ 5: Chân Dung Công Dân Số */}
                  {activeSlide === 5 && (
                    <div className="space-y-4">
                      <span className="text-[11px] font-mono text-[#615347] uppercase block mb-1 font-bold text-center">
                        3 TRỤ CỘT BẢN LĨNH PHẨM LIỆU CÔNG DÂN SỐ
                      </span>

                      {/* Interactive circular representation mockup */}
                      <div className="bg-[#FAF7F0] border border-[#A69076] p-4 rounded-sm flex flex-col md:flex-row items-center justify-around gap-4">
                        {[
                          { key: "critical", label: "Tư Duy Biện Chứng", icon: Compass, color: "text-indigo-800 bg-indigo-50 border-indigo-200" },
                          { key: "law_abiding", label: "Kỷ Cương Pháp Luật", icon: Scale, color: "text-amber-800 bg-amber-50 border-amber-200" },
                          { key: "empathy", label: "Đạo Đức Tôn Trọng", icon: UserCheck, color: "text-emerald-800 bg-emerald-50 border-emerald-200" }
                        ].map((pillar) => {
                          const Icon = pillar.icon;
                          const isSel = userSelection === pillar.key;
                          return (
                            <button
                              key={pillar.key}
                              onClick={() => setUserSelection(pillar.key)}
                              id={`citizen-pillar-btn-${pillar.key}`}
                              className={`flex flex-col items-center p-3.5 border-2 rounded-sm cursor-pointer transition w-full md:w-36 ${
                                isSel ? "bg-[#2A2420] text-white border-[#2A2420] scale-105" : "bg-white hover:bg-[#F2ECE4] border-[#A69076]/45"
                              }`}
                            >
                              <div className={`p-2 rounded-full mb-2 ${isSel ? "bg-white/20 text-white" : "bg-[#F2ECE4] text-[#A69076]"}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="font-sans font-bold text-xs text-center uppercase tracking-tight leading-tight">
                                {pillar.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Resulting evaluation */}
                      <AnimatePresence mode="wait">
                        {userSelection ? (
                          <motion.div
                            key={userSelection}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#2A2420] text-[#FAF7F0] p-3 rounded-sm text-xs border border-[#2A2420]"
                          >
                            <h5 className="font-mono text-[9px] uppercase tracking-widest text-[#A69076] font-bold mb-1">
                              LUẬN ĐỀ VỀ HOẠT ĐỘNG CÁ NHÂN SỐ ĐỨC ĐỘ
                            </h5>
                            <p className="font-serif leading-relaxed italic opacity-95">
                              {userSelection === "critical" && '"Rèn luyện ý thức hoài nghi khoa học trước dòng tin giật gân, không để thuật toán dắt mũi tâm can hay sa chân vào mê cung tin giả."'}
                              {userSelection === "law_abiding" && '"Hiểu rõ Luật an ninh mạng 2018, bảo đảm phát ngôn tuân pháp trị. Đó không phải là kìm hãm tự do, mà chính là tự tôn dân chủ an định."'}
                              {userSelection === "empathy" && '"Tuyệt đối hóa lòng trắc ẩn, tôn trọng phẩm giá con người mạng xã hội. Sự tử tế của bạn góp phần dập tắt tàn phá bạo lực bắt nạt."'}
                            </p>
                          </motion.div>
                        ) : (
                          <div className="text-center text-[#615347] font-serif text-xs italic py-2">
                            &bull; Bấm vào một trong ba Trụ cột Phẩm chất Công dân số để thắp sáng phân tích sâu &bull;
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                </div>
                {/* END DYNAMIC DIAGRAM AREA */}

              </div>

              {/* Navigation Footer Controls */}
              <div className="mt-8 flex justify-between items-center pt-4 border-t border-[#A69076]">
                <button
                  onClick={() => handleSlideChange(Math.max(1, activeSlide - 1))}
                  id="slide-prev-action-btn"
                  disabled={activeSlide === 1}
                  className={`flex items-center space-x-1 text-xs font-mono tracking-wider transition uppercase ${
                    activeSlide === 1 ? "opacity-35 cursor-not-allowed text-[#D1C7B7]" : "text-[#615347] hover:text-[#2A2420] hover:font-bold cursor-pointer"
                  }`}
                >
                  &larr; Khảo Cứu Trước
                </button>
                <span className="text-[10px] font-mono tracking-widest text-[#615347]">
                  CHUYÊN ĐỀ {activeSlide} / {SLIDES_LIST.length}
                </span>
                <button
                  onClick={() => handleSlideChange(Math.min(SLIDES_LIST.length, activeSlide + 1))}
                  id="slide-next-action-btn"
                  disabled={activeSlide === SLIDES_LIST.length}
                  className={`flex items-center space-x-1 text-xs font-mono tracking-wider transition uppercase ${
                    activeSlide === SLIDES_LIST.length ? "opacity-35 cursor-not-allowed text-[#D1C7B7]" : "text-[#615347] hover:text-[#2A2420] hover:font-bold cursor-pointer"
                  }`}
                >
                  Khảo Cứu Sau &rarr;
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

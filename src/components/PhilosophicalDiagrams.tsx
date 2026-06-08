import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Layers, 
  Users, 
  Eye, 
  Sparkles, 
  HelpCircle, 
  RefreshCw, 
  GitCommit, 
  ArrowRight, 
  Compass, 
  CheckCircle,
  TrendingUp,
  Activity
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
    title: "Triết Học và Vấn Đề Cơ Bản",
    subtitle: "Khái lược về Triết học & cơ cấu cơ bản",
    description: "Nhập môn về định nghĩa Triết học và hệ thống câu hỏi tối cao xoay quanh Bản thể luận và Nhận thức luận."
  },
  {
    id: 2,
    title: "Nguồn Gốc Của Triết Học",
    subtitle: "Nguồn gốc Nhận thức và Nguồn gốc Xã hội",
    description: "Hai điều kiện tiên quyết tích lũy suốt chiều dài lịch sử nhân loại để tư duy triết học có thể cất cánh sinh ra."
  },
  {
    id: 3,
    title: "Thế Giới Quan & Hạt Nhân Lý Luận",
    subtitle: "Các hình thái thế giới quan chủ yếu trong lịch sử",
    description: "Vực sâu tri thức từ Thần thoại, Tôn giáo đến đỉnh cao Triết học - nơi thế giới quan trở thành hạt nhân định hình lý trí."
  },
  {
    id: 4,
    title: "Chủ Nghĩa Duy Vật (Materialism)",
    subtitle: "Vật chất quyết định ý thức",
    description: "Chiêm nghiệm ba dấu mốc huy hoàng: Duy vật Chất phác, Duy vật Siêu hình và Duy vật Biện chứng khoa học."
  },
  {
    id: 5,
    title: "Chủ Nghĩa Duy Tâm (Idealism)",
    subtitle: "Ý thức quyết định vật chất",
    description: "Phân biệt rạch ròi giữa thế giới chủ quan của tri giác cá nhân và lực lượng tinh thần tối cao khách quan."
  },
  {
    id: 6,
    title: "Khả Tri Luận & Bất Khả Tri Luận",
    subtitle: "Con người có thể nhận thức được thế giới?",
    description: "Cuộc viễn chinh tư tưởng giải đáp khả năng thấu suốt thực tại khách quan hay sự bất lực trước bức màn hiện ảnh."
  },
  {
    id: 7,
    title: "Biện Chứng và Siêu Hình",
    subtitle: "Hai phương pháp tư duy đối lập nhau",
    description: "Động hay Tĩnh, Liên hệ chuyển hóa hay Cô lập tách rời - cuộc đụng độ của phương pháp luận triết học."
  }
];

export default function PhilosophicalDiagrams() {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [interactiveMode, setInteractiveMode] = useState<string>("compare"); // for toggling states within slides
  const [userSelection, setUserSelection] = useState<string>(""); // state for interactive node details

  // Sub-state resets on slide change
  const handleSlideChange = (id: number) => {
    setActiveSlide(id);
    setUserSelection("");
    if (id === 4 || id === 5) {
      setInteractiveMode("forms");
    } else {
      setInteractiveMode("compare");
    }
  };

  return (
    <div className="bg-[#FAF7F0] border-2 border-[#A69076] rounded-sm shadow-md overflow-hidden grain-overlay text-[#2A2420] font-serif transition-colors p-4 md:p-6">
      {/* Decorative Slide Deck Top Ribbon */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#A69076] pb-4 mb-6 gap-4">
        <div>
          <h3 className="font-display text-xl font-bold tracking-wider text-[#2A2420] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#A69076]" /> HỌC CỤ TRỰC QUAN: SƠ ĐỒ TRIẾT HỌC BIỆN CHỨNG
          </h3>
          <p className="text-[10px] font-mono text-[#615347] mt-1 uppercase tracking-widest leading-relaxed">
            Hệ thống hóa 7 chuyên đề lý luận cốt lõi theo sơ đồ trực quan tương tác sinh động
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono bg-[#F2ECE4] border border-[#A69076]/45 px-3 py-1.5 rounded-sm">
          <BookOpen className="w-3.5 h-3.5 text-[#A69076]" />
          <span>Slide {activeSlide} / {SLIDES_LIST.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Slide selectors formatted as a luxury manuscript margin catalog */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-mono text-[#615347] font-bold uppercase tracking-wider block mb-2">
            DANH MỤC KHẢO SÁT CHUYÊN ĐỀ:
          </span>
          <div className="space-y-1.5 max-h-[480px] overflow-y-auto pr-1">
            {SLIDES_LIST.map((slide) => {
              const isActive = activeSlide === slide.id;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSlideChange(slide.id)}
                  id={`slide-selector-btn-${slide.id}`}
                  className={`w-full text-left p-3 rounded-sm border transition-all relative overflow-hidden block cursor-pointer ${
                    isActive
                      ? "bg-[#2A2420] text-[#FAF7F0] border-[#2A2420] shadow-sm"
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
                  {isActive && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/10 text-4xl font-serif pointer-events-none font-bold">
                      §
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="bg-[#F2ECE4]/75 p-3.5 border border-[#A69076]/45 rounded-sm text-xs space-y-1">
            <span className="font-mono font-bold text-[#2A2420] uppercase block text-[10px] tracking-wide">
              HƯỚNG DẪN TƯƠNG TÁC
            </span>
            <p className="text-[#615347] leading-relaxed italic text-[11px]">
              "Hãy bấm chuyển đổi các chuyên đề, sau đó click vào từng nút, sơ đồ hay từng nút tròn nhấp nháy trên mô phỏng để giải nghĩa chi tiết học thuyết học thuật."
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive Virtual Canvas Diagram View */}
        <div className="lg:col-span-8 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-[#A69076]/70 rounded-sm p-4 md:p-6 shadow-sm min-h-[460px] flex flex-col justify-between relative"
            >
              {/* Background elegant emblem stamp */}
              <div className="absolute bottom-4 right-4 text-[120px] select-none pointer-events-none leading-none opacity-[0.02] text-[#A69076] font-serif font-black">
                M - L
              </div>

              {/* Main Content Render relative to current active slide index */}
              <div className="space-y-4">
                {/* Slide Header */}
                <div className="border-b border-[#A69076]/30 pb-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#A69076] uppercase block font-bold">
                    SƠ ĐỒ TRỰC QUAN &bull; CHUYÊN ĐỀ TỐI CAO 0{activeSlide}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold italic text-[#2A2420] font-serif leading-tight">
                    {SLIDES_LIST[activeSlide - 1].title}
                  </h2>
                  <p className="text-xs text-[#615347] font-serif mt-1 italic">
                    {SLIDES_LIST[activeSlide - 1].description}
                  </p>
                </div>

                {/* DYNAMIC DIAGRAM CONTENT BEGIN */}
                <div className="py-4 font-serif">
                  
                  {/* SLIDE 1: Triết Học và Vấn Đề Cơ Bản */}
                  {activeSlide === 1 && (
                    <div className="space-y-4">
                      {/* Interactive Diagram Setup */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div 
                          onClick={() => setUserSelection("antology")}
                          id="antology-node-btn"
                          className={`p-4 rounded-sm border cursor-pointer transition duration-200 text-left relative ${
                            userSelection === "antology" 
                              ? "bg-[#2A2420] text-[#FAF7F0] border-[#2A2420] shadow-xs" 
                              : "bg-[#F2ECE4]/40 hover:bg-[#F2ECE4]/70 border-[#A69076]/45"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-mono uppercase bg-[#A69076] text-[#FAF7F0] px-1.5 py-0.5 rounded-sm font-bold">
                              Mặt thứ nhất (Ontology)
                            </span>
                            <span className="text-xs">&bull;</span>
                          </div>
                          <h4 className="text-sm font-bold font-sans uppercase mb-1">Bản Thể Luận</h4>
                          <p className={`text-xs leading-relaxed ${userSelection === "antology" ? "text-slate-200" : "text-[#615347]"}`}>
                            Giải quyết mối quan hệ bản nguyên: Giữa <strong>Vật chất</strong> và <strong>Ý thức</strong>, cái nào có trước, cái nào có sau, cái nào quyết định cái nào?
                          </p>
                          <div className="mt-3 text-[10px] flex items-center gap-1 font-mono uppercase font-bold text-[#A69076]">
                            <span>Bấm để khám phá</span> <ArrowRight className="w-3 h-3 animate-pulse" />
                          </div>
                        </div>

                        <div 
                          onClick={() => setUserSelection("epistemology")}
                          id="epistemology-node-btn"
                          className={`p-4 rounded-sm border cursor-pointer transition duration-200 text-left relative ${
                            userSelection === "epistemology" 
                              ? "bg-[#2A2420] text-[#FAF7F0] border-[#2A2420] shadow-xs" 
                              : "bg-[#F2ECE4]/40 hover:bg-[#F2ECE4]/70 border-[#A69076]/45"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-mono uppercase bg-[#A69076] text-[#FAF7F0] px-1.5 py-0.5 rounded-sm font-bold">
                              Mặt thứ hai (Epistemology)
                            </span>
                            <span className="text-xs">&bull;</span>
                          </div>
                          <h4 className="text-sm font-bold font-sans uppercase mb-1">Nhận Thức Luận</h4>
                          <p className={`text-xs leading-relaxed ${userSelection === "epistemology" ? "text-slate-200" : "text-[#615347]"}`}>
                            Giải quyết câu hỏi phương pháp luận: Con người có năng lực <strong>nhận thức</strong> và cải tạo được thế giới khách quan xung quanh hay không?
                          </p>
                          <div className="mt-3 text-[10px] flex items-center gap-1 font-mono uppercase font-bold text-[#A69076]">
                            <span>Bấm để khám phá</span> <ArrowRight className="w-3 h-3 animate-pulse" />
                          </div>
                        </div>
                      </div>

                      {/* Interactive Explanation Box */}
                      <AnimatePresence mode="wait">
                        {userSelection ? (
                          <motion.div 
                            key={userSelection}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="bg-[#F2ECE4] border border-[#A69076] rounded-sm p-4 text-xs space-y-2 mt-4"
                          >
                            <h4 className="font-bold text-[#2A2420] uppercase font-mono tracking-wide">
                              {userSelection === "antology" ? "HỆ BIỆN PHÁP BẢN THỂ LUẬN" : "HỆ PHÂN CHIA NHẬN THỨC LUẬN"}
                            </h4>
                            {userSelection === "antology" ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 leading-relaxed">
                                <div>
                                  <strong className="text-amber-800 uppercase block mb-1">1. Chủ nghĩa duy vật (Materialism)</strong>
                                  Đại biểu tiêu biểu coi Vật chất có trước, tồn tại khách quan và quyết định ý thức thần tư tưởng con người.
                                </div>
                                <div className="border-l border-[#A69076]/30 pl-3">
                                  <strong className="text-stone-800 uppercase block mb-1">2. Chủ nghĩa duy tâm (Idealism)</strong>
                                  Khẳng định Bản nguyên tinh thần có trước, quyết định hoặc sinh ra thế giới vật chất dải đất.
                                </div>
                              </div>
                            ) : (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 leading-relaxed">
                                <div>
                                  <strong className="text-amber-800 uppercase block mb-1">1. Thuyết khả tri (Gnosticism)</strong>
                                  Đại đa số các nhà triết học thừa nhận con người khả dĩ có thể hiểu thấu hoàn toàn thế giới thực tại.
                                </div>
                                <div className="border-l border-[#A69076]/30 pl-3">
                                  <strong className="text-stone-800 uppercase block mb-1">2. Thuyết bất khả tri (Agnosticism)</strong>
                                  Coi nhận thức con người chỉ chạm tới vỏ bề ngoài, không bao giờ thấu triệt được bản chất tự thân đối tượng.
                                </div>
                              </div>
                            )}
                          </motion.div>
                        ) : (
                          <div className="text-center p-6 border-2 border-dashed border-[#A69076]/45 rounded-sm text-xs text-[#615347] italic">
                            &bull; Bấm vào một trong hai Mặt của Vấn đề cơ bản phía trên để nhận định chi tiết học thuyết &bull;
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* SLIDE 2: Nguồn Gốc Của Triết Học */}
                  {activeSlide === 2 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div 
                          onClick={() => setUserSelection("cognitive")}
                          id="cognitive-origin-btn"
                          className={`p-4 rounded-sm border cursor-pointer text-left transition duration-200 ${
                            userSelection === "cognitive" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-[#FAF7F0] border-[#A69076]/45 hover:bg-[#F2ECE4]"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="p-1 bgColor bg-amber-800/10 rounded-sm text-amber-800">01</span>
                            <h4 className="font-sans font-bold uppercase text-xs tracking-wider">NGUỒN GỐC NHẬN THỨC</h4>
                          </div>
                          <p className="text-xs leading-relaxed opacity-90">
                            Khái quát hóa, trừu tượng hóa khối lượng tri thức khoa học và kinh nghiệm thực tiễn vụn vặt thành một hệ thống lý luận triệt để sâu sắc.
                          </p>
                        </div>

                        <div 
                          onClick={() => setUserSelection("social")}
                          id="social-origin-btn"
                          className={`p-4 rounded-sm border cursor-pointer text-left transition duration-200 ${
                            userSelection === "social" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-[#FAF7F0] border-[#A69076]/45 hover:bg-[#F2ECE4]"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="p-1 bgColor bg-amber-800/10 rounded-sm text-amber-800">02</span>
                            <h4 className="font-sans font-bold uppercase text-xs tracking-wider">NGUỒN GỐC XÃ HỘI</h4>
                          </div>
                          <p className="text-xs leading-relaxed opacity-90">
                            Sự phân công lao động xã hội hình thành giai cấp: Nhóm lao động trí óc ra đời, có đặc quyền chuyên sâu suy niệm triết lý thần thánh.
                          </p>
                        </div>
                      </div>

                      {/* Interactive Graphic: The historical fusion intersection of origins */}
                      <div className="mt-4 p-4 border border-[#A69076] rounded-sm bg-[#F2ECE4]/40 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#A69076]"></div>
                        <h5 className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#2A2420] mb-2 text-left">
                          BIỂU ĐỒ GIAO THOA LỊCH SỬ (INTERSECTION):
                        </h5>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-2">
                          <span className={`px-4 py-2 text-xs rounded-full font-mono uppercase border border-[#A69076] transition ${userSelection === "cognitive" ? "bg-[#2A2420] text-[#FAF7F0] scale-110" : "bg-white"}`}>
                            Nhận Thức Tri Thức
                          </span>
                          <span className="text-[#A69076] font-bold font-sans">&hArr; ĐIỀU KIỆN ĐỦ &hArr;</span>
                          <span className={`px-4 py-2 text-xs rounded-full font-mono uppercase border border-[#A69076] transition ${userSelection === "social" ? "bg-[#2A2420] text-[#FAF7F0] scale-110" : "bg-white"}`}>
                            Phân Chia Lao Động
                          </span>
                        </div>
                        <p className="text-[11px] mt-2 text-[#615347] font-serif italic max-w-lg mx-auto">
                          {userSelection === "cognitive" 
                            ? "=> Nếu không có sự khái quát hóa nhận thức, tư duy vướng ở trực quan cảm tính thô sơ." 
                            : userSelection === "social" 
                            ? "=> Nếu không có lao động trí óc rảnh rỗi tách khỏi vật chất thô, triết học không thể kết tinh thành hệ thống bác học."
                            : "=> Sự giao hòa tuyệt mỹ của Nhận thức tầm cao và Phân chia xã hội sinh ra Triết học cổ điển."}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 3: Thế Giới Quan */}
                  {activeSlide === 3 && (
                    <div className="space-y-4">
                      {/* Diagram: Mythology vs Religion vs Philosophy */}
                      <span className="text-xs font-mono font-bold text-[#615347] uppercase tracking-wider block">
                        Các hình thức thế giới quan chủ yếu:
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { key: "myth", label: "Thần Thoại", desc: "Hình thức sơ khai, trực quan cảm xúc hoang đường, nhân hóa tự nhiên.", color: "bg-[#F2ECE4]/75 border-slate-300" },
                          { key: "reli", label: "Tôn Giáo", desc: "Niềm tin mãnh liệt vào thế giới thần thánh siêu nhiên đứng ngoài thực tại.", color: "bg-[#F2ECE4]/75 border-slate-300" },
                          { key: "philo", label: "Triết Học", desc: "Hình thức cao nhất, xây dựng trên tư duy logic lý tính, có hệ thống khái niệm rõ ràng.", color: "bg-[#2A2420] text-white border-[#2A2420]" }
                        ].map((tgq) => (
                          <div 
                            key={tgq.key}
                            onClick={() => setUserSelection(tgq.key)}
                            id={`tgq-card-${tgq.key}`}
                            className={`p-3 border rounded-sm text-center cursor-pointer transition flex flex-col justify-between ${tgq.color} ${
                              userSelection === tgq.key ? "ring-2 ring-amber-800/50 scale-[1.02]" : "hover:border-[#A69076]"
                            }`}
                          >
                            <h4 className="font-bold text-xs uppercase font-sans tracking-tight">{tgq.label}</h4>
                            <p className="text-[10px] leading-relaxed mt-2 line-clamp-3">
                              {tgq.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Core thesis box */}
                      <div className="bg-[#FAF7F0] border-l-4 border-[#A69076] p-4 text-xs space-y-1 mt-2">
                        <div className="flex items-center gap-1.5 text-[#2A2420] font-sans font-bold">
                          <Compass className="w-4 h-4 text-[#A69076]" />
                          <span>HẠT NHÂN LÝ LUẬN CỦA THẾ GIỚI QUAN:</span>
                        </div>
                        <p className="text-[#615347] leading-relaxed">
                          Triết học chính là **hạt nhân lý luận** của thế giới quan. Nó đưa hệ thống các quan niệm trực quan, rời rạc tự phát về cuộc sống của quần chúng nhân dân vào khuôn khổ lý luận khoa học triệt để logic vững chắc.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 4: Chủ Nghĩa Duy Vật */}
                  {activeSlide === 4 && (
                    <div className="space-y-4">
                      {/* Selection Toggles */}
                      <div className="flex border-b border-[#A69076]/40 pb-2 mb-3 gap-2 justify-center">
                        {[
                          { key: "ancient", label: "Chất Phác Cổ Đại" },
                          { key: "metaphysical", label: "Siêu Hình Cận Đại" },
                          { key: "dialectical", label: "Biện Chứng Khoa Học" }
                        ].map((m) => (
                          <button
                            key={m.key}
                            onClick={() => setUserSelection(m.key)}
                            id={`duyvat-toggle-btn-${m.key}`}
                            className={`px-3 py-1 text-xs font-mono rounded-sm transition cursor-pointer border ${
                              userSelection === m.key || (!userSelection && m.key === "dialectical")
                                ? "bg-[#2A2420] text-white border-[#2A2420] font-bold"
                                : "bg-white hover:bg-[#F2ECE4] border-[#A69076]/50 text-[#2A2420]"
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={userSelection || "dialectical"}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="bg-[#F2ECE4]/60 p-4 border border-[#A69076] rounded-sm text-xs space-y-2 text-left"
                        >
                          {(userSelection === "ancient") && (
                            <>
                              <h4 className="font-sans font-bold text-amber-900 uppercase">1. Duy Vật Chất Phác (Cổ Đại)</h4>
                              <p className="leading-relaxed">
                                Đóng góp vĩ đại là thừa nhận tính thứ nhất của vật chất để giải thoát tư duy khỏi tôn giáo thần bí. Tuy nhiên, họ lại đồng nhất vật chất với những <strong>vật thể cụ thể cảm tính</strong> như: Nước (Thales), Lửa (Heraclitus), hay Nguyên tử (Democritus). Mang nặng tính trực quan ngây thơ.
                              </p>
                              <div className="text-[10px] font-mono text-[#615347] bg-white px-2 py-1 rounded-sm border border-[#A69076]/30 italic max-w-sm">
                                "Lửa sinh ra tất cả và sẽ nuốt chửng tất cả." — Heraclitus
                              </div>
                            </>
                          )}
                          {(userSelection === "metaphysical") && (
                            <>
                              <h4 className="font-sans font-bold text-stone-900 uppercase">2. Duy Vật Siêu Hình (Cận Đại - Thế kỷ XVII, XVIII)</h4>
                              <p className="leading-relaxed">
                                Phát triển rực rỡ cùng cơ học cổ điển Newton. Nhìn thế giới như một <strong>cỗ máy cơ học khổng lồ</strong>, các bộ phận tách rời biệt lập tĩnh tại, không biến đổi chất. Không giải thích được tính biện chứng sống động của xã hội.
                              </p>
                              <div className="text-[10px] font-mono text-[#615347] bg-white px-2 py-1 rounded-sm border border-[#A69076]/30 italic max-w-sm">
                                Coi con người hoạt động máy móc cơ học tựa đồng hồ dây cót.
                              </div>
                            </>
                          )}
                          {(userSelection === "" || userSelection === "dialectical") && (
                            <>
                              <h4 className="font-sans font-bold text-emerald-900 uppercase">3. Duy Vật Biện Chứng (Karl Marx, F. Engels, V.I. Lenin sáng tạo)</h4>
                              <p className="leading-relaxed">
                                Đỉnh cao vĩ đại của lịch sử triết học. Không chỉ khẳng định vật chất quyết định ý thức, mà còn vạch rõ ý thức có tính năng động, sáng tạo vô biên tác động ngược lại vật chất thông qua hoạt động thực tiễn lịch sử xã hội của loài người.
                              </p>
                              <div className="text-[10px] font-mono text-[#FAF7F0] bg-[#2A2420] px-2 py-1.5 rounded-sm border border-[#A69076]/65 italic max-w-md">
                                Thật chất của thế giới là vật chất vận động theo 3 quy luật biện chứng tối cao.
                              </div>
                            </>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  )}

                  {/* SLIDE 5: Chủ Nghĩa Duy Tâm */}
                  {activeSlide === 5 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div 
                          onClick={() => setUserSelection("subjective")}
                          id="duytam-subjective-btn"
                          className={`p-4 border rounded-sm text-left cursor-pointer transition ${
                            userSelection === "subjective" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-white border-[#A69076]/45 hover:bg-[#F2ECE4]"
                          }`}
                        >
                          <h4 className="font-sans font-bold uppercase text-xs mb-1">Duy Tâm Chủ Quan (Subjective Idealism)</h4>
                          <p className="text-[11px] leading-relaxed opacity-90">
                            Coi cảm giác, trải nghiệm và ý thức của <strong>chủ thể con người cá nhân</strong> là cái có trước nhất và quyết định sự tồn tại của mọi vật thể dải đất.
                          </p>
                          <div className="mt-3 text-[10px] italic font-mono opacity-80 text-right">
                            "Mọi vật thể chỉ tồn tại nếu được tri giác." — George Berkeley
                          </div>
                        </div>

                        <div 
                          onClick={() => setUserSelection("objective")}
                          id="duytam-objective-btn"
                          className={`p-4 border rounded-sm text-left cursor-pointer transition ${
                            userSelection === "objective" ? "bg-[#2A2420] text-white border-[#2A2420]" : "bg-white border-[#A69076]/45 hover:bg-[#F2ECE4]"
                          }`}
                        >
                          <h4 className="font-sans font-bold uppercase text-xs mb-1">Duy Tâm Khách Quan (Objective Idealism)</h4>
                          <p className="text-[11px] leading-relaxed opacity-90">
                            Trọng vọng một lực lượng tinh thần tối cao, siêu nhiên như <strong>"Ý niệm tuyệt đối", "Ông Trời", hay "Thiên Chúa"</strong> có trước và sinh ra vũ trụ dải đất.
                          </p>
                          <div className="mt-3 text-[10px] italic font-mono opacity-80 text-right">
                            "Lịch sử thế giới là quá trình tự nhận thức của Ý niệm tuyệt đối." — Hegel
                          </div>
                        </div>
                      </div>

                      {/* Interactive socratic query for critical thought */}
                      <div className="bg-[#F2ECE4]/75 border border-[#A69076]/55 rounded-sm p-3.5 text-xs">
                        <strong className="text-[#2A2420] uppercase font-sans text-[10px] tracking-wide block mb-1">DẤU ẤN LỊCH SỬ KỲ DIỆU:</strong>
                        <p className="text-[#615347] leading-relaxed">
                          Tuy sai lầm về thế giới học, nhưng cả hai nhà tư tưởng Duy tâm vĩ đại đều có đóng góp to lớn trong việc nghiên cứu chiều sâu tinh thần năng động và phát minh ra Logic biện chứng tư duy (Hegel).
                        </p>
                      </div>
                    </div>
                  )}

                  {/* SLIDE 6: Khả Tri Luận và Bất Khả Tri Luận */}
                  {activeSlide === 6 && (
                    <div className="space-y-4">
                      <div className="flex border border-[#A69076]/45 rounded-sm overflow-hidden text-xs">
                        {/* Gnosticism tab node */}
                        <div 
                          onClick={() => setUserSelection("gnostic")}
                          id="gnostic-panel-btn"
                          className={`flex-1 p-3 text-center cursor-pointer transition ${
                            userSelection === "gnostic" || !userSelection ? "bg-[#2A2420] text-white" : "bg-white text-[#2A2420] border-r border-[#A69076]/45"
                          }`}
                        >
                          <span className="font-mono font-bold block mb-1">KHẢ TRI LUẬN</span>
                          Thừa nhận năng lực nhận thức thấu suốt của loài người
                        </div>
                        {/* Agnosticism tab node */}
                        <div 
                          onClick={() => setUserSelection("agnostic")}
                          id="agnostic-panel-btn"
                          className={`flex-1 p-3 text-center cursor-pointer transition ${
                            userSelection === "agnostic" ? "bg-[#2A2420] text-white" : "bg-white text-[#2A2420]"
                          }`}
                        >
                          <span className="font-mono font-bold block mb-1">BẤT KHẢ TRI LUẬN</span>
                          Phủ nhận hoặc nghi ngờ năng lực chạm thấu bản chất khách quan
                        </div>
                      </div>

                      <div className="bg-[#FAF7F0] p-4 text-xs rounded-sm border border-[#A69076]/50">
                        <h4 className="font-sans font-bold text-[#2A2420] uppercase mb-2">
                          {userSelection === "agnostic" ? "BẢN CHẤT BẤT KHẢ TRI (VÍ DỤ IMMANUEL KANT)" : "BẢN CHẤT KHẢ TRI (ĐẠI DIỆN TIÊU BIỂU DUY VẬT BIỆN CHỨNG)"}
                        </h4>
                        {userSelection === "agnostic" ? (
                          <p className="leading-relaxed text-[#615347]">
                            Triết gia Immanuel Kant tự thân lập luận rằng: Chúng ta chỉ có thể biết thế giới xuất hiện trước mắt ta như thế nào qua tri giác (gọi là <strong>"Hiện tượng" - Phenomena</strong>), còn bản chất của sự vật tự nó (gọi là <strong>"Vật tự nó" - Ding an sich</strong>) thì vĩnh viễn nằm ngoài khả năng thấu suốt lý trí loài người.
                          </p>
                        ) : (
                          <p className="leading-relaxed text-[#615347]">
                            Chủ nghĩa duy vật biện chứng vạch rõ: Trên thế giới không có vật gì là không thể nhận thức được (đối với con người qua các thế hệ nối tiếp thực tiễn). Chỉ có những vật **chưa được nhận thức**, và khoa học hiện đại đang ngày càng chinh phục bóc trần những bức màn bí ẩn ấy!
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* SLIDE 7: Biện Chứng và Siêu Hình */}
                  {activeSlide === 7 && (
                    <div className="space-y-4">
                      {/* Flex side-by-side comparative representation */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div 
                          onClick={() => setUserSelection("biendung")}
                          id="methodology-biendung-btn"
                          className={`p-3.5 border rounded-sm text-left transition duration-200 cursor-pointer ${
                            userSelection === "biendung" || !userSelection ? "bg-[#FAF7F0] border-[#2A2420] shadow-xs" : "bg-[#F2ECE4]/30 border-[#A69076]/30 grayscale opacity-70"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-2 hover:font-bold">
                            <Activity className="w-4 h-4 text-emerald-800" />
                            <h4 className="font-sans font-bold uppercase text-xs">Phương Pháp Biện Chứng</h4>
                          </div>
                          <ul className="text-[11px] space-y-1.5 leading-relaxed text-[#615347]">
                            <li>&bull; Nhìn sự vật trong các mối <strong>liên hệ phổ biến</strong>, ràng buộc lẫn nhau.</li>
                            <li>&bull; Xem xét sự vật trong trạng thái <strong>không ngừng vận động, phát triển</strong>.</li>
                            <li>&bull; Thừa nhận mâu thuẫn nội tại là động lực cốt lõi của mọi biến chuyển lịch sử.</li>
                          </ul>
                        </div>

                        <div 
                          onClick={() => setUserSelection("sieuhinh")}
                          id="methodology-sieuhinh-btn"
                          className={`p-3.5 border rounded-sm text-left transition duration-200 cursor-pointer ${
                            userSelection === "sieuhinh" ? "bg-[#FAF7F0] border-[#2A2420] shadow-xs" : "bg-[#F2ECE4]/30 border-[#A69076]/30 grayscale opacity-70"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-2 hover:font-bold">
                            <GitCommit className="w-4 h-4 text-stone-800" />
                            <h4 className="font-sans font-bold uppercase text-xs">Phương Pháp Siêu Hình</h4>
                          </div>
                          <ul className="text-[11px] space-y-1.5 leading-relaxed text-[#615347]">
                            <li>&bull; Cô lập sự vật, xem như một thực thể <strong>tách rời biệt lập hoàn toàn</strong>.</li>
                            <li>&bull; Phán quyết sự vật trong trạng thái <strong>tĩnh tại bất biến</strong> vĩnh hằng.</li>
                            <li>&bull; Nếu có biến đổi, chỉ thừa nhận sự dịch chuyển cơ giới bên ngoài về số lượng.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Summary visual indicator of dynamic vs frozen */}
                      <div className="p-3.5 bg-white border border-[#A69076] rounded-sm text-xs text-center font-mono">
                        <span className="font-bold uppercase block text-[#2A2420] mb-1">KẾT LUẬN TRANH TRANH LUẬN:</span>
                        <p className="text-[#615347] italic font-serif">
                          {userSelection === "sieuhinh" 
                            ? "=> Phương pháp siêu hình giống như chụp một tấm ảnh tĩnh của vũ trụ thực tại."
                            : "=> Phương pháp biện chứng tựa một cuốn phim quay chậm bộc lộ dòng đời sống động vô cùng tận."}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
                {/* DYNAMIC DIAGRAM CONTENT END */}

              </div>

              {/* Navigation Arrows for slide flow */}
              <div className="mt-6 flex justify-between items-center pt-4 border-t border-[#A69076]">
                <button
                  onClick={() => handleSlideChange(Math.max(1, activeSlide - 1))}
                  id="slide-prev-action-btn"
                  disabled={activeSlide === 1}
                  className={`flex items-center space-x-1.5 text-xs font-mono tracking-wider transition ${
                    activeSlide === 1 ? "opacity-30 cursor-not-allowed" : "text-[#615347] hover:text-[#2A2420] hover:italic cursor-pointer"
                  }`}
                >
                  <span>&larr; SLIDE TRƯỚC</span>
                </button>
                <span className="text-[10px] font-mono tracking-widest text-[#615347]">
                  CHUYÊN ĐỀ {activeSlide} / {SLIDES_LIST.length}
                </span>
                <button
                  onClick={() => handleSlideChange(Math.min(SLIDES_LIST.length, activeSlide + 1))}
                  id="slide-next-action-btn"
                  disabled={activeSlide === SLIDES_LIST.length}
                  className={`flex items-center space-x-1.5 text-xs font-mono tracking-wider transition ${
                    activeSlide === SLIDES_LIST.length ? "opacity-30 cursor-not-allowed" : "text-[#615347] hover:text-[#2A2420] hover:italic cursor-pointer"
                  }`}
                >
                  <span>SLIDE TIẾP LÊN &rarr;</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

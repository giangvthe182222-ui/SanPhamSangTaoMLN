import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Globe, 
  Scale, 
  UserCheck, 
  Zap, 
  AlertTriangle, 
  BookOpen, 
  Layers
} from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const TOPIC_SLIDES: SlideData[] = [
 
];

export default function PhilosophicalDiagrams() {
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const current = TOPIC_SLIDES.find(s => s.id === activeSlide) || TOPIC_SLIDES[0];

  return (
    <div className="bg-[#FAF7F0] border-2 border-[#A69076] rounded-sm shadow-md overflow-hidden grain-overlay text-[#2A2420] font-serif transition-colors p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#A69076] pb-4 mb-6 gap-4">
        <div>
          <h3 className="font-display text-xl font-bold tracking-wider text-[#2A2420] flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#A69076]" /> SƠ ĐỒ TƯ DUY HỆ THỐNG
          </h3>
          <p className="text-[10px] font-mono text-[#615347] mt-1 uppercase tracking-widest leading-relaxed">
            Phân tích cấu trúc lý luận và thực tiễn qua các mô hình trực quan
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          {TOPIC_SLIDES.map((slide) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(slide.id)}
              className={`w-full text-left p-3 rounded-sm border transition-all flex items-center gap-3 cursor-pointer ${
                activeSlide === slide.id
                  ? "bg-[#2A2420] text-[#F2ECE4] border-[#2A2420] shadow-md translate-x-1"
                  : "bg-white border-[#A69076]/30 text-[#615347] hover:border-[#A69076]"
              }`}
            >
              <div className={activeSlide === slide.id ? "text-[#A69076]" : "text-[#A69076]/60"}>
                {slide.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-tight leading-none">
                {slide.title}
              </span>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:col-span-3 bg-white/60 border border-[#A69076] p-6 rounded-sm relative min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#2A2420] text-[#A69076] rounded-sm">
                            {current.icon}
                        </div>
                        <div>
                            <h4 className="text-[10px] font-mono font-black text-[#A69076] uppercase tracking-[0.2em]">
                                {current.subtitle}
                            </h4>
                            <h2 className="text-2xl font-bold italic">{current.title}</h2>
                        </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-[#2A2420] border-l-4 border-[#A69076]/20 pl-6 py-2">
                        {current.description}
                    </p>
                    
                    <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#F2ECE4] p-4 border border-[#A69076]/40 rounded-sm">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[#615347]">Nguyên lý cốt lõi</span>
                            <p className="text-xs mt-1 italic">Mọi quyền lực thuộc về nhân dân, được thực thi thông qua pháp luật.</p>
                        </div>
                        <div className="bg-[#2A2420] p-4 text-[#F2ECE4] rounded-sm">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[#A69076]">Ghi chú thực tiễn</span>
                            <p className="text-xs mt-1 opacity-80">Cần phát huy tối đa vai trò của các nền tảng số trong quản lý nhà nước.</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            
            {/* Background decorative elements */}
            <div className="absolute bottom-4 right-4 text-[#A69076]/10">
                <ShieldCheck className="w-32 h-32" />
            </div>
        </div>
      </div>
    </div>
  );
}

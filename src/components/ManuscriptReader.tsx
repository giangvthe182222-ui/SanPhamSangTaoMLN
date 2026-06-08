import React, { useState, useEffect } from "react";
import { PRESENTATION_DATA, PresentationPart } from "../types";
import { BookOpen, Sparkles, Clock, ArrowLeft, ArrowRight, Play, Pause, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ManuscriptReaderProps {
  onSelectConcept: (concept: string) => void;
  activeId: number;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
}

export default function ManuscriptReader({ onSelectConcept, activeId, setActiveId }: ManuscriptReaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const currentPart = PRESENTATION_DATA.find((p) => p.id === activeId) || PRESENTATION_DATA[0];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveId((prev) => {
          if (prev >= 10) {
            setIsPlaying(false);
            return 1;
          }
          return prev + 1;
        });
      }, 9000); // Transitions to next speaker every 9s
    }
    return () => clearInterval(timer);
  }, [isPlaying, setActiveId]);

  const handlePrev = () => {
    setActiveId((prev) => (prev > 1 ? prev - 1 : 10));
  };

  const handleNext = () => {
    setActiveId((prev) => (prev < 10 ? prev + 1 : 1));
  };

  return (
    <div className="bg-[#FAF7F0] border-2 border-[#A69076] rounded-sm shadow-md relative overflow-hidden grain-overlay text-[#2A2420] font-serif transition-colors">
      {/* Ancient Header Decor */}
      <div className="bg-[#F2ECE4] px-6 py-4 flex flex-wrap justify-between items-center border-b border-[#A69076] gap-4">
        <div className="flex items-center space-x-3">
          <BookOpen className="text-[#A69076] w-6 h-6 shrink-0" />
          <div>
            <h3 className="font-display font-semibold text-lg tracking-wider text-[#2A2420]">
              THƯ VIỆN LÝ LUẬN & BIỆN CHỨNG
            </h3>
            <p className="text-[10px] font-mono text-[#615347] tracking-widest uppercase">
              Bản thảo nghiên cứu vĩ đại &bull; 10 Diễn giả
            </p>
          </div>
        </div>

        {/* Playback simulation widget */}
        <div className="flex items-center space-x-2 bg-white/60 px-3 py-1.5 rounded-sm border border-[#A69076] text-xs">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            id="play-simulation-btn"
            className="flex items-center space-x-1.5 text-[#2A2420] hover:text-[#A69076] transition font-mono font-bold"
            title={isPlaying ? "Tạm dừng tự động chạy" : "Tự động trình bày mẫu"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current text-[#A69076]" />
                <span className="text-xs">ĐANG DIỄN GIẢI SỐ...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current text-[#A69076]" />
                <span className="text-xs">THUYẾT TRÌNH TỰ ĐỘNG</span>
              </>
            )}
          </button>
          {isPlaying && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A69076] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A69076]"></span>
            </span>
          )}
        </div>
      </div>

      {/* Modern Brass Dial Timeline Slider */}
      <div className="px-6 py-4 bg-[#F2ECE4]/70 border-b border-[#A69076] flex flex-col space-y-2">
        <div className="flex justify-between items-center text-xs font-mono text-[#615347]">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> TIẾN TRÌNH LUẬN ĐIỂM (0h - 1h)
          </span>
          <span className="bg-[#2A2420] text-[#F2ECE4] px-2 py-0.5 rounded text-[10px] font-bold">
            {currentPart.time}
          </span>
        </div>
        
        {/* Progress Grid representation of 10 speech milestones */}
        <div className="grid grid-cols-10 gap-1 md:gap-1.5 py-1">
          {PRESENTATION_DATA.map((part) => {
            const isActive = part.id === activeId;
            const isRead = part.id <= activeId;
            return (
              <button
                key={part.id}
                onClick={() => {
                  setActiveId(part.id);
                  setIsPlaying(false);
                }}
                id={`timeline-node-${part.id}`}
                className={`h-3 rounded-sm transition-all focus:outline-none relative group ${
                  isActive
                    ? "bg-[#2A2420] scale-y-125 border border-[#FAF7F0] ring-1 ring-[#2A2420]"
                    : isRead
                    ? "bg-[#A69076]"
                    : "bg-[#D1C7B7]/40 hover:bg-[#A69076]/50"
                }`}
              >
                {/* Micro tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-[#2A2420] text-[#FAF7F0] text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none mb-1 shadow-md z-40 font-serif border border-[#A69076]">
                  Luận điểm {part.id}: {part.speaker} ({part.time})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Manuscript Body with classical styled margins */}
      <div className="p-8 md:p-10 min-h-[460px] flex flex-col justify-between relative bg-white/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Header: Member stamp */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#A69076]/40 gap-2">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#A69076] uppercase block font-bold">
                  Khổ {currentPart.id} &bull; Diễn giả: {currentPart.speaker} ({currentPart.role})
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2A2420] mt-1 tracking-wide leading-tight">
                  {currentPart.title}
                </h2>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#615347] bg-[#FAF7F0] border border-[#A69076]/40 px-3 py-1 rounded-sm">
                <Clock className="w-3.5 h-3.5 text-[#A69076]" />
                <span>Thời lượng: <strong className="text-[#2A2420]">{currentPart.time}</strong></span>
              </div>
            </div>

            {/* Classical philosophical Quote Box */}
            <div className="bg-[#F2ECE4] border-l-4 border-[#A69076] px-4 py-3 italic text-sm md:text-base text-[#615347] rounded-sm font-serif shadow-sm">
              <Sparkles className="w-4 h-4 text-[#A69076] mb-1 inline-block mr-1" />
              {currentPart.philosophicalQuote}
            </div>

            {/* Detailed Presentation content */}
            <div className="text-base leading-relaxed text-[#2A2420] text-justify space-y-4 font-serif whitespace-pre-line first-letter:text-4xl first-letter:float-left first-letter:font-display first-letter:mr-2 first-letter:font-bold first-letter:text-[#A69076]">
              {currentPart.content}
            </div>

            {/* Concept chips interactive explore */}
            <div className="pt-6 border-t border-[#A69076]/30">
              <span className="text-xs font-mono text-[#615347] tracking-wider uppercase block mb-2 font-bold">
                Các phạm trù lý luận chính (Bấm để đặt lên bàn luận bàn):
              </span>
              <div className="flex flex-wrap gap-2">
                {currentPart.keyConcepts.map((concept, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectConcept(concept)}
                    id={`concept-chip-${currentPart.id}-${idx}`}
                    className="flex items-center space-x-1 px-3 py-1 bg-white/60 hover:bg-[#FAF7F0] text-[#2A2420] text-xs font-mono rounded-sm border border-[#A69076]/40 transition duration-200 hover:border-[#2A2420] cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A69076]"></span>
                    <span>{concept}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Brass footer controls */}
        <div className="mt-8 flex justify-between items-center pt-4 border-t border-[#A69076]">
          <button
            onClick={handlePrev}
            id="prev-manuscript-btn"
            className="flex items-center space-x-2 text-sm font-mono text-[#615347] hover:text-[#2A2420] hover:italic transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>NGƯỜI TRƯỚC</span>
          </button>

          <span className="text-xs font-mono text-[#615347]">
            TRANG <strong className="text-[#2A2420]">{currentPart.id}</strong> / 10
          </span>

          <button
            onClick={handleNext}
            id="next-manuscript-btn"
            className="flex items-center space-x-2 text-sm font-mono text-[#615347] hover:text-[#2A2420] hover:italic transition"
          >
            <span>NGƯỜI KẾ TIẾP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

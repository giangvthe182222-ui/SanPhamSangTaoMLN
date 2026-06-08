import React, { useState } from "react";
import { KNOWLEDGE_DATA, KnowledgeSection } from "../types";
import { BookOpen, Sparkles, ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ManuscriptReaderProps {
  onSelectConcept: (concept: string) => void;
  activeId: number;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
}

export default function ManuscriptReader({ onSelectConcept, activeId, setActiveId }: ManuscriptReaderProps) {
  const currentSection = KNOWLEDGE_DATA.find((s) => s.id === activeId) || KNOWLEDGE_DATA[0];

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
              TỔNG KHO TRI THỨC LÝ LUẬN
            </h3>
            <p className="text-[10px] font-mono text-[#615347] tracking-widest uppercase">
              Hệ thống 10 Luận điểm cốt lõi &bull; Dân chủ & Tự do
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono text-[#615347]">
            <span className="px-2 py-0.5 border border-[#A69076]/30 rounded">BẢN THẢO PHÂN TÍCH</span>
            <span className="px-2 py-0.5 border border-[#A69076]/30 rounded uppercase">Chương IV - SXHKH</span>
        </div>
      </div>

      {/* Navigation and Title Section */}
      <div className="px-6 py-4 bg-[#F2ECE4]/70 border-b border-[#A69076] flex flex-col space-y-4">
        <div className="flex justify-between items-center">
            <span className="text-[11px] font-mono font-bold text-[#A69076] uppercase tracking-tighter">
              Chương mục: {currentSection.id} / 10
            </span>
            <div className="flex items-center space-x-2">
                <button onClick={handlePrev} className="bg-white border border-[#A69076] p-1.5 rounded-sm hover:bg-[#2A2420] hover:text-white transition cursor-pointer">
                    <ArrowLeft className="w-4 h-4" />
                </button>
                <button onClick={handleNext} className="bg-white border border-[#A69076] p-1.5 rounded-sm hover:bg-[#2A2420] hover:text-white transition cursor-pointer">
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight italic border-l-4 border-[#A69076] pl-4">
           {currentSection.title}
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left Column: Philosophical Quote & Concepts */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/40 p-5 border-l-2 border-[#A69076] italic relative">
                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-[#A69076]/40" />
                <p className="text-sm leading-relaxed text-[#615347]">
                  "{currentSection.philosophicalQuote}"
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-[#A69076]">Phạm trù then chốt:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentSection.keyConcepts.map((concept, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSelectConcept(concept)}
                      className="text-[11px] font-mono bg-white border border-[#A69076]/40 px-2 py-1 rounded-sm hover:bg-[#A69076] hover:text-white transition cursor-pointer"
                    >
                      {concept}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#2A2420] text-[#F2ECE4] p-5 rounded-sm shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition">
                    <Lightbulb className="w-12 h-12" />
                </div>
                <h4 className="text-[10px] uppercase font-black tracking-widest mb-2 opacity-60">Thanh Thực Tiễn:</h4>
                <p className="text-xs leading-relaxed italic">
                  {currentSection.example}
                </p>
              </div>
            </div>

            {/* Right Column: Main Analysis Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-8 shadow-inner border border-[#A69076]/20 relative min-h-[300px]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A69076] to-transparent opacity-30"></div>
                <p className="text-base md:text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#A69076] whitespace-pre-wrap">
                  {currentSection.content}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Grid Selection Footer */}
      <div className="bg-[#F2ECE4] border-t border-[#A69076] p-4 flex justify-between items-center overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2">
          {KNOWLEDGE_DATA.map((s) => (
            <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`w-8 h-8 rounded-full border text-[10px] font-mono font-bold transition flex items-center justify-center cursor-pointer ${
                    s.id === activeId 
                    ? "bg-[#2A2420] text-white border-[#2A2420]" 
                    : "bg-white text-[#A69076] border-[#A69076] hover:bg-[#A69076]/10"
                }`}
            >
                {s.id}
            </button>
          ))}
        </div>
        <p className="text-[10px] font-mono text-[#615347] uppercase font-bold ml-4 whitespace-nowrap">
            &bull; Tri thức là sức mạnh &bull;
        </p>
      </div>
    </div>
  );
}

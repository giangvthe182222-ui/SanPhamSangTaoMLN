import React, { useState } from "react";
import { BookOpen, Layers, HelpCircle, PenTool, Sparkles, AlertCircle, Quote, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ManuscriptReader from "./components/ManuscriptReader";
import PhilosophicalDiagrams from "./components/PhilosophicalDiagrams";
import QuizReview from "./components/QuizReview";
import SocraticDiary from "./components/SocraticDiary";
// @ts-ignore
import athensAcademyImg from "./assets/images/athens_academy_1780908307906.png";

type ActiveTab = "library" | "diagrams" | "quiz" | "diary";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("library");
  const [notification, setNotification] = useState<string | null>(
    "Kính chào Học Giả! Chào mừng tới Đàn Tranh Luận Triết Học & Dân Chủ."
  );
  
  // State for active presentation student node (shared so concept clicks in tab 1 highlight in tab 2)
  const [activeSpeakerId, setActiveSpeakerId] = useState<number>(1);
  const [selectedConceptMark, setSelectedConceptMark] = useState<string>("");

  const triggerNotification = (message: string) => {
    setNotification(message);
    // Dismiss after 5 seconds automatically
    setTimeout(() => {
      setNotification((curr) => (curr === message ? null : curr));
    }, 5000);
  };

  const handleSelectConcept = (concept: string) => {
    setSelectedConceptMark(concept);
    setActiveTab("diagrams");
    triggerNotification(`Đang đặt phạm trù lý luận "${concept}" lên sơ đồ khảo sát trực quan...`);
  };

  return (
    <div className="min-h-screen bg-[#F2ECE4] text-[#2A2420] flex flex-col justify-between selection:bg-[#A69076]/30 selection:text-[#2A2420] relative overflow-hidden font-serif p-3 md:p-6 border-[8px] md:border-[16px] border-[#D1C7B7] shadow-inner grain-overlay">
      {/* Absolute decorative border outlines */}
      <div className="absolute inset-4 border border-[#A69076]/45 rounded-sm pointer-events-none z-10 hidden md:block"></div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto w-full px-2 py-4 md:py-8 z-20 flex-grow flex flex-col space-y-6">
        
        {/* Ancient Hellenistic / Latin Title Banner in Editorial Aesthetic style */}
        <header className="flex flex-col md:flex-row justify-between items-center md:items-end border-b border-[#A69076] pb-6 mb-2 text-[#2A2420] gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#615347] opacity-80 mb-1">
              Philosophia Naturalis & Politica
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tighter leading-none italic font-serif">
              Dân Chủ & Tự Do Ngôn Luận
            </h1>
            <p className="text-xs md:text-sm italic text-[#615347] max-w-lg mt-2 leading-relaxed">
              Cơ sở lý luận về nền dân chủ Xã hội Chủ nghĩa và quyền tự do ngôn luận trong bối cảnh không gian mạng hiện đại.
            </p>
          </div>
          <div className="text-center md:text-right shrink-0">
            <p className="text-xs uppercase tracking-widest font-sans font-black text-[#2A2420]">
              TRI THỨC SỐ &bull; MMXXVI
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-1 text-[11px] font-mono text-[#615347] mt-1">
              <span className="bg-[#D1C7B7] text-[#2A2420] px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider inline-block">
                CHƯƠNG IV (SXHKH)
              </span>
              <span>ĐẠI HỌC FPT</span>
            </div>
          </div>
        </header>
{/* Artistic Woodcut Scholar's Banner */}
        <div className="border border-[#A69076]/45 p-1 bg-[#FAF7F0] rounded-sm shadow-xs overflow-hidden relative">
          <div className="relative h-28 md:h-36 w-full overflow-hidden">
            <img 
              src={athensAcademyImg} 
              alt="The School of Athens - Ancient Philosophy meeting modern communication" 
              className="w-full h-full object-cover filter grayscale contrast-125 opacity-75 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F0]/30 to-transparent"></div>
          </div>
          <div className="absolute bottom-2 left-4 text-[9px] font-mono uppercase tracking-[0.2em] text-[#2A2420] bg-[#FAF7F0] px-2.5 py-0.5 border border-[#A69076]/45 rounded-sm shadow-xs font-bold">
            Hiến định Học đường &bull; Khảo cứu Biện chứng Dân chủ số
          </div>
        </div>
        {/* Dispatch Scroll (Philosophical dynamic banner note) */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-[#FAF7F0] border-2 border-dashed border-[#A69076] rounded-sm px-4 py-3 text-xs text-[#2A2420] flex items-center justify-between shadow-sm grain-overlay font-serif relative"
            >
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#A69076] shrink-0 animate-pulse" />
                <span className="font-semibold">{notification}</span>
              </div>
              <button
                onClick={() => setNotification(null)}
                className="text-[10px] font-mono uppercase font-black text-[#615347] hover:text-[#2A2420] cursor-pointer ml-3 shrink-0"
              >
                [ĐÓNG]
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab Selection Navigation Bar - Aged Editorial look */}
        <div className="flex justify-center">
          <nav className="flex flex-wrap items-center justify-center gap-1.5 bg-[#FAF7F0] p-1 border border-[#A69076] rounded-sm shadow-sm">
            <button
              onClick={() => setActiveTab("library")}
              id="tab-btn-library"
              className={`flex items-center justify-center space-x-2 px-3 md:px-5 py-2.5 rounded-sm text-[11px] md:text-xs font-mono tracking-wider transition-all uppercase cursor-pointer ${
                activeTab === "library"
                  ? "bg-[#2A2420] text-[#F2ECE4] font-bold shadow-md"
                  : "text-[#2A2420] hover:bg-[#D1C7B7]/40 hover:italic"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. KHO TRI THỨC</span>
            </button>

            <button
              onClick={() => setActiveTab("diagrams")}
              id="tab-btn-diagrams"
              className={`flex items-center justify-center space-x-2 px-3 md:px-5 py-2.5 rounded-sm text-[11px] md:text-xs font-mono tracking-wider transition-all uppercase cursor-pointer ${
                activeTab === "diagrams"
                  ? "bg-[#2A2420] text-[#F2ECE4] font-bold shadow-md"
                  : "text-[#2A2420] hover:bg-[#D1C7B7]/40 hover:italic"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>2. HỆ THỐNG LÝ LUẬN</span>
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              id="tab-btn-quiz"
              className={`flex items-center justify-center space-x-2 px-3 md:px-5 py-2.5 rounded-sm text-[11px] md:text-xs font-mono tracking-wider transition-all uppercase cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-[#2A2420] text-[#F2ECE4] font-bold shadow-md"
                  : "text-[#2A2420] hover:bg-[#D1C7B7]/40 hover:italic"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>3. KIỂM TRA NHẬN THỨC</span>
            </button>

           
          </nav>
        </div>

        {/* Tab Content Display Area with animations */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {activeTab === "library" && (
              <motion.div
                key="tab-library"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Embedded Scholarly Introduction Badge in Elegant Editorial cream background */}
                

                <ManuscriptReader
                  onSelectConcept={handleSelectConcept}
                  activeId={activeSpeakerId}
                  setActiveId={setActiveSpeakerId}
                />
              </motion.div>
            )}

            {activeTab === "diagrams" && (
              <motion.div
                key="tab-diagrams"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <PhilosophicalDiagrams />
              </motion.div>
            )}

            {activeTab === "quiz" && (
              <motion.div
                key="tab-quiz"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <QuizReview />
              </motion.div>
            )}

            {activeTab === "diary" && (
              <motion.div
                key="tab-diary"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <SocraticDiary onNotify={triggerNotification} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Medieval Styled Socratic Footer */}
      <footer className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-[#2A2420]/80 border-t border-[#A69076] pt-4 gap-2 z-20">
        <div>FOLIO NO. 0042</div>
        <div className="italic text-center">[ VERITAS VOS LIBERABIT &bull; SỰ THẬT GIẢI PHÓNG ĐỜI TA ]</div>
        <div>PRINTED IN FPT UNIVERSITY</div>
      </footer>
    </div>
  );
}

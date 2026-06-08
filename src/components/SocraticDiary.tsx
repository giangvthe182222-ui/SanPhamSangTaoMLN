import React, { useState, useEffect } from "react";
import { ReflectionJournal } from "../types";
import { PenTool, Notebook, Calendar, Trash2, Heart, Award, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SocraticDiaryProps {
  onNotify: (message: string) => void;
}

const TEMPLATE_PROMPTS = [
  "Ranh giới giữa thảo luận dân chủ và bôi nhọ cá nhân trên mạng xã hội là gì?",
  "Tự do ngôn luận có đồng nghĩa với việc được nói bất cứ điều gì mà không chịu trách nhiệm?",
  "Tôi đã từng vô tình chia sẻ thông tin chưa kiểm chứng (tin giả) chưa? Tại sao?",
  "Hành vi trực tuyến của tôi có thực sự tôn trọng quyền làm chủ của người khác?"
];

const DIARY_MOODS = [
  { label: "Bình tâm", color: "border-[#A69076] text-[#A69076]" },
  { label: "Kỷ cương", color: "border-slate-500 text-slate-500" },
  { label: "Suy tư", color: "border-[#615347] text-[#615347]" },
  { label: "Trách nhiệm", color: "border-[#2A2420] text-[#241E1C]" }
];

export default function SocraticDiary({ onNotify }: SocraticDiaryProps) {
  const [journals, setJournals] = useState<ReflectionJournal[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState(TEMPLATE_PROMPTS[0]);
  const [content, setContent] = useState("");
  const [mood, setMood] = useState(DIARY_MOODS[0].label);

  useEffect(() => {
    const saved = localStorage.getItem("citizen_diaries");
    if (saved) {
      try {
        setJournals(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing saved diaries");
      }
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      onNotify("Vui lòng nhập nội dung suy ngẫm.");
      return;
    }

    const newDiary: ReflectionJournal = {
      id: "diary_" + Date.now(),
      date: new Date().toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      topic: currentPrompt,
      content: content.trim(),
      mood: mood
    };

    const updated = [newDiary, ...journals];
    setJournals(updated);
    localStorage.setItem("citizen_diaries", JSON.stringify(updated));
    setContent("");
    onNotify("Đã lưu lại suy ngẫm của bạn vào nhật ký công dân số.");
  };

  const handleDelete = (id: string) => {
    const updated = journals.filter((j) => j.id !== id);
    setJournals(updated);
    localStorage.setItem("citizen_diaries", JSON.stringify(updated));
    onNotify("Đã xóa bản ghi chép.");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-serif text-[#2A2420]">
      <div className="lg:col-span-7 bg-[#FAF7F0] border-2 border-[#A69076] rounded-sm shadow-sm overflow-hidden grain-overlay p-6 md:p-8 flex flex-col justify-between relative">
        <div className="absolute top-2 right-4 text-7xl select-none font-display pointer-events-none opacity-[0.03]">
          🖋️
        </div>

        <div>
          <div className="border-b border-[#A69076]/60 pb-3 mb-5 flex items-center space-x-3">
            <Notebook className="text-[#A69076] w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-display font-bold text-lg tracking-wide text-[#2A2420]">
                NHẬT KÝ PHẢN TỈNH CÔNG DÂN SỐ
              </h3>
              <p className="text-[10px] font-mono text-[#615347] uppercase tracking-widest">
                Xây dựng văn hóa dân chủ & trách nhiệm kỷ cương
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <label className="text-[10px] font-black uppercase text-[#A69076] tracking-tighter">Chủ đề suy ngẫm:</label>
            <select 
              value={currentPrompt}
              onChange={(e) => setCurrentPrompt(e.target.value)}
              className="w-full bg-white border border-[#A69076]/40 p-2 text-sm italic focus:outline-none focus:border-[#2A2420]"
            >
              {TEMPLATE_PROMPTS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Ghi lại những suy nghĩ chân thực của bạn về dân chủ và trách nhiệm cá nhân..."
              className="w-full h-48 md:h-64 bg-white/50 border border-[#A69076]/40 p-4 text-base italic leading-relaxed focus:outline-none focus:bg-white transition-all resize-none shadow-inner"
            />

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-black uppercase text-[#A69076]">Thái độ:</span>
              <div className="flex flex-wrap gap-2">
                {DIARY_MOODS.map((m) => (
                  <button
                    key={m.label}
                    type="button"
                    onClick={() => setMood(m.label)}
                    className={`px-3 py-1 text-[10px] uppercase font-bold border rounded-full transition-all cursor-pointer ${
                      mood === m.label ? "bg-[#2A2420] text-[#F2ECE4] border-[#2A2420]" : "bg-white text-[#615347] border-[#A69076]/30"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#A69076]/20 flex justify-end">
              <button
                type="submit"
                className="bg-[#2A2420] text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-[0.2em] shadow-md hover:bg-[#A69076] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <PenTool className="w-4 h-4" /> Ký tên & Lưu trữ
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#615347] border-b border-[#A69076] pb-2 mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Bản ghi cũ ({journals.length})
        </h4>

        <AnimatePresence initial={false}>
          {journals.length === 0 ? (
            <div className="text-center py-12 opacity-40 italic text-sm">Chưa có bản ghi nào được lưu trữ.</div>
          ) : (
            journals.map((journal) => (
              <motion.div
                key={journal.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white border border-[#A69076]/60 p-4 rounded-sm shadow-sm relative group"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono font-bold text-[#A69076]">{journal.date}</span>
                  <button 
                    onClick={() => handleDelete(journal.id)}
                    className="text-red-800/40 hover:text-red-800 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <h5 className="text-[10px] font-black uppercase text-[#2A2420] leading-tight mb-2 border-b border-dashed border-[#A69076]/20 pb-1 pr-6">
                  {journal.topic}
                </h5>
                <p className="text-sm italic text-[#615347] leading-relaxed line-clamp-4">
                  "{journal.content}"
                </p>
                <div className="mt-3 flex items-center gap-2">
                    <span className="text-[9px] font-bold bg-[#F2ECE4] px-2 py-0.5 border border-[#A69076]/40 text-[#615347]">
                        {journal.mood}
                    </span>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

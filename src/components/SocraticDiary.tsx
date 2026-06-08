import React, { useState, useEffect } from "react";
import { ReflectionJournal } from "../types";
import { PenTool, Notebook, Calendar, Trash2, Heart, Award, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SocraticDiaryProps {
  onNotify: (message: string) => void;
}

const TEMPLATE_PROMPTS = [
  "Tự do phát ngôn trên Confessions FPTU - Ranh giới giữa thảo luận văn minh và bôi nhọ ẩn danh là gì?",
  "Tự do vô chính phủ hay tự do trong khuôn khổ kỷ cương của Pháp quyền? Đâu là tinh thần đúng đắn?",
  "Tôi chịu trách nhiệm gì trước cộng đồng số khi chia sẻ một thông tin nóng hổi nhưng chưa hề kiểm chứng?",
  "Suy ngẫm bản thân: Hành vi trực tuyến của tôi có thực sự tôn trọng phẩm giá và mưu cầu hạnh phúc của tha nhân?"
];

const LATIN_MOODS = [
  { label: "Bình Tâm (Tranquillus)", color: "border-[#A69076] text-[#A69076]" },
  { label: "Nghiêm Khắc Kỷ (Stoicus)", color: "border-slate-500 text-slate-500" },
  { label: "Suy Tư (Meditatio)", color: "border-[#615347] text-[#615347]" },
  { label: "Phản Tỉnh (Recogito)", color: "border-[#2A2420] text-[#241E1C]" }
];

export default function SocraticDiary({ onNotify }: SocraticDiaryProps) {
  const [journals, setJournals] = useState<ReflectionJournal[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState(TEMPLATE_PROMPTS[0]);
  const [content, setContent] = useState("");
  const [mood, setMood] = useState(LATIN_MOODS[0].label);

  // Load diaries from local storage
  useEffect(() => {
    const saved = localStorage.getItem("socratic_diaries");
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
      onNotify("Không thể ký thác suy ngẫm trống rỗng vào lịch sử.");
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
    localStorage.setItem("socratic_diaries", JSON.stringify(updated));
    setContent("");
    onNotify("Đã ký dấu tay niêm phong suy niệm cá nhân vào cuốn da thuộc!");
  };

  const handleDelete = (id: string) => {
    const updated = journals.filter((j) => j.id !== id);
    setJournals(updated);
    localStorage.setItem("socratic_diaries", JSON.stringify(updated));
    onNotify("Đã hóa tro tàn một bản ghi chép cũ.");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-serif text-[#2A2420]">
      {/* LEFT COLUMN: Write Notepad Slot */}
      <div className="lg:col-span-7 bg-[#FAF7F0] border-2 border-[#A69076] rounded-sm shadow-sm overflow-hidden grain-overlay p-6 md:p-8 flex flex-col justify-between relative">
        <div className="absolute top-2 right-4 text-7xl select-none font-display pointer-events-none opacity-[0.03]">
          🖋️
        </div>

        <div>
          {/* Header */}
          <div className="border-b border-[#A69076]/60 pb-3 mb-5 flex items-center space-x-3">
            <Notebook className="text-[#A69076] w-6 h-6 shrink-0" />
            <div>
              <h3 className="font-display font-bold text-lg tracking-wide text-[#2A2420]">
                SỔ DA SUY NIỆM CÁ NHÂN
              </h3>
              <p className="text-[10px] font-mono text-[#615347] uppercase tracking-widest">
                Đào sâu nội tâm & Trách nhiệm công dân số
              </p>
            </div>
          </div>

          {/* Prompt quick selector */}
          <div className="space-y-2 mb-4">
            <label className="text-xs font-mono text-[#615347] uppercase tracking-wider block font-bold">
              Chọn một vấn đề biện chứng hoặc gõ ý nguyện:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {TEMPLATE_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentPrompt(p)}
                  className={`text-[11px] px-2.5 py-1 text-left rounded-sm border transition cursor-pointer ${
                    currentPrompt === p
                      ? "bg-[#2A2420] border-[#2A2420] text-[#FAF7F0] font-semibold shadow-xs"
                      : "bg-white/60 border-[#A69076]/45 text-[#2A2420] hover:bg-[#FAF7F0]"
                  }`}
                >
                  Gợi ý {idx + 1}
                </button>
              ))}
            </div>
            
            {/* Displaying active prompt */}
            <div className="bg-white border-l-4 border-[#A69076] p-3 rounded-sm text-sm italic text-[#2A2420] select-none font-medium mt-1">
              "{currentPrompt}"
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-4">
            {/* Mindful mood */}
            <div>
              <span className="text-xs font-mono text-[#615347] uppercase tracking-wider block mb-2 font-bold">
                Trạng thái tinh thần khi suy ngẫm (Mood):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {LATIN_MOODS.map((m) => (
                  <button
                    key={m.label}
                    type="button"
                    onClick={() => setMood(m.label)}
                    className={`px-2 py-1 text-[11px] font-mono border rounded-sm transition cursor-pointer ${
                      mood === m.label
                        ? "bg-[#2A2420] text-[#FAF7F0] border-[#2A2420]"
                        : "bg-white hover:bg-[#FAF7F0]"
                    } ${m.color}`}
                  >
                    {m.label.split(" (")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Content writing with notebook lines styled purely in CSS */}
            <div className="relative mt-2">
              <span className="text-xs font-mono text-[#615347] uppercase tracking-wider block mb-1 font-bold">
                Ký thác suy nghĩ (Ghi ra lý luận của bạn):
              </span>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={7}
                placeholder="Ví dụ: Tôi tin rằng tự do ngôn luận trên FPTU Confessions... (Hãy viết tối thiểu 1 dòng để lưu trữ suy ngẫm của bạn vào lịch sử)"
                className="w-full bg-[#FCFAF5] border border-[#A69076] focus:border-[#2A2420] focus:ring-1 focus:ring-[#2A2420]/20 p-4 text-sm font-serif leading-relaxed text-[#2A2420] outline-none rounded-sm resize-none placeholder-[#615347]/50 shadow-inner"
                style={{
                  backgroundImage: "linear-gradient(#D1C7B7 1px, transparent 1px)",
                  backgroundSize: "100% 2rem",
                  lineHeight: "2rem",
                  paddingTop: "0.5rem"
                }}
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-[10px] font-mono text-[#615347] uppercase">
                BÚT TÍCH KÝ TÊN BẢN THÂN
              </span>
              <button
                type="submit"
                id="submit-diary-btn"
                className="px-6 py-2 bg-[#2A2420] hover:bg-[#615347] text-[#FAF7F0] text-xs font-mono rounded-sm transition duration-200 font-bold tracking-wide border border-[#2A2420] flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>NIÊM PHONG SỔ DA</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT COLUMN: Saved journals log list */}
      <div className="lg:col-span-12 xl:col-span-5 bg-[#F2ECE4] border-2 border-[#A69076] rounded-sm shadow-sm overflow-hidden grain-overlay p-6 flex flex-col justify-between">
        <div>
          <div className="border-b border-[#A69076]/60 pb-3 mb-5 flex justify-between items-center">
            <span className="font-display font-bold text-base tracking-wide text-[#2A2420] uppercase">
              BƯU ĐIỆN SUY NIỆM HỌC GIẢ
            </span>
            <span className="text-[10px] font-mono bg-white text-[#2A2420] border border-[#A69076]/45 px-2 py-0.5 rounded-sm font-bold">
              CÓ {journals.length} BẢN NIÊM
            </span>
          </div>

          <ScrollJournalList journals={journals} onDelete={handleDelete} />
        </div>

        {/* Dynamic educational Socratic helper */}
        <div className="bg-[#FAF7F0] border border-[#A69076] p-4 rounded-sm mt-6 relative">
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-4 h-4 text-[#A69076]" />
            <span className="text-xs font-mono font-bold text-[#2A2420] tracking-wider uppercase">
              LỜI CẢNH TỈNH KHẮC KỶ
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[#615347] font-serif italic">
            "Mỗi vết mực vương trên giấy, hay lời nói gửi lên mây, đều dệt nên phẩm cách con người. Tự do ngôn từ tôn quý vô cùng, cớ sao lại dùng nó để rải tro tàn đau đớn lên người đồng loại? Hãy phản biện lý tính như loài bồ câu hiền hòa."
          </p>
        </div>
      </div>
    </div>
  );
}

// Inner subcomponent: List of journals to handle React clean view limits and scrolling
interface ScrollJournalListProps {
  journals: ReflectionJournal[];
  onDelete: (id: string) => void;
}

function ScrollJournalList({ journals, onDelete }: ScrollJournalListProps) {
  if (journals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 text-[#615347]">
        <Notebook className="w-10 h-10 stroke-[1.2] text-[#A69076]/60 mb-2" />
        <span className="text-xs font-mono uppercase tracking-wider block">
          Chưa có bút tích nào
        </span>
        <p className="text-[11px] text-stone-500 mt-1 max-w-xs font-serif italic">
          Các ghi chép suy ngẫm triết lý của bạn sẽ được bảo mật và lưu trữ vĩnh viễn ở đây.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
      <AnimatePresence>
        {journals.map((journal) => (
          <motion.div
            key={journal.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-4 bg-white border border-[#A69076]/60 rounded-sm relative shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Delete absolute btn */}
            <button
              onClick={() => onDelete(journal.id)}
              id={`delete-diary-btn-${journal.id}`}
              className="absolute top-2 right-2 text-[#615347] hover:text-red-700 transition cursor-pointer p-1 rounded-sm hover:bg-[#F2ECE4]"
              title="Đốt bỏ ghi chép này"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>

            <span className="text-[10px] font-mono text-[#A69076] block mb-1 font-bold">
              Trạng thái cốt cách: {journal.mood}
            </span>

            <h4 className="text-xs font-bold text-[#2A2420] pr-6 font-serif line-clamp-1 border-b border-[#A69076]/30 pb-1.5 mb-2">
              Đề bài: {journal.topic}
            </h4>

            <p className="text-xs leading-relaxed text-[#615347] font-serif whitespace-pre-wrap">
              {journal.content}
            </p>

            <div className="flex items-center space-x-1.5 text-[9px] font-mono text-stone-400 mt-3 border-t border-[#A69076]/20 pt-1.5">
              <Calendar className="w-3 h-3 text-[#A69076]" />
              <span>{journal.date}</span>
            </div>

            {/* Custom Stamp style */}
            <div className="absolute right-4 bottom-1 selection:hidden select-none pointer-events-none font-display text-[9px] text-[#A69076]/40 font-bold border border-[#A69076]/25 rounded-xs px-1.5 py-0.5 rotate-12">
              VERITAS
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

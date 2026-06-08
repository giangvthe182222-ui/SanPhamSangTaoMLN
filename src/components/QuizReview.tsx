import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RefreshCw, 
  ArrowRight, 
  BookOpen
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUESTIONS_DATA: Question[] = [
  {
    id: 1,
    question: "Thuật ngữ 'Dân chủ' (Demoskratos) trong tiếng Hy Lạp cổ đại có nghĩa là gì?",
    options: [
      "Quyền lực của giới tinh hoa",
      "Quyền lực thuộc về nhân dân",
      "Sự cai trị của luật pháp",
      "Tự do ngôn luận tuyệt đối"
    ],
    correctIndex: 1,
    explanation: "Demoskratos kết hợp từ 'demos' (nhân dân) và 'kratos' (quyền lực), khẳng định dân là chủ thể quyền lực."
  },
  {
    id: 2,
    question: "Theo triết học Mác - Lênin, dân chủ được hiểu trên các phương diện nào?",
    options: [
      "Quyền lực, chế độ chính trị và nguyên tắc quản lý",
      "Kinh tế thị trường và tự do cá nhân",
      "Công nghệ số và an ninh mạng",
      "Bầu cử tự do và đa đảng"
    ],
    correctIndex: 0,
    explanation: "Dân chủ là quyền lực nhân dân, là một hình thái nhà nước và là nguyên tắc tổ chức xã hội (tập trung dân chủ)."
  },
  {
    id: 3,
    question: "Mối quan hệ giữa dân chủ và pháp luật được xác định như thế nào?",
    options: [
      "Dân chủ là tự do tuyệt đối, không cần pháp luật",
      "Pháp luật bóp nghẹt quyền dân chủ",
      "Dân chủ gắn liền với kỷ cương và được thể chế hóa bằng pháp luật",
      "Dân chủ chỉ tồn tại khi không có nhà nước"
    ],
    correctIndex: 2,
    explanation: "Dân chủ không thể tách rời kỷ luật và pháp luật; pháp luật bảo vệ quyền dân chủ chính đáng."
  },
  {
    id: 4,
    question: "Đâu là thách thức lớn nhất đối với tự do ngôn luận trên mạng xã hội hiện nay?",
    options: [
      "Sự thiếu hụt thiết bị công nghệ",
      "Tin giả (Fake News) và các thế lực lợi dụng bôi nhọ, xuyên tạc",
      "Chi phí truy cập internet quá cao",
      "Việc nhà nước công khai các dự thảo luật"
    ],
    correctIndex: 1,
    explanation: "Tin giả và sự lợi dụng tự do ngôn luận để chống phá, bôi nhọ là những thách thức an ninh và đạo đức nghiêm trọng."
  },
  {
    id: 5,
    question: "Trách nhiệm quan trọng nhất của một 'Công dân số' là gì?",
    options: [
      "Chia sẻ mọi thông tin mình thấy thú vị",
      "Sử dụng mạng xã hội để bóc phốt người khác",
      "Thượng tôn pháp luật, kiểm chứng thông tin (fact-check) và ứng xử văn minh",
      "Sở hữu nhiều tài khoản mạng xã hội nhất"
    ],
    correctIndex: 2,
    explanation: "Công dân số cần có trách nhiệm với phát ngôn của mình, tuân thủ pháp luật và đạo đức trên không gian mạng."
  }
];

export default function QuizReview() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = QUESTIONS_DATA[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);
    if (idx === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS_DATA.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedIdx(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedIdx(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="bg-[#FAF7F0] border-2 border-[#A69076] rounded-sm shadow-md overflow-hidden grain-overlay text-[#2A2420] font-serif p-4 md:p-8 min-h-[500px] flex flex-col">
      <div className="border-b border-[#A69076] pb-4 mb-6 flex justify-between items-center">
        <h3 className="font-display text-xl font-bold tracking-wider flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#A69076]" /> KIỂM TRA NHẬN THỨC SỐ
        </h3>
        <span className="text-xs font-mono font-bold bg-[#F2ECE4] px-2 py-1 border border-[#A69076]">
          CÂU HỎI {currentIdx + 1} / {QUESTIONS_DATA.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-grow flex flex-col"
          >
            <h2 className="text-xl md:text-2xl font-bold italic mb-8 leading-snug">
              {currentQuestion.question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedIdx === idx;
                const isCorrect = idx === currentQuestion.correctIndex;
                let borderColor = "border-[#A69076]/30";
                let bgColor = "bg-white";

                if (isAnswered) {
                  if (isCorrect) {
                      borderColor = "border-green-600";
                      bgColor = "bg-green-50";
                  } else if (isSelected) {
                      borderColor = "border-red-600";
                      bgColor = "bg-red-50";
                  }
                } else if (isSelected) {
                    borderColor = "border-[#2A2420]";
                    bgColor = "bg-[#F2ECE4]";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isAnswered}
                    className={`p-4 rounded-sm border-2 text-left transition-all relative ${borderColor} ${bgColor} ${!isAnswered ? "hover:border-[#A69076] cursor-pointer" : ""}`}
                  >
                    <div className="flex items-start gap-3">
                        <span className="text-[10px] font-mono font-black opacity-40 mt-1">{String.fromCharCode(65 + idx)}.</span>
                        <span className="text-sm md:text-base leading-tight">{option}</span>
                    </div>
                    {isAnswered && isCorrect && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-green-600" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="absolute top-2 right-2 w-4 h-4 text-red-600" />}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#D1C7B7]/40 p-4 border-l-4 border-[#A69076] mb-6"
              >
                <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-4 h-4 text-[#A69076]" />
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#615347]">Giải thích lý luận</span>
                </div>
                <p className="text-sm italic">{currentQuestion.explanation}</p>
              </motion.div>
            )}

            <div className="mt-auto pt-4 flex justify-end">
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all ${
                  isAnswered 
                  ? "bg-[#2A2420] text-white hover:bg-[#A69076] cursor-pointer" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {currentIdx < QUESTIONS_DATA.length - 1 ? "Câu tiếp theo" : "Xem kết quả"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-grow flex flex-col items-center justify-center text-center py-12"
          >
            <div className="p-6 bg-[#2A2420] rounded-full mb-6">
                <Award className="w-16 h-16 text-[#A69076]" />
            </div>
            <h2 className="text-3xl font-bold italic mb-2">Hoàn thành Kiểm tra!</h2>
            <p className="text-[#615347] mb-8 uppercase tracking-widest text-sm">Điểm số nhận thức: <span className="text-[#2A2420] font-black">{score} / {QUESTIONS_DATA.length}</span></p>
            
            <div className="max-w-md bg-white border border-[#A69076] p-6 mb-8 italic text-sm text-[#615347]">
                "{score === QUESTIONS_DATA.length 
                   ? "Tuyệt vời! Bạn có nhận thức sâu sắc về ranh giới dân chủ và pháp luật trên không gian số." 
                   : "Hãy tiếp tục trau dồi tri thức về bản chất dân chủ và pháp luật để trở thành công dân số bản lĩnh."}"
            </div>

            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 px-8 py-3 bg-[#A69076] text-white rounded-sm font-bold uppercase tracking-widest hover:bg-[#2A2420] transition cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Thực hiện lại
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

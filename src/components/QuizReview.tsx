import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RefreshCw, 
  ArrowRight, 
  BookOpen, 
  CheckCheck
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
    question: "Nội dung cốt lõi của mặt thứ nhất trong Vấn đề cơ bản của Triết học giải quyết điều gì?",
    options: [
      "Con người có khả năng thấu biết nhận thức thế giới khách quan hay không?",
      "Giữa vật chất và ý thức, cái nào có trước, cái nào có sau, cái nào quyết định cái nào?",
      "Chọn lựa triết học Trung Quốc cổ đại hay triết học Hy Lạp cổ đại?",
      "Vai trò lãnh đạo của giai cấp tư sản trên không gian mạng hiện đại."
    ],
    correctIndex: 1,
    explanation: "Mặt thứ nhất (Bản thể luận) tập trung giải quyết mối quan hệ cội nguồn nguồn gốc: Vật chất hay Ý thức cái nào có trước và quyết định cái còn lại."
  },
  {
    id: 2,
    question: "Luận điểm 'Cảm giác, ý thức của cá nhân chủ thể có trước và quyết định thực tại thế giới' thuộc lập trường triết học nào?",
    options: [
      "Chủ nghĩa Duy vật Biện chứng",
      "Chủ nghĩa Duy tâm Khách quan",
      "Chủ nghĩa Duy tâm Chủ quan",
      "Thuyết Bất Khả Tri"
    ],
    correctIndex: 2,
    explanation: "Chủ nghĩa Duy tâm Chủ quan tuyệt đối hóa vai trò cảm giác chủ quan cá nhân, coi thế giới vật chất dải đất xung quanh chỉ là sự phức hợp của các cảm giác cá nhân."
  },
  {
    id: 3,
    question: "Hình thức nào đại diện cho đỉnh cao huy hoàng và tiến bộ bậc nhất của Chủ nghĩa Duy vật trong lịch sử nhân loại?",
    options: [
      "Chủ nghĩa Duy vật Chất phác ngây thơ cổ đại",
      "Chủ nghĩa Duy vật Siêu hình cơ học sáo mòn cận đại",
      "Chủ nghĩa Duy vật Biện chứng (Mác - Lênin)",
      "Triết học Tuyệt đối của thế giới Hegel"
    ],
    correctIndex: 2,
    explanation: "Chủ nghĩa Duy vật Biện chứng kết hợp hài hòa thế giới khách quan khoa học và nguyên lý vận động phát triển tuyệt mỹ của phép biện chứng."
  },
  {
    id: 4,
    question: "Phương pháp tư duy dán ghép sự vật trong trạng thái cô lập tĩnh lặng, tuyệt đối hóa ranh giới cứng nhắc gọi là gì?",
    options: [
      "Phương pháp tư duy Biện chứng",
      "Phương pháp tư duy Siêu hình",
      "Thuyết Khả Tri biện lập",
      "Nhận thức cảm tính trực quan"
    ],
    correctIndex: 1,
    explanation: "Phương pháp Siêu hình nhìn thế giới như một chiếc đồng hồ chết, chia vụn các bộ phận riêng rẽ lập biệt, không liên kết tiến hóa."
  },
  {
    id: 5,
    question: "Hai nguồn gốc trọng yếu nhất thúc đẩy sự ra đời vĩ đại của tư duy Triết học trong lịch sử loài người là gì?",
    options: [
      "Tri thức internet phong phú và sự hình thành hệ sinh thái số",
      "Sự xuất hiện chế độ dân chủ vô sản và an ninh mạng xã hội",
      "Nguồn gốc Nhận thức và Nguồn gốc Xã hội",
      "Khát vọng tự do ngôn sự và hoạt động mưu sinh kiếm ăn cổ sơ"
    ],
    correctIndex: 2,
    explanation: "Triết học chỉ cất cánh ra đời khi tri thức nhân loại đạt độ khái quát hóa nâng cao (Nhận thức) kết hợp sự phân chia lao động trí óc rảnh rỗi (Xã hội)."
  },
  {
    id: 6,
    question: "Theo quan điểm triết học Mác - Lênin, bản chất tối cao của 'Tự do' được cắt nghĩa khoa học biện chứng thế nào?",
    options: [
      "Tự do vô chính phủ, không có bất kỳ can thiệp hay trách nhiệm quốc gia nào",
      "Tự do là cái tất yếu mang tính quy luật được quần chúng nhận thức",
      "Tự do là đặc quyền tự phát ngôn bừa bãi sau tài khoản nặc danh ẩn mật",
      "Tự do chỉ dành cho giới học thuật có tài sản tư hữu cao vợi"
    ],
    correctIndex: 1,
    explanation: "Ph.Ăng-ghen vạch rõ: 'Tự do là cái tất yếu được nhận thức'. Tự do đích thực thắp sáng khi ta nắm bắt quy luật khách quan và tự giác kỷ cương pháp quyền hành động."
  },
  {
    id: 7,
    question: "Phương châm hành động dân chủ xã hội chủ nghĩa trọng yếu nào thể hiện rõ nét sự làm chủ của người dân tại Việt Nam hiện nay?",
    options: [
      "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng",
      "Muốn viết gì thì viết bừa bãi không ai xử phạt",
      "Xóa bỏ hoàn toàn chế độ tư duy tập trung chính thể nhà nước",
      "Tuyệt đối hóa tiếng nói của một thiểu số giai cấp thống trị"
    ],
    correctIndex: 0,
    explanation: "Phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng' bảo toàn dân chủ thực sâu sắc không hề hình thức sáo rỗng."
  },
  {
    id: 8,
    question: "Bộ luật nòng cốt nào tại nước ta trực tiếp giám trị ranh giới giữa tự do ngôn luận văn minh và hành động lợi dụng mạng để bịa đặt ác ý?",
    options: [
      "Luật Thương mại Quốc tế",
      "Bộ Quy tắc của FPTU Confessions",
      "Luật Đất đai chỉnh sửa",
      "Luật An ninh mạng"
    ],
    correctIndex: 3,
    explanation: "Luật An ninh mạng nghiêm trị hành vi lợi diện tự do số để tung tin đồn thất thiệt, phỉ báng thâu mạ nhân phẩm, bạo lực mạng phá hoại trật tự xã hội."
  },
  {
    id: 9,
    question: "Người 'Công dân số' (Digital Citizen) đức độ bản lĩnh cần tối ưu hành vi phát ngôn trực tuyến ra sao?",
    options: [
      "Hùa theo tâm lý đám đông chia sẻ phẫn uất, tàn phá uy tín nhân phẩm tha nhân",
      "Luyện rèn sức đề kháng số, có tư duy phản biện, kiểm chứng thông tin và tôn trọng nhân phẩm",
      "Chỉ sử dụng tài khoản ảo ẩn danh để an toàn xúc phạm tự hữu cá nhân khác",
      "Tẩy chay hoàn toàn mọi tương tác thảo luận chính trị trên mạng xã hội"
    ],
    correctIndex: 1,
    explanation: "Công dân số chân chính thừa hưởng nền văn hóa 'Tôn trọng cá nhân', rèn dũa bộ lọc tri thức (Critical thinking) để bồi đắp môi trường mạng trong sạch."
  },
  {
    id: 10,
    question: "Giáo trình hệ thống nào là nền móng lý luận của chuyên đề 'Dân chủ xã hội chủ nghĩa' chúng ta khảo sát học tập?",
    options: [
      "Lịch sử Triết học Trung Quốc",
      "Giáo trình Chủ nghĩa xã hội khoa học (Chương IV)",
      "Triết học Cổ điển Đức của thế hệ Kant-Hegel",
      "Pháp luật an toàn thông tin cơ bản"
    ],
    correctIndex: 1,
    explanation: "Chương IV Giáo trình Chủ nghĩa xã hội khoa học vạch ra đầy đủ, chân thực bản chất chính trị, kinh tế, tư tưởng và thực tiễn của nền dân chủ xã hội chủ nghĩa."
  }
];

export default function QuizReview() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  const activeQuestion = QUESTIONS_DATA[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (isLocked) return;
    setSelectedOpt(optIdx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOpt === null || isLocked) return;
    
    setIsLocked(true);
    const isCorrect = selectedOpt === activeQuestion.correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
    }
    setUserAnswers((prev) => [...prev, isCorrect]);
  };

  const handleNextStep = () => {
    if (currentIdx < QUESTIONS_DATA.length - 1) {
      setCurrentIdx((idx) => idx + 1);
      setSelectedOpt(null);
      setIsLocked(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsLocked(false);
    setScore(0);
    setQuizFinished(false);
    setUserAnswers([]);
  };

  const getRankMessage = (sc: number) => {
    if (sc === 10) return "Học Giả Xuất Chúng Tối Cao (Perfectus)";
    if (sc >= 8) return "Cử Nhân Triết Học Bản Lĩnh (Sapientia)";
    if (sc >= 5) return "Môn Đồ Biện Chứng Đang Rèn Luyện (Mundus)";
    return "Sĩ Tử Cần Phản Tỉnh Nghiêm Khắc";
  };

  return (
    <div className="bg-[#FAF7F0] border-2 border-[#A69076] rounded-sm shadow-md overflow-hidden grain-overlay text-[#2A2420] font-serif transition-colors p-4 md:p-6">
      {/* Header Banner */}
      <div className="border-b border-[#A69076] pb-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-display text-xl font-bold tracking-wider text-[#2A2420] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#A69076]" /> KHOA HỌC THIẾT LUẬN: ÔN TẬP TRẮC NGHIỆM
          </h3>
          <p className="text-[10px] font-mono text-[#615347] mt-1 uppercase tracking-widest leading-relaxed">
            Hồi quy và phản kiểm tri thức Triết học Mác - Lênin & Tự do Ngôn luận trực tuyến
          </p>
        </div>
        {!quizFinished && (
          <div className="text-xs font-mono bg-[#F2ECE4] border border-[#A69076]/45 px-3 py-1 bg-white text-stone mt-1 rounded-sm">
            CÂU CHỦ ĐỀ {currentIdx + 1} / {QUESTIONS_DATA.length}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!quizFinished ? (
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Visual Progress Bar */}
            <div className="w-full bg-[#D1C7B7]/40 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#2A2420] h-full transition-all duration-300"
                style={{ width: `${((currentIdx) / QUESTIONS_DATA.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Text in Editorial display */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase bg-[#2A2420] text-[#F2ECE4] px-2 py-0.5 rounded-sm inline-block font-bold">
                Câu Hỏi {activeQuestion.id}:
              </span>
              <h4 className="text-lg md:text-xl font-bold tracking-tight text-[#2A2420] leading-snug">
                {activeQuestion.question}
              </h4>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {activeQuestion.options.map((opt, oIdx) => {
                const isSelected = selectedOpt === oIdx;
                const isCorrectAnswer = oIdx === activeQuestion.correctIndex;
                
                let optionStyle = "bg-white border-[#A69076]/45 hover:bg-[#F2ECE4]/40 text-[#2A2420]";
                if (isSelected) {
                  optionStyle = "bg-[#F2ECE4] border-[#2A2420] font-semibold text-[#2A2420] ring-1 ring-[#A69076]";
                }

                if (isLocked) {
                  if (isCorrectAnswer) {
                    optionStyle = "bg-[#D1E7DD] border-[#198754] text-[#0F5132] font-semibold";
                  } else if (isSelected) {
                    optionStyle = "bg-[#F8D7DA] border-[#DC3545] text-[#842029]";
                  } else {
                    optionStyle = "bg-white border-[#A69076]/20 text-[#2A2420]/50 opacity-60";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    disabled={isLocked}
                    id={`quiz-option-btn-${QUESTIONS_DATA[currentIdx].id}-${oIdx}`}
                    className={`w-full text-left p-3.5 border rounded-sm text-xs md:text-sm font-sans transition-all duration-150 flex justify-between items-center ${
                      !isLocked ? "cursor-pointer" : "cursor-default"
                    } ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="font-mono mt-0.5 shrink-0 font-bold">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isLocked && isCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-[#198754] shrink-0 ml-2" />
                    )}
                    {isLocked && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-5 h-5 text-[#DC3545] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Locked State: Feedback & Explanations */}
            <AnimatePresence>
              {isLocked && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-zinc-100 border-l-4 border-[#2A2420] p-4 text-xs space-y-1.5"
                >
                  <strong className="text-[10px] tracking-wider uppercase font-mono text-[#2A2420] block">
                    {selectedOpt === activeQuestion.correctIndex ? "✓ NIÊM ĐÚNG LÝ LUẬN" : "✗ CHƯA ĐẠT CHÂN LÝ"}
                  </strong>
                  <p className="text-[#615347] leading-relaxed italic">
                    "{activeQuestion.explanation}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex justify-end pt-4 border-t border-[#A69076]/30">
              {!isLocked ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOpt === null}
                  id="quiz-submit-action-btn"
                  className={`px-5 py-2.5 font-mono text-xs rounded-sm transition duration-200 uppercase font-black tracking-widest ${
                    selectedOpt === null 
                      ? "bg-[#D1C7B7]/50 text-[#2A2420]/40 border border-[#A69076]/20 cursor-not-allowed" 
                      : "bg-[#2A2420] text-[#FAF7F0] hover:bg-[#615347] cursor-pointer"
                  }`}
                >
                  Nộp Bản Án Khóa
                </button>
              ) : (
                <button
                  onClick={handleNextStep}
                  id="quiz-next-action-btn"
                  className="px-5 py-2.5 bg-[#2A2420] text-[#FAF7F0] hover:bg-[#615347] font-mono text-xs rounded-sm transition duration-200 uppercase cursor-pointer tracking-widest flex items-center gap-1 font-black"
                >
                  <span>{currentIdx === QUESTIONS_DATA.length - 1 ? "Xem Kết Quả" : "Câu Tiến Tiếp"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          /* Finished Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6 max-w-lg mx-auto"
          >
            <div className="inline-block p-4 bg-[#F2ECE4] border-2 border-[#A69076] rounded-full text-[#2A2420] shadow-sm">
              <Award className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-black italic">
                BẢN KẾT TOÁN THI CỬ
              </h3>
              <p className="text-sm text-[#615347] font-serif uppercase tracking-widest">
                Đánh giá thành tích học giả FPT
              </p>
            </div>

            {/* Score display */}
            <div className="p-4 bg-white border border-[#A69076] inline-block px-10 rounded-sm">
              <div className="text-4xl md:text-5xl font-black font-sans text-[#2A2420]">
                {score} <span className="text-lg md:text-xl text-[#615347]">/ {QUESTIONS_DATA.length}</span>
              </div>
              <div className="text-[10px] font-mono uppercase text-[#A69076] font-bold mt-2 tracking-widest">
                Điểm Đạt Hành Trình
              </div>
            </div>

            {/* Custom Rank Evaluation message */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#615347] uppercase block tracking-wider">
                Xếp hạng học đạo:
              </span>
              <p className="font-bold text-sm text-[#r-accent] uppercase tracking-wide bg-[#2A2420]/5 py-2 px-4 rounded-sm">
                {getRankMessage(score)}
              </p>
            </div>

            <p className="text-xs text-[#615347] italic font-serif leading-relaxed max-w-md mx-auto">
              "Nguyên lý vận động của triết học là không phủ nhận sai sót, mà kế thừa vượt qua nó thông qua thực hành liên hồi. Hãy tiếp tục mài giũa sức đề kháng số của mình!"
            </p>

            <div className="flex justify-center pt-4 border-t border-[#A69076]/30">
              <button
                onClick={handleResetQuiz}
                id="reset-quiz-btn"
                className="px-6 py-3 bg-white hover:bg-[#F2ECE4] text-[#2A2420] border-2 border-[#A69076]/70 hover:border-[#2A2420] text-xs font-mono font-bold uppercase rounded-sm transition cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Rửa Bút Thi Lại</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
    explanation: "Demoskratos kết hợp từ 'demos' (nhân dân) và 'kratos' (quyền lực), nghĩa là quyền lực thuộc về nhân dân."
  },
  {
    id: 2,
    question: "Theo chủ nghĩa Mác - Lênin, dân chủ được hiểu trên bao nhiêu phương diện cơ bản?",
    options: [
      "Hai phương diện",
      "Ba phương diện",
      "Bốn phương diện",
      "Năm phương diện"
    ],
    correctIndex: 1,
    explanation: "Dân chủ được hiểu trên ba phương diện: quyền lực, chế độ chính trị và nguyên tắc tổ chức quản lý xã hội."
  },
  {
    id: 3,
    question: "Nguyên tắc 'tập trung dân chủ' được hình thành từ sự kết hợp giữa dân chủ và yếu tố nào?",
    options: [
      "Tự do",
      "Bình đẳng",
      "Tập trung",
      "Pháp quyền"
    ],
    correctIndex: 2,
    explanation: "Nguyên tắc tập trung dân chủ là sự kết hợp giữa dân chủ và tập trung trong tổ chức, quản lý."
  },
  {
    id: 4,
    question: "Dân chủ là phạm trù lịch sử vì sao?",
    options: [
      "Chỉ tồn tại ở phương Tây",
      "Xuất hiện cùng nhà nước và mất đi khi nhà nước tiêu vong",
      "Chỉ có trong xã hội hiện đại",
      "Do giai cấp tư sản tạo ra"
    ],
    correctIndex: 1,
    explanation: "Dân chủ với tư cách là hình thái nhà nước chỉ tồn tại khi còn nhà nước."
  },
  {
    id: 5,
    question: "Sự kiện nào được xem là tiền đề thực tiễn cho nền dân chủ xã hội chủ nghĩa?",
    options: [
      "Cách mạng Pháp 1789",
      "Công xã Pari 1871",
      "Chiến tranh thế giới thứ nhất",
      "Cách mạng Mỹ"
    ],
    correctIndex: 1,
    explanation: "Công xã Pari năm 1871 được xem là hình mẫu đầu tiên của nền dân chủ vô sản."
  },
  {
    id: 6,
    question: "Nền dân chủ xã hội chủ nghĩa được xác lập trên quy mô thế giới sau sự kiện nào?",
    options: [
      "Cách mạng Tháng Tám Việt Nam",
      "Công xã Pari",
      "Cách mạng Tháng Mười Nga",
      "Chiến tranh thế giới thứ hai"
    ],
    correctIndex: 2,
    explanation: "Cách mạng Tháng Mười Nga năm 1917 đã mở ra thời đại mới của dân chủ xã hội chủ nghĩa."
  },
  {
    id: 7,
    question: "Quy luật vận động cơ bản của nền dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Thu hẹp quyền lực nhân dân",
      "Không thay đổi theo thời gian",
      "Không ngừng mở rộng dân chủ",
      "Tập trung quyền lực cho thiểu số"
    ],
    correctIndex: 2,
    explanation: "Dân chủ xã hội chủ nghĩa luôn hướng tới mở rộng sự tham gia của nhân dân."
  },
  {
    id: 8,
    question: "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Sự thống trị của tư sản",
      "Sự thống trị của giai cấp công nhân nhằm thực hiện quyền lực nhân dân",
      "Sự thống trị của quân đội",
      "Sự thống trị của giới quý tộc"
    ],
    correctIndex: 1,
    explanation: "Giai cấp công nhân lãnh đạo thông qua Đảng để thực hiện quyền lực của nhân dân."
  },
  {
    id: 9,
    question: "Điều kiện tiên quyết để bảo đảm bản chất chính trị của nền dân chủ XHCN ở Việt Nam là gì?",
    options: [
      "Tăng trưởng kinh tế",
      "Mở rộng đầu tư nước ngoài",
      "Giữ vững sự lãnh đạo của Đảng Cộng sản Việt Nam",
      "Phát triển mạng xã hội"
    ],
    correctIndex: 2,
    explanation: "Đảng Cộng sản Việt Nam giữ vai trò lãnh đạo đối với Nhà nước và xã hội."
  },
  {
    id: 10,
    question: "Bản chất kinh tế của nền dân chủ xã hội chủ nghĩa dựa trên nền tảng nào?",
    options: [
      "Tư hữu tuyệt đối",
      "Công hữu về tư liệu sản xuất chủ yếu",
      "Kinh tế phong kiến",
      "Kinh tế tự cung tự cấp"
    ],
    correctIndex: 1,
    explanation: "Nền dân chủ xã hội chủ nghĩa dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu."
  },
  {
    id: 11,
    question: "Nguyên tắc phân phối chủ yếu trong nền dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Theo địa vị xã hội",
      "Theo tài sản",
      "Theo kết quả lao động",
      "Theo giới tính"
    ],
    correctIndex: 2,
    explanation: "Phân phối theo lao động là nguyên tắc cơ bản của nền kinh tế xã hội chủ nghĩa."
  },
  {
    id: 12,
    question: "Hệ tư tưởng chủ đạo của nền dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Chủ nghĩa tự do",
      "Chủ nghĩa dân tộc",
      "Chủ nghĩa Mác - Lênin",
      "Chủ nghĩa thực dụng"
    ],
    correctIndex: 2,
    explanation: "Chủ nghĩa Mác - Lênin là nền tảng tư tưởng của chế độ xã hội chủ nghĩa."
  },
  {
    id: 13,
    question: "Theo Chủ tịch Hồ Chí Minh, 'Bao nhiêu quyền hạn đều của...?'",
    options: [
      "Đảng",
      "Chính phủ",
      "Nhân dân",
      "Quốc hội"
    ],
    correctIndex: 2,
    explanation: "Hồ Chí Minh khẳng định quyền lực thuộc về nhân dân."
  },
  {
    id: 14,
    question: "Dân chủ xã hội chủ nghĩa ở Việt Nam được xác định là gì?",
    options: [
      "Chỉ là mục tiêu",
      "Chỉ là động lực",
      "Vừa là mục tiêu vừa là động lực phát triển",
      "Chỉ là phương tiện"
    ],
    correctIndex: 2,
    explanation: "Đảng xác định dân chủ vừa là mục tiêu vừa là động lực phát triển đất nước."
  },
  {
    id: 15,
    question: "Phương châm dân chủ được nhấn mạnh trong bài là gì?",
    options: [
      "Dân làm, Nhà nước quản",
      "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng",
      "Nhà nước quyết định, dân thực hiện",
      "Dân đóng góp, Nhà nước quản lý"
    ],
    correctIndex: 1,
    explanation: "Đây là phương châm thể hiện quyền làm chủ toàn diện của nhân dân."
  },
  {
    id: 16,
    question: "Theo giáo trình, dân chủ phải gắn liền với điều gì?",
    options: [
      "Tự do tuyệt đối",
      "Kỷ luật, kỷ cương và pháp luật",
      "Kinh tế thị trường",
      "Đa nguyên chính trị"
    ],
    correctIndex: 1,
    explanation: "Dân chủ phải được bảo đảm bằng pháp luật và thực hiện trong khuôn khổ pháp luật."
  },
  {
    id: 17,
    question: "Tự do ngôn luận trên mạng xã hội có phải là quyền tuyệt đối không?",
    options: [
      "Có",
      "Không",
      "Chỉ với người nổi tiếng",
      "Chỉ với nhà báo"
    ],
    correctIndex: 1,
    explanation: "Tự do ngôn luận luôn gắn với trách nhiệm và giới hạn pháp luật."
  },
  {
    id: 18,
    question: "Hành vi nào sau đây là lợi dụng quyền tự do ngôn luận?",
    options: [
      "Góp ý chính sách",
      "Phản biện mang tính xây dựng",
      "Tung tin giả gây hoang mang",
      "Đề xuất giải pháp xã hội"
    ],
    correctIndex: 2,
    explanation: "Tin giả gây ảnh hưởng tiêu cực tới xã hội và vi phạm pháp luật."
  },
  {
    id: 19,
    question: "Fake News là gì?",
    options: [
      "Tin tức quốc tế",
      "Tin tức khoa học",
      "Tin giả, thông tin sai sự thật",
      "Tin truyền hình"
    ],
    correctIndex: 2,
    explanation: "Fake News là các thông tin bịa đặt hoặc sai lệch được lan truyền trên mạng."
  },
  {
    id: 20,
    question: "Một trong những hậu quả của tin giả là gì?",
    options: [
      "Tăng độ tin cậy xã hội",
      "Gây hoang mang dư luận",
      "Nâng cao nhận thức cộng đồng",
      "Giảm xung đột xã hội"
    ],
    correctIndex: 1,
    explanation: "Tin giả có thể gây bất ổn xã hội và thiệt hại kinh tế."
  },
  {
    id: 21,
    question: "Thách thức nào liên quan đến việc bôi nhọ và xuyên tạc thông tin chính trị?",
    options: [
      "An ninh chính trị",
      "Kinh tế số",
      "Thương mại điện tử",
      "Công nghệ AI"
    ],
    correctIndex: 0,
    explanation: "Đây là nguy cơ ảnh hưởng đến niềm tin của nhân dân và an ninh quốc gia."
  },
  {
    id: 22,
    question: "Cyberbullying là gì?",
    options: [
      "Mua bán trực tuyến",
      "Bạo lực mạng",
      "Học trực tuyến",
      "Làm việc từ xa"
    ],
    correctIndex: 1,
    explanation: "Cyberbullying là hành vi xúc phạm, bắt nạt hoặc tấn công người khác trên mạng."
  },
  {
    id: 23,
    question: "Luật nào được nhắc đến như công cụ quản lý không gian mạng ở Việt Nam?",
    options: [
      "Luật Giáo dục",
      "Luật Doanh nghiệp",
      "Luật An ninh mạng",
      "Luật Thuế"
    ],
    correctIndex: 2,
    explanation: "Luật An ninh mạng là cơ sở pháp lý quan trọng trong quản lý môi trường mạng."
  },
  {
    id: 24,
    question: "Vai trò của các tổ chức chính trị - xã hội là gì?",
    options: [
      "Kinh doanh trực tuyến",
      "Định hướng và giáo dục văn hóa dân chủ",
      "Thay thế cơ quan nhà nước",
      "Quản lý mạng xã hội"
    ],
    correctIndex: 1,
    explanation: "Các tổ chức xã hội góp phần giáo dục ý thức và văn hóa ứng xử cho công dân."
  },
  {
    id: 25,
    question: "Chiến dịch 'Mỗi ngày một tin tốt, mỗi tuần một câu chuyện đẹp' nhằm mục đích gì?",
    options: [
      "Quảng cáo sản phẩm",
      "Lan tỏa giá trị tích cực",
      "Tăng lượt theo dõi",
      "Kêu gọi đầu tư"
    ],
    correctIndex: 1,
    explanation: "Chiến dịch góp phần xây dựng môi trường mạng lành mạnh và nhân văn."
  },
  {
    id: 26,
    question: "Công dân số là người như thế nào?",
    options: [
      "Người dùng điện thoại thông minh",
      "Người có tài khoản Facebook",
      "Người tham gia môi trường số có trách nhiệm và hiểu biết",
      "Người làm việc trong ngành CNTT"
    ],
    correctIndex: 2,
    explanation: "Công dân số cần có kỹ năng số, ý thức pháp luật và trách nhiệm xã hội."
  },
  {
    id: 27,
    question: "Theo Ph. Ăng-ghen, 'Tự do là...'?",
    options: [
      "Quyền lực tối cao",
      "Sự độc lập cá nhân",
      "Cái tất yếu được nhận thức",
      "Không bị ràng buộc"
    ],
    correctIndex: 2,
    explanation: "Đây là luận điểm nổi tiếng của Ăng-ghen về bản chất của tự do."
  },
  {
    id: 28,
    question: "Trước khi chia sẻ thông tin trên mạng, công dân số cần làm gì?",
    options: [
      "Chia sẻ ngay để tăng tương tác",
      "Kiểm chứng thông tin (Fact-check)",
      "Chờ người khác chia sẻ trước",
      "Sửa tiêu đề cho hấp dẫn"
    ],
    correctIndex: 1,
    explanation: "Kiểm chứng thông tin giúp hạn chế việc lan truyền tin giả."
  },
  {
    id: 29,
    question: "Quyền tự do ngôn luận không bao gồm hành vi nào?",
    options: [
      "Nêu chính kiến cá nhân",
      "Phản biện xã hội",
      "Góp ý xây dựng",
      "Xúc phạm danh dự người khác"
    ],
    correctIndex: 3,
    explanation: "Xúc phạm danh dự và nhân phẩm người khác là hành vi vi phạm pháp luật."
  },
  {
    id: 30,
    question: "Thông điệp cốt lõi của bài thuyết trình là gì?",
    options: [
      "Tự do ngôn luận là quyền tuyệt đối",
      "Không nên sử dụng mạng xã hội",
      "Dân chủ bảo đảm quyền ngôn luận nhưng phải gắn với trách nhiệm và pháp luật",
      "Nhà nước kiểm soát mọi phát ngôn"
    ],
    correctIndex: 2,
    explanation: "Quyền tự do ngôn luận cần được thực hiện có trách nhiệm, đúng pháp luật và đạo đức xã hội."
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

export interface KnowledgeSection {
  id: number;
  title: string;
  content: string;
  keyConcepts: string[];
  philosophicalQuote: string;
  example: string;
}

export interface DragItem {
  id: string;
  text: string;
  category: "theory" | "practice" | "value" | "challenge";
  definition: string;
  insight: string;
}

export interface ReflectionJournal {
  id: string;
  date: string;
  topic: string;
  content: string;
  mood: string;
}

export const KNOWLEDGE_DATA: KnowledgeSection[] = [
  {
    id: 1,
    title: "Dân chủ và Tự do ngôn luận trong Kỷ nguyên số",
    keyConcepts: ["Demoskratos", "Kỷ nguyên số", "Không gian mạng", "Tự do ngôn luận"],
    philosophicalQuote: "Dân chủ không chỉ là một hình thức chính trị, mà là một giá trị nhân văn gắn liền với sự phát triển của xã hội.",
    content: `Trong lịch sử tư tưởng nhân loại, thuật ngữ "dân chủ" bắt nguồn từ tiếng Hy Lạp cổ đại là demoskratos, trong đó demos là nhân dân và kratos là quyền lực. Ngay từ sơ khai, dân chủ đã được hiểu là quyền lực thuộc về nhân dân. Trải qua các hình thái kinh tế - xã hội, khái niệm này không ngừng được bổ sung và phát triển.

Đặc biệt, khi nhân loại bước vào kỷ nguyên số, không gian sinh hoạt của con người đã mở rộng sang không gian mạng. Việt Nam hiện nay có hơn 78 triệu người dùng mạng xã hội, chiếm hơn 70% dân số. Mạng xã hội như Facebook, TikTok, YouTube trở thành môi trường hàng đầu để thực hiện quyền tự do ngôn luận - một trong những quyền dân chủ cơ bản nhất. Tuy nhiên, tự do ngôn luận trên mạng xã hội không phải là quyền năng tuyệt đối. Việc phân tích mối quan hệ biện chứng giữa nền dân chủ xã hội chủ nghĩa và hành vi phát ngôn trên thế giới ảo là yêu cầu cấp thiết của thời đại cực kỳ quan trọng.`,
    example: "Hơn 78 triệu người dùng mạng xã hội tại Việt Nam đang tận dụng các nền tảng số để bày tỏ quan điểm và kết nối tri thức."
  },
  {
    id: 2,
    title: "Quan niệm của Chủ nghĩa Mác - Lênin về Dân chủ",
    keyConcepts: ["Quyền lực nhân dân", "Chế độ chính trị", "Nguyên tắc quản lý", "Phạm trù lịch sử"],
    philosophicalQuote: "Dân chủ là một hình thái nhà nước, một trong những hình thức của nhà nước. — V.I. Lênin",
    content: `Dân chủ theo quan điểm Mác - Lênin được hiểu toàn diện trên ba phương diện cốt lõi:
1. Về phương diện quyền lực: Dân chủ là quyền lực thuộc về nhân dân. Nhà nước sinh ra là để phục vụ lợi ích của cộng đồng và nhân dân lao động.
2. Về phương diện chế độ xã hội: Dân chủ là một hình thái nhà nước, gắn liền với giai cấp cầm quyền cụ thể để thực thi quyền lực.
3. Về phương diện tổ chức quản lý: Dân chủ là một nguyên tắc (tập trung dân chủ) trong quản lý nhà nước và xã hội.

Dân chủ vừa là một phạm trù lịch sử (xuất hiện và mất đi cùng nhà nước), vừa là một phạm trù vĩnh viễn (là khát vọng về tự do, công bằng của nhân loại).`,
    example: "Ở thời phong kiến người dân chỉ là 'con dân' không có quyền dân chủ, trong khi ngày nay tiếng nói của họ được tôn trọng và bảo vệ."
  },
  {
    id: 3,
    title: "Sự ra đời và Quy luật vận động của nền Dân chủ XHCN",
    keyConcepts: ["Công xã Pari", "Cách mạng Tháng Mười", "Dân chủ vô sản", "Tự quản xã hội"],
    philosophicalQuote: "Sự phát triển của dân chủ xã hội chủ nghĩa là quy luật khách quan của quá trình xây dựng chủ nghĩa xã hội.",
    content: `Nền dân chủ xã hội chủ nghĩa không tự nhiên mà có, nó được phôi thai từ Công xã Pari (1871) và chính thức xác lập sau Cách mạng Tháng Mười Nga (1917).

Đây là nền dân chủ rộng rãi nhất, hướng tới đại đa số nhân dân lao động. Quy luật vận động bản chất của nó là không ngừng mở rộng dân chủ, tăng cường sự tham gia tự giác của nhân dân vào quản lý nhà nước. Trong xã hội cộng sản, dân chủ với tư cách hình thái nhà nước sẽ tự tiêu vong, nhường chỗ cho một xã hội tự quản hoàn toàn tự do.`,
    example: "Nhà nước công khai các dự thảo luật lớn lên không gian mạng để nhân dân đóng góp ý kiến trực tiếp là minh chứng cho việc mở rộng dân chủ."
  },
  {
    id: 4,
    title: "Bản chất Chính trị của nền Dân chủ XHCN",
    keyConcepts: ["Lãnh đạo của Đảng", "Quyền làm chủ", "Giám sát quyền lực", "Phản biện xã hội"],
    philosophicalQuote: "Giai cấp công nhân lãnh đạo thông qua Đảng để đảm bảo nhà nước phục vụ lợi ích của đa số nhân dân.",
    content: `Bản chất chính trị của nền dân chủ này là sự thống trị chính trị của giai cấp công nhân nhằm thực hiện quyền lực của nhân dân. Giai cấp công nhân lãnh đạo thông qua Đảng Cộng sản để đảm bảo nhà nước phục vụ lợi ích đa số.

Người dân không chỉ là đối tượng quản lý mà là chủ thể chính trị đích thực, có quyền bầu cử, ứng cử và giám sát, phản biện hoạt động của nhà nước. Giữ vững sự lãnh đạo của Đảng là điều kiện sống còn để bảo vệ bản chất chính trị này.`,
    example: "Các trang Fanpage chính thức của Chính phủ là nơi người dân thực hiện quyền làm chủ và phản ánh tiếng nói tới các cấp quản lý."
  },
  {
    id: 5,
    title: "Bản chất Kinh tế và Tư tưởng - Văn hóa",
    keyConcepts: ["Chế độ công hữu", "Phân phối theo lao động", "Hệ tư tưởng Mác-Lênin", "Giá trị nhân văn"],
    philosophicalQuote: "Nền dân chủ XHCN có bệ đỡ vật chất vững chắc và ánh sáng tư tưởng tiến bộ.",
    content: `1. Bản chất kinh tế: Dựa trên chế độ công hữu về tư liệu sản xuất và phân phối theo kết quả lao động. Điều này hướng tới xóa bỏ triệt để chế độ người bóc lột người.
2. Bản chất tư tưởng - văn hóa: Lấy hệ tư tưởng Mác - Lênin làm chủ đạo, kết hợp hài hòa truyền thống dân tộc với tinh hoa nhân loại. Trong nền dân chủ này, lợi ích cá nhân, tập thể và xã hội được kết hợp hài hòa, không có sự đối kháng về lợi ích.`,
    example: "Lan tỏa các giá trị nhân văn qua chiến dịch 'Mỗi ngày một tin tốt' là biểu hiện của một môi trường văn hóa lành mạnh."
  },
  {
    id: 6,
    title: "Thực tiễn và Nhận thức về Dân chủ tại Việt Nam",
    keyConcepts: ["Dân chủ Nhân dân", "Mục tiêu rực rỡ", "Dân biết, dân bàn...", "Đổi mới sáng tạo"],
    philosophicalQuote: "Dân chủ XHCN là bản chất của chế độ, vừa là mục tiêu, vừa là động lực phát triển đất nước.",
    content: `Tại Việt Nam, dân chủ nhân dân đã được thiết lập từ năm 1945. Đảng ta xác định dân chủ là mục tiêu của con đường cách mạng: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh".

Nền dân chủ ở nước ta kết hợp giữa dân chủ trực tiếp và đại diện, quán triệt phương châm: "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng".`,
    example: "Livestream các phiên chất vấn Quốc hội trên mạng xã hội cho phép hàng triệu người dân giám sát trực tiếp bộ máy nhà nước."
  },
  {
    id: 7,
    title: "Dân chủ gắn liền với Kỷ cương và Pháp luật",
    keyConcepts: ["Kỷ luật & Kỷ cương", "Thể chế hóa pháp luật", "Pháp quyền", "Ranh giới tự do"],
    philosophicalQuote: "Dân chủ phải gắn liền với kỷ luật, kỷ cương và phải được thể chế hóa bằng pháp luật.",
    content: `Dân chủ không phải là tự do vô điều kiện. Nếu tách rời kỷ cương và pháp luật, dân chủ sẽ biến tướng thành tự do vô chính phủ và hỗn loạn.

Luật pháp vạch ra ranh giới: bảo vệ quyền tự do chính đáng đồng thời nghiêm cấm lợi dụng tự do để xâm phạm lợi ích quốc gia và cá nhân khác. Xử phạt các hành vi sai trái không phải là bóp nghẹt dân chủ mà là bảo vệ trật tự xã hội.`,
    example: "Xử phạt người tung tin giả về dịch bệnh chính là dùng pháp luật để bảo vệ quyền lợi chính đáng cho cộng đồng mạng."
  },
  {
    id: 8,
    title: "Thách thức từ việc lợi dụng Tự do ngôn luận trên MXH",
    keyConcepts: ["Diễn biến hòa bình", "Fake News", "Bạo lực mạng", "Tha hóa đạo đức"],
    philosophicalQuote: "Khi tự do ngôn luận tách rời đạo đức và pháp luật, nó có thể trở thành vũ khí giết chết nhân phẩm.",
    content: `Ba thách thức lớn hiện nay trên mạng xã hội bao gồm:
1. Nguy cơ an ninh chính trị: Các thế lực xấu lợi dụng tự do ngôn luận để bôi nhọ lãnh đạo, xuyên tạc chính sách nhằm chia rẽ khối đại đoàn kết.
2. Vấn nạn tin giả: Tin đồn thất thiệt gây bất ổn kinh tế và tâm lý hoang mang trong xã hội.
3. Tha hóa đạo đức: Hiện tượng 'bạo lực mạng', chà đạp danh dự cá nhân gây ra những tổn thương thực sự trong đời thực.`,
    example: "Nhiều trường hợp nạn nhân bị bạo lực mạng rơi vào trầm cảm nặng nề minh chứng cho mặt trái của việc lạm dụng phát ngôn."
  },
  {
    id: 9,
    title: "Giải pháp Quản lý từ Nhà nước và Xã hội",
    keyConcepts: ["Luật An ninh mạng", "Nghị định 72", "Quy tắc ứng xử", "Mặt trận Tổ quốc"],
    philosophicalQuote: "Tăng cường vai trò nhà nước pháp quyền là chìa khóa để bảo vệ dân chủ số.",
    content: `Để phát huy dân chủ lành mạnh, cần:
- Hoàn thiện công cụ pháp lý: Luật An ninh mạng, Nghị định 72 và các quy tắc ứng xử trên mạng xã hội.
- Phát huy vai trò các đoàn thể: Mặt trận Tổ quốc, Đoàn Thanh niên trong giáo dục và định hướng văn hóa dân chủ.
Sự phối hợp giữa chế tài nghiêm minh và giáo dục định hướng là nền tảng bền vững.`,
    example: "Các cơ quan chức năng quét và xử lý nghiêm các nội dung độc hại, đồng thời Đoàn Thanh niên lan tỏa lối sống đẹp."
  },
  {
    id: 10,
    title: "Trách nhiệm của Công dân số và Tổng kết",
    keyConcepts: ["Công dân số", "Tự do là tất yếu", "Fact-check", "Sức đề kháng số"],
    philosophicalQuote: "Tự do thực sự chỉ xuất hiện khi chúng ta nhận thức được quy luật và làm chủ hành vi của mình.",
    content: `Công dân số có trách nhiệm thực hiện 5 điểm cốt lõi:
1. Thượng tôn pháp luật và chuẩn mực đạo đức.
2. Kiểm chứng thông tin (Fact-check), không lan truyền tin giả.
3. Nói không với các nội dung kích động và chia rẽ.
4. Tôn trọng quyền riêng tư và nhân phẩm người khác.
5. Đóng góp ý kiến văn minh, mang tính xây dựng.

Mạng xã hội là không gian ảo nhưng trách nhiệm pháp lý và đạo đức là hoàn toàn có thật.`,
    example: "Sinh viên Đại học FPT cần phát huy tư duy phản biện để trở thành những người có sức đề kháng số tốt nhất."
  }
];

export const PHILOSOPHICAL_DRAG_ITEMS: DragItem[] = [
  {
    id: "demoskratos",
    text: "Demoskratos",
    category: "theory",
    definition: "Demos (nhân nhân) và Kratos (quyền lực).",
    insight: "Khẳng định nguồn gốc và chủ thể của dân chủ là nhân dân."
  },
  {
    id: "discipline",
    text: "Kỷ cương & Pháp luật",
    category: "theory",
    definition: "Sự ràng buộc cần thiết để duy trì trật tự dân chủ.",
    insight: "Không có dân chủ nằm ngoài pháp luật; quyền lợi luôn đi đôi với nghĩa vụ."
  },
  {
    id: "digital-citizen",
    text: "Công dân số",
    category: "practice",
    definition: "Chủ thể có năng lực và trách nhiệm trên không gian mạng.",
    insight: "Sử dụng công nghệ để kiến tạo giá trị và bảo vệ xã hội số lành mạnh."
  },
  {
    id: "critical-thinking",
    text: "Tư duy phản biện",
    category: "practice",
    definition: "Khả năng phân tích và đánh giá thông tin khách quan.",
    insight: "Vũ khí quan trọng để sinh viên nhận diện tin giả và các thủ đoạn lôi kéo."
  },
  {
    id: "fake-news",
    text: "Tin giả (Fake News)",
    category: "challenge",
    definition: "Thông tin sai sự thật được lan truyền có mục đích.",
    insight: "Thách thức hàng đầu gây bất ổn trật tự xã hội và niềm tin công chúng."
  },
  {
    id: "cyberbullying",
    text: "Bạo lực mạng",
    category: "challenge",
    definition: "Hành vi tấn công danh dự người khác trên internet.",
    insight: "Vi phạm nghiêm trọng chuẩn mực đạo đức và ranh giới quyền tự do ngôn luận."
  }
];

export const PRESENTATION_DATA = KNOWLEDGE_DATA;

export interface PresentationPart {
  id: number;
  speaker: string;
  role: string;
  title: string;
  time: string;
  content: string;
  keyConcepts: string[];
  philosophicalQuote: string;
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

export const PRESENTATION_DATA: PresentationPart[] = [
  {
    id: 1,
    speaker: "Thành viên 1",
    role: "Người Dẫn Chương Trình",
    title: "Mở Đầu, Dẫn Nhập và Đặt Vấn Đề",
    time: "0 – 6 phút",
    keyConcepts: ["Dân chủ (Demoskratos)", "Kỷ nguyên số", "Không gian mạng", "Tự do ngôn luận"],
    philosophicalQuote: "\"Bản tính của con người là tìm kiếm tri thức và tự do phát ngôn, xã hội văn minh bắt đầu từ tiếng nói đại diện cho nhân dân.\" — Khuyết danh cổ đại",
    content: `Kính thưa thầy/cô và toàn thể các bạn sinh viên thân mến. Hôm nay, nhóm chúng em gồm 10 thành viên rất vinh dự được đại diện lớp để thực hiện bài thuyết trình nghiên cứu chuyên sâu về một chủ đề mang tính lý luận cốt lõi nhưng lại gắn liền với hơi thở của thời đại số. Đó là: 'Dân chủ xã hội chủ nghĩa và quyền tự do ngôn luận trên mạng xã hội hiện nay'.

Trong lịch sử tư tưởng nhân loại, thuật ngữ 'dân chủ' ra đời từ rất sớm, bắt nguồn từ tiếng Hy Lạp cổ đại là demoskratos, trong đó demos là nhân dân và kratos là quyền lực. Như vậy, ngay từ sơ khai, dân chủ đã được hiểu là quyền lực thuộc về nhân dân. Trải qua các hình thái kinh tế - xã hội, khái niệm này không ngừng được bổ sung và phát triển. Đặc biệt, khi nhân loại bước vào kỷ nguyên số, không gian sinh hoạt của con người không còn gói gọn trong đời sống vật lý mà đã mở rộng sang không gian mạng. Việt Nam hiện nay có hơn 78 triệu người dùng mạng xã hội, chiếm hơn 70% dân số. Mạng xã hội như Facebook, TikTok, YouTube đang trở thành môi trường hàng đầu để người dân thực hiện một trong những quyền tự do dân chủ cơ bản nhất của mình: Quyền tự do ngôn luận.

Tuy nhiên, tự do ngôn luận trên mạng xã hội có phải là một quyền năng tuyệt đối, muốn nói gì thì nói, muốn viết gì thì viết hay không? Giữa nền dân chủ xã hội chủ nghĩa được xây dựng trên thực tế và hành vi phát ngôn trên thế giới ảo có mối quan hệ biện chứng như thế nào? Để trả lời câu hỏi này, bài thuyết trình của nhóm chúng em sẽ bám sát vào các nguyên lý nền tảng trong Chương 4: Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa của Giáo trình Chủ nghĩa xã hội khoa học, kết hợp phân tích thực tiễn sinh động tại Việt Nam. Bài thuyết trình sẽ được chia đều cho 10 thành viên chịu trách nhiệm từng luận điểm chuyên sâu. Sau đây, để bắt đầu phần một – Hệ thống lý luận chung, xin mời bạn [Thành viên 2] trình bày về quan niệm dân chủ của chủ nghĩa Mác - Lênin.`
  },
  {
    id: 2,
    speaker: "Thành viên 2",
    role: "Nhà Nghiên Cứu Lý Luận",
    title: "Quan Niệm Của Chủ Nghĩa Mác - Lênin Về Dân Chủ",
    time: "6 – 12 phút",
    keyConcepts: ["Dân chủ vô sản", "Phạm trù lịch sử", "Phạm trù vĩnh viễn", "Chính thể dân chủ"],
    philosophicalQuote: "\"Dân chủ là bản chất quyền lực của một tập thể, nơi mà con người không bị cai trị bởi lực lượng đứng trên họ, mà tự quản bằng luật pháp của chính mình.\" — Karl Marx",
    content: `Xin cảm ơn phần mở đầu của bạn [Thành viên 1]. Thưa thầy cô và các bạn, để hiểu được bản chất của quyền ngôn luận trên không gian mạng, trước hết chúng ta phải thấu suốt cội nguồn lý luận về dân chủ theo quan điểm của chủ nghĩa Mác - Lênin. Giáo trình của chúng ta đã vạch rõ, dân chủ không phải là một khái niệm trừu tượng, mông lung mà được hiểu một cách toàn diện trên ba phương diện cốt lõi.

Thứ nhất, về phương diện quyền lực, dân chủ là quyền lực thuộc về nhân dân, nhân dân là chủ nhân của nhà nước. Bộ máy nhà nước không phải là cơ quan đứng trên nhân dân để cai trị, mà ngược lại, nó sinh ra là để phục vụ lợi ích của cộng đồng và nhân dân lao động. Thứ hai, về phương diện chế độ xã hội và lĩnh vực chính trị, dân chủ là một hình thức hay hình thái nhà nước, tức là chính thể dân chủ hay chế độ dân chủ. Nó gắn liền với một giai cấp cầm quyền cụ thể để thực thi quyền lực. Thứ ba, về phương diện tổ chức và quản lý xã hội, dân chủ là một nguyên tắc – nguyên tắc dân chủ. Nguyên tắc này khi kết hợp với yếu tố tập trung sẽ tạo thành nguyên tắc 'tập trung dân chủ' trong quản lý nhà nước và các tổ chức chính trị.

Ngoài ra, giáo trình còn nhấn mạnh một điểm cực kỳ quan trọng: Dân chủ vừa là một phạm trù lịch sử, vừa là một phạm trù vĩnh viễn. Nó là phạm trù lịch sử vì với tư cách là một hình thái nhà nước, dân chủ chỉ xuất hiện khi có nhà nước và sẽ mất đi khi nhà nước tự tiêu vong. Nhưng với tư cách là một giá trị xã hội, biểu thị cho khát vọng ngàn đời của nhân loại về tự do, công bằng và quyền được lên tiếng, dân chủ là một phạm trù vĩnh viễn, tồn tại mãi mãi cùng lịch sử loài người.

Để lấy một ví dụ dễ hiểu: Ở thời kỳ phong kiến, người dân hoàn toàn không có quyền dân chủ, họ là 'con dân' và việc xúc phạm hay phê bình nhà vua, quan lại có thể bị khép vào tội chết. Nhưng ngày nay, trong chế độ dân chủ, tiếng nói của người dân được tôn trọng và được bảo vệ. Khát vọng tự do ngôn luận trên mạng xã hội hiện nay chính là sự tiếp nối mang tính công nghệ của phạm trù vĩnh viễn đó – khát vọng được bày tỏ ý kiến cá nhân của con người. Tiếp theo, xin mời bạn Đức trình bày về sự ra đời của nền dân chủ cao nhất trong lịch sử: Nền dân chủ xã hội chủ nghĩa.`
  },
  {
    id: 3,
    speaker: "Đức (Thành viên 3)",
    role: "Nhà Sử Học Hệ Thống",
    title: "Sự Ra Đời và Quy Luật Vận Động Của Nền Dân Chủ XHCN",
    time: "12 – 18 phút",
    keyConcepts: ["Công xã Pari 1871", "Cách mạng Tháng Mười", "Dân chủ rộng rãi nhất", "Sự tự tiêu vong"],
    philosophicalQuote: "\"Trạng thái cao nhất của tự do không phải là sự tùy tiện bộc phát, mà là hành động được soi sáng bởi nhận thức chân lý khách quan.\" — Friedrich Engels",
    content: `Xin cảm ơn phần trình bày của bạn [Thành viên 2]. Tiếp nối mạch lý luận, chúng ta cần tìm hiểu xem nền dân chủ xã hội chủ nghĩa ra đời như thế nào và nó vận động ra sao. Đấu tranh cho dân chủ là một tiến trình lịch sử lâu dài, gian khổ của nhân dân lao động. Nền dân chủ xã hội chủ nghĩa (hay còn gọi là dân chủ vô sản) không tự nhiên mà có. Nó được phôi thai từ thực tiễn lịch sử của cuộc khởi nghĩa Công xã Pari năm 1871, và chính thức được xác lập trên quy mô thế giới sau khi Cách mạng Tháng Mười Nga thành công năm 1917, dẫn đến sự ra đời của nhà nước xã hội chủ nghĩa đầu tiên.

Sự ra đời của nền dân chủ này là một bước ngoặt vĩ đại, vì nó là nền dân chủ rộng rãi nhất, hướng tới đại đa số nhân dân lao động, khác hẳn với nền dân chủ tư sản vốn chỉ phục vụ lợi ích cho thiểu số giai cấp tư sản nắm giữ tư liệu sản xuất. Và nó cũng chỉ ra quy luật vận động mang tính bản chất của nền dân chủ này: Đó là không ngừng mở rộng dân chủ, tăng cường sự tham gia tự giác của quần chúng nhân dân vào công việc quản lý nhà nước và quản lý xã hội. Cho đến khi xã hội phát triển tới trình độ cao – tức là xã hội cộng sản chủ nghĩa, khi các giai cấp bị xóa bỏ hoàn toàn, thì dân chủ với tư cách là một hình thái nhà nước (tính chính trị của nó) sẽ tự tiêu vong, nhường chỗ cho một xã hội tự quản hoàn toàn tự do.

Ví dụ minh chứng cho quy luật này trong thời đại số: Trước đây, để đóng góp ý kiến cho một dự thảo luật, người dân phải chờ các buổi họp tiếp xúc cử tri trực tiếp tại địa phương, quy mô rất hạn chế. Ngày nay, thực hiện quy luật mở rộng dân chủ, Nhà nước công khai toàn bộ các dự thảo luật lớn lên không gian mạng và các diễn đàn trực tuyến. Bất kỳ người dân nào, từ học sinh, sinh viên cho đến các chuyên gia, đều có thể lên mạng xã hội, truy cập đường link và viết bình luận góp ý trực tiếp cho Chính phủ. Việc ứng dụng mạng xã hội để người dân bàn bạc việc nước chính là minh chứng sống động cho quy luật không ngừng mở rộng dân chủ mà chúng ta đã đề cập. Tiếp theo, xin mời bạn Hiếu đi sâu vào phân tích Bản chất chính trị của nền dân chủ xã hội chủ nghĩa.`
  },
  {
    id: 4,
    speaker: "Hiếu (Thành viên 4)",
    role: "Nhà Phân Tích Thể Chế",
    title: "Bản Chất Chính Trị Của Nền Dân Chủ XHCN",
    time: "18 – 24 phút",
    keyConcepts: ["Sự lãnh đạo của Đảng", "Chủ thể chính trị", "Giám sát quyền lực", "Nguyên tắc tập trung dân chủ"],
    philosophicalQuote: "\"Bản chất của một thiết chế chính trị nằm ở việc kiểm soát và phân phối quyền lực thực tế phục vụ cho quyền làm chủ của quần chúng nhân dân.\" — V.I. Lenin",
    content: `Xin cảm ơn bạn [Thành viên 3]. Kính thưa thầy cô và các bạn, để hiểu sâu hơn về mô hình dân chủ này, giáo trình đã phân tích nó qua ba chiều kích bản chất, và tôi xin đảm nhiệm phần phân tích Bản chất chính trị – chiều kích quan trọng nhất định hình nên thể chế của chúng ta.

Bản chất chính trị của nền dân chủ xã hội chủ nghĩa là sự thống trị chính trị của giai cấp công nhân, nhưng sự thống trị này không phải để áp bức các giai cấp khác như trong lịch sử, mà là để thực hiện quyền lực của nhân dân. Giai cấp công nhân lãnh đạo thông qua Đảng Cộng sản để đảm bảo rằng toàn bộ bộ máy nhà nước sinh ra là để phục vụ lợi ích của đại đa số nhân dân lao động. Nhân dân trong chế độ này không chỉ là những người tuân thủ pháp luật một cách thụ động, mà là chủ thể chính trị đích thực: có quyền bầu cử, ứng cử, đóng góp ý kiến, và đặc biệt là có quyền giám sát, phản biện hoạt động của bộ máy nhà nước, cán bộ, đảng viên. Điều kiện tiên quyết, có tính chất sống còn để bảo đảm bản chất chính trị này chính là phải giữ vững sự lãnh đạo duy nhất của Đảng Cộng sản Việt Nam. Nếu buông lỏng sự lãnh đạo này, nền dân chủ sẽ lập tức bị chệch hướng.

Ví dụ cụ thể về bản chất chính trị trên không gian mạng hiện nay: Hãy nhìn vào các trang Fanpage Facebook chính thức của Chính phủ, của Bộ Công an, hay của chính quyền địa phương các tỉnh thành. Khi các cơ quan này đăng tải thông tin, người dân có quyền vào bình luận phản ánh về thái độ hách dịch của cán bộ, phản ánh về việc ô nhiễm môi trường tại địa phương, hoặc hiến kế các giải pháp phát triển kinh tế. Khi chính quyền lắng nghe, tiếp thu và xử lý những phản ánh đó trên không gian mạng, đó chính là lúc bản chất chính trị được thực thi: Người dân thực sự dùng tiếng nói của mình (tự do ngôn luận) để thực hiện quyền làm chủ và giám sát quyền lực nhà nước. Tiếp theo, xin mời bạn Quốc Anh trình bày về Bản chất kinh tế và Bản chất tư tưởng – văn hóa của nền dân chủ này.`
  },
  {
    id: 5,
    speaker: "Quốc Anh (Thành viên 5)",
    role: "Nhà Kinh Tế Triết Học",
    title: "Bản Chất Kinh Tế và Tư Tưởng - Văn Hóa Của Dân Chủ XHCN",
    time: "24 – 30 phút",
    keyConcepts: ["Chế độ công hữu", "Hệ tư tưởng Mác - Lênin", "Tính hài hòa lợi ích", "Văn minh tiến bộ"],
    philosophicalQuote: "\"Không có sự bình đẳng thực sự về kinh tế thì mọi hình thức tự do phát ngôn chỉ là tấm màn che đậy sự bất bình đẳng sâu sắc.\" — Karl Marx",
    content: `Xin cảm ơn bạn [Thành viên 4]. Bên cạnh bản chất chính trị, giáo trình của chúng ta tại Chương 4 cũng phân tích rất rõ hai nền tảng nâng đỡ còn lại, đó là Bản chất kinh tế và Bản chất tư tưởng - văn hóa - xã hội.

Về bản chất kinh tế, nền dân chủ xã hội chủ nghĩa khác biệt hoàn toàn về chất so với dân chủ tư sản. Nó không dựa trên chế độ tư hữu mà dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu của toàn xã hội. Đồng thời, nền kinh tế này thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu. Điều này cực kỳ quan trọng, bởi vì nó đảm bảo quyền làm chủ của người dân không phải là thứ dân chủ hình thức nằm trên trang giấy, mà có một bệ đỡ vật chất vững chắc, hướng tới việc xóa bỏ tận gốc chế độ người bóc lột người. Về bản chất tư tưởng - văn hóa - xã hội, nền dân chủ này lấy hệ tư tưởng Mác - Lênin làm tư tưởng chủ đạo trong đời sống tinh thần. Tuy nhiên, nó không bài xích các giá trị khác mà chủ trương kết hợp hài hòa, kế thừa, phát huy tinh hoa văn hóa truyền thống của dân tộc, đồng thời tiếp thu có chọn lọc những giá trị văn minh, tiến bộ của nhân loại. Trong nền dân chủ này, lợi ích của cá nhân, tập thể và toàn xã hội được kết hợp một cách hài hòa, không có sự đối kháng.

Ví dụ thực tế trong không gian mạng: Bản chất tư tưởng - văn hóa thể hiện ở chỗ không gian mạng Việt Nam được định hướng để lan tỏa các giá trị nhân văn. Khi chúng ta lướt mạng xã hội, những chiến dịch như 'Mỗi ngày một tin tốt, mỗi tuần một câu chuyện đẹp', các bài viết ca ngợi tinh thần tương thân tương ái cứu trợ đồng bào lũ lụt, hay các trang mạng quảng bá trang phục áo dài, lịch sử hào hùng của dân tộc được chia sẻ mạnh mẽ. Người dân được tự do sáng tạo nội dung văn hóa, tiếp cận kho tàng tri thức nhân loại trên internet dưới sự định hướng của hệ tư tưởng tiến bộ. Đó chính là sự biểu hiện của một môi trường tư tưởng - văn hóa lành mạnh, phục vụ cho sự phát triển toàn diện của con người. Sắp tới, xin mời bạn Hữu Hưng bắt đầu Phần hai – Thực tiễn và Nhận thức về dân chủ tại Việt Nam.`
  },
  {
    id: 6,
    speaker: "Hữu Hưng (Thành viên 6)",
    role: "Nhà Nghiên Cứu Lịch Sử Hiện Đại",
    title: "Nhận Thức và Bản Chất Nền Dân Chủ XHCN Tại Việt Nam",
    time: "30 – 36 phút",
    keyConcepts: ["Chế độ dân chủ nhân dân", "Mục tiêu và Động lực", "Dân biết dân bàn dân kiểm tra", "Chất vấn trực tuyến"],
    philosophicalQuote: "\"Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân. Quyền hành và lực lượng đều ở nơi dân.\" — Chủ tịch Hồ Chí Minh",
    content: `Xin cảm ơn phần trình bày của bạn [Thành viên 5]. Kính thưa thầy cô và các bạn, từ những nguyên lý lý luận chung của chủ nghĩa Mác - Lênin, chúng ta hãy cùng nhìn vào thực tiễn Việt Nam để thấy Đảng Cộng sản Việt Nam đã vận dụng sáng tạo tinh thần này như thế nào. Giáo trình có nêu rõ, chế độ dân chủ nhân dân ở nước ta đã được thiết lập ngay sau thắng lợi của Cách mạng Tháng Tám năm 1945 gắn liền với lời khẳng định sâu sắc của Chủ tịch Hồ Chí Minh: 'Nước ta là nước dân chủ...'.

Trải qua tiến trình lịch sử, đặc biệt là từ Đại hội VI (năm 1986) bước vào công cuộc đổi mới, nhận thức của Đảng về dân chủ ngày càng hoàn thiện và sâu sắc. Đến nay, Đảng ta khẳng định: 'Dân chủ xã hội chủ nghĩa là bản chất của chế độ ta, vừa là mục tiêu, vừa là động lực của sự phát triển đất nước'. Dân chủ đã trở thành một thành tố không thể thiếu trong mục tiêu tổng quát của con đường cách mạng Việt Nam: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'. Bản chất nền dân chủ ở Việt Nam là sự kết hợp nhuần nhuyễn giữa dân chủ trực tiếp và dân chủ đại diện, luôn quán trực phương châm hành động: 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.

Ví dụ cụ thể trong đời sống xã hội hiện nay: Chúng ta đều biết các phiên chất vấn tại Quốc hội Việt Nam luôn thu hút sự quan tâm rất lớn của toàn dân. Hiện nay, các phiên chất vấn này không chỉ được phát trên tivi mà còn được phát trực tiếp (livestream) trên các nền tảng mạng xã hội lớn. Hàng triệu người dân, trong đó có rất nhiều bạn trẻ sinh viên như chúng ta, có thể vừa ngồi xem trực tiếp, vừa gõ bình luận đánh giá, nhận xét về câu trả lời của các vị Bộ trưởng một cách công khai, minh bạch. Đây chính là minh chứng hùng hồn cho thấy ở Việt Nam, dân chủ không phải là khẩu hiệu xa vời, mà người dân đang thực sự thực hiện quyền làm chủ, quyền giám sát tối cao đối với bộ máy nhà nước thông qua các công cụ công nghệ hiện đại. Tiếp theo, xin mời bạn Trang trình bày về một nguyên tắc vô cùng quan trọng: Dân chủ phải gắn liền với kỷ cương và pháp luật.`
  },
  {
    id: 7,
    speaker: "Trang (Thành viên 7)",
    role: "Nhà Pháp Luật Biện Chứng",
    title: "Nguyên Tắc Biện Chứng: Dân Chủ Gắn Liền Với Kỷ Cương, Pháp Luật",
    time: "36 – 42 phút",
    keyConcepts: ["Kỷ luật kỷ cương", "Thể chế hóa", "Pháp quyền XHCN", "Ranh giới tự do"],
    philosophicalQuote: "\"Tự do chính là quyền được làm mọi điều mà luật pháp cho phép, và không bị cưỡng ép làm những gì luật pháp cấm đoán.\" — Montesquieu",
    content: `Xin cảm ơn bạn [Thành viên 6]. Đến phần trình bày của mình, tôi xin phép được nhấn mạnh một nguyên tắc mang tính cốt lõi và là chìa khóa để giải quyết toàn bộ mối quan hệ giữa dân chủ và mạng xã hội. Giáo trình Chủ nghĩa xã hội khoa học tại Chương 4 đã khẳng định một luận điểm vô cùng đắt giá: 'Dân chủ phải gắn liền với kỷ luật, kỷ cương và phải được thể chế hóa bằng pháp luật, được pháp luật bảo đảm'.

Nhiều người thường hiểu lầm một cách tai hại rằng dân chủ là tự do tuyệt đối, là muốn làm gì thì làm, muốn nói gì thì nói mà không ai được quyền can thiệp. Nhưng chủ nghĩa Mác - Lênin và thực tiễn lịch sử đã chứng minh: Dân chủ mà tách rời kỷ cương, luật pháp thì sẽ ngay lập tức biến tướng thành tự do vô chính phủ, thành sự hỗn loạn, và lúc đó kẻ mạnh sẽ chà đạp lên quyền lợi của kẻ yếu, nền dân chủ sẽ bị phá hủy tận gốc. Bản chất của Nhà nước pháp quyền xã hội chủ nghĩa là dùng luật pháp để vạch ra ranh giới rõ ràng: Pháp luật bảo vệ tối đa những quyền tự do dân chủ chính đáng của công dân, nhưng đồng thời pháp luật cũng nghiêm cấm việc lợi dụng tự do để xâm phạm đến lợi ích của quốc gia, của tập thể và quyền hợp pháp của cá nhân khác.

Ví dụ thực tế và trực diện nhất trên mạng xã hội hiện nay: Khi bạn lập một tài khoản Facebook hay đăng một video lên TikTok, bạn hoàn toàn có quyền tự do ngôn luận để khen, chê, viết bài bình luận hay phản biện về một chính sách kinh tế - xã hội (đó là quyền dân chủ của bạn và pháp luật bảo vệ điều đó). Thế nhưng, nếu bạn lợi dụng cái gọi là 'tự do ngôn luận' đó để bịa đặt ra một tin giả – ví dụ như tung tin đồn sai sự thật về một vụ vỡ nợ ngân hàng, hoặc bịa đặt tin đồn một dịch bệnh chết người đang bùng phát để câu view – hành vi này sẽ lập tức gây hoang mang dư luận, làm lộn xộn xã hội và thiệt hại kinh tế. Khi đó, cơ quan chức năng sẽ vào cuộc xử phạt bạn theo Luật An ninh mạng hoặc Bộ luật Hình sự. Việc xử phạt này hoàn toàn không phải là bóp nghẹt dân chủ, mà ngược lại, đó là hành động dùng pháp luật để giữ gìn kỷ cương, bảo vệ quyền lợi chính đáng cho hàng triệu người dùng mạng khác. Tự do của một cá nhân không được phép chà đạp lên sự ổn định của xã hội. Tiếp theo, xin mời bạn Tú phân tích sâu hơn về Thực trạng các mặt trái và thách thức của việc lợi dụng tự do ngôn luận trên mạng xã hội.`
  },
  {
    id: 8,
    speaker: "Tú (Thành viên 8)",
    role: "Nhà Biện Chứng Thực Tiễn",
    title: "Thách Thức và Mặt Trái Của Việc Lợi Dụng Tự Do Ngôn Luận Trên MXH",
    time: "42 – 48 phút",
    keyConcepts: ["Diễn biến hòa bình", "Tin giả (Fake News)", "Bạo lực mạng (Cyberbullying)", "Lệch chuẩn đạo đức"],
    philosophicalQuote: "\"Ngôn từ sắc bé hơn gươm dao, và sự phỉ báng tàn phá tâm hồn của con người chẳng kém phần dữ dội hơn hành vi thế lực.\" — Socrates",
    content: `Tiếp nối phần trình bày của nhóm, tôi xin làm rõ một mảng tối đang hiện hữu: Thách thức và mặt trái của việc lợi dụng quyền tự do ngôn luận trên mạng xã hội.

Thưa các bạn, giáo trình Chủ nghĩa xã hội khoa học đã chỉ rõ một nguyên tắc cốt lõi: 'Dân chủ đi đôi với kỷ luật, kỷ cương, phải được thể chế hóa bằng pháp luật'. Tuy nhiên, trên mạng xã hội hiện nay, nhiều người đang nhầm tưởng tự do ngôn luận là một thứ 'quyền lực tuyệt đối', muốn nói gì thì nói mà không chịu trách nhiệm. Sự lệch lạc này đang tạo ra 3 thách thức lớn, tác động trực tiếp đến chính trị, xã hội và đạo đức con người.

Thách thức thứ nhất: Mối nguy về An ninh Chính trị. Thách thức đầu tiên và nguy hiểm nhất nằm ở bình diện Chính trị và An ninh quốc gia. Mạng xã hội chính là công cụ đắc lực của những kẻ xấu. Chúng núp bóng 'tự do ngôn luận' để cắt ghép thông tin, bôi nhọ lãnh đạo, xuyên tạc đường lối của Đảng và Nhà nước. Mục đích ở đây rất rõ ràng: không phải là đóng góp ý kiến xây dựng, mà là làm suy giảm niềm tin của nhân dân vào sự lãnh đạo của Đảng, gây hoang mang trong dư luận xã hội và chia rẽ khối đại đoàn kết toàn dân tộc. 

Thách thức thứ hai: Vấn nạn Tin giả (Fake News) gây bất ổn Xã hội. Thách thức thứ hai đánh trực tiếp vào Trật tự Kinh tế - Xã hội. Đó là vấn nạn tin giả. Việc phát ngôn vô trách nhiệm đã tạo ra những tin đồn thất thiệt: từ dịch bệnh, bão lũ, cho đến việc bịa đặt thông tin bắt bớ các doanh nhân lớn. Những tin giả này lan truyền với tốc độ chóng mặt, gây hoang mang dư luận, thậm chí có thể làm thiệt hại hàng ngàn tỷ đồng của nền kinh tế. 

Thách thức thứ ba: Sự tha hóa Đạo đức và Bạo lực mạng. Nếu thách thức thứ nhất nhắm vào bộ máy Nhà nước, thì thách thức thứ ba nhắm trực tiếp vào Phẩm giá của từng cá nhân và Nền tảng Đạo đức xã hội. Việc lạm dụng tự do ngôn luận đang tạo ra 'Bạo lực mạng' (Cyberbullying). Một bộ phận cư dân mạng hùa theo đám đông để chửi rủa, bóc phốt, chà đạp danh dự người khác. Đã có rất nhiều học sinh, sinh viên hay những người yếu thế rơi vào trầm cảm, thậm chí tự tước đoạt mạng sống của mình chỉ vì những lời lẽ cay độc trên mạng. 

Rõ ràng, khi tự do ngôn luận tách rời đạo đức và pháp luật, nó có thể trở thành thứ vũ khí tàn nhẫn giết chết con người. Tự do ngôn luận là quyền lợi chính đáng, nhưng nếu bị lợi dụng, nó sẽ phá hoại cả an ninh quốc gia lẫn đạo đức xã hội. Để quyền làm chủ của nhân dân thực sự mang lại giá trị tiến bộ, chúng ta cần sự quản lý từ Nhà nước. Tiếp theo, xin mời bạn Thành sẽ trình bày về các Giải pháp quản lý từ phía Nhà nước.`
  },
  {
    id: 9,
    speaker: "Thành (Thành viên 9)",
    role: "Nhà Kiến Tạo Chính Sách",
    title: "Giải Pháp Từ Phía Nhà Nước và Các Tổ Chức Xã Hội",
    time: "48 – 54 phút",
    keyConcepts: ["Luật An ninh mạng", "Nghị định 72", "Bộ quy tắc ứng xử", "Mỗi ngày một tin tốt"],
    philosophicalQuote: "\"Trách nhiệm tối cao của luật pháp là kiến tạo ra một không gian lành mạnh nơi ai cũng được cất cánh suy nghĩ nhưng không làm tổn hại tha nhân.\" — Cicero",
    content: `Xin cảm ơn phần trình bày đầy thực tế của bạn [Thành viên 8]. Đứng trước những mặt trái và thách thức nghiêm trọng đó, giáo trình Chủ nghĩa xã hội khoa học đã chỉ ra phương hướng mang tính chiến lược: Để phát huy dân chủ thực sự, chúng ta phải tăng cường vai trò quản lý của Nhà nước pháp quyền xã hội chủ nghĩa và nâng cao năng lực hoạt động của các tổ chức chính trị - xã hội.

Về phía Nhà nước, giải pháp cốt lõi là phải không ngừng hoàn thiện hệ thống pháp luật, xây dựng các chế tài đủ mạnh để bảo vệ không gian mạng lành mạnh. Nhà nước quản lý xã hội bằng pháp luật, thể chế hóa ý chí của nhân dân thành các văn bản quy phạm pháp luật để phân định rõ ràng quyền và nghĩa vụ của công dân. Đối với không gian mạng, Nhà nước ta đã ban hành Luật An ninh mạng, Nghị định 72 về quản lý internet, và Bộ Quy tắc ứng xử trên mạng xã hội của Bộ Thông tin và Truyền thông. Đây chính là những công cụ pháp lý sắc bén để vừa bảo đảm quyền tự do phát ngôn chính đáng của người dân, vừa có cơ sở để nghiêm trị những kẻ lợi dụng mạng xã hội để trục lợi hay chống phá. Bên cạnh Nhà nước, giáo trình cũng nhắc nhở phải phát huy vai trò của các tổ chức chính trị - xã hội như Mặt trận Tổ quốc, Đoàn Thanh niên, Hội Phụ nữ trong việc giáo dục, định hướng văn hóa dân chủ cho quần chúng.

Ví dụ về sự phối hợp giải pháp này trên thực tế: Hiện nay, Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh triển khai rất mạnh mẽ cuộc vận động mang tên 'Mỗi ngày một tin tốt, mỗi tuần một câu chuyện đẹp' trên các nền tảng mạng xã hội. Các fanpage của Đoàn từ cấp Trung ương đến các chi đoàn trường đại học liên tục chia sẻ các bài viết về những tấm gương nghị lực, những phát minh khoa học của sinh viên, hay hướng dẫn giới trẻ cách nhận biết tin giả. Đồng thời, các cơ quan an ninh mạng liên tục quét và xử lý, xử phạt nghiêm khắc các TikToker, Facebooker có phát ngôn nhảm nhí, độc hại hoặc xúc phạm người khác. Sự kết hợp giữa chế tài nghiêm minh của Nhà nước (pháp luật) và sự định hướng, giáo dục của các tổ chức đoàn thể chính là mô hình đồng bộ để làm sạch môi trường mạng, bảo vệ nền dân chủ lành mạnh. Sau đây, xin mời thành viên cuối cùng của nhóm, bạn Minh và Giang trình bày về trách nhiệm cá nhân của mỗi công dân và tổng kết bài thuyết trình.`
  },
  {
    id: 10,
    speaker: "Minh & Giang (Thành viên 10)",
    role: "Đại Diện Thế Hệ Số",
    title: "Trách Nhiệm Của Công Dân Số và Tổng Kết",
    time: "54 – 60 phút",
    keyConcepts: ["Công dân số (Digital Citizen)", "Tự do là cái tất yếu", "Tôn trọng cá nhân", "Sức đề kháng số (Critical Thinking)"],
    philosophicalQuote: "\"Mạng là ảo, nhưng tổn thương chúng ta gây ra là thật và trách nhiệm của chúng ta là vĩnh viễn.\" — Tư tưởng Công dân Hiện đại",
    content: `1. Sự ra đời của "Công dân số" và góc nhìn Triết học
Trước hết, chuyển đổi số hiện nay không chỉ là sự nâng cấp về công nghệ, mà nó đã tạo ra một không gian sinh tồn mới: Không gian mạng. Từ đây, khái niệm "Công dân số" (Digital Citizen) ra đời. Công dân số không chỉ đơn thuần là người biết sử dụng internet, mà là người có đủ năng lực, kiến thức để tham gia vào các hoạt động chính trị, kinh tế, xã hội trên môi trường mạng một cách có đạo đức, có trách nhiệm và tuân thủ pháp luật.

Dưới góc nhìn của triết học Mác - Lênin, Ph.Ăng-ghen từng có một luận điểm rất kinh điển: "Tự do là cái tất yếu được nhận thức". Tự do ngôn luận trên mạng xã hội không có nghĩa là tự do vô chính phủ — thích gì nói nấy, chửi bới hay mạt sát bất chấp hậu quả. Tự do thực sự chỉ xuất hiện khi chúng ta nhận thức được các quy luật của xã hội, hiểu được ranh giới của pháp luật và đạo đức để tự làm chủ hành vi của mình. Đồng thời, Chủ tịch Hồ Chí Minh luôn căn dặn: "Dân chủ là dân là chủ và dân làm chủ". Nhưng quyền lợi bao giờ cũng phải gắn liền với nghĩa vụ. Bạn làm chủ không gian mạng, bạn được quyền cất lên tiếng nói của mình, nhưng bạn phải có trách nhiệm bảo vệ không gian ấy khỏi sự vẩn đục.

2. Trách nhiệm của công dân số trên mạng xã hội. Vậy cụ thể, trách nhiệm của chúng ta khi thực hiện quyền tự do ngôn luận là gì? Nhóm mình xin tóm gọn trong 5 điểm cốt lõi sau:
- Thứ nhất, thượng tôn pháp luật và chuẩn mực đạo đức.
- Thứ nhì, luôn kiểm chứng thông tin (Fact-check) thông qua tư duy phản biện.
- Thứ ba, kiên quyết nói "Không" với tin giả và nội dung kích động trái đường lối.
- Thứ tư, bảo vệ quyền riêng tư và nhân phẩm: Đằng sau mỗi avatar là một con người thật.
- Thứ năm, nâng cao tinh thần phản biện văn minh, mang tính xây dựng.

3. Liên hệ thực tiễn với sinh viên Đại học FPT:
Thử nhìn lại chính môi trường của chúng ta — sinh viên Đại học FPT. Chúng ta được học tập trong một môi trường công nghệ hàng đầu, được tự hào gọi là những 'chú Cóc' năng động, sáng tạo. Văn hóa cốt lõi của FPT là 'Tôn trọng cá nhân', và điều đó phải được thể hiện ngay trên không gian mạng. Chúng ta có những cộng đồng hàng chục ngàn thành viên như FPTU Confessions hay các group sinh viên trên Facebook, TikTok. Khi một sự việc nóng xảy ra, thay vì hùa theo đám đông phê phán mù quáng, sinh viên FPT cần áp dụng phản biện văn minh, thể hiện 'sức đề kháng số' tốt nhất để kiến tạo xã hội tốt đẹp.

4. Tổng kết:
Để khép lại bài thuyết trình hôm nay, nhóm xin khẳng định lại 3 vấn đề trọng tâm:
- Dân chủ XHCN luôn bảo đảm và tạo điều kiện tối đa để nhân dân thực thi quyền tự do ngôn luận.
- Không có tự do tuyệt đối ngoài pháp luật. Tự do luôn gắn liền với kỷ cương, trách nhiệm xã hội.
- Mỗi sinh viên cần trở thành một công dân số bản lĩnh, văn minh.

Thông điệp cuối cùng: Mạng là ảo, nhưng tổn thương chúng ta gây ra cho nhau là thật. Hãy để mỗi cú click chuột là sự kết nối mang tính xây dựng, và hãy dùng tự do ngôn luận như một ngọn đuốc thắp sáng chân lý, chứ không phải một ngọn lửa thiêu rụi cộng đồng.`
  }
];

export const PHILOSOPHICAL_DRAG_ITEMS: DragItem[] = [
  {
    id: "demoskratos",
    text: "Demoskratos",
    category: "theory",
    definition: "Thuật ngữ tiếng Hy Lạp cổ đại: Demos (nhân dân) và Kratos (quyền lực).",
    insight: "Khởi nguồn triết học cổ điển của chế độ dân chủ - khẳng định quyền lực tối cao thuộc về cộng đồng xã hội."
  },
  {
    id: "freedom-limits",
    text: "Ranh giới Tự do",
    category: "value",
    definition: "Tự do là cái tất yếu mang tính quy luật được nhận thức.",
    insight: "Theo Spinoza và Engels, tự do không phải sự tùy tiện tách rời luật pháp, mà là hành động tự giác tuân thủ cái tất yếu lý tính."
  },
  {
    id: "digital-citizenship",
    text: "Digital Citizen",
    category: "practice",
    definition: "Chủ thể năng động trên không gian mạng có tri thức, đạo đức số.",
    insight: "Nhấn mạnh trách nhiệm bảo vệ nhân phẩm đồng loại trên toàn mạng lưới internet."
  },
  {
    id: "discipline",
    text: "Kỷ cương & Pháp luật",
    category: "theory",
    definition: "Mối quan hệ biện chứng giữa tự do phát ngôn và kỷ cương thiết chế.",
    insight: "Biện chứng pháp khẳng định: Tự do thực thụ chỉ tồn tại khi kỷ cương luật pháp bảo hộ nó trước sự hỗn mang vô chính phủ."
  },
  {
    id: "fptu-culture",
    text: "Tôn trọng cá nhân (FPTU)",
    category: "practice",
    definition: "Văn hóa cốt lõi đề cao sự đa dạng ý kiến lành mạnh của người FPT.",
    insight: "Áp dụng tư duy phản biện (Critical thinking) khi tham gia Confessions nhằm lan tỏa những giá trị chân-thiện-mỹ."
  },
  {
    id: "cyberbullying",
    text: "Bạo lực mạng",
    category: "challenge",
    definition: "Trách nhiệm đạo đức và tâm lý khi ẩn danh sau avatar.",
    insight: "Sự thóa mạ đám đông tàn phá tế bào xã hội nhanh hơn gươm súng. Đằng sau màn hình là những tâm hồn thật có mưu cầu hạnh phúc."
  }
];

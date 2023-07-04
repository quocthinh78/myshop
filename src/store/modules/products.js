const state = {
  sachtieuthuyet: [
    {
      id: 1,
      rate: 20,
      name: "Con Chim Xanh Biếc Bay Về",
      brand: "23",
      image: "6.png",
      price: 180000,
      smallDes: "Văn chương dành cho tuổi mới lớn.",
      intro:
        "Với tác phẩm mới, Nguyễn Nhật Ánh tiếp tục chinh phục bạn đọc bằng câu chuyện cổ tích. Dù cổ điển hay hiện đại, tình yêu trong truyện của Nguyễn Nhật Ánh vẫn sẽ chiến thắng.",
      review:
        "Nấu một bữa ăn ngon cho gia đình là niềm hạnh phúc tuyệt vời của người mẹ, người vợ. Đôi khi, những món ăn chơi đơn giản sẽ là bí quyết tốt nhất giúp bạn có thể chuẩn bị mâm cơm đầy đù chất dinh dưỡng và ngon miệng mà không quá mất nhiều thời gian. Cuốn sách giới thiệu những món ăn thường gặp nhưng không phải ai cũng biết cách chế biến đúng cách: Bún mắm cá cơm, nộm mướp đắng, ngao xào lá quế, khoai môn cuộn tôm...\n            ,Đã từ lâu, Nguyễn Nhật Ánh xác lập cho mình một vị trí không thể thay thế ở dòng văn chương dành cho tuổi mới lớn.\n            Những cảm xúc trong trẻo, hồn hậu gắn liền những ký ức tuổi thơ ở một vùng quê nghèo miền Trung hay những cảm xúc mưa nắng thất thường của tuổi mới lớn đều được ông nắm bắt tâm lý tài tình và viết ra với một văn phong giản dị mà thấu hiểu.\n            ",
      status: 1,
      cat_id: 1,
      author_id: 1,
      created_at: null,
    },
    {
      id: 2,
      rate: 31,
      name: "Nhà Giả Kim",
      brand: "24",
      image: "2.png",
      price: 155000,
      smallDes: "Chiến thắng bản thân",
      intro:
        "Nhà giả kim là một trong những tác phẩm hay nhất của nhà văn Paulo Coelho, được mệnh danh là cuốn sách bán chạy chỉ sau kinh thánh. Tuy nhiên, với những người đam mê sách khó tính, cuốn sách này dù kiệt xuất đến đâu cũng không tránh khỏi nhiều sự chỉ trích trái chiều. Dễ hiểu hơn thì cứ 10 độc giả khen hay thì ắt có tới 9 người chê dở.",
      review:
        "Thực hư về chuyện xuất bản nhiều như những cuốn sách kinh thánh rất có thể chỉ là một chiêu trò của các nhà Marketing. Tuy nhiên không thể phủ nhận rằng, Nhà giả kim (tiếng anh là The Alchemist) là một cuốn sách đã vượt tầm thời đại và có sức cuốn hút rất riêng mà hiếm tác phẩm đương thời nào sánh được. Bởi vậy nên không ngạc nhiên khi tác phẩm này đã trở thành một trong những cuốn sách “best-seller” liên tục trong nhiều năm tại các trang bán sách online.",
      status: 1,
      cat_id: 1,
      author_id: 2,
      created_at: null,
    },
    {
      id: 3,
      rate: 33,
      name: "Quân Khu Nam Đồng",
      brand: "95",
      image: "3.png",
      price: 110000,
      smallDes: "Hà Nội thời chống Mỹ",
      intro:
        "Quân khu Nam Đồng” là bài ca về một thế hệ lớn lên trong khu gia binh lớn nhất Hà Nội những năm 1970, ngân vang những nốt thăng trầm về tuổi thơ và tuổi trẻ, về tình bạn và tình yêu, về tiền tuyến và hậu phương, về chiến tranh và những đau thương mất mát…",
      review:
        "Thực hư về chuyện xuất bản nhiều như những cuốn sách kinh thánh rất có thể chỉ là một chiêu trò của các nhà Marketing. Tuy nhiên không thể phủ nhận rằng, Nhà giả kim (tiếng anh là The Alchemist) là một cuốn sách đã vượt tầm thời đại và có sức cuốn hút rất riêng mà hiếm tác phẩm đương thời nào sánh được. Bởi vậy nên không ngạc nhiên khi tác phẩm này đã trở thành một trong những cuốn sách “best-seller” liên tục trong nhiều năm tại các trang bán sách online.",
      status: 1,
      cat_id: 1,
      author_id: 3,
      created_at: null,
    },
    {
      id: 4,
      rate: 36,
      name: "Dấu Chân Trên Cát ",
      brand: "12",
      image: "4.png",
      price: 90000,
      smallDes: "Văn minh Ai Cập cổ đại",
      intro:
        "Quân khu Nam Đồng” là bài ca về một thế hệ lớn lên trong khu gia binh lớn nhất Hà Nội những năm 1970, ngân vang những nốt thăng trầm về tuổi thơ và tuổi trẻ, về tình bạn và tình yêu, về tiền tuyến và hậu phương, về chiến tranh và những đau thương mất mát…",
      review:
        "Cái số một đó là khái niệm khoa học của sự chết, các bạn đều biết đến khoa học của sự sống hiểu đơn giản là học nghiên cứu về cơ thể và cứu người để làm sao cho con người sống tốt hơn, sống khỏe mạnh hơn, tuy nhiên khoa học về sự chết lại là khái niệm vô cùng lạ lẫm cuốn hút. Ai cũng chết đi, vậy khi chết đi rõ ràng là chúng ta phải có sự chuẩn bị, chuyển qua một giai đoạn mới đó là “bên kia” nếu chúng ta không chuẩn bị gì hết thì chúng ta cũng sẽ bị te tua ở bên kia. Chính vì vậy khoa học của sự chết là cách chúng ta chuẩn bị khi mà chúng ta chết đi.",
      status: 1,
      cat_id: 1,
      author_id: 1,
      created_at: null,
    },
    {
      id: 5,
      rate: 32,
      name: "Những Giấc Mơ Ở Hiệu Sách Morisaki ",
      brand: "14",
      image: "5.png",
      price: 55000,
      smallDes: "Sách dành cho người trẻ",
      intro:
        "Quân khu Nam Đồng” là bài ca về một thế hệ lớn lên trong khu gia binh lớn nhất Hà Nội những năm 1970, ngân vang những nốt thăng trầm về tuổi thơ và tuổi trẻ, về tình bạn và tình yêu, về tiền tuyến và hậu phương, về chiến tranh và những đau thương mất mát…",
      review:
        "Takako bị phụ tình, người cô hẹn hò một năm nay đột ngột tuyên bố kết hôn. Cô đã bỏ việc, đã chán nản đến phờ phạc, để rồi một ngày đột nhiên nhận được cuộc gọi của người cậu ruột 10 năm trời chưa gặp mặt. Cô đến hiệu sách cũ Morisaki ở phố sách Jimbocho, mà không ngờ rằng những tháng ngày ở góc bình yên hiếm hoi giữa thủ đô này sẽ thay cho tâm hồn cô một diện mạo mới.\n            Có gì quyến rũ ở một tiệm sách cũ? Một người cậu “ẻo lả như động vật thân mềm” với cuộc hôn nhân dang dở? Một căn phòng gác hẹp rí chất đầy sách cũ phải dọn dẹp cả buổi mới đủ chỗ ngủ? Những buổi sáng thẫn thờ trông tiệm, lờ đờ tiếp đón dăm ba vị khách?",
      status: 1,
      cat_id: 1,
      author_id: 2,
      created_at: null,
    },
    {
      id: 7,
      rate: 43,
      name: "Chuộc Tội",
      brand: "19",
      image: "7.png",
      price: 45000,
      smallDes: "Cuốn sách đáng đọc nhất",
      intro:
        "“Quân khu Nam Đồng” là bài ca về một thế hệ lớn lên trong khu gia binh lớn nhất Hà Nội những năm 1970, ngân vang những nốt thăng trầm về tuổi thơ và tuổi trẻ, về tình bạn và tình yêu, về tiền tuyến và hậu phương, về chiến tranh và những đau thương mất mát…",
      review:
        "Cái số một đó là khái niệm khoa học của sự chết, các bạn đều biết đến khoa học của sự sống hiểu đơn giản là học nghiên cứu về cơ thể và cứu người để làm sao cho con người sống tốt hơn, sống khỏe mạnh hơn, tuy nhiên khoa học về sự chết lại là khái niệm vô cùng lạ lẫm cuốn hút. Ai cũng chết đi, vậy khi chết đi rõ ràng là chúng ta phải có sự chuẩn bị, chuyển qua một giai đoạn mới đó là “bên kia” nếu chúng ta không chuẩn bị gì hết thì chúng ta cũng sẽ bị te tua ở bên kia. Chính vì vậy khoa học của sự chết là cách chúng ta chuẩn bị khi mà chúng ta chết đi.",
      status: 1,
      cat_id: 1,
      author_id: 4,
      created_at: null,
    },
    {
      id: 8,
      rate: 32,
      name: "Hãy Chăm Sóc Mẹ",
      brand: "32",
      image: "8.png",
      price: 120000,
      smallDes: "Tình yêu dành cho mẹ",
      intro:
        "Quân khu Nam Đồng” là bài ca về một thế hệ lớn lên trong khu gia binh lớn nhất Hà Nội những năm 1970, ngân vang những nốt thăng trầm về tuổi thơ và tuổi trẻ, về tình bạn và tình yêu, về tiền tuyến và hậu phương, về chiến tranh và những đau thương mất mát…",
      review:
        "Cái số một đó là khái niệm khoa học của sự chết, các bạn đều biết đến khoa học của sự sống hiểu đơn giản là học nghiên cứu về cơ thể và cứu người để làm sao cho con người sống tốt hơn, sống khỏe mạnh hơn, tuy nhiên khoa học về sự chết lại là khái niệm vô cùng lạ lẫm cuốn hút. Ai cũng chết đi, vậy khi chết đi rõ ràng là chúng ta phải có sự chuẩn bị, chuyển qua một giai đoạn mới đó là “bên kia” nếu chúng ta không chuẩn bị gì hết thì chúng ta cũng sẽ bị te tua ở bên kia. Chính vì vậy khoa học của sự chết là cách chúng ta chuẩn bị khi mà chúng ta chết đi.",
      status: 1,
      cat_id: 1,
      author_id: 3,
      created_at: null,
    },
    {
      id: 9,
      rate: 33,
      name: "Hiệu Sách Nhỏ Ở Paris",
      brand: "12",
      image: "9.png",
      price: 99000,
      smallDes: "Tình yêu của người trẻ",
      intro:
        "Quân khu Nam Đồng” là bài ca về một thế hệ lớn lên trong khu gia binh lớn nhất Hà Nội những năm 1970, ngân vang những nốt thăng trầm về tuổi thơ và tuổi trẻ, về tình bạn và tình yêu, về tiền tuyến và hậu phương, về chiến tranh và những đau thương mất mát…",
      review:
        "Cái số một đó là khái niệm khoa học của sự chết, các bạn đều biết đến khoa học của sự sống hiểu đơn giản là học nghiên cứu về cơ thể và cứu người để làm sao cho con người sống tốt hơn, sống khỏe mạnh hơn, tuy nhiên khoa học về sự chết lại là khái niệm vô cùng lạ lẫm cuốn hút. Ai cũng chết đi, vậy khi chết đi rõ ràng là chúng ta phải có sự chuẩn bị, chuyển qua một giai đoạn mới đó là “bên kia” nếu chúng ta không chuẩn bị gì hết thì chúng ta cũng sẽ bị te tua ở bên kia. Chính vì vậy khoa học của sự chết là cách chúng ta chuẩn bị khi mà chúng ta chết đi.",
      status: 1,
      cat_id: 1,
      author_id: 2,
      created_at: null,
    },
    {
      id: 10,
      rate: 33,
      name: "Hiệu Sách Nhỏ Ở Paris",
      brand: "24",
      image: "10.png",
      price: 79000,
      smallDes: "Tình yêu dành cho mẹ",
      intro:
        "Quân khu Nam Đồng” là bài ca về một thế hệ lớn lên trong khu gia binh lớn nhất Hà Nội những năm 1970, ngân vang những nốt thăng trầm về tuổi thơ và tuổi trẻ, về tình bạn và tình yêu, về tiền tuyến và hậu phương, về chiến tranh và những đau thương mất mát…",
      review:
        "Cái số một đó là khái niệm khoa học của sự chết, các bạn đều biết đến khoa học của sự sống hiểu đơn giản là học nghiên cứu về cơ thể và cứu người để làm sao cho con người sống tốt hơn, sống khỏe mạnh hơn, tuy nhiên khoa học về sự chết lại là khái niệm vô cùng lạ lẫm cuốn hút. Ai cũng chết đi, vậy khi chết đi rõ ràng là chúng ta phải có sự chuẩn bị, chuyển qua một giai đoạn mới đó là “bên kia” nếu chúng ta không chuẩn bị gì hết thì chúng ta cũng sẽ bị te tua ở bên kia. Chính vì vậy khoa học của sự chết là cách chúng ta chuẩn bị khi mà chúng ta chết đi.",
      status: 1,
      cat_id: 1,
      author_id: 4,
      created_at: null,
    },
  ],
  sachkinhte: [
    {
      id: 11,
      rate: 21,
      name: "Từ Tốt Đến Vĩ Đại",
      brand: "45",
      image: "11.png",
      price: 135000,
      smallDes: "Suy nghĩ kỷ luật và hành động ",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 5,
      created_at: null,
    },
    {
      id: 12,
      rate: 19,
      name: "Kế Hoạch 12 Tháng Đến Với Tự Do Tài Chính",
      brand: "54",
      image: "12.png",
      price: 199000,
      smallDes: "Để cuộc sống tốt hơn",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 6,
      created_at: null,
    },
    {
      id: 13,
      rate: 33,
      name: "Tiếp Thị 4.0 ",
      brand: "68",
      image: "13.png",
      price: 167000,
      smallDes: "Cuộc sống thời công nghệ",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 8,
      created_at: null,
    },
    {
      id: 14,
      rate: 12,
      name: "Khởi Nghiệp Kinh Doanh ",
      brand: "39",
      image: "14.png",
      price: 167000,
      smallDes: "Động lực quan trọng để phát triển",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 5,
      created_at: null,
    },
    {
      id: 15,
      rate: 45,
      name: "Nghệ Thuật Làm Giàu Của Người Do Thái",
      brand: "56",
      image: "15.png",
      price: 117000,
      smallDes: "Động lực quan trọng để phát triển",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 2,
      created_at: null,
    },
    {
      id: 16,
      rate: 23,
      name: "Kinh Doanh Kiếm 1 Triệu USD Ở Việt Nam",
      brand: "42",
      image: "16.png",
      price: 88000,
      smallDes: "Doanh nhân thế kỉ XX",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 10,
      created_at: null,
    },
    {
      id: 17,
      rate: 12,
      name: "Kiếm Tiền Thời Khủng Hoảng",
      brand: "23",
      image: "17.png",
      price: 112000,
      smallDes: "Cách tư duy mới mẻ",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 9,
      created_at: null,
    },
    {
      id: 18,
      rate: 23,
      name: "21 Nguyên Tắc Tự Do Tài Chính",
      brand: "56",
      image: "18.png",
      price: 78000,
      smallDes: "Để Tự do tài chính",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 4,
      created_at: null,
    },
    {
      id: 19,
      rate: 32,
      name: "Nghĩ Giàu Làm Giàu 365 Ngày",
      brand: "12",
      image: "19.png",
      price: 155000,
      smallDes: "Làm giàu không khó",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 6,
      created_at: null,
    },
    {
      id: 20,
      rate: 30,
      name: "Tuần Làm Việc 4 Giờ",
      brand: "26",
      image: "20.png",
      price: 112000,
      smallDes: "Thời gian là kim cương",
      intro:
        "Jim Collins cùng nhóm nghiên cứu đã miệt mài nghiên cứu những công ty có bước nhảy vọt và bền vững để rút ra những kết luận sát sườn, những yếu tố cần kíp để đưa công ty từ tốt đến vĩ đại. Đó là những yếu tố khả năng lãnh đạo, con người, văn hóa, kỷ luật, công nghệ… Những yếu tố này được nhóm nghiên cứu xem xét tỉ mỉ và kiểm chứng cụ thể qua 11 công ty nhảy vọt lên vĩ đại. ",
      review:
        "Từ tốt đến vĩ đại của Jim Collins là cuốn sách quản trị kinh doanh kinh điển, nằm trong số 20 tác phẩm có ảnh hưởng nhất thế giới về quản trị trong vòng 20 năm qua theo bình chọn của Tạp chí Forbes. Cuốn sách đưa ra một mô hình để chuyển một công ty chỉ ở mức bình thường, hay ở mức tốt, thành một công ty vĩ đại. Bằng cách áp dụng con người kỷ luật, suy nghĩ kỷ luật và hành động kỷ luật một công ty có thể xây dựng và tạo sự đột phá và phá vỡ những rào cản ngăn mình đến sự vĩ đại. Tác giả Jim Collins và các cộng sự của ông đã thực hiện việc nghiên cứu trong nhiều năm liền giữa những công ty vĩ đại và những công ty đối trọng để tìm ra những yếu tố đó. Ông mở đầu cuốn sách bằng câu nói đầy tính thách thức: “Tốt là kẻ thù của Vĩ Đại. Và đó là một trong những lý do chính giải thích vì sao có rất ít điều vĩ đại. ",
      status: 1,
      cat_id: 2,
      author_id: 7,
      created_at: null,
    },
  ],
  sachnuoidaycon: [
    {
      id: 21,
      rate: 42,
      name: "Đắc Nhân Tâm",
      brand: "45",
      image: "21.png",
      price: 99000,
      smallDes: "Sách của thời đại.",
      intro:
        " Đắc nhân tâm của Dale Carnegie là quyển sách của mọi thời đại và một hiện tượng đáng kinh ngạc trong ngành xuất bản Hoa Kỳ. Trong suốt nhiều thập kỷ tiếp theo và cho đến tận bây giờ, tác phẩm này vẫn chiếm vị trí số một trong danh mục sách bán chạy nhất và trở thành một sự kiện có một không hai trong lịch sử ngành xuất bản thế giới và được đánh giá là một quyển sách có tầm ảnh hưởng nhất mọi thời đại.",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 1,
      created_at: null,
    },
    {
      id: 22,
      rate: 12,
      name: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
      brand: "34",
      image: "22.png",
      price: 154000,
      smallDes: "Kinh nghiệm của người đi trước",
      intro:
        " Đắc nhân tâm của Dale Carnegie là quyển sách của mọi thời đại và một hiện tượng đáng kinh ngạc trong ngành xuất bản Hoa Kỳ. Trong suốt nhiều thập kỷ tiếp theo và cho đến tận bây giờ, tác phẩm này vẫn chiếm vị trí số một trong danh mục sách bán chạy nhất và trở thành một sự kiện có một không hai trong lịch sử ngành xuất bản thế giới và được đánh giá là một quyển sách có tầm ảnh hưởng nhất mọi thời đại.",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 2,
      created_at: null,
    },
    {
      id: 23,
      rate: 26,
      name: "Đọc Vị Bất Kỳ Ai",
      brand: "36",
      image: "23.png",
      price: 154000,
      smallDes: "Học cách người khác suy nghĩ",
      intro:
        "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 6,
      created_at: null,
    },
    {
      id: 24,
      rate: 35,
      name: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
      brand: "25",
      image: "24.png",
      price: 123000,
      smallDes: "Sự im lặng không còn là vàng",
      intro:
        "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 11,
      created_at: null,
    },
    {
      id: 25,
      rate: 24,
      name: "9 Nguyên Tắc Làm Một Người Chồng Tốt",
      brand: "35",
      image: "25.png",
      price: 83000,
      smallDes: "Để hôn nhân viên mãn",
      intro:
        "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 5,
      created_at: null,
    },
    {
      id: 26,
      rate: 44,
      name: "Giá Trị Của Sự Tử Tế",
      brand: "29",
      image: "26.png",
      price: 129000,
      smallDes: "Sống lâu hơn để tận hưởng",
      intro:
        "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 6,
      created_at: null,
    },
    {
      id: 27,
      rate: 12,
      name: "Hạnh Phúc Do Bạn Lựa Chọn",
      brand: "89",
      image: "27.png",
      price: 109000,
      smallDes: "Làm chủ cuộc sống",
      intro:
        "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 3,
      created_at: null,
    },
    {
      id: 28,
      rate: 24,
      name: "Những Giá Trị Sống Cho Tuổi Trẻ",
      brand: "23",
      image: "28.png",
      price: 119000,
      smallDes: "Bài học cho người trẻ",
      intro:
        "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 9,
      created_at: null,
    },
    {
      id: 29,
      rate: 31,
      name: "Yêu Mình Trước Đã, Yêu Đời Để Sau",
      brand: "34",
      image: "29.png",
      price: 109000,
      smallDes: "Để yêu cuộc sống hơn",
      intro:
        "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3,
      author_id: 9,
      created_at: null,
    },
    {
      id: 3033,
      rate: 34,
      name: " Bạn Đã Sẵn Sàng Để Yêu",
      brand: "90",
      image: "30.png",
      price: 118000,
      smallDes: "Vấn đề của tuổi trẻ",
      intro:
        "Bạn băn khoăn không biết người ngồi đối diện đang nghĩ gì? Họ có đang nói dối bạn không? Đối tác đang ngồi đối diện với bạn trên bàn đàm phán đang nghĩ gì và nói gì tiếp theo?",
      review:
        "Vậy tại sao con người ta cần phải biết cách thu phục ‘nhân tâm’? Và tại sao chúng ta lại phải mua một quyển sách khi không chắc chắn nó thật sự bổ ích? Đó là câu hỏi mà bất cứ một ai  trước khi sẵn sàng mua bất cứ một quyển sách nào đấy đều phải nghĩ và cân nhắc đến. Bởi chắc hẳn không một ai muốn lãng phí thời gian quý báu của mình để làm những điều không mang lại chút lợi ích nào, và câu trả lời là ở đây là? Có! Bởi nó thật sự đáng giá, và quả thật có vô vàng khán giả đã kiểm chứng rằng nó thật sự không làm lãng phí thời gian của bạn chút nào.",
      status: 1,
      cat_id: 3000,
      author_id: 7000,
      created_at: null,
    },
  ],
};
const getters = {
  getTieuThuyet: (state) => state.sachtieuthuyet,
  getKinhTe: (state) => state.sachkinhte,
  getSachNuoiDayCon: (state) => state.sachnuoidaycon,
  getAllProduct: (state) => [
    ...state.sachtieuthuyet,
    ...state.sachnuoidaycon,
    ...state.sachkinhte,
  ],
};
const mutations = {
  // SortSaleTop(state, payload) {
  //     let cat = payload.split("-");
  //     if (cat.join("") == "") {
  //         console.log("a")
  //     }
  // }
};

const actions = {
  saleTop(context, payload) {
    console.log(payload);
    context.commit("SortSaleTop", payload);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};

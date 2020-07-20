let adminData = [
    {
        userName: "admin",
        password: "admin"
    }
]

let userData = [
    {
        userName: "Nguyen",
        password: "123456",
        subject: [
            {
                name: "Math",
                score: 0
            }
        ]
    }
]

let quizzData = [
    {
        name: 'Social',
        quizzes: [
            {
                question: "Vệ tinh viễn thông đầu tiên của Việt Nam vừa phóng thành công vào vũ trụ tháng 5/2008 vừa qua có tên là:",
                answer: [
                    " VINASHIP",
                    "VINASAT",
                    "VINASAT-1",
                    "VINASAT-2"
                ],
                trueAnswer: "VINASAT-1"
            },
            {
                question: "Thế vận hội thế giới được tổ chức tại Bắc Kinh khai mạc vào ngày: ",
                answer: [
                    "07/07/2007  ",
                    "08/08/2008",
                    "08/08/2007",
                    "07/07/2008"
                ],
                trueAnswer: "08/08/2008"
            },
            {
                question: "Tại Olympic Bắc Kinh 2008, Việt Nam giành duy nhất một Huy chương bạc tại bộ môn:",
                answer: [
                    "Thể hình ",
                    "Cử tạ  ",
                    "Bida",
                    "Bơi lội"
                ],
                trueAnswer: "Cử tạ "
            },
            {
                question: "Môn thể thao nào được mệnh danh là môn thể thao vua?",
                answer: [
                    "Bóng đá  ",
                    "Điền kinh",
                    "Thể dục dụng cụ",
                    "Bóng chuyền"
                ],
                trueAnswer: "Bóng đá "
            },
            {
                question: " Hà Nội kỉ niệm 1000 năm Thăng Long vào thời gian nào:",
                answer: [
                    "10/10/2008 ",
                    "10/10/2009",
                    "10/10/2010",
                    "01/10/2010"
                ],
                trueAnswer: "10/10/2009 "
            },
            {
                question: "“Chiếu dời đô” của vua Lý Công Uẩn ra đời vào năm:",
                answer: [
                    "1010",
                    "1011",
                    "1100",
                    "1101"
                ],
                trueAnswer: "1010"
            },
            {
                question: "Ngày 5 tháng 5 Âm lịch hằng năm là ngày Tết cổ truyền gì của dân tộc ta:",
                answer: [
                    "Tết Trung thu",
                    "Tết Thiếu nhi",
                    "Tết Trùng cửu",
                    "Tết Đoan ngọ"
                ],
                trueAnswer: "Tết Trùng cửu"
            },
            {
                question: "Hãng hàng không nào sau đây không phải là hãng hàng không giá rẻ:",
                answer: [
                    " Jetstar Airline",
                    "Pacific Airline",
                    "Tiger Airway",
                    "Vietnam Airline"
                ],
                trueAnswer: "Vietnam Airline"
            },
            {
                question: "Di sản nào sau đây không phải là Di sản văn hoá Phi vật thể:",
                answer: [
                    " Áo dài  ",
                    "Cồng chiêng Tây Nguyên",
                    "Nhã nhạc cung đình Huế",
                    "Thánh địa Mỹ Sơn"
                ],
                trueAnswer: "Thánh địa Mỹ Sơn"
            },
            {
                question: "Festival Huế tổ chức gần đây nhất vào năm:",
                answer: [
                    "2009",
                    "2008",
                    "2007",
                    "2006"
                ],
                trueAnswer: "2009"
            },
            {
                question: `Bắt đầu địa chỉ của 1 website, cụm chữ “WWW” là viết tắt của:`,
                answer: [
                    "World wide web",
                    "World web wide",
                    "Web world wide",
                    "World widle web"
                ],
                trueAnswer: "World wide web"
            },
            {
                question: `Màn hình máy vi tính là:`,
                answer: [
                    " CPU ",
                    "Monitor",
                    "USB",
                    "Desktop"
                ],
                trueAnswer: "Monitor"
            },
            {
                question: `Dịch cúm heo bùng phát hiện nay chủ yếu là ở dòng virus nào:`,
                answer: [
                    "AH1N1",
                    "AH5N1",
                    "AH1N5",
                    "AH3N6"
                ],
                trueAnswer: "AH1N1"
            },
            {
                question: `Dịch cúm heo AH1N1 bùng phát và có ca tử vong đầu tiên tại nước:`,
                answer: [
                    "Mỹ",
                    "Mexico",
                    "Venezulia",
                    "Cuba"
                ],
                trueAnswer: "Mexico"
            },
            {
                question: `“Đảo nào xa tít Đông nam – Trải qua lịch sử từng làm chứng nhân”. Đó là:`,
                answer: [
                    "Côn Đảo",
                    "Phú Quốc",
                    "Quần đảo Trường Sa",
                    "Quần đảo Hoàng Sa"
                ],
                trueAnswer: "Côn Đảo"
            },
            {
                question: `“Đèo nào dưới biển trên mây – Ngoài kia Hương thủy, trong này Hàn Giang”. Đó là:`,
                answer: [
                    "Đèo Cả",
                    "Đào Rù rì",
                    "Đào Hải Vân",
                    "Đèo Chuối"
                ],
                trueAnswer: "Đào Hải Vân"
            },
            {
                question: `Việt Nam có bao nhiêu dân tộc anh em:`,
                answer: [
                    "56 dân tộc",
                    "54 dân tộc",
                    "55 dân tộc",
                    "52 dân tộc"
                ],
                trueAnswer: "54 dân tộc"
            },
            {
                question: `Ngày 10/3 âm lịch hằng năm là ngày:`,
                answer: [
                    "Giỗ tổ Hùng Vương",
                    "Giỗ tổ Thánh Gióng",
                    "Giỗ tổ Đức Thánh Trần",
                    "Giỗ tổ làng nghề"
                ],
                trueAnswer: "Giỗ tổ Hùng Vương"
            },
            {
                question: `Kinh đô của Nhà nước đầu tiên của Việt Nam:`,
                answer: [
                    "Lang Liêu",
                    "Văn Lang",
                    "Đống Đa",
                    "Châu Khê"
                ],
                trueAnswer: "Châu Khê"
            },
            {
                question: `Tác phẩm “Hịch tướng sĩ” của tác giả:`,
                answer: [
                    "Nguyễn Trãi",
                    "Ngô Quyền",
                    "Trần Hưng Đạo",
                    "Đinh Bộ Lĩnh"
                ],
                trueAnswer: "Trần Hưng Đạo"
            },
            {
                question: "Văn học chữ Nôm của Việt Nam xuất thân từ thế kỷ:",
                answer: [
                    "VII",
                    "VIII",
                    "IX",
                    "X"
                ],
                trueAnswer: "VII"
            },
            {
                question: "Tác phẩm nào sau đây của Nguyễn Trãi:",
                answer: [
                    "Hịch tướng sĩ",
                    "Truyện Kiều",
                    "Bình Ngô đại cáo",
                    "Chinh phụ ngâm"
                ],
                trueAnswer: "Bình Ngô đại cáo"
            },
            {
                question: "Múa rối nước xuất hiện đầu tiên từ thời nào của nước ta:",
                answer: [
                    "Thời Lý",
                    "Thời Trần",
                    "Thời Lê",
                    "Thời Nguyễn"
                ],
                trueAnswer: "Thời Lý"
            },
            {
                question: "Nhân vật tiêu biểu của múa rối nước đó là:",
                answer: [
                    "Chú mục đồng ",
                    "Chú tễu",
                    "Con trâu",
                    "Con rối"
                ],
                trueAnswer: "Chú tễu"
            },
            {
                question: "Hát quan họ là sản phẩm văn hóa đặc trưng của vùng miền nào nước ta:",
                answer: [
                    "Tây Ninh",
                    "Bắc Bộ",
                    "Bắc Ninh",
                    "Ninh Bình"
                ],
                trueAnswer: "Bắc Ninh"
            },
            {
                question: "Làng tranh Đông Hồ ngày nay thuộc địa phận tỉnh nào ở nước ta:",
                answer: [
                    "Bắc Ninh",
                    "Thừa Thiên Huế",
                    "Bình Thuận",
                    "Quảng Trị"
                ],
                trueAnswer: "Bắc Ninh"
            },
            {
                question: `Tranh Đông Hồ nổi tiếng với tác phẩm “Đám cưới chuột” được vẽ trên loại giấy nào:`,
                answer: [
                    "Giấy dó",
                    "Giấy điệp",
                    "Giấy polure",
                    "Giấy vân"
                ],
                trueAnswer: "Giấy vân"
            },
            {
                question: `Một làng nghề làm gốm nổi tiếng ở nước ta ở vùng Bắc Bộ thuộc vùng:`,
                answer: [
                    "Lào Cai ",
                    "Ninh Bình ",
                    "Bát Tràng",
                    "Hội An"
                ],
                trueAnswer: "Bát Tràng"
            },
            {
                question: `Thành phố, tỉnh đông dân nhất Việt Nam là:`,
                answer: [
                    "Thủ đô Hà Nội",
                    "Thành phố Hồ Chí Minh ",
                    "Thành phố Huế",
                    "Tỉnh Bà Rịa – Vũng Tàu"
                ],
                trueAnswer: "Thành phố Hồ Chí Minh"
            },
            {
                question: `Dân tộc Kinh – dân tộc chiếm đông nhất trong số các dân tộc Việt Nam chiếm khoảng:`,
                answer: [
                    "86% dân số",
                    "90% dân số ",
                    "92% dân số",
                    "80% dân số"
                ],
                trueAnswer: "86% dân số"
            },
            {
                question: `Trong số 54 dân tộc Việt Nam, có bao nhiêu dân tộc có chữ viết riêng:`,
                answer: [
                    "15 dân tộc",
                    "24 dân tộc",
                    "30 dân tộc",
                    "36 dân tộc"
                ],
                trueAnswer: "24 dân tộc"
            },
            {
                question: `Chữ viết tiếng Việt ngày nay có xuất xứ từ thế kỷ thứ mấy:`,
                answer: [
                    "XV",
                    "XVI",
                    "XVII",
                    "XVIII"
                ],
                trueAnswer: "XVIII"
            },
            {
                question: ` Đường biên giới đất liền Việt Nam dài khoảng:`,
                answer: [
                    "4350 km",
                    "4450 km",
                    "4550 km",
                    "4650 km"
                ],
                trueAnswer: "4650 km"
            },
            {
                question: `Nơi hẹp nhất của nước Việt Nam hẹp khoảng:`,
                answer: [
                    "20 km",
                    "30 km",
                    "40 km",
                    "50 km"
                ],
                trueAnswer: "50 km"
            },
            {
                question: `Nơi rộng nhất của Việt Nam rộng khoảng:`,
                answer: [
                    "500 km",
                    " 600 km",
                    "700 km",
                    "800 km"
                ],
                trueAnswer: "600 km"
            },
            {
                question: `Tìm x biết: x : 7 = 45692`,
                answer: [
                    "319834",
                    "319744",
                    "319844",
                    "319484"
                ],
                trueAnswer: "319844"
            },
            {
                question: `Đỉnh núi cao nhất Việt Nam mang tên:`,
                answer: [
                    "Đỉnh Langbiang",
                    "Đỉnh Hoàng Liên Sơn",
                    "Đỉnh Phanxipăng",
                    "Đỉnh Trường Sơn"
                ],
                trueAnswer: "695"
            },
            {
                question: `Việt Nam khi gia nhập Tổ chức thương mại thế giới WTO là thành viên thứ mấy:`,
                answer: [
                    "145",
                    "150",
                    "155",
                    "160"
                ],
                trueAnswer: "155"
            },
            {
                question: `Lễ cúng trăng của dân tộc Khmer vào rằm tháng 12 hằng năm là lễ hội mang tên:`,
                answer: [
                    " Lễ Ocombok",
                    "Lễ Ka tê",
                    "Lễ Thinsak ",
                    "Lễ Sukha"
                ],
                trueAnswer: "780"
            },
            {
                question: `Phiên chợ tình độc đáo Khâu Vai nổi tiếng ở Việt Nam thuộc địa phận tỉnh nào:`,
                answer: [
                    "Bắc Giang",
                    "Hà Giang",
                    "Lào Cai",
                    "Hưng Yên"
                ],
                trueAnswer: "Hà Giang"
            },
            {
                question: `Làng gốm Bát Tràng ban đầu có tên:`,
                answer: [
                    "Bạch Thổ phường",
                    "Bát Tràng phường",
                    "Tràng Tiền phường",
                    "Bạch Bát phường"
                ],
                trueAnswer: "Bạch Thổ phường"
            },
            {
                question: `Mỹ Sơn thực chất là thánh địa Ấn Độ giáo của vương quốc: `,
                answer: [
                    "Chămpa",
                    "Campuchia",
                    "Ấn Độ",
                    "Thái Lan"
                ],
                trueAnswer: "Chămpa"
            },
            {
                question: "Thánh địa Mỹ Sơn là hệ thống những ngôi đền dâng cúng vị thần:",
                answer: [
                    "Thần Linga",
                    "Thần Siva",
                    "Thần Lingo",
                    "Thần Sivian"
                ],
                trueAnswer: "Thần Siva"
            },
            {
                question: " Di tích Mỹ Sơn được 1 học giả người Pháp phát hiện vào năm:",
                answer: [
                    "1896 ",
                    "1897",
                    "1898",
                    "1899"
                ],
                trueAnswer: "1899"
            },
            {
                question: " Di tích Mỹ Sơn được 1 học giả người Pháp phát hiện vào năm:",
                answer: [
                    "10875",
                    "1875",
                    "18075",
                    "1785"
                ],
                trueAnswer: "10875"
            },
            {
                question: "Bãi biển nào ở nước ta được công nhận là 1 trong 29 bãi biển đẹp nhất thế giới:",
                answer: [
                    "Đà Nẵng",
                    "Vũng Tàu",
                    "Hạ Long",
                    "Nha Trang"
                ],
                trueAnswer: "Nha Trang"
            },
            {
                question: "Tỉnh thành nào nổi tiếng với các điểm du lịch sau: Hòn Rơm, Mũi Né, Kê Gà, Phú Quý…:",
                answer: [
                    "Ninh Thuận",
                    "Bình Thuận",
                    "Khánh Hòa",
                    "Phú Yên"
                ],
                trueAnswer: "Bình Thuận"
            },
            {
                question: "Tỉnh thành nào nổi tiếng với các điểm du lịch sau: Cù Lao Phố, Bửu Long, làng bưởi Tân Triều…:",
                answer: [
                    "Đồng Nai",
                    "Bình Dương",
                    "Bà Rịa Vũng Tàu",
                    "Long An"
                ],
                trueAnswer: "Đồng Nai"
            },
            {
                question: `Tỉnh thành nào nổi tiếng với các điểm du lịch sau: Lái Thiêu, Suối Trúc, Đại Nam…:`,
                answer: [
                    "Bình Dương",
                    "Bình Phước",
                    "Tây Ninh",
                    "Đồng Nai"
                ],
                trueAnswer: "Bình Dương"
            },
            {
                question: `Tuổi thọ trung bình của người Việt Nam:`,
                answer: [
                    "65 tuổi",
                    "69 tuổi",
                    "72 tuổi",
                    "75 tuổi"
                ],
                trueAnswer: " 72 tuổi"
            },
            {
                question: `Tỉnh thành nào nổi tiếng với các điểm du lịch sau: Núi Bà Đen, Tòa thánh, Trung ương cục miền Nam…:`,
                answer: [
                    "Thành phố Hồ Chí Minh",
                    "Tây Ninh",
                    "Bình Thuận",
                    "Đồng Nai"
                ],
                trueAnswer: "Tây Ninh"
            },
            {
                question: `Dân tộc đông dân số thứ 2 sau dân tộc Kinh là:`,
                answer: [
                    "Dân tộc Hoa",
                    "Dân tộc Thái",
                    "Dân tộc Mường",
                    "Dân tộc Tày"
                ],
                trueAnswer: "Dân tộc Tày"
            },
            {
                question: ` Nơi lưu danh các học vị tiến sĩ thời xưa:`,
                answer: [
                    "Trường Quốc học Huế",
                    "Văn miếu Quốc tự giám",
                    "Chùa Bút",
                    "Chùa Một Cột"
                ],
                trueAnswer: "Văn miếu Quốc tự giám"
            },
            {
                question: `Huyện đảo Hoàng Sa của nước ta hiện nay thuộc địa phận tỉnh nào:`,
                answer: [
                    "Đà Nẵng",
                    "Khánh Hòa",
                    "Bình Định",
                    "Phú Yên"
                ],
                trueAnswer: "Đà Nẵng"
            },
            {
                question: `Biểu tượng cho ngành luật pháp là hình ảnh của:`,
                answer: [
                    "Con rắn",
                    "Chiếc nón",
                    "Cái cân",
                    "Chữ thập"
                ],
                trueAnswer: "Cái cân "
            },
        ]
    },
    {
        name: 'Physic',
        quizzes: [
            {
                question: "Chọn câu phát biểu sai: ",
                answer: [
                    "Chất rắn khi nóng lên thì nở ra.",
                    "Các chất rắn khác nhau nở vì nhiệt khác nhau.",
                    "Chất rắn khi lạnh đi thì co lại.",
                    "Các chất rắn khác nhau nở vì nhiệt như nhau."
                ],
                trueAnswer: "Các chất rắn khác nhau nở vì nhiệt như nhau."
            },
            {
                question: "Chọn từ thích hợp trong khung để điền vào chỗ trống : Thể tích quả cầu ______ khi quả cầu nóng lên.",
                answer: [
                    "Nóng lên ",
                    "Lạnh đi",
                    "Tăng",
                    "Giảm"
                ],
                trueAnswer: "Tăng"
            },
            {
                question: "Khi đun nóng một hòn bi bằng sắt thì xảy ra hiện tượng nào dưới đây?",
                answer: [
                    "Khối lượng của hòn bi tăng.",
                    "Khối lượng của hòn bi giảm.",
                    "Khối lượng riêng của hòn bi tăng.",
                    "Khối lượng riêng của hòn bi giảm."
                ],
                trueAnswer: "Khối lượng riêng của hòn bi giảm."
            },
            {
                question: "Các trụ bê tông cốt thép không bị nứt khi nhiệt độ ngoài trời thay đổi vì:",
                answer: [
                    "Bê tông và lõi thép không bị nở vì nhiệt.",
                    "Bê tông nở vì nhiệt nhiều hơn thép nên không bị thép làm nứt.",
                    "Bê tông và lõi thép nở vì nhiệt giống nhau.",
                    "Lõi thép là vật đàn hồi nên lõi thép biến dạng theo bê tông."
                ],
                trueAnswer: "Bê tông và lõi thép nở vì nhiệt giống nhau."
            },
            {
                question: "Cho ba thanh kim loại đồng, nhôm, sắt có cùng chiều dài ban đầu là 100 cm. Khi tăng thêm 50oC thì độ tăng chiều dài của chúng theo thứ tự trên lần lượt là 0,12 cm; 0,086 cm; 0,060 cm. Trong ba chất đồng, nhôm và sắt, cách sắp xếp nào sau đây là đúng theo thứ tự từ chất dãn nở vì nhiệt nhiều nhất đến chất dãn nở vì nhiệt ít nhất?",
                answer: [
                    "Nhôm - Đồng - Sắt",
                    "Nhôm - Sắt - Đồng",
                    "Sắt - Nhôm - Đồng",
                    "Đồng - Nhôm - Sắt"
                ],
                trueAnswer: "Nhôm - Đồng - Sắt"
            },
            {
                question: " Điền số thích hợp: 1 m3 = ........lít = ........ml",
                answer: [
                    "100 lít / 10.000 ml",
                    "100 lít / 1.000.000 ml ",
                    "1000 lít / 100.000 ml",
                    "1000 lít / 1.000.000 ml"
                ],
                trueAnswer: "1000 lít / 1.000.000 ml"
            },
            {
                question: "Đơn vị đo thể tích thường dùng là:",
                answer: [
                    "Mét (m) và lít (l)",
                    "Kilogam (kg) và lít (l)",
                    "Mét khối (m3) và lít (l)",
                    "Mét vuông (m2) và lít (l)"
                ],
                trueAnswer: "Mét khối (m3) và lít (l)"
            },
            {
                question: "Người ta muốn chứa 20 lít nước bằng các can nhỏ có ghi 1,5 lít. Phải dùng ít nhất bao nhiêu can?",
                answer: [
                    "12",
                    "13",
                    "14",
                    "15"
                ],
                trueAnswer: "14"
            },
            {
                question: "Để đo thể tích chất lỏng, người ta dùng dụng cụ:",
                answer: [
                    "Cốc uống nước",
                    "Bình chia độ",
                    "Kim tiêm",
                    "Chai nước"
                ],
                trueAnswer: "Bình chia độ"
            },
            {
                question: "Khi nào ta nhận biết được ánh sáng?",
                answer: [
                    "Khi có ánh sáng đi ngang qua mắt ta.",
                    "Khi đặt một nguồn sáng trước mắt.",
                    "Khi ta mở mắt.",
                    "Khi có ánh sáng lọt vào mắt ta."
                ],
                trueAnswer: "Khi có ánh sáng lọt vào mắt ta."
            },
            {
                question: "Hãy chỉ ra vật nào dưới đây không phải là nguồn sáng?",
                answer: [
                    "Ngọn nến đang cháy",
                    "Vỏ chai sáng chói dưới trời nắng",
                    "Mặt trời",
                    "Đèn ống đang sáng"
                ],
                trueAnswer: "Vỏ chai sáng chói dưới trời nắng"
            },
            {
                question: `Chọn câu đúng:
                Trong một phòng hoàn toàn đóng kín bằng cửa kính, ta có thể nhìn thấy đồ vật trong phòng khi:`,
                answer: [
                    "Ban đêm, bật đèn, có ánh trăng, nhưng nhắm mắt",
                    "Ban đêm, bật đèn, không có ánh trăng, nhưng nhắm mắt",
                    "Ban đêm, không bật đèn, không có ánh trăng, nhưng mở mắt",
                    "Ban ngày, không bật đèn, mở mắt"
                ],
                trueAnswer: "Ban ngày, không bật đèn, mở mắt"
            },
            {
                question: "Ta không nhìn thấy được một vật là vì: ",
                answer: [
                    "Vật đó không tự phát ra ánh sáng",
                    "Vật đó có phát ra ánh sáng nhưng bị vật cản che khuất làm cho những ánh sáng từ vật đó không thể truyền đến mắt ta",
                    "Vì mắt ta không nhận được ánh sáng",
                    "Các câu trên đều đúng"
                ],
                trueAnswer: "Vật đó có phát ra ánh sáng nhưng bị vật cản che khuất làm cho những ánh sáng từ vật đó không thể truyền đến mắt ta"
            },
            {
                question: `Chọn câu đúng:
                Ampe kế là dụng cụ dùng để đo:`,
                answer: [
                    "Tác dụng của dòng điện",
                    "Mức độ của dòng điện",
                    "Cường độ dòng điện",
                    "Khả năng của dòng điện"
                ],
                trueAnswer: "Cường độ dòng điện"
            },
            {
                question: `Điền từ thích hợp vào chỗ trống
                Dòng điện chạy qua đèn có______thì đèn_______.`,
                answer: [
                    "Cường độ càng nhỏ/ càng cháy sáng",
                    "Cường độ càng lớn/ sáng càng yếu",
                    "Cường độ càng lớn/ càng cháy sáng",
                    "Cường độ thay đổi/ sáng như nhau"
                ],
                trueAnswer: "Cường độ càng lớn/ càng cháy sáng"
            },
            {
                question: "Chọn đáp số đúng ",
                answer: [
                    "1,25 A = 125 mA",
                    "0,125A = 1250 mA",
                    "125 mA = 0,125 A",
                    "1250 mA = 12,5 A"
                ],
                trueAnswer: "125 mA = 0,125 A"
            },
            {
                question: `Chọn câu trả lời đúng:
                Ở các chốt nối dây của ampe kế thường có ghi kí hiệu (+) và (-):`,
                answer: [
                    "Kí hiệu (+) là nối với cực âm của nguồn điện",
                    "Kí hiệu (-) là nối với cực âm của nguồn điện",
                    "Kí hiệu (+) là nối với cực dương của nguồn điện",
                    "Câu B và C đúng"
                ],
                trueAnswer: "Câu B và C đúng"
            },
            {
                question: "Cho điểm sáng S trước gương phẳng, cách gương một khoảng 40cm. Ảnh S’ của S tạo bởi gương phẳng nằm cách gương một khoảng là: ",
                answer: [
                    "80cm",
                    "60cm",
                    "40cm",
                    "20cm"
                ],
                trueAnswer: "40cm"
            },
            {
                question: "Ảnh của một vật tạo bởi gương phẳng không có tính chất nào dưới đây?",
                answer: [
                    "Hứng được trên màn và lớn bằng vật",
                    "Không hứng được trên màn",
                    "Không hứng được trên màn và lớn bằng vật",
                    "Cách gương một khoảng bằng khoảng cách từ vật đến gương"
                ],
                trueAnswer: "Hứng được trên màn và lớn bằng vật"
            },
            {
                question: "Chọn câu trả lời đúng Ảnh của một một vật qua một gương phẳng luôn là:",
                answer: [
                    "Ảnh thật, cùng chiều và nhỏ hơn vật",
                    "Ảnh thật cùng chiều và bằng vật, đối xứng nhau qua gương",
                    "Ảnh ảo, cùng chiều, bằng vật, đối xứng nhau qua gương",
                    "Ảnh ảo, ngược chiều, lớn hơn vật"
                ],
                trueAnswer: "Ảnh ảo, cùng chiều, bằng vật, đối xứng nhau qua gương"
            },
            {
                question: "Nhiệt lượng mà vật nhận được hay tỏa ra phụ thuộc vào: ",
                answer: [
                    "Khối Lượng",
                    "Độ tăng nhiệt độ của vật",
                    "Nhiệt dung riêng của chất làm nên vật",
                    "Cả 3 phương án trên"
                ],
                trueAnswer: "Cả 3 phương án trên"
            },
            {
                question: "Nhiệt dung riêng của đồng lớn hơn chì. Vì vậy để tăng nhiệt độ của 3 kg đồng và 3 kg chì thêm 15°C thì: ",
                answer: [
                    "Khối chì cần nhiều nhiệt lượng hơn khối đồng.",
                    "Khối đồng cần nhiều nhiệt lượng hơn khối chì.",
                    "Hai khối đều cần nhiệt lượng như nhau.",
                    "Không khẳng định được."
                ],
                trueAnswer: "Khối đồng cần nhiều nhiệt lượng hơn khối chì."
            },
            {
                question: " Khi chỉ có một lực tác dụng lên vật thì vận tốc của vật đó sẽ như thế nào?",
                answer: [
                    "Vận tốc không thay đổi",
                    "Vận tốc tăng dần",
                    "Vận tốc giảm dần",
                    "Có thể tăng dần và cũng có thể giảm dần."
                ],
                trueAnswer: "Có thể tăng dần và cũng có thể giảm dần."
            },
            {
                question: "Sử dụng cụm từ thích hợp để điền vào chỗ trống: ..... là nguyên nhân làm thay đổi vận tốc của chuyển động.",
                answer: [
                    "Vectơ",
                    "Thay đổi",
                    "Vận tốc",
                    "Lực"
                ],
                trueAnswer: "Lực"
            },
            {
                question: "Câu nào mô tả đầy đủ các yếu tố trọng lực của vật?",
                answer: [
                    "Điểm đặt trên vật, phương thẳng đứng, chiều từ trên xuống dưới, độ lớn 20N.",
                    "Điểm đặt trên vật, hướng thẳng đứng, độ lớn 20N.",
                    "Điểm đặt trên vật, phương từ trên xuống dưới, độ lớn 20N.",
                    "Điểm đặt trên vật, chiều thẳng đứng, độ lớn 20N."
                ],
                trueAnswer: "Điểm đặt trên vật, phương thẳng đứng, chiều từ trên xuống dưới, độ lớn 20N."
            },
            {
                question: "Một ô tô khỏi hành từ A lúc 7 giờ 30 phút và đến B lúc 10 giờ 15 phút. Tính vận tốc của ô tô, biết quãng đường AB dài 154 km.",
                answer: [
                    "54 km/h",
                    "56 km/h",
                    "58 km/h",
                    "60 km/h"
                ],
                trueAnswer: "56 km/h"
            },
            {
                question: "Một ô tô đi từ A lúc 12 giờ 15 phút và đến B lúc 17 giờ 35 phút. Dọc đường ô tô nghỉ trong 1 giờ 5 phút . Hãy tính vận tốc của ô tô, biết quãng đường AB dài 170 km.",
                answer: [
                    "35 km/h",
                    "40 km/h",
                    "50 km/h",
                    "60 km/h"
                ],
                trueAnswer: "40 km/h"
            },
            {
                question: "Một người đi từ nhà ra tỉnh. Lúc đầu người đó phải đi bộ một đoạn đường núi dài 15km, sau đó đi xe đò hết 2 giờ 30 phút thì tới nơi. Tính vận tốc của xe đò, biết quãng đường người đó đi từ nhà tới tỉnh dài 105 km.",
                answer: [
                    "28 km/h",
                    "36 km/h",
                    "44 km/h",
                    "52 km/h"
                ],
                trueAnswer: "36 km/h"
            },
            {
                question: "Quãng đường AB dài 135 km. Ô tô đi từ A đến B hết 2 giờ 30 phút. Tính vận tốc của ô tô, biết dọc đường ô tô nghỉ 15 phút.",
                answer: [
                    "40 km/h",
                    "55 km/h",
                    "60 km/h",
                    "65 km/h"
                ],
                trueAnswer: "60 km/h"
            },
            {
                question: "Biểu thức tính công suất là:",
                answer: [
                    "P = A.t",
                    "P = A/t",
                    "P = t/A",
                    "P = (A + t)/t"
                ],
                trueAnswer: "P = A/t"
            },
            {
                question: "Đơn vị của công suất là: ",
                answer: [
                    "Oát (W)",
                    "Kilôoát (kW)",
                    "Jun trên giây (J/s)",
                    "Cả ba đơn vị trên"
                ],
                trueAnswer: "Cả ba đơn vị trên"
            },
            {
                question: "Để cày một sào đất, nếu dùng trâu cày thì mất 2 giờ, nếu dùng máy cày thì mất 20 phút. Hỏi trâu hay máy cày có công suất lớn hơn và lớn hơn bao nhiêu lần? ",
                answer: [
                    "Máy cày có công suất lớn hơn và lớn hơn 3 lần.",
                    "Máy cày có công suất lớn hơn và lớn hơn 6 lần.",
                    "Máy cày có công suất lớn hơn và lớn hơn 5 lần.",
                    "Máy cày có công suất lớn hơn và lớn hơn 5 lần."
                ],
                trueAnswer: "Máy cày có công suất lớn hơn và lớn hơn 6 lần."
            },
            {
                question: "Trong đoạn mạch mắc nối tiếp, công thức nào sau đây là sai? ",
                answer: [
                    "U = U1 + U2 + ... + Un.",
                    "I = I1 = I2 = ... = In.",
                    "R = R1 = R2 = ... = Rn.",
                    "R = R1 + R2 + ... + Rn."
                ],
                trueAnswer: "R = R1 = R2 = ... = Rn."
            },
            {
                question: "Hai điện trở R1 = 5 Ω và R2 = 10 Ω mắc nối tiếp. Cường độ dòng điện qua điện trở R1 là 4 A. Thông tin nào sau đây là sai? ",
                answer: [
                    "Điện trở tương đương của cả mạch là 15Ω.",
                    "Cường độ dòng điện qua điện trở R2 là 8A.",
                    "Hiệu điện thế hai đầu đoạn mạch là 60 V.",
                    "Hiệu điện thế giữa hai đầu điện trở R1 là 20 V."
                ],
                trueAnswer: "Cường độ dòng điện qua điện trở R2 là 8A."
            },
            {
                question: "Trong các công thức sau đây, công thức nào không phù hợp với đoạn mạch mắc song song ? ",
                answer: [
                    "I = I1 + I2 + ... + In.",
                    "U = U1 + U2 + ... + Un.",
                    "R = R1 + R2 + ... Rn.",
                    "1/R = 1/R1 + 1/R2 + ... + 1/Rn."
                ],
                trueAnswer: "R = R1 + R2 + ... Rn."
            },
            {
                question: "Trong phòng học đang sử dụng một đèn dây tóc và một quạt trần có cùng hiệu điện thế 220V. Hiệu điện thế của nguồn là 220V. Biết các dụng cụ đều hoạt động bình thường. Thông tin nào sau đây là đúng?",
                answer: [
                    "Bóng đèn và quạt trần mắc song song với nhau.",
                    "Cường độ dòng điện qua bóng đèn và quạt trần có giá trị bằng nhau.",
                    "Tổng các hiệu điện thế giữa hai đầu các dụng cụ điện bằng hiệu điện thế giữa hai đầu đoạn mạch.",
                    "Các thông tin A, B, C đều đúng."
                ],
                trueAnswer: "Bóng đèn và quạt trần mắc song song với nhau."
            },
            {
                question: "Phát biểu nào sau đây là đúng?",
                answer: [
                    "Trong đoạn mạch mắc song song, cường độ dòng điện qua các vật dẫn là như nhau.",
                    "Trong đoạn mạch mắc song song, cường độ dòng điện qua các vật dẫn không phụ thuộc vào điện trở các vật dẫn.",
                    "Trong đoạn mạch mắc song song, cường độ dòng điện trong mạch chính bằng cường độ dòng điện qua các mạch rẽ.",
                    "Trong đoạn mạch mắc song song, cường độ dòng điện trong mạch chính bằng tổng cường độ dòng điện qua các mạch rẽ."
                ],
                trueAnswer: "Trong đoạn mạch mắc song song, cường độ dòng điện trong mạch chính bằng tổng cường độ dòng điện qua các mạch rẽ."
            },
            {
                question: "Khi chọn Trái Đất làm vật mốc thì câu nói nào sau đây đúng?",
                answer: [
                    "Trái Đất quay quanh Mặt Trời.",
                    "Mặt Trời quay quanh Trái Đất.",
                    "Mặt Trời đứng yên còn Trái Đất chuyển động.",
                    "Cả Mặt Trời và Trái Đất đều chuyển động."
                ],
                trueAnswer: "Mặt Trời quay quanh Trái Đất."
            },
            {
                question: "Người lái đò đang ngồi yên trên chiếc thuyền thả trôi theo dòng nước. Trong các câu mô tả sau đây, câu nào đúng?",
                answer: [
                    "Người lái đò đứng yên so với dòng nước.",
                    "Người lái đò chuyển động so với dòng nước.",
                    "Người lái đò đứng yên so với bờ sông.",
                    "Người lái đò chuyển động so với chiếc thuyền."
                ],
                trueAnswer: "Người lái đò đứng yên so với dòng nước."
            },
            {
                question: "Hành khách trên tàu A thấy tàu B đang chuyển động về phía trước. Còn hành khách trên tàu B lại thấy tàu C cũng đang chuyển động về phía trước. Vậy hành khách trên tàu A sẽ thấy tàu C:",
                answer: [
                    "Đứng yên.",
                    "Chạy lùi về phía sau.",
                    "Tiến về phía trước.",
                    "Tiến về phía trước rồi sau đó lùi về phía sau."
                ],
                trueAnswer: "Tiến về phía trước."
            },
            {
                question: "Một chiếc xe chạy trên đoạn đường 40 km với tốc độ trung bình là 80 km/h, trên đoạn đường 40 km tiếp theo với tốc độ trung bình là 40 km/h. Tốc độ trung bình của xe trên đoạn đường 80 km này là?",
                answer: [
                    "53 km/h",
                    "50 km/h",
                    "60 km/h",
                    "55 km/h"
                ],
                trueAnswer: "53 km/h"
            },
            {
                question: "Một ô tô chạy trên đường thẳng. Ở 1/3 đoạn đầu của đường đi, ô tô chạy với tốc độ 40 km/h, ở 2/3 đoạn sau của đường đi, ô tô chạy với tốc độ 60 km/h. Tốc độ trung bình của ô tô trên cả đoạn đường là?",
                answer: [
                    "120/7 km/h",
                    "50 km/h",
                    "360/7 km/h",
                    "240/7 km/h"
                ],
                trueAnswer: "360/7 km/h"
            },
            {
                question: "Một máy bay cất cánh từ Hà Nội đi Bắc Kinh vào hồi 9 giờ 30 phút theo giờ Hà Nội và đến Bắc Kinh vào lúc 14 giờ 30 phút cùng ngày theo giờ địa phương. Biết rằng giờ Bắc Kinh nhanh hơ giờ Hà Nội 1 giờ. Biết tốc độ trung bình của máy bay là 1000 km/h. Coi máy bay bay theo đường thẳng. Khoảng cách từ Hà Nội đến Bắc Kinh là?",
                answer: [
                    "4000 km",
                    "6000 km",
                    "3000 km",
                    "5000 km"
                ],
                trueAnswer: "4000 km"
            },
            {
                question: "Một chiếc xe đang chạy trên đường thẳng thì tài xế tăng tốc độ với gia tốc bằng 2 m/s2 trong khoảng thời gian 10s. Độ tăng vận tốc trong khoảng thời gian này là?",
                answer: [
                    "10 m/s",
                    "20 m/s",
                    "15 m/s",
                    "Không xác định được vì thiếu dữ kiện."
                ],
                trueAnswer: "Không xác định được vì thiếu dữ kiện."
            },
            {
                question: "Một chiếc xe chuyển động chậm dần đều trên đường thẳng. Vận tốc khi nó qua A là 10 m/s, và khi đi qua B vận tốc chỉ còn 4 m/s. Vận tốc của xe khi nó đi qua I là trung điểm của đoạn AB là?",
                answer: [
                    "6 m/s",
                    "8 m/s",
                    "7 m/s",
                    "9 m/s"
                ],
                trueAnswer: "7 m/s"
            },
            {
                question: "Một vật nhỏ bắt đầu trượt từ trạng thái nghỉ xuống một đường dốc với gia tốc không đổi là 5 m/s2. Sau 2 s thì nó tới chân dốc Quãng đường mà vật trượt được trên đường dốc là?",
                answer: [
                    "12.5 m",
                    "7.5 m",
                    "8 m",
                    "10 m"
                ],
                trueAnswer: "10 m"
            },
            {
                question: "Các chất được cấu tạo từ",
                answer: [
                    "Tế bào",
                    "Các nguyên tử, phân tử",
                    "Các hợp chất",
                    "Phân tử và các hợp chất hữu cơ"
                ],
                trueAnswer: "Các nguyên tử, phân tử"
            },
            {
                question: "Chọn phát biểu đúng?",
                answer: [
                    "Nguyên tử, phân tử là những hạt vô cùng nhỏ bé, mắt thường không thể nhìn thấy được.",
                    "Nguyên tử, phân tử là những hạt vô cùng nhỏ bé, tuy nhiên mắt thường vẫn có thể quan sát được.",
                    "Vì các nguyên tử, phân tử rất bé nên giữa chúng không có khoảng cách.",
                    "Nguyên tử, phân tử của các chất đều giống nhau."
                ],
                trueAnswer: "Nguyên tử, phân tử là những hạt vô cùng nhỏ bé, mắt thường không thể nhìn thấy được."
            },
            {
                question: "Khi đổ 200 cm3 giấm ăn vào 250 cm3 nước thì thu được bao nhiêu cm3 hỗn hợp?",
                answer: [
                    "450 cm3",
                    "> 450 cm3",
                    "425 cm3",
                    "< 450 cm3"
                ],
                trueAnswer: "< 450 cm3"
            },
            {
                question: "Hiện tượng nào sau đây không phải là hiện tượng khuếch tán?",
                answer: [
                    "Đường để trong cốc nước, sau một thời gian nước trong cốc ngọt hơn ban đầu.",
                    "Miếng sắt để trên bề mặt miếng đồng, sau một thời gian, trên bề mặt miếng sắt có phủ một lớp đồng và ngược lại.",
                    "Cát được trộn lẫn với ngô.",
                    "Mở lọ nước hoa ở trong phòng, một thời gian sau cả phòng đều có mùi thơm."
                ],
                trueAnswer: "Cát được trộn lẫn với ngô."
            },
            {
                question: "Chọn phát biểu đúng khi nói về chuyển động của các phân tử, nguyên tử?",
                answer: [
                    "Các phân tử, nguyên tử có lúc chuyển động, có lúc đứng yên.",
                    "Các nguyên tử, phân tử chuyển động theo một hướng nhất định.",
                    "Nhiệt độ của vật càng cao thì các nguyên tử, phân tử cấu tạo nên vật chuyển động chậm lại.",
                    "Các nguyên tử, phân tử cấu tạo nên vật chuyển động càng nhanh thì nhiệt độ càng cao."
                ],
                trueAnswer: "Các nguyên tử, phân tử cấu tạo nên vật chuyển động càng nhanh thì nhiệt độ càng cao."
            },
        ]
    },
    {
        name: 'Math',
        quizzes: [
            {
                question: "Số bốn mươi lăm nghìn ba trăm linh tám được viết là:",
                answer: [
                    "45307",
                    "45308",
                    "45380",
                    "45038"
                ],
                trueAnswer: "45038"
            },
            {
                question: "Giá trị của biểu thức: 876 – m với m = 432 là: ",
                answer: [
                    "444",
                    "434",
                    "424",
                    "414"
                ],
                trueAnswer: "444"
            },
            {
                question: "Giá trị của biểu thức 8 x a với =100 là:",
                answer: [
                    "8100",
                    "800",
                    "1008",
                    "1800"
                ],
                trueAnswer: "800"
            },
            {
                question: "Tính chu vi hình vuông cạnh a với a = 9 cm",
                answer: [
                    "18 cm",
                    "81 cm",
                    "36 cm",
                    "63 cm"
                ],
                trueAnswer: "36 cm"
            },
            {
                question: "Số gồm 6 trăm nghìn, 6 trăm, 4 chục và 3 đơn vị viết là:",
                answer: [
                    "664300",
                    "606430",
                    "600634",
                    "600643"
                ],
                trueAnswer: "600643"
            },
            {
                question: "Giá trị của chữ số 5 trong số sau: 765430.",
                answer: [
                    "50000",
                    "500000",
                    "5000",
                    "500"
                ],
                trueAnswer: "5000"
            },
            {
                question: "Số có 6 chữ số lớn nhất là:",
                answer: [
                    "999999",
                    "666666",
                    "100000",
                    "900000"
                ],
                trueAnswer: "999999"
            },
            {
                question: "Số bảy trăm triệu có bao nhiêu chữ số 0:",
                answer: [
                    "7",
                    "10",
                    "9",
                    "8"
                ],
                trueAnswer: "8"
            },
            {
                question: "Giá trị của chữ số 8 trong số sau: 45873246",
                answer: [
                    "8 000",
                    "80 000",
                    "800 000",
                    "8 000 000"
                ],
                trueAnswer: "800 000"
            },
            {
                question: "Số tự nhiên liền trứơc số 10001 là:",
                answer: [
                    "10011",
                    "10002",
                    "10021",
                    "10000"
                ],
                trueAnswer: "10000"
            },
            {
                question: `Chọn số nào để được số tự nhiên liên tiếp 99998;........100000.`,
                answer: [
                    "99997",
                    "9999",
                    "99999",
                    "100 001"
                ],
                trueAnswer: "99999"
            },
            {
                question: `Tìm số tròn chục x, biết: 58 < x < 70`,
                answer: [
                    "40",
                    "50",
                    "60",
                    "69"
                ],
                trueAnswer: "60"
            },
            {
                question: `Tìm x biết: 6 < x < 9 và x là số lẻ :`,
                answer: [
                    "6",
                    "7",
                    "8",
                    "9"
                ],
                trueAnswer: "7"
            },
            {
                question: `6tạ 50kg = ? kg`,
                answer: [
                    "650kg",
                    "6500kg",
                    "6050kg",
                    "5060kg"
                ],
                trueAnswer: "6050kg"
            },
            {
                question: `36000kg = ? tấn`,
                answer: [
                    "36 tấn",
                    "360 tấn",
                    "600 tấn",
                    "306 tấn"
                ],
                trueAnswer: "36 tấn"
            },
            {
                question: `3 kg 7g = ? g.`,
                answer: [
                    "37 g",
                    "307 g",
                    "370 g",
                    "3007 g"
                ],
                trueAnswer: "3007 g"
            },
            {
                question: `6dag 5 g = ? g.`,
                answer: [
                    "65 g",
                    "605 g",
                    "56 g",
                    "650 g"
                ],
                trueAnswer: "65 g"
            },
            {
                question: `503g = ? …hg…g.`,
                answer: [
                    "50hg 3g",
                    "5hg 3g",
                    "500hg 3g",
                    "5hg 30g"
                ],
                trueAnswer: "5hg 3g"
            },
            {
                question: `Mỗi bao gạo nặng 3 tạ .Một ô tô chở 9 tấn gạo thì chở được bao nhiêu bao như vậy?`,
                answer: [
                    "90 bao",
                    "900 bao",
                    "30 bao",
                    "270 bao"
                ],
                trueAnswer: "30 bao"
            },
            {
                question: `2500 năm = ? thế kỷ.`,
                answer: [
                    "25",
                    "500",
                    "250",
                    "50"
                ],
                trueAnswer: "25"
            },
            {
                question: "5 phút 40 giây = ? giây.",
                answer: [
                    "540",
                    "340",
                    "3040",
                    "405"
                ],
                trueAnswer: "340"
            },
            {
                question: "Năm 1459 thuộc thế kỷ thư mấy?",
                answer: [
                    "XII",
                    "XIII",
                    "XIV",
                    "XV"
                ],
                trueAnswer: "XV"
            },
            {
                question: "Trung bình cộng của các số: 43 ; 166 ; 151 ; là:",
                answer: [
                    "360",
                    "180",
                    "120",
                    "12"
                ],
                trueAnswer: "120"
            },
            {
                question: "Số trung bình cộng của hai số bằng 14. Biết một trong hai số đó bằng 17. Tìm số kia?",
                answer: [
                    "3",
                    "21",
                    "11",
                    "31"
                ],
                trueAnswer: "11"
            },
            {
                question: "Kết quả của phép cộng: 697583 +245736 =?",
                answer: [
                    "843319",
                    "942319",
                    "943219",
                    "943319"
                ],
                trueAnswer: "943319"
            },
            {
                question: "Tìm x biết: 549 + x = 976.",
                answer: [
                    "x = 427",
                    "x = 327",
                    "x = 437",
                    "x = 337"
                ],
                trueAnswer: "x = 427"
            },
            {
                question: `Kết quả của phép trừ: 865847 – 376758 = ?`,
                answer: [
                    "488089",
                    "489089",
                    "479089",
                    "489189"
                ],
                trueAnswer: "489089"
            },
            {
                question: `Tính giá trị của a+b nếu a = 56 và b = 29.`,
                answer: [
                    "27",
                    "37 ",
                    "85",
                    "75"
                ],
                trueAnswer: "85"
            },
            {
                question: `Tính giá trị của m x n nếu m = 34 và n = 8.`,
                answer: [
                    "42",
                    "262 ",
                    "282",
                    "272"
                ],
                trueAnswer: "272"
            },
            {
                question: `Chọn số thích hợp: 563 + 856 = 856 + ......?`,
                answer: [
                    "856",
                    "563",
                    "1419",
                    "293"
                ],
                trueAnswer: "563"
            },
            {
                question: `Tính: a x b x c. Nếu a = 12 ; b = 4 ; c = 2.`,
                answer: [
                    "96",
                    "50",
                    "72",
                    "32"
                ],
                trueAnswer: "96"
            },
            {
                question: `Tính: (m + n) x p biết m = 30 ; m = 40 ; p = 8`,
                answer: [
                    "350",
                    "78",
                    "560",
                    "56"
                ],
                trueAnswer: "560"
            },
            {
                question: `Chọn số thích hợp: ( 637 + 245) +259 = (637 + 259) + ………?`,
                answer: [
                    "259",
                    "931",
                    "1141",
                    "245"
                ],
                trueAnswer: "245"
            },
            {
                question: `Tìm hai số khi biết tổng và hiệu của chúng là: 42 và 18.`,
                answer: [
                    "24 và 12",
                    "6 và 12",
                    "12 và 30",
                    "12 và 30"
                ],
                trueAnswer: "12 và 30"
            },
            {
                question: `Kết quả của phép nhân: 212504 x 8 = ?`,
                answer: [
                    "1690032",
                    "1700032",
                    "1690302",
                    "1700302"
                ],
                trueAnswer: "1700032"
            },
            {
                question: `Tìm x biết: x : 7 = 45692`,
                answer: [
                    "319834",
                    "319744",
                    "319844",
                    "319484"
                ],
                trueAnswer: "319844"
            },
            {
                question: `Chọn số thích hợp: 695 x 7 = 7 x …………?`,
                answer: [
                    "4865",
                    "569",
                    "7",
                    "695"
                ],
                trueAnswer: "695"
            },
            {
                question: `Tính nhẩm: 16 x100 = ?`,
                answer: [
                    "1600",
                    "160",
                    "1060",
                    "6000"
                ],
                trueAnswer: "1600"
            },
            {
                question: `Kết quả của phép tính: 78 x 100 : 10 = ?`,
                answer: [
                    "78",
                    "708",
                    "7800",
                    "780"
                ],
                trueAnswer: "780"
            },
            {
                question: `Chọn số thích hơp: ( 4 x 5) x 7 = ( 7 x 4) x ……?`,
                answer: [
                    "20",
                    "5",
                    "7",
                    "4"
                ],
                trueAnswer: "5"
            },
            {
                question: `Chọn phép toán đúng:`,
                answer: [
                    "50 = 10 x 7",
                    "167 = 16 x 7",
                    "5 x 80 = 40 x 10",
                    "25 x 30 = 35 x 15"
                ],
                trueAnswer: "5 x 80 = 40 x 10"
            },
            {
                question: `Tìm x biết: x : 200 = 3460`,
                answer: [
                    "x = 69200",
                    "x = 692000",
                    "x = 6920",
                    "x = 692"
                ],
                trueAnswer: "x = 692000"
            },
            {
                question: "Tìm x biết: x : 98 = 76",
                answer: [
                    "x = 6764",
                    "x = 1157",
                    "x = 7764",
                    "x = 6774"
                ],
                trueAnswer: "x = 6764"
            },
            {
                question: "Kết quả phép nhân: 608 x 467 =?",
                answer: [
                    "284936",
                    "55056",
                    "283936",
                    "65056"
                ],
                trueAnswer: "283936"
            },
            {
                question: "Kết quả của phép chia: 97875 : 9 = ?",
                answer: [
                    "10875",
                    "1875",
                    "18075",
                    "1785"
                ],
                trueAnswer: "10875"
            },
            {
                question: "Kết quả của phép chia: 9800 : 200 = ?",
                answer: [
                    "4900",
                    "409",
                    "49",
                    "490"
                ],
                trueAnswer: "49"
            },
            {
                question: "68503 chia cho 52 được số dư là:",
                answer: [
                    "29",
                    "19",
                    "9",
                    "20"
                ],
                trueAnswer: "19"
            },
            {
                question: "Tìm x biết: 5280 : x = 24",
                answer: [
                    "x = 126720",
                    "x = 12672",
                    "x = 220",
                    "x = 22"
                ],
                trueAnswer: "x = 220"
            },
            {
                question: `Kết quả của phép chia: 3144 : 262 = ?`,
                answer: [
                    "22",
                    "12",
                    "20",
                    "17"
                ],
                trueAnswer: "12"
            },
            {
                question: `Tìm x biết: 56475 : x = 251`,
                answer: [
                    "x = 252",
                    "x = 522",
                    "x = 225",
                    "x = 215"
                ],
                trueAnswer: "x = 225"
            },
            {
                question: `Số nào sau đây chia hết cho 2`,
                answer: [
                    "57460",
                    "63247",
                    "49325",
                    "47539"
                ],
                trueAnswer: "57460"
            },
            {
                question: `Số nào sau đây chia hết cho 5?`,
                answer: [
                    "65478",
                    "79684",
                    "68326",
                    "4975"
                ],
                trueAnswer: "4975"
            },
            {
                question: `Số chia hết cho 5 có số tận cùng là những số nào?`,
                answer: [
                    "0 ; 5",
                    "0 ; 7",
                    "5 ; 9",
                    "5 ; 4"
                ],
                trueAnswer: "0 ; 5"
            },
            {
                question: `Số vừa chia hết cho 2, vừa chia hết cho 5 có chữ số tận cùng là:`,
                answer: [
                    "5",
                    "0",
                    "4",
                    "7"
                ],
                trueAnswer: "0"
            },
            {
                question: `Số nào sau đây không chia hết cho 9.`,
                answer: [
                    "64746",
                    "43769",
                    "278964",
                    "53253"
                ],
                trueAnswer: "43769"
            },
        ]
    },
    {
        name: 'English',
        quizzes: [
            {
                question: "Missy said hello ____ of everyone in her group of friends.",
                answer: [
                    "The most cheerfully",
                    "The cheerfulliest",
                    "The more cheerfully",
                    "The cheerfullier"
                ],
                trueAnswer: "The most cheerfully"
            },
            {
                question: "Several children in the class are ____, but Harriet is the ____ by far.",
                answer: [
                    "Clever/ more cleverest",
                    "Clever/ cleverest",
                    "Clever/ most cleverest",
                    "Clever/ more cleverer"
                ],
                trueAnswer: "Clever/ cleverest"
            },
            {
                question: "Karen walked ____ to the bus stop than Sally.",
                answer: [
                    "Briskliest",
                    "Brisklier",
                    "More briskly",
                    "Most briskly"
                ],
                trueAnswer: "More briskly"
            },
            {
                question: "I gave my bike a wash and now it looks ____.",
                answer: [
                    "Gooder",
                    "Better",
                    "More good",
                    "Best"
                ],
                trueAnswer: "Better"
            },
            {
                question: "A ballet dancer usually dances ____ than me.",
                answer: [
                    "More gracefully",
                    "Most gracefully",
                    "Gracefullier",
                    "Gracefulliest"
                ],
                trueAnswer: "More gracefully"
            },
            {
                question: "Paul has two big trees in his back garden, but the oak tree is ____ the ash tree.",
                answer: [
                    "The more taller",
                    "The most tallest",
                    "Taller than",
                    "Tallest"
                ],
                trueAnswer: "Taller than"
            },
            {
                question: "The Missouri river is ____ river in the USA, but the river Nile is ____ it.",
                answer: [
                    "The longest/ longer than",
                    "The longest/ longest than",
                    "The long/ longer than",
                    "The longer/ the longer than"
                ],
                trueAnswer: "The longest/ longer than"
            },
            {
                question: "Cheetahs may run ____ than horses, but the horses run ____ across a field of every animal.",
                answer: [
                    "The most swiftly/ more beautifully",
                    "Swiftly/ more beautifully",
                    "The swiftliest/ the beautifullier",
                    "More swiftly/ the most beautifully"
                ],
                trueAnswer: "More swiftly/ the most beautifully"
            },
            {
                question: "Dave would like a ____ sugar in his tea; Peter would like ____ sugar than Dave, and Bill would like ____ sugar of all.",
                answer: [
                    "Little/ less/ the least",
                    "Little/ least/ less",
                    "Less/ Little/ least",
                    "Least/ less/ little"
                ],
                trueAnswer: "Little/ less/ the least"
            },
            {
                question: `Select the adjectives in the following sentence.
                The road comprised large houses and a tiny shop.`,
                answer: [
                    "Comprised",
                    "Houses/ shop",
                    "Large/ tiny",
                    "Road/ large"
                ],
                trueAnswer: "Large/ tiny"
            },
            {
                question: `Select the adjectives in the following sentence.
                The old book had lost its original cover long ago.`,
                answer: [
                    "Book/ cover",
                    "Lost/ long",
                    "Old/ original",
                    "The/ its"
                ],
                trueAnswer: "Old/ original"
            },
            {
                question: `Select the adjectives in the following sentence.
                The long transporter delivered the new car today.`,
                answer: [
                    "Delivered/ today",
                    "Long/ new",
                    "The/ the",
                    "Transporter/ car"
                ],
                trueAnswer: "Long/ new"
            },
            {
                question: `Select the adjectives in the following sentence.
                This bag is heavy but that bag is light.`,
                answer: [
                    "Bag/ bag",
                    "Heavy/ light",
                    "Is/ is",
                    "This/ that"
                ],
                trueAnswer: "Heavy/ light"
            },
            {
                question: `Select the adjectives in the following sentence.
                The quick brown fox jumped over the slow white dog.`,
                answer: [
                    "Jumped/ over/ the/ dog",
                    "Quick/ brown/ slow/ white",
                    "The/ fox/ the/ dog",
                    "The/ jumped/ over/ the"
                ],
                trueAnswer: "Quick/ brown/ slow/ white"
            },
            {
                question: `Select the atonym for the following word.
                                       Empty`,
                answer: [
                    "Drained",
                    "Full",
                    "Poured out",
                    "Vacant"
                ],
                trueAnswer: "Full"
            },
            {
                question: `Select the atonym for the following word.
                                       Stale`,
                answer: [
                    "Fresh",
                    "Kept too long",
                    "Musty",
                    "Old"
                ],
                trueAnswer: "Fresh"
            },
            {
                question: `Select the atonym for the following word.
                                       Shout`,
                answer: [
                    "Cry",
                    "Scream",
                    "Shriek",
                    "Whisper"
                ],
                trueAnswer: "Whisper"
            },
            {
                question: `Select the atonym for the following word.
                                       Few`,
                answer: [
                    "A minority",
                    "A small number",
                    "Many",
                    "Not many"
                ],
                trueAnswer: "Many"
            },
            {
                question: `Select the atonym for the following word.
                                       Bright`,
                answer: [
                    "Dull",
                    "Radiant",
                    "Shining",
                    "Sparkling"
                ],
                trueAnswer: "Dull"
            },
            {
                question: `Select the atonym for the following word.
                                       Shut`,
                answer: [
                    "Barred",
                    "Closed",
                    "Fastened",
                    "Open"
                ],
                trueAnswer: "Open"
            },
            {
                question: "Select the correct capital letters in the following sentence.",
                answer: [
                    "red sky means good weather it will be sunny tomorrow",
                    "Red sky means good weather. it will be sunny tomorrow",
                    "Red sky means good weather. it will be sunny tomorrow.",
                    "Red sky means good weather. It will be sunny tomorrow."
                ],
                trueAnswer: "Red sky means good weather. It will be sunny tomorrow."
            },
            {
                question: "Select the correct capital letters in the following sentence.",
                answer: [
                    "where is the blue book is it in the pile on the table?",
                    "where is the blue book. is it in the pile on the table.",
                    "Where is the blue book? Is it in the pile on the table?",
                    "Where is the blue book? is it in the pile on the table?"
                ],
                trueAnswer: "Where is the blue book? Is it in the pile on the table?"
            },
            {
                question: "Select the correct capital letters in the following sentence.",
                answer: [
                    "tom played the Piano well kate Forgot her music.",
                    "tom played the piano well kate forgot her music.",
                    "Tom played the piano well. Kate forgot her music.",
                    "Tom played the Piano well. Kate forgot her Music."
                ],
                trueAnswer: "Tom played the piano well. Kate forgot her music."
            },
            {
                question: "Select the correct capital letters in the following sentence.",
                answer: [
                    "Capital letters are useful do you use them correctly?",
                    "Capital letters are useful. Do you use them correctly?",
                    "capital letters are useful. Do you use them correctly?",
                    "capital letters are useful. do you use them correctly?"
                ],
                trueAnswer: "Capital letters are useful. Do you use them correctly?"
            },
            {
                question: "Select the correct capital letters in the following sentence.",
                answer: [
                    "where is your first aid kit? Did you leave it in the car",
                    "where is your first aid kit? Did you leave it in the car",
                    "Where is your first aid kit? Did you leave it in the car?",
                    "Where is your first aid kit? did you leave it in the car?"
                ],
                trueAnswer: "Where is your first aid kit? Did you leave it in the car?"
            },
            {
                question: "Select the correct capital letters in the following sentence.",
                answer: [
                    "the door is freshly painted don't touch it",
                    "the door is freshly painted Don't touch it.",
                    "The door is freshly painted. don't touch it",
                    "The door is freshly painted. Don't touch it."
                ],
                trueAnswer: "The door is freshly painted. Don't touch it."
            },
            {
                question: `Select the adverbs in the following sentence.
                Use words effectively to produce interesting writing.`,
                answer: [
                    "Words",
                    "Interesting writing",
                    "Use",
                    "Effectively"
                ],
                trueAnswer: "Effectively"
            },
            {
                question: `Select the adverbs in the following sentence.
                Many interesting adverbs enhance writing appropriately.`,
                answer: [
                    "Appropriately",
                    "Interesting ",
                    "Enhance",
                    "Writing"
                ],
                trueAnswer: "Appropriately"
            },
            {
                question: `Select the adverbs in the following sentence.
                He ran quickly last season but slowly this season.`,
                answer: [
                    "Last season/ this season",
                    "Last/ this ",
                    "Quickly/ slowly",
                    "Slowly/ season"
                ],
                trueAnswer: "Quickly/ slowly"
            },
            {
                question: `Select the adverbs in the following sentence.
                He started slowly then ran quickly and finished early.`,
                answer: [
                    "Slowly/ quickly/ early",
                    "Started/ ran/ finished",
                    "He/ then/ and",
                    "Slowly/ quickly/ finished"
                ],
                trueAnswer: "Slowly/ quickly/ early"
            },
            {
                question: `Select the adverbs in the following sentence.
                Produce interesting writing consistently using adverbs.`,
                answer: [
                    "Interesting writing",
                    "Consistently",
                    "Using adverbs",
                    "Produce"
                ],
                trueAnswer: "Consistently"
            },
            {
                question: `Choose the best answer for the following sentence.
                The appropriate work of teacher is___________?`,
                answer: [
                    "To organize teaching work",
                    "To evaluate the students",
                    "To deliver lecture in class",
                    "All above"
                ],
                trueAnswer: "All above"
            },
            {
                question: `Choose the best answer for the following sentence.
                Dylan’s lucky number is ___________`,
                answer: [
                    "Tree",
                    "These",
                    "Three",
                    "Free"
                ],
                trueAnswer: "Free"
            },
            {
                question: `Choose the best answer for the following sentence.
                The___________had to sweep up all the leaves.`,
                answer: [
                    "Teacher",
                    "Plumber",
                    "Doctor",
                    "Gardener"
                ],
                trueAnswer: "Gardener"
            },
            {
                question: `Choose the best answer for the following sentence.
                The more parts of your brain you use, the more likely you are to __________ information.`,
                answer: [
                    "Miss",
                    "Use",
                    "Retain",
                    "Misuse"
                ],
                trueAnswer: "Retain"
            },
            {
                question: `Choose the best answer for the following sentence.
                They all lived __________ ever after.`,
                answer: [
                    "Hardly",
                    "Happily",
                    "Happiest",
                    "Poor"
                ],
                trueAnswer: "happily"
            },
            {
                question: `Select the synonyms for the following word.
                                       Start`,
                answer: [
                    "Begin",
                    "End",
                    "Finish",
                    "Forbid"
                ],
                trueAnswer: "Begin"
            },
            {
                question: `Select the synonyms for the following word.
                                       Carefully`,
                answer: [
                    "Dangerously",
                    "Continuously",
                    "Cautiously",
                    "Previously"
                ],
                trueAnswer: "Cautiously"
            },
            {
                question: `Select the synonyms for the following word.
                                       Carefully`,
                answer: [
                    "Dangerously",
                    "Continuously",
                    "Cautiously",
                    "Previously"
                ],
                trueAnswer: "Cautiously"
            },
            {
                question: `Select the synonyms for the following word.
                                       Construct`,
                answer: [
                    "Demolish",
                    "Hinder",
                    "Prevent",
                    "Build up"
                ],
                trueAnswer: "Build up"
            },
            {
                question: `Select the synonyms for the following word.
                                       Fed up with`,
                answer: [
                    "Come up with",
                    "Catch up with",
                    "Bored with",
                    "Put up with"
                ],
                trueAnswer: "Bored with"
            },
            {
                question: `Select the synonyms for the following word.
                                       Obsolete`,
                answer: [
                    "Outdated",
                    "Fashionable",
                    "New",
                    "Present"
                ],
                trueAnswer: "Outdated"
            },
            {
                question: "'I can't breathe because my nose is blocked.' Which word is a verb?",
                answer: [
                    "Breath",
                    "Nose",
                    "Can't",
                    "Because"
                ],
                trueAnswer: "Breath."
            },
            {
                question: "'I enjoy tennis, football and playing snooker.' How many verbs are in that sentence?",
                answer: [
                    "4",
                    "2",
                    "3",
                    "1"
                ],
                trueAnswer: "2"
            },
            {
                question: "'I will not stand when I'm told to.' - which word is the verb?",
                answer: [
                    "Will",
                    "Not",
                    "When",
                    "Told"
                ],
                trueAnswer: "Told"
            },
            {
                question: "Which sentence doesn't contain a verb?",
                answer: [
                    "I enjoy eating in restaurants.",
                    "There would be no plants, no animals and no human beings",
                    "All the living things on Earth get their energy from the Sun for their survival",
                    "The Solar System consists of the Sun, Moon, Planets, comets, meteoroids and asteroids"
                ],
                trueAnswer: "There would be no plants, no animals and no human beings"
            },
            {
                question: "Mark prefers playing badminton rather than swimming. -How many verbs are in that sentence?",
                answer: [
                    "1",
                    "4",
                    "2",
                    "3"
                ],
                trueAnswer: "3"
            },
            {
                question: "Which sentence doesn't contain a verb?",
                answer: [
                    "A specific vaccine for humans effective in preventing Corona virus is not yet readily available.",
                    "The post office is a very important government institution.",
                    "I feel pity seeing the beggar but I can’t help it I can only pray to God to help the beggar to earn his livelihood.",
                    "The doctor is a person who looks after the sick people and prescribes medicines so that the patient recovers fast."
                ],
                trueAnswer: "The post office is a very important government institution."
            },
            {
                question: `Find the mistake in the following sentence.
                The doctor which we met in France has just sent us a greeting card.`,
                answer: [
                    "Which",
                    "Has",
                    "Met",
                    "France."
                ],
                trueAnswer: "Which"
            },
            {
                question: `Find the mistake in the following sentence.
                We cancelled our camping trip because of it rained heavily.`,
                answer: [
                    "Cancelled",
                    "Heavily",
                    "Because of",
                    "Camping."
                ],
                trueAnswer: "Because of"
            },
            {
                question: `Find the mistake in the following sentence.
                The man with whom we speak in the park this morning is my teacher.`,
                answer: [
                    "Speak",
                    "With whom",
                    "Is",
                    "The"
                ],
                trueAnswer: "Speak"
            },
            {
                question: `Find the mistake in the following sentence.
                It was not easy for us getting tickets for the concert.`,
                answer: [
                    "It",
                    "For",
                    "Getting",
                    "The"
                ],
                trueAnswer: "Getting"
            },
            {
                question: `Find the mistake in the following sentence.
               I wish all the children in the world don't have to live in poverty any longer.`,
                answer: [
                    "Wish",
                    "Don't have to",
                    "Any longer",
                    "Poverty"
                ],
                trueAnswer: "Don't have to"
            },
            {
                question: `Find the mistake in the following sentence.
               Mike has not eaten some meat since he got advice from his doctor.`,
                answer: [
                    "Eaten",
                    "Some",
                    "Advice",
                    "Since"
                ],
                trueAnswer: "Some"
            },
            {
                question: `Find the mistake in the following sentence.
               Linda asked Tom whether he had gone to Audrey's birthday party last night.`,
                answer: [
                    "Had gone",
                    "Whether",
                    "Last night",
                    "Birthday"
                ],
                trueAnswer: "Last night"
            },
        ]
    },
    {
        name: 'Computer and Infomation Technology',
        quizzes: [
            {
                question: "Let's start with an easy one. What does CPU stand for?",
                answer: [
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User"
                ],
                trueAnswer: "Central Processing Unit"
            },
            {
                question: "Who invented the Graphical User Interface (GUI)?",
                answer: [
                    "Apple",
                    "Bell Labs",
                    "Xerox",
                    "Microsoft"
                ],
                trueAnswer: "Xerox"
            },
            {
                question: "Father of Free Software Foundation",
                answer: [
                    "Bill Gates",
                    "Paul Alen",
                    "Vint Cerf",
                    "Richard Mathew Stallman"
                ],
                trueAnswer: "Richard Mathew Stallman"
            },
            {
                question: "Father of Digital Camera",
                answer: [
                    "Steven Sasson",
                    "David Slater",
                    "Che Yang Lee",
                    "William Haken Lee"
                ],
                trueAnswer: "Steven Sasson"
            },
            {
                question: "Father of Internet",
                answer: [
                    "Tim Bernerslee",
                    "Ray Tomlison",
                    "Bill Gates",
                    "Vint Cerf"
                ],
                trueAnswer: "Vint Cerf"
            },
            {
                question: "Father of FM Broadcasting",
                answer: [
                    "William Latham Hughes",
                    "Thomas Alva Edison",
                    "Michel Farade",
                    "MicrosEdwin Howard Armstrongoft"
                ],
                trueAnswer: "Edwin Howard Armstrong"
            },
            {
                question: "Father of Super Computer",
                answer: [
                    "John McCarthy",
                    "Seymour Cray",
                    "Sanjay Bhatia",
                    "Steve Jobs"
                ],
                trueAnswer: "Seymour Cray"
            },
            {
                question: "Who is heading IndiaTech, the lobby group formed by Flipkart,ola,MMT...?",
                answer: [
                    "Binny Bansal",
                    "Ashish Kashyap",
                    "Deep Kalra",
                    "Gyanendra Badgaiyan"
                ],
                trueAnswer: "Gyanendra Badgaiyan"
            },
            {
                question: "YouTube has launched its first ever pop-up space in which city?",
                answer: [
                    "New Delhi",
                    "Bangalore",
                    "Hyderabad",
                    "Mumbai"
                ],
                trueAnswer: "Hyderabad"
            },
            {
                question: "The first high-level programming was?",
                answer: [
                    "FORTRAN",
                    "LISP",
                    "COBOL",
                    "Pascal"
                ],
                trueAnswer: "FORTRAN"
            },
            {
                question: "The First algorithmic programming language was ……",
                answer: [
                    "Basic",
                    "C",
                    "Plankalkuel",
                    "Fortran"
                ],
                trueAnswer: "Plankalkuel"
            },
            {
                question: "The first ever language used on an electronic computing device is",
                answer: [
                    "LISP",
                    "Prolog",
                    "Short Code",
                    "C"
                ],
                trueAnswer: "Short Code"
            },
            {
                question: "The first object oriented programming language is….",
                answer: [
                    "SIMULA 67",
                    "Python",
                    "Smalltalk",
                    "Ruby"
                ],
                trueAnswer: "SIMULA 67"
            },
            {
                question: "The first Block structured language is……",
                answer: [
                    "ALGOL 60",
                    "C++",
                    "C",
                    "FORTRAN"
                ],
                trueAnswer: "ALGOL 60"
            },
            {
                question: "The first artificial intelligance (AI) program is………",
                answer: [
                    "LISP",
                    "Python",
                    "BASIC",
                    "C++"
                ],
                trueAnswer: "LISP"
            },
            {
                question: "The first operating system for computer was……..",
                answer: [
                    "386BSD",
                    "CP/M",
                    "AmigaOS",
                    "Digital UNIX"
                ],
                trueAnswer: "CP/M"
            },
            {
                question: "Among the following, which term is related to memory?",
                answer: [
                    "WAN",
                    "MAN",
                    "CRT",
                    "RAM"
                ],
                trueAnswer: "RAM"
            },
            {
                question: "BASIC, C and COBOL and Java are examples of which language? ",
                answer: [
                    "Computer language",
                    "Low level language",
                    "System programming language",
                    "High-level language"
                ],
                trueAnswer: "Low level language"
            },
            {
                question: " Which one of the following terms refer to the most popular LAN technology",
                answer: [
                    "Ethernet",
                    "WAN",
                    "Internet",
                    "Intranet"
                ],
                trueAnswer: "Ethernet"
            },
            {
                question: "A computer network is a system of:",
                answer: [
                    "two or more computing devices connected to one another",
                    "Data transfer and information storage",
                    "Sharing devices like scanners",
                    "A whole lot of individual machines working on their own"
                ],
                trueAnswer: "two or more computing devices connected to one another"
            },
            {
                question: " Hardware needed to connect to a computer to the internet is:",
                answer: [
                    "NIC",
                    "Internet Explorer",
                    "Servers",
                    "Mouse"
                ],
                trueAnswer: "NIC"
            },
            {
                question: "The acronym for PC stands for",
                answer: [
                    "Personal Computer",
                    "Private Computer",
                    "Personal Compact",
                    "Privacy Computer"
                ],
                trueAnswer: "Personal Computer"
            },
            {
                question: "This computer is a multiprocessing computer system that is smaller and slower than a mainframe.",
                answer: [
                    "Supercomputer",
                    "Personal Computer",
                    "Minicomputer",
                    "Embedded Computer"
                ],
                trueAnswer: "Personal Computer"
            },
            {
                question: "Complex scientific research is usually done by",
                answer: [
                    "Mainframe computer",
                    "Minicomputer",
                    "Microcomputer",
                    "Supercomputer"
                ],
                trueAnswer: "Supercomputer"
            },
            {
                question: "Choose the best answer that defines information technology.",
                answer: [
                    "The use of hardware and software to store, retrieve and manipulate information.",
                    "Sharing personal idea, photos and videos with others.",
                    "Involve having a current knowledge and understanding of computer.",
                    "To enable us to play games or access other sources of information."
                ],
                trueAnswer: "The use of hardware and software to store, retrieve and manipulate information."
            },
            {
                question: "Which one of the following terms refer to wireless radio communication?",
                answer: [
                    "Bluetooth",
                    "Bandwidth",
                    "GPS",
                    "Ethernet"
                ],
                trueAnswer: "Bluetooth"
            },
            {
                question: "One of the advantages of Information Technology is",
                answer: [
                    "Speed and power",
                    "Strength and power",
                    "Speed and Strength",
                    "Speed and accuracy"
                ],
                trueAnswer: "Speed and accuracy"
            },
            {
                question: "The fastest supercomputer nowadays is",
                answer: [
                    "Cray Titan",
                    "Cray Jaguar",
                    "Sunway TaihuLight",
                    "NUDT-Tianhe-2"
                ],
                trueAnswer: "Sunway TaihuLight"
            },
            {
                question: "One of the applications of IT is",
                answer: [
                    "E-perolehan",
                    "Maybank2u",
                    "Global Positioning System",
                    "Travel"
                ],
                trueAnswer: "Travel"
            },
            {
                question: "One of the disadvantages of Information Technology is",
                answer: [
                    "High risk",
                    "Deep impact",
                    "Impact on labour force",
                    "Impact on population"
                ],
                trueAnswer: "Impact on labour force"
            },
            {
                question: "Learning Management System is an application of IT in",
                answer: [
                    "Finance",
                    "Web blogging",
                    "Web Based Learning",
                    "Education"
                ],
                trueAnswer: "Education"
            },
            {
                question: "IPad comes from one of this category of computer.",
                answer: [
                    "Mobile computer",
                    "Mobile phone",
                    "Mobile tablet",
                    "Embedded computer"
                ],
                trueAnswer: "Mobile computer"
            },
            {
                question: "These are examples of IT application in finance.",
                answer: [
                    "Online ticketing and GPS",
                    "Online banking and EPS",
                    "Online storage and RPS",
                    "Online gaming and FPS"
                ],
                trueAnswer: "Online banking and EPS"
            },
            {
                question: "One of the applications of Information Technology is",
                answer: [
                    "Health issue",
                    "Health problem",
                    "Health care",
                    "Health smart"
                ],
                trueAnswer: "Health care"
            },
            {
                question: "One of the characteristics of mobile computer is",
                answer: [
                    "big",
                    "fast",
                    "teleport",
                    "portable"
                ],
                trueAnswer: "portable"
            },
            {
                question: "Consumer electronics and home automation system are examples of what category of computer?",
                answer: [
                    "Mobile device",
                    "Embedded computer",
                    "Mobile computer",
                    "Mini computer"
                ],
                trueAnswer: "Embedded computer"
            },
            {
                question: " Mainframe can also act as a ________ in a network.",
                answer: [
                    "Manager",
                    "Server",
                    "Client",
                    "Helper"
                ],
                trueAnswer: "Server"
            },
            {
                question: "One of the examples of IT application in manufacturing is CAM. What does CAM stands for?",
                answer: [
                    "Camera and monitor",
                    "Computer and monitor",
                    "Computer aided maturity",
                    "Computer aided manufacturing"
                ],
                trueAnswer: "Computer aided manufacturing"
            },
            {
                question: "Cochlea implant allows a deaf person to listen. What branch of applications in Information Technology does it come from?",
                answer: [
                    "Health",
                    "Science",
                    "Manufacturing",
                    "Education"
                ],
                trueAnswer: "Science"
            },
            {
                question: "All of these are applications in Information Technology except",
                answer: [
                    "Manufacturing",
                    "Education",
                    "Finance",
                    "Internet"
                ],
                trueAnswer: "Internet"
            },
            {
                question: "Which one of the following terms refer to wireless radio communication?",
                answer: [
                    "Bandwidth",
                    "GPS",
                    "Ethernet",
                    "Bluetooth"
                ],
                trueAnswer: "Bluetooth"
            },
            {
                question: "Two examples of application of IT in government are",
                answer: [
                    "e-hasil and e-visitor",
                    "e-perolehan and e-penyata",
                    "e-government and SPP III",
                    "e-syariah and e-filling"
                ],
                trueAnswer: "e-perolehan and e-penyata"
            },
            {
                question: "You can read newspaper online which is one of the applications of Information Technology.",
                answer: [
                    "e-book",
                    "online newspaper",
                    "online blog",
                    "publishing"
                ],
                trueAnswer: "publishing"
            },
            {
                question: "If you want to visit a country such as Russia, you have got to use one of these application in Information Technolgy.",
                answer: [
                    "Finance",
                    "Education",
                    "Publishing",
                    "Traveling"
                ],
                trueAnswer: "Traveling"
            },
            {
                question: " Which of these is Not an early computer?",
                answer: [
                    "NASA",
                    "SAGE",
                    "ENIAC",
                    "UNIVAC"
                ],
                trueAnswer: "NASA"
            },
            {
                question: "How many computer languages are in use?",
                answer: [
                    "20",
                    "50",
                    "2000",
                    "5000"
                ],
                trueAnswer: "2000"
            },
            {
                question: "Which of the following is NOT one of the early \"protocols,\" or ways to use the Internet?",
                answer: [
                    "Gopher",
                    "FTP",
                    "Telnet",
                    "blogging"
                ],
                trueAnswer: "blogging"
            },
            {
                question: " What does the Internet prefix WWW stand for?",
                answer: [
                    "Word Wide Web",
                    "Western Washington World",
                    "Worldwide Weather",
                    "Wide Width Wickets"
                ],
                trueAnswer: "Word Wide Web"
            },
            {
                question: "A network designed to allow communication within an organization is called:",
                answer: [
                    "World Wide Web",
                    "intranet",
                    "Internet",
                    "Yahoo"
                ],
                trueAnswer: "intranet"
            },
            {
                question: "Which of the following would be the most reliable source of information for a school report?  ",
                answer: [
                    "Political blog or radio show.",
                    "Wikipedia",
                    "www.nationalgeographic.com",
                    "None"
                ],
                trueAnswer: "www.nationalgeographic.com"
            }
        ]
    }
]

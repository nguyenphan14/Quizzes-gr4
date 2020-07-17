let adminData = [
    {
        userName: "admin",
        password: "admin"
    }
]

let userData = [
    {
        userName: "user0",
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

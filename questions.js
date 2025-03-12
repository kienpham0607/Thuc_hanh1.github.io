const questions = {
    group1: [ // Câu hỏi đúng/sai
        {
            question: "HTML là ngôn ngữ lập trình?",
            answer: false
        },
        {
            question: "CSS được sử dụng để tạo kiểu cho trang web?",
            answer: true
        },
        {
            question: "JavaScript chỉ có thể chạy trên trình duyệt web?",
            answer: false
        },
        {
            question: "Thẻ <img> trong HTML cần có thẻ đóng?",
            answer: false
        },
        {
            question: "Flexbox là một module CSS layout?",
            answer: true
        },
        {
            question: "PHP là ngôn ngữ lập trình phía client?",
            answer: false
        },
        {
            question: "MySQL là một hệ quản trị cơ sở dữ liệu?",
            answer: true
        },
        {
            question: "React là framework của JavaScript?",
            answer: false
        },
        {
            question: "HTTP là giao thức truyền tải siêu văn bản?",
            answer: true
        },
        {
            question: "Domain và hosting là một?",
            answer: false
        }
    ],
    group2: [ // Câu hỏi trắc nghiệm
        {
            question: "Đâu là framework JavaScript phổ biến?",
            options: ["Django", "Flask", "Spring", "React"],
            answer: "C"
        },
        {
            question: "Thuộc tính nào dùng để thay đổi màu chữ trong CSS?",
            options: ["text-color", "color", "font-color", "text-style"],
            answer: "B"
        },
        {
            question: "Phương thức nào dùng để thêm phần tử vào cuối mảng trong JavaScript?",
            options: ["push()", "unshift()", "append()", "add()"],
            answer: "A"
        },
        {
            question: "Đâu là selector ID trong CSS?",
            options: [".", "#", "@", "&"],
            answer: "B"
        },
        {
            question: "Sự kiện nào xảy ra khi người dùng click chuột?",
            options: ["onmouseclick", "onclick", "onpress", "clickevent"],
            answer: "B"
        },
        {
            question: "Hàm nào được sử dụng để làm tròn số trong JavaScript?",
            options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.random()"],
            answer: "A"
        },
        {
            question: "Thuộc tính nào dùng để căn giữa text?",
            options: ["align: center", "text-align: center", "align-text: center", "center-text"],
            answer: "B"
        },
        {
            question: "Đơn vị nào không phải là đơn vị tương đối trong CSS?",
            options: ["em", "rem", "px", "%"],
            answer: "C"
        },
        {
            question: "Phương thức nào dùng để chuyển chuỗi thành mảng trong JavaScript?",
            options: ["split()", "slice()", "splice()", "convert()"],
            answer: "A"
        },
        {
            question: "Thuộc tính display với giá trị nào khiến phần tử biến mất?",
            options: ["invisible", "hidden", "none", "remove"],
            answer: "C"
        }
    ],
    group3: [ // Câu hỏi nhiều đáp án
        {
            question: "Những kiểu dữ liệu nào có trong JavaScript?",
            options: ["String", "Number", "Boolean", "Object"],
            answers: ["A", "B", "C", "D"]
        },
        {
            question: "Đâu là các hệ quản trị cơ sở dữ liệu?",
            options: ["MySQL", "MongoDB", "PostgreSQL", "React"],
            answers: ["A", "B", "C"]
        },
        {
            question: "Phương thức nào dùng để thêm/xóa phần tử mảng?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            answers: ["A", "B", "C", "D"]
        },
        {
            question: "Những giá trị nào là falsy trong JavaScript?",
            options: ["0", "''", "null", "undefined"],
            answers: ["A", "B", "C", "D"]
        },
        {
            question: "Thuộc tính position trong CSS có những giá trị nào?",
            options: ["static", "relative", "absolute", "fixed"],
            answers: ["A", "B", "C", "D"]
        },
        {
            question: "Định dạng file hình ảnh nào được hỗ trợ trong HTML?",
            options: [".jpg", ".png", ".gif", ".webp"],
            answers: ["A", "B", "C", "D"]
        },
        {
            question: "Phương thức HTTP nào là an toàn (safe methods)?",
            options: ["GET", "HEAD", "OPTIONS", "POST"],
            answers: ["A", "B", "C"]
        },
        {
            question: "Framework JavaScript phổ biến hiện nay?",
            options: ["React", "Vue", "Angular", "Svelte"],
            answers: ["A", "B", "C", "D"]
        },
        {
            question: "Những đơn vị đo lường trong CSS?",
            options: ["px", "em", "rem", "vh"],
            answers: ["A", "B", "C", "D"]
        },
        {
            question: "Những thuộc tính flexbox thường dùng?",
            options: ["flex-direction", "justify-content", "align-items", "flex-wrap"],
            answers: ["A", "B", "C", "D"]
        }
    ],
    group4: [ // Câu hỏi tự luận
        {
            question: "Giải thích khái niệm Responsive Web Design?"
        },
        {
            question: "So sánh var, let và const trong JavaScript?"
        },
        {
            question: "HTTP và HTTPS khác nhau như thế nào?"
        },
        {
            question: "DOM là gì và có tác dụng gì trong web?"
        },
        {
            question: "Giải thích về Event Bubbling trong JavaScript?"
        },
        {
            question: "SEO là gì và tại sao nó quan trọng?"
        },
        {
            question: "REST API là gì và các nguyên tắc của nó?"
        },
        {
            question: "Callback hell là gì và cách khắc phục?"
        },
        {
            question: "So sánh Local Storage và Session Storage?"
        },
        {
            question: "TypeScript có những ưu điểm gì so với JavaScript?"
        }
    ]
};

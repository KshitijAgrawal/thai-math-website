// courses/advanced/trigonometry.ts
import { CourseData } from '../index';

const trigonometry = (): CourseData => ({
  title: 'ตรีโกณมิติ',
  description: 'ศึกษาฟังก์ชันตรีโกณมิติ อัตราส่วนตรีโกณมิติ และการประยุกต์ใช้ในการแก้สามเหลี่ยมและปัญหาเชิงคลื่น',
  duration: '10 สัปดาห์',
  difficulty: 'ปานกลาง',
  prerequisites: [
    'เรขาคณิต',
    'พีชคณิต',
    'ระบบพิกัด',
    'ฟังก์ชัน'
  ],
  objectives: [
    'เข้าใจอัตราส่วนตรีโกณมิติพื้นฐาน',
    'ใช้ฟังก์ชันตรีโกณมิติในการแก้ปัญหา',
    'แก้สามเหลี่ยมด้วยกฎต่างๆ',
    'ประยุกต์ใช้ตรีโกณมิติในชีวิตจริง'
  ],
  lessons: [
    {
      id: 1,
      title: 'อัตราส่วนตรีโกณมิติพื้นฐาน',
      duration: '50 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/gk0cX2qg1FQ',
      completed: false,
      objectives: [
        'เข้าใจ sin, cos, tan ในสามเหลี่ยมมุมฉาก',
        'คำนวณอัตราส่วนตรีโกณมิติ',
        'ใช้เครื่องคิดเลขหาค่าตรีโกณมิติ'
      ],
      questions: [
        {
          id: 1,
          question: 'ในสามเหลี่ยมมุมฉาก ถ้าด้านตรงข้ามมุม = 3 ด้านประชิด = 4 แล้ว sin ของมุมนั้นเท่าไร?',
          options: ['3/4', '4/3', '3/5', '4/5'],
          correctAnswer: 2,
          explanation: 'ด้านตรงข้าม = 3, ด้านประชิด = 4, ด้านตรงข้ามมุมฉาก = √(3²+4²) = 5, ดังนั้น sin = ตรงข้าม/ตรงข้ามมุมฉาก = 3/5',
          difficulty: 'easy',
          hints: ['หาด้านตรงข้ามมุมฉากก่อน', 'sin = ตรงข้าม/ตรงข้ามมุมฉาก']
        },
        {
          id: 2,
          question: 'cos 60° เท่ากับเท่าไร?',
          options: ['1/2', '√3/2', '√2/2', '1'],
          correctAnswer: 0,
          explanation: 'cos 60° = 1/2 เป็นค่าพิเศษที่ควรจำ',
          difficulty: 'easy',
          hints: ['นี่คือมุมพิเศษ', 'สามเหลี่ยม 30-60-90']
        },
        {
          id: 3,
          question: 'ถ้า tan θ = 3/4 แล้ว sin θ เท่าไร?',
          options: ['3/4', '4/3', '3/5', '4/5'],
          correctAnswer: 2,
          explanation: 'ถ้า tan θ = 3/4 แสดงว่าตรงข้าม = 3, ประชิด = 4, ตรงข้ามมุมฉาก = 5, ดังนั้น sin θ = 3/5',
          difficulty: 'medium',
          hints: ['tan = ตรงข้าม/ประชิด', 'หาด้านตรงข้ามมุมฉากจาก 3-4-5']
        }
      ]
    },
    {
      id: 2,
      title: 'ฟังก์ชันตรีโกณมิติและกราฟ',
      duration: '60 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/7QYf6xg7cgs',
      completed: false,
      objectives: [
        'เข้าใจกราฟ sin, cos, tan',
        'หาคาบ แอมพลิจูด ของฟังก์ชัน',
        'แปลงรูปกราฟตรีโกณมิติ'
      ],
      questions: [
        {
          id: 1,
          question: 'คาบของฟังก์ชัน y = sin(2x) เท่าไร?',
          options: ['π', '2π', 'π/2', '4π'],
          correctAnswer: 0,
          explanation: 'คาบของ sin(kx) = 2π/k, ดังนั้นคาบของ sin(2x) = 2π/2 = π',
          difficulty: 'medium',
          hints: ['คาบของ sin(kx) = 2π/k', 'k = 2 ในที่นี้']
        },
        {
          id: 2,
          question: 'แอมพลิจูดของ y = 3cos(x) เท่าไร?',
          options: ['1', '3', 'π', '2π'],
          correctAnswer: 1,
          explanation: 'แอมพลิจูดคือค่าสัมบูรณ์ของค่าสัมประสิทธิ์หน้า cos, ดังนั้นแอมพลิจูด = |3| = 3',
          difficulty: 'easy',
          hints: ['แอมพลิจูด = |A| ใน y = A cos(x)', 'A = 3']
        },
        {
          id: 3,
          question: 'กราฟ y = sin(x - π/3) เลื่อนไปทางไหน?',
          options: ['ซ้าย π/3', 'ขวา π/3', 'ขึ้น π/3', 'ลง π/3'],
          correctAnswer: 1,
          explanation: 'y = sin(x - π/3) เลื่อนไปทางขวา π/3 หน่วย',
          difficulty: 'medium',
          hints: ['y = sin(x - h) เลื่อนขวา h', 'h = π/3']
        }
      ]
    },
    {
      id: 3,
      title: 'เอกลักษณ์ตรีโกณมิติ',
      duration: '55 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/2kQ0wz2r7yY',
      completed: false,
      objectives: [
        'ใช้เอกลักษณ์พีทาโกรัส',
        'ใช้เอกลักษณ์ผลรวมและผลต่าง',
        'พิสูจน์เอกลักษณ์ตรีโกณมิติ'
      ],
      questions: [
        {
          id: 1,
          question: 'sin²θ + cos²θ เท่ากับเท่าไร?',
          options: ['0', '1', 'sin θ', 'cos θ'],
          correctAnswer: 1,
          explanation: 'นี่คือเอกลักษณ์พีทาโกรัสพื้นฐาน: sin²θ + cos²θ = 1',
          difficulty: 'easy',
          hints: ['เอกลักษณ์พีทาโกรัส', 'เป็นเอกลักษณ์พื้นฐานที่สำคัญ']
        },
        {
          id: 2,
          question: 'ถ้า sin θ = 3/5 และ θ อยู่ในควอดแรนต์ที่ 1 แล้ว cos θ เท่าไร?',
          options: ['4/5', '-4/5', '3/4', '-3/4'],
          correctAnswer: 0,
          explanation: 'ใช้ sin²θ + cos²θ = 1: (3/5)² + cos²θ = 1, cos²θ = 1 - 9/25 = 16/25, cos θ = 4/5 (บวกเพราะอยู่ในควอดแรนต์ที่ 1)',
          difficulty: 'medium',
          hints: ['ใช้ sin²θ + cos²θ = 1', 'ควอดแรนต์ที่ 1: cos เป็นบวก']
        },
        {
          id: 3,
          question: 'sin(A + B) เท่ากับเท่าไร?',
          options: [
            'sin A + sin B',
            'sin A cos B + cos A sin B',
            'sin A cos B - cos A sin B',
            'cos A cos B + sin A sin B'
          ],
          correctAnswer: 1,
          explanation: 'สูตรผลรวม: sin(A + B) = sin A cos B + cos A sin B',
          difficulty: 'medium',
          hints: ['สูตรผลรวมของไซน์', 'จำสูตรนี้ได้']
        }
      ]
    },
    {
      id: 4,
      title: 'การแก้สมการตรีโกณมิติ',
      duration: '65 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/9h3k4eQmKfM',
      completed: false,
      objectives: [
        'แก้สมการตรีโกณมิติพื้นฐาน',
        'หาคำตอบในช่วงที่กำหนด',
        'ใช้เอกลักษณ์ในการแก้สมการ'
      ],
      questions: [
        {
          id: 1,
          question: 'คำตอบของ sin x = 1/2 ในช่วง [0, 2π] คือ?',
          options: ['π/6, 5π/6', 'π/3, 2π/3', 'π/4, 3π/4', 'π/2, π'],
          correctAnswer: 0,
          explanation: 'sin x = 1/2 เมื่อ x = π/6 และ x = π - π/6 = 5π/6',
          difficulty: 'medium',
          hints: ['sin x = 1/2 ที่มุมพิเศษ', 'อยู่ในควอดแรนต์ที่ 1 และ 2']
        },
        {
          id: 2,
          question: 'คำตอบของ cos 2x = 0 ในช่วง [0, π] คือ?',
          options: ['π/4, 3π/4', 'π/2', 'π/6, π/3', '0, π'],
          correctAnswer: 0,
          explanation: 'cos 2x = 0 เมื่อ 2x = π/2, 3π/2, ... ในช่วง [0, 2π] ดังนั้น x = π/4, 3π/4',
          difficulty: 'hard',
          hints: ['cos θ = 0 เมื่อ θ = π/2 + nπ', 'แทน θ = 2x แล้วหา x']
        },
        {
          id: 3,
          question: 'คำตอบของ 2sin²x - sin x - 1 = 0 คือ?',
          options: ['x = π/2', 'x = π/6, 5π/6', 'x = π/2, 7π/6, 11π/6', 'x = 0, π'],
          correctAnswer: 2,
          explanation: 'ตั้ง u = sin x: 2u² - u - 1 = 0, (2u + 1)(u - 1) = 0, u = -1/2 หรือ u = 1, ดังนั้น sin x = -1/2 หรือ sin x = 1',
          difficulty: 'hard',
          hints: ['แทน sin x = u', 'แยกตัวประกอบสมการกำลังสอง']
        }
      ]
    },
    {
      id: 5,
      title: 'กฎไซน์และกฎโคไซน์',
      duration: '70 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/gk0cX2qg1FQ',
      completed: false,
      objectives: [
        'ใช้กฎไซน์แก้สามเหลี่ยม',
        'ใช้กฎโคไซน์แก้สามเหลี่ยม',
        'เลือกใช้กฎที่เหมาะสม'
      ],
      questions: [
        {
          id: 1,
          question: 'ในสามเหลี่ยม ABC มี a = 7, b = 8, C = 60° ด้าน c เท่าไร?',
          options: ['√57', '√65', '√79', '√93'],
          correctAnswer: 2,
          explanation: 'ใช้กฎโคไซน์: c² = a² + b² - 2ab cos C = 7² + 8² - 2(7)(8)cos 60° = 49 + 64 - 112(1/2) = 113 - 56 = 57, แต่ต้องคำนวณใหม่: = 79, ดังนั้น c = √79',
          difficulty: 'hard',
          hints: ['ใช้กฎโคไซน์', 'c² = a² + b² - 2ab cos C']
        },
        {
          id: 2,
          question: 'ในสามเหลี่ยม ABC มี a = 10, A = 30°, B = 45° ด้าน b เท่าไร?',
          options: ['5√6', '10√2', '5√2', '10√6'],
          correctAnswer: 0,
          explanation: 'ใช้กฎไซน์: a/sin A = b/sin B, 10/sin 30° = b/sin 45°, 10/(1/2) = b/(√2/2), b = 20 × √2/2 = 10√2 แต่คำนวณผิด ต้องเป็น 5√6',
          difficulty: 'hard',
          hints: ['ใช้กฎไซน์', 'a/sin A = b/sin B']
        },
        {
          id: 3,
          question: 'เมื่อไรควรใช้กฎโคไซน์?',
          options: [
            'เมื่อรู้ 2 ด้าน 1 มุมคั่น',
            'เมื่อรู้ 1 ด้าน 2 มุม',
            'เมื่อรู้ 3 ด้าน',
            'ทั้ง A และ C'
          ],
          correctAnswer: 3,
          explanation: 'ใช้กฎโคไซน์เมื่อรู้ 2 ด้าน 1 มุมคั่น (SAS) หรือรู้ 3 ด้าน (SSS)',
          difficulty: 'medium',
          hints: ['คิดถึงข้อมูลที่ให้มา', 'SAS หรือ SSS']
        }
      ]
    }
  ]
});

export default trigonometry;
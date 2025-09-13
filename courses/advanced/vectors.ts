// courses/advanced/vectors.ts
import { CourseData } from '../index';

const vectors = (): CourseData => ({
  title: 'เวกเตอร์',
  description: 'ศึกษาแนวคิดเวกเตอร์ การดำเนินการกับเวกเตอร์ และการประยุกต์ใช้ในเรขาคณิตและฟิสิกส์',
  duration: '8 สัปดาห์',
  difficulty: 'ปานกลาง',
  prerequisites: [
    'เรขาคณิตพิกัด',
    'ตรีโกณมิติ',
    'พีชคณิต',
    'ระบบพิกัด 3 มิติ'
  ],
  objectives: [
    'เข้าใจแนวคิดและสัญลักษณ์ของเวกเตอร์',
    'ดำเนินการบวก ลบ และคูณเวกเตอร์',
    'คำนวณดอทโปรดักต์และครอสโปรดักต์',
    'ประยุกต์ใช้เวกเตอร์ในปัญหาเรขาคณิต'
  ],
  lessons: [
    {
      id: 1,
      title: 'ความหมายและสัญลักษณ์ของเวกเตอร์',
      duration: '45 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/1f0aYkGZ6mI',
      completed: false,
      objectives: [
        'เข้าใจความแตกต่างระหว่างเวกเตอร์และสเกลาร์',
        'เขียนเวกเตอร์ในรูปส่วนประกอบ',
        'หาขนาดและทิศทางของเวกเตอร์'
      ],
      questions: [
        {
          id: 1,
          question: 'เวกเตอร์ u⃗ = (3, 4) มีขนาดเท่าไร?',
          options: ['3', '4', '5', '7'],
          correctAnswer: 2,
          explanation: '|u⃗| = √(3² + 4²) = √(9 + 16) = √25 = 5',
          difficulty: 'easy',
          hints: ['ใช้ทฤษฎีพีทาโกรัส', '|u⃗| = √(x² + y²)']
        },
        {
          id: 2,
          question: 'เวกเตอร์หน่วยในทิศทาง x คือ?',
          options: ['(1, 0)', '(0, 1)', '(1, 1)', '(0, 0)'],
          correctAnswer: 0,
          explanation: 'เวกเตอร์หน่วยในทิศทาง x คือ î = (1, 0)',
          difficulty: 'easy',
          hints: ['เวกเตอร์หน่วยมีขนาด 1', 'ทิศทาง x หมายถึงแกน x']
        },
        {
          id: 3,
          question: 'มุมที่เวกเตอร์ v⃗ = (1, √3) ทำกับแกน x เท่าไร?',
          options: ['30°', '45°', '60°', '90°'],
          correctAnswer: 2,
          explanation: 'tan θ = y/x = √3/1 = √3, ดังนั้น θ = 60°',
          difficulty: 'medium',
          hints: ['ใช้ tan θ = y/x', 'tan 60° = √3']
        }
      ]
    },
    {
      id: 2,
      title: 'การบวกและลบเวกเตอร์',
      duration: '50 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/zf1Fv1m6yso',
      completed: false,
      objectives: [
        'บวกและลบเวกเตอร์โดยใช้ส่วนประกอบ',
        'ใช้กฎสี่เหลี่ยมด้านขนานในการบวกเวกเตอร์',
        'หาเวกเตอร์ผลต่างระหว่างจุดสองจุด'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า u⃗ = (2, 3) และ v⃗ = (1, -2) แล้ว u⃗ + v⃗ เท่าไร?',
          options: ['(3, 1)', '(1, 5)', '(2, -6)', '(3, -1)'],
          correctAnswer: 0,
          explanation: 'u⃗ + v⃗ = (2+1, 3+(-2)) = (3, 1)',
          difficulty: 'easy',
          hints: ['บวกแต่ละส่วนประกอบ', '(x₁+x₂, y₁+y₂)']
        },
        {
          id: 2,
          question: 'ถ้า a⃗ = (5, 2) และ b⃗ = (3, -1) แล้ว a⃗ - b⃗ เท่าไร?',
          options: ['(2, 3)', '(8, 1)', '(2, -3)', '(-2, 3)'],
          correctAnswer: 0,
          explanation: 'a⃗ - b⃗ = (5-3, 2-(-1)) = (2, 3)',
          difficulty: 'easy',
          hints: ['ลบแต่ละส่วนประกอบ', '(x₁-x₂, y₁-y₂)']
        },
        {
          id: 3,
          question: 'เวกเตอร์จากจุด A(1, 2) ไปยังจุด B(4, 6) คือ?',
          options: ['(3, 4)', '(5, 8)', '(-3, -4)', '(4, 6)'],
          correctAnswer: 0,
          explanation: 'AB⃗ = B - A = (4-1, 6-2) = (3, 4)',
          difficulty: 'medium',
          hints: ['เวกเตอร์ AB⃗ = ปลายทาง - จุดเริ่มต้น', 'B - A']
        }
      ]
    },
    {
      id: 3,
      title: 'การคูณเวกเตอร์ด้วยสเกลาร์',
      duration: '40 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/7rA9wQn1XWw',
      completed: false,
      objectives: [
        'คูณเวกเตอร์ด้วยสเกลาร์',
        'เข้าใจผลของการคูณต่อขนาดและทิศทาง',
        'หาเวกเตอร์หน่วยในทิศทางที่กำหนด'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า v⃗ = (2, -3) แล้ว 3v⃗ เท่าไร?',
          options: ['(6, -9)', '(5, 0)', '(2, -9)', '(6, -3)'],
          correctAnswer: 0,
          explanation: '3v⃗ = 3(2, -3) = (3×2, 3×(-3)) = (6, -9)',
          difficulty: 'easy',
          hints: ['คูณทุกส่วนประกอบด้วย 3', 'k(x, y) = (kx, ky)']
        },
        {
          id: 2,
          question: 'เวกเตอร์หน่วยในทิศทางของ u⃗ = (6, 8) คือ?',
          options: ['(3/5, 4/5)', '(6/10, 8/10)', '(1, 1)', '(0.6, 0.8)'],
          correctAnswer: 0,
          explanation: '|u⃗| = √(6² + 8²) = 10, เวกเตอร์หน่วย = u⃗/|u⃗| = (6/10, 8/10) = (3/5, 4/5)',
          difficulty: 'medium',
          hints: ['หาขนาดของเวกเตอร์ก่อน', 'เวกเตอร์หน่วย = เวกเตอร์/ขนาด']
        },
        {
          id: 3,
          question: 'ถ้า |v⃗| = 5 และต้องการเวกเตอร์ขนาด 15 ในทิศทางเดียวกัน คูณด้วยเท่าไร?',
          options: ['3', '5', '15', '1/3'],
          correctAnswer: 0,
          explanation: 'ต้องการขนาด 15 จากขนาด 5, ดังนั้นคูณด้วย 15/5 = 3',
          difficulty: 'medium',
          hints: ['ขนาดใหม่ = k × ขนาดเดิม', '15 = k × 5']
        }
      ]
    },
    {
      id: 4,
      title: 'ดอทโปรดักต์ (Dot Product)',
      duration: '55 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/2mXl2Dg3pJ0',
      completed: false,
      objectives: [
        'คำนวณดอทโปรดักต์ของเวกเตอร์',
        'ใช้ดอทโปรดักต์หามุมระหว่างเวกเตอร์',
        'ตรวจสอบการตั้งฉากของเวกเตอร์'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า u⃗ = (3, 4) และ v⃗ = (1, 2) แล้ว u⃗ · v⃗ เท่าไร?',
          options: ['7', '11', '14', '5'],
          correctAnswer: 1,
          explanation: 'u⃗ · v⃗ = (3)(1) + (4)(2) = 3 + 8 = 11',
          difficulty: 'easy',
          hints: ['u⃗ · v⃗ = x₁x₂ + y₁y₂', 'คูณส่วนประกอบแล้วบวกกัน']
        },
        {
          id: 2,
          question: 'มุมระหว่างเวกเตอร์ a⃗ = (1, 0) และ b⃗ = (0, 1) เท่าไร?',
          options: ['0°', '45°', '90°', '180°'],
          correctAnswer: 2,
          explanation: 'a⃗ · b⃗ = (1)(0) + (0)(1) = 0, เมื่อดอทโปรดักต์ = 0 แสดงว่าเวกเตอร์ตั้งฉาก (90°)',
          difficulty: 'medium',
          hints: ['คำนวณ a⃗ · b⃗', 'เมื่อดอทโปรดักต์ = 0 หมายถึงอะไร?']
        },
        {
          id: 3,
          question: 'ถ้า |u⃗| = 3, |v⃗| = 4, และมุมระหว่างเวกเตอร์ = 60° แล้ว u⃗ · v⃗ เท่าไร?',
          options: ['6', '12', '7', '24'],
          correctAnswer: 0,
          explanation: 'u⃗ · v⃗ = |u⃗||v⃗|cos θ = (3)(4)cos 60° = 12 × (1/2) = 6',
          difficulty: 'medium',
          hints: ['ใช้สูตร u⃗ · v⃗ = |u⃗||v⃗|cos θ', 'cos 60° = 1/2']
        }
      ]
    },
    {
      id: 5,
      title: 'ครอสโปรดักต์ (Cross Product)',
      duration: '60 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/D0u5y9o4rDc',
      completed: false,
      objectives: [
        'คำนวณครอสโปรดักต์ในระนาบ',
        'เข้าใจความหมายเรขาคณิตของครอสโปรดักต์',
        'หาพื้นที่สี่เหลี่ยมด้านขนานจากเวกเตอร์'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า u⃗ = (3, 2) และ v⃗ = (1, 4) แล้ว u⃗ × v⃗ (ในระนาบ) เท่าไร?',
          options: ['10', '14', '11', '-10'],
          correctAnswer: 0,
          explanation: 'ในระนาบ 2D: u⃗ × v⃗ = x₁y₂ - y₁x₂ = (3)(4) - (2)(1) = 12 - 2 = 10',
          difficulty: 'medium',
          hints: ['สูตรในระนาบ: x₁y₂ - y₁x₂', 'คำนวณ (3)(4) - (2)(1)']
        },
        {
          id: 2,
          question: 'พื้นที่สี่เหลี่ยมด้านขนานที่มีด้านเป็นเวกเตอร์ a⃗ = (2, 0) และ b⃗ = (1, 3) เท่าไร?',
          options: ['6', '5', '3', '7'],
          correctAnswer: 0,
          explanation: 'พื้นที่ = |a⃗ × b⃗| = |(2)(3) - (0)(1)| = |6| = 6',
          difficulty: 'medium',
          hints: ['พื้นที่ = |ครอสโปรดักต์|', 'คำนวณ |a⃗ × b⃗|']
        },
        {
          id: 3,
          question: 'ถ้าครอสโปรดักต์ของเวกเตอร์สองตัวเท่ากับ 0 แสดงว่าอะไร?',
          options: ['เวกเตอร์ตั้งฉาก', 'เวกเตอร์ขนาน', 'เวกเตอร์เท่ากัน', 'เวกเตอร์หนึ่งเป็นศูนย์'],
          correctAnswer: 1,
          explanation: 'เมื่อ u⃗ × v⃗ = 0 แสดงว่าเวกเตอร์ทั้งสองขนานกัน',
          difficulty: 'medium',
          hints: ['คิดถึงเมื่อไรที่ครอสโปรดักต์ = 0', 'เกี่ยวข้องกับทิศทางของเวกเตอร์']
        }
      ]
    },
    {
      id: 6,
      title: 'การประยุกต์ใช้เวกเตอร์ในเรขาคณิต',
      duration: '65 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/1f0aYkGZ6mI',
      completed: false,
      objectives: [
        'หาสมการเส้นตรงด้วยเวกเตอร์',
        'หาระยะห่างจากจุดถึงเส้นตรง',
        'แก้ปัญหาเรขาคณิตด้วยเวกเตอร์'
      ],
      questions: [
        {
          id: 1,
          question: 'เส้นตรงที่ผ่านจุด (2, 1) และมีเวกเตอร์ทิศทาง (3, 4) มีสมการเวกเตอร์คือ?',
          options: [
            'r⃗ = (2, 1) + t(3, 4)',
            'r⃗ = (3, 4) + t(2, 1)',
            'r⃗ = t(2, 1)(3, 4)',
            'r⃗ = (2+3, 1+4)t'
          ],
          correctAnswer: 0,
          explanation: 'สมการเวกเตอร์ของเส้นตรง: r⃗ = จุดบนเส้น + t(เวกเตอร์ทิศทาง)',
          difficulty: 'medium',
          hints: ['สมการเวกเตอร์เส้นตรง: r⃗ = r₀ + tv⃗', 'r₀ = จุดบนเส้น, v⃗ = เวกเตอร์ทิศทาง']
        },
        {
          id: 2,
          question: 'ระยะห่างจากจุด P(1, 2) ถึงเส้นตรง 3x + 4y - 5 = 0 เท่าไร?',
          options: ['2', '3', '1', '4'],
          correctAnswer: 2,
          explanation: 'ใช้สูตร d = |ax₀ + by₀ + c|/√(a² + b²) = |3(1) + 4(2) - 5|/√(3² + 4²) = |6|/5 = 6/5 ≈ 1.2',
          difficulty: 'hard',
          hints: ['ใช้สูตรระยะห่างจากจุดถึงเส้นตรง', 'd = |ax₀ + by₀ + c|/√(a² + b²)']
        },
        {
          id: 3,
          question: 'พื้นที่สามเหลี่ยมที่มีจุดยอด A(0,0), B(3,0), C(0,4) เท่าไร?',
          options: ['6', '12', '7', '5'],
          correctAnswer: 0,
          explanation: 'ใช้เวกเตอร์: AB⃗ = (3,0), AC⃗ = (0,4), พื้นที่ = ½|AB⃗ × AC⃗| = ½|(3)(4) - (0)(0)| = ½(12) = 6',
          difficulty: 'medium',
          hints: ['พื้นที่สามเหลี่ยม = ½|u⃗ × v⃗|', 'ใช้เวกเตอร์สองด้านของสามเหลี่ยม']
        }
      ]
    }
  ]
});

export default vectors;
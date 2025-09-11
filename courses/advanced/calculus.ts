// courses/advanced/calculus.ts
import { CourseData } from '../index';

const calculus = (): CourseData => ({
  title: 'แคลคูลัส',
  description: 'ศึกษาพื้นฐานแคลคูลัส ลิมิต อนุพันธ์ และปริพันธ์ เพื่อนำไปประยุกต์ใช้ในการแก้ปัญหาทางคณิตศาสตร์และวิทยาศาสตร์',
  duration: '14 สัปดาห์',
  difficulty: 'ยาก',
  prerequisites: [
    'พีชคณิต',
    'ฟังก์ชัน',
    'ตรีโกณมิติ',
    'เรขาคณิตพิกัด',
    'ลอการิทึม'
  ],
  objectives: [
    'เข้าใจแนวคิดของลิมิตและความต่อเนื่อง',
    'คำนวณอนุพันธ์และใช้ในการแก้ปัญหา',
    'เข้าใจความหมายของปริพันธ์',
    'ประยุกต์ใช้แคลคูลัสในปัญหาจริง'
  ],
  lessons: [
    {
      id: 1,
      title: 'ลิมิตและความต่อเนื่อง',
      duration: '60 นาที',
      completed: false,
      objectives: [
        'เข้าใจแนวคิดของลิมิต',
        'คำนวณลิมิตของฟังก์ชัน',
        'ตรวจสอบความต่อเนื่องของฟังก์ชัน'
      ],
      questions: [
        {
          id: 1,
          question: 'lim(x→2) (x² - 4)/(x - 2) เท่ากับเท่าไร?',
          options: ['0', '2', '4', 'undefined'],
          correctAnswer: 2,
          explanation: 'แยกตัวประกอบ: (x² - 4)/(x - 2) = (x + 2)(x - 2)/(x - 2) = x + 2 เมื่อ x ≠ 2, ดังนั้น lim(x→2) = 2 + 2 = 4',
          difficulty: 'medium',
          hints: ['แยกตัวประกอบ x² - 4', 'ตัดตัวประกอบที่เหมือนกัน']
        },
        {
          id: 2,
          question: 'ฟังก์ชัน f(x) = 1/x มีความต่อเนื่องที่ x = 0 หรือไม่?',
          options: ['ต่อเนื่อง', 'ไม่ต่อเนื่อง', 'ต่อเนื่องทางซ้าย', 'ต่อเนื่องทางขวา'],
          correctAnswer: 1,
          explanation: 'f(x) = 1/x ไม่มีค่าที่ x = 0 (ไม่อยู่ในโดเมน) ดังนั้นจึงไม่ต่อเนื่องที่ x = 0',
          difficulty: 'medium',
          hints: ['ฟังก์ชันต้องมีค่าที่จุดนั้น', '1/0 ไม่มีค่า']
        },
        {
          id: 3,
          question: 'lim(x→∞) (3x² + 2x + 1)/(x² + 5) เท่ากับเท่าไร?',
          options: ['0', '3', '∞', '1'],
          correctAnswer: 1,
          explanation: 'หารทั้งเศษและส่วนด้วย x²: lim(x→∞) (3 + 2/x + 1/x²)/(1 + 5/x²) = 3/1 = 3',
          difficulty: 'hard',
          hints: ['หารด้วยพจน์ที่มีดีกรีสูงสุด', 'เมื่อ x→∞ แล้ว 1/x→0']
        }
      ]
    },
    {
      id: 2,
      title: 'อนุพันธ์พื้นฐาน',
      duration: '65 นาที',
      completed: false,
      objectives: [
        'เข้าใจความหมายของอนุพันธ์',
        'ใช้กฎการหาอนุพันธ์',
        'หาอนุพันธ์ของฟังก์ชันต่างๆ'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า f(x) = x³ แล้ว f\'(x) เท่ากับเท่าไร?',
          options: ['x²', '3x²', '3x³', 'x³/3'],
          correctAnswer: 1,
          explanation: 'ใช้กฎ power rule: d/dx(xⁿ) = nx^(n-1), ดังนั้น d/dx(x³) = 3x²',
          difficulty: 'easy',
          hints: ['ใช้ power rule', 'n = 3, ลดเลขยกกำลังลง 1']
        },
        {
          id: 2,
          question: 'อนุพันธ์ของ y = 5x⁴ - 3x² + 7x - 2 เท่ากับเท่าไร?',
          options: [
            '20x³ - 6x + 7',
            '5x³ - 3x + 7',
            '20x³ - 3x + 7',
            '5x⁴ - 6x + 7'
          ],
          correctAnswer: 0,
          explanation: 'dy/dx = 5(4x³) - 3(2x) + 7(1) - 0 = 20x³ - 6x + 7',
          difficulty: 'medium',
          hints: ['หาอนุพันธ์แต่ละพจน์', 'อนุพันธ์ของค่าคงที่คือ 0']
        },
        {
          id: 3,
          question: 'ถ้า y = (2x + 1)³ แล้ว dy/dx เท่ากับเท่าไร?',
          options: [
            '3(2x + 1)²',
            '6(2x + 1)²',
            '(2x + 1)²',
            '2(2x + 1)²'
          ],
          correctAnswer: 1,
          explanation: 'ใช้ chain rule: dy/dx = 3(2x + 1)² × 2 = 6(2x + 1)²',
          difficulty: 'hard',
          hints: ['ใช้ chain rule', 'อนุพันธ์ภายนอก × อนุพันธ์ภายใน']
        }
      ]
    },
    {
      id: 3,
      title: 'การประยุกต์ใช้อนุพันธ์',
      duration: '70 นาที',
      completed: false,
      objectives: [
        'หาค่าสูงสุดและต่ำสุดของฟังก์ชัน',
        'วิเคราะห์พฤติกรรมของกราฟ',
        'แก้ปัญหาการหาอัตราการเปลี่ยนแปลง'
      ],
      questions: [
        {
          id: 1,
          question: 'ฟังก์ชัน f(x) = x² - 4x + 3 มีค่าต่ำสุดที่ x เท่ากับเท่าไร?',
          options: ['0', '1', '2', '3'],
          correctAnswer: 2,
          explanation: 'f\'(x) = 2x - 4 = 0 เมื่อ x = 2, f\'\'(x) = 2 > 0 ดังนั้น x = 2 ให้ค่าต่ำสุด',
          difficulty: 'medium',
          hints: ['หา critical point โดยให้ f\'(x) = 0', 'ใช้ second derivative test']
        },
        {
          id: 2,
          question: 'ลูกบอลถูกโยนขึ้นไป ความสูง h(t) = -5t² + 20t + 10 เมตร ลูกบอลจะสูงสุดเมื่อเวลาเท่าไร?',
          options: ['1 วินาที', '2 วินาที', '3 วินาที', '4 วินาที'],
          correctAnswer: 1,
          explanation: 'h\'(t) = -10t + 20 = 0 เมื่อ t = 2 วินาที',
          difficulty: 'medium',
          hints: ['หาเมื่อไร h\'(t) = 0', 'นี่คือปัญหาการเคลื่อนที่']
        },
        {
          id: 3,
          question: 'รัศมีของวงกลมเพิ่มขึ้นด้วยอัตรา 3 ซม./วินาที พื้นที่เพิ่มขึ้นด้วยอัตราเท่าไรเมื่อรัศมี = 5 ซม.?',
          options: ['15π ตร.ซม./วินาที', '30π ตร.ซม./วินาที', '25π ตร.ซม./วินาที', '10π ตร.ซม./วินาที'],
          correctAnswer: 1,
          explanation: 'A = πr², dA/dt = 2πr(dr/dt) = 2π(5)(3) = 30π ตร.ซม./วินาที',
          difficulty: 'hard',
          hints: ['A = πr²', 'ใช้ chain rule: dA/dt = (dA/dr)(dr/dt)']
        }
      ]
    },
    {
      id: 4,
      title: 'ปริพันธ์ไม่จำกัดเขต',
      duration: '60 นาที',
      completed: false,
      objectives: [
        'เข้าใจแนวคิดของปริพันธ์',
        'หาปริพันธ์ของฟังก์ชันพื้นฐาน',
        'ใช้วิธีการแทนที่'
      ],
      questions: [
        {
          id: 1,
          question: '∫ 3x² dx เท่ากับเท่าไร?',
          options: ['x³ + C', '3x³ + C', 'x³/3 + C', '6x + C'],
          correctAnswer: 0,
          explanation: '∫ 3x² dx = 3∫ x² dx = 3(x³/3) + C = x³ + C',
          difficulty: 'easy',
          hints: ['∫ xⁿ dx = x^(n+1)/(n+1) + C', 'เพิ่มเลขยกกำลัง 1 แล้วหาร']
        },
        {
          id: 2,
          question: '∫ (2x + 3) dx เท่ากับเท่าไร?',
          options: ['x² + 3x + C', '2x² + 3x + C', 'x² + 3 + C', '2x + 3x + C'],
          correctAnswer: 0,
          explanation: '∫ (2x + 3) dx = ∫ 2x dx + ∫ 3 dx = x² + 3x + C',
          difficulty: 'easy',
          hints: ['แยกปริพันธ์แต่ละพจน์', '∫ x dx = x²/2, ∫ 3 dx = 3x']
        },
        {
          id: 3,
          question: '∫ (2x + 1)³ dx เท่ากับเท่าไร?',
          options: [
            '(2x + 1)⁴/8 + C',
            '(2x + 1)⁴/4 + C',
            '(2x + 1)⁴/2 + C',
            '(2x + 1)⁴ + C'
          ],
          correctAnswer: 0,
          explanation: 'ใช้การแทนที่ u = 2x + 1, du = 2dx, ∫ u³(du/2) = u⁴/8 + C = (2x + 1)⁴/8 + C',
          difficulty: 'hard',
          hints: ['ใช้การแทนที่', 'u = 2x + 1, du = 2dx']
        }
      ]
    },
    {
      id: 5,
      title: 'ปริพันธ์จำกัดเขตและพื้นที่',
      duration: '65 นาที',
      completed: false,
      objectives: [
        'คำนวณปริพันธ์จำกัดเขต',
        'หาพื้นที่ใต้กราฟ',
        'ประยุกต์ใช้หาปริมาตร'
      ],
      questions: [
        {
          id: 1,
          question: '∫₀² x² dx เท่ากับเท่าไร?',
          options: ['8/3', '4/3', '8', '4'],
          correctAnswer: 0,
          explanation: '∫₀² x² dx = [x³/3]₀² = 8/3 - 0 = 8/3',
          difficulty: 'medium',
          hints: ['หาปริพันธ์ไม่จำกัดเขตก่อน', 'แทนค่าขอบเขตบน - ขอบเขตล่าง']
        },
        {
          id: 2,
          question: 'พื้นที่ระหว่างกราฟ y = x² และแกน x จาก x = 0 ถึง x = 3 เท่ากับเท่าไร?',
          options: ['9 ตารางหน่วย', '27 ตารางหน่วย', '3 ตารางหน่วย', '9/2 ตารางหน่วย'],
          correctAnswer: 0,
          explanation: 'พื้นที่ = ∫₀³ x² dx = [x³/3]₀³ = 27/3 - 0 = 9 ตารางหน่วย',
          difficulty: 'medium',
          hints: ['พื้นที่ = ∫ y dx', 'คำนวณ ∫₀³ x² dx']
        },
        {
          id: 3,
          question: 'ถ้าหมุนบริเวณที่ถูกล้อมรอบด้วย y = x, y = 0, x = 0, x = 2 รอบแกน x จะได้ปริมาตรเท่าไร?',
          options: ['8π/3', '4π/3', '2π', '4π'],
          correctAnswer: 0,
          explanation: 'V = π∫₀² x² dx = π[x³/3]₀² = π(8/3 - 0) = 8π/3',
          difficulty: 'hard',
          hints: ['ปริมาตรจากการหมุน: V = π∫ y² dx', 'y = x, ดังนั้น y² = x²']
        }
      ]
    },
    {
      id: 6,
      title: 'ฟังก์ชันเลขชี้กำลังและลอการิทึม',
      duration: '55 นาที',
      completed: false,
      objectives: [
        'หาอนุพันธ์ของฟังก์ชันเลขชี้กำลัง',
        'หาอนุพันธ์ของฟังก์ชันลอการิทึม',
        'แก้สมการที่มีฟังก์ชันเหล่านี้'
      ],
      questions: [
        {
          id: 1,
          question: 'อนุพันธ์ของ y = eˣ เท่ากับเท่าไร?',
          options: ['eˣ', 'xeˣ⁻¹', 'eˣ/x', '1'],
          correctAnswer: 0,
          explanation: 'd/dx(eˣ) = eˣ (สมบัติพิเศษของ e)',
          difficulty: 'easy',
          hints: ['e มีสมบัติพิเศษ', 'อนุพันธ์ของ eˣ คือตัวมันเอง']
        },
        {
          id: 2,
          question: 'อนุพันธ์ของ y = ln(x) เท่ากับเท่าไร?',
          options: ['1/x', 'ln(x)/x', 'x', '1/ln(x)'],
          correctAnswer: 0,
          explanation: 'd/dx(ln(x)) = 1/x สำหรับ x > 0',
          difficulty: 'easy',
          hints: ['ln คือ ลอการิทึมธรรมชาติ', 'อนุพันธ์ของ ln(x) คือ 1/x']
        },
        {
          id: 3,
          question: 'อนุพันธ์ของ y = e^(2x+1) เท่ากับเท่าไร?',
          options: ['e^(2x+1)', '2e^(2x+1)', 'e^(2x)', '(2x+1)e^(2x)'],
          correctAnswer: 1,
          explanation: 'ใช้ chain rule: dy/dx = e^(2x+1) × 2 = 2e^(2x+1)',
          difficulty: 'medium',
          hints: ['ใช้ chain rule', 'อนุพันธ์ภายนอก × อนุพันธ์ภายใน']
        }
      ]
    }
  ]
});

export default calculus;
// courses/secondary/realNumbers.ts
import { CourseData } from '../index';

const realNumbers = (): CourseData => ({
  title: 'จำนวนจริง',
  description: 'ศึกษาระบบจำนวนจริง จำนวนตรรกยะและอตรรกยะ การดำเนินการกับจำนวนจริง และการแก้อสมการ',
  duration: '7 สัปดาห์',
  difficulty: 'ปานกลาง',
  prerequisites: [
    'จำนวนเต็ม',
    'เศษส่วน',
    'ทศนิยม',
    'เลขยกกำลัง',
    'การแก้สมการเชิงเส้น'
  ],
  objectives: [
    'เข้าใจและจำแนกประเภทของจำนวนจริง',
    'คำนวณการดำเนินการกับจำนวนจริง',
    'เข้าใจและใช้รากที่สอง',
    'แก้อสมการเชิงเส้น'
  ],
  lessons: [
    {
      id: 1,
      title: 'ระบบจำนวนจริง',
      duration: '50 นาที',
      completed: false,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/gpdoXG8-X3w',
      objectives: [
        'จำแนกประเภทของจำนวน',
        'เข้าใจความสำคัญของจำนวนจริง',
        'เปรียบเทียบจำนวนจริง'
      ],
      questions: [
        {
          id: 1,
          question: 'จำนวนใดต่อไปนี้เป็นจำนวนตรรกยะ?',
          options: ['√2', '√9', 'π', '√5'],
          correctAnswer: 1,
          explanation: '√9 = 3 ซึ่งเป็นจำนวนเต็ม และจำนวนเต็มทุกตัวเป็นจำนวนตรรกยะ',
          difficulty: 'medium',
          hints: ['จำนวนตรรกยะเขียนเป็นเศษส่วนได้', '√9 = ?']
        },
        {
          id: 2,
          question: 'จำนวน -5 อยู่ในเซตใดบ้าง?',
          options: [
            'จำนวนเต็มเท่านั้น',
            'จำนวนเต็มและจำนวนตรรกยะ',
            'จำนวนเต็ม จำนวนตรรกยะ และจำนวนจริง',
            'จำนวนอตรรกยะ'
          ],
          correctAnswer: 2,
          explanation: '-5 เป็นจำนวนเต็ม ดังนั้นจึงเป็นจำนวนตรรกยะ และจำนวนจริงด้วย (จำนวนเต็ม ⊆ จำนวนตรรกยะ ⊆ จำนวนจริง)',
          difficulty: 'medium',
          hints: ['จำนวนเต็มทุกตัวเป็นจำนวนตรรกยะ', 'จำนวนตรรกยะทุกตัวเป็นจำนวนจริง']
        },
        {
          id: 3,
          question: 'เรียงลำดับจำนวนต่อไปนี้จากน้อยไปมาก: -2.5, √4, -3, 1.8',
          options: [
            '-3, -2.5, 1.8, √4',
            '-2.5, -3, 1.8, √4',
            '-3, -2.5, √4, 1.8',
            '√4, 1.8, -2.5, -3'
          ],
          correctAnswer: 0,
          explanation: '√4 = 2, ดังนั้นเรียงลำดับได้: -3, -2.5, 1.8, 2',
          difficulty: 'medium',
          hints: ['√4 = 2', 'เรียงจากน้อยไปมาก']
        }
      ]
    },
    {
      id: 2,
      title: 'จำนวนตรรกยะและอตรรกยะ',
      duration: '55 นาที',
      completed: false,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/XRrjaekQPW0',
      objectives: [
        'เข้าใจความแตกต่างระหว่างจำนวนตรรกยะและอตรรกยะ',
        'แปลงเศษส่วนเป็นทศนิยม',
        'จำแนกจำนวนให้ถูกประเภท'
      ],
      questions: [
        {
          id: 1,
          question: 'จำนวนใดเป็นจำนวนอตรรกยะ?',
          options: ['0.333...', '√16', '√7', '5/3'],
          correctAnswer: 2,
          explanation: '√7 เป็นจำนวนอตรรกยะเพราะไม่สามารถเขียนเป็นเศษส่วนได้ ส่วน √16 = 4, 0.333... = 1/3, 5/3 เป็นจำนวนตรรกยะ',
          difficulty: 'medium',
          hints: ['√7 หาค่าที่แน่นอนไม่ได้', 'จำนวนอตรรกยะเขียนเป็นเศษส่วนไม่ได้']
        },
        {
          id: 2,
          question: 'เศษส่วน 7/8 เมื่อแปลงเป็นทศนิยมจะได้เท่าไร?',
          options: ['0.875', '0.78', '0.887', '0.625'],
          correctAnswer: 0,
          explanation: '7 ÷ 8 = 0.875 (ทศนิยมสิ้นสุด)',
          difficulty: 'easy',
          hints: ['หาร 7 ด้วย 8', 'ใช้การหารยาว']
        },
        {
          id: 3,
          question: 'ทศนิยม 0.1666... สามารถเขียนเป็นเศษส่วนได้เป็น?',
          options: ['1/6', '1/7', '2/12', '16/100'],
          correctAnswer: 0,
          explanation: '0.1666... = 1/6 (ทศนิยมซ้ำ 6 ตลอด)',
          difficulty: 'hard',
          hints: ['ทศนิยมซ้ำแปลงเป็นเศษส่วนได้', '1 ÷ 6 = ?']
        }
      ]
    },
    {
      id: 3,
      title: 'การดำเนินการกับจำนวนจริง',
      duration: '60 นาที',
      completed: false,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/rpZLMd5A7qM',
      objectives: [
        'บวก ลบ คูณ หารจำนวนจริง',
        'ใช้สมบัติของการดำเนินการ',
        'จัดรูปนิพจน์ที่มีจำนวนจริง'
      ],
      questions: [
        {
          id: 1,
          question: '(-3.5) + 2.8 เท่ากับเท่าไร?',
          options: ['-0.7', '0.7', '-6.3', '6.3'],
          correctAnswer: 0,
          explanation: '(-3.5) + 2.8 = -(3.5 - 2.8) = -0.7',
          difficulty: 'easy',
          hints: ['บวกจำนวนที่มีเครื่องหมายต่างกัน', '3.5 - 2.8 = 0.7']
        },
        {
          id: 2,
          question: '2/3 × 3/4 เท่ากับเท่าไร?',
          options: ['1/2', '5/7', '6/12', '2/4'],
          correctAnswer: 0,
          explanation: '2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2',
          difficulty: 'medium',
          hints: ['คูณเศษด้วยเศษ ส่วนด้วยส่วน', 'ลดรูปเศษส่วน']
        },
        {
          id: 3,
          question: '√18 จัดรูปให้เรียบง่ายได้เป็น?',
          options: ['3√2', '2√3', '6√3', '9√2'],
          correctAnswer: 0,
          explanation: '√18 = √(9×2) = √9 × √2 = 3√2',
          difficulty: 'hard',
          hints: ['หาตัวประกอบที่เป็นกำลังสองสมบูรณ์', '18 = 9 × 2']
        }
      ]
    },
    {
      id: 4,
      title: 'รากที่สองและเลขยกกำลัง',
      duration: '55 นาที',
      completed: false,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/_YsGMt_3hMU',
      objectives: [
        'คำนวณรากที่สองของจำนวนต่างๆ',
        'ใช้กฎเลขยกกำลังกับจำนวนจริง',
        'จัดรูปนิพจน์ที่มีรากที่สอง'
      ],
      questions: [
        {
          id: 1,
          question: '√64 เท่ากับเท่าไร?',
          options: ['6', '7', '8', '9'],
          correctAnswer: 2,
          explanation: '√64 = 8 เพราะ 8² = 64',
          difficulty: 'easy',
          hints: ['หาจำนวนที่ยกกำลังสองแล้วได้ 64', '8 × 8 = ?']
        },
        {
          id: 2,
          question: '3² × 3³ เท่ากับเท่าไร?',
          options: ['3⁵', '3⁶', '9⁵', '6⁵'],
          correctAnswer: 0,
          explanation: '3² × 3³ = 3^(2+3) = 3⁵ (กฎการคูณเลขยกกำลังฐานเดียวกัน)',
          difficulty: 'medium',
          hints: ['เลขยกกำลังฐานเดียวกันคูณกัน บวกเลขยกกำลัง', '2 + 3 = 5']
        },
        {
          id: 3,
          question: '√50 - √32 เท่ากับเท่าไร?',
          options: ['√2', '2√2', '√18', '3√2'],
          correctAnswer: 0,
          explanation: '√50 = 5√2, √32 = 4√2 ดังนั้น √50 - √32 = 5√2 - 4√2 = √2',
          difficulty: 'hard',
          hints: ['จัดรูป √50 และ √32 ก่อน', '√50 = √(25×2), √32 = √(16×2)']
        }
      ]
    },
    {
      id: 5,
      title: 'อสมการเชิงเส้น',
      duration: '60 นาที',
      completed: false,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/MOqSq1e_GFY',
      objectives: [
        'เข้าใจและแก้อสมการเชิงเส้น',
        'แสดงผลลัพธ์บนเส้นจำนวน',
        'แก้ปัญหาด้วยอสมการ'
      ],
      questions: [
        {
          id: 1,
          question: 'แก้อสมการ x + 5 > 12',
          options: ['x > 7', 'x < 7', 'x > 17', 'x < 17'],
          correctAnswer: 0,
          explanation: 'x + 5 > 12 → ลบ 5 ทั้งสองข้าง → x > 7',
          difficulty: 'easy',
          hints: ['ลบ 5 ออกจากทั้งสองข้าง', '12 - 5 = 7']
        },
        {
          id: 2,
          question: 'แก้อสมการ -2x ≤ 8',
          options: ['x ≤ -4', 'x ≥ -4', 'x ≤ 4', 'x ≥ 4'],
          correctAnswer: 1,
          explanation: '-2x ≤ 8 → หารด้วย -2 (กลับเครื่องหมาย) → x ≥ -4',
          difficulty: 'medium',
          hints: ['หารด้วย -2', 'หารหรือคูณด้วยจำนวนลบต้องกลับเครื่องหมาย']
        },
        {
          id: 3,
          question: 'แก้อสมการ 3x - 7 < 2x + 5',
          options: ['x < 12', 'x > 12', 'x < -2', 'x > -2'],
          correctAnswer: 0,
          explanation: '3x - 7 < 2x + 5 → 3x - 2x < 5 + 7 → x < 12',
          difficulty: 'medium',
          hints: ['ย้าย x ไปข้างเดียว ตัวเลขไปอีกข้างหนึ่ง', '3x - 2x = x, 5 + 7 = 12']
        }
      ]
    },
    {
      id: 6,
      title: 'การประยุกต์ใช้จำนวนจริง',
      duration: '50 นาที',
      completed: false,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/il1yHOLNIaw',
      objectives: [
        'ใช้จำนวนจริงในการแก้ปัญหาจริง',
        'ประมาณค่าจำนวนอตรรกยะ',
        'เปรียบเทียบและเรียงลำดับจำนวนจริง'
      ],
      questions: [
        {
          id: 1,
          question: 'ประมาณค่า √20 ให้ใกล้เคียงที่สุด',
          options: ['4.2', '4.5', '4.8', '5.1'],
          correctAnswer: 1,
          explanation: '√16 = 4 และ √25 = 5 ดังนั้น √20 อยู่ระหว่าง 4 และ 5 ใกล้กับ 4.5',
          difficulty: 'medium',
          hints: ['√16 = 4, √25 = 5', '20 อยู่ระหว่าง 16 และ 25']
        },
        {
          id: 2,
          question: 'สนามเป็นรูปสี่เหลี่ยมจัตุรัสมีพื้นที่ 50 ตารางเมตร ด้านของสนามยาวเท่าไร?',
          options: ['√50 เมตร', '25 เมตร', '√25 เมตร', '50 เมตร'],
          correctAnswer: 0,
          explanation: 'พื้นที่จัตุรัส = ด้าน² = 50, ดังนั้นด้าน = √50 เมตร',
          difficulty: 'medium',
          hints: ['พื้นที่จัตุรัส = ด้าน²', 'ด้าน = √(พื้นที่)']
        },
        {
          id: 3,
          question: 'ถ้า a = √3 และ b = 1.8 แล้ว a + b อยู่ในช่วงใด?',
          options: ['3.5 - 3.7', '3.4 - 3.6', '3.6 - 3.8', '3.7 - 3.9'],
          correctAnswer: 2,
          explanation: '√3 ≈ 1.73, ดังนั้น a + b ≈ 1.73 + 1.8 = 3.53 ซึ่งอยู่ในช่วง 3.6 - 3.8',
          difficulty: 'hard',
          hints: ['√3 ≈ 1.73', '1.73 + 1.8 = ?']
        }
      ]
    }
  ]
});

export default realNumbers;
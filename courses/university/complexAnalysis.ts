// courses/university/complexAnalysis.ts
import { CourseData } from '../index';

const complexAnalysis = (): CourseData => ({
  title: 'Complex Analysis',
  description: 'Study of complex functions, analytic functions, contour integration, residue theory, and applications to real analysis',
  duration: '16 สัปดาห์',
  difficulty: 'ยาก',
  prerequisites: [
    'Real Analysis',
    'แคลคูลัส',
    'Linear Algebra',
    'Multivariable Calculus'
  ],
  objectives: [
    'เข้าใจ complex functions และ analyticity',
    'ใช้ Cauchy integral theorem และ formula',
    'คำนวณ residues และ contour integrals',
    'ประยุกต์ใช้ในการหา real integrals และ series'
  ],
  lessons: [
    {
      id: 1,
      title: 'Complex Numbers และ Functions',
      duration: '85 นาที',
      completed: false,
      objectives: [
        'ทบทวน complex numbers และ operations',
        'เข้าใจ complex functions และ limits',
        'วิเคราะห์ continuity ใน complex plane'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า z = 3 + 4i แล้ว |z| เท่าไร?',
          options: ['7', '5', '√7', '25'],
          correctAnswer: 1,
          explanation: '|z| = √(3² + 4²) = √(9 + 16) = √25 = 5',
          difficulty: 'easy',
          hints: ['|a + bi| = √(a² + b²)', 'ใช้ทฤษฎีพีทาโกรัส']
        },
        {
          id: 2,
          question: 'e^(iπ) เท่ากับ?',
          options: ['1', '-1', 'i', '-i'],
          correctAnswer: 1,
          explanation: "Euler's formula: e^(iπ) = cos(π) + i sin(π) = -1 + 0i = -1",
          difficulty: 'medium',
          hints: ["Euler's formula: e^(iθ) = cos(θ) + i sin(θ)", 'cos(π) = -1, sin(π) = 0']
        },
        {
          id: 3,
          question: 'principal value ของ Log(i) คือ?',
          options: ['iπ/2', 'π/2', 'i(π/2 + 2πn)', 'ln(1) + iπ/2'],
          correctAnswer: 0,
          explanation: 'i = e^(iπ/2) ดังนั้น Log(i) = ln|i| + i Arg(i) = ln(1) + i(π/2) = iπ/2',
          difficulty: 'hard',
          hints: ['Log(z) = ln|z| + i Arg(z)', 'i มีมุม π/2']
        }
      ]
    },
    {
      id: 2,
      title: 'Analytic Functions',
      duration: '100 นาที',
      completed: false,
      objectives: [
        'เข้าใจ complex derivatives และ Cauchy-Riemann equations',
        'ตรวจสอบ analyticity',
        'หา harmonic conjugates'
      ],
      questions: [
        {
          id: 1,
          question: 'ฟังก์ชัน f(z) = z² เป็น analytic ที่ไหน?',
          options: ['ทุกจุดใน ℂ', 'ไม่มีจุดไหน', 'เฉพาะจุด z = 0', 'เฉพาะ real axis'],
          correctAnswer: 0,
          explanation: 'f(z) = z² เป็น polynomial ดังนั้น analytic ทุกจุดใน complex plane',
          difficulty: 'easy',
          hints: ['Polynomials เป็น analytic everywhere', 'Entire functions']
        },
        {
          id: 2,
          question: 'Cauchy-Riemann equations ใน Cartesian form คือ?',
          options: [
            '∂u/∂x = ∂v/∂y, ∂u/∂y = -∂v/∂x',
            '∂u/∂x = -∂v/∂y, ∂u/∂y = ∂v/∂x',
            '∂u/∂x = ∂v/∂x, ∂u/∂y = ∂v/∂y',
            'u = v, ∂u/∂x = ∂u/∂y'
          ],
          correctAnswer: 0,
          explanation: 'C-R equations: ∂u/∂x = ∂v/∂y และ ∂u/∂y = -∂v/∂x โดย f = u + iv',
          difficulty: 'medium',
          hints: ['f = u + iv', 'เงื่อนไขสำหรับ differentiability']
        },
        {
          id: 3,
          question: 'ถ้า u(x,y) = x² - y² แล้ว harmonic conjugate v(x,y) คือ?',
          options: ['2xy + C', 'x² + y² + C', '2x + 2y + C', '-2xy + C'],
          correctAnswer: 0,
          explanation: 'จาก C-R: ∂v/∂y = ∂u/∂x = 2x ∴ v = 2xy + g(x), ∂v/∂x = 2y + g\'(x) = -∂u/∂y = 2y ∴ g\'(x) = 0, v = 2xy + C',
          difficulty: 'hard',
          hints: ['ใช้ Cauchy-Riemann equations', 'u = x² - y² คือ real part ของ z²']
        }
      ]
    },
    {
      id: 3,
      title: 'Complex Integration',
      duration: '110 นาที',
      completed: false,
      objectives: [
        'คำนวณ line integrals ใน complex plane',
        'ใช้ Cauchy integral theorem',
        'เข้าใจความสัมพันธ์ระหว่าง analyticity และ path independence'
      ],
      questions: [
        {
          id: 1,
          question: '∫_C z dz โดย C เป็นเส้นตรงจาก 0 ไป 1+i เท่าไร?',
          options: ['1 + i', '(1 + i)²/2', '1/2 + i', 'i'],
          correctAnswer: 1,
          explanation: 'parametrize: z(t) = t(1+i), t ∈ [0,1], dz = (1+i)dt, ∫₀¹ t(1+i)²dt = (1+i)² ∫₀¹ t dt = (1+i)²/2',
          difficulty: 'medium',
          hints: ['parametrize path', '∫ z dz = z²/2 + C']
        },
        {
          id: 2,
          question: 'Cauchy integral theorem ใช้ได้เมื่อไร?',
          options: [
            'f continuous บน closed curve',
            'f analytic inside และ on closed curve',
            'curve เป็น circle',
            'f มี singularity ข้างใน'
          ],
          correctAnswer: 1,
          explanation: 'Cauchy theorem: ถ้า f analytic ใน simply connected domain D และ C ⊂ D แล้ว ∮_C f(z) dz = 0',
          difficulty: 'medium',
          hints: ['f ต้องเป็น analytic', 'simply connected domain']
        },
        {
          id: 3,
          question: '∮_{|z|=1} 1/z dz เท่าไร?',
          options: ['0', '2πi', 'π', '1'],
          correctAnswer: 1,
          explanation: '1/z มี simple pole ที่ z = 0 ซึ่งอยู่ข้างใน |z| = 1, ดังนั้น ∮ 1/z dz = 2πi',
          difficulty: 'hard',
          hints: ['1/z มี singularity ที่ z = 0', 'Standard result: ∮ 1/z dz = 2πi']
        }
      ]
    },
    {
      id: 4,
      title: 'Cauchy Integral Formula',
      duration: '95 นาที',
      completed: false,
      objectives: [
        'ใช้ Cauchy integral formula',
        'คำนวณ derivatives ด้วย Cauchy formula',
        'เข้าใจ maximum modulus principle'
      ],
      questions: [
        {
          id: 1,
          question: 'Cauchy integral formula คือ?',
          options: [
            'f(a) = (1/2πi) ∮_C f(z)/(z-a) dz',
            'f(a) = ∮_C f(z) dz',
            'f\'(a) = (1/2πi) ∮_C f(z)/(z-a) dz',
            'f(a) = (1/πi) ∮_C f(z)/(z-a)² dz'
          ],
          correctAnswer: 0,
          explanation: 'Cauchy integral formula: f(a) = (1/2πi) ∮_C f(z)/(z-a) dz เมื่อ f analytic inside C',
          difficulty: 'easy',
          hints: ['Formula สำหรับหาค่าฟังก์ชันจาก boundary integral', '1/2πi เป็นค่าคงที่']
        },
        {
          id: 2,
          question: 'ถ้า f analytic ใน |z| < R แล้ว |f(z)| มีค่าสูงสุดที่ไหน?',
          options: ['ที่ center z = 0', 'ที่ boundary |z| = R', 'ข้างใน disk', 'ที่จุดใดก็ได้'],
          correctAnswer: 1,
          explanation: 'Maximum modulus principle: ถ้า f analytic และ non-constant ใน domain D แล้ว |f| มีค่าสูงสุดที่ boundary',
          difficulty: 'medium',
          hints: ['Maximum modulus principle', 'ไม่สามารถมี local maximum ข้างใน domain']
        },
        {
          id: 3,
          question: 'f^(n)(a) = ?',
          options: [
            '(n!/2πi) ∮_C f(z)/(z-a)^(n+1) dz',
            '(1/2πi) ∮_C f(z)/(z-a)^n dz',
            '(1/2πi) ∮_C f^(n)(z)/(z-a) dz',
            'n! ∮_C f(z) dz'
          ],
          correctAnswer: 0,
          explanation: 'Cauchy formula for derivatives: f^(n)(a) = (n!/2πi) ∮_C f(z)/(z-a)^(n+1) dz',
          difficulty: 'hard',
          hints: ['generalization ของ Cauchy formula', 'มี n! ใน numerator']
        }
      ]
    },
    {
      id: 5,
      title: 'Series Representations',
      duration: '105 นาที',
      completed: false,
      objectives: [
        'หา Taylor และ Laurent series',
        'กำหนด radius of convergence',
        'จำแนกประเภท singularities'
      ],
      questions: [
        {
          id: 1,
          question: 'Taylor series ของ e^z รอบ z = 0 คือ?',
          options: [
            'Σ z^n/n!',
            'Σ (-1)^n z^(2n)/(2n)!',
            'Σ z^n',
            'Σ (-1)^n z^n/n!'
          ],
          correctAnswer: 0,
          explanation: 'e^z = Σ(n=0 to ∞) z^n/n! ซึ่ง converge สำหรับทุก z ∈ ℂ',
          difficulty: 'easy',
          hints: ['Same as real exponential series', 'Radius of convergence = ∞']
        },
        {
          id: 2,
          question: 'ประเภทของ singularity ที่ z = 0 ของ sin(z)/z คือ?',
          options: ['removable', 'simple pole', 'essential', 'branch point'],
          correctAnswer: 0,
          explanation: 'sin(z)/z = (z - z³/3! + z⁵/5! - ...)/ z = 1 - z²/3! + z⁴/5! - ... มี limit ที่ z = 0',
          difficulty: 'medium',
          hints: ['ตรวจสอบ limit เมื่อ z → 0', 'sin(z) = z - z³/3! + ...']
        },
        {
          id: 3,
          question: 'Laurent series ของ 1/(z(z-1)) รอบ z = 0 ใน 0 < |z| < 1 คือ?',
          options: [
            '-1/z - 1 - z - z² - ...',
            '1/z + 1 + z + z² + ...',
            '-1/z + 1/(z-1)',
            '1/z - 1 - z - z² - ...'
          ],
          correctAnswer: 0,
          explanation: '1/(z(z-1)) = -1/z · 1/(1-z) = -1/z · Σz^n = -1/z - 1 - z - z² - ... สำหรับ |z| < 1',
          difficulty: 'hard',
          hints: ['partial fractions: 1/(z(z-1)) = 1/z - 1/(z-1)', 'geometric series expansion']
        }
      ]
    },
    {
      id: 6,
      title: 'Residue Theory และ Applications',
      duration: '120 นาที',
      completed: false,
      objectives: [
        'คำนวณ residues',
        'ใช้ residue theorem',
        'ประยุกต์หา real integrals'
      ],
      questions: [
        {
          id: 1,
          question: 'Residue ของ 1/(z-a)² ที่ z = a คือ?',
          options: ['0', '1', '2', '1/2'],
          correctAnswer: 0,
          explanation: 'Res(f, a) คือสัมประสิทธิ์ของ 1/(z-a) ใน Laurent series, แต่ 1/(z-a)² ไม่มี term 1/(z-a)',
          difficulty: 'medium',
          hints: ['residue = coefficient ของ 1/(z-a)', '1/(z-a)² เป็น pole ของ order 2']
        },
        {
          id: 2,
          question: 'ถ้า f มี simple pole ที่ z = a แล้ว Res(f, a) = ?',
          options: [
            'lim[z→a] f(z)',
            'lim[z→a] (z-a)f(z)',
            'f(a)',
            'f\'(a)'
          ],
          correctAnswer: 1,
          explanation: 'สำหรับ simple pole: Res(f, a) = lim[z→a] (z-a)f(z)',
          difficulty: 'medium',
          hints: ['Simple pole residue formula', 'คูณ (z-a) แล้วหา limit']
        },
        {
          id: 3,
          question: '∫₀^∞ 1/(1+x²) dx เท่าไร?',
          options: ['π/2', 'π', '2π', '1'],
          correctAnswer: 0,
          explanation: 'ใช้ semicircle contour, pole ที่ z = i, Res = 1/2i, ∮ = 2πi(1/2i) = π, symmetric ∴ ∫₀^∞ = π/2',
          difficulty: 'hard',
          hints: ['ใช้ residue theorem กับ semicircle contour', 'pole ที่ z = ±i ใน upper half-plane มีแค่ z = i']
        }
      ]
    }
  ]
});

export default complexAnalysis;
// courses/university/differentialEquations.ts
import { CourseData } from '../index';

const differentialEquations = (): CourseData => ({
  title: 'Differential Equations',
  description: 'Study of ordinary and partial differential equations, solution methods, and applications in physics, engineering, and biological systems',
  duration: '16 สัปดาห์',
  difficulty: 'ยาก',
  prerequisites: [
    'แคลคูลัส',
    'Linear Algebra',
    'Multivariable Calculus',
    'Complex Analysis'
  ],
  objectives: [
    'แก้สมการเชิงอนุพันธ์สามัญอันดับที่ 1 และ 2',
    'เข้าใจและใช้ Laplace transforms',
    'แก้ระบบสมการเชิงอนุพันธ์',
    'ประยุกต์ใช้ในปัญหาทางฟิสิกส์และวิศวกรรม'
  ],
  lessons: [
    {
      id: 1,
      title: 'First-Order Differential Equations',
      duration: '95 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/Oe8x6ucS3uU',
      completed: false,
      objectives: [
        'แก้สมการ separable และ linear first-order',
        'ใช้ integrating factors',
        'แก้สมการ Bernoulli และ Riccati'
      ],
      questions: [
        {
          id: 1,
          question: 'สมการ dy/dx = y/x เป็นประเภทใด?',
          options: ['Separable', 'Linear', 'Exact', 'Homogeneous'],
          correctAnswer: 0,
          explanation: 'สมการ dy/dx = y/x สามารถแยกตัวแปรได้: dy/y = dx/x ดังนั้นเป็น separable equation',
          difficulty: 'easy',
          hints: ['ลองแยกตัวแปร y และ x', 'dy/dx = f(x)g(y)']
        },
        {
          id: 2,
          question: 'Integrating factor สำหรับ dy/dx + P(x)y = Q(x) คือ?',
          options: ['e^∫P(x)dx', 'e^∫Q(x)dx', '∫P(x)dx', '1/P(x)'],
          correctAnswer: 0,
          explanation: 'Integrating factor μ(x) = e^∫P(x)dx ทำให้สมการกลายเป็น exact',
          difficulty: 'medium',
          hints: ['หาตัวคูณที่ทำให้ซ้ายมือเป็น d/dx[μ(x)y]', 'μ(x) = e^∫P(x)dx']
        },
        {
          id: 3,
          question: 'ผลเฉลยของ dy/dx - 2y = 0 คือ?',
          options: ['y = Ce^(-2x)', 'y = Ce^(2x)', 'y = Cx²', 'y = C/x²'],
          correctAnswer: 1,
          explanation: 'เป็น homogeneous linear equation: dy/y = 2dx, ∫dy/y = ∫2dx, ln|y| = 2x + C, y = Ce^(2x)',
          difficulty: 'medium',
          hints: ['แยกตัวแปร', 'dy/y = 2dx แล้วปริพันธ์']
        }
      ]
    },
    {
      id: 2,
      title: 'Second-Order Linear Equations',
      duration: '105 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/24L6yvJX8b0',
      completed: false,
      objectives: [
        'แก้สมการ homogeneous กับ constant coefficients',
        'หาผลเฉลย particular solutions',
        'ใช้วิธี undetermined coefficients'
      ],
      questions: [
        {
          id: 1,
          question: 'Characteristic equation ของ y″ - 5y′ + 6y = 0 คือ?',
          options: ['r² - 5r + 6 = 0', 'r² + 5r + 6 = 0', 'r² - 5r - 6 = 0', 'r² + 5r - 6 = 0'],
          correctAnswer: 0,
          explanation: 'แทน y = e^(rx): r²e^(rx) - 5re^(rx) + 6e^(rx) = 0, หาร e^(rx): r² - 5r + 6 = 0',
          difficulty: 'easy',
          hints: ['แทน y = e^(rx)', 'สัมประสิทธิ์ของ y″, y′, y']
        },
        {
          id: 2,
          question: 'ถ้า characteristic equation มี roots r = 2, 3 แล้วผลเฉลย general คือ?',
          options: ['y = C₁e^(2x) + C₂e^(3x)', 'y = C₁e^(2x) + C₂xe^(3x)', 'y = C₁x²e^x + C₂x³e^x', 'y = (C₁ + C₂x)e^(2x)'],
          correctAnswer: 0,
          explanation: 'เมื่อมี roots ที่แตกต่าง r₁, r₂ ผลเฉลยคือ y = C₁e^(r₁x) + C₂e^(r₂x)',
          difficulty: 'medium',
          hints: ['Two distinct real roots', 'y = C₁e^(r₁x) + C₂e^(r₂x)']
        },
        {
          id: 3,
          question: 'สำหรับ y″ + 4y = sin(2x) ควรลอง particular solution แบบไหน?',
          options: ['A sin(2x) + B cos(2x)', 'Ax sin(2x) + Bx cos(2x)', 'Ae^(2x)', 'Ax² sin(2x)'],
          correctAnswer: 1,
          explanation: 'sin(2x) มีความถี่เดียวกับ complementary solution ∴ ต้องคูณ x: Ax sin(2x) + Bx cos(2x)',
          difficulty: 'hard',
          hints: ['ตรวจสอบ complementary solution', 'sin(2x) ซ้ำกับ homogeneous solution']
        }
      ]
    },
    {
      id: 3,
      title: 'Laplace Transforms',
      duration: '100 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/V5tebLR4txA',
      completed: false,
      objectives: [
        'คำนวณ Laplace transforms ของฟังก์ชันพื้นฐาน',
        'ใช้ properties ของ Laplace transforms',
        'แก้ initial value problems ด้วย Laplace transforms'
      ],
      questions: [
        {
          id: 1,
          question: 'L{e^(at)} เท่ากับ?',
          options: ['1/(s-a)', '1/(s+a)', 's/(s-a)', 'a/(s-a)'],
          correctAnswer: 0,
          explanation: 'L{e^(at)} = ∫₀^∞ e^(at)e^(-st) dt = ∫₀^∞ e^((a-s)t) dt = 1/(s-a) สำหรับ s > a',
          difficulty: 'medium',
          hints: ['L{e^(at)} = 1/(s-a)', 'standard Laplace transform']
        },
        {
          id: 2,
          question: 'L{f′(t)} เท่ากับ?',
          options: ['sF(s)', 'sF(s) - f(0)', 'F(s)/s', 's²F(s)'],
          correctAnswer: 1,
          explanation: 'L{f′(t)} = sF(s) - f(0) โดย F(s) = L{f(t)}',
          difficulty: 'medium',
          hints: ['Differentiation property', 'ต้องลบ initial condition']
        },
        {
          id: 3,
          question: 'หา L⁻¹{1/(s²+4)}?',
          options: ['sin(2t)', '(1/2)sin(2t)', 'cos(2t)', '(1/2)cos(2t)'],
          correctAnswer: 1,
          explanation: 'L⁻¹{1/(s²+4)} = L⁻¹{1/(s²+2²)} = (1/2)L⁻¹{2/(s²+2²)} = (1/2)sin(2t)',
          difficulty: 'hard',
          hints: ['รูปแบบ ω/(s²+ω²) = sin(ωt)', 'ω = 2, ต้องปรับค่าคงที่']
        }
      ]
    },
    {
      id: 4,
      title: 'Systems of Differential Equations',
      duration: '110 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/864j48xtSi0',
      completed: false,
      objectives: [
        'แก้ระบบ linear systems ด้วย eigenvalue method',
        'วิเคราะห์ phase portraits',
        'จำแนกประเภทของ critical points'
      ],
      questions: [
        {
          id: 1,
          question: 'สำหรับระบบ x′ = Ax, ถ้า A มี eigenvalues λ₁ < 0, λ₂ < 0 แล้ว origin เป็น?',
          options: ['Stable node', 'Unstable node', 'Saddle point', 'Center'],
          correctAnswer: 0,
          explanation: 'เมื่อ eigenvalues ทั้งคู่เป็นลบ origin เป็น stable node (ทุกวิถีเข้าหา origin)',
          difficulty: 'medium',
          hints: ['Real eigenvalues ทั้งคู่ลบ', 'Solution decay to origin']
        },
        {
          id: 2,
          question: 'ถ้า eigenvalues เป็น λ = α ± βi โดย α > 0 แล้ว critical point เป็น?',
          options: ['Stable spiral', 'Unstable spiral', 'Center', 'Saddle'],
          correctAnswer: 1,
          explanation: 'Complex eigenvalues กับ Re(λ) > 0 ให้ unstable spiral (วิถีเป็นเกลียวออกจาก origin)',
          difficulty: 'hard',
          hints: ['Complex eigenvalues', 'Real part > 0 = unstable']
        },
        {
          id: 3,
          question: 'วิธีหาผลเฉลยของระบบ x′ = Ax เมื่อ A มี repeated eigenvalue คือ?',
          options: [
            'ใช้ eigenvectors เท่านั้น',
            'ใช้ eigenvectors และ generalized eigenvectors',
            'ใช้ Laplace transforms',
            'ใช้ separation of variables'
          ],
          correctAnswer: 1,
          explanation: 'เมื่อมี repeated eigenvalues อาจต้องใช้ generalized eigenvectors เพื่อให้ได้ solution พอ',
          difficulty: 'hard',
          hints: ['Repeated eigenvalue case', 'อาจไม่มี eigenvectors เพียงพอ']
        }
      ]
    },
    {
      id: 5,
      title: 'Series Solutions',
      duration: '90 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/5i2E5bBb1rM',
      completed: false,
      objectives: [
        'หาผลเฉลยแบบอนุกรมรอบ ordinary points',
        'ใช้วิธี Frobenius สำหรับ regular singular points',
        'เข้าใจ Bessel และ Legendre equations'
      ],
      questions: [
        {
          id: 1,
          question: 'Power series solution มีรูปแบบ?',
          options: ['y = Σaₙxⁿ', 'y = Σaₙ/n!', 'y = Σaₙ(x-x₀)ⁿ', 'y = eˣΣaₙxⁿ'],
          correctAnswer: 2,
          explanation: 'Power series solution รอบจุด x₀: y = Σ(n=0 to ∞) aₙ(x-x₀)ⁿ',
          difficulty: 'easy',
          hints: ['Series รอบจุด x₀', 'Taylor series expansion']
        },
        {
          id: 2,
          question: 'Frobenius method ใช้เมื่อไร?',
          options: [
            'รอบ ordinary point',
            'รอบ regular singular point',
            'รอบ irregular singular point',
            'เสมอ'
          ],
          correctAnswer: 1,
          explanation: 'Frobenius method ใช้หาผลเฉลยรอบ regular singular point โดยใช้ y = xʳΣaₙxⁿ',
          difficulty: 'medium',
          hints: ['Regular singular point', 'y = xʳΣaₙxⁿ']
        },
        {
          id: 3,
          question: 'Bessel equation คือ?',
          options: [
            'x²y″ + xy′ + (x² - ν²)y = 0',
            'y″ - 2xy′ + 2νy = 0',
            '(1-x²)y″ - 2xy′ + ν(ν+1)y = 0',
            'y″ + y = 0'
          ],
          correctAnswer: 0,
          explanation: 'Bessel equation: x²y″ + xy′ + (x² - ν²)y = 0 มีผลเฉลยเป็น Bessel functions',
          difficulty: 'medium',
          hints: ['Standard form ของ Bessel equation', 'มี parameter ν']
        }
      ]
    },
    {
      id: 6,
      title: 'Partial Differential Equations',
      duration: '120 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/5i2E5bBb1rM',
      completed: false,
      objectives: [
        'จำแนกประเภท PDEs',
        'แก้ heat equation ด้วย separation of variables',
        'เข้าใจ wave equation และ Laplace equation'
      ],
      questions: [
        {
          id: 1,
          question: 'Heat equation คือ?',
          options: [
            '∂u/∂t = k∇²u',
            '∂²u/∂t² = c²∇²u',
            '∇²u = 0',
            '∂u/∂t + u∂u/∂x = 0'
          ],
          correctAnswer: 0,
          explanation: 'Heat equation: ∂u/∂t = k∇²u โดย k เป็น thermal diffusivity',
          difficulty: 'easy',
          hints: ['Diffusion equation', 'First-order in time']
        },
        {
          id: 2,
          question: 'Wave equation ใน 1D คือ?',
          options: [
            '∂u/∂t = k∂²u/∂x²',
            '∂²u/∂t² = c²∂²u/∂x²',
            '∂²u/∂x² + ∂²u/∂y² = 0',
            '∂u/∂t + c∂u/∂x = 0'
          ],
          correctAnswer: 1,
          explanation: 'Wave equation: ∂²u/∂t² = c²∂²u/∂x² โดย c คือ wave speed',
          difficulty: 'easy',
          hints: ['Second-order in time และ space', 'c = wave speed']
        },
        {
          id: 3,
          question: 'Separation of variables สำหรับ u(x,t) ใช้รูปแบบ?',
          options: [
            'u(x,t) = X(x) + T(t)',
            'u(x,t) = X(x) · T(t)',
            'u(x,t) = X(x)/T(t)',
            'u(x,t) = X(x)T(t) + X(t)T(x)'
          ],
          correctAnswer: 1,
          explanation: 'Separation of variables: u(x,t) = X(x)T(t) แล้วแทนใน PDE เพื่อแยกตัวแปร',
          difficulty: 'medium',
          hints: ['Product form', 'แยก functions ของตัวแปรต่างกัน']
        }
      ]
    }
  ]
});

export default differentialEquations;
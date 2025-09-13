// courses/university/linearAlgebra.ts
import { CourseData } from '../index';

const linearAlgebra = (): CourseData => ({
  title: 'Linear Algebra',
  description: 'Advanced study of vector spaces, linear transformations, eigenvalues, and applications in mathematics, engineering, and computer science',
  duration: '16 สัปดาห์',
  difficulty: 'ยาก',
  prerequisites: [
    'เมทริกซ์',
    'เวกเตอร์',
    'แคลคูลัส',
    'พีชคณิตนามธรรม'
  ],
  objectives: [
    'เข้าใจโครงสร้างของ vector space และ subspace',
    'ทำงานกับ linear transformation และ matrix representation',
    'คำนวณ eigenvalues และ eigenvectors',
    'ประยุกต์ใช้ linear algebra ในปัญหาจริง'
  ],
  lessons: [
    {
      id: 1,
      title: 'Vector Spaces และ Subspaces',
      duration: '90 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/9m0I9fFf5wA',
      completed: false,
      objectives: [
        'เข้าใจคำจำกัดความของ vector space',
        'ตรวจสอบ vector space axioms',
        'หาและตรวจสอบ subspaces'
      ],
      questions: [
        {
          id: 1,
          question: 'ชุด V = {(x, y, z) | x + y + z = 0} เป็น subspace ของ ℝ³ หรือไม่?',
          options: ['เป็น subspace', 'ไม่เป็น subspace', 'ขึ้นอยู่กับค่า x, y, z', 'ไม่สามารถตัดสินได้'],
          correctAnswer: 0,
          explanation: 'V เป็น subspace เพราะ: (1) มี zero vector (0,0,0), (2) ปิดภายใต้การบวก, (3) ปิดภายใต้การคูณสเกลาร์',
          difficulty: 'medium',
          hints: ['ตรวจสอบ 3 เงื่อนไข: zero vector, closure under addition, closure under scalar multiplication', 'x + y + z = 0 เป็นระนาบผ่านจุดกำเนิด']
        },
        {
          id: 2,
          question: 'มิติ (dimension) ของ vector space ℝⁿ คือเท่าไร?',
          options: ['n-1', 'n', 'n+1', '∞'],
          correctAnswer: 1,
          explanation: 'dim(ℝⁿ) = n เพราะมี basis vectors n ตัวที่เป็นอิสระเชิงเส้น',
          difficulty: 'easy',
          hints: ['นับจำนวน coordinate', 'standard basis vectors ใน ℝⁿ']
        },
        {
          id: 3,
          question: 'ถ้า W₁ และ W₂ เป็น subspaces ของ V แล้ว W₁ ∪ W₂ เป็น subspace เสมอหรือไม่?',
          options: ['เป็นเสมอ', 'ไม่เป็นเสมอ', 'เป็นก็ต่อเมื่อ W₁ ⊆ W₂ หรือ W₂ ⊆ W₁', 'ขึ้นอยู่กับมิติของ V'],
          correctAnswer: 2,
          explanation: 'W₁ ∪ W₂ เป็น subspace ก็ต่อเมื่อ หนึ่งใน W₁ หรือ W₂ เป็น subset ของอีกตัวหนึ่ง',
          difficulty: 'hard',
          hints: ['ลองหา counterexample', 'พิจารณาเส้นสองเส้นใน ℝ²']
        }
      ]
    },
    {
      id: 2,
      title: 'Linear Independence และ Basis',
      duration: '85 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/0n2J0gGg6xE',
      completed: false,
      objectives: [
        'ตรวจสอบความเป็นอิสระเชิงเส้น',
        'หา basis ของ vector space',
        'เข้าใจความสัมพันธ์ระหว่าง span, linear independence, และ basis'
      ],
      questions: [
        {
          id: 1,
          question: 'เวกเตอร์ {(1,2,3), (2,4,6), (1,1,1)} เป็นอิสระเชิงเส้นหรือไม่?',
          options: ['เป็นอิสระเชิงเส้น', 'ไม่เป็นอิสระเชิงเส้น', 'ขึ้นอยู่กับการเลือก basis', 'ไม่สามารถตัดสินได้'],
          correctAnswer: 1,
          explanation: 'ไม่เป็นอิสระเชิงเส้น เพราะ (2,4,6) = 2(1,2,3), ดังนั้นมี linear dependence',
          difficulty: 'medium',
          hints: ['สังเกตว่าเวกเตอร์ตัวที่สองเป็น 2 เท่าของตัวแรก', 'แก้ c₁v₁ + c₂v₂ + c₃v₃ = 0']
        },
        {
          id: 2,
          question: 'จำนวนเวกเตอร์สูงสุดที่เป็นอิสระเชิงเส้นใน ℝ³ คือ?',
          options: ['2', '3', '4', 'ไม่จำกัด'],
          correctAnswer: 1,
          explanation: 'ใน ℝ³ สามารถมีเวกเตอร์อิสระเชิงเส้นได้สูงสุด 3 ตัว (เท่ากับมิติ)',
          difficulty: 'easy',
          hints: ['มิติของ ℝ³', 'จำนวนเวกเตอร์อิสระเชิงเส้น ≤ มิติของ space']
        },
        {
          id: 3,
          question: 'ถ้า S = {v₁, v₂, ..., vₖ} เป็น basis ของ V แล้วข้อใดถูกต้อง?',
          options: [
            'S เป็นอิสระเชิงเส้นและ span(S) = V',
            'S มีจำนวนเวกเตอร์น้อยที่สุดที่ span V',
            'S มีจำนวนเวกเตอร์มากที่สุดที่เป็นอิสระเชิงเส้น',
            'ทุกข้อถูก'
          ],
          correctAnswer: 3,
          explanation: 'Basis คือชุดเวกเตอร์ที่เป็นอิสระเชิงเส้น span ทั้ง space และมีขนาดเท่ากับมิติของ space',
          difficulty: 'medium',
          hints: ['นิยาม basis', 'สมบัติทั้งหมดของ basis']
        }
      ]
    },
    {
      id: 3,
      title: 'Linear Transformations',
      duration: '95 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/1p4K1hHh7yI',
      completed: false,
      objectives: [
        'เข้าใจคำจำกัดความของ linear transformation',
        'หา matrix representation ของ linear transformation',
        'คำนวณ kernel และ image'
      ],
      questions: [
        {
          id: 1,
          question: 'ฟังก์ชัน T: ℝ² → ℝ² โดย T(x,y) = (x+y, xy) เป็น linear transformation หรือไม่?',
          options: ['เป็น linear transformation', 'ไม่เป็น linear transformation', 'ขึ้นอยู่กับค่า x, y', 'ไม่สามารถตัดสินได้'],
          correctAnswer: 1,
          explanation: 'ไม่เป็น linear transformation เพราะ T(x,y) = (x+y, xy) ไม่ satisfy T(av) = aT(v) เมื่อ a ≠ 1',
          difficulty: 'medium',
          hints: ['ตรวจสอบ T(av) = aT(v)', 'พจน์ xy ทำให้ไม่เป็น linear']
        },
        {
          id: 2,
          question: 'ถ้า T: V → W เป็น linear transformation แล้ว kernel ของ T คือ?',
          options: [
            'ชุดของเวกเตอร์ทั้งหมดใน V',
            'ชุดของเวกเตอร์ใน V ที่ T map ไป zero vector',
            'ชุดของเวกเตอร์ทั้งหมดใน W',
            'ชุดของเวกเตอร์ใน W ที่เป็น image ของ T'
          ],
          correctAnswer: 1,
          explanation: 'ker(T) = {v ∈ V : T(v) = 0} คือชุดเวกเตอร์ใน V ที่ถูก map ไป zero vector ใน W',
          difficulty: 'easy',
          hints: ['kernel = null space', 'เวกเตอร์ที่ให้ผลเป็น zero']
        },
        {
          id: 3,
          question: 'ถ้า T: ℝ³ → ℝ² และ dim(ker(T)) = 1 แล้ว dim(im(T)) เท่าไร?',
          options: ['1', '2', '3', 'ไม่สามารถหาได้'],
          correctAnswer: 1,
          explanation: 'ใช้ Rank-Nullity Theorem: dim(V) = dim(ker(T)) + dim(im(T)), ดังนั้น 3 = 1 + dim(im(T)), dim(im(T)) = 2',
          difficulty: 'hard',
          hints: ['Rank-Nullity Theorem', 'dim(domain) = dim(kernel) + dim(image)']
        }
      ]
    },
    {
      id: 4,
      title: 'Eigenvalues และ Eigenvectors',
      duration: '100 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/2q6L2iIi8kM',
      completed: false,
      objectives: [
        'หา eigenvalues และ eigenvectors',
        'คำนวณ characteristic polynomial',
        'เข้าใจการ diagonalize matrix'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า A = [3 1; 0 2] แล้ว eigenvalues ของ A คือ?',
          options: ['λ = 2, 3', 'λ = 1, 2', 'λ = 0, 3', 'λ = 1, 3'],
          correctAnswer: 0,
          explanation: 'Characteristic polynomial: det(A - λI) = (3-λ)(2-λ) = 0, ดังนั้น λ = 2, 3',
          difficulty: 'medium',
          hints: ['หา det(A - λI) = 0', 'เมทริกซ์สามเหลี่ยมบนมี eigenvalues บนเส้นทแยงมุม']
        },
        {
          id: 2,
          question: 'เมทริกซ์ n×n สามารถมี eigenvalues ได้มากที่สุดกี่ตัว?',
          options: ['n-1', 'n', 'n+1', 'ไม่จำกัด'],
          correctAnswer: 1,
          explanation: 'เมทริกซ์ n×n มี characteristic polynomial degree n ดังนั้นมี eigenvalues ได้มากที่สุด n ตัว',
          difficulty: 'easy',
          hints: ['Fundamental Theorem of Algebra', 'degree ของ characteristic polynomial']
        },
        {
          id: 3,
          question: 'เมทริกซ์ A สามารถ diagonalize ได้เมื่อไร?',
          options: [
            'เมื่อ A มี n eigenvalues ที่แตกต่างกัน',
            'เมื่อ A มี n eigenvectors ที่เป็นอิสระเชิงเส้น',
            'เมื่อ geometric multiplicity = algebraic multiplicity สำหรับทุก eigenvalue',
            'ทั้ง B และ C'
          ],
          correctAnswer: 3,
          explanation: 'A diagonalize ได้ก็ต่อเมื่อมี eigenvectors อิสระเชิงเส้น n ตัว ซึ่งเกิดขึ้นเมื่อ geometric multiplicity = algebraic multiplicity',
          difficulty: 'hard',
          hints: ['เงื่อนไขการ diagonalize', 'ความสัมพันธ์ระหว่าง multiplicities']
        }
      ]
    },
    {
      id: 5,
      title: 'Inner Product Spaces',
      duration: '80 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/9m0I9fFf5wA',
      completed: false,
      objectives: [
        'เข้าใจคำจำกัดความของ inner product',
        'คำนวณ orthogonal projections',
        'ใช้ Gram-Schmidt process'
      ],
      questions: [
        {
          id: 1,
          question: 'ใน ℝⁿ standard inner product ⟨u,v⟩ คือ?',
          options: ['u·v', 'u×v', '||u||||v||', 'u+v'],
          correctAnswer: 0,
          explanation: 'Standard inner product ใน ℝⁿ คือ dot product: ⟨u,v⟩ = u·v = u₁v₁ + u₂v₂ + ... + uₙvₙ',
          difficulty: 'easy',
          hints: ['dot product', 'บวกผลคูณของ components']
        },
        {
          id: 2,
          question: 'เวกเตอร์ u และ v เป็น orthogonal เมื่อไร?',
          options: ['⟨u,v⟩ = 1', '⟨u,v⟩ = 0', '||u|| = ||v||', 'u = v'],
          correctAnswer: 1,
          explanation: 'เวกเตอร์สองตัวเป็น orthogonal ก็ต่อเมื่อ inner product ของพวกมันเท่ากับ 0',
          difficulty: 'easy',
          hints: ['perpendicular vectors', 'inner product = 0']
        },
        {
          id: 3,
          question: 'Gram-Schmidt process ใช้เพื่ออะไร?',
          options: [
            'หา eigenvalues',
            'แปลงชุดเวกเตอร์ให้เป็น orthonormal basis',
            'หา determinant',
            'แก้ระบบสมการ'
          ],
          correctAnswer: 1,
          explanation: 'Gram-Schmidt process แปลงชุดเวกเตอร์ที่เป็นอิสระเชิงเส้นให้เป็น orthonormal basis',
          difficulty: 'medium',
          hints: ['orthogonalization process', 'จาก linearly independent เป็น orthonormal']
        }
      ]
    },
    {
      id: 6,
      title: 'Applications และ Special Matrices',
      duration: '90 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/9m0I9fFf5wA',
      completed: false,
      objectives: [
        'ประยุกต์ใช้ในปัญหา least squares',
        'เข้าใจ symmetric และ orthogonal matrices',
        'ใช้ SVD (Singular Value Decomposition)'
      ],
      questions: [
        {
          id: 1,
          question: 'Symmetric matrix A มีสมบัติพิเศษอะไร?',
          options: [
            'A = Aᵀ',
            'eigenvalues ทั้งหมดเป็นจำนวนจริง',
            'eigenvectors ที่ต่าง eigenvalues เป็น orthogonal',
            'ทุกข้อถูก'
          ],
          correctAnswer: 3,
          explanation: 'Symmetric matrix มีสมบัติ: A = Aᵀ, eigenvalues เป็นจริง, eigenvectors orthogonal, และ diagonalize ได้',
          difficulty: 'medium',
          hints: ['สมบัติของ symmetric matrix', 'Spectral Theorem']
        },
        {
          id: 2,
          question: 'ปัญหา least squares หาค่าต่ำสุดของอะไร?',
          options: ['||Ax||', '||Ax - b||', '||x||', '||A||'],
          correctAnswer: 1,
          explanation: 'Least squares หาค่า x ที่ทำให้ ||Ax - b||² มีค่าต่ำสุด',
          difficulty: 'medium',
          hints: ['minimize residual', 'distance from Ax to b']
        },
        {
          id: 3,
          question: 'Singular Value Decomposition (SVD) แยก matrix A เป็น?',
          options: ['A = UDV', 'A = UΣVᵀ', 'A = PDP⁻¹', 'A = QR'],
          correctAnswer: 1,
          explanation: 'SVD: A = UΣVᵀ โดย U, V เป็น orthogonal matrices และ Σ เป็น diagonal matrix ของ singular values',
          difficulty: 'hard',
          hints: ['SVD factorization', 'U และ V เป็น orthogonal']
        }
      ]
    }
  ]
});

export default linearAlgebra;
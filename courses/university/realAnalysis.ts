// courses/university/realAnalysis.ts
import { CourseData } from '../index';

const realAnalysis = (): CourseData => ({
  title: 'Real Analysis',
  description: 'Rigorous study of real numbers, sequences, series, limits, continuity, differentiation, and integration with emphasis on proofs and theoretical foundations',
  duration: '16 สัปดาห์',
  difficulty: 'ยาก',
  prerequisites: [
    'แคลคูลัส',
    'Linear Algebra',
    'Mathematical Proofs',
    'Set Theory'
  ],
  objectives: [
    'เข้าใจโครงสร้างของจำนวนจริงและสมบัติความสมบูรณ์',
    'พิสูจน์ทฤษฎีบทพื้นฐานเกี่ยวกับลิมิตและความต่อเนื่อง',
    'วิเคราะห์การลู่เข้าของลำดับและอนุกรม',
    'เข้าใจทฤษฎีการปริพันธ์ Riemann และ Lebesgue'
  ],
  lessons: [
    {
      id: 1,
      title: 'Real Numbers และ Completeness',
      duration: '90 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/0_w-R_g5lRA',
      completed: false,
      objectives: [
        'เข้าใจ axioms ของจำนวนจริง',
        'พิสูจน์สมบัติของ supremum และ infimum',
        'ใช้ completeness axiom'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า S = {1 - 1/n : n ∈ ℕ} แล้ว sup(S) เท่าไร?',
          options: ['1', '0', '1 - 1/n', 'ไม่มี'],
          correctAnswer: 0,
          explanation: 'S = {0, 1/2, 2/3, 3/4, ...} มี upper bound คือ 1 และ 1 เป็น least upper bound เพราะสำหรับ ε > 0 ใดๆ มี n ที่ทำให้ 1 - 1/n > 1 - ε',
          difficulty: 'medium',
          hints: ['หา least upper bound', 'ตรวจสอบว่า 1 เป็น upper bound และเป็น least']
        },
        {
          id: 2,
          question: 'Completeness axiom ของ ℝ คือ?',
          options: [
            'ทุก bounded sequence มี convergent subsequence',
            'ทุก non-empty bounded above set มี supremum',
            'ทุก Cauchy sequence convergent',
            'ทุกข้อถูก'
          ],
          correctAnswer: 3,
          explanation: 'สามข้อนี้เป็น equivalent characterizations ของ completeness ของ ℝ',
          difficulty: 'hard',
          hints: ['Completeness มีหลาย equivalent forms', 'Supremum property, Cauchy criterion, Bolzano-Weierstrass']
        },
        {
          id: 3,
          question: 'Archimedean property คือ?',
          options: [
            'สำหรับ x, y > 0 มี n ∈ ℕ ที่ nx > y',
            'ℚ dense ใน ℝ',
            'ℝ uncountable',
            'ทุก bounded set มี supremum'
          ],
          correctAnswer: 0,
          explanation: 'Archimedean property: สำหรับ real numbers x, y > 0 มี natural number n ที่ nx > y',
          difficulty: 'medium',
          hints: ['สมบัติเกี่ยวกับการคูณด้วย natural numbers', 'ไม่มี infinitely large หรือ infinitely small numbers']
        }
      ]
    },
    {
      id: 2,
      title: 'Sequences และ Convergence',
      duration: '100 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/49Ro2zf9hAc',
      completed: false,
      objectives: [
        'พิสูจน์ convergence/divergence ของลำดับ',
        'ใช้ Cauchy criterion',
        'เข้าใจ lim sup และ lim inf'
      ],
      questions: [
        {
          id: 1,
          question: 'ลำดับ {n/(n+1)} convergent ไป?',
          options: ['0', '1', '∞', 'divergent'],
          correctAnswer: 1,
          explanation: 'lim[n→∞] n/(n+1) = lim[n→∞] 1/(1+1/n) = 1/1 = 1',
          difficulty: 'easy',
          hints: ['หารทั้งเศษส่วนด้วย n', 'lim 1/n = 0']
        },
        {
          id: 2,
          question: 'Cauchy sequence คือ?',
          options: [
            'ลำดับที่ bounded',
            'ลำดับที่สำหรับ ε > 0 มี N ที่ |aₘ - aₙ| < ε เมื่อ m,n > N',
            'ลำดับที่ monotonic',
            'ลำดับที่ convergent'
          ],
          correctAnswer: 1,
          explanation: 'Cauchy sequence: สำหรับ ε > 0 มี N ที่เมื่อ m,n ≥ N แล้ว |aₘ - aₙ| < ε',
          difficulty: 'medium',
          hints: ['terms ใกล้กันเมื่อ indices ใหญ่', 'ไม่ต้องรู้ limit เพื่อตรวจสอบ']
        },
        {
          id: 3,
          question: 'ถ้า aₙ = (-1)ⁿ แล้ว lim sup aₙ เท่าไร?',
          options: ['1', '-1', '0', 'ไม่มี'],
          correctAnswer: 0,
          explanation: 'aₙ = (-1)ⁿ oscillates ระหว่าง 1 และ -1, lim sup aₙ = 1 (supremum ของ limit points)',
          difficulty: 'hard',
          hints: ['lim sup = lim[n→∞] sup{aₖ : k ≥ n}', 'subsequential limits คือ 1 และ -1']
        }
      ]
    },
    {
      id: 3,
      title: 'Series และ Tests for Convergence',
      duration: '105 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/z4oPviE02oE',
      completed: false,
      objectives: [
        'ใช้ comparison, ratio, และ root tests',
        'เข้าใจ absolute vs conditional convergence',
        'พิสูจน์การลู่เข้าของอนุกรมพิเศษ'
      ],
      questions: [
        {
          id: 1,
          question: '∑(1/n²) convergent หรือ divergent?',
          options: ['convergent', 'divergent', 'conditionally convergent', 'ไม่สามารถตัดสินได้'],
          correctAnswer: 0,
          explanation: 'p-series ∑(1/nᵖ) convergent เมื่อ p > 1, ที่นี่ p = 2 > 1 ดังนั้น convergent',
          difficulty: 'easy',
          hints: ['p-series test', 'p = 2 > 1']
        },
        {
          id: 2,
          question: 'Ratio test: ถ้า lim|aₙ₊₁/aₙ| = L แล้ว?',
          options: [
            'convergent ถ้า L < 1, divergent ถ้า L > 1',
            'convergent ถ้า L > 1, divergent ถ้า L < 1',
            'เสมอ convergent',
            'เสมอ divergent'
          ],
          correctAnswer: 0,
          explanation: 'Ratio test: convergent ถ้า L < 1, divergent ถ้า L > 1, inconclusive ถ้า L = 1',
          difficulty: 'medium',
          hints: ['L < 1 means terms decrease rapidly', 'L > 1 means terms increase']
        },
        {
          id: 3,
          question: '∑((-1)ⁿ/n) เป็นแบบไหน?',
          options: [
            'absolutely convergent',
            'conditionally convergent',
            'divergent',
            'oscillating'
          ],
          correctAnswer: 1,
          explanation: '∑((-1)ⁿ/n) convergent โดย alternating series test แต่ ∑(1/n) divergent ดังนั้น conditionally convergent',
          difficulty: 'hard',
          hints: ['Alternating series test', '∑|aₙ| = ∑(1/n) divergent']
        }
      ]
    },
    {
      id: 4,
      title: 'Continuity และ Uniform Continuity',
      duration: '95 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/f_sNWn7zujU',
      completed: false,
      objectives: [
        'พิสูจน์ continuity ด้วย ε-δ definition',
        'เข้าใจความแตกต่างระหว่าง continuity และ uniform continuity',
        'ใช้ intermediate value theorem และ extreme value theorem'
      ],
      questions: [
        {
          id: 1,
          question: 'f continuous ที่ c หมายความว่า?',
          options: [
            'lim[x→c] f(x) = f(c)',
            'สำหรับ ε > 0 มี δ > 0 ที่ |x-c| < δ ⟹ |f(x)-f(c)| < ε',
            'f มีค่าที่ c',
            'ทุกข้อถูก'
          ],
          correctAnswer: 3,
          explanation: 'Continuity ต้องการ: f(c) มีค่า, lim[x→c] f(x) มีค่า, และเท่ากับ f(c)',
          difficulty: 'easy',
          hints: ['ε-δ definition', 'limit equals function value']
        },
        {
          id: 2,
          question: 'f(x) = x² uniform continuous บน ℝ หรือไม่?',
          options: ['ใช่', 'ไม่ใช่', 'เฉพาะบน bounded intervals', 'ขึ้นอยู่กับ ε'],
          correctAnswer: 1,
          explanation: 'f(x) = x² ไม่ uniform continuous บน ℝ เพราะ slope เพิ่มขึ้นเรื่อยๆ ทำให้ δ ต้องขึ้นกับตำแหน่ง',
          difficulty: 'medium',
          hints: ['Uniform continuity ต้องการ δ เดียวกันสำหรับทุกจุด', 'f\'(x) = 2x unbounded']
        },
        {
          id: 3,
          question: 'Intermediate Value Theorem ใช้ได้เมื่อ?',
          options: [
            'f continuous บน [a,b]',
            'f differentiable บน [a,b]',
            'f bounded บน [a,b]',
            'f monotonic บน [a,b]'
          ],
          correctAnswer: 0,
          explanation: 'IVT: ถ้า f continuous บน [a,b] และ k อยู่ระหว่าง f(a) และ f(b) แล้วมี c ∈ [a,b] ที่ f(c) = k',
          difficulty: 'easy',
          hints: ['ต้องการแค่ continuity', 'บน closed bounded interval']
        }
      ]
    },
    {
      id: 5,
      title: 'Differentiation Theory',
      duration: '100 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/V3Wg_jrMSQY',
      completed: false,
      objectives: [
        'พิสูจน์ Mean Value Theorem',
        'เข้าใจความสัมพันธ์ระหว่าง differentiability และ continuity',
        'วิเคราะห์ uniform convergence ของ derivatives'
      ],
      questions: [
        {
          id: 1,
          question: 'ถ้า f differentiable ที่ c แล้ว f จำเป็นต้อง continuous ที่ c หรือไม่?',
          options: ['ใช่', 'ไม่จำเป็น', 'ขึ้นอยู่กับ f', 'เฉพาะบน ℝ'],
          correctAnswer: 0,
          explanation: 'Differentiability implies continuity: ถ้า f\'(c) มีค่า แล้ว lim[x→c] f(x) = f(c)',
          difficulty: 'easy',
          hints: ['differentiability เป็นเงื่อนไขที่แรงกว่า continuity', 'ใช้ definition ของ derivative']
        },
        {
          id: 2,
          question: 'Mean Value Theorem ระบุว่า?',
          options: [
            'ถ้า f continuous บน [a,b] แล้วมี c ที่ f(c) = (f(a)+f(b))/2',
            'ถ้า f continuous บน [a,b], differentiable บน (a,b) แล้วมี c ที่ f\'(c) = (f(b)-f(a))/(b-a)',
            'ถ้า f differentiable แล้ว f\' continuous',
            'ถ้า f(a) = f(b) แล้วมี c ที่ f\'(c) = 0'
          ],
          correctAnswer: 1,
          explanation: 'MVT: มี c ∈ (a,b) ที่ f\'(c) = (f(b)-f(a))/(b-a) เมื่อ f continuous บน [a,b] และ differentiable บน (a,b)',
          difficulty: 'medium',
          hints: ['slope ของ secant line = derivative ที่จุดหนึ่ง', 'ต้องการ continuity บน closed interval']
        },
        {
          id: 3,
          question: 'ฟังก์ชัน f(x) = |x| differentiable ที่ x = 0 หรือไม่?',
          options: ['differentiable', 'ไม่ differentiable', 'ขึ้นอยู่กับ definition', 'มี derivative เฉพาะทางเดียว'],
          correctAnswer: 1,
          explanation: 'f(x) = |x| ไม่ differentiable ที่ x = 0 เพราะ left derivative = -1, right derivative = 1 ≠ กัน',
          difficulty: 'medium',
          hints: ['ตรวจสอบ one-sided derivatives', 'มี corner ที่ x = 0']
        }
      ]
    },
    {
      id: 6,
      title: 'Integration Theory',
      duration: '120 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/QeYUHA0UMVg',
      completed: false,
      objectives: [
        'เข้าใจ Riemann integral definition',
        'พิสูจน์ Fundamental Theorem of Calculus',
        'เปรียบเทียบ Riemann และ Lebesgue integration'
      ],
      questions: [
        {
          id: 1,
          question: 'ฟังก์ชัน Riemann integrable เมื่อ?',
          options: [
            'continuous ทุกจุด',
            'bounded และมี discontinuities เป็นชุดที่มี measure zero',
            'monotonic',
            'differentiable almost everywhere'
          ],
          correctAnswer: 1,
          explanation: 'Riemann integrability theorem: f bounded Riemann integrable ⟺ discontinuities ของ f มี measure zero',
          difficulty: 'hard',
          hints: ['Lebesgue theorem', 'measure zero = countable หรือ smaller']
        },
        {
          id: 2,
          question: 'Fundamental Theorem of Calculus (Part 1) คือ?',
          options: [
            '∫ᵃᵇ f\'(x) dx = f(b) - f(a)',
            'ถ้า F(x) = ∫ᵃˣ f(t) dt แล้ว F\'(x) = f(x)',
            '∫ f(x) dx = F(x) + C',
            'd/dx ∫f(x) dx = f(x)'
          ],
          correctAnswer: 1,
          explanation: 'FTC Part 1: ถ้า f continuous และ F(x) = ∫ᵃˣ f(t) dt แล้ว F\'(x) = f(x)',
          difficulty: 'medium',
          hints: ['derivative ของ integral', 'F(x) = ∫ᵃˣ f(t) dt']
        },
        {
          id: 3,
          question: 'ข้อใดเป็นข้อดีของ Lebesgue integration เหนือ Riemann?',
          options: [
            'integrate ฟังก์ชันที่มี discontinuities มากกว่าได้',
            'Dominated Convergence Theorem',
            'สามารถ integrate บน general measure spaces',
            'ทุกข้อถูก'
          ],
          correctAnswer: 3,
          explanation: 'Lebesgue integration มี convergence theorems ที่ดีกว่า และสามารถจัดการกับฟังก์ชันที่ pathological กว่าได้',
          difficulty: 'hard',
          hints: ['Lebesgue theory ทั่วไปกว่า', 'Better convergence properties']
        }
      ]
    }
  ]
});

export default realAnalysis;
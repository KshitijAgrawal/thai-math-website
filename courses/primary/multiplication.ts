import { CourseData } from '../index';

const multiplicationCourse: CourseData = {
  title: 'การคูณหาร',
  description: 'เรียนรู้สูตรคูณและการหาร เข้าใจความสัมพันธ์ระหว่างการคูณและการหาร และนำไปใช้ในการแก้โจทย์ปัญหา',
  duration: '4-5 ชั่วโมง',
  difficulty: 'ปานกลาง',
  prerequisites: ['การบวกลบ', 'การนับข้าม'],
  objectives: [
    'ท่องสูตรคูณแม่ 2-9 ได้',
    'คูณตัวเลขได้ถูกต้อง',
    'หารตัวเลขได้ถูกต้อง',
    'เข้าใจความสัมพันธ์ระหว่างการคูณและการหาร'
  ],
  lessons: [
    {
      id: 1,
      title: 'สูตรคูณแม่ 2',
      duration: '25 นาที',
      completed: false,
      hasVideo: true, 
      videoUrl: 'https://www.youtube.com/embed/8xwjqkcKlfU',
      questions: [
        {
          id: 1,
          question: '2 × 4 = ?',
          options: ['6', '8', '10', '12'],
          correctAnswer: 1,
          explanation: '2 × 4 = 8'
        },
        {
          id: 2,
          question: '2 × 7 = ?',
          options: ['12', '14', '16', '18'],
          correctAnswer: 1,
          explanation: '2 × 7 = 14'
        },
        {
          id: 3,
          question: '2 × 9 = ?',
          options: ['16', '18', '20', '22'],
          correctAnswer: 1,
          explanation: '2 × 9 = 18'
        }
      ]
    },
    {
      id: 2,
      title: 'สูตรคูณแม่ 3',
      duration: '25 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/2l0kCkP2t9E',
      completed: false,
      questions: [
        {
          id: 1,
          question: '3 × 5 = ?',
          options: ['12', '15', '18', '21'],
          correctAnswer: 1,
          explanation: '3 × 5 = 15'
        },
        {
          id: 2,
          question: '3 × 8 = ?',
          options: ['21', '24', '27', '30'],
          correctAnswer: 1,
          explanation: '3 × 8 = 24'
        }
      ]
    },
    {
      id: 3,
      title: 'สูตรคูณแม่ 4',
      duration: '25 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/3uYdV9pUe2s',
      completed: false,
      questions: [
        {
          id: 1,
          question: '4 × 6 = ?',
          options: ['20', '24', '28', '32'],
          correctAnswer: 1,
          explanation: '4 × 6 = 24'
        },
        {
          id: 2,
          question: '4 × 9 = ?',
          options: ['32', '36', '40', '44'],
          correctAnswer: 1,
          explanation: '4 × 9 = 36'
        }
      ]
    },
    {
      id: 4,
      title: 'สูตรคูณแม่ 5',
      duration: '20 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/hlECNDaR78Y',
      completed: false,
      questions: [
        {
          id: 1,
          question: '5 × 8 = ?',
          options: ['35', '40', '45', '50'],
          correctAnswer: 1,
          explanation: '5 × 8 = 40'
        },
        {
          id: 2,
          question: '5 × 6 = ?',
          options: ['25', '30', '35', '40'],
          correctAnswer: 1,
          explanation: '5 × 6 = 30'
        }
      ]
    },
    {
      id: 5,
      title: 'สูตรคูณแม่ 6-9',
      duration: '35 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/jHfg-9Gax2g',
      completed: false,
      questions: [
        {
          id: 1,
          question: '7 × 8 = ?',
          options: ['54', '56', '64', '72'],
          correctAnswer: 1,
          explanation: '7 × 8 = 56'
        },
        {
          id: 2,
          question: '9 × 6 = ?',
          options: ['52', '54', '56', '58'],
          correctAnswer: 1,
          explanation: '9 × 6 = 54'
        },
        {
          id: 3,
          question: '6 × 7 = ?',
          options: ['40', '42', '44', '46'],
          correctAnswer: 1,
          explanation: '6 × 7 = 42'
        }
      ]
    },
    {
      id: 6,
      title: 'การคูณสองหลัก',
      duration: '30 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/wXlEom08P2E',
      completed: false,
      questions: [
        {
          id: 1,
          question: '12 × 3 = ?',
          options: ['34', '36', '38', '40'],
          correctAnswer: 1,
          explanation: '12 × 3 = 36'
        },
        {
          id: 2,
          question: '15 × 2 = ?',
          options: ['28', '30', '32', '34'],
          correctAnswer: 1,
          explanation: '15 × 2 = 30'
        }
      ]
    },
    {
      id: 7,
      title: 'การหารพื้นฐาน',
      duration: '25 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/PBvFcUQIQJg',
      completed: false,
      questions: [
        {
          id: 1,
          question: '24 ÷ 6 = ?',
          options: ['3', '4', '5', '6'],
          correctAnswer: 1,
          explanation: '24 ÷ 6 = 4'
        },
        {
          id: 2,
          question: '35 ÷ 7 = ?',
          options: ['4', '5', '6', '7'],
          correctAnswer: 1,
          explanation: '35 ÷ 7 = 5'
        }
      ]
    },
    {
      id: 8,
      title: 'การหารมีเศษ',
      duration: '30 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/PlvEnvvgP1E',
      completed: false,
      questions: [
        {
          id: 1,
          question: '17 ÷ 3 = ? เศษ ?',
          options: ['5 เศษ 2', '5 เศษ 3', '6 เศษ 1', '4 เศษ 5'],
          correctAnswer: 0,
          explanation: '17 ÷ 3 = 5 เศษ 2 (เพราะ 3×5=15, 17-15=2)'
        },
        {
          id: 2,
          question: '23 ÷ 4 = ? เศษ ?',
          options: ['5 เศษ 3', '6 เศษ 1', '5 เศษ 2', '6 เศษ 2'],
          correctAnswer: 0,
          explanation: '23 ÷ 4 = 5 เศษ 3 (เพราะ 4×5=20, 23-20=3)'
        }
      ]
    },
    {
      id: 9,
      title: 'ความสัมพันธ์คูณหาร',
      duration: '25 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/_pKxr_Stsn4',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'ถ้า 6 × 7 = 42 แล้ว 42 ÷ 6 = ?',
          options: ['6', '7', '8', '9'],
          correctAnswer: 1,
          explanation: '42 ÷ 6 = 7 (การหารเป็นการดำเนินการผกผันของการคูณ)'
        },
        {
          id: 2,
          question: 'ถ้า 8 × 9 = 72 แล้ว 72 ÷ 8 = ?',
          options: ['8', '9', '10', '11'],
          correctAnswer: 1,
          explanation: '72 ÷ 8 = 9'
        }
      ]
    },
    {
      id: 10,
      title: 'โจทย์ปัญหาการคูณหาร',
      duration: '30 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/2OMApMT5qHQ',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'นักเรียน 24 คน แบ่งเป็นกลุ่ม กลุ่มละ 6 คน จะได้กี่กลุ่ม?',
          options: ['3 กลุ่ม', '4 กลุ่ม', '5 กลุ่ม', '6 กลุ่ม'],
          correctAnswer: 1,
          explanation: '24 ÷ 6 = 4 กลุ่ม'
        },
        {
          id: 2,
          question: 'ถ้าซื้อขนม 1 ห่อ ราคา 15 บาท ซื้อ 4 ห่อ ต้องจ่ายเงินเท่าไร?',
          options: ['45 บาท', '60 บาท', '75 บาท', '90 บาท'],
          correctAnswer: 1,
          explanation: '15 × 4 = 60 บาท'
        }
      ]
    }
  ]
};

const multiplication = (): CourseData => multiplicationCourse;
export default multiplication;
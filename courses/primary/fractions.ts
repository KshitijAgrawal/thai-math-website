import { CourseData } from '../index';

const fractionsCourse: CourseData = {
  title: 'เศษส่วน',
  description: 'เรียนรู้แนวคิดเศษส่วน การเปรียบเทียบ การบวกลบเศษส่วน และการประยุกต์ใช้ในชีวิตประจำวัน',
  duration: '3-4 ชั่วโมง',
  difficulty: 'ปานกลาง',
  prerequisites: ['การคูณหาร', 'การเปรียบเทียบตัวเลข'],
  objectives: [
    'เข้าใจความหมายของเศษส่วน',
    'เปรียบเทียบเศษส่วนได้',
    'บวกลบเศษส่วนได้',
    'ประยุกต์ใช้เศษส่วนในชีวิตประจำวัน'
  ],
  lessons: [
    {
      id: 1,
      title: 'ความหมายของเศษส่วน',
      duration: '20 นาที',
      completed: false,
      hasVideo: true, 
      videoUrl: 'https://www.youtube.com/embed/0XYkX2j63iQ',
      questions: [
        {
          id: 1,
          question: 'ถ้าแบ่งพิซซ่า 1 แผ่นเป็น 4 ชิ้นเท่าๆกัน แล้วกิน 1 ชิ้น จะเหลือเท่าไร?',
          options: ['1/4', '2/4', '3/4', '4/4'],
          correctAnswer: 2,
          explanation: 'เหลือ 3 ชิ้นจาก 4 ชิ้น = 3/4'
        },
        {
          id: 2,
          question: 'ถ้าแบ่งแอปเปิ้ล 1 ลูกเป็น 8 ชิ้น แล้วกิน 3 ชิ้น จะกินไปเท่าไร?',
          options: ['3/8', '5/8', '3/5', '8/3'],
          correctAnswer: 0,
          explanation: 'กิน 3 ชิ้นจาก 8 ชิ้น = 3/8'
        }
      ]
    },
    {
      id: 2,
      title: 'การเปรียบเทียบเศษส่วน',
      duration: '25 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/3rJr6iIYwB4',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'เศษส่วนใดมีค่ามากกว่า?',
          options: ['1/2', '1/3', '1/4', 'เท่ากันหมด'],
          correctAnswer: 0,
          explanation: '1/2 มากกว่า เพราะยิ่งตัวส่วนน้อย เศษส่วนยิ่งมีค่ามาก'
        },
        {
          id: 2,
          question: '2/3 กับ 3/4 อันไหนมากกว่า?',
          options: ['2/3', '3/4', 'เท่ากัน', 'เปรียบเทียบไม่ได้'],
          correctAnswer: 1,
          explanation: '3/4 = 9/12 และ 2/3 = 8/12 ดังนั้น 3/4 มากกว่า'
        }
      ]
    },
    {
      id: 3,
      title: 'การบวกเศษส่วนเดียวกัน',
      duration: '20 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/4mIh9u3XwGQ',
      completed: false,
      questions: [
        {
          id: 1,
          question: '2/5 + 1/5 = ?',
          options: ['3/5', '3/10', '2/5', '1/5'],
          correctAnswer: 0,
          explanation: '2/5 + 1/5 = 3/5 (บวกตัวเศษ ตัวส่วนเหมือนเดิม)'
        },
        {
          id: 2,
          question: '3/7 + 2/7 = ?',
          options: ['5/7', '5/14', '6/7', '1'],
          correctAnswer: 0,
          explanation: '3/7 + 2/7 = 5/7'
        }
      ]
    },
    {
      id: 4,
      title: 'การลบเศษส่วนเดียวกัน',
      duration: '20 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/5cGf0p2YjYw',
      completed: false,
      questions: [
        {
          id: 1,
          question: '4/6 - 2/6 = ?',
          options: ['2/6', '2/12', '6/6', '4/6'],
          correctAnswer: 0,
          explanation: '4/6 - 2/6 = 2/6 (ลบตัวเศษ ตัวส่วนเหมือนเดิม)'
        },
        {
          id: 2,
          question: '5/8 - 3/8 = ?',
          options: ['2/8', '2/16', '8/8', '3/8'],
          correctAnswer: 0,
          explanation: '5/8 - 3/8 = 2/8'
        }
      ]
    },
    {
      id: 5,
      title: 'การบวกเศษส่วนต่างกัน',
      duration: '30 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/6sN8Kf0LkFY',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1/2 + 1/4 = ?',
          options: ['2/6', '2/4', '3/4', '1/6'],
          correctAnswer: 2,
          explanation: '1/2 + 1/4 = 2/4 + 1/4 = 3/4'
        },
        {
          id: 2,
          question: '1/3 + 1/6 = ?',
          options: ['2/9', '1/2', '2/6', '1/3'],
          correctAnswer: 1,
          explanation: '1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2'
        }
      ]
    },
    {
      id: 6,
      title: 'การลบเศษส่วนต่างกัน',
      duration: '30 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/7Tz3Vw2oQv8',
      completed: false,
      questions: [
        {
          id: 1,
          question: '3/4 - 1/2 = ?',
          options: ['1/4', '2/4', '1/2', '2/2'],
          correctAnswer: 0,
          explanation: '3/4 - 1/2 = 3/4 - 2/4 = 1/4'
        },
        {
          id: 2,
          question: '2/3 - 1/6 = ?',
          options: ['1/3', '1/2', '1/6', '3/6'],
          correctAnswer: 1,
          explanation: '2/3 - 1/6 = 4/6 - 1/6 = 3/6 = 1/2'
        }
      ]
    },
    {
      id: 7,
      title: 'การคูณเศษส่วน',
      duration: '25 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/8yL9sZ3jQyM',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1/2 × 1/3 = ?',
          options: ['1/5', '1/6', '2/5', '2/6'],
          correctAnswer: 1,
          explanation: '1/2 × 1/3 = 1/6 (คูณตัวเศษด้วยกัน คูณตัวส่วนด้วยกัน)'
        },
        {
          id: 2,
          question: '2/3 × 1/4 = ?',
          options: ['2/12', '3/7', '2/7', '6/4'],
          correctAnswer: 0,
          explanation: '2/3 × 1/4 = 2/12 = 1/6'
        }
      ]
    },
    {
      id: 8,
      title: 'การหารเศษส่วน',
      duration: '30 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/9Qh6pMxVbTo',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1/2 ÷ 1/4 = ?',
          options: ['1/8', '2', '1/2', '4'],
          correctAnswer: 1,
          explanation: '1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2'
        },
        {
          id: 2,
          question: '3/4 ÷ 1/2 = ?',
          options: ['3/8', '3/2', '6/4', '1/2'],
          correctAnswer: 1,
          explanation: '3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2'
        }
      ]
    },
    {
      id: 9,
      title: 'การแปลงเศษส่วนเป็นทศนิยม',
      duration: '25 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/0XYkX2j63iQ',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1/2 เท่ากับทศนิยมอะไร?',
          options: ['0.2', '0.5', '0.25', '0.1'],
          correctAnswer: 1,
          explanation: '1/2 = 1 ÷ 2 = 0.5'
        },
        {
          id: 2,
          question: '1/4 เท่ากับทศนิยมอะไร?',
          options: ['0.25', '0.4', '0.5', '0.75'],
          correctAnswer: 0,
          explanation: '1/4 = 1 ÷ 4 = 0.25'
        }
      ]
    },
    {
      id: 10,
      title: 'โจทย์ปัญหาเศษส่วน',
      duration: '30 นาที',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/0XYkX2j63iQ',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'สมหญิงกินเค้ก 2/8 ชิ้น สมชายกิน 3/8 ชิ้น พวกเขากินรวมกันเท่าไร?',
          options: ['5/8 ชิ้น', '5/16 ชิ้น', '1 ชิ้น', '6/8 ชิ้น'],
          correctAnswer: 0,
          explanation: '2/8 + 3/8 = 5/8 ชิ้น'
        },
        {
          id: 2,
          question: 'มีน้ำ 3/4 แก้ว ดื่มไป 1/4 แก้ว จะเหลือเท่าไร?',
          options: ['1/2 แก้ว', '2/4 แก้ว', '1/4 แก้ว', '4/8 แก้ว'],
          correctAnswer: 0,
          explanation: '3/4 - 1/4 = 2/4 = 1/2 แก้ว'
        }
      ]
    }
  ]
};

const fractions = (): CourseData => fractionsCourse;
export default fractions;
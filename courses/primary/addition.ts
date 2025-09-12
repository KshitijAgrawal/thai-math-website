import { CourseData } from '../index';

const additionCourse: CourseData = {
  title: 'การบวกลบ',
  description: 'เรียนรู้การบวกและลบตัวเลขตั้งแต่พื้นฐานจนถึงการบวกลบที่มีการทดเลขและการยืม รวมถึงการแก้โจทย์ปัญหา',
  duration: '3-4 ชั่วโมง',
  difficulty: 'ง่าย',
  prerequisites: ['การนับและตัวเลข 1-100'],
  objectives: [
    'บวกตัวเลขได้ถูกต้อง',
    'ลบตัวเลขได้ถูกต้อง',
    'เข้าใจแนวคิดการทดเลขและการยืม',
    'แก้โจทย์ปัญหาการบวกลบได้'
  ],
  lessons: [
    {
      id: 1,
      title: 'การบวกพื้นฐาน 1-5',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '2 + 3 = ?',
          options: ['4', '5', '6', '7'],
          correctAnswer: 1,
          explanation: '2 + 3 = 5'
        },
        {
          id: 2,
          question: '1 + 4 = ?',
          options: ['3', '4', '5', '6'],
          correctAnswer: 2,
          explanation: '1 + 4 = 5'
        }
      ]
    },
    {
      id: 2,
      title: 'การบวกพื้นฐาน 6-10',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '7 + 2 = ?',
          options: ['8', '9', '10', '11'],
          correctAnswer: 1,
          explanation: '7 + 2 = 9'
        }
      ]
    },
    {
      id: 3,
      title: 'การบวกไม่มีทดเลข',
      duration: '25 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '23 + 15 = ?',
          options: ['37', '38', '39', '36'],
          correctAnswer: 1,
          explanation: '23 + 15 = 38 (3+5=8, 2+1=3)'
        }
      ]
    },
    {
      id: 4,
      title: 'การบวกมีทดเลข',
      duration: '30 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '27 + 18 = ?',
          options: ['44', '45', '46', '43'],
          correctAnswer: 1,
          explanation: '27 + 18 = 45 (7+8=15 เขียน 5 ทด 1, 2+1+1=4)'
        }
      ]
    },
    {
      id: 5,
      title: 'การลบพื้นฐาน',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '8 - 3 = ?',
          options: ['4', '5', '6', '7'],
          correctAnswer: 1,
          explanation: '8 - 3 = 5'
        }
      ]
    },
    {
      id: 6,
      title: 'การลบไม่มีการยืม',
      duration: '25 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '47 - 23 = ?',
          options: ['23', '24', '25', '26'],
          correctAnswer: 1,
          explanation: '47 - 23 = 24 (7-3=4, 4-2=2)'
        }
      ]
    },
    {
      id: 7,
      title: 'การลบมีการยืม',
      duration: '30 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '52 - 27 = ?',
          options: ['24', '25', '26', '27'],
          correctAnswer: 1,
          explanation: '52 - 27 = 25 (ยืม: 12-7=5, 4-2=2)'
        }
      ]
    },
    {
      id: 8,
      title: 'การบวกลบผสม',
      duration: '25 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '15 + 8 - 6 = ?',
          options: ['16', '17', '18', '19'],
          correctAnswer: 1,
          explanation: '15 + 8 - 6 = 23 - 6 = 17'
        }
      ]
    },
    {
      id: 9,
      title: 'การตรวจสอบคำตอบ',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'วิธีตรวจสอบ 25 + 17 = 42 คือ?',
          options: ['42 - 25 = 17', '42 + 25 = 67', '25 - 17 = 8', '17 + 17 = 34'],
          correctAnswer: 0,
          explanation: 'ตรวจสอบการบวกด้วยการลบ: 42 - 25 = 17'
        }
      ]
    },
    {
      id: 10,
      title: 'โจทย์ปัญหาการบวกลบ',
      duration: '30 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'สมชายมีลูกอม 15 เม็ด แม่ให้เพิ่มอีก 8 เม็ด สมชายมีลูกอมทั้งหมดกี่เม็ด?',
          options: ['22 เม็ด', '23 เม็ด', '24 เม็ด', '25 เม็ด'],
          correctAnswer: 1,
          explanation: '15 + 8 = 23 เม็ด'
        }
      ]
    }
  ]
};

const addition = (): CourseData => additionCourse;
export default addition;
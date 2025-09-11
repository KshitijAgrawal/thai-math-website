import { CourseData } from '../index';

export const countingCourse: CourseData = {
  title: 'การนับและตัวเลข',
  description: 'เรียนรู้การนับตัวเลขตั้งแต่ 1-100 และทำความเข้าใจเกี่ยวกับระบบตัวเลข การเรียงลำดับ และการเปรียบเทียบตัวเลข',
  duration: '2-3 ชั่วโมง',
  difficulty: 'ง่าย',
  prerequisites: ['ไม่มี - เป็นพื้นฐานสำหรับการเรียนคณิตศาสตร์'],
  objectives: [
    'นับตัวเลขได้ถูกต้องตั้งแต่ 1-100',
    'เปรียบเทียบขนาดของตัวเลขได้',
    'เรียงลำดับตัวเลขจากน้อยไปมาก และมากไปน้อยได้'
  ],
  lessons: [
    {
      id: 1,
      title: 'การนับ 1-10',
      duration: '15 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'หลังจาก 5 มาอีก 2 ตัวเลข คือเลขอะไร?',
          options: ['6, 7', '7, 8', '8, 9', '6, 8'],
          correctAnswer: 0,
          explanation: 'การนับต่อเนื่อง: หลังจาก 5 คือ 6 และ 7'
        },
        {
          id: 2,
          question: 'ตัวเลขใดมีค่ามากที่สุด?',
          options: ['7', '3', '9', '5'],
          correctAnswer: 2,
          explanation: 'ตัวเลข 9 มีค่ามากที่สุดในตัวเลือกที่ให้มา'
        }
      ]
    },
    {
      id: 2,
      title: 'การนับ 11-20',
      duration: '15 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'ตัวเลขใดอยู่ระหว่าง 15 และ 17?',
          options: ['14', '16', '18', '19'],
          correctAnswer: 1,
          explanation: 'ตัวเลข 16 อยู่ระหว่าง 15 และ 17'
        }
      ]
    },
    {
      id: 3,
      title: 'การนับ 21-50',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'หลังจาก 29 คือเลขอะไร?',
          options: ['28', '30', '31', '32'],
          correctAnswer: 1,
          explanation: 'หลังจาก 29 คือ 30'
        }
      ]
    },
    {
      id: 4,
      title: 'การนับ 51-100',
      duration: '25 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'ตัวเลขใดมีค่าน้อยที่สุด?',
          options: ['67', '54', '89', '76'],
          correctAnswer: 1,
          explanation: 'ตัวเลข 54 มีค่าน้อยที่สุด'
        }
      ]
    },
    {
      id: 5,
      title: 'การเรียงลำดับตัวเลข',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'เรียงตัวเลขจากน้อยไปมาก: 8, 3, 6, 1',
          options: ['1, 3, 6, 8', '8, 6, 3, 1', '3, 6, 1, 8', '6, 8, 1, 3'],
          correctAnswer: 0,
          explanation: 'การเรียงจากน้อยไปมาก: 1, 3, 6, 8'
        }
      ]
    },
    {
      id: 6,
      title: 'การเปรียบเทียบตัวเลข',
      duration: '18 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '25 _____ 23 (เติมเครื่องหมาย)',
          options: ['<', '>', '=', 'ไม่สามารถเปรียบเทียบได้'],
          correctAnswer: 1,
          explanation: '25 > 23 เพราะ 25 มากกว่า 23'
        }
      ]
    },
    {
      id: 7,
      title: 'จำนวนคู่และคี่',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'ตัวเลขใดเป็นจำนวนคู่?',
          options: ['13', '17', '24', '31'],
          correctAnswer: 2,
          explanation: '24 เป็นจำนวนคู่ เพราะหารด้วย 2 ลงตัว'
        }
      ]
    },
    {
      id: 8,
      title: 'การนับข้าม',
      duration: '22 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'การนับข้าม 2: 2, 4, 6, ?, 10',
          options: ['7', '8', '9', '5'],
          correctAnswer: 1,
          explanation: 'การนับข้าม 2: 2, 4, 6, 8, 10'
        }
      ]
    },
    {
      id: 9,
      title: 'ตัวเลขหลักเดียว',
      duration: '15 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'ตัวเลขใดเป็นตัวเลขหลักเดียว?',
          options: ['12', '7', '15', '23'],
          correctAnswer: 1,
          explanation: 'ตัวเลข 7 เป็นตัวเลขหลักเดียว'
        }
      ]
    },
    {
      id: 10,
      title: 'ตัวเลขสองหลัก',
      duration: '18 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'ในตัวเลข 47 หลักหน่วยคือเลขอะไร?',
          options: ['4', '7', '47', '74'],
          correctAnswer: 1,
          explanation: 'ในตัวเลข 47 หลักหน่วยคือ 7 และหลักสิบคือ 4'
        }
      ]
    }
  ]
};
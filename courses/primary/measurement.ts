// courses/primary/measurement.ts
import { CourseData } from '../index';

const measurementCourse: CourseData = {
  title: 'การวัด',
  description: 'เรียนรู้การวัดความยาว น้ำหนัก ปริมาณ และเวลา รวมถึงการใช้หน่วยวัดต่างๆ ในชีวิตประจำวัน',
  duration: '2-3 ชั่วโมง',
  difficulty: 'ง่าย',
  prerequisites: ['การนับและตัวเลข', 'การเปรียบเทียบขนาด'],
  objectives: [
    'รู้จักหน่วยวัดต่างๆ',
    'วัดความยาว น้ำหนัก และปริมาณได้',
    'แปลงหน่วยวัดพื้นฐาน',
    'บอกเวลาได้ถูกต้อง'
  ],
  lessons: [
    {
      id: 1,
      title: 'การวัดความยาว',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1 เมตร เท่ากับกี่เซนติเมตร?',
          options: ['10 เซนติเมตร', '50 เซนติเมตร', '100 เซนติเมตร', '1000 เซนติเมตร'],
          correctAnswer: 2,
          explanation: '1 เมตร = 100 เซนติเมตร'
        },
        {
          id: 2,
          question: 'อะไรคือหน่วยวัดความยาวที่เล็กที่สุด?',
          options: ['เมตร', 'เซนติเมตร', 'มิลลิเมตร', 'กิโลเมตร'],
          correctAnswer: 2,
          explanation: 'มิลลิเมตรเป็นหน่วยวัดความยาวที่เล็กที่สุดในตัวเลือกนี้'
        },
        {
          id: 3,
          question: 'ไม้บรรทัดยาว 30 อะไร?',
          options: ['เมตร', 'เซนติเมตร', 'มิลลิเมตร', 'กิโลเมตร'],
          correctAnswer: 1,
          explanation: 'ไม้บรรทัดทั่วไปยาว 30 เซนติเมตร'
        }
      ]
    },
    {
      id: 2,
      title: 'การเปรียบเทียบความยาว',
      duration: '25 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'อะไรยาวกว่ากัน?',
          options: ['ดินสอ', 'ไม้บรรทัด', 'โต๊ะ', 'ไม่แน่ใจ'],
          correctAnswer: 2,
          explanation: 'โต๊ะยาวกว่าดินสอและไม้บรรทัด'
        },
        {
          id: 2,
          question: '50 เซนติเมตร กับ 0.5 เมตร อันไหนยาวกว่า?',
          options: ['50 เซนติเมตร', '0.5 เมตร', 'เท่ากัน', 'ไม่สามารถเปรียบเทียบได้'],
          correctAnswer: 2,
          explanation: '50 เซนติเมตร = 0.5 เมตร จึงเท่ากัน'
        }
      ]
    },
    {
      id: 3,
      title: 'การวัดน้ำหนัก',
      duration: '25 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1 กิโลกรัม เท่ากับกี่กรัม?',
          options: ['10 กรัม', '100 กรัม', '1000 กรัม', '10000 กรัม'],
          correctAnswer: 2,
          explanation: '1 กิโลกรัม = 1000 กรัม'
        },
        {
          id: 2,
          question: 'อะไรหนักที่สุด?',
          options: ['หนังสือ', 'ดินสอ', 'กระเป๋า', 'ยางลบ'],
          correctAnswer: 2,
          explanation: 'กระเป๋าหนักที่สุดเมื่อเปรียบเทียบกับของอื่นๆ'
        },
        {
          id: 3,
          question: 'เครื่องชั่งน้ำหนักใช้วัดอะไร?',
          options: ['ความยาว', 'น้ำหนัก', 'ปริมาณ', 'เวลา'],
          correctAnswer: 1,
          explanation: 'เครื่องชั่งน้ำหนักใช้วัดน้ำหนักหรือมวลของวัตถุ'
        }
      ]
    },
    {
      id: 4,
      title: 'การวัดปริมาณ',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1 ลิตร เท่ากับกี่มิลลิลิตร?',
          options: ['10 มิลลิลิตร', '100 มิลลิลิตร', '1000 มิลลิลิตร', '10000 มิลลิลิตร'],
          correctAnswer: 2,
          explanation: '1 ลิตร = 1000 มิลลิลิตร'
        },
        {
          id: 2,
          question: 'ขวดน้ำขนาดใหญ่ปกติบรรจุได้กี่ลิตร?',
          options: ['0.5 ลิตร', '1 ลิตร', '1.5 ลิตร', 'ทั้งหมดถูก'],
          correctAnswer: 3,
          explanation: 'ขวดน้ำมีหลายขนาด 0.5, 1, และ 1.5 ลิตร'
        }
      ]
    },
    {
      id: 5,
      title: 'การบอกเวลา - ชั่วโมง',
      duration: '30 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1 วัน มีกี่ชั่วโมง?',
          options: ['12 ชั่วโมง', '24 ชั่วโมง', '48 ชั่วโมง', '60 ชั่วโมง'],
          correctAnswer: 1,
          explanation: '1 วัน = 24 ชั่วโมง'
        },
        {
          id: 2,
          question: 'เมื่อเข็มสั้นชี้ไปที่เลข 3 และเข็มยาวชี้ที่เลข 12 เป็นเวลาอะไร?',
          options: ['3 นาฬิกา', '12 นาฬิกา', '15 นาฬิกา', '3 นาที'],
          correctAnswer: 0,
          explanation: 'เข็มสั้น = ชั่วโมง, เข็มยาว = นาที, ดังนั้นคือ 3 นาฬิกา 0 นาที'
        },
        {
          id: 3,
          question: 'ตอนเที่ยงคือเวลาอะไร?',
          options: ['12:00', '6:00', '3:00', '9:00'],
          correctAnswer: 0,
          explanation: 'ตอนเที่ยงคือเวลา 12:00 น.'
        }
      ]
    },
    {
      id: 6,
      title: 'การบอกเวลา - นาที',
      duration: '35 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '1 ชั่วโมง มีกี่นาที?',
          options: ['30 นาที', '60 นาที', '90 นาที', '120 นาที'],
          correctAnswer: 1,
          explanation: '1 ชั่วโมง = 60 นาที'
        },
        {
          id: 2,
          question: 'เมื่อเข็มสั้นชี้ระหว่างเลข 2 และ 3 เข็มยาวชี้ที่เลข 6 เป็นเวลาอะไร?',
          options: ['2:30', '3:30', '6:30', '2:06'],
          correctAnswer: 0,
          explanation: 'เข็มยาวชี้ที่ 6 หมายถึง 30 นาที, เข็มสั้นอยู่ระหว่าง 2-3 หมายถึง 2 นาฬิกาผ่านไป'
        },
        {
          id: 3,
          question: 'ครึ่งชั่วโมงคือกี่นาที?',
          options: ['15 นาที', '20 นาที', '30 นาที', '45 นาที'],
          correctAnswer: 2,
          explanation: 'ครึ่งชั่วโมง = 30 นาที'
        }
      ]
    },
    {
      id: 7,
      title: 'การใช้เครื่องมือวัด',
      duration: '25 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'ไม้บรรทัดใช้วัดอะไร?',
          options: ['น้ำหนัก', 'ความยาว', 'ปริมาณ', 'เวลา'],
          correctAnswer: 1,
          explanation: 'ไม้บรรทัดใช้วัดความยาว'
        },
        {
          id: 2,
          question: 'ถ้วยตวงใช้วัดอะไร?',
          options: ['ความยาว', 'น้ำหนัก', 'ปริมาณ', 'เวลา'],
          correctAnswer: 2,
          explanation: 'ถ้วยตวงใช้วัดปริมาณของของเหลวหรือของแห้ง'
        },
        {
          id: 3,
          question: 'นาฬิกาใช้วัดอะไร?',
          options: ['ความยาว', 'น้ำหนัก', 'ปริมาณ', 'เวลา'],
          correctAnswer: 3,
          explanation: 'นาฬิกาใช้วัดเวลา'
        }
      ]
    },
    {
      id: 8,
      title: 'การแปลงหน่วย',
      duration: '30 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: '2 เมตร เท่ากับกี่เซนติเมตร?',
          options: ['20 เซนติเมตร', '200 เซนติเมตร', '2000 เซนติเมตร', '2 เซนติเมตร'],
          correctAnswer: 1,
          explanation: '2 เมตร = 2 × 100 = 200 เซนติเมตร'
        },
        {
          id: 2,
          question: '500 กรัม เท่ากับกี่กิโลกรัม?',
          options: ['0.5 กิโลกรัม', '5 กิโลกรัม', '50 กิโลกรัม', '500 กิโลกรัม'],
          correctAnswer: 0,
          explanation: '500 กรัม = 500 ÷ 1000 = 0.5 กิโลกรัม'
        }
      ]
    },
    {
      id: 9,
      title: 'การวัดในชีวิตประจำวัน',
      duration: '20 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'เมื่อไปซื้อผลไม้ เราจะวัดด้วยหน่วยอะไร?',
          options: ['เมตร', 'กิโลกรัม', 'ลิตร', 'ชั่วโมง'],
          correctAnswer: 1,
          explanation: 'ผลไม้วัดด้วยน้ำหนัก คือ กิโลกรัม'
        },
        {
          id: 2,
          question: 'เมื่อวัดส่วนสูงของตัวเอง ใช้หน่วยอะไร?',
          options: ['กรัม', 'ลิตร', 'เซนติเมตร', 'นาที'],
          correctAnswer: 2,
          explanation: 'ส่วนสูงวัดด้วยเซนติเมตร หรือเมตร'
        },
        {
          id: 3,
          question: 'เมื่อซื้อน้ำดื่ม จะระบุปริมาณด้วยหน่วยอะไร?',
          options: ['กรัม', 'ลิตร', 'เมตร', 'ชั่วโมง'],
          correctAnswer: 1,
          explanation: 'น้ำดื่มวัดปริมาณด้วยลิตร หรือมิลลิลิตร'
        }
      ]
    },
    {
      id: 10,
      title: 'การประมาณค่า',
      duration: '25 นาที',
      completed: false,
      questions: [
        {
          id: 1,
          question: 'ประตูบ้านสูงประมาณเท่าไร?',
          options: ['20 เซนติเมตร', '2 เมตร', '20 เมตร', '200 เมตร'],
          correctAnswer: 1,
          explanation: 'ประตูบ้านสูงประมาณ 2 เมตร'
        },
        {
          id: 2,
          question: 'นักเรียนประถมหนักประมาณเท่าไร?',
          options: ['3 กิโลกรัม', '30 กิโลกรัม', '300 กิโลกรัม', '3000 กิโลกรัม'],
          correctAnswer: 1,
          explanation: 'นักเรียนประถมหนักประมาณ 25-35 กิโลกรัม'
        },
        {
          id: 3,
          question: 'การเดินทางจากบ้านไปโรงเรียนใช้เวลาประมาณเท่าไร?',
          options: ['5 นาที', '30 นาที', '2 ชั่วโมง', '1 วัน'],
          correctAnswer: 1,
          explanation: 'การเดินทางไปโรงเรียนใช้เวลาประมาณ 15-45 นาที ขึ้นอยู่กับระยะทาง'
        }
      ]
    }
  ]
};

const measurement = (): CourseData => measurementCourse;
export default measurement;
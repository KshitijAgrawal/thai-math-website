import { CourseData } from '../index';
import probabilityQuestions from './questions/probability-questions.json';

// Lesson structure without questions
const lessonStructure = [
  {
    id: 1,
    title: 'แนวคิดพื้นฐานของความน่าจะเป็น',
    duration: '45 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/fLd-dSgifxU',
    objectives: [
      'เข้าใจความหมายของความน่าจะเป็น',
      'จำแนกเหตุการณ์ที่เป็นไปได้',
      'เข้าใจพื้นที่ตัวอย่าง'
    ]
  },
  {
    id: 2,
    title: 'การคำนวณความน่าจะเป็นพื้นฐาน',
    duration: '50 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/kEgaIIYYudo',
    objectives: [
      'ใช้สูตรความน่าจะเป็นพื้นฐาน',
      'คำนวณความน่าจะเป็นของการทอยลูกเต๋า',
      'แก้ปัญหาความน่าจะเป็นด้วยการนับ'
    ]
  },
  {
    id: 3,
    title: 'ความน่าจะเป็นของเหตุการณ์รวม',
    duration: '55 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/53dPZ9G14W4',
    objectives: [
      'เข้าใจเหตุการณ์ที่ไม่ซ้ำกัน',
      'คำนวณความน่าจะเป็นของเหตุการณ์รวม',
      'ใช้กฎการบวกความน่าจะเป็น'
    ]
  },
  {
    id: 4,
    title: 'ต้นไม้ความน่าจะเป็น',
    duration: '60 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/W-zQXQT4qRU',
    objectives: [
      'เข้าใจการใช้ต้นไม้ความน่าจะเป็น',
      'แก้ปัญหาเหตุการณ์ต่อเนื่อง',
      'คำนวณความน่าจะเป็นรวม'
    ]
  },
  {
    id: 5,
    title: 'การประยุกต์ใช้ความน่าจะเป็น',
    duration: '50 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/C06y6GagAbg',
    objectives: [
      'ประยุกต์ใช้ในสถานการณ์จริง',
      'แก้ปัญหาความน่าจะเป็นในเกม',
      'ตัดสินใจโดยใช้ความน่าจะเป็น'
    ]
  }
];

// Function to merge lessons with questions
const buildLessonsWithQuestions = () => {
  return lessonStructure.map(lesson => ({
    ...lesson,
    questions: (probabilityQuestions as any)[lesson.id.toString()] || []
  }));
};

const probability = (): CourseData => ({
  title: 'ความน่าจะเป็น',
  description: 'เรียนรู้แนวคิดพื้นฐานของความน่าจะเป็น การคำนวณความน่าจะเป็นของเหตุการณ์ต่างๆ และการประยุกต์ใช้ในชีวิตประจำวัน',
  duration: '5 สัปดาห์',
  difficulty: 'ปานกลาง',
  prerequisites: [
    'เศษส่วนและทศนิยม',
    'เปอร์เซ็นต์',
    'การบวก ลบ คูณ หาร',
    'พื้นฐานการนับ'
  ],
  objectives: [
    'เข้าใจแนวคิดของความน่าจะเป็น',
    'คำนวณความน่าจะเป็นของเหตุการณ์พื้นฐาน',
    'ใช้ต้นไม้ความน่าจะเป็นในการแก้ปัญหา',
    'ประยุกต์ใช้ความน่าจะเป็นในสถานการณ์จริง'
  ],
  lessons: buildLessonsWithQuestions()
});

export default probability;
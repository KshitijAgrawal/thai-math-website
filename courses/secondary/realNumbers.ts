import { CourseData } from '../index';
import realNumbersQuestions from './questions/real-numbers-questions.json';

// Lesson structure without questions
const lessonStructure = [
  {
    id: 1,
    title: 'ระบบจำนวนจริง',
    duration: '50 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/gpdoXG8-X3w',
    objectives: [
      'จำแนกประเภทของจำนวน',
      'เข้าใจความสำคัญของจำนวนจริง',
      'เปรียบเทียบจำนวนจริง'
    ]
  },
  {
    id: 2,
    title: 'จำนวนตรรกยะและอตรรกยะ',
    duration: '55 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/XRrjaekQPW0',
    objectives: [
      'เข้าใจความแตกต่างระหว่างจำนวนตรรกยะและอตรรกยะ',
      'แปลงเศษส่วนเป็นทศนิยม',
      'จำแนกจำนวนให้ถูกประเภท'
    ]
  },
  {
    id: 3,
    title: 'การดำเนินการกับจำนวนจริง',
    duration: '60 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/rpZLMd5A7qM',
    objectives: [
      'บวก ลบ คูณ หารจำนวนจริง',
      'ใช้สมบัติของการดำเนินการ',
      'จัดรูปนิพจน์ที่มีจำนวนจริง'
    ]
  },
  {
    id: 4,
    title: 'รากที่สองและเลขยกกำลัง',
    duration: '55 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/_YsGMt_3hMU',
    objectives: [
      'คำนวณรากที่สองของจำนวนต่างๆ',
      'ใช้กฎเลขยกกำลังกับจำนวนจริง',
      'จัดรูปนิพจน์ที่มีรากที่สอง'
    ]
  },
  {
    id: 5,
    title: 'อสมการเชิงเส้น',
    duration: '60 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/MOqSq1e_GFY',
    objectives: [
      'เข้าใจและแก้อสมการเชิงเส้น',
      'แสดงผลลัพธ์บนเส้นจำนวน',
      'แก้ปัญหาด้วยอสมการ'
    ]
  },
  {
    id: 6,
    title: 'การประยุกต์ใช้จำนวนจริง',
    duration: '50 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/il1yHOLNIaw',
    objectives: [
      'ใช้จำนวนจริงในการแก้ปัญหาจริง',
      'ประมาณค่าจำนวนอตรรกยะ',
      'เปรียบเทียบและเรียงลำดับจำนวนจริง'
    ]
  }
];

// Function to merge lessons with questions
const buildLessonsWithQuestions = () => {
  return lessonStructure.map(lesson => ({
    ...lesson,
    questions: (realNumbersQuestions as any)[lesson.id.toString()] || []
  }));
};

const realNumbers = (): CourseData => ({
  title: 'จำนวนจริง',
  description: 'ศึกษาระบบจำนวนจริง จำนวนตรรกยะและอตรรกยะ การดำเนินการกับจำนวนจริง และการแก้อสมการ',
  duration: '7 สัปดาห์',
  difficulty: 'ปานกลาง',
  prerequisites: [
    'จำนวนเต็ม',
    'เศษส่วน',
    'ทศนิยม',
    'เลขยกกำลัง',
    'การแก้สมการเชิงเส้น'
  ],
  objectives: [
    'เข้าใจและจำแนกประเภทของจำนวนจริง',
    'คำนวณการดำเนินการกับจำนวนจริง',
    'เข้าใจและใช้รากที่สอง',
    'แก้อสมการเชิงเส้น'
  ],
  lessons: buildLessonsWithQuestions()
});

export default realNumbers;
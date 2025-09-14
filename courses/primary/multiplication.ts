import { CourseData } from '../index';
import multiplicationQuestions from './questions/multiplication-questions.json';

// Lesson structure without questions
const lessonStructure = [
  {
    id: 1,
    title: 'สูตรคูณแม่ 2',
    duration: '25 นาที',
    completed: false,
    hasVideo: true, 
    videoUrl: 'https://www.youtube.com/embed/8xwjqkcKlfU'
  },
  {
    id: 2,
    title: 'สูตรคูณแม่ 3',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/2l0kCkP2t9E',
    completed: false
  },
  {
    id: 3,
    title: 'สูตรคูณแม่ 4',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/3uYdV9pUe2s',
    completed: false
  },
  {
    id: 4,
    title: 'สูตรคูณแม่ 5',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/hlECNDaR78Y',
    completed: false
  },
  {
    id: 5,
    title: 'สูตรคูณแม่ 6-9',
    duration: '35 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/jHfg-9Gax2g',
    completed: false
  },
  {
    id: 6,
    title: 'การคูณสองหลัก',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/wXlEom08P2E',
    completed: false
  },
  {
    id: 7,
    title: 'การหารพื้นฐาน',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/PBvFcUQIQJg',
    completed: false
  },
  {
    id: 8,
    title: 'การหารมีเศษ',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/PlvEnvvgP1E',
    completed: false
  },
  {
    id: 9,
    title: 'ความสัมพันธ์คูณหาร',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/_pKxr_Stsn4',
    completed: false
  },
  {
    id: 10,
    title: 'โจทย์ปัญหาการคูณหาร',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/2OMApMT5qHQ',
    completed: false
  }
];

// Function to merge lessons with questions
const buildLessonsWithQuestions = () => {
  return lessonStructure.map(lesson => ({
    ...lesson,
    questions: (multiplicationQuestions as any)[lesson.id.toString()] || []
  }));
};

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
  lessons: buildLessonsWithQuestions()
};

const multiplication = (): CourseData => multiplicationCourse;
export default multiplication;
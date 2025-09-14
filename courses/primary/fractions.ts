import { CourseData } from '../index';
import fractionsQuestions from './questions/fractions-questions.json';

// Lesson structure without questions
const lessonStructure = [
  {
    id: 1,
    title: 'ความหมายของเศษส่วน',
    duration: '20 นาที',
    completed: false,
    hasVideo: true, 
    videoUrl: 'https://www.youtube.com/embed/PH404TxS46o'
  },
  {
    id: 2,
    title: 'การเปรียบเทียบเศษส่วน',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/3rJr6iIYwB4',
    completed: false
  },
  {
    id: 3,
    title: 'การบวกเศษส่วนเดียวกัน',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/sAuxcP89m9A',
    completed: false
  },
  {
    id: 4,
    title: 'การลบเศษส่วนเดียวกัน',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/YmlC8N8R3OE',
    completed: false
  },
  {
    id: 5,
    title: 'การบวกเศษส่วนต่างกัน',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/5SsRbFYn0uU',
    completed: false
  },
  {
    id: 6,
    title: 'การลบเศษส่วนต่างกัน',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/Y1HCO0Iao6I',
    completed: false
  },
  {
    id: 7,
    title: 'การคูณเศษส่วน',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/IMHukFDvKuQ',
    completed: false
  },
  {
    id: 8,
    title: 'การหารเศษส่วน',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/9Qh6pMxVbTo',
    completed: false
  },
  {
    id: 9,
    title: 'การแปลงเศษส่วนเป็นทศนิยม',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/KeGxBE-wcgw',
    completed: false
  },
  {
    id: 10,
    title: 'โจทย์ปัญหาเศษส่วน',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/1ChzdIM3c8A',
    completed: false
  }
];

// Function to merge lessons with questions
const buildLessonsWithQuestions = () => {
  return lessonStructure.map(lesson => ({
    ...lesson,
    questions: (fractionsQuestions as any)[lesson.id.toString()] || []
  }));
};

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
  lessons: buildLessonsWithQuestions()
};

const fractions = (): CourseData => fractionsCourse;
export default fractions;
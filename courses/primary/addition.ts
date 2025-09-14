import { CourseData } from '../index';
import additionQuestions from './questions/addition-questions.json';

// Lesson structure without questions
const lessonStructure = [
  {
    id: 1,
    title: 'การบวกพื้นฐาน 1-5',
    duration: '20 นาที',
    completed: false,
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/kfgfkmDAdzA'
  },
  {
    id: 2,
    title: 'การบวกพื้นฐาน 6-10',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/QsleFE-C6K8',
    completed: false
  },
  {
    id: 3,
    title: 'การบวกไม่มีทดเลข',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/eP91LFzPWy4',
    completed: false
  },
  {
    id: 4,
    title: 'การบวกมีทดเลข',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/ugaGVgERJE4',
    completed: false
  },
  {
    id: 5,
    title: 'การลบพื้นฐาน',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/FaOF6el8cXg',
    completed: false
  },
  {
    id: 6,
    title: 'การลบไม่มีการยืม',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/DcNOX6U7Veo',
    completed: false
  },
  {
    id: 7,
    title: 'การลบมีการยืม',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/pMpG2Ur9ttg',
    completed: false
  },
  {
    id: 8,
    title: 'การบวกลบผสม',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/4JSag_wZoaI',
    completed: false
  },
  {
    id: 9,
    title: 'การตรวจสอบคำตอบ',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/6ged8ayqDO4',
    completed: false
  },
  {
    id: 10,
    title: 'โจทย์ปัญหาการบวกลบ',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/1yh9CVARG4Q',
    completed: false
  }
];

// Function to merge lessons with questions
const buildLessonsWithQuestions = () => {
  return lessonStructure.map(lesson => ({
    ...lesson,
    questions: (additionQuestions as any)[lesson.id.toString()] || []
  }));
};

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
  lessons: buildLessonsWithQuestions()
};

const addition = (): CourseData => additionCourse;
export default addition;
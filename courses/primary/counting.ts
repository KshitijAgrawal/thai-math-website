import { CourseData } from '../index';
import countingQuestions from './questions/counting-questions.json';

// Lesson structure without questions
const lessonStructure = [
  {
    id: 1,
    title: 'การนับ 1-10',
    duration: '15 นาที',
    completed: false,
    hasVideo: true, 
    videoUrl: 'https://www.youtube.com/embed/gsbCzCSIMqw'
  },
  {
    id: 2,
    title: 'การนับ 11-20',
    duration: '15 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/7FxN89ufXBs',
    completed: false
  },
  {
    id: 3,
    title: 'การนับ 21-50',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/Y8Cvedrege0',
    completed: false
  },
  {
    id: 4,
    title: 'การนับ 51-100',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/Y-JvL70LvHw',
    completed: false
  },
  {
    id: 5,
    title: 'การเรียงลำดับตัวเลข',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/ZfCFOQBfC-I',
    completed: false
  },
  {
    id: 6,
    title: 'การเปรียบเทียบตัวเลข',
    duration: '18 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/DcNOX6U7Veo',
    completed: false
  },
  {
    id: 7,
    title: 'จำนวนคู่และคี่',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/ASjJL1zh8z0',
    completed: false
  },
  {
    id: 8,
    title: 'การนับข้าม',
    duration: '22 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/5TxZ3j9BoE4',
    completed: false
  },
  {
    id: 9,
    title: 'ตัวเลขหลักเดียว',
    duration: '15 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/_MVzXKfr6e8',
    completed: false
  },
  {
    id: 10,
    title: 'ตัวเลขสองหลัก',
    duration: '18 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/_MVzXKfr6e8',
    completed: false
  }
];

// Function to merge lessons with questions
const buildLessonsWithQuestions = () => {
  return lessonStructure.map(lesson => ({
    ...lesson,
    questions: (countingQuestions as any)[lesson.id.toString()] || []
  }));
};

const countingCourse: CourseData = {
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
  lessons: buildLessonsWithQuestions()
};

const counting = (): CourseData => countingCourse;
export default counting;
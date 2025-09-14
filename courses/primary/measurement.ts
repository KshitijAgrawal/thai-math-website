import { CourseData } from '../index';
import measurementQuestions from './questions/measurement-questions.json';

// Lesson structure without questions
const lessonStructure = [
  {
    id: 1,
    title: 'การวัดความยาว',
    duration: '20 นาที',
    completed: false,
    hasVideo: true, 
    videoUrl: 'https://www.youtube.com/embed/uZoIV69grU8'
  },
  {
    id: 2,
    title: 'การเปรียบเทียบความยาว',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/1HqkYl5d0Qw',
    completed: false
  },
  {
    id: 3,
    title: 'การวัดน้ำหนัก',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/2bW7cI8oVJg',
    completed: false
  },
  {
    id: 4,
    title: 'การวัดปริมาณ',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/0LRjhh5FH1Q',
    completed: false
  },
  {
    id: 5,
    title: 'การบอกเวลา - ชั่วโมง',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/rfh18vIx-rM',
    completed: false
  },
  {
    id: 6,
    title: 'การบอกเวลา - นาที',
    duration: '35 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/04hvdrbd3Vk',
    completed: false
  },
  {
    id: 7,
    title: 'การใช้เครื่องมือวัด',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/6Sj8Zs2gqM0',
    completed: false
  },
  {
    id: 8,
    title: 'การแปลงหน่วย',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/-dwv56YnWk8',
    completed: false
  },
  {
    id: 9,
    title: 'การวัดในชีวิตประจำวัน',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/0nFdIrJkd5Q',
    completed: false
  },
  {
    id: 10,
    title: 'การประมาณค่า',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/DHInlwK-c6A',
    completed: false
  }
];

// Function to merge lessons with questions
const buildLessonsWithQuestions = () => {
  return lessonStructure.map(lesson => ({
    ...lesson,
    questions: (measurementQuestions as any)[lesson.id.toString()] || []
  }));
};

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
  lessons: buildLessonsWithQuestions()
};

const measurement = (): CourseData => measurementCourse;
export default measurement;
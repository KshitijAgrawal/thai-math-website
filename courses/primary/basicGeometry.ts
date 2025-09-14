import { CourseData } from '../index';
import basicGeometryQuestions from './questions/basic-geometry-questions.json';

// Lesson structure without questions
const lessonStructure = [
  {
    id: 1,
    title: 'จุดและเส้นตรง',
    duration: '20 นาที',
    completed: false,
    hasVideo: true, 
    videoUrl: 'https://www.youtube.com/embed/gLw7-iPxQHE'
  },
  {
    id: 2,
    title: 'มุมต่างๆ',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/y2Yw0P3g9yI',
    completed: false
  },
  {
    id: 3,
    title: 'รูปสามเหลี่ยม',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/pvcgxUZQpys',
    completed: false
  },
  {
    id: 4,
    title: 'รูปสี่เหลี่ยม',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/-SOi7QTkA-c',
    completed: false
  },
  {
    id: 5,
    title: 'วงกลม',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/sKXN2qjSezo',
    completed: false
  },
  {
    id: 6,
    title: 'รูปทรงสามมิติพื้นฐาน',
    duration: '35 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/3-fKfK3gf7o',
    completed: false
  },
  {
    id: 7,
    title: 'การเปรียบเทียบรูปร่าง',
    duration: '20 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/ND73rJsBs8w',
    completed: false
  },
  {
    id: 8,
    title: 'การจำแนกรูปแบบ',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/ZAJXEV7cX1g',
    completed: false
  },
  {
    id: 9,
    title: 'รูปทรงในชีวิตประจำวัน',
    duration: '30 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/GD6aiL5awTw',
    completed: false
  },
  {
    id: 10,
    title: 'การสร้างรูปเรขาคณิต',
    duration: '25 นาที',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/M7eDcD5SVrs',
    completed: false
  }
];

// Function to merge lessons with questions
const buildLessonsWithQuestions = () => {
  return lessonStructure.map(lesson => ({
    ...lesson,
    questions: (basicGeometryQuestions as any)[lesson.id.toString()] || []
  }));
};

const basicGeometryCourse: CourseData = {
  title: 'เรขาคณิตพื้นฐาน',
  description: 'เรียนรู้รูปทรงเรขาคณิตพื้นฐาน จุด เส้นตรง มุม และรูปเรขาคณิต 2 มิติและ 3 มิติ',
  duration: '2-3 ชั่วโมง',
  difficulty: 'ง่าย',
  prerequisites: ['การนับและตัวเลข', 'การเปรียบเทียบขนาด'],
  objectives: [
    'จำแนกรูปทรงเรขาคณิตพื้นฐานได้',
    'นับจำนวนมุม ด้าน และจุดยอดของรูปต่างๆ',
    'เปรียบเทียบขนาดและรูปร่างของวัตถุ',
    'ประยุกต์ใช้ในชีวิตประจำวัน'
  ],
  lessons: buildLessonsWithQuestions()
};

const basicGeometry = (): CourseData => basicGeometryCourse;
export default basicGeometry;
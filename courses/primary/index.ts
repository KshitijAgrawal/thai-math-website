import { countingCourse } from './counting';
import { additionCourse } from './addition';
import { multiplicationCourse } from './multiplication';
import { fractionsCourse } from './fractions';
import { CourseData } from '../index';

// Export individual course functions
export function counting(): CourseData {
  return countingCourse;
}

export function addition(): CourseData {
  return additionCourse;
}

export function multiplication(): CourseData {
  return multiplicationCourse;
}

export function fractions(): CourseData {
  return fractionsCourse;
}

export function basicGeometry(): CourseData {
  return {
    title: 'เรขาคณิตพื้นฐาน',
    description: 'เรียนรู้รูปทรงเรขาคณิตพื้นฐาน',
    duration: '2-3 ชั่วโมง',
    difficulty: 'ง่าย',
    lessons: [
      {
        id: 1,
        title: 'จุดและเส้นตรง',
        duration: '15 นาที',
        completed: false,
        questions: [
          {
            id: 1,
            question: 'รูปสามเหลี่ยมมีมุมทั้งหมดกี่มุม?',
            options: ['2 มุม', '3 มุม', '4 มุม', '5 มุม'],
            correctAnswer: 1,
            explanation: 'รูปสามเหลี่ยมมีมุมทั้งหมด 3 มุม'
          }
        ]
      }
      // Add 9 more lessons...
    ]
  };
}

export function measurement(): CourseData {
  return {
    title: 'การวัด',
    description: 'เรียนรู้การวัดความยาว น้ำหนัก เวลา',
    duration: '2-3 ชั่วโมง',
    difficulty: 'ง่าย',
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
          }
        ]
      }
      // Add 9 more lessons...
    ]
  };
}
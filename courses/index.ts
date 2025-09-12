// Import all course modules
import * as primaryCourses from './primary';
import * as secondaryCourses from './secondary';
import * as advancedCourses from './advanced';
import * as universityCourses from './university';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  hints?: string[];
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  questions: Question[];
  completed: boolean;
  objectives?: string[];
}

export interface CourseData {
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  prerequisites?: string[];
  objectives?: string[];
  lessons: Lesson[];
}

// Course mapping by grade and subject
const courseMap: { [key: string]: { [key: string]: () => CourseData } } = {
  'primary': {
    'การนับและตัวเลข': primaryCourses.counting,
    'การบวกลบ': primaryCourses.addition,
    'การคูณหาร': primaryCourses.multiplication,
    'เศษส่วน': primaryCourses.fractions,
    'เรขาคณิตพื้นฐาน': primaryCourses.basicGeometry,
    'การวัด': primaryCourses.measurement
  },
  'lower-secondary': {
    'พีชคณิต': secondaryCourses.algebra,
    'เรขาคณิต': secondaryCourses.geometry,
    'สถิติ': secondaryCourses.statistics,
    'ความน่าจะเป็น': secondaryCourses.probability,
    'จำนวนจริง': secondaryCourses.realNumbers
  },
  'upper-secondary': {
    'แคลคูลัส': advancedCourses.calculus,
    'ตรีโกณมิติ': advancedCourses.trigonometry,
    'เวกเตอร์': advancedCourses.vectors,
    'เมทริกซ์': advancedCourses.matrices,
    'สถิติขั้นสูง': advancedCourses.advancedStatistics
  },
  'university': {
    'Linear Algebra': universityCourses.linearAlgebra,
    'Differential Equations': universityCourses.differentialEquations,
    'Complex Analysis': universityCourses.complexAnalysis,
    'Real Analysis': universityCourses.realAnalysis
  }
};

// Main function to get course data
export function getCourseData(courseName: string, gradeKey: string): CourseData {
  const gradeMap = courseMap[gradeKey];
  if (!gradeMap) {
    throw new Error(`Grade level "${gradeKey}" not found`);
  }

  const courseFunction = gradeMap[courseName];
  if (!courseFunction) {
    throw new Error(`Course "${courseName}" not found in grade "${gradeKey}"`);
  }

  return courseFunction();
}

// Helper function to get all courses for a grade level
export function getCoursesForGrade(gradeKey: string): string[] {
  const gradeMap = courseMap[gradeKey];
  return gradeMap ? Object.keys(gradeMap) : [];
}
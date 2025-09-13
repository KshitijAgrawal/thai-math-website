'use client';

import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { getCourseData } from '../courses';

interface CoursePageProps {
  courseKey: string;
  courseName: string;
  gradeLevel: string;
  onBack: () => void;
}

const CoursePage: React.FC<CoursePageProps> = ({ courseKey, courseName, gradeLevel, onBack }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'curriculum' | 'lesson'>('curriculum');
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [lessonMode, setLessonMode] = useState<'video' | 'questions'>('video');
  const [videoCompleted, setVideoCompleted] = useState<Set<number>>(new Set());

  // Get course data from the modular course files
  const courseData = getCourseData(courseName, courseKey);
  const currentLessonData = courseData.lessons[currentLesson];
  const currentQuestionData = currentLessonData?.questions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < currentLessonData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1] ?? null);
      setShowExplanation(!!userAnswers[currentQuestion - 1] !== undefined);
    }
  };

  const handleLessonSelect = (lessonIndex: number) => {
    setCurrentLesson(lessonIndex);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setUserAnswers([]);
    setViewMode('lesson');
  };

  if (viewMode === 'curriculum') {
    return (
      <div key="curriculum-view" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={onBack}
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  กลับหน้าหลัก
                </button>
                <div className="w-px h-6 bg-gray-300"></div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{courseData.title}</h1>
                  <p className="text-sm text-gray-600">{gradeLevel}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-sm text-gray-600">
                    {completedLessons.size}/{courseData.lessons.length} บทเรียนเสร็จสิ้น
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Course Overview */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{courseData.title}</h2>
                  <p className="text-lg text-gray-600">{gradeLevel}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{courseData.lessons.length}</div>
                  <div className="text-gray-600">บทเรียน</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  ⏰ <div className="ml-3">
                    <div className="font-semibold">ระยะเวลา</div>
                    <div className="text-gray-600">{courseData.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  📚 <div className="ml-3">
                    <div className="font-semibold">ระดับความยาก</div>
                    <div className="text-gray-600">{courseData.difficulty}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  🎯 <div className="ml-3">
                    <div className="font-semibold">จำนวนคำถาม</div>
                    <div className="text-gray-600">{courseData.lessons.reduce((total, lesson) => total + lesson.questions.length, 0)} คำถาม</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">เกี่ยวกับคอร์สนี้</h3>
                <p className="text-gray-700">{courseData.description}</p>
                
                {courseData.prerequisites && courseData.prerequisites.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">ความรู้พื้นฐานที่ต้องมี:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {courseData.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {courseData.objectives && courseData.objectives.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">จุดประสงค์การเรียนรู้:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {courseData.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Lesson List */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                <h3 className="text-xl font-bold text-white">หลักสูตรการเรียน</h3>
                <p className="text-blue-100">คลิกเพื่อเริ่มเรียนแต่ละบทเรียน</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {courseData.lessons.map((lesson, index) => (
                  <div 
                    key={lesson.id}
                    onClick={() => handleLessonSelect(index)}
                    className="px-8 py-6 hover:bg-gray-50 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            {completedLessons.has(index) ? '✅' : '⭕'}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            บทที่ {lesson.id}: {lesson.title}
                          </h4>
                          <p className="text-sm text-gray-600">{lesson.duration} • {lesson.questions.length} คำถาม</p>
                        </div>
                      </div>
                      <span className="text-blue-600">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Lesson View (Interactive Questions)
  return (
    <div key={`lesson-view-${currentLesson}`} className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setViewMode('curriculum')}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                กลับหลักสูตร
              </button>
              <div className="w-px h-6 bg-gray-300"></div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  บทที่ {currentLessonData.id}: {currentLessonData.title}
                </h1>
                <p className="text-sm text-gray-600">{courseData.title}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              คำถาม {currentQuestion + 1} จาก {currentLessonData.questions.length}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-gray-100 px-6 py-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">ความคืบหน้า</span>
                  <span className="text-sm text-gray-600">
                    {Math.round(((currentQuestion + 1) / currentLessonData.questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / currentLessonData.questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    คำถามที่ {currentQuestion + 1}
                  </h2>
                  <p className="text-xl text-gray-800 mb-6">
                    {currentQuestionData.question}
                  </p>
                </div>

                {/* Answer Options */}
                <div className="space-y-4 mb-8">
                  {currentQuestionData.options.map((option: string, index: number) => (
                    <button
                      key={`opt-${currentLesson}-${currentQuestion}-${index}`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        selectedAnswer === index
                          ? index === currentQuestionData.correctAnswer
                            ? 'border-green-500 bg-green-50 text-green-800'
                            : 'border-red-500 bg-red-50 text-red-800'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                          selectedAnswer === index
                            ? index === currentQuestionData.correctAnswer
                              ? 'border-green-500 bg-green-500'
                              : 'border-red-500 bg-red-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedAnswer === index && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="text-lg">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Explanation */}
                {showExplanation && (
                  <div className={`p-6 rounded-lg mb-8 ${
                    selectedAnswer === currentQuestionData.correctAnswer
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-center mb-3">
                      {selectedAnswer === currentQuestionData.correctAnswer ? '✅' : '❌'}
                      <span className={`font-semibold ml-2 ${
                        selectedAnswer === currentQuestionData.correctAnswer
                          ? 'text-green-800'
                          : 'text-red-800'
                      }`}>
                        {selectedAnswer === currentQuestionData.correctAnswer ? 'ถูกต้อง!' : 'ไม่ถูกต้อง'}
                      </span>
                    </div>
                    <p className="text-gray-700">{currentQuestionData.explanation}</p>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestion === 0}
                    className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← คำถามก่อนหน้า
                  </button>
                  
                  {currentQuestion < currentLessonData.questions.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      disabled={!showExplanation}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      คำถามถัดไป →
                    </button>
                  ) : (
                    <button
                    onClick={() => {
                        // Mark lesson as completed
                        setCompletedLessons(prev => {
                          const newSet = new Set(prev);
                          newSet.add(currentLesson);
                          return newSet;
                        });
                        
                        // Just switch view - let the lesson selection handler reset states
                        setViewMode('curriculum');
                      }}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      เสร็จสิ้นบทเรียน ✅
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">ความคืบหน้า</h3>
              
              {/* Score */}
              <div className="mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {userAnswers.filter((answer, index) => 
                      answer === currentLessonData.questions[index]?.correctAnswer
                    ).length}/{userAnswers.length}
                  </div>
                  <div className="text-sm text-gray-600">คำตอบที่ถูก</div>
                </div>
              </div>

              {/* Question List */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">รายการคำถาม</h4>
                {currentLessonData.questions.map((_: any, index: number) => (
                  <button
                    key={`qbtn-${currentLesson}-${index}`}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedAnswer(userAnswers[index] ?? null);
                      setShowExplanation(!!userAnswers[index] !== undefined);
                    }}
                    className={`w-full p-3 text-left rounded-lg border transition-colors ${
                      index === currentQuestion
                        ? 'border-blue-500 bg-blue-50'
                        : userAnswers[index] !== undefined
                        ? userAnswers[index] === currentLessonData.questions[index]?.correctAnswer
                          ? 'border-green-200 bg-green-50'
                          : 'border-red-200 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">คำถาม {index + 1}</span>
                      {userAnswers[index] !== undefined && (
                        userAnswers[index] === currentLessonData.questions[index]?.correctAnswer ? '✅' : '❌'
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
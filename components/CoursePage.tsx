import React, { useState } from 'react';
import { Play, CheckCircle, Circle, ChevronRight, ChevronLeft, Home, BookOpen, Award, Clock } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  questions: Question[];
  completed: boolean;
}

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

  // Generate lessons and questions based on course
  const generateCourseContent = (courseKey: string, courseName: string): Lesson[] => {
    const lessonTemplates: { [key: string]: string[] } = {
      'การนับและตัวเลข': [
        'การนับ 1-10', 'การนับ 11-20', 'การนับ 21-50', 'การนับ 51-100',
        'การเรียงลำดับตัวเลข', 'การเปรียบเทียบตัวเลข', 'จำนวนคู่และคี่',
        'การนับข้าม', 'ตัวเลขหลักเดียว', 'ตัวเลขสองหลัก'
      ],
      'การบวกลบ': [
        'การบวกพื้นฐาน 1-5', 'การบวกพื้นฐาน 6-10', 'การบวกไม่มีทดเลข',
        'การบวกมีทดเลข', 'การลบพื้นฐาน', 'การลบไม่มีการยืม', 'การลบมีการยืม',
        'การบวกลบผสม', 'การตรวจสอบคำตอบ', 'โจทย์ปัญหาการบวกลบ'
      ],
      'การคูณหาร': [
        'สูตรคูณแม่ 2', 'สูตรคูณแม่ 3', 'สูตรคูณแม่ 4', 'สูตรคูณแม่ 5',
        'สูตรคูณแม่ 6-9', 'การคูณสองหลัก', 'การหารพื้นฐาน', 'การหารมีเศษ',
        'ความสัมพันธ์คูณหาร', 'โจทย์ปัญหาการคูณหาร'
      ],
      'พีชคณิต': [
        'ตัวแปรและนิพจน์', 'การแก้สมการเชิงเส้น', 'การแก้อสมการ',
        'ระบบสมการเชิงเส้น', 'การดำเนินการพหุนาม', 'การแยกตัวประกอบ',
        'สมการกำลังสอง', 'ฟังก์ชันเชิงเส้น', 'กราฟและความชัน', 'การประยุกต์พีชคณิต'
      ],
      'เรขาคณิต': [
        'จุด เส้นตรง และระนาบ', 'มุมและการวัดมุม', 'รูปสามเหลี่ยม',
        'รูปสี่เหลี่ยม', 'รูปวงกลม', 'พื้นที่และปริมณฑล', 'ปริมาตร',
        'ทฤษฎีบทพีทาโกรัส', 'ตรีโกณมิติพื้นฐาน', 'การแปลงรูป'
      ],
      'แคลคูลัส': [
        'ลิมิตของฟังก์ชัน', 'ความต่อเนื่องของฟังก์ชัน', 'อนุพันธ์พื้นฐาน',
        'กฎของการหาอนุพันธ์', 'การประยุกต์อนุพันธ์', 'ปริพันธ์ไม่จำกัดเขต',
        'ปริพันธ์จำกัดเขต', 'ทฤษฎีบทพื้นฐานของแคลคูลัส', 'การประยุกต์ปริพันธ์',
        'อนุกรมอนันต์'
      ]
    };

    const questionTemplates: { [key: string]: (lessonIndex: number) => Question[] } = {
      'การนับและตัวเลข': (lessonIndex) => [
        {
          id: 1,
          question: `หลังจาก ${lessonIndex + 3} มาอีก 2 ตัวเลข คือเลขอะไร?`,
          options: [`${lessonIndex + 4}, ${lessonIndex + 5}`, `${lessonIndex + 5}, ${lessonIndex + 6}`, `${lessonIndex + 6}, ${lessonIndex + 7}`, `${lessonIndex + 2}, ${lessonIndex + 3}`],
          correctAnswer: 1,
          explanation: `การนับต่อเนื่อง: ${lessonIndex + 3} ตามด้วย ${lessonIndex + 4} และ ${lessonIndex + 5}`
        }
      ],
      'การบวกลบ': (lessonIndex) => [
        {
          id: 1,
          question: `${5 + lessonIndex} + ${3 + lessonIndex} = ?`,
          options: [`${7 + lessonIndex}`, `${8 + (lessonIndex * 2)}`, `${9 + lessonIndex}`, `${6 + lessonIndex}`],
          correctAnswer: 1,
          explanation: `${5 + lessonIndex} + ${3 + lessonIndex} = ${8 + (lessonIndex * 2)}`
        }
      ],
      'การคูณหาร': (lessonIndex) => [
        {
          id: 1,
          question: `${2 + lessonIndex} × ${3} = ?`,
          options: [`${(2 + lessonIndex) * 3}`, `${(2 + lessonIndex) + 3}`, `${(2 + lessonIndex) * 2}`, `${6 + lessonIndex}`],
          correctAnswer: 0,
          explanation: `${2 + lessonIndex} × 3 = ${(2 + lessonIndex) * 3}`
        }
      ],
      'พีชคณิต': (lessonIndex) => [
        {
          id: 1,
          question: `ถ้า x + ${2 + lessonIndex} = ${8 + lessonIndex} แล้ว x = ?`,
          options: [`${6}`, `${10 + lessonIndex}`, `${8 - lessonIndex}`, `${6 - lessonIndex}`],
          correctAnswer: 0,
          explanation: `x = ${8 + lessonIndex} - ${2 + lessonIndex} = 6`
        }
      ],
      'เรขาคณิต': (lessonIndex) => [
        {
          id: 1,
          question: `พื้นที่ของสี่เหลี่ยมผืนผ้าที่มีความกว้าง ${3 + lessonIndex} และความยาว ${4 + lessonIndex} คือ?`,
          options: [`${(3 + lessonIndex) * (4 + lessonIndex)} ตารางหน่วย`, `${(3 + lessonIndex) + (4 + lessonIndex)} หน่วย`, `${7 + (lessonIndex * 2)} ตารางหน่วย`, `${12 + lessonIndex} หน่วย`],
          correctAnswer: 0,
          explanation: `พื้นที่ = ความกว้าง × ความยาว = ${3 + lessonIndex} × ${4 + lessonIndex} = ${(3 + lessonIndex) * (4 + lessonIndex)} ตารางหน่วย`
        }
      ],
      'แคลคูลัส': (lessonIndex) => [
        {
          id: 1,
          question: `อนุพันธ์ของ f(x) = x² + ${2 + lessonIndex}x คือ?`,
          options: [`2x + ${2 + lessonIndex}`, `x² + ${2 + lessonIndex}`, `2x + ${1 + lessonIndex}`, `x + ${2 + lessonIndex}`],
          correctAnswer: 0,
          explanation: `f'(x) = 2x + ${2 + lessonIndex} (อนุพันธ์ของ x² คือ 2x และอนุพันธ์ของ ${2 + lessonIndex}x คือ ${2 + lessonIndex})`
        }
      ]
    };

    const lessons = lessonTemplates[courseName] || lessonTemplates['การนับและตัวเลข'];
    const questionGenerator = questionTemplates[courseName] || questionTemplates['การนับและตัวเลข'];

    return lessons.map((title, index) => ({
      id: index + 1,
      title,
      duration: `${Math.floor(Math.random() * 10) + 5} นาที`,
      questions: questionGenerator(index),
      completed: false
    }));
  };

  const lessons = generateCourseContent(courseKey, courseName);
  const currentLessonData = lessons[currentLesson];
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
      setSelectedAnswer(userAnswers[currentQuestion - 1] || null);
      setShowExplanation(!!userAnswers[currentQuestion - 1]);
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

  const getScoreForLesson = () => {
    const totalQuestions = currentLessonData.questions.length;
    const correctAnswers = userAnswers.filter((answer, index) => 
      answer === currentLessonData.questions[index]?.correctAnswer
    ).length;
    return { correct: correctAnswers, total: totalQuestions };
  };

  if (viewMode === 'curriculum') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.history.back()}
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Home className="w-5 h-5 mr-2" />
                  กลับหน้าหลัก
                </button>
                <div className="w-px h-6 bg-gray-300"></div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{courseName}</h1>
                  <p className="text-sm text-gray-600">{gradeLevel}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-sm text-gray-600">
                  {lessons.filter(l => l.completed).length}/{lessons.length} บทเรียนเสร็จสิ้น
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{courseName}</h2>
                  <p className="text-lg text-gray-600">{gradeLevel}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{lessons.length}</div>
                  <div className="text-gray-600">บทเรียน</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <div>
                    <div className="font-semibold">ระยะเวลา</div>
                    <div className="text-gray-600">2-3 ชั่วโมง</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <div className="font-semibold">ระดับความยาก</div>
                    <div className="text-gray-600">เริ่มต้น</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-purple-500 mr-3" />
                  <div>
                    <div className="font-semibold">ใบประกาศนียบัตร</div>
                    <div className="text-gray-600">เมื่อเสร็จสิ้น</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">เกี่ยวกับคอร์สนี้</h3>
                <p className="text-gray-700">
                  เรียนรู้{courseName}อย่างครบถ้วนด้วยวิดีโอบทเรียน แบบฝึกหัดโต้ตอบ และการทดสอบความเข้าใจ 
                  เหมาะสำหรับนักเรียน{gradeLevel}ที่ต้องการพัฒนาทักษะด้านคณิตศาสตร์
                </p>
              </div>
            </div>

            {/* Lesson List */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                <h3 className="text-xl font-bold text-white">หลักสูตรการเรียน</h3>
                <p className="text-blue-100">คลิกเพื่อเริ่มเรียนแต่ละบทเรียน</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {lessons.map((lesson, index) => (
                  <div 
                    key={lesson.id}
                    onClick={() => handleLessonSelect(index)}
                    className="px-8 py-6 hover:bg-gray-50 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {lesson.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-400 group-hover:text-blue-500" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            บทที่ {lesson.id}: {lesson.title}
                          </h4>
                          <p className="text-sm text-gray-600">{lesson.duration} • 1 คำถาม</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Play className="w-5 h-5 text-blue-500" />
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                      </div>
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

  // Lesson View
  return (
    <div className="min-h-screen bg-gray-50">
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
                <p className="text-sm text-gray-600">{courseName}</p>
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
                  {currentQuestionData.options.map((option, index) => (
                    <button
                      key={index}
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
                      {selectedAnswer === currentQuestionData.correctAnswer ? (
                        <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                      ) : (
                        <Circle className="w-6 h-6 text-red-600 mr-2" />
                      )}
                      <span className={`font-semibold ${
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
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    คำถามก่อนหน้า
                  </button>
                  
                  {currentQuestion < currentLessonData.questions.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      disabled={!showExplanation}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      คำถามถัดไป
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setViewMode('curriculum')}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      เสร็จสิ้นบทเรียน
                      <CheckCircle className="w-5 h-5 ml-2" />
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
                {currentLessonData.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedAnswer(userAnswers[index] || null);
                      setShowExplanation(!!userAnswers[index]);
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
                        userAnswers[index] === currentLessonData.questions[index]?.correctAnswer ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Circle className="w-4 h-4 text-red-500" />
                        )
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
'use client';

import React, { useState } from 'react';
import { Play, ChevronRight, Menu, X, Calculator, PenTool, BarChart3 } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('primary');

  const gradeOptions = [
    { key: 'primary', label: 'ประถมศึกษา (ป.1-ป.6)', color: 'bg-blue-500' },
    { key: 'lower-secondary', label: 'มัธยมต้น (ม.1-ม.3)', color: 'bg-green-500' },
    { key: 'upper-secondary', label: 'มัธยมปลาย (ม.4-ม.6)', color: 'bg-purple-500' },
    { key: 'university', label: 'มหาวิทยาลัย', color: 'bg-orange-500' }
  ];

  const getSubjects = (grade: string) => {
    if (grade === 'primary') {
      return [
        { name: 'การนับและตัวเลข', lessons: 24, icon: '🔢' },
        { name: 'การบวกลบ', lessons: 32, icon: '➕' },
        { name: 'การคูณหาร', lessons: 28, icon: '✖️' },
        { name: 'เศษส่วน', lessons: 20, icon: '🍰' },
        { name: 'เรขาคณิตพื้นฐาน', lessons: 16, icon: '📐' },
        { name: 'การวัด', lessons: 18, icon: '📏' }
      ];
    }
    if (grade === 'lower-secondary') {
      return [
        { name: 'พีชคณิต', lessons: 45, icon: '📊' },
        { name: 'เรขาคณิต', lessons: 38, icon: '△' },
        { name: 'สถิติ', lessons: 22, icon: '📈' },
        { name: 'ความน่าจะเป็น', lessons: 18, icon: '🎲' },
        { name: 'จำนวนจริง', lessons: 25, icon: '∞' }
      ];
    }
    if (grade === 'upper-secondary') {
      return [
        { name: 'แคลคูลัส', lessons: 60, icon: '∫' },
        { name: 'ตรีโกณมิติ', lessons: 35, icon: '📐' },
        { name: 'เวกเตอร์', lessons: 28, icon: '→' },
        { name: 'เมทริกซ์', lessons: 32, icon: '⬜' },
        { name: 'สถิติขั้นสูง', lessons: 40, icon: '📊' }
      ];
    }
    if (grade === 'university') {
      return [
        { name: 'Linear Algebra', lessons: 55, icon: '🔢' },
        { name: 'Differential Equations', lessons: 48, icon: '𝑓′' },
        { name: 'Complex Analysis', lessons: 42, icon: 'ℂ' },
        { name: 'Real Analysis', lessons: 50, icon: 'ℝ' }
      ];
    }
    return [];
  };

  const features = [
    {
      icon: <Play className="w-8 h-8 text-blue-500" />,
      title: 'วิดีโอเรียนออนไลน์',
      description: 'บทเรียนวิดีโอภาษาไทยที่เข้าใจง่าย พร้อมตัวอย่างและการอธิบายทีละขั้นตอน'
    },
    {
      icon: <PenTool className="w-8 h-8 text-green-500" />,
      title: 'แบบฝึกหัดโต้ตอบ',
      description: 'ฝึกทำโจทย์กับระบบตรวจคำตอบอัตโนมัติ พร้อมคำแนะนำเมื่อตอบผิด'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'ติดตามความก้าวหน้า',
      description: 'เช็คผลคะแนนและความก้าวหน้าในการเรียน พร้อมรายงานผลการเรียนรู้'
    },
    {
      icon: <Calculator className="w-8 h-8 text-orange-500" />,
      title: 'เครื่องมือคำนวณ',
      description: 'เครื่องคิดเลขวิทยาศาสตร์และเครื่องมือช่วยแก้โจทย์คณิตศาสตร์'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'นักเรียน' },
    { number: '500+', label: 'บทเรียน' },
    { number: '50+', label: 'หัวข้อ' },
    { number: '95%', label: 'ความพึงพอใจ' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">MathThai</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">หน้าหลัก</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">คอร์สเรียน</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">เกี่ยวกับเรา</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">ติดต่อ</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium">เข้าสู่ระบบ</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                สมัครเรียน
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">หน้าหลัก</a>
              <a href="#courses" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">คอร์สเรียน</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">เกี่ยวกับเรา</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">ติดต่อ</a>
              <hr className="my-2" />
              <button className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">เข้าสู่ระบบ</button>
              <button className="block w-full bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">สมัครเรียน</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            เรียนคณิตศาสตร์
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> ออนไลน์</span>
            <br />ภาษาไทย
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            เว็บไซต์เรียนคณิตศาสตร์ออนไลน์ที่ครบครัน สำหรับนักเรียนไทยทุกระดับชั้น 
            ด้วยวิดีโอบทเรียน แบบฝึกหัด และเครื่องมือช่วยเรียนรู้ที่ทันสมัย
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              เริ่มเรียนฟรี
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors">
              ดูตัวอย่างบทเรียน
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ทำไมต้องเลือก MathThai?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เรามีเครื่องมือและฟีเจอร์ที่ช่วยให้การเรียนคณิตศาสตร์เป็นเรื่องง่ายและสนุก
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              คอร์สเรียนของเรา
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เลือกระดับการศึกษาที่เหมาะสมกับคุณ
            </p>
          </div>

          {/* Grade Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {gradeOptions.map((grade) => (
              <button
                key={grade.key}
                onClick={() => setSelectedGrade(grade.key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedGrade === grade.key
                    ? `${grade.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {grade.label}
              </button>
            ))}
          </div>

          {/* Subject Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getSubjects(selectedGrade).map((subject, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{subject.icon}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {subject.lessons} บทเรียน
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{subject.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">เริ่มเรียนเลย</span>
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            พร้อมที่จะเริ่มเรียนคณิตศาสตร์แล้วหรือยัง?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            สมัครสมาชิกวันนี้ และเริ่มเรียนฟรี 7 วัน
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            เริ่มเรียนฟรี 7 วัน
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold">MathThai</span>
              </div>
              <p className="text-gray-400">
                เว็บไซต์เรียนคณิตศาสตร์ออนไลน์ภาษาไทย สำหรับนักเรียนทุกระดับ
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">คอร์สเรียน</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">ประถมศึกษา</a></li>
                <li><a href="#" className="hover:text-white">มัธยมต้น</a></li>
                <li><a href="#" className="hover:text-white">มัธยมปลาย</a></li>
                <li><a href="#" className="hover:text-white">มหาวิทยาลัย</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">ช่วยเหลือ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">คำถามที่พบบ่อย</a></li>
                <li><a href="#" className="hover:text-white">ติดต่อเรา</a></li>
                <li><a href="#" className="hover:text-white">รายงานปัญหา</a></li>
                <li><a href="#" className="hover:text-white">คู่มือการใช้งาน</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">ติดตามเรา</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
                <li><a href="#" className="hover:text-white">Line</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MathThai. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
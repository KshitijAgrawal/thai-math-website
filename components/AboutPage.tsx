'use client';

import React from 'react';
import { ChevronLeft, BookOpen, Award, Users, Target, Heart, Star, Globe, Calculator, PenTool } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  const stats = [
    { number: '10,000+', label: 'นักเรียนที่ไว้วางใจ', icon: <Users className="w-6 h-6 text-blue-600" /> },
    { number: '500+', label: 'บทเรียนคุณภาพ', icon: <BookOpen className="w-6 h-6 text-green-600" /> },
    { number: '50+', label: 'หัวข้อการเรียน', icon: <Target className="w-6 h-6 text-purple-600" /> },
    { number: '95%', label: 'ความพึงพอใจ', icon: <Star className="w-6 h-6 text-yellow-600" /> }
  ];

  const achievements = [
    'จัดการสอนคณิตศาสตร์ระดับประถมศึกษาถึงมัธยมปลาย',
    'พัฒนาหลักสูตรการเรียนออนไลน์ภาษาไทย',
    'ผู้เชี่ยวชาญด้านการสอนแบบโต้ตอบและเทคโนโลยีการศึกษา',
    'จัดทำแบบฝึกหัดและสื่อการเรียนรู้ดิจิทัล',
    'ที่ปรึกษาหลักสูตรคณิตศาสตร์สำหรับโรงเรียนชั้นนำ'
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'ใส่ใจในทุกคน',
      description: 'เราเชื่อว่าทุกคนสามารถเรียนรู้คณิตศาสตร์ได้ เราใส่ใจในความต้องการของนักเรียนแต่ละคน'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'มุ่งเน้นผลลัพธ์',
      description: 'การสอนของเราเน้นให้นักเรียนเข้าใจและนำไปใช้ได้จริง ไม่ใช่แค่จำสูตร'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'เข้าถึงได้ทุกที่',
      description: 'เรียนได้ทุกที่ทุกเวลา ไม่ต้องเดินทาง ประหยัดเวลาและค่าใช้จ่าย'
    },
    {
      icon: <Calculator className="w-8 h-8 text-purple-500" />,
      title: 'วิธีการสอนใหม่',
      description: 'ใช้เทคโนโลยีและวิธีการสอนที่ทันสมัย ทำให้การเรียนคณิตศาสตร์สนุกและเข้าใจง่าย'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                กลับหน้าหลัก
              </button>
              <div className="w-px h-6 bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">เกี่ยวกับเรา</h1>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            เกี่ยวกับ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">MathThai</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            แพลตฟอร์มการเรียนคณิตศาสตร์ออนไลน์ภาษาไทยที่ครบครัน 
            สร้างขึ้นด้วยใจรักในการสอนและความตั้งใจที่จะทำให้การเรียนคณิตศาสตร์เป็นเรื่องสนุก
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Profile Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6">
                  <img 
                    src="/teacher-profile.png" 
                    alt="ครูพี่ฝ้าย - ผู้ก่อตั้ง MathThai"
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ครูพี่ฝ้าย</h3>
                <p className="text-gray-600 mb-4">ผู้ก่อตั้งและหัวหน้าทีมการสอน</p>
                <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 mr-2" />
                  จบการศึกษาจากมหาวิทยาลัยธรรมศาสตร์
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ประสบการณ์และความเชี่ยวชาญ</h3>
              <div className="space-y-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">🎯 ปณิธานของเรา</h4>
                <p className="text-gray-700 leading-relaxed">
                  "เราเชื่อว่าทุกคนสามารถเรียนรู้คณิตศาสตร์ได้ หากได้รับการสอนที่ถูกวิธี 
                  เราจึงสร้างแพลตฟอร์มนี้ขึ้นมาเพื่อให้ความรู้อยู่เพียงปลายนิ้ว 
                  ไม่ต้องออกจากบ้าน ไม่ต้องเสียค่าเดินทาง และไม่ต้องเสียเวลา 
                  แค่คลิกเมาส์ก็สามารถเรียนรู้ได้แล้ว"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">หลักการของเรา</h3>
            <p className="text-xl text-gray-600">สิ่งที่เราเชื่อและยึดถือในการสอน</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h4 className="text-xl font-bold text-gray-900 ml-3">{value.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <PenTool className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">พันธกิจของเรา</h3>
            <p className="text-xl leading-relaxed opacity-90">
              MathThai ยินดีต้อนรับน้องๆทุกคน เชื่อว่าน้องๆที่เข้ามาเว็บไซต์เรียนออนไลน์แห่งนี้
              อาจจะกำลังหาที่พึ่งทางใจในการเรียนคณิตศาสตร์ หรือติวข้อสอบคณิตศาสตร์อยู่
              อย่ากังวลไปเลย เพราะที่นี่ให้ความรู้ในรูปแบบใหม่ การสอนที่แหวกแนว
              พร้อมด้วยเทคโนโลยีที่ทันสมัย ทำให้การเรียนคณิตศาสตร์เป็นเรื่องสนุก
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">พร้อมเริ่มต้นการเรียนรู้แล้วหรือยัง?</h3>
          <p className="text-xl text-gray-600 mb-8">
            มาร่วมเรียนรู้คณิตศาสตร์ไปกับเราและค้นพบความสนุกในการเรียน
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors">
            เริ่มเรียนฟรีตอนนี้
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold">MathThai</span>
              </div>
              <p className="text-gray-400">
                แพลตฟอร์มการเรียนคณิตศาสตร์ออนไลน์ภาษาไทย สำหรับนักเรียนทุกระดับ
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">ติดต่อเรา</h4>
              <ul className="space-y-2 text-gray-400">
                <li>อีเมล: info@maththai.com</li>
                <li>โทรศัพท์: 02-XXX-XXXX</li>
                <li>Line: @maththai</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">ติดตามเรา</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Facebook</li>
                <li>YouTube</li>
                <li>TikTok</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MathThai. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
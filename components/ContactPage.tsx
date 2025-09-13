'use client';

import React, { useState } from 'react';
import { ChevronLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Youtube } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'อีเมล',
      detail: 'info@maththai.com',
      subdetal: 'support@maththai.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: 'โทรศัพท์',
      detail: '02-XXX-XXXX',
      subdetal: 'จันทร์-ศุกร์ 9:00-18:00'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      title: 'Line Official',
      detail: '@maththai',
      subdetal: 'ตอบกลับทันที 24 ชั่วโมง'
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: 'ที่อยู่',
      detail: 'กรุงเทพมหานคร',
      subdetal: 'ประเทศไทย'
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: 'Facebook',
      url: '#',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: 'YouTube',
      url: '#',
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: 'Line',
      url: '#',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  const faqItems = [
    {
      question: 'คอร์สเรียนเริ่มต้นเท่าไหร่?',
      answer: 'เรามีคอร์สทดลองเรียนฟรี 7 วัน และแพ็กเกจเริ่มต้นที่ 299 บาทต่อเดือน'
    },
    {
      question: 'สามารถเรียนได้ทุกอุปกรณ์หรือไม่?',
      answer: 'ได้ครับ รองรับทั้งคอมพิวเตอร์ แท็บเล็ต และโทรศัพท์มือถือ'
    },
    {
      question: 'มีการสอนสดหรือเป็นวิดีโอบันทึกมา?',
      answer: 'เป็นวิดีโอบทเรียนที่บันทึกมาอย่างมีคุณภาพ สามารถเรียนได้ตามเวลาที่สะดวก'
    },
    {
      question: 'หากมีคำถามระหว่างเรียนจะสอบถามได้ที่ไหน?',
      answer: 'สามารถสอบถามผ่าน Line Official หรือส่งอีเมลมาได้ ทีมงานจะตอบภายใน 24 ชั่วโมง'
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
              <h1 className="text-xl font-bold text-gray-900">ติดต่อเรา</h1>
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
            ติดต่อเรา
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            มีคำถามเกี่ยวกับคอร์สเรียน หรือต้องการความช่วยเหลือ? 
            ทีมงานของเรายินดีให้คำปรึกษาและตอบทุกข้อสงสัย
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.detail}</p>
                <p className="text-sm text-gray-500 mt-1">{info.subdetal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ส่งข้อความหาเรา</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อ-นามสกุล *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="กรุณากรอกชื่อ-นามสกุล"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        โทรศัพท์
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="กรุณากรอกหมายเลขโทรศัพท์"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="กรุณากรอกอีเมล"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      หัวข้อ *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">เลือกหัวข้อ</option>
                      <option value="course-inquiry">สอบถามคอร์สเรียน</option>
                      <option value="technical-support">ปัญหาทางเทคนิค</option>
                      <option value="payment">เรื่องการชำระเงิน</option>
                      <option value="feedback">แสดงความคิดเห็น</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      ข้อความ *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="กรุณาระบุรายละเอียด..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    ส่งข้อความ
                  </button>
                </form>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">คำถามที่พบบ่อย</h3>
              <div className="space-y-4 mb-8">
                {faqItems.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">ติดตามเราได้ที่</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} text-white p-3 rounded-lg transition-colors flex items-center justify-center`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  ติดตามข่าวสารและเทคนิคการเรียนคณิตศาสตร์
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Clock className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">เวลาทำการ</h3>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div>
              <h4 className="font-semibold mb-2">จันทร์ - ศุกร์</h4>
              <p className="opacity-90">9:00 - 18:00 น.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">เสาร์ - อาทิตย์</h4>
              <p className="opacity-90">10:00 - 16:00 น.</p>
            </div>
          </div>
          <p className="mt-6 opacity-90">
            Line Official และอีเมลตอบกลับภายใน 24 ชั่วโมง
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold">MathThai</span>
          </div>
          <p className="text-gray-400 mb-4">
            แพลตฟอร์มการเรียนคณิตศาสตร์ออนไลน์ภาษาไทย สำหรับนักเรียนทุกระดับ
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400">&copy; 2024 MathThai. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
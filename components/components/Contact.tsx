
import React, { useState } from 'react';

// הגדרת כתובת האימייל המקצועית שלך כאן
const PROFESSIONAL_EMAIL = "yossi10@duck.com"; // החלף בכתובת ה-Wix שלך במידה והיא שונה
const PHONE_NUMBER = "054-7515142";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // כאן מומלץ להשתמש ב-Formspree.io - זה שירות חינמי שמעביר טפסים ישירות לאימייל שלך ב-Wix
      // פשוט נרשמים, מקבלים ID ושמים אותו כאן ב-URL: https://formspree.io/f/YOUR_ID
      
      /* 
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) { setStatus('success'); } else { setStatus('error'); }
      */

      // סימולציה למטרות פיתוח
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '', service: '', address: '' });
      
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const services = [
    'בדיקה לפני רכישה',
    'בדיקת דירה חדשה מקבלן',
    'איתור ליקויי בניה ורטיבות',
    'ליווי ופיקוח בבנייה',
  ];

  const whatsappLink = `https://wa.me/972${PHONE_NUMBER.substring(1).replace('-', '')}?text=${encodeURIComponent('היי, אשמח לקבל הצעת מחיר לבדק בית עבור ' + (formData.service || 'הנכס שלי'))}`;

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-[20px] mb-4">צרו קשר</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">בואו נבטיח את הנכס שלכם</h3>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            השאירו פרטים למטה או שלחו לנו הודעה ישירה בוואטסאפ למענה מהיר.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Details & WhatsApp */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-white/5 space-y-8">
              <h4 className="text-2xl font-bold text-white">פרטים נוספים</h4>
              
              <div className="space-y-6">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">התקשרו אלינו</p>
                    <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{PHONE_NUMBER}</p>
                  </div>
                </a>

                <a href={`mailto:${PROFESSIONAL_EMAIL}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">שלחו מייל</p>
                    <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors break-all">{PROFESSIONAL_EMAIL}</p>
                  </div>
                </a>
              </div>

              <div className="pt-6 border-t border-white/5">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-green-900/20 transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.423 4.842 1.425 5.303 0 9.617-4.312 9.619-9.617.001-2.571-1.003-4.985-2.83-6.81s-4.239-2.827-6.801-2.829c-5.304 0-9.619 4.313-9.621 9.618-.001 1.738.476 3.426 1.38 4.898l-1.035 3.778 3.846-1.007zm11.303-5.004c-.312-.156-1.848-.912-2.141-1.017-.293-.104-.506-.156-.719.156-.213.312-.826 1.017-1.012 1.25-.187.234-.373.26-.686.104-.312-.156-1.316-.486-2.507-1.548-.927-.827-1.553-1.849-1.735-2.162-.182-.312-.019-.481.137-.635.141-.138.312-.364.469-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.547-.078-.156-.719-1.731-.985-2.37-.259-.622-.523-.538-.719-.547l-.613-.013c-.213 0-.559.081-.852.403-.293.322-1.118 1.094-1.118 2.67s1.145 3.1 1.303 3.308c.158.208 2.254 3.441 5.459 4.823.761.329 1.355.525 1.817.671.764.243 1.459.208 2.009.127.613-.091 1.848-.755 2.11-1.485.261-.73.261-1.355.183-1.485-.077-.13-.285-.208-.597-.364z"/></svg>
                  שלחו הודעה בוואטסאפ
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-gray-900 border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              {status === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-3xl font-black text-white mb-4">ההודעה נשלחה בהצלחה!</h4>
                  <p className="text-gray-400 text-lg mb-8">תודה שפנית אלינו. נציג מקצועי מטעמנו יחזור אליך לכתובת {PROFESSIONAL_EMAIL} תוך זמן קצר.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-blue-400 font-bold hover:underline"
                  >
                    שליחת הודעה נוספת
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 mr-2">שם מלא</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required 
                        className="w-full bg-gray-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                        placeholder="ישראל ישראלי"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 mr-2">טלפון ליצירת קשר</label>
                      <input 
                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required 
                        className="w-full bg-gray-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                        placeholder="05X-XXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 mr-2">סוג השירות המבוקש</label>
                      <select 
                        name="service" value={formData.service} onChange={handleChange} required
                        className="w-full bg-gray-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none appearance-none"
                      >
                        <option value="" disabled>בחרו שירות...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 mr-2">אימייל לחזרה</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full bg-gray-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 mr-2">ספרו לנו קצת על הנכס</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleChange} rows={4}
                      className="w-full bg-gray-950 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
                      placeholder="כתובת, קומה, מספר חדרים, או כל פרט חשוב אחר..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xl py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        שולח פנייה...
                      </>
                    ) : 'שלחו הצעה עבורי'}
                  </button>
                  
                  {status === 'error' && (
                    <p className="text-red-400 text-center text-sm font-bold">אופס! קרתה תקלה. נסו שוב או פנו אלינו בוואטסאפ.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

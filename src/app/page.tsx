'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { GripVertical } from 'lucide-react'

// Динамический импорт React Flow компонента (только на клиенте)
const Concept11Flow = dynamic(() => import('@/components/Concept11Flow'), { ssr: false })

// ============================================
// ГЛОБАЛЬНЫЕ СТИЛИ И АНИМАЦИИ - ТЕХНО СТИЛЬ
// ============================================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
  
  * {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.02); opacity: 0.9; }
  }
  
  @keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }
  
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.3), 0 0 40px rgba(250, 204, 21, 0.1); }
    50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.5), 0 0 60px rgba(250, 204, 21, 0.2); }
  }
  
  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes blink {
    0%, 50% { border-color: #FACC15; }
    51%, 100% { border-color: transparent; }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .gradient-text {
    background: linear-gradient(90deg, #FACC15, #FEF08A, #FACC15);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }
  
  .gradient-text-white {
    background: linear-gradient(90deg, #FFFFFF, #E5E5E5, #FFFFFF);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
  
  .animate-glitch:hover {
    animation: glitch 0.3s ease-in-out;
  }
  
  .btn-primary {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  .btn-primary:hover::before {
    left: 100%;
  }
  
  .card-glow {
    position: relative;
  }
  
  .card-glow::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(45deg, #FACC15, transparent, #FACC15);
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .card-glow:hover::before {
    opacity: 1;
  }
  
  .mono {
    font-family: 'JetBrains Mono', monospace;
  }
  
  .scanline {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to bottom, transparent, rgba(250, 204, 21, 0.1), transparent);
    animation: scanline 8s linear infinite;
    pointer-events: none;
    z-index: 9999;
  }
  
  .grid-bg {
    background-image: 
      linear-gradient(rgba(250, 204, 21, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250, 204, 21, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
  }
  
  .noise-bg {
    position: relative;
  }
  
  .noise-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.02;
    pointer-events: none;
  }
`

// Цветовая схема
const COLORS = {
  black: '#000000',
  dark: '#0A0A0A',
  darkAlt: '#141414',
  gray: '#1A1A1A',
  grayLight: '#262626',
  grayText: '#737373',
  grayTextLight: '#A3A3A3',
  white: '#FFFFFF',
  whiteOff: '#FAFAFA',
  yellow: '#FACC15',
  yellowLight: '#FDE047',
  yellowDark: '#EAB308',
  yellowMuted: 'rgba(250, 204, 21, 0.1)',
  yellowBorder: 'rgba(250, 204, 21, 0.3)',
  green: '#22C55E',
  red: '#EF4444',
  blue: '#3B82F6',
}

// ============================================
// КОНЦЕПТ 1: КРАТКИЕ ЦЕПЛЯЮЩИЕ ХУКИ
// ============================================
function Concept1() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.black, color: COLORS.white }}>
      <style>{styles}</style>
      <div className="scanline" />
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(20px)',
        zIndex: 100,
        borderBottom: `1px solid ${COLORS.yellowBorder}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: 32,
            height: 32,
            background: COLORS.yellow,
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: COLORS.black, fontWeight: 900, fontSize: 16 }}>AI</span>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white }}>
            тАйга
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#features" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Возможности</a>
          <a href="#stats" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Метрики</a>
          <a href="#cta" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Тарифы</a>
          <button className="btn-primary animate-glow" style={{
            padding: '12px 28px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: COLORS.yellow,
            color: COLORS.black,
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            Пригласить коллегу
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid-bg" style={{
        paddingTop: '180px',
        paddingBottom: '100px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 20px',
          borderRadius: 6,
          border: `1px solid ${COLORS.yellowBorder}`,
          marginBottom: '32px',
          fontSize: '13px',
          color: COLORS.yellow,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}>
          AI-POWERED COMMUNICATION
        </div>
        
        <h1 style={{
          fontSize: '72px',
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: '24px',
          maxWidth: '1000px',
          margin: '0 auto 24px',
          letterSpacing: '-3px',
        }}>
          Продажи начинаются{' '}
          <span className="gradient-text">в диалоге</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: COLORS.grayTextLight,
          maxWidth: '600px',
          margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          ИИ превращает каждый контакт с клиентом в управляемый источник продаж
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="btn-primary animate-glow" style={{
            padding: '18px 40px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: COLORS.yellow,
            color: COLORS.black,
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
          }}>
            Пригласить коллегу
          </button>
          <button className="hover-lift" style={{
            padding: '18px 40px',
            borderRadius: 8,
            border: `1px solid ${COLORS.grayLight}`,
            backgroundColor: 'transparent',
            color: COLORS.white,
            fontWeight: 600,
            fontSize: '16px',
            cursor: 'pointer',
          }}>
            Смотреть демо
          </button>
        </div>

        {/* Декоративные элементы */}
        <div style={{ position: 'absolute', top: 200, left: 100, opacity: 0.1 }}>
          <div style={{ width: 300, height: 300, border: `1px solid ${COLORS.yellow}`, borderRadius: '50%' }} />
        </div>
        <div style={{ position: 'absolute', top: 300, right: 150, opacity: 0.1 }}>
          <div style={{ width: 200, height: 200, border: `1px solid ${COLORS.yellow}`, transform: 'rotate(45deg)' }} />
        </div>
      </section>

      {/* Stats */}
      <section id="stats" style={{ padding: '80px 20px', backgroundColor: COLORS.dark, borderTop: `1px solid ${COLORS.gray}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
          {[
            { value: '340%', label: 'Рост выручки за 3 месяца' },
            { value: '+18%', label: 'Конверсия продаж' },
            { value: '30с', label: 'До инсайта' },
            { value: '5мин', label: 'На настройку' },
          ].map((stat, i) => (
            <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mono" style={{ fontSize: '56px', fontWeight: 700, color: COLORS.yellow }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: COLORS.grayText, marginTop: '8px', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="grid-bg" style={{ padding: '120px 20px', backgroundColor: COLORS.black }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, textAlign: 'center', marginBottom: '20px', letterSpacing: '-2px' }}>
            Диалоги, которые <span className="gradient-text">приносят деньги</span>
          </h2>
          <p style={{ textAlign: 'center', color: COLORS.grayText, marginBottom: '60px', fontSize: '18px' }}>
            Управляйте продажами через коммуникации
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '🚦', title: 'Светофор метрик', desc: 'Зелёный. Жёлтый. Красный. 3 секунды — и ты знаешь, где деньги.' },
              { icon: '💰', title: 'Рост выручки', desc: 'Каждый контакт превращается в управляемый источник продаж.' },
              { icon: '📱', title: 'Telegram-бот', desc: 'Алерты о продажах и проблемах прямо в мессенджер.' },
              { icon: '📞', title: 'Транскрибация', desc: 'Каждый звонок — текст. ИИ найдёт упущенные продажи.' },
              { icon: '🎯', title: 'Сигналы намерений', desc: 'Кто готов купить. Кто думает уйти. Действуйте на опережение.' },
              { icon: '🛡️', title: 'Защита выручки', desc: 'ИИ обнаруживает попытки увода клиентов и денег.' },
            ].map((f, i) => (
              <div key={i} className="hover-lift card-glow" style={{
                padding: '40px',
                borderRadius: 16,
                backgroundColor: COLORS.darkAlt,
                border: `1px solid ${COLORS.gray}`,
              }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: COLORS.white }}>{f.title}</h3>
                <p style={{ fontSize: '15px', color: COLORS.grayTextLight, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: COLORS.yellow }}>
        <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px', color: COLORS.black, letterSpacing: '-2px' }}>
          Готовы к росту выручки?
        </h2>
        <p style={{ fontSize: '20px', color: COLORS.gray, marginBottom: '48px' }}>
          14 дней бесплатно. Без карты. Без риска.
        </p>
        <button className="btn-primary" style={{
          padding: '20px 56px',
          borderRadius: 8,
          border: 'none',
          backgroundColor: COLORS.black,
          color: COLORS.yellow,
          fontWeight: 700,
          fontSize: '18px',
          cursor: 'pointer',
        }}>
          Начать сейчас
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: `1px solid ${COLORS.gray}`, backgroundColor: COLORS.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
              тАйга
            </div>
            <div style={{ color: COLORS.grayText, fontSize: '14px', lineHeight: 1.6 }}>
              AI-powered платформа роста выручки
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: COLORS.yellow }}>Продукт</div>
            <div style={{ color: COLORS.grayText, fontSize: '14px', lineHeight: 2 }}>
              <div>Витрина виджетов</div>
              <div>ИИ-ассистент</div>
              <div>Транскрибация</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: COLORS.yellow }}>Компания</div>
            <div style={{ color: COLORS.grayText, fontSize: '14px', lineHeight: 2 }}>
              <div>О нас</div>
              <div>Карьера</div>
              <div>Блог</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: COLORS.yellow }}>Контакты</div>
            <div style={{ color: COLORS.grayText, fontSize: '14px', lineHeight: 2 }}>
              <div>8 800 123-45-67</div>
              <div>info@contact-ai.ru</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: COLORS.grayText, fontSize: '12px', marginTop: '40px' }}>
          © 2026 тАйга. Все права защищены.
        </div>
      </footer>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 2: РАЗВЁРНУТЫЕ ОБЪЯСНЕНИЯ
// ============================================
function Concept2() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.black, color: COLORS.white }}>
      <style>{styles}</style>
      <div className="scanline" />
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 100,
        borderBottom: `1px solid ${COLORS.gray}`,
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white }}>
          тАйга
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#problems" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Проблемы</a>
          <a href="#solution" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Решение</a>
          <a href="#transparency" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Прозрачность</a>
          <button className="btn-primary animate-glow" style={{
            padding: '12px 28px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: COLORS.yellow,
            color: COLORS.black,
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            Пригласить коллегу
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid-bg" style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: 6,
          border: `1px solid ${COLORS.yellowBorder}`,
          marginBottom: '32px',
          fontSize: '13px',
          color: COLORS.yellow,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}>
          ПЛАТФОРМА РОСТА ВЫРУЧКИ
        </div>
        
        <h1 style={{
          fontSize: '64px',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '24px',
          maxWidth: '1000px',
          margin: '0 auto 24px',
          letterSpacing: '-3px',
        }}>
          Продажи начинаются{' '}
          <span className="gradient-text">в диалоге</span>
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: COLORS.grayTextLight,
          maxWidth: '700px',
          margin: '0 auto 48px',
          lineHeight: 1.7,
        }}>
          тАйга превращает каждый контакт с клиентом в управляемый источник продаж. 
          ИИ-платформа, которая увеличивает выручку, а не отчёты.
        </p>

        {/* Preview Dashboard */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: COLORS.dark,
          borderRadius: 16,
          padding: '40px',
          border: `1px solid ${COLORS.gray}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: COLORS.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', boxShadow: `0 0 30px rgba(34,197,94,0.3)` }}>✓</div>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: COLORS.yellow, opacity: 0.3 }} />
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: COLORS.red, opacity: 0.3 }} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: COLORS.green }}>Выручка растёт</div>
            <div className="mono" style={{ color: COLORS.grayText, marginTop: '8px', fontSize: 14 }}>1,247 контактов сегодня • 156 продаж • 2.3M ₽ выручка</div>
          </div>
        </div>
      </section>

      {/* Проблемы */}
      <section id="problems" style={{ padding: '120px 20px', backgroundColor: COLORS.darkAlt }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, textAlign: 'center', marginBottom: '80px', letterSpacing: '-2px' }}>
            5 барьеров на пути к <span className="gradient-text">росту выручки</span>
          </h2>
          
          {/* Проблема 1 */}
          <div style={{ marginBottom: '80px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>💸</div>
                <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', color: COLORS.white }}>Упущенные продажи в разговорах</h3>
                <p style={{ fontSize: '16px', color: COLORS.grayTextLight, lineHeight: 1.8, marginBottom: '24px' }}>
                  Операторы не закрывают сделки, забывают предложить допродажи. Каждый такой звонок — потерянные деньги.
                </p>
                <div style={{ padding: '24px', backgroundColor: COLORS.yellow, borderRadius: 12 }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: COLORS.black, fontSize: '14px' }}>Решение тАйга</div>
                  <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 14 }}>
                    ИИ анализирует каждый разговор и находит упущенные возможности. Рост конверсии на 18% за первый месяц.
                  </p>
                </div>
              </div>
              <div style={{ backgroundColor: COLORS.dark, borderRadius: 16, padding: '32px', border: `1px solid ${COLORS.gray}` }}>
                <div className="mono" style={{ fontSize: '12px', color: COLORS.grayText, marginBottom: '16px' }}>Упущенные возможности за неделю</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { count: '12', text: 'Не предложили допродажу', sum: '340,000 ₽' },
                    { count: '8', text: 'Не закрыли готового клиента', sum: '520,000 ₽' },
                    { count: '5', text: 'Не перезвонили по обещанию', sum: '180,000 ₽' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: COLORS.darkAlt, borderRadius: 8, border: `1px solid ${COLORS.red}30` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="mono" style={{ color: COLORS.red, fontWeight: 700 }}>{item.count}</div>
                        <span style={{ color: COLORS.grayTextLight, fontSize: '14px' }}>{item.text}</span>
                      </div>
                      <span className="mono" style={{ fontWeight: 700, color: COLORS.red, fontSize: 14 }}>{item.sum}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: `${COLORS.red}10`, borderRadius: 8, textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: COLORS.grayText, marginBottom: '4px' }}>Потеряно за неделю</div>
                  <div className="mono" style={{ fontSize: '24px', fontWeight: 800, color: COLORS.red }}>1,040,000 ₽</div>
                </div>
              </div>
            </div>
          </div>

          {/* Проблема 2 */}
          <div style={{ marginBottom: '80px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>📊</div>
                <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', color: COLORS.white }}>Отчёты есть, а роста нет</h3>
                <p style={{ fontSize: '16px', color: COLORS.grayTextLight, lineHeight: 1.8, marginBottom: '24px' }}>
                  Горы отчётов, но непонятно, что делать. Вы тонете в данных, но не получаете ответов.
                </p>
                <div style={{ padding: '24px', backgroundColor: COLORS.yellow, borderRadius: 12 }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: COLORS.black, fontSize: '14px' }}>Решение тАйга</div>
                  <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 14 }}>
                    «Светофор метрик» — одна картинка, которая показывает, где проблемы и что делать.
                  </p>
                </div>
              </div>
              <div style={{ order: 1, backgroundColor: COLORS.dark, borderRadius: 16, padding: '40px', border: `1px solid ${COLORS.gray}`, textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: '12px', color: COLORS.grayText, marginBottom: '24px' }}>Светофор выручки</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '24px' }}>
                  <div className="animate-pulse-slow" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: COLORS.green, boxShadow: `0 0 20px rgba(34,197,94,0.4)` }} />
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: COLORS.yellow, opacity: 0.3 }} />
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: COLORS.red, opacity: 0.3 }} />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: COLORS.green }}>✓ Выручка растёт</div>
                <div style={{ color: COLORS.grayText, marginTop: '8px' }}>+18% к плану за неделю</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Все выигрывают */}
      <section id="solution" style={{ padding: '120px 20px', backgroundColor: COLORS.black }} className="grid-bg">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 900, textAlign: 'center', marginBottom: '20px', letterSpacing: '-2px' }}>
            Все <span className="gradient-text">выигрывают</span> от роста выручки
          </h2>
          <p style={{ textAlign: 'center', color: COLORS.grayText, marginBottom: '60px', fontSize: '18px' }}>
            Уникальная ценность для каждой роли в компании
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { icon: '👔', title: 'Руководитель', items: ['Видит рост выручки за 30 секунд', 'Понимает, откуда приходят деньги', 'Защищает выручку от утечек'], stat: '340%', statLabel: 'рост выручки' },
              { icon: '⚙️', title: 'Администратор', items: ['Настройка за 5 минут', 'Узнаёт о проблемах мгновенно', 'Автоматические отчёты'], stat: '×3', statLabel: 'быстрее реакция' },
              { icon: '🎧', title: 'Оператор', items: ['Видит свой вклад в выручку', 'Вся история клиента под рукой', 'Рейтинг продаж'], stat: '+18%', statLabel: 'рост продаж' },
            ].map((role, i) => (
              <div key={i} className="hover-lift card-glow" style={{
                padding: '40px',
                borderRadius: 16,
                backgroundColor: COLORS.darkAlt,
                border: `1px solid ${COLORS.gray}`,
              }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{role.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px', color: COLORS.white }}>{role.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {role.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: COLORS.yellow, fontSize: '14px' }}>→</span>
                      <span style={{ color: COLORS.grayTextLight, fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '20px', backgroundColor: COLORS.yellow, borderRadius: 12, textAlign: 'center' }}>
                  <div className="mono" style={{ fontSize: '32px', fontWeight: 800, color: COLORS.black }}>{role.stat}</div>
                  <div style={{ fontSize: '13px', color: COLORS.gray }}>{role.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="transparency" style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: COLORS.yellow }}>
        <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px', color: COLORS.black, letterSpacing: '-2px' }}>
          Готовы к росту выручки?
        </h2>
        <p style={{ fontSize: '20px', color: COLORS.gray, marginBottom: '48px' }}>
          14 дней бесплатно. Без привязки карты.
        </p>
        <button className="btn-primary" style={{
          padding: '20px 56px',
          borderRadius: 8,
          border: 'none',
          backgroundColor: COLORS.black,
          color: COLORS.yellow,
          fontWeight: 700,
          fontSize: '18px',
          cursor: 'pointer',
        }}>
          Пригласить коллегу
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: `1px solid ${COLORS.gray}`, backgroundColor: COLORS.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            тАйга
          </div>
          <div style={{ color: COLORS.grayText, fontSize: '14px' }}>
            © 2026 тАйга. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 3: СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО
// ============================================
function Concept3() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const testimonials = [
    { name: 'Алексей Смирнов', role: 'CEO, ТехноПром', text: 'За 3 месяца выручка выросла на 340%. Раньше я тратил часы на отчёты, теперь вижу всё за 30 секунд.', avatar: '👨‍💼' },
    { name: 'Мария Петрова', role: 'Директор по продажам', text: 'Наконец-то вижу, какие звонки приносят деньги, а какие — нет. Команда стала работать на 40% эффективнее.', avatar: '👩‍💼' },
    { name: 'Игорь Козлов', role: 'Администратор', text: 'Настройка заняла 5 минут вместо 2 дней. ИИ сам находит проблемы и предлагает решения.', avatar: '👨‍🔧' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.black, color: COLORS.white }}>
      <style>{styles}</style>
      <div className="scanline" />
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 100,
        borderBottom: `1px solid ${COLORS.gray}`,
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white }}>
          тАйга
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#cases" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Кейсы</a>
          <a href="#reviews" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Отзывы</a>
          <a href="#trust" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Доверие</a>
          <button className="btn-primary animate-glow" style={{
            padding: '12px 28px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: COLORS.yellow,
            color: COLORS.black,
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            Пригласить коллегу
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid-bg" style={{
        paddingTop: '180px',
        paddingBottom: '100px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: 6,
          border: `1px solid ${COLORS.yellowBorder}`,
          marginBottom: '32px',
          fontSize: '13px',
          color: COLORS.yellow,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}>
          500+ КОМПАНИЙ УЖЕ С НАМИ
        </div>
        
        <h1 style={{
          fontSize: '64px',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px',
          letterSpacing: '-3px',
        }}>
          Результаты, которые <span className="gradient-text">говорят сами</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: COLORS.grayTextLight,
          maxWidth: '600px',
          margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          Реальные кейсы, реальные отзывы, реальный рост выручки
        </p>
      </section>

      {/* Stats Bar */}
      <section style={{ padding: '40px 20px', backgroundColor: COLORS.dark, borderTop: `1px solid ${COLORS.yellow}30`, borderBottom: `1px solid ${COLORS.yellow}30` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
          {[
            { value: '500+', label: 'Компаний-клиентов' },
            { value: '₽2.8B', label: 'Выручки клиентов' },
            { value: '340%', label: 'Средний рост' },
            { value: '4.9', label: 'Рейтинг на Capterra' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="mono" style={{ fontSize: '40px', fontWeight: 800, color: COLORS.yellow }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: COLORS.grayText, marginTop: '8px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section id="cases" style={{ padding: '120px 20px', backgroundColor: COLORS.black }} className="grid-bg">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '44px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-2px' }}>
            Кейсы <span className="gradient-text">роста выручки</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {[
              { company: 'ТехноПром', industry: 'Телеком', growth: '+340%', period: '3 месяца', story: 'Операторы стали закрывать на 40% больше сделок благодаря ИИ-подсказкам.' },
              { company: 'МедЦентр+', industry: 'Медицина', growth: '+180%', period: '2 месяца', story: 'Явка на приёмы выросла на 45% благодаря автоматическим напоминаниям.' },
              { company: 'АвтоСпец', industry: 'Автобизнес', growth: '+220%', period: '4 месяца', story: 'Обнаружили утечку 15% выручки через переводы клиентов на личку.' },
              { company: 'FinTech Pro', industry: 'Финансы', growth: '+150%', period: '3 месяца', story: 'Время на аудит сократилось на 65% при 100% записи разговоров.' },
            ].map((item, i) => (
              <div key={i} className="hover-lift card-glow" style={{
                padding: '32px',
                borderRadius: 16,
                backgroundColor: COLORS.darkAlt,
                border: `1px solid ${COLORS.gray}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: COLORS.white }}>{item.company}</div>
                    <div style={{ fontSize: '13px', color: COLORS.grayText }}>{item.industry}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="mono" style={{ fontSize: '28px', fontWeight: 800, color: COLORS.yellow }}>{item.growth}</div>
                    <div style={{ fontSize: '12px', color: COLORS.grayText }}>за {item.period}</div>
                  </div>
                </div>
                <p style={{ fontSize: '15px', color: COLORS.grayTextLight, lineHeight: 1.6 }}>{item.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" style={{ padding: '120px 20px', backgroundColor: COLORS.dark }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '60px', letterSpacing: '-2px' }}>
            Что говорят <span className="gradient-text">клиенты</span>
          </h2>

          <div style={{
            padding: '48px',
            borderRadius: 20,
            backgroundColor: COLORS.darkAlt,
            border: `1px solid ${COLORS.gray}`,
            marginBottom: '32px',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>{testimonials[activeTestimonial].avatar}</div>
            <p style={{ fontSize: '22px', color: COLORS.white, lineHeight: 1.6, marginBottom: '32px', fontStyle: 'italic' }}>
              "{testimonials[activeTestimonial].text}"
            </p>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: COLORS.yellow }}>{testimonials[activeTestimonial].name}</div>
              <div style={{ fontSize: '14px', color: COLORS.grayText }}>{testimonials[activeTestimonial].role}</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: i === activeTestimonial ? COLORS.yellow : COLORS.grayLight,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section id="trust" style={{ padding: '80px 20px', backgroundColor: COLORS.black, borderTop: `1px solid ${COLORS.gray}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: COLORS.grayText, marginBottom: '40px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>Нам доверяют</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', opacity: 0.6 }}>
            {['ТехноПром', 'МедЦентр+', 'АвтоСпец', 'FinTech Pro', 'Телеком Про'].map((name, i) => (
              <span key={i} style={{ fontSize: '18px', fontWeight: 700, color: COLORS.white }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: COLORS.yellow }}>
        <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '24px', color: COLORS.black, letterSpacing: '-2px' }}>
          Присоединяйтесь к лидерам
        </h2>
        <p style={{ fontSize: '20px', color: COLORS.gray, marginBottom: '48px' }}>
          14 дней бесплатно. Без карты.
        </p>
        <button className="btn-primary" style={{
          padding: '20px 56px',
          borderRadius: 8,
          border: 'none',
          backgroundColor: COLORS.black,
          color: COLORS.yellow,
          fontWeight: 700,
          fontSize: '18px',
          cursor: 'pointer',
        }}>
          Пригласить коллегу
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: `1px solid ${COLORS.gray}`, backgroundColor: COLORS.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            тАйга
          </div>
          <div style={{ color: COLORS.grayText, fontSize: '14px' }}>
            © 2026 тАйга. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 4: ИНТЕРАКТИВНЫЙ ПРОТОТИП
// ============================================
function Concept4() {
  const [activeWidget, setActiveWidget] = useState('traffic')
  const [isPlaying, setIsPlaying] = useState(false)
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.black, color: COLORS.white }}>
      <style>{styles}</style>
      <div className="scanline" />
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 100,
        borderBottom: `1px solid ${COLORS.gray}`,
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white }}>
          тАйга
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#demo" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Демо</a>
          <a href="#widgets" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Виджеты</a>
          <button className="btn-primary animate-glow" style={{
            padding: '12px 28px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: COLORS.yellow,
            color: COLORS.black,
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            Попробовать
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid-bg" style={{
        paddingTop: '180px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: 6,
          border: `1px solid ${COLORS.yellowBorder}`,
          marginBottom: '32px',
          fontSize: '13px',
          color: COLORS.yellow,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}>
          ИНТЕРАКТИВНАЯ ДЕМОНСТРАЦИЯ
        </div>
        
        <h1 style={{
          fontSize: '56px',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px',
          letterSpacing: '-2px',
        }}>
          Попробуйте <span className="gradient-text">прямо сейчас</span>
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: COLORS.grayTextLight,
          maxWidth: '600px',
          margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          Интерактивные виджеты без регистрации. Кликайте, исследуйте, убеждайтесь.
        </p>
      </section>

      {/* Live Demo */}
      <section id="demo" style={{ padding: '40px 20px', backgroundColor: COLORS.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Widget Tabs */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', justifyContent: 'center' }}>
            {[
              { id: 'traffic', label: '🚦 Светофор метрик' },
              { id: 'call', label: '📞 Пример звонка' },
              { id: 'rating', label: '🏆 Рейтинг команды' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveWidget(tab.id)}
                className="hover-lift"
                style={{
                  padding: '12px 24px',
                  borderRadius: 8,
                  border: `1px solid ${activeWidget === tab.id ? COLORS.yellow : COLORS.gray}`,
                  backgroundColor: activeWidget === tab.id ? COLORS.yellowMuted : 'transparent',
                  color: activeWidget === tab.id ? COLORS.yellow : COLORS.grayTextLight,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.3s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Widget Content */}
          <div style={{
            padding: '48px',
            borderRadius: 20,
            backgroundColor: COLORS.darkAlt,
            border: `1px solid ${COLORS.gray}`,
          }}>
            
            {/* Traffic Light Widget */}
            {activeWidget === 'traffic' && (
              <div style={{ textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: '14px', color: COLORS.grayText, marginBottom: '32px' }}>КЛИКНИТЕ НА СВЕТОФОР ДЛЯ ДЕТАЛЕЙ</div>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '40px' }}>
                  <div className="hover-lift animate-pulse-slow" style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: COLORS.green,
                    boxShadow: `0 0 40px rgba(34,197,94,0.5)`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                  }}>✓</div>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: COLORS.yellow,
                    opacity: 0.2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                  }}>!</div>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: COLORS.red,
                    opacity: 0.2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                  }}>✗</div>
                </div>

                <div style={{ fontSize: '32px', fontWeight: 800, color: COLORS.green, marginBottom: '16px' }}>
                  Выручка растёт
                </div>
                <div className="mono" style={{ color: COLORS.grayTextLight, marginBottom: '32px' }}>
                  +18% к плану за сегодня • 156 продаж • 2.3M ₽
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '700px', margin: '0 auto' }}>
                  {[
                    { label: 'Звонки', value: '1,247', trend: '+12%' },
                    { label: 'Конверсия', value: '78%', trend: '+5%' },
                    { label: 'Средний чек', value: '14.7K', trend: '+8%' },
                    { label: 'NPS', value: '9.2', trend: '+0.3' },
                  ].map((metric, i) => (
                    <div key={i} style={{
                      padding: '20px',
                      backgroundColor: COLORS.dark,
                      borderRadius: 12,
                      border: `1px solid ${COLORS.gray}`,
                    }}>
                      <div style={{ fontSize: '12px', color: COLORS.grayText, marginBottom: '8px' }}>{metric.label}</div>
                      <div className="mono" style={{ fontSize: '24px', fontWeight: 700, color: COLORS.white }}>{metric.value}</div>
                      <div style={{ fontSize: '12px', color: COLORS.green }}>{metric.trend}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Call Example Widget */}
            {activeWidget === 'call' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div className="mono" style={{ fontSize: '14px', color: COLORS.grayText }}>
                    📞 Звонок #12847 • 5:32 • +7 (999) 123-45-67
                  </div>
                  <div style={{ padding: '6px 16px', backgroundColor: COLORS.green, borderRadius: 20, fontSize: '12px', color: COLORS.black, fontWeight: 600 }}>
                    Продажа: 47,000 ₽
                  </div>
                </div>

                <div style={{
                  padding: '24px',
                  backgroundColor: COLORS.dark,
                  borderRadius: 12,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: COLORS.grayTextLight,
                }}>
                  <p><span style={{ color: COLORS.yellow }}>[00:00]</span> Оператор: Добрый день, компания Контакт...</p>
                  <p><span style={{ color: COLORS.yellow }}>[00:15]</span> Клиент: Да, хотел узнать про ваши услуги...</p>
                  <p><span style={{ color: COLORS.yellow }}>[01:30]</span> Оператор: Могу предложить вам пакет Премиум...</p>
                  <p style={{ backgroundColor: `${COLORS.green}20`, padding: '12px', borderRadius: 8, margin: '16px 0' }}>
                    <span style={{ color: COLORS.yellow }}>[02:45]</span> <span style={{ color: COLORS.green }}>✓ ИИ обнаружил: Клиент готов к покупке</span>
                    <br />
                    <span style={{ color: COLORS.green }}>Рекомендация: Предложить скидку 10% для закрытия</span>
                  </p>
                  <p><span style={{ color: COLORS.yellow }}>[03:00]</span> Оператор: Отлично! Даю вам скидку 10%...</p>
                  <p><span style={{ color: COLORS.yellow }}>[05:30]</span> Клиент: Да, оплачиваю!</p>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'center' }}>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="btn-primary"
                    style={{
                      padding: '12px 32px',
                      borderRadius: 8,
                      border: 'none',
                      backgroundColor: COLORS.yellow,
                      color: COLORS.black,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {isPlaying ? '⏸ Пауза' : '▶ Воспроизвести'}
                  </button>
                </div>
              </div>
            )}

            {/* Rating Widget */}
            {activeWidget === 'rating' && (
              <div>
                <div className="mono" style={{ fontSize: '14px', color: COLORS.grayText, marginBottom: '24px', textAlign: 'center' }}>
                  РЕЙТИНГ ПРОДАЖ ЗА НЕДЕЛЮ
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '600px', margin: '0 auto' }}>
                  {[
                    { rank: 1, name: 'Анна К.', sales: 156, revenue: '2.3M', avatar: '👩‍💼' },
                    { rank: 2, name: 'Дмитрий С.', sales: 142, revenue: '2.1M', avatar: '👨‍💼' },
                    { rank: 3, name: 'Елена М.', sales: 128, revenue: '1.9M', avatar: '👩‍💼' },
                    { rank: 4, name: 'Сергей П.', sales: 98, revenue: '1.4M', avatar: '👨‍💼' },
                    { rank: 5, name: 'Мария В.', sales: 87, revenue: '1.2M', avatar: '👩‍💼' },
                  ].map((person, i) => (
                    <div key={i} className="hover-lift" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px 24px',
                      backgroundColor: i < 3 ? `${COLORS.yellow}${i === 0 ? '20' : '10'}` : COLORS.dark,
                      borderRadius: 12,
                      border: `1px solid ${i < 3 ? COLORS.yellowBorder : COLORS.gray}`,
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: i === 0 ? COLORS.yellow : i === 1 ? COLORS.grayLight : i === 2 ? '#B45309' : COLORS.gray,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        color: i < 3 ? COLORS.black : COLORS.white,
                      }}>
                        {person.rank}
                      </div>
                      <div style={{ fontSize: '28px' }}>{person.avatar}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, color: COLORS.white }}>{person.name}</div>
                        <div className="mono" style={{ fontSize: '12px', color: COLORS.grayText }}>{person.sales} продаж</div>
                      </div>
                      <div className="mono" style={{ fontSize: '18px', fontWeight: 700, color: COLORS.yellow }}>{person.revenue} ₽</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: COLORS.yellow }}>
        <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '24px', color: COLORS.black, letterSpacing: '-2px' }}>
          Понравилось? Попробуйте на своих данных
        </h2>
        <p style={{ fontSize: '20px', color: COLORS.gray, marginBottom: '48px' }}>
          14 дней бесплатно. Настройка за 5 минут.
        </p>
        <button className="btn-primary" style={{
          padding: '20px 56px',
          borderRadius: 8,
          border: 'none',
          backgroundColor: COLORS.black,
          color: COLORS.yellow,
          fontWeight: 700,
          fontSize: '18px',
          cursor: 'pointer',
        }}>
          Пригласить коллегу
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: `1px solid ${COLORS.gray}`, backgroundColor: COLORS.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            тАйга
          </div>
          <div style={{ color: COLORS.grayText, fontSize: '14px' }}>
            © 2026 тАйга. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 5: ОБЪЕДИНЁННЫЙ
// ============================================
function Concept5() {
  const [showModal, setShowModal] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.black, color: COLORS.white }}>
      <style>{styles}</style>
      <div className="scanline" />
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 100,
        borderBottom: `1px solid ${COLORS.gray}`,
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white }}>
          тАйга
        </div>
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#common" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Общий язык</a>
          <a href="#video" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Видео</a>
          <a href="#ai" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>ИИ-агент</a>
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary animate-glow"
            style={{
              padding: '12px 24px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: COLORS.yellow,
              color: COLORS.black,
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Пригласить коллегу
          </button>
          <button
            onClick={() => setShowVideoModal(true)}
            style={{
              padding: '12px 20px',
              borderRadius: 8,
              border: `1px solid ${COLORS.yellow}`,
              backgroundColor: 'transparent',
              color: COLORS.yellow,
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            📹 Видео
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid-bg" style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '12px 28px',
          borderRadius: 8,
          background: COLORS.yellow,
          marginBottom: '32px',
          fontSize: '15px',
          color: COLORS.black,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          AI-POWERED COMMUNICATION PLATFORM
        </div>
        
        <h1 style={{
          fontSize: '56px',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px',
          letterSpacing: '-3px',
        }}>
          Продажи начинаются{' '}
          <span className="gradient-text">в диалоге</span>
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: COLORS.grayTextLight,
          maxWidth: '650px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          тАйга превращает каждый контакт с клиентом в управляемый источник продаж
        </p>
        
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary animate-glow"
          style={{
            padding: '18px 48px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: COLORS.yellow,
            color: COLORS.black,
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Пригласить коллегу в тАйга
        </button>
        
        {/* Виджеты администратора */}
        <div style={{ maxWidth: '1000px', margin: '48px auto 0', borderRadius: 16, overflow: 'hidden', border: `1px solid ${COLORS.yellowBorder}` }}>
          <img 
            src="/admin-widgets-hero.png" 
            alt="Набор виджетов администратора тАйга"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
        <p style={{ textAlign: 'center', color: COLORS.grayText, fontSize: '13px', marginTop: '12px' }}>
          Пример интерфейса администратора: все виджеты на одном экране
        </p>
      </section>

      {/* Общий язык */}
      <section id="common" style={{ padding: '100px 20px', backgroundColor: COLORS.darkAlt }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '10px 24px',
              borderRadius: 6,
              border: `1px solid ${COLORS.yellowBorder}`,
              marginBottom: '24px',
              fontSize: '13px',
              color: COLORS.yellow,
              fontWeight: 600,
            }}>
              🔗 ОБЩИЙ ЯЗЫК ДЛЯ АДМИНА И РУКОВОДИТЕЛЯ
            </div>
            <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-2px' }}>
              тАйга создаёт <span className="gradient-text">общий язык</span>
            </h2>
            <p style={{ fontSize: '18px', color: COLORS.grayTextLight, maxWidth: '700px', margin: '0 auto' }}>
              Оба смотрят на одни метрики, но каждый видит свою пользу
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '24px', alignItems: 'start' }}>
            {/* Администратор */}
            <div style={{
              backgroundColor: COLORS.dark,
              borderRadius: 16,
              padding: '32px',
              border: `1px solid ${COLORS.yellowBorder}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.yellow,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}>⚙️</div>
                <div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: COLORS.yellow }}>Администратор</div>
                  <div style={{ fontSize: '13px', color: COLORS.grayText }}>получает инструменты</div>
                </div>
              </div>
              
              {[
                { icon: '🤖', title: 'ИИ-агент', desc: 'Предупреждает о сбоях заранее' },
                { icon: '🚦', title: 'Светофор', desc: 'Статус системы за 30 секунд' },
                { icon: '🔧', title: 'Виджеты', desc: 'Настройка за 5 минут' },
                { icon: '⚡', title: 'Настройка услуг', desc: 'Быстро и просто' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '16px', backgroundColor: COLORS.darkAlt, borderRadius: 8, marginBottom: '12px' }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, marginBottom: '4px' }}>{item.icon} {item.title}</div>
                  <div style={{ fontSize: '14px', color: COLORS.grayTextLight }}>{item.desc}</div>
                </div>
              ))}
              
              <div style={{ padding: '16px', backgroundColor: COLORS.yellow, borderRadius: 8, textAlign: 'center', marginTop: '16px' }}>
                <div style={{ fontWeight: 700, color: COLORS.black }}>Статус: Эксперт по аналитике</div>
              </div>
            </div>

            {/* Центр */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: COLORS.yellow,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                marginBottom: '16px',
                boxShadow: `0 0 40px rgba(250, 204, 21, 0.3)`,
              }}>🤝</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: COLORS.yellow, textAlign: 'center', marginBottom: '12px' }}>
                Общие метрики
              </div>
              <div style={{ fontSize: '13px', color: COLORS.grayText, textAlign: 'center' }}>
                Прозрачность<br/>Синхронизация<br/>Доверие
              </div>
            </div>

            {/* Руководитель */}
            <div style={{
              backgroundColor: COLORS.dark,
              borderRadius: 16,
              padding: '32px',
              border: `1px solid ${COLORS.green}30`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.green,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}>👔</div>
                <div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: COLORS.green }}>Руководитель</div>
                  <div style={{ fontSize: '13px', color: COLORS.grayText }}>получает результаты в деньгах</div>
                </div>
              </div>
              
              {[
                { icon: '🤖', title: 'ИИ-агент', desc: 'Находит упущенные продажи' },
                { icon: '🚦', title: 'Светофор', desc: 'Статус бизнеса: +18% к плану' },
                { icon: '📊', title: 'Виджеты', desc: 'ROI, рейтинг, точки роста' },
                { icon: '🛠️', title: 'Конструктор', desc: 'Любой виджет за пару минут' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '16px', backgroundColor: COLORS.darkAlt, borderRadius: 8, marginBottom: '12px' }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, marginBottom: '4px' }}>{item.icon} {item.title}</div>
                  <div style={{ fontSize: '14px', color: COLORS.grayTextLight }}>{item.desc}</div>
                </div>
              ))}
              
              <div style={{ padding: '16px', backgroundColor: COLORS.green, borderRadius: 8, textAlign: 'center', marginTop: '16px' }}>
                <div style={{ fontWeight: 700, color: COLORS.black }}>ROI: +340% за 3 месяца</div>
              </div>
            </div>
          </div>

          {/* До/После с иллюстрациями */}
          <div style={{ marginTop: '80px' }}>
            <h3 style={{ fontSize: '32px', fontWeight: 900, textAlign: 'center', marginBottom: '48px', letterSpacing: '-1px' }}>
              Как меняется работа
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', maxWidth: '1100px', margin: '0 auto' }}>
              {/* До */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  border: `2px solid ${COLORS.red}40`,
                  marginBottom: '20px',
                  boxShadow: `0 20px 60px rgba(239, 68, 68, 0.15)`
                }}>
                  <img src="/beehive-before.png" alt="До тАйга - хаос" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ 
                  backgroundColor: `${COLORS.red}10`, 
                  borderRadius: 12, 
                  padding: '20px', 
                  border: `1px solid ${COLORS.red}30`,
                  textAlign: 'left'
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.red, marginBottom: '12px', fontSize: '18px' }}>❌ До тАйга</div>
                  <div style={{ fontSize: '14px', color: COLORS.grayTextLight, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>• Админ собирает отчёты 40 мин/день</div>
                    <div>• Руководитель не знает связь телефон-выручка</div>
                    <div>• Проблемы обнаруживаются постфактум</div>
                    <div>• Планёрки = разбор полётов</div>
                    <div>• Настройка интеграций 2 дня</div>
                  </div>
                </div>
              </div>
              
              {/* После */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  border: `2px solid ${COLORS.green}40`,
                  marginBottom: '20px',
                  boxShadow: `0 20px 60px rgba(34, 197, 94, 0.15)`
                }}>
                  <img src="/beehive-after.png" alt="Вместе с тАйга - гармония" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ 
                  backgroundColor: `${COLORS.green}10`, 
                  borderRadius: 12, 
                  padding: '20px', 
                  border: `1px solid ${COLORS.green}30`,
                  textAlign: 'left'
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.green, marginBottom: '12px', fontSize: '18px' }}>✅ Вместе с тАйга</div>
                  <div style={{ fontSize: '14px', color: COLORS.grayTextLight, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>• Светофор за 30 секунд</div>
                    <div>• ROI коммуникаций: +340%</div>
                    <div>• ИИ предупреждает о проблемах заранее</div>
                    <div>• Планёрки про развитие, не про аварии</div>
                    <div>• Настройка за 5 минут</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Прозрачность расчетов */}
      <section style={{ 
        padding: '100px 20px', 
        backgroundColor: COLORS.darkAlt,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Декоративный фон */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 50%, rgba(250, 204, 21, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 70% 30%, rgba(34, 197, 94, 0.05) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Заголовок */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 24px',
              borderRadius: 50,
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(34, 197, 94, 0.04))',
              border: `1px solid ${COLORS.green}30`,
              marginBottom: '24px',
            }}>
              <span style={{ fontSize: '16px' }}>🔍</span>
              <span style={{ fontSize: '13px', color: COLORS.green, fontWeight: 600 }}>
                ПРОЗРАЧНОСТЬ
              </span>
            </div>
            
            <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-2px' }}>
              Прозрачность <span className="gradient-text">расчётов</span>
            </h2>
            <p style={{ fontSize: '18px', color: COLORS.grayTextLight, maxWidth: '600px', margin: '0 auto' }}>
              Эффективность сотрудника — из понятных метрик
            </p>
          </div>

          {/* Виджет статистики + объяснение */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            
            {/* Левая часть - Виджет рейтинга */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 24,
              padding: '28px',
              border: `1px solid ${COLORS.yellow}20`,
              boxShadow: `0 8px 40px rgba(0, 0, 0, 0.3)`,
            }}>
              {/* Заголовок виджета */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: COLORS.white }}>
                  🏆 Рейтинг эффективности
                </div>
                <div style={{
                  padding: '6px 14px',
                  background: `${COLORS.yellow}15`,
                  borderRadius: 20,
                  fontSize: '12px',
                  color: COLORS.yellow,
                  fontWeight: 600,
                }}>
                  за неделю
                </div>
              </div>
              
              {/* Топ-3 сотрудника */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {[
                  { rank: 1, name: 'Анна К.', avatar: '👩‍💼', calls: 89, sales: 23, conversion: '26%', revenue: '412K', score: 94 },
                  { rank: 2, name: 'Дмитрий С.', avatar: '👨‍💼', calls: 76, sales: 18, conversion: '24%', revenue: '324K', score: 87 },
                  { rank: 3, name: 'Елена М.', avatar: '👩‍💼', calls: 82, sales: 17, conversion: '21%', revenue: '289K', score: 81 },
                ].map((emp, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 16px',
                    background: i === 0 ? `${COLORS.yellow}10` : COLORS.dark,
                    borderRadius: 12,
                    border: i === 0 ? `1px solid ${COLORS.yellow}30` : `1px solid ${COLORS.gray}20`,
                  }}>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: i === 0 ? COLORS.yellow : i === 1 ? '#A3A3A3' : '#B45309',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 800,
                      color: COLORS.black,
                    }}>
                      {emp.rank}
                    </div>
                    <div style={{ fontSize: '20px' }}>{emp.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.white }}>{emp.name}</div>
                      <div style={{ fontSize: '11px', color: COLORS.grayText }}>{emp.calls} звонков • {emp.sales} продаж</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: i === 0 ? COLORS.yellow : COLORS.white }}>{emp.score}%</div>
                      <div style={{ fontSize: '10px', color: COLORS.grayText }}>эффективность</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Метрики эффективности */}
              <div style={{ 
                padding: '16px', 
                background: COLORS.dark, 
                borderRadius: 12,
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '12px', color: COLORS.grayText, marginBottom: '12px' }}>Из чего складывается рейтинг</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {[
                    { icon: '📞', label: 'Звонки', weight: '20%' },
                    { icon: '💰', label: 'Продажи', weight: '35%' },
                    { icon: '📊', label: 'Конверсия', weight: '25%' },
                    { icon: '⭐', label: 'Качество', weight: '20%' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px' }}>{item.icon}</span>
                      <span style={{ fontSize: '12px', color: COLORS.grayTextLight }}>{item.label}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: COLORS.yellow, marginLeft: 'auto' }}>{item.weight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Итоговая сумма */}
              <div style={{ 
                padding: '14px',
                background: `linear-gradient(135deg, ${COLORS.yellow}10, transparent)`,
                borderRadius: 10,
                border: `1px solid ${COLORS.yellow}20`,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '11px', color: COLORS.grayText }}>Общая эффективность команды</div>
                <div style={{ fontSize: '28px', fontWeight: 900, color: COLORS.yellow }}>78%</div>
              </div>
            </div>

            {/* Правая часть - Объяснение расчётов */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Заголовок объяснения */}
              <div style={{
                padding: '16px 20px',
                background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.08) 0%, rgba(250, 204, 21, 0.02) 100%)',
                borderRadius: 14,
                border: `1px solid ${COLORS.yellow}20`,
              }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: COLORS.yellow, marginBottom: '8px' }}>
                  💡 Как считается эффективность
                </div>
                <div style={{ fontSize: '13px', color: COLORS.grayTextLight, lineHeight: 1.6 }}>
                  ИИ анализирует работу каждого сотрудника по нескольким параметрам и выводит итоговый балл. Все метрики прозрачны и проверяемы.
                </div>
              </div>
              
              {/* Детализация метрик */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  padding: '16px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.2) 100%)',
                  borderRadius: 12,
                  border: `1px solid ${COLORS.gray}30`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${COLORS.yellow}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                    }}>📞</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: COLORS.white }}>Количество звонков</div>
                      <div style={{ fontSize: '11px', color: COLORS.grayText }}>вес в рейтинге: 20%</div>
                    </div>
                  </div>
                  <div style={{ paddingLeft: 44, fontSize: '12px', color: COLORS.grayTextLight, lineHeight: 1.5 }}>
                    ← Все входящие и исходящие вызовы<br/>
                    ← Учёт времени разговора<br/>
                    ← Фильтр коротких сбоев
                  </div>
                </div>
                
                <div style={{
                  padding: '16px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.2) 100%)',
                  borderRadius: 12,
                  border: `1px solid ${COLORS.gray}30`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${COLORS.green}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                    }}>💰</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: COLORS.white }}>Закрытые продажи</div>
                      <div style={{ fontSize: '11px', color: COLORS.grayText }}>вес в рейтинге: 35%</div>
                    </div>
                  </div>
                  <div style={{ paddingLeft: 44, fontSize: '12px', color: COLORS.grayTextLight, lineHeight: 1.5 }}>
                    ← Сделки, привязанные к сотруднику<br/>
                    ← ИИ определяет кто закрыл сделку<br/>
                    ← Анализ транскрипций звонков
                  </div>
                </div>
                
                <div style={{
                  padding: '16px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.2) 100%)',
                  borderRadius: 12,
                  border: `1px solid ${COLORS.gray}30`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${COLORS.blue}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                    }}>📊</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: COLORS.white }}>Конверсия</div>
                      <div style={{ fontSize: '11px', color: COLORS.grayText }}>вес в рейтинге: 25%</div>
                    </div>
                  </div>
                  <div style={{ paddingLeft: 44, fontSize: '12px', color: COLORS.grayTextLight, lineHeight: 1.5 }}>
                    ← Продажи / Звонки × 100%<br/>
                    ← Учитывается качество лидов<br/>
                    ← Сравнение со средним по отделу
                  </div>
                </div>

                <div style={{
                  padding: '16px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.2) 100%)',
                  borderRadius: 12,
                  border: `1px solid ${COLORS.gray}30`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${COLORS.yellow}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                    }}>⭐</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: COLORS.white }}>Качество обслуживания</div>
                      <div style={{ fontSize: '11px', color: COLORS.grayText }}>вес в рейтинге: 20%</div>
                    </div>
                  </div>
                  <div style={{ paddingLeft: 44, fontSize: '12px', color: COLORS.grayTextLight, lineHeight: 1.5 }}>
                    ← ИИ-оценка тона и вежливости<br/>
                    ← Соблюдение скрипта<br/>
                    ← Отсутствие жалоб от клиентов
                  </div>
                </div>
              </div>
              
              {/* Итог */}
              <div style={{
                padding: '16px 20px',
                background: `linear-gradient(135deg, ${COLORS.green}15, ${COLORS.green}05)`,
                borderRadius: 14,
                border: `1px solid ${COLORS.green}25`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>✓</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: COLORS.green }}>Справедливая оценка</span>
                </div>
                <div style={{ fontSize: '12px', color: COLORS.grayTextLight, lineHeight: 1.6 }}>
                  Кликните на рейтинг сотрудника — увидите детализацию: все звонки, продажи и ИИ-оценки качества.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Все возможности - Glass карточки */}
      <section style={{ 
        padding: '120px 20px', 
        backgroundColor: COLORS.black,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Декоративный фон */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 15% 20%, rgba(250, 204, 21, 0.08) 0%, transparent 35%),
            radial-gradient(circle at 85% 30%, rgba(34, 197, 94, 0.08) 0%, transparent 35%),
            radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 40%)
          `,
          pointerEvents: 'none',
        }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Заголовок */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 24px',
              borderRadius: 50,
              background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.12), rgba(250, 204, 21, 0.04))',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${COLORS.yellowBorder}`,
              marginBottom: '24px',
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: COLORS.yellow,
                boxShadow: `0 0 8px ${COLORS.yellow}`,
                animation: 'pulse 1.5s ease-in-out infinite',
              }} />
              <span style={{ fontSize: '13px', color: COLORS.yellow, fontWeight: 600, letterSpacing: '1px' }}>
                AI-POWERED
              </span>
            </div>
            
            <h2 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-2px' }}>
              Все возможности <span className="gradient-text">тАйга</span>
            </h2>
            <p style={{ fontSize: '18px', color: COLORS.grayTextLight, maxWidth: '600px', margin: '0 auto' }}>
              Полный набор функций для каждой роли в компании
            </p>
          </div>

          {/* 3 колонки с ролями */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Администратор */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.08) 0%, rgba(15, 15, 15, 0.95) 50%, rgba(250, 204, 21, 0.03) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 24,
              padding: '32px',
              border: `1px solid ${COLORS.yellow}30`,
              boxShadow: `0 8px 40px rgba(250, 204, 21, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}>
              {/* Заголовок роли */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.yellowDark})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  boxShadow: `0 4px 20px ${COLORS.yellow}40`,
                }}>⚙️</div>
                <div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: COLORS.yellow }}>Администратор</div>
                  <div style={{ fontSize: '13px', color: COLORS.grayText }}>полный контроль системы</div>
                </div>
              </div>
              
              {/* Карточки возможностей */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Карточка 1 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(250, 204, 21, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>📊</span> Статистика в реальном времени
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Мониторинг всех каналов связи', 'Активность сотрудников онлайн', 'Графики нагрузки и пиков', 'Экспорт отчётов в один клик'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.yellow, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 2 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(250, 204, 21, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>🎛️</span> Управление системой
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Настройка прав доступа', 'Интеграции с АТС и CRM', 'Управление пользователями', 'Аудит всех действий'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.yellow, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 3 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(250, 204, 21, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>⚡</span> Быстрый доступ
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Переход к рабочему месту оператора', 'Массовые операции', 'Шаблоны настроек', 'Горячие клавиши'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.yellow, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 4 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(250, 204, 21, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>🗣️</span> Создание голосом
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Новый виджет голосовой командой', 'Настройка алертов голосом', 'Быстрые действия через ИИ', 'Диктовка текстов'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.yellow, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 5 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(250, 204, 21, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>📦</span> Шаблоны наборов
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Готовые наборы для должностей', 'Кастомизация под отделы', 'Копирование настроек', 'Импорт/экспорт конфигураций'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.yellow, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Руководитель */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(15, 15, 15, 0.95) 50%, rgba(34, 197, 94, 0.03) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 24,
              padding: '32px',
              border: `1px solid ${COLORS.green}30`,
              boxShadow: `0 8px 40px rgba(34, 197, 94, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}>
              {/* Заголовок роли */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${COLORS.green}, #16A34A)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  boxShadow: `0 4px 20px ${COLORS.green}40`,
                }}>👔</div>
                <div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: COLORS.green }}>Руководитель</div>
                  <div style={{ fontSize: '13px', color: COLORS.grayText }}>результаты в деньгах</div>
                </div>
              </div>
              
              {/* Карточки возможностей */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Карточка 1 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(34, 197, 94, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>💰</span> Финансовая аналитика
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['ROI каждого канала связи', 'Связь звонков с выручкой', 'Упущенные продажи', 'Прогноз дохода'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.green, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 2 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(34, 197, 94, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>📈</span> Рост выручки
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Точки роста', 'Эффективность команды', 'Сравнение периодов', 'Бенчмарки отрасли'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.green, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 3 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(34, 197, 94, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>🎯</span> KPI и цели
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Отслеживание целей', 'Прогресс команды', 'Автоматические отчёты', 'Рейтинги сотрудников'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.green, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 4 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(34, 197, 94, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>🔔</span> Умные уведомления
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Алерты о проблемах', 'Дайджесты в Telegram', 'Сводки на email', 'Критические события'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.green, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 5 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(34, 197, 94, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>📱</span> Мобильный доступ
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Вся аналитика в телефоне', 'Push-уведомления', 'Быстрые действия', 'Голосовые команды'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.green, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Оператор */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(15, 15, 15, 0.95) 50%, rgba(59, 130, 246, 0.03) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 24,
              padding: '32px',
              border: `1px solid ${COLORS.blue}30`,
              boxShadow: `0 8px 40px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}>
              {/* Заголовок роли */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${COLORS.blue}, #2563EB)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  boxShadow: `0 4px 20px ${COLORS.blue}40`,
                }}>🎧</div>
                <div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: COLORS.blue }}>Оператор</div>
                  <div style={{ fontSize: '13px', color: COLORS.grayText }}>эффективная работа</div>
                </div>
              </div>
              
              {/* Карточки возможностей */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Карточка 1 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(59, 130, 246, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>👤</span> Личный кабинет
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Свой вклад в выручку', 'Прогресс до премии', 'Рейтинг в команде', 'История достижений'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.blue, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 2 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(59, 130, 246, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>💬</span> Работа с клиентами
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Вся история клиента', 'ИИ-подсказки в диалоге', 'Шаблоны ответов', 'Автозаполнение'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.blue, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 3 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(59, 130, 246, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>🏆</span> Геймификация
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Рейтинги и бейджи', 'Соревнования', 'Награды за результаты', 'Мотивация'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.blue, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 4 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(59, 130, 246, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>📚</span> Обучение
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['ИИ-тренинги', 'Анализ звонков', 'Рекомендации', 'Персональный план развития'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.blue, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Карточка 5 */}
                <div style={{ 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 14, 
                  border: `1px solid rgba(59, 130, 246, 0.15)`,
                }}>
                  <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '18px' }}>⚡</span> Продуктивность
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {['Быстрые действия', 'Горячие клавиши', 'Автоматизация рутины', 'Умные напоминания'].map((item, i) => (
                      <div key={i} style={{ fontSize: '12px', color: COLORS.grayTextLight, display: 'flex', gap: '8px', paddingLeft: 26 }}>
                        <span style={{ color: COLORS.blue, fontSize: '6px', marginTop: 4 }}>◆</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI-метка */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: '60px',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 24px',
              borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.08), rgba(250, 204, 21, 0.02))',
              border: `1px solid ${COLORS.yellow}20`,
            }}>
              <span style={{ fontSize: '18px' }}>🧠</span>
              <span style={{ fontSize: '13px', color: COLORS.yellow, fontWeight: 500 }}>
                Powered by Neural Networks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Видеозвонок */}
      <section id="video" style={{ padding: '100px 20px', backgroundColor: COLORS.black }} className="grid-bg">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '12px 28px',
            borderRadius: 8,
            backgroundColor: COLORS.yellow,
            marginBottom: '32px',
            fontSize: '15px',
            color: COLORS.black,
            fontWeight: 700,
          }}>
            📹 ПОКАЖИТЕ СЕРВИС В ДЕЛЕ
          </div>
          
          <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '24px', letterSpacing: '-2px' }}>
            Хотите убедиться? <span className="gradient-text">Покажите коллеге!</span>
          </h2>
          
          <p style={{ fontSize: '18px', color: COLORS.grayTextLight, marginBottom: '40px' }}>
            Позвоните коллеге по видео, поделитесь экраном и за 5 минут покажите ключевые возможности
          </p>
          
          <button
            onClick={() => setShowVideoModal(true)}
            className="btn-primary"
            style={{
              padding: '18px 48px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: COLORS.yellow,
              color: COLORS.black,
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            📹 Начать видеозвонок
          </button>
        </div>
      </section>

      {/* ИИ-агент */}
      <section id="ai" style={{ padding: '100px 20px', backgroundColor: COLORS.darkAlt }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: COLORS.dark,
            borderRadius: 16,
            padding: '32px',
            border: `1px solid ${COLORS.gray}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', paddingBottom: '20px', borderBottom: `1px solid ${COLORS.gray}` }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: COLORS.yellow,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>🤖</div>
              <div>
                <div style={{ fontWeight: 700, color: COLORS.white, fontSize: '16px' }}>ИИ-агент тАйга</div>
                <div style={{ color: COLORS.green, fontSize: '13px', fontWeight: 600 }}>Онлайн • Анализирует вашу работу</div>
              </div>
            </div>
            
            <div style={{ fontSize: '18px', fontWeight: 700, color: COLORS.white, marginBottom: '24px' }}>
              Привет, Андрей! 👋 Я заметил несколько задач:
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ backgroundColor: COLORS.darkAlt, borderRadius: 12, padding: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '24px' }}>⏱️</div>
                  <div>
                    <div style={{ color: COLORS.grayTextLight, fontSize: '14px', marginBottom: '8px' }}>
                      Вы настраивали интеграцию CRM <span style={{ color: COLORS.red }}>2 дня</span>
                    </div>
                    <div style={{ color: COLORS.green, fontWeight: 600, padding: '10px 16px', backgroundColor: `${COLORS.green}15`, borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      ✨ Со мной — <strong>все 200 сотрудников за 15 минут</strong>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ backgroundColor: COLORS.darkAlt, borderRadius: 12, padding: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '24px' }}>⚠️</div>
                  <div>
                    <div style={{ color: COLORS.grayTextLight, fontSize: '14px', marginBottom: '12px' }}>
                      <span style={{ color: COLORS.yellow }}>10 сотрудников</span> не активны уже 29 дней
                    </div>
                    <button style={{
                      padding: '10px 20px',
                      backgroundColor: COLORS.yellow,
                      color: COLORS.black,
                      border: 'none',
                      borderRadius: 8,
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}>
                      📊 Проверить статистику
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Игра */}
      <section style={{ padding: '80px 20px', backgroundColor: COLORS.yellow }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '16px', color: COLORS.black }}>
            Игра «Мёдом намазано»
          </h2>
          <p style={{ fontSize: '18px', color: COLORS.gray, marginBottom: '32px' }}>
            Выиграйте месяц бесплатного использования тАйга!
          </p>
          <a
            href="https://bee-call-center.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'inline-block',
              padding: '18px 40px',
              borderRadius: 8,
              backgroundColor: COLORS.black,
              color: COLORS.yellow,
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            Открыть игру!
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: COLORS.black }}>
        <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '24px', letterSpacing: '-2px' }}>
          Пригласите коллегу в <span className="gradient-text">тАйга</span>
        </h2>
        <p style={{ fontSize: '18px', color: COLORS.grayTextLight, marginBottom: '40px' }}>
          Настройка за 2 минуты. Коллега получит приглашение с готовым рабочим местом.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary animate-glow"
          style={{
            padding: '20px 56px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: COLORS.yellow,
            color: COLORS.black,
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Пригласить коллегу
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: `1px solid ${COLORS.gray}`, backgroundColor: COLORS.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            тАйга
          </div>
          <div style={{ color: COLORS.grayText, fontSize: '14px' }}>
            © 2026 тАйга. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }} onClick={() => setShowModal(false)}>
          <div style={{
            backgroundColor: COLORS.dark,
            borderRadius: 16,
            padding: '40px',
            maxWidth: '500px',
            width: '90%',
            border: `1px solid ${COLORS.yellow}`,
          }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: COLORS.white }}>
              Пригласить коллегу
            </h3>
            <input
              type="email"
              placeholder="Email коллеги"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: 8,
                border: `1px solid ${COLORS.gray}`,
                backgroundColor: COLORS.darkAlt,
                color: COLORS.white,
                fontSize: '16px',
                marginBottom: '16px',
              }}
            />
            <button
              onClick={() => setShowModal(false)}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: 8,
                border: 'none',
                backgroundColor: COLORS.yellow,
                color: COLORS.black,
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Отправить приглашение
            </button>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }} onClick={() => setShowVideoModal(false)}>
          <div style={{
            backgroundColor: COLORS.dark,
            borderRadius: 16,
            padding: '24px',
            maxWidth: '800px',
            width: '90%',
            border: `1px solid ${COLORS.yellow}`,
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ color: COLORS.yellow, fontWeight: 700 }}>📹 Видеозвонок</span>
              <button onClick={() => setShowVideoModal(false)} style={{ color: COLORS.grayText, background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </div>
            <div style={{
              aspectRatio: '16/9',
              backgroundColor: COLORS.darkAlt,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
            }}>
              <span style={{ color: COLORS.grayText }}>Видео превью</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button style={{ padding: '12px 24px', borderRadius: 8, backgroundColor: COLORS.green, color: COLORS.black, fontWeight: 600, border: 'none', cursor: 'pointer' }}>📹 Начать</button>
              <button style={{ padding: '12px 24px', borderRadius: 8, backgroundColor: COLORS.red, color: COLORS.white, fontWeight: 600, border: 'none', cursor: 'pointer' }}>🗙 Отмена</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// КОНЦЕПТ 6: ДЕРЕВО ПРИНЯТИЯ РЕШЕНИЯ
// ============================================
function Concept6() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.black, color: COLORS.white }}>
      <style>{styles}</style>
      <div className="scanline" />
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 100,
        borderBottom: `1px solid ${COLORS.gray}`,
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white }}>
          тАйга
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#flow" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>User Flow</a>
          <a href="#factors" className="hover-lift" style={{ color: COLORS.grayTextLight, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Факторы</a>
          <button className="btn-primary animate-glow" style={{
            padding: '12px 28px',
            borderRadius: 8,
            border: 'none',
            backgroundColor: COLORS.yellow,
            color: COLORS.black,
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            Пригласить коллегу
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid-bg" style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: 6,
          border: `1px solid ${COLORS.yellowBorder}`,
          marginBottom: '32px',
          fontSize: '13px',
          color: COLORS.yellow,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}>
          ПСИХОЛОГИЯ ШАРИНГА
        </div>
        
        <h1 style={{
          fontSize: '52px',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px',
          letterSpacing: '-2px',
        }}>
          Дерево принятия решения: <span className="gradient-text">поделиться информацией</span>
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: COLORS.grayTextLight,
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Психологические паттерны, которые ведут пользователя к желанию поделиться
        </p>
      </section>

      {/* User Flow */}
      <section id="flow" style={{ padding: '60px 20px', backgroundColor: COLORS.darkAlt }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Уровень 1: Старт */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-block',
              padding: '20px 48px',
              borderRadius: 12,
              backgroundColor: COLORS.yellow,
              color: COLORS.black,
              fontSize: '18px',
              fontWeight: 800,
            }}>
              📋 ПОЛУЧЕНИЕ ИНФОРМАЦИИ
            </div>
          </div>

          {/* Уровень 2: Триггеры */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ color: COLORS.yellow, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>ТРИГГЕРЫ ОБРАБОТКИ</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
            {[
              { icon: '💡', title: 'Новизна и уникальность' },
              { icon: '⚡', title: 'Эмоциональный отклик' },
              { icon: '🎯', title: 'Практическая польза' },
              { icon: '🔗', title: 'Связь с контекстом' },
            ].map((t, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '24px',
                borderRadius: 12,
                backgroundColor: COLORS.dark,
                border: `1px solid ${COLORS.gray}`,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{t.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.white }}>{t.title}</div>
              </div>
            ))}
          </div>

          {/* Уровень 3: Решение */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{
              width: '140px',
              height: '140px',
              background: COLORS.yellow,
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ transform: 'rotate(-45deg)', color: COLORS.black, fontWeight: 800, fontSize: '16px', textAlign: 'center' }}>
                Стоит ли делиться?
              </span>
            </div>
          </div>

          {/* Уровень 4: Барьеры и Мотивации */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            {/* Барьеры */}
            <div style={{
              backgroundColor: `${COLORS.red}10`,
              borderRadius: 16,
              padding: '32px',
              border: `1px solid ${COLORS.red}30`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px' }}>❌</span>
                <span style={{ fontSize: '20px', fontWeight: 800, color: COLORS.red }}>БАРЬЕРЫ</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Страх осуждения', 'Нехватка времени', 'Равнодушие получателя'].map((b, i) => (
                  <div key={i} style={{
                    padding: '16px',
                    backgroundColor: COLORS.dark,
                    borderRadius: 8,
                    color: COLORS.grayTextLight,
                    fontSize: '14px',
                  }}>
                    🔒 {b}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', padding: '16px', backgroundColor: COLORS.dark, borderRadius: 8, textAlign: 'center' }}>
                <span style={{ color: COLORS.grayText }}>→ Информация не передана</span>
              </div>
            </div>

            {/* Мотивации */}
            <div style={{
              backgroundColor: `${COLORS.green}10`,
              borderRadius: 16,
              padding: '32px',
              border: `1px solid ${COLORS.green}30`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px' }}>✅</span>
                <span style={{ fontSize: '20px', fontWeight: 800, color: COLORS.green }}>МОТИВАЦИИ</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Помочь другим', 'Самоутверждение и статус', 'Начать разговор'].map((m, i) => (
                  <div key={i} style={{
                    padding: '16px',
                    backgroundColor: COLORS.dark,
                    borderRadius: 8,
                    color: COLORS.grayTextLight,
                    fontSize: '14px',
                  }}>
                    ✨ {m}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Уровень 5: Получатели */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ color: COLORS.yellow, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>ВЫБОР ПОЛУЧАТЕЛЯ</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '40px' }}>
            {[
              { icon: '👨‍👩‍👧', title: 'Семья' },
              { icon: '👥', title: 'Коллеги' },
              { icon: '📱', title: 'Друзья в соцсетях' },
              { icon: '🏢', title: 'Проф. сообщество' },
              { icon: '🌐', title: 'Публика' },
            ].map((r, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '20px',
                borderRadius: 12,
                backgroundColor: COLORS.dark,
                border: `1px solid ${COLORS.gray}`,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{r.icon}</div>
                <div style={{ fontSize: '12px', color: COLORS.grayTextLight }}>{r.title}</div>
              </div>
            ))}
          </div>

          {/* Уровень 6: Результаты */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ color: COLORS.yellow, fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>РЕЗУЛЬТАТ</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { icon: '✅', title: 'Успешный шеринг' },
              { icon: '🔄', title: 'Обсуждение' },
              { icon: '📈', title: 'Расширение охвата' },
              { icon: '💡', title: 'Новые идеи' },
            ].map((r, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '20px',
                borderRadius: 12,
                backgroundColor: COLORS.green,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{r.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: COLORS.black }}>{r.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Факторы */}
      <section id="factors" style={{ padding: '100px 20px', backgroundColor: COLORS.black }} className="grid-bg">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', letterSpacing: '-2px' }}>
            Ключевые <span className="gradient-text">психологические факторы</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {[
              { icon: '🧠', title: 'Когнитивная лёгкость', desc: 'Чем проще поделиться, тем чаще это происходит' },
              { icon: '😊', title: 'Эмоциональная ценность', desc: 'Эмоции — главный драйвер виральности' },
              { icon: '🤝', title: 'Социальный капитал', desc: 'Шеринг повышает статус в сообществе' },
              { icon: '🎯', title: 'Актуальность', desc: 'Релевантность получателю критична' },
              { icon: '⚡', title: 'Простота действия', desc: 'Один клик vs несколько шагов' },
            ].map((f, i) => (
              <div key={i} className="hover-lift card-glow" style={{
                padding: '28px',
                borderRadius: 12,
                backgroundColor: COLORS.darkAlt,
                border: `1px solid ${COLORS.gray}`,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{f.icon}</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: COLORS.yellow, marginBottom: '12px' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: COLORS.grayTextLight, lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: COLORS.yellow }}>
        <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '24px', color: COLORS.black, letterSpacing: '-2px' }}>
          Используйте эти паттерны
        </h2>
        <p style={{ fontSize: '20px', color: COLORS.gray, marginBottom: '48px' }}>
          Встройте виральность в свой продукт
        </p>
        <button className="btn-primary" style={{
          padding: '20px 56px',
          borderRadius: 8,
          border: 'none',
          backgroundColor: COLORS.black,
          color: COLORS.yellow,
          fontWeight: 700,
          fontSize: '18px',
          cursor: 'pointer',
        }}>
          Пригласить коллегу
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: `1px solid ${COLORS.gray}`, backgroundColor: COLORS.dark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.white, marginBottom: '16px' }}>
            тАйга
          </div>
          <div style={{ color: COLORS.grayText, fontSize: '14px' }}>
            © 2026 тАйга. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============================================
// ============================================
// КОНЦЕПТ 7: СВЕТЛАЯ ТЕМА (sivi.ai style)
// ============================================
function Concept7() {
  const [showModal, setShowModal] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState('rukovoditel')
  
  // Светлая цветовая палитра (sivi.ai inspired)
  const L = {
    bg: '#FAFAFA',
    bgAlt: '#F5F3FF',
    bgCard: '#FFFFFF',
    text: '#1A1A2E',
    textMuted: '#6B7280',
    textLight: '#9CA3AF',
    border: 'rgba(139, 92, 254, 0.15)',
    purple: '#8B5CF6',
    purpleDark: '#7C3AED',
    pink: '#EC4899',
    cyan: '#06B6D4',
    blue: '#3B82F6',
    green: '#10B981',
    red: '#EF4444',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    shadow: '0 4px 20px rgba(139, 92, 254, 0.08)',
    shadowLg: '0 10px 40px rgba(0, 0, 0, 0.08)',
  }
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: L.bg, color: L.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
        
        /* Magic Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 254, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 254, 0.6), 0 0 60px rgba(236, 72, 153, 0.3); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; transform: scale(1.05); }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(0.5deg); }
          66% { transform: translateY(3px) rotate(-0.5deg); }
        }
        @keyframes rainbow-border {
          0% { border-color: rgba(139, 92, 254, 0.5); }
          25% { border-color: rgba(236, 72, 153, 0.5); }
          50% { border-color: rgba(6, 182, 212, 0.5); }
          75% { border-color: rgba(16, 185, 129, 0.5); }
          100% { border-color: rgba(139, 92, 254, 0.5); }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(139, 92, 254, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(139, 92, 254, 0.8)) drop-shadow(0 0 30px rgba(236, 72, 153, 0.4)); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-4px) scale(1.02); }
        
        .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { 
          box-shadow: 0 20px 50px rgba(139, 92, 254, 0.2), 0 0 0 1px rgba(139, 92, 254, 0.1);
          transform: translateY(-4px) scale(1.01);
        }
        
        .magic-float { animation: float 6s ease-in-out infinite; }
        .magic-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .magic-blob { animation: blob 12s ease-in-out infinite; }
        .magic-slide { animation: slide-up 0.8s ease-out forwards; }
        .magic-float-card { animation: float-card 8s ease-in-out infinite; }
        .magic-rainbow { animation: rainbow-border 4s linear infinite; }
        .magic-glow-icon { animation: glow-pulse 2s ease-in-out infinite; }
        .magic-rotate { animation: rotate-slow 20s linear infinite; }
        .magic-bounce { animation: bounce-in 0.6s ease-out forwards; }
        
        .gradient-text-magic {
          background: linear-gradient(135deg, #8B5CF6, #EC4899, #06B6D4, #8B5CF6);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease infinite;
        }
        
        .shimmer-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .shimmer-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 35px rgba(139, 92, 254, 0.5);
        }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .sparkle-dot {
          position: absolute;
          width: 4px; height: 4px;
          background: white;
          border-radius: 50%;
          animation: sparkle 2s infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .pulse-online {
          animation: pulse-dot 1.5s ease-in-out infinite;
        }
        
        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
          color: #8B5CF6;
        }
        
        .magic-border-glow {
          position: relative;
        }
        .magic-border-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, #8B5CF6, #EC4899, #06B6D4, #8B5CF6);
          background-size: 300% 300%;
          animation: gradient-shift 4s ease infinite;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .magic-border-glow:hover::before {
          opacity: 1;
        }
        
        .metric-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .metric-card:hover {
          transform: translateX(5px);
          box-shadow: -5px 5px 20px rgba(139, 92, 254, 0.1);
        }
      `}</style>
      
      {/* Floating Magic Blobs - Background Decoration */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div className="magic-blob" style={{
          position: 'absolute', top: '10%', left: '5%', width: 400, height: 400,
          background: 'linear-gradient(135deg, rgba(139, 92, 254, 0.15), rgba(236, 72, 153, 0.1))',
          filter: 'blur(60px)',
        }} />
        <div className="magic-blob" style={{
          position: 'absolute', top: '60%', right: '10%', width: 350, height: 350,
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(139, 92, 254, 0.1))',
          filter: 'blur(50px)',
          animationDelay: '-4s',
        }} />
        <div className="magic-blob" style={{
          position: 'absolute', bottom: '20%', left: '20%', width: 300, height: 300,
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.08))',
          filter: 'blur(40px)',
          animationDelay: '-2s',
        }} />
      </div>
      
      {/* Header */}
      <header className="glass-card" style={{
        position: 'fixed', top: 0, left: 0, right: 0, padding: '16px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        zIndex: 100,
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: L.text, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="magic-glow" style={{
            width: 32, height: 32, borderRadius: 10,
            background: L.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px',
          }}>✨</div>
          тАйга
        </div>
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#common" className="hover-lift" style={{ color: L.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Общий язык</a>
          <a href="#video" className="hover-lift" style={{ color: L.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Видео</a>
          <a href="#ai" className="hover-lift" style={{ color: L.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>ИИ-агент</a>
          <button onClick={() => setShowModal(true)} className="shimmer-btn hover-lift" style={{
            padding: '12px 24px', borderRadius: 12, border: 'none',
            background: L.gradient, color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', fontSize: '14px',
            boxShadow: '0 4px 20px rgba(139, 92, 254, 0.4)',
          }}>✨ Пригласить коллегу</button>
          <button onClick={() => setShowVideoModal(true)} className="hover-lift" style={{
            padding: '12px 20px', borderRadius: 12, border: `1px solid \${L.purple}`,
            backgroundColor: 'transparent', color: L.purple, fontWeight: 600, cursor: 'pointer', fontSize: '14px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>📹 Видео</button>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        paddingTop: '160px', paddingBottom: '80px', textAlign: 'center',
        background: `linear-gradient(180deg, \${L.bgAlt} 0%, \${L.bg} 100%)`,
        position: 'relative', zIndex: 1,
      }}>
        {/* Floating Elements */}
        <div className="magic-float" style={{ position: 'absolute', top: '15%', left: '8%', fontSize: '32px', opacity: 0.6 }}>✨</div>
        <div className="magic-float" style={{ position: 'absolute', top: '25%', right: '12%', fontSize: '28px', opacity: 0.5, animationDelay: '-2s' }}>💫</div>
        <div className="magic-float" style={{ position: 'absolute', bottom: '30%', left: '15%', fontSize: '24px', opacity: 0.4, animationDelay: '-4s' }}>⭐</div>
        
        <div className="magic-slide" style={{
          display: 'inline-block', padding: '10px 24px', borderRadius: 100,
          background: 'rgba(139, 92, 254, 0.1)', border: '1px solid rgba(139, 92, 254, 0.2)',
          marginBottom: '32px', fontSize: '14px', color: L.purple, fontWeight: 600,
          boxShadow: '0 4px 20px rgba(139, 92, 254, 0.15)',
        }}>✦ AI-POWERED COMMUNICATION PLATFORM</div>
        
        <h1 className="magic-slide" style={{
          fontSize: '60px', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px',
          maxWidth: '900px', margin: '0 auto 24px', letterSpacing: '-2px', color: L.text,
          animationDelay: '0.1s',
        }}>Продажи начинаются{' '}
          <span className="gradient-text-magic">в диалоге</span>
        </h1>
        
        <p className="magic-slide" style={{
          fontSize: '18px', color: L.textMuted, maxWidth: '650px', margin: '0 auto 40px', lineHeight: 1.7,
          animationDelay: '0.2s',
        }}>тАйга превращает каждый контакт с клиентом в управляемый источник продаж</p>
        
        <button onClick={() => setShowModal(true)} className="shimmer-btn hover-lift magic-glow" style={{
          padding: '18px 48px', borderRadius: 16, border: 'none',
          background: L.gradient, color: '#FFFFFF', fontWeight: 600, fontSize: '17px', cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(139, 92, 254, 0.4)',
          position: 'relative',
        }}>
          <span style={{ position: 'relative', zIndex: 1 }}>🚀 Пригласить коллегу в тАйга</span>
        </button>
        
        <div className="magic-slide" style={{ 
          maxWidth: '1000px', margin: '48px auto 0', borderRadius: 24, overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(139, 92, 254, 0.15), 0 0 0 1px rgba(139, 92, 254, 0.1)',
          animationDelay: '0.3s',
        }}>
          <img src="/admin-widgets-hero.png" alt="Интерфейс тАйга" style={{ width: '100%', display: 'block' }} />
        </div>
        <p style={{ textAlign: 'center', color: L.textLight, fontSize: '13px', marginTop: '12px' }}>
          Пример интерфейса администратора: все виджеты на одном экране
        </p>
      </section>

      {/* Светофор метрик - Для Андрея (Администратор) */}
      <section style={{ padding: '80px 20px', backgroundColor: L.bgAlt, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="magic-slide" style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-1px', color: L.text }}>
              🚦 Светофор системы
            </h2>
            <p style={{ fontSize: '16px', color: L.textMuted }}>Состояние всех сервисов за 30 секунд</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {/* Производительность сервисов */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '28px',
              border: `1px solid ${L.border}`, boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: L.text }}>⚡ Сервисы</span>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', backgroundColor: L.green,
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)',
                }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'АТС телефония', status: 'green', latency: '12ms' },
                  { name: 'CRM интеграция', status: 'green', latency: '45ms' },
                  { name: 'ИИ-аналитика', status: 'yellow', latency: '230ms' },
                  { name: 'Уведомления', status: 'green', latency: '8ms' },
                ].map((service, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: L.bg, borderRadius: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: 10, height: 10, borderRadius: '50%',
                        backgroundColor: service.status === 'green' ? L.green : '#F59E0B',
                        boxShadow: service.status === 'green' ? '0 0 8px rgba(16, 185, 129, 0.5)' : '0 0 8px rgba(245, 158, 11, 0.5)',
                      }}></div>
                      <span style={{ fontSize: '13px', color: L.text }}>{service.name}</span>
                    </div>
                    <span style={{ fontSize: '11px', color: L.textMuted }}>{service.latency}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 10, textAlign: 'center' }}>
                <span style={{ fontSize: '13px', color: L.green, fontWeight: 600 }}>✓ Все системы работают</span>
              </div>
            </div>

            {/* Проблемы с настройкой */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '28px',
              border: `1px solid rgba(245, 158, 11, 0.2)`, boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: L.text }}>⚠️ Настройки</span>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', backgroundColor: '#F59E0B',
                  boxShadow: '0 0 12px rgba(245, 158, 11, 0.6)',
                }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '12px', background: 'rgba(239, 68, 68, 0.08)', borderRadius: 10, border: '1px solid rgba(239, 68, 68, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: L.red, fontWeight: 600, fontSize: '13px' }}>🔴 Интеграция Bitrix</span>
                  </div>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Требует обновления токена</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(245, 158, 11, 0.08)', borderRadius: 10, border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: '#F59E0B', fontWeight: 600, fontSize: '13px' }}>🟡 3 виджета</span>
                  </div>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Не настроены уведомления</span>
                </div>
                <div style={{ padding: '12px', background: L.bg, borderRadius: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: L.green, fontWeight: 600, fontSize: '13px' }}>🟢 12 из 14</span>
                  </div>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Интеграций работают</span>
                </div>
              </div>
              <button className="hover-lift" style={{
                marginTop: '16px', width: '100%', padding: '12px', borderRadius: 10,
                background: L.gradient, color: '#fff', fontWeight: 600, fontSize: '13px',
                border: 'none', cursor: 'pointer',
              }}>🔧 Исправить проблемы</button>
            </div>

            {/* Активные пользователи */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '28px',
              border: `1px solid ${L.border}`, boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: L.text }}>👥 Пользователи</span>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', backgroundColor: L.green,
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)',
                }}></div>
              </div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '48px', fontWeight: 800, color: L.green }}>187</div>
                <div style={{ fontSize: '14px', color: L.textMuted }}>активных сейчас</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Всего сотрудников</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.text }}>200</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>На звонках</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.text }}>34</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Оффлайн &gt; 7 дней</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.red }}>13</span>
                </div>
              </div>
              <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 10, textAlign: 'center' }}>
                <span style={{ fontSize: '13px', color: L.green, fontWeight: 600 }}>93.5% активность</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Общий язык */}
      <section id="common" style={{ padding: '100px 20px', backgroundColor: L.bg, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="magic-slide" style={{
              display: 'inline-block', padding: '8px 20px', borderRadius: 100,
              background: 'rgba(139, 92, 254, 0.1)', border: '1px solid rgba(139, 92, 254, 0.2)',
              marginBottom: '24px', fontSize: '13px', color: L.purple, fontWeight: 600,
              boxShadow: '0 4px 15px rgba(139, 92, 254, 0.1)',
            }}>🔗 Общий язык для админа и руководителя</div>
            <h2 className="magic-slide" style={{ fontSize: '44px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-2px', color: L.text, animationDelay: '0.1s' }}>
              тАйга создаёт <span className="gradient-text-magic">общий язык</span>
            </h2>
            <p className="magic-slide" style={{ fontSize: '18px', color: L.textMuted, maxWidth: '700px', margin: '0 auto', animationDelay: '0.2s' }}>
              Оба смотрят на одни метрики, но каждый видит свою пользу
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '24px', alignItems: 'start' }}>
            {/* Администратор */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '32px',
              border: `1px solid \${L.border}`, boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: `linear-gradient(135deg, \${L.purple}, \${L.purpleDark})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px',
                  boxShadow: '0 4px 12px rgba(139, 92, 254, 0.3)',
                }}>⚙️</div>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: L.purple }}>Администратор</div>
                  <div style={{ fontSize: '14px', color: L.textMuted }}>получает инструменты</div>
                </div>
              </div>
              {[
                { icon: '🤖', title: 'ИИ-агент', desc: 'Предупреждает о сбоях заранее' },
                { icon: '🚦', title: 'Светофор', desc: 'Статус системы за 30 секунд' },
                { icon: '🔧', title: 'Виджеты', desc: 'Настройка за 5 минут' },
                { icon: '⚡', title: 'Настройка услуг', desc: 'Быстро и просто' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '14px', backgroundColor: L.bgAlt, borderRadius: 12, marginBottom: '10px' }}>
                  <div style={{ fontWeight: 600, color: L.text, marginBottom: '4px', fontSize: '15px' }}>{item.icon} {item.title}</div>
                  <div style={{ fontSize: '13px', color: L.textMuted }}>{item.desc}</div>
                </div>
              ))}
              <div style={{ padding: '14px', background: `linear-gradient(135deg, rgba(139, 92, 254, 0.15), rgba(139, 92, 254, 0.05))`, borderRadius: 12, textAlign: 'center', marginTop: '12px' }}>
                <div style={{ fontWeight: 600, color: L.purple }}>Статус: Эксперт по аналитике</div>
              </div>
            </div>

            {/* Центр */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
              <div className="magic-float magic-glow" style={{
                width: 80, height: 80, borderRadius: '50%', background: L.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '16px',
                boxShadow: '0 8px 24px rgba(139, 92, 254, 0.3)',
              }}>🤝</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: L.text, textAlign: 'center', marginBottom: '8px' }}>Общие метрики</div>
              <div style={{ fontSize: '13px', color: L.textMuted, textAlign: 'center' }}>Прозрачность<br/>Синхронизация<br/>Доверие</div>
            </div>

            {/* Руководитель */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '32px',
              border: '1px solid rgba(16, 185, 129, 0.2)', boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: `linear-gradient(135deg, \${L.green}, #059669)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                }}>👔</div>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: L.green }}>Руководитель</div>
                  <div style={{ fontSize: '14px', color: L.textMuted }}>получает результаты в деньгах</div>
                </div>
              </div>
              {[
                { icon: '🤖', title: 'ИИ-агент', desc: 'Находит упущенные продажи' },
                { icon: '🚦', title: 'Светофор', desc: 'Статус бизнеса: +18% к плану' },
                { icon: '📊', title: 'Виджеты', desc: 'ROI, рейтинг, точки роста' },
                { icon: '🛠️', title: 'Конструктор', desc: 'Любой виджет за пару минут' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '14px', backgroundColor: 'rgba(16, 185, 129, 0.05)', borderRadius: 12, marginBottom: '10px' }}>
                  <div style={{ fontWeight: 600, color: L.text, marginBottom: '4px', fontSize: '15px' }}>{item.icon} {item.title}</div>
                  <div style={{ fontSize: '13px', color: L.textMuted }}>{item.desc}</div>
                </div>
              ))}
              <div style={{ padding: '14px', background: `linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))`, borderRadius: 12, textAlign: 'center', marginTop: '12px' }}>
                <div style={{ fontWeight: 600, color: L.green }}>ROI: +340% за 3 месяца</div>
              </div>
            </div>
          </div>

          {/* До/После */}
          <div style={{ marginTop: '80px' }}>
            <h3 style={{ fontSize: '32px', fontWeight: 800, textAlign: 'center', marginBottom: '48px', letterSpacing: '-1px', color: L.text }}>
              Как меняется работа
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
              {/* До */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(239, 68, 68, 0.2)', marginBottom: '20px', boxShadow: '0 10px 40px rgba(239, 68, 68, 0.08)' }}>
                  <img src="/beehive-before.png" alt="До тАйга" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', borderRadius: 16, padding: '20px', border: '1px solid rgba(239, 68, 68, 0.15)', textAlign: 'left' }}>
                  <div style={{ fontWeight: 600, color: L.red, marginBottom: '12px', fontSize: '16px' }}>❌ До тАйга</div>
                  <div style={{ fontSize: '14px', color: L.textMuted, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div>• Админ собирает отчёты 40 мин/день</div>
                    <div>• Руководитель не знает связь телефон-выручка</div>
                    <div>• Проблемы обнаруживаются постфактум</div>
                    <div>• Планёрки = разбор полётов</div>
                  </div>
                </div>
              </div>
              {/* После */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.2)', marginBottom: '20px', boxShadow: '0 10px 40px rgba(16, 185, 129, 0.08)' }}>
                  <img src="/beehive-after.png" alt="Вместе с тАйга" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', borderRadius: 16, padding: '20px', border: '1px solid rgba(16, 185, 129, 0.15)', textAlign: 'left' }}>
                  <div style={{ fontWeight: 600, color: L.green, marginBottom: '12px', fontSize: '16px' }}>✅ Вместе с тАйга</div>
                  <div style={{ fontSize: '14px', color: L.textMuted, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div>• Светофор за 30 секунд</div>
                    <div>• ROI коммуникаций: +340%</div>
                    <div>• ИИ предупреждает о проблемах заранее</div>
                    <div>• Планёрки про развитие, не про аварии</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Прозрачность расчётов */}
      <section style={{ padding: '100px 20px', backgroundColor: L.bgAlt }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: 50,
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(16, 185, 129, 0.04))',
              border: '1px solid rgba(16, 185, 129, 0.2)', marginBottom: '24px',
            }}>
              <span style={{ fontSize: '16px' }}>🔍</span>
              <span style={{ fontSize: '13px', color: L.green, fontWeight: 600 }}>ПРОЗРАЧНОСТЬ</span>
            </div>
            <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-2px', color: L.text }}>
              Прозрачность <span style={{ background: L.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>расчётов</span>
            </h2>
            <p style={{ fontSize: '18px', color: L.textMuted, maxWidth: '600px', margin: '0 auto' }}>
              Эффективность сотрудника — из понятных метрик
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Виджет рейтинга */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 24, padding: '28px',
              border: `1px solid \${L.border}`, boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: L.text }}>🏆 Рейтинг эффективности</div>
                <div style={{
                  padding: '6px 14px', background: 'rgba(139, 92, 254, 0.1)', borderRadius: 100,
                  fontSize: '12px', color: L.purple, fontWeight: 600,
                }}>за неделю</div>
              </div>
              {[
                { rank: 1, name: 'Анна К.', avatar: '👩‍💼', calls: 89, sales: 23, score: 94 },
                { rank: 2, name: 'Дмитрий С.', avatar: '👨‍💼', calls: 76, sales: 18, score: 87 },
                { rank: 3, name: 'Елена М.', avatar: '👩‍💼', calls: 82, sales: 17, score: 81 },
              ].map((emp, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px',
                  background: i === 0 ? 'rgba(139, 92, 254, 0.05)' : L.bg, borderRadius: 12, marginBottom: '10px',
                  border: i === 0 ? '1px solid rgba(139, 92, 254, 0.15)' : `1px solid \${L.border}`,
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: i === 0 ? L.gradient : i === 1 ? '#A3A3AA' : '#B45309',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 800, color: '#fff',
                  }}>{emp.rank}</div>
                  <div style={{ fontSize: '20px' }}>{emp.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: L.text }}>{emp.name}</div>
                    <div style={{ fontSize: '11px', color: L.textMuted }}>{emp.calls} звонков • {emp.sales} продаж</div>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: i === 0 ? L.purple : L.text }}>{emp.score}%</div>
                </div>
              ))}
              <div style={{ padding: '16px', background: L.bgAlt, borderRadius: 12, marginTop: '8px' }}>
                <div style={{ fontSize: '12px', color: L.textMuted, marginBottom: '12px' }}>Из чего складывается рейтинг</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  {[
                    { icon: '📞', label: 'Звонки', weight: '20%' },
                    { icon: '💰', label: 'Продажи', weight: '35%' },
                    { icon: '📊', label: 'Конверсия', weight: '25%' },
                    { icon: '⭐', label: 'Качество', weight: '20%' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px' }}>{item.icon}</span>
                      <span style={{ fontSize: '12px', color: L.textMuted }}>{item.label}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: L.purple, marginLeft: 'auto' }}>{item.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Объяснение */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                padding: '20px', background: 'rgba(139, 92, 254, 0.05)', borderRadius: 16, border: '1px solid rgba(139, 92, 254, 0.1)',
              }}>
                <div style={{ fontSize: '15px', fontWeight: 600, color: L.purple, marginBottom: '8px' }}>💡 Как считается эффективность</div>
                <div style={{ fontSize: '13px', color: L.textMuted, lineHeight: 1.6 }}>
                  ИИ анализирует работу каждого сотрудника по нескольким параметрам и выводит итоговый балл. Все метрики прозрачны и проверяемы.
                </div>
              </div>
              {[
                { icon: '📞', title: 'Количество звонков', weight: '20%', desc: 'Все входящие и исходящие вызовы' },
                { icon: '💰', title: 'Закрытые продажи', weight: '35%', desc: 'Сделки, привязанные к сотруднику' },
                { icon: '📊', title: 'Конверсия', weight: '25%', desc: 'Продажи / Звонки × 100%' },
                { icon: '⭐', title: 'Качество обслуживания', weight: '20%', desc: 'ИИ-оценка тона и вежливости' },
              ].map((item, i) => (
                <div key={i} className="card-hover" style={{
                  padding: '16px', backgroundColor: L.bgCard, borderRadius: 14, border: `1px solid \${L.border}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, background: 'rgba(139, 92, 254, 0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
                    }}>{item.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: L.text }}>{item.title}</div>
                      <div style={{ fontSize: '12px', color: L.textMuted }}>{item.desc}</div>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: L.purple }}>{item.weight}</div>
                  </div>
                </div>
              ))}
              <div style={{
                padding: '16px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: 14, border: '1px solid rgba(16, 185, 129, 0.1)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span>✓</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: L.green }}>Справедливая оценка</span>
                </div>
                <div style={{ fontSize: '12px', color: L.textMuted }}>
                  Кликните на рейтинг — увидите детализацию по всем метрикам
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Персонализация потребностей - ИИ-агент Андрей */}
      <section id="ai" style={{ padding: '100px 20px', backgroundColor: L.bg, position: 'relative', zIndex: 1 }}>
        {/* Декоративные элементы */}
        <div className="magic-float" style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '28px', opacity: 0.4 }}>🔮</div>
        <div className="magic-float" style={{ position: 'absolute', top: '20%', right: '8%', fontSize: '24px', opacity: 0.3, animationDelay: '-3s' }}>✨</div>
        <div className="magic-float" style={{ position: 'absolute', bottom: '15%', left: '10%', fontSize: '20px', opacity: 0.3, animationDelay: '-5s' }}>💫</div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card-hover magic-slide magic-border-glow" style={{
            backgroundColor: L.bgCard, borderRadius: 24, padding: '32px',
            border: `1px solid ${L.border}`, boxShadow: L.shadowLg,
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Декоративный градиент внутри карточки */}
            <div style={{
              position: 'absolute', top: 0, right: 0, width: '200px', height: '200px',
              background: `radial-gradient(circle, rgba(139, 92, 254, 0.08) 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />
            
            {/* Header агента */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="magic-glow magic-bounce" style={{
                width: 60, height: 60, borderRadius: 18,
                background: L.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px',
                boxShadow: '0 8px 20px rgba(139, 92, 254, 0.4)',
              }}>🤖</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: L.text, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ИИ-агент тАйга
                  <span className="magic-glow-icon" style={{ fontSize: '16px' }}>✨</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: L.green }}>
                  <span className="pulse-online" style={{
                    width: 10, height: 10, borderRadius: '50%', backgroundColor: L.green,
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)',
                  }}></span>
                  <span>Онлайн</span>
                  <span style={{ color: L.textLight }}>•</span>
                  <span>Анализирует вашу работу</span>
                </div>
              </div>
            </div>

            {/* Приветствие */}
            <div style={{
              padding: '20px', background: `linear-gradient(135deg, ${L.bgAlt}, rgba(139, 92, 254, 0.03))`, borderRadius: 16, marginBottom: '20px',
              border: `1px solid ${L.border}`,
            }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: L.text, marginBottom: '16px' }}>
                Привет, Андрей! 👋 Я заметил, что вы столкнулись с несколькими задачами:
              </div>

              {/* Метрики */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Проблема 1 */}
                <div className="metric-card" style={{
                  padding: '16px', background: 'rgba(239, 68, 68, 0.05)',
                  borderRadius: 14, border: '1px solid rgba(239, 68, 68, 0.15)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, right: 0, width: '100px', height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.05))',
                  }} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', position: 'relative' }}>
                    <span style={{ fontSize: '24px' }} className="magic-float">⏱️</span>
                    <div>
                      <div style={{ fontSize: '14px', color: L.textMuted, marginBottom: '4px' }}>
                        Вы настраивали интеграцию CRM <strong style={{ color: L.red }}>2 дня</strong> и подключили <strong style={{ color: L.red }}>3 из 200</strong> сотрудников.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Решение */}
                <div className="metric-card" style={{
                  padding: '16px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.03))',
                  borderRadius: 14, border: '1px solid rgba(16, 185, 129, 0.2)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, right: 0, width: '100px', height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.08))',
                  }} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', position: 'relative' }}>
                    <span style={{ fontSize: '24px' }} className="magic-glow-icon">✨</span>
                    <div>
                      <div style={{ fontSize: '14px', color: L.textMuted }}>
                        Со мной — <strong style={{ color: L.green, fontSize: '17px', background: 'linear-gradient(135deg, #10B981, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>все 200 за 15 минут</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Проблема 2 */}
                <div className="metric-card" style={{
                  padding: '16px', background: 'rgba(245, 158, 11, 0.05)',
                  borderRadius: 14, border: '1px solid rgba(245, 158, 11, 0.2)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, right: 0, width: '100px', height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.05))',
                  }} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', position: 'relative' }}>
                    <span style={{ fontSize: '24px' }} className="magic-float">⚠️</span>
                    <div>
                      <div style={{ fontSize: '14px', color: L.textMuted }}>
                        <strong style={{ color: '#F59E0B' }}>10 сотрудников</strong> не активны уже <strong style={{ color: '#F59E0B' }}>29 дней</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA кнопка */}
            <button className="shimmer-btn hover-lift magic-glow" style={{
              width: '100%', padding: '18px', borderRadius: 16, border: 'none',
              background: L.gradient, color: '#FFFFFF', fontWeight: 600, fontSize: '16px', cursor: 'pointer',
              boxShadow: '0 6px 25px rgba(139, 92, 254, 0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            }}>
              <span style={{ fontSize: '20px' }}>🚀</span>
              <span>Хочу решить эти задачи</span>
            </button>
          </div>
        </div>
      </section>

      {/* Все возможности - OUI для Андрея (Администратор) */}
      <section id="features" style={{ padding: '100px 20px', backgroundColor: L.bgAlt, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Заголовок с OUI-индикатором */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="magic-slide" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: 50,
              background: 'linear-gradient(135deg, rgba(139, 92, 254, 0.12), rgba(139, 92, 254, 0.04))',
              border: '1px solid rgba(139, 92, 254, 0.2)', marginBottom: '24px',
            }}>
              <span className="pulse-online" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: L.green }}></span>
              <span style={{ fontSize: '13px', color: L.purple, fontWeight: 600 }}>OUI • Персонализация для Андрея</span>
            </div>
            <h2 className="magic-slide" style={{ fontSize: '44px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-2px', color: L.text, animationDelay: '0.1s' }}>
              Все возможности <span className="gradient-text-magic">тАйга</span>
            </h2>
            <p className="magic-slide" style={{ fontSize: '18px', color: L.textMuted, animationDelay: '0.2s' }}>
              Полный набор функций для каждой роли в компании
            </p>
          </div>

          {/* OUI Карточка - Адаптировано для Андрея */}
          <div className="card-hover magic-slide" style={{
            backgroundColor: L.bgCard, borderRadius: 24, padding: '32px', marginBottom: '40px',
            border: `1px solid rgba(139, 92, 254, 0.2)`, boxShadow: L.shadowLg,
            background: 'linear-gradient(135deg, rgba(139, 92, 254, 0.03), transparent)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="magic-glow" style={{
                width: 56, height: 56, borderRadius: 16, background: L.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px',
                boxShadow: '0 4px 20px rgba(139, 92, 254, 0.4)',
              }}>⚙️</div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: L.text }}>Ваши возможности, Андрей</div>
                <div style={{ fontSize: '14px', color: L.purple }}>как Администратор • Роль определена автоматически</div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {/* Приоритетные функции для админа */}
              {[
                { icon: '📊', title: 'Статистика в реальном времени', desc: 'Мониторинг всех каналов', priority: true },
                { icon: '🎛️', title: 'Управление системой', desc: 'Настройка прав и интеграций', priority: true },
                { icon: '🗣️', title: 'Создание голосом', desc: 'Виджеты командами ИИ', priority: true },
                { icon: '📦', title: 'Шаблоны наборов', desc: 'Готовые конфигурации', priority: false },
                { icon: '⚡', title: 'Быстрый доступ', desc: 'Горячие клавиши', priority: false },
                { icon: '🔔', title: 'Умные уведомления', desc: 'Алерты о проблемах', priority: false },
              ].map((item, i) => (
                <div key={i} className="metric-card" style={{
                  padding: '16px', borderRadius: 14,
                  background: item.priority ? 'linear-gradient(135deg, rgba(139, 92, 254, 0.1), rgba(139, 92, 254, 0.02))' : L.bg,
                  border: item.priority ? '1px solid rgba(139, 92, 254, 0.2)' : `1px solid ${L.border}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>{item.icon}</span>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: L.text }}>{item.title}</span>
                    {item.priority && <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: 10, background: L.gradient, color: '#fff' }}>TOP</span>}
                  </div>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Другие роли - кратко */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Руководитель */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '24px',
              border: '1px solid rgba(16, 185, 129, 0.15)', boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${L.green}, #059669)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>👔</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: L.green }}>Руководитель</div>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>результаты в деньгах</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['💰 ROI каналов', '📈 Рост выручки', '🎯 KPI и цели', '📱 Мобильный доступ'].map((tag, i) => (
                  <span key={i} style={{ fontSize: '12px', padding: '6px 12px', borderRadius: 20, background: 'rgba(16, 185, 129, 0.08)', color: L.green }}>{tag}</span>
                ))}
              </div>
            </div>
            
            {/* Оператор */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '24px',
              border: '1px solid rgba(59, 130, 246, 0.15)', boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${L.blue}, #2563EB)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🎧</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: L.blue }}>Оператор</div>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>эффективная работа</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['👤 Личный кабинет', '💬 Работа с клиентами', '🏆 Геймификация', '📚 Обучение'].map((tag, i) => (
                  <span key={i} style={{ fontSize: '12px', padding: '6px 12px', borderRadius: 20, background: 'rgba(59, 130, 246, 0.08)', color: L.blue }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: L.bg, position: 'relative', zIndex: 1 }}>
        <h2 className="magic-slide" style={{ fontSize: '44px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-2px', color: L.text }}>
          Пригласите коллегу в <span className="gradient-text-magic">тАйга</span>
        </h2>
        <p className="magic-slide" style={{ fontSize: '18px', color: L.textMuted, marginBottom: '40px', animationDelay: '0.1s' }}>
          Настройка за 2 минуты. Коллега получит приглашение с готовым рабочим местом.
        </p>
        <button onClick={() => setShowModal(true)} className="shimmer-btn hover-lift magic-glow magic-slide" style={{
          padding: '18px 48px', borderRadius: 16, border: 'none',
          background: L.gradient, color: '#FFFFFF', fontWeight: 600, fontSize: '17px', cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(139, 92, 254, 0.4)',
          animationDelay: '0.2s',
        }}>✨ Пригласить коллегу</button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: `1px solid \${L.border}`, backgroundColor: L.bgAlt, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: L.text, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>✨</span>
            тАйга
          </div>
          <div style={{ color: L.textMuted, fontSize: '14px' }}>© 2026 тАйга. Все права защищены.</div>
        </div>
      </footer>

      {/* Modal с выбором шаблона */}
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 1000,
        }} onClick={() => setShowModal(false)}>
          <div style={{
            backgroundColor: L.bgCard, borderRadius: 20, padding: '40px',
            maxWidth: '480px', width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            border: `1px solid \${L.border}`,
          }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: L.text }}>
              Пригласить коллегу
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: L.textMuted, marginBottom: '12px' }}>
                Выберите шаблон рабочего места:
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setSelectedTemplate('rukovoditel')} style={{
                  flex: 1, padding: '16px', borderRadius: 14,
                  border: selectedTemplate === 'rukovoditel' ? '2px solid #8B5CF6' : `1px solid \${L.border}`,
                  backgroundColor: selectedTemplate === 'rukovoditel' ? 'rgba(139, 92, 254, 0.05)' : L.bg,
                  color: selectedTemplate === 'rukovoditel' ? L.purple : L.text, fontWeight: 600, cursor: 'pointer',
                  fontSize: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ fontSize: '24px' }}>👔</span>
                  <span>Руководитель</span>
                </button>
                <button onClick={() => setSelectedTemplate('sotrudnik')} style={{
                  flex: 1, padding: '16px', borderRadius: 14,
                  border: selectedTemplate === 'sotrudnik' ? '2px solid #8B5CF6' : `1px solid \${L.border}`,
                  backgroundColor: selectedTemplate === 'sotrudnik' ? 'rgba(139, 92, 254, 0.05)' : L.bg,
                  color: selectedTemplate === 'sotrudnik' ? L.purple : L.text, fontWeight: 600, cursor: 'pointer',
                  fontSize: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ fontSize: '24px' }}>👤</span>
                  <span>Сотрудник</span>
                </button>
              </div>
            </div>
            
            <input type="email" placeholder="Email коллеги" style={{
              width: '100%', padding: '16px', borderRadius: 12,
              border: `1px solid \${L.border}`, backgroundColor: L.bg,
              color: L.text, fontSize: '16px', marginBottom: '16px',
            }} />
            <button onClick={() => setShowModal(false)} style={{
              width: '100%', padding: '16px', borderRadius: 12, border: 'none',
              background: L.gradient, color: '#FFFFFF', fontWeight: 700, fontSize: '16px', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(139, 92, 254, 0.3)',
            }}>Отправить приглашение</button>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 1000,
        }} onClick={() => setShowVideoModal(false)}>
          <div style={{
            backgroundColor: L.bgCard, borderRadius: 16, padding: '24px',
            maxWidth: '800px', width: '90%', border: `1px solid \${L.border}`,
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ color: L.purple, fontWeight: 700 }}>📹 Видеозвонок</span>
              <button onClick={() => setShowVideoModal(false)} style={{ color: L.textMuted, background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </div>
            <div style={{
              aspectRatio: '16/9', backgroundColor: L.bgAlt, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
            }}>
              <span style={{ color: L.textMuted }}>Видео превью</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button style={{ padding: '12px 24px', borderRadius: 8, backgroundColor: L.green, color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>📹 Начать</button>
              <button style={{ padding: '12px 24px', borderRadius: 8, backgroundColor: L.red, color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>🗙 Отмена</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [activeConcept, setActiveConcept] = useState(12)
  const [mode, setMode] = useState<'dashboard' | 'ai'>('dashboard')

  // Названия концептов
  const conceptNames: Record<number, string> = {
    1: 'Геройский блок',
    2: 'Конструктор сервиса',
    3: 'Тарифы',
    4: 'Простой лендинг',
    5: 'Виджеты дашборда',
    6: 'Тёмный минимализм',
    7: 'Проблема/Решение',
    8: 'Анимированный',
    9: 'Интерактивный CSS',
    10: 'Настройка сервиса',
    11: 'Конструктор форм',
    12: 'Комплексный дашборд',
    13: 'Админ ВАТС',
  }

  return (
    <>
      {/* Header с переключателем концептов */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(250, 204, 21, 0.2)',
        zIndex: 1000,
      }}>
        {/* Логотип */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: 36, height: 36,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #FACC15 0%, #FEF08A 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px',
          }}>✨</div>
          <span style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
            тАйга
          </span>
        </div>

        {/* Переключатель режимов - только для Концепта 12 */}
        {activeConcept === 12 && (
          <div style={{
            display: 'flex', gap: '4px',
            padding: '4px', borderRadius: 12,
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
          }}>
            <button
              onClick={() => setMode('dashboard')}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                border: 'none',
                background: mode === 'dashboard' 
                  ? 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)' 
                  : 'transparent',
                color: mode === 'dashboard' ? '#fff' : '#9CA3AF',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              📊 Дашборд
            </button>
            <button
              onClick={() => setMode('ai')}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                border: 'none',
                background: mode === 'ai' 
                  ? 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)' 
                  : 'transparent',
                color: mode === 'ai' ? '#fff' : '#9CA3AF',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              🤖 ИИ-помощник
            </button>
          </div>
        )}

        {/* Информация и селект концептов - справа */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '12px', color: '#737373' }}>
            {conceptNames[activeConcept]}
          </span>
          <div style={{
            width: 32, height: 32,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '12px', fontWeight: 700, color: '#fff',
          }}>АП</div>
          
          {/* Переключатель концептов */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '12px', color: '#737373', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Концепт
            </span>
            <select
              value={activeConcept}
              onChange={(e) => setActiveConcept(Number(e.target.value))}
              style={{
                padding: '10px 36px 10px 16px',
                borderRadius: 10,
                background: 'rgba(250, 204, 21, 0.1)',
                border: '1px solid rgba(250, 204, 21, 0.3)',
                color: '#FACC15',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23FACC15' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
              }}
            >
              {Object.entries(conceptNames).map(([num, name]) => (
                <option key={num} value={num} style={{ background: '#000', color: '#fff' }}>
                  {num}. {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Render Active Concept */}
      <div style={{ paddingTop: 60 }}>
        {activeConcept === 1 && <Concept1 />}
      {activeConcept === 2 && <Concept2 />}
      {activeConcept === 3 && <Concept3 />}
      {activeConcept === 4 && <Concept4 />}
      {activeConcept === 5 && <Concept5 />}
      {activeConcept === 6 && <Concept6 />}
      {activeConcept === 7 && <Concept7 />}
      {activeConcept === 8 && <Concept8 />}
      {activeConcept === 9 && <Concept9 />}
      {activeConcept === 10 && <Concept10 />}
      {activeConcept === 11 && <Concept11 />}
      {activeConcept === 12 && <Concept12 mode={mode} setMode={setMode} />}
      {activeConcept === 13 && <Concept13 />}
      </div>
    </>
  )
}

// ============================================
// КОНЦЕПТ 8: OUI для Михаила (Руководитель) - Жёлтый акцент
// ============================================
function Concept8() {
  const [showModal, setShowModal] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState('rukovoditel')
  
  // Цветовая палитра - жёлтый акцент для руководителя
  const L = {
    bg: '#FAFAFA',
    bgAlt: '#FFFBEB',
    bgCard: '#FFFFFF',
    text: '#1A1A2E',
    textMuted: '#6B7280',
    textLight: '#9CA3AF',
    border: 'rgba(250, 204, 21, 0.2)',
    yellow: '#FACC15',
    yellowDark: '#EAB308',
    green: '#10B981',
    red: '#EF4444',
    orange: '#F59E0B',
    gradient: 'linear-gradient(135deg, #FACC15 0%, #EAB308 100%)',
    shadow: '0 4px 20px rgba(250, 204, 21, 0.1)',
    shadowLg: '0 10px 40px rgba(0, 0, 0, 0.08)',
  }
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: L.bg, color: L.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes pulse-glow-yellow { 0%, 100% { box-shadow: 0 0 15px rgba(250, 204, 21, 0.4); } 50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.7); } }
        @keyframes pulse-dot { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.5); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-3px); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { box-shadow: 0 15px 40px rgba(250, 204, 21, 0.15); }
        .magic-float { animation: float 5s ease-in-out infinite; }
        .magic-glow-yellow { animation: pulse-glow-yellow 2.5s ease-in-out infinite; }
        .magic-slide { animation: slide-up 0.6s ease-out forwards; }
        .pulse-online { animation: pulse-dot 1.5s ease-in-out infinite; }
        .gradient-text-yellow {
          background: linear-gradient(135deg, #FACC15, #EAB308, #F59E0B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      
      {/* Header */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, padding: '16px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', zIndex: 100,
        borderBottom: `1px solid ${L.border}`,
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: L.text, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="magic-glow-yellow" style={{ width: 32, height: 32, borderRadius: 10, background: L.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>👔</div>
          тАйга
        </div>
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#efficiency" className="hover-lift" style={{ color: L.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Эффективность</a>
          <a href="#ai" className="hover-lift" style={{ color: L.textMuted, textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>ИИ-агент</a>
          <button onClick={() => setShowModal(true)} className="hover-lift" style={{
            padding: '12px 24px', borderRadius: 12, border: 'none',
            background: L.gradient, color: L.text, fontWeight: 700, cursor: 'pointer', fontSize: '14px',
            boxShadow: '0 4px 15px rgba(250, 204, 21, 0.4)',
          }}>✨ Пригласить коллегу</button>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', background: `linear-gradient(180deg, ${L.bgAlt} 0%, ${L.bg} 100%)`, position: 'relative', zIndex: 1 }}>
        <div className="magic-float" style={{ position: 'absolute', top: '15%', left: '8%', fontSize: '28px', opacity: 0.4 }}>📊</div>
        <div className="magic-float" style={{ position: 'absolute', top: '25%', right: '12%', fontSize: '24px', opacity: 0.3, animationDelay: '-2s' }}>👥</div>
        
        <div className="magic-slide" style={{
          display: 'inline-block', padding: '10px 24px', borderRadius: 100,
          background: 'rgba(250, 204, 21, 0.15)', border: '1px solid rgba(250, 204, 21, 0.3)',
          marginBottom: '32px', fontSize: '14px', color: L.yellowDark, fontWeight: 600,
        }}>👔 Добро пожаловать, Михаил!</div>
        
        <h1 className="magic-slide" style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px', letterSpacing: '-2px', color: L.text }}>
          Эффективность команды{' '}
          <span className="gradient-text-yellow">под контролем</span>
        </h1>
        
        <p className="magic-slide" style={{ fontSize: '18px', color: L.textMuted, maxWidth: '650px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          тАйга показывает, кто работает эффективно, а кто требует внимания
        </p>
        
        <button onClick={() => setShowModal(true)} className="hover-lift magic-glow-yellow" style={{
          padding: '16px 40px', borderRadius: 14, border: 'none',
          background: L.gradient, color: L.text, fontWeight: 700, fontSize: '16px', cursor: 'pointer',
          boxShadow: '0 6px 25px rgba(250, 204, 21, 0.4)',
        }}>🚀 Пригласить коллегу</button>
      </section>

      {/* Светофор метрик - Для Михаила (Руководитель) */}
      <section style={{ padding: '80px 20px', backgroundColor: L.bgAlt, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="magic-slide" style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-1px', color: L.text }}>
              🚦 Светофор команды
            </h2>
            <p style={{ fontSize: '16px', color: L.textMuted }}>Эффективность обработки звонков в реальном времени</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {/* Эффективность обработки звонков */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '28px',
              border: `1px solid ${L.border}`, boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: L.text }}>📞 Звонки</span>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', backgroundColor: L.green,
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)',
                }}></div>
              </div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '42px', fontWeight: 800, color: L.green }}>89%</div>
                <div style={{ fontSize: '14px', color: L.textMuted }}>обработано успешно</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>За сегодня</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.text }}>1,247</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Среднее время</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.text }}>2:34</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Пропущено</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.red }}>23</span>
                </div>
              </div>
            </div>

            {/* Операторы на линии */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '28px',
              border: `1px solid rgba(250, 204, 21, 0.2)`, boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: L.text }}>👥 На линии</span>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', backgroundColor: '#F59E0B',
                  boxShadow: '0 0 12px rgba(245, 158, 11, 0.6)',
                }}></div>
              </div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '42px', fontWeight: 800, color: L.yellowDark }}>34</div>
                <div style={{ fontSize: '14px', color: L.textMuted }}>оператора из 50</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: L.green }}></div>
                    <span style={{ fontSize: '12px', color: L.text }}>28 на звонках</span>
                  </div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(250, 204, 21, 0.08)', borderRadius: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F59E0B' }}></div>
                    <span style={{ fontSize: '12px', color: L.text }}>6 ожидают</span>
                  </div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(239, 68, 68, 0.08)', borderRadius: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: L.red }}></div>
                    <span style={{ fontSize: '12px', color: L.text }}>16 оффлайн</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: 8, textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 600 }}>⚠️ Нехватка 6 операторов</span>
              </div>
            </div>

            {/* Конверсия и продажи */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '28px',
              border: `1px solid ${L.border}`, boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: L.text }}>💰 Продажи</span>
                <div style={{
                  width: 16, height: 16, borderRadius: '50%', backgroundColor: L.green,
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)',
                }}></div>
              </div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '42px', fontWeight: 800, color: L.green }}>24%</div>
                <div style={{ fontSize: '14px', color: L.textMuted }}>конверсия сегодня</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Закрыто сделок</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.green }}>89</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>Выручка</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.text }}>₽ 847K</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: L.bg, borderRadius: 8 }}>
                  <span style={{ fontSize: '12px', color: L.textMuted }}>К плану</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: L.green }}>+12%</span>
                </div>
              </div>
              <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 8, textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: L.green, fontWeight: 600 }}>✓ План выполняется</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Эффективность сотрудников */}
      <section id="efficiency" style={{ padding: '80px 20px', backgroundColor: L.bg, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="card-hover" style={{
            backgroundColor: L.bgCard, borderRadius: 24, padding: '32px',
            border: `1px solid ${L.border}`, boxShadow: L.shadowLg,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: L.text }}>📊 Эффективность отделов</div>
              <div style={{ padding: '6px 14px', background: 'rgba(250, 204, 21, 0.15)', borderRadius: 20, fontSize: '12px', color: L.yellowDark, fontWeight: 600 }}>за неделю</div>
            </div>
            
            {/* Метрики отделов */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {[
                { name: 'Продажи', efficiency: 94, trend: '+5%', color: L.green },
                { name: 'Поддержка', efficiency: 87, trend: '+2%', color: L.green },
                { name: 'Маркетинг', efficiency: 72, trend: '-3%', color: L.orange },
                { name: 'Отдел звонков', efficiency: 58, trend: '-8%', color: L.red },
              ].map((dept, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '16px', background: i === 3 ? 'rgba(239, 68, 68, 0.05)' : L.bgAlt, borderRadius: 12, border: i === 3 ? '1px solid rgba(239, 68, 68, 0.2)' : 'none' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: L.text, marginBottom: '8px' }}>{dept.name}</div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: dept.color }}>{dept.efficiency}%</div>
                  <div style={{ fontSize: '12px', color: dept.color, fontWeight: 600 }}>{dept.trend}</div>
                </div>
              ))}
            </div>
            
            {/* Проблемный отдел */}
            <div style={{ padding: '20px', background: 'rgba(239, 68, 68, 0.05)', borderRadius: 16, border: '1px solid rgba(239, 68, 68, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '24px' }}>⚠️</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: L.red }}>Худший отдел: Отдел звонков</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div style={{ padding: '12px', background: L.bgCard, borderRadius: 10, textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>Конверсия</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: L.red }}>12%</div>
                  <div style={{ fontSize: '11px', color: L.textMuted }}>норма: 25%</div>
                </div>
                <div style={{ padding: '12px', background: L.bgCard, borderRadius: 10, textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>Пропущенные</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: L.red }}>47</div>
                  <div style={{ fontSize: '11px', color: L.textMuted }}>на этой неделе</div>
                </div>
                <div style={{ padding: '12px', background: L.bgCard, borderRadius: 10, textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>Низкий балл</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: L.red }}>3 сотрудника</div>
                  <div style={{ fontSize: '11px', color: L.textMuted }}>требуют внимания</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ИИ-агент для Михаила */}
      <section id="ai" style={{ padding: '80px 20px', backgroundColor: L.bgAlt, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card-hover magic-slide" style={{
            backgroundColor: L.bgCard, borderRadius: 24, padding: '32px',
            border: `1px solid ${L.border}`, boxShadow: L.shadowLg,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="magic-glow-yellow" style={{
                width: 56, height: 56, borderRadius: 16, background: L.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px',
                boxShadow: '0 4px 15px rgba(250, 204, 21, 0.4)',
              }}>🤖</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: L.text }}>ИИ-агент тАйга</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: L.green }}>
                  <span className="pulse-online" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: L.green }}></span>
                  Онлайн • Анализирует вашу команду
                </div>
              </div>
            </div>

            <div style={{ padding: '20px', background: L.bg, borderRadius: 16, marginBottom: '20px' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: L.text, marginBottom: '16px' }}>
                Привет, Михаил! 👋 Вот что я обнаружил:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.05)', borderRadius: 12, border: '1px solid rgba(239, 68, 68, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '22px' }}>📉</span>
                    <div>
                      <div style={{ fontSize: '14px', color: L.textMuted }}>
                        <strong style={{ color: L.red }}>Отдел звонков</strong> — конверсия упала на 8%. 3 сотрудника показывают низкие результаты.
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '16px', background: 'rgba(245, 158, 11, 0.05)', borderRadius: 12, border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '22px' }}>💡</span>
                    <div>
                      <div style={{ fontSize: '14px', color: L.textMuted }}>
                        <strong style={{ color: L.orange }}>Рекомендация:</strong> проведите обучение для 3 сотрудников отдела звонков
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: 12, border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '22px' }}>✅</span>
                    <div>
                      <div style={{ fontSize: '14px', color: L.textMuted }}>
                        <strong style={{ color: L.green }}>Отдел продаж</strong> — лучшие показатели за квартал! +5% к эффективности
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="hover-lift magic-glow-yellow" style={{
              width: '100%', padding: '16px', borderRadius: 14, border: 'none',
              background: L.gradient, color: L.text, fontWeight: 700, fontSize: '15px', cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(250, 204, 21, 0.4)',
            }}>📊 Посмотреть детализацию по отделам</button>
          </div>
        </div>
      </section>

      {/* Все возможности - OUI для Михаила (Руководитель) */}
      <section id="features" style={{ padding: '100px 20px', backgroundColor: L.bg, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Заголовок с OUI-индикатором */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="magic-slide" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', borderRadius: 50,
              background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.15), rgba(250, 204, 21, 0.05))',
              border: '1px solid rgba(250, 204, 21, 0.3)', marginBottom: '24px',
            }}>
              <span className="pulse-online" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: L.green }}></span>
              <span style={{ fontSize: '13px', color: L.yellowDark, fontWeight: 600 }}>OUI • Персонализация для Михаила</span>
            </div>
            <h2 className="magic-slide" style={{ fontSize: '44px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-2px', color: L.text }}>
              Все возможности <span className="gradient-text-yellow">тАйга</span>
            </h2>
            <p className="magic-slide" style={{ fontSize: '18px', color: L.textMuted }}>
              Полный набор функций для каждой роли в компании
            </p>
          </div>

          {/* OUI Карточка - Адаптировано для Михаила */}
          <div className="card-hover magic-slide" style={{
            backgroundColor: L.bgCard, borderRadius: 24, padding: '32px', marginBottom: '40px',
            border: `1px solid ${L.border}`, boxShadow: L.shadowLg,
            background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.03), transparent)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="magic-glow-yellow" style={{
                width: 56, height: 56, borderRadius: 16, background: L.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px',
                boxShadow: '0 4px 20px rgba(250, 204, 21, 0.4)',
              }}>👔</div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: L.text }}>Ваши возможности, Михаил</div>
                <div style={{ fontSize: '14px', color: L.yellowDark }}>как Руководитель • Роль определена автоматически</div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {/* Приоритетные функции для руководителя */}
              {[
                { icon: '📊', title: 'Эффективность отделов', desc: 'Сравнение и ранги', priority: true },
                { icon: '📈', title: 'Рост выручки', desc: 'Точки роста', priority: true },
                { icon: '🎯', title: 'KPI и цели', desc: 'Прогресс команды', priority: true },
                { icon: '🔔', title: 'Умные уведомления', desc: 'Алерты о проблемах', priority: false },
                { icon: '📱', title: 'Мобильный доступ', desc: 'Вся аналитика с собой', priority: false },
                { icon: '📋', title: 'Авто-отчёты', desc: 'Дайджесты в Telegram', priority: false },
              ].map((item, i) => (
                <div key={i} className="metric-card" style={{
                  padding: '16px', borderRadius: 14,
                  background: item.priority ? 'linear-gradient(135deg, rgba(250, 204, 21, 0.12), rgba(250, 204, 21, 0.03))' : L.bgAlt,
                  border: item.priority ? '1px solid rgba(250, 204, 21, 0.3)' : `1px solid ${L.border}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>{item.icon}</span>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: L.text }}>{item.title}</span>
                    {item.priority && <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: 10, background: L.gradient, color: L.text, fontWeight: 700 }}>TOP</span>}
                  </div>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Другие роли - кратко */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Администратор */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '24px',
              border: '1px solid rgba(139, 92, 254, 0.15)', boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>⚙️</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#8B5CF6' }}>Администратор</div>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>полный контроль системы</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['📊 Статистика', '🎛️ Управление', '🗣️ Голосовые команды', '📦 Шаблоны'].map((tag, i) => (
                  <span key={i} style={{ fontSize: '12px', padding: '6px 12px', borderRadius: 20, background: 'rgba(139, 92, 254, 0.08)', color: '#8B5CF6' }}>{tag}</span>
                ))}
              </div>
            </div>
            
            {/* Оператор */}
            <div className="card-hover" style={{
              backgroundColor: L.bgCard, borderRadius: 20, padding: '24px',
              border: '1px solid rgba(59, 130, 246, 0.15)', boxShadow: L.shadow,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #3B82F6, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🎧</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#3B82F6' }}>Оператор</div>
                  <div style={{ fontSize: '12px', color: L.textMuted }}>эффективная работа</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['👤 Личный кабинет', '💬 Работа с клиентами', '🏆 Геймификация', '📚 Обучение'].map((tag, i) => (
                  <span key={i} style={{ fontSize: '12px', padding: '6px 12px', borderRadius: 20, background: 'rgba(59, 130, 246, 0.08)', color: '#3B82F6' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: L.bgAlt }}>
        <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-2px', color: L.text }}>
          Пригласите коллегу в <span className="gradient-text-yellow">тАйга</span>
        </h2>
        <p style={{ fontSize: '18px', color: L.textMuted, marginBottom: '32px' }}>
          Настройка за 2 минуты. Коллега получит приглашение с готовым рабочим местом.
        </p>
        <button onClick={() => setShowModal(true)} className="hover-lift magic-glow-yellow" style={{
          padding: '16px 40px', borderRadius: 14, border: 'none',
          background: L.gradient, color: L.text, fontWeight: 700, fontSize: '16px', cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(250, 204, 21, 0.4)',
        }}>✨ Пригласить коллегу</button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', borderTop: `1px solid ${L.border}`, backgroundColor: L.bgAlt }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 800, color: L.text, marginBottom: '8px' }}>
            тАйга
          </div>
          <div style={{ color: L.textMuted, fontSize: '13px' }}>© 2026 тАйга. Все права защищены.</div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setShowModal(false)}>
          <div style={{ backgroundColor: L.bgCard, borderRadius: 20, padding: '32px', maxWidth: '440px', width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: `1px solid ${L.border}` }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px', color: L.text }}>Пригласить коллегу</h3>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: L.textMuted, marginBottom: '10px' }}>Выберите шаблон:</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setSelectedTemplate('rukovoditel')} style={{ flex: 1, padding: '14px', borderRadius: 12, border: selectedTemplate === 'rukovoditel' ? '2px solid #FACC15' : `1px solid ${L.border}`, backgroundColor: selectedTemplate === 'rukovoditel' ? 'rgba(250, 204, 21, 0.1)' : L.bg, fontWeight: 600, cursor: 'pointer', fontSize: '13px' }}>👔 Руководитель</button>
                <button onClick={() => setSelectedTemplate('sotrudnik')} style={{ flex: 1, padding: '14px', borderRadius: 12, border: selectedTemplate === 'sotrudnik' ? '2px solid #FACC15' : `1px solid ${L.border}`, backgroundColor: selectedTemplate === 'sotrudnik' ? 'rgba(250, 204, 21, 0.1)' : L.bg, fontWeight: 600, cursor: 'pointer', fontSize: '13px' }}>👤 Сотрудник</button>
              </div>
            </div>
            <input type="email" placeholder="Email коллеги" style={{ width: '100%', padding: '14px', borderRadius: 10, border: `1px solid ${L.border}`, backgroundColor: L.bg, color: L.text, fontSize: '15px', marginBottom: '14px' }} />
            <button onClick={() => setShowModal(false)} style={{ width: '100%', padding: '14px', borderRadius: 10, border: 'none', background: L.gradient, color: L.text, fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>Отправить приглашение</button>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// КОНЦЕПТ 9: Лендинг раннего доступа
// ============================================
function Concept9() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    industry: '',
    ideas: '',
    agreeInterview: false
  })
  const [submitted, setSubmitted] = useState(false)

  // Цветовая палитра - градиентный фиолетово-синий стиль
  const C = {
    bg: '#0F0F1A',
    bgAlt: '#1A1A2E',
    bgCard: '#16162A',
    text: '#FFFFFF',
    textMuted: '#9CA3AF',
    textLight: '#6B7280',
    purple: '#8B5CF6',
    purpleDark: '#7C3AED',
    blue: '#3B82F6',
    cyan: '#06B6D4',
    green: '#10B981',
    orange: '#F59E0B',
    red: '#EF4444',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
    gradientBtn: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    border: 'rgba(139, 92, 246, 0.2)',
    shadow: '0 4px 20px rgba(139, 92, 246, 0.15)',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: C.bg, color: C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 50px rgba(139, 92, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes count-up {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6, #3B82F6, #06B6D4);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-slide { animation: slide-up 0.8s ease-out forwards; }
        
        .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2); }
        
        .card-glow {
          position: relative;
        }
        .card-glow::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5));
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .card-glow:hover::before { opacity: 1; }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: #8B5CF6 !important;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
        }
      `}</style>

      {/* Background Effects */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div className="animate-float" style={{
          position: 'absolute', top: '10%', left: '5%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div className="animate-float" style={{
          position: 'absolute', top: '50%', right: '10%', width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '-3s',
        }} />
        <div className="animate-float" style={{
          position: 'absolute', bottom: '20%', left: '30%', width: 350, height: 350,
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDelay: '-5s',
        }} />
      </div>

      {/* Header */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, padding: '20px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backgroundColor: 'rgba(15, 15, 26, 0.9)', backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.border}`, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="animate-glow" style={{
            width: 40, height: 40, borderRadius: 12,
            background: C.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px',
          }}>✨</div>
          <span style={{ fontSize: '22px', fontWeight: 800 }}>
            тАйга
          </span>
        </div>
        <div style={{
          padding: '10px 20px', borderRadius: 100,
          background: 'rgba(139, 92, 246, 0.1)', border: `1px solid ${C.border}`,
          fontSize: '14px', fontWeight: 600, color: C.purple,
        }}>
          🚀 Ранний доступ
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        paddingTop: '160px', paddingBottom: '80px', textAlign: 'center',
        position: 'relative', zIndex: 1, padding: '160px 20px 80px',
      }}>
        <div className="animate-slide" style={{
          display: 'inline-block', padding: '12px 28px', borderRadius: 100,
          background: C.gradient, marginBottom: '32px', fontSize: '14px',
          color: '#FFFFFF', fontWeight: 700, letterSpacing: '1px',
        }}>
          БУДЬТЕ ПЕРВЫМИ
        </div>

        <h1 className="animate-slide" style={{
          fontSize: '58px', fontWeight: 900, lineHeight: 1.1,
          maxWidth: '900px', margin: '0 auto 28px', letterSpacing: '-2px',
          animationDelay: '0.1s',
        }}>
          Превратите диалоги в <span className="gradient-text">рост бизнеса</span>
        </h1>

        <p className="animate-slide" style={{
          fontSize: '20px', color: C.textMuted, maxWidth: '700px',
          margin: '0 auto 48px', lineHeight: 1.7, animationDelay: '0.2s',
        }}>
          тАйга — платформа, которая превращает каждую коммуникацию с клиентом 
          в измеримый результат. Получите ранний доступ и влияйте на развитие продукта.
        </p>

        <a href="#signup" className="hover-lift animate-glow" style={{
          display: 'inline-block', padding: '18px 48px', borderRadius: 14,
          background: C.gradientBtn, color: '#FFFFFF', fontWeight: 700,
          fontSize: '17px', textDecoration: 'none', cursor: 'pointer',
        }}>
          🎯 Записаться на ранний доступ
        </a>
      </section>

      {/* Pain Section - Боль и решение */}
      <section style={{ padding: '100px 20px', backgroundColor: C.bgAlt, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-2px' }}>
              Знакомые <span className="gradient-text">проблемы?</span>
            </h2>
            <p style={{ fontSize: '18px', color: C.textMuted }}>Мы поняли, что с этим можно справиться</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {/* Боль 1 */}
            <div className="hover-lift" style={{
              backgroundColor: C.bgCard, borderRadius: 20, padding: '32px',
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>📊</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: C.text }}>
                Данные есть, действий нет
              </h3>
              <p style={{ fontSize: '15px', color: C.textMuted, lineHeight: 1.6, marginBottom: '20px' }}>
                Отчёты переполнены цифрами, но непонятно, что конкретно делать для улучшения результатов.
              </p>
              <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 12, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontWeight: 600, color: C.green, marginBottom: '4px', fontSize: '14px' }}>Решение</div>
                <span style={{ fontSize: '13px', color: C.textMuted }}>ИИ-рекомендации с приоритетом действий</span>
              </div>
            </div>

            {/* Боль 2 */}
            <div className="hover-lift" style={{
              backgroundColor: C.bgCard, borderRadius: 20, padding: '32px',
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>⏱️</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: C.text }}>
                Нет времени на анализ
              </h3>
              <p style={{ fontSize: '15px', color: C.textMuted, lineHeight: 1.6, marginBottom: '20px' }}>
                Руководители тратят часы на изучение отчётов вместо принятия стратегических решений.
              </p>
              <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 12, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontWeight: 600, color: C.green, marginBottom: '4px', fontSize: '14px' }}>Решение</div>
                <span style={{ fontSize: '13px', color: C.textMuted }}>Светофор метрик — обзор за 30 секунд</span>
              </div>
            </div>

            {/* Боль 3 */}
            <div className="hover-lift" style={{
              backgroundColor: C.bgCard, borderRadius: 20, padding: '32px',
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🔇</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: C.text }}>
                Упущенные возможности в звонках
              </h3>
              <p style={{ fontSize: '15px', color: C.textMuted, lineHeight: 1.6, marginBottom: '20px' }}>
                Каждый звонок содержит инсайты, но никто не успевает их анализировать и использовать.
              </p>
              <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 12, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontWeight: 600, color: C.green, marginBottom: '4px', fontSize: '14px' }}>Решение</div>
                <span style={{ fontSize: '13px', color: C.textMuted }}>ИИ-анализ всех коммуникаций автоматически</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Widgets Preview Section */}
      <section style={{ padding: '100px 20px', backgroundColor: C.bg, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-2px' }}>
              Что вы <span className="gradient-text">получите</span>
            </h2>
            <p style={{ fontSize: '18px', color: C.textMuted }}>
              Интуитивные виджеты для принятия решений с рекомендациями
            </p>
          </div>

          {/* Widgets Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '24px' }}>
            
            {/* Widget 1: Цифровые показатели */}
            <div className="hover-lift card-glow" style={{
              backgroundColor: C.bgCard, borderRadius: 20, padding: '28px',
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700 }}>📊 Ключевые показатели</div>
                <span style={{ fontSize: '12px', color: C.textMuted, padding: '4px 12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: 20 }}>сегодня</span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {[
                  { label: 'Звонки', value: '1,247', trend: '+12%', color: C.green },
                  { label: 'Конверсия', value: '78%', trend: '+5%', color: C.green },
                  { label: 'Активность', value: '94%', trend: '+3%', color: C.green },
                  { label: 'NPS', value: '9.2', trend: '+0.3', color: C.green },
                ].map((metric, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '16px 8px', background: C.bgAlt, borderRadius: 12 }}>
                    <div style={{ fontSize: '11px', color: C.textLight, marginBottom: '8px' }}>{metric.label}</div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: C.text }}>{metric.value}</div>
                    <div style={{ fontSize: '12px', color: metric.color, fontWeight: 600 }}>{metric.trend}</div>
                  </div>
                ))}
              </div>
              
              {/* Рекомендация Apple Health style */}
              <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 12, border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✓</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: C.green }}>Все показатели в норме</div>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>Продолжайте в том же духе</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 2: Линейный график */}
            <div className="hover-lift card-glow" style={{
              backgroundColor: C.bgCard, borderRadius: 20, padding: '28px',
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700 }}>📈 Динамика активности</div>
                <span style={{ fontSize: '12px', color: C.green, padding: '4px 12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 20 }}>+23% за неделю</span>
              </div>
              
              {/* SVG График */}
              <svg viewBox="0 0 400 120" style={{ width: '100%', height: 120 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                {[0, 1, 2, 3].map(i => (
                  <line key={i} x1="0" y1={30 + i * 30} x2="400" y2={30 + i * 30} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                ))}
                
                {/* Area fill */}
                <path d="M0,100 L50,85 L100,90 L150,70 L200,75 L250,50 L300,55 L350,30 L400,35 L400,120 L0,120 Z" fill="url(#areaGradient)" />
                
                {/* Line */}
                <path d="M0,100 L50,85 L100,90 L150,70 L200,75 L250,50 L300,55 L350,30 L400,35" fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Points */}
                {[[0,100], [50,85], [100,90], [150,70], [200,75], [250,50], [300,55], [350,30], [400,35]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="#8B5CF6" stroke="#fff" strokeWidth="2" />
                ))}
              </svg>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '11px', color: C.textLight }}>
                <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
              </div>
              
              {/* Рекомендация Apple Health style */}
              <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(139, 92, 246, 0.08)', borderRadius: 12, border: '1px solid rgba(139, 92, 246, 0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: C.purple, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>📈</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: C.purple }}>Рост активности</div>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>Наилучшие показатели за месяц</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            
            {/* Widget 3: Столбчатая диаграмма */}
            <div className="hover-lift card-glow" style={{
              backgroundColor: C.bgCard, borderRadius: 20, padding: '24px',
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>📊 Эффективность отделов</div>
              
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: 100, marginBottom: '16px' }}>
                {[
                  { name: 'Продажи', value: 94, color: C.green },
                  { name: 'Поддержка', value: 87, color: C.purple },
                  { name: 'Маркетинг', value: 72, color: C.blue },
                  { name: 'Колл-центр', value: 58, color: C.orange },
                ].map((dept, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: 40, height: dept.value, borderRadius: '6px 6px 0 0',
                      background: `linear-gradient(180deg, ${dept.color}, ${dept.color}80)`,
                      marginBottom: '8px',
                    }} />
                    <div style={{ fontSize: '10px', color: C.textLight }}>{dept.name.split(' ')[0]}</div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: dept.color }}>{dept.value}%</div>
                  </div>
                ))}
              </div>
              
              {/* Рекомендация Apple Health style */}
              <div style={{ padding: '12px', background: 'rgba(245, 158, 11, 0.08)', borderRadius: 10, border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>!</div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: C.orange }}>Колл-центр требует внимания</div>
                    <div style={{ fontSize: '10px', color: C.textMuted }}>Рекомендуется обучение команды</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 4: Круговая диаграмма */}
            <div className="hover-lift card-glow" style={{
              backgroundColor: C.bgCard, borderRadius: 20, padding: '24px',
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>🎯 Источники контактов</div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* SVG Donut Chart */}
                <svg viewBox="0 0 100 100" style={{ width: 80, height: 80 }}>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="12" strokeDasharray="75.4 251.2" strokeDashoffset="0" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="12" strokeDasharray="62.8 251.2" strokeDashoffset="-75.4" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#06B6D4" strokeWidth="12" strokeDasharray="50.2 251.2" strokeDashoffset="-138.2" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="62.8 251.2" strokeDashoffset="-188.4" transform="rotate(-90 50 50)" />
                  <text x="50" y="50" textAnchor="middle" dy="0.3em" fill="#fff" fontSize="14" fontWeight="700">100%</text>
                </svg>
                
                <div style={{ flex: 1 }}>
                  {[
                    { name: 'Звонки', pct: '30%', color: C.purple },
                    { name: 'Чаты', pct: '25%', color: C.blue },
                    { name: 'Email', pct: '20%', color: C.cyan },
                    { name: 'Другое', pct: '25%', color: C.green },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: item.color }} />
                      <span style={{ fontSize: '12px', color: C.textMuted }}>{item.name}</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: item.color, marginLeft: 'auto' }}>{item.pct}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Рекомендация Apple Health style */}
              <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(59, 130, 246, 0.08)', borderRadius: 10, border: '1px solid rgba(59, 130, 246, 0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>💡</div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: C.blue }}>Чаты растут быстрее</div>
                    <div style={{ fontSize: '10px', color: C.textMuted }}>Рассмотрите увеличение штата</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 5: AI Agent */}
            <div className="hover-lift card-glow" style={{
              backgroundColor: C.bgCard, borderRadius: 20, padding: '24px',
              border: `1px solid ${C.border}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: C.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px',
                }}>🤖</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>ИИ-ассистент</div>
                  <div style={{ fontSize: '11px', color: C.green }}>● Онлайн</div>
                </div>
              </div>
              
              <div style={{ padding: '12px', background: C.bgAlt, borderRadius: 12, marginBottom: '12px' }}>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.5 }}>
                  <strong style={{ color: C.purple }}>Инсайт:</strong> Конверсия отдела звонков выросла на 12% после внедрения скриптов.
                </p>
              </div>
              
              <div style={{ padding: '12px', background: C.bgAlt, borderRadius: 12, marginBottom: '12px' }}>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.5 }}>
                  <strong style={{ color: C.orange }}>Рекомендация:</strong> Провести обучение для 3 сотрудников отдела маркетинга.
                </p>
              </div>
              
              {/* Рекомендация Apple Health style */}
              <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 10, border: '1px solid rgba(16, 185, 129, 0.15)', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>✓</div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: C.green }}>2 новых инсайта</div>
                    <div style={{ fontSize: '10px', color: C.textMuted }}>Нажмите для просмотра</div>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="text" placeholder="Спросите ИИ..." style={{
                  flex: 1, padding: '10px 14px', borderRadius: 10,
                  border: `1px solid ${C.border}`, backgroundColor: C.bgAlt,
                  color: C.text, fontSize: '12px',
                }} />
                <button style={{
                  padding: '10px 16px', borderRadius: 10,
                  background: C.gradient, border: 'none',
                  color: '#fff', fontWeight: 600, fontSize: '12px', cursor: 'pointer',
                }}>→</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section style={{ padding: '100px 20px', backgroundColor: C.bgAlt, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-2px' }}>
              Возможности <span className="gradient-text">платформы</span>
            </h2>
          </div>

          {/* Светофор метрик - главный виджет */}
          <div className="hover-lift" style={{
            backgroundColor: C.bgCard, borderRadius: 24, padding: '40px',
            border: `1px solid ${C.border}`, marginBottom: '40px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), transparent)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '20px', fontWeight: 800 }}>🚦 Светофор метрик</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.green, boxShadow: `0 0 10px ${C.green}` }}></div>
                <span style={{ fontSize: '13px', color: C.green, fontWeight: 600 }}>Система работает</span>
              </div>
            </div>
            
            {/* Три круга светофора */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '32px' }}>
              {/* Зелёный - активный */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: 100, height: 100, borderRadius: '50%',
                  background: `radial-gradient(circle at 30% 30%, #4ADE80, ${C.green})`,
                  boxShadow: `0 0 40px rgba(34, 197, 94, 0.5), 0 0 80px rgba(34, 197, 94, 0.3), inset 0 -10px 20px rgba(0,0,0,0.2)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '40px', marginBottom: '12px',
                }}>✓</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.green }}>Всё хорошо</div>
                <div style={{ fontSize: '12px', color: C.textMuted }}>12 метрик в норме</div>
              </div>
              
              {/* Жёлтый - полупрозрачный */}
              <div style={{ textAlign: 'center', opacity: 0.4 }}>
                <div style={{
                  width: 100, height: 100, borderRadius: '50%',
                  background: `radial-gradient(circle at 30% 30%, #FCD34D, ${C.orange})`,
                  boxShadow: `0 0 20px rgba(245, 158, 11, 0.3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '40px', marginBottom: '12px',
                }}>!</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.orange }}>Внимание</div>
                <div style={{ fontSize: '12px', color: C.textMuted }}>3 требуют внимания</div>
              </div>
              
              {/* Красный - полупрозрачный */}
              <div style={{ textAlign: 'center', opacity: 0.4 }}>
                <div style={{
                  width: 100, height: 100, borderRadius: '50%',
                  background: `radial-gradient(circle at 30% 30%, #FCA5A5, ${C.red})`,
                  boxShadow: `0 0 20px rgba(239, 68, 68, 0.3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '40px', marginBottom: '12px',
                }}>✗</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.red }}>Проблема</div>
                <div style={{ fontSize: '12px', color: C.textMuted }}>0 критических</div>
              </div>
            </div>
            
            {/* Статус-бар */}
            <div style={{ padding: '20px', background: C.bgAlt, borderRadius: 16, display: 'flex', justifyContent: 'space-around', marginBottom: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: C.green }}>12</div>
                <div style={{ fontSize: '12px', color: C.textMuted }}>Зелёных</div>
              </div>
              <div style={{ width: 1, background: C.border }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: C.orange }}>3</div>
                <div style={{ fontSize: '12px', color: C.textMuted }}>Жёлтых</div>
              </div>
              <div style={{ width: 1, background: C.border }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: C.red }}>0</div>
                <div style={{ fontSize: '12px', color: C.textMuted }}>Красных</div>
              </div>
            </div>

            {/* Прозрачность расчётов - детализация метрик */}
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '24px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: C.text }}>📋 Как рассчитывается светофор</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {/* Зелёные метрики */}
                <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: 12, border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: C.green }}></div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: C.green }}>Зелёный (норма)</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Конверсия звонков', value: '78%', norm: '≥70%' },
                      { name: 'Время ответа', value: '12с', norm: '≤30с' },
                      { name: 'NPS клиентов', value: '9.2', norm: '≥8.0' },
                      { name: 'Активность команды', value: '94%', norm: '≥85%' },
                    ].map((m, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                        <span style={{ color: C.textMuted }}>{m.name}</span>
                        <span style={{ color: C.text }}>{m.value} <span style={{ color: C.green }}>(норма: {m.norm})</span></span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Жёлтые метрики */}
                <div style={{ padding: '16px', background: 'rgba(245, 158, 11, 0.05)', borderRadius: 12, border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: C.orange }}></div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: C.orange }}>Жёлтый (внимание)</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Колл-центр конверсия', value: '58%', norm: 'норма ≥70%', warning: true },
                      { name: 'Пропущенные звонки', value: '47', norm: 'норма ≤20', warning: true },
                      { name: 'Очередь ожидания', value: '4мин', norm: 'норма ≤2мин', warning: true },
                    ].map((m, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                        <span style={{ color: C.textMuted }}>{m.name}</span>
                        <span style={{ color: C.orange }}>{m.value} <span style={{ color: C.textLight }}>({m.norm})</span></span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Красные метрики */}
                <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.05)', borderRadius: 12, border: '1px solid rgba(239, 68, 68, 0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: C.red }}></div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: C.red }}>Красный (критично)</span>
                  </div>
                  <div style={{ padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>✓</div>
                    <div style={{ fontSize: '12px', color: C.green }}>Нет критических</div>
                    <div style={{ fontSize: '10px', color: C.textMuted, marginTop: '4px' }}>Критично = отклонение &gt;50% от нормы</div>
                  </div>
                </div>
              </div>

              {/* Критерии определения статуса */}
              <div style={{ marginTop: '16px', padding: '16px', background: C.bgAlt, borderRadius: 12 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: C.text, marginBottom: '8px' }}>📐 Критерии статуса:</div>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.green }}></div>
                    <span style={{ color: C.textMuted }}>Зелёный: значение в пределах нормы (0-20% отклонение)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.orange }}></div>
                    <span style={{ color: C.textMuted }}>Жёлтый: умеренное отклонение (20-50% от нормы)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.red }}></div>
                    <span style={{ color: C.textMuted }}>Красный: критичное отклонение (&gt;50% от нормы)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Остальные возможности */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { icon: '🤖', title: 'ИИ-ассистент', desc: 'Персональные рекомендации и инсайты' },
              { icon: '📊', title: 'Аналитика', desc: 'Виджеты для любых метрик' },
              { icon: '📞', title: 'Транскрибация', desc: 'Анализ всех звонков автоматически' },
              { icon: '🔔', title: 'Алерты', desc: 'Уведомления о важном в Telegram' },
              { icon: '👥', title: 'Рейтинг команды', desc: 'Геймификация и мотивация' },
              { icon: '🔗', title: 'Интеграции', desc: 'CRM, АТС, мессенджеры' },
              { icon: '📱', title: 'Мобильный доступ', desc: 'Вся аналитика в кармане' },
              { icon: '🎯', title: 'Цели и KPI', desc: 'Отслеживание прогресса' },
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{
                backgroundColor: C.bgCard, borderRadius: 16, padding: '24px',
                border: `1px solid ${C.border}`, textAlign: 'center',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</div>
                <div style={{ fontSize: '12px', color: C.textMuted }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Конструктор виджетов */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 20px', borderRadius: 100,
                background: 'rgba(139, 92, 246, 0.1)', border: `1px solid rgba(139, 92, 246, 0.2)`,
                marginBottom: '20px',
              }}>
                <span style={{ fontSize: '16px' }}>🧩</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: C.purple }}>Конструктор виджетов</span>
              </div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-1px' }}>
                Не нашли нужный виджет?
              </h3>
              <p style={{ fontSize: '18px', color: C.textMuted, maxWidth: '600px', margin: '0 auto' }}>
                тАйга создаст виджет под ваши потребности <span style={{ color: C.purple, fontWeight: 700 }}>за минуты</span>
              </p>
            </div>

            {/* Пример совмещённого виджета */}
            <div className="hover-lift" style={{
              backgroundColor: C.bgCard, borderRadius: 24, padding: '32px',
              border: `1px solid ${C.border}`, maxWidth: '800px', margin: '0 auto',
              textAlign: 'left',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: C.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px',
                  }}>🧩</div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700 }}>Мой виджет: Эффективность отдела</div>
                    <div style={{ fontSize: '12px', color: C.textMuted }}>Создан за 2 минуты • 2 источника данных</div>
                  </div>
                </div>
                <div style={{
                  padding: '6px 14px', borderRadius: 20,
                  background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)',
                  fontSize: '12px', color: C.green, fontWeight: 600,
                }}>
                  ✓ Активен
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Блок 1: Эффективность отдела */}
                <div style={{ padding: '20px', background: C.bgAlt, borderRadius: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '16px' }}>📊</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: C.text }}>Эффективность отдела продаж</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{
                      width: 80, height: 80, borderRadius: '50%',
                      background: `conic-gradient(${C.green} 0deg ${0.78 * 360}deg, rgba(255,255,255,0.1) ${0.78 * 360}deg 360deg)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{
                        width: 60, height: 60, borderRadius: '50%', background: C.bgAlt,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column',
                      }}>
                        <span style={{ fontSize: '20px', fontWeight: 800, color: C.green }}>78%</span>
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '4px' }}>Цель: 85%</div>
                      <div style={{ fontSize: '11px', color: C.textLight }}>До цели: 7%</div>
                      <div style={{ marginTop: '8px', height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ width: '78%', height: '100%', background: C.green, borderRadius: 2 }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div style={{ padding: '8px', background: C.bgCard, borderRadius: 8, textAlign: 'center' }}>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: C.text }}>156</div>
                      <div style={{ fontSize: '10px', color: C.textMuted }}>Звонков сегодня</div>
                    </div>
                    <div style={{ padding: '8px', background: C.bgCard, borderRadius: 8, textAlign: 'center' }}>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: C.green }}>+12%</div>
                      <div style={{ fontSize: '10px', color: C.textMuted }}>К прошлой неделе</div>
                    </div>
                  </div>
                </div>

                {/* Блок 2: Обработка пропущенных */}
                <div style={{ padding: '20px', background: C.bgAlt, borderRadius: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '16px' }}>📞</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: C.text }}>Обработка пропущенных</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: C.orange }}>23</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Пропущено</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: C.green }}>18</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Перезвонили</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: C.text }}>78%</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Обработка</div>
                    </div>
                  </div>

                  <div style={{ padding: '12px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: 10, border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px' }}>⚠️</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: C.orange }}>5 клиентов ждут звонка</span>
                    </div>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>
                      Среднее время ожидания: 2ч 15мин
                    </div>
                  </div>

                  <button style={{
                    marginTop: '12px', width: '100%', padding: '10px', borderRadius: 8,
                    background: C.gradient, border: 'none',
                    color: '#fff', fontWeight: 600, fontSize: '12px', cursor: 'pointer',
                  }}>
                    Перезвонить всем →
                  </button>
                </div>
              </div>

              {/* Подсказка о создании */}
              <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(139, 92, 246, 0.05)', borderRadius: 12, border: `1px solid rgba(139, 92, 246, 0.1)` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '20px' }}>✨</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: C.purple, marginBottom: '2px' }}>
                      Как это было создано:
                    </div>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>
                      «Покажи эффективность отдела продаж и статус пропущенных звонков на одном виджете» → ИИ создал за 2 минуты
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section id="signup" style={{ padding: '100px 20px', backgroundColor: C.bg, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-block', padding: '12px 28px', borderRadius: 100,
              background: C.gradient, marginBottom: '24px', fontSize: '14px',
              color: '#FFFFFF', fontWeight: 700,
            }}>
              🚀 Ранний доступ
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '16px', letterSpacing: '-2px' }}>
              Запишитесь <span className="gradient-text">первыми</span>
            </h2>
            <p style={{ fontSize: '16px', color: C.textMuted }}>
              Станьте одним из первых пользователей и помогите нам создать идеальный продукт
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="hover-lift" style={{
              backgroundColor: C.bgCard, borderRadius: 24, padding: '40px',
              border: `1px solid ${C.border}`,
            }}>
              {/* Name */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: C.textMuted, marginBottom: '8px' }}>
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Как к вам обращаться?"
                  style={{
                    width: '100%', padding: '16px', borderRadius: 12,
                    border: `1px solid ${C.border}`, backgroundColor: C.bgAlt,
                    color: C.text, fontSize: '15px',
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: C.textMuted, marginBottom: '8px' }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  style={{
                    width: '100%', padding: '16px', borderRadius: 12,
                    border: `1px solid ${C.border}`, backgroundColor: C.bgAlt,
                    color: C.text, fontSize: '15px',
                  }}
                />
              </div>

              {/* Role */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: C.textMuted, marginBottom: '8px' }}>
                  Роль в компании (должность)
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  placeholder="Например: Руководитель отдела продаж"
                  style={{
                    width: '100%', padding: '16px', borderRadius: 12,
                    border: `1px solid ${C.border}`, backgroundColor: C.bgAlt,
                    color: C.text, fontSize: '15px',
                  }}
                />
              </div>

              {/* Industry */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: C.textMuted, marginBottom: '8px' }}>
                  Отрасль вашей компании
                </label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  placeholder="Например: Телеком, Финтех, E-commerce"
                  style={{
                    width: '100%', padding: '16px', borderRadius: 12,
                    border: `1px solid ${C.border}`, backgroundColor: C.bgAlt,
                    color: C.text, fontSize: '15px',
                  }}
                />
              </div>

              {/* Ideas */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: C.textMuted, marginBottom: '8px' }}>
                  💡 Какие функции вы хотели бы видеть в тАйга?
                </label>
                <textarea
                  value={formData.ideas}
                  onChange={(e) => setFormData({...formData, ideas: e.target.value})}
                  placeholder="Расскажите о ваших потребностях и ожиданиях от платформы..."
                  rows={4}
                  style={{
                    width: '100%', padding: '16px', borderRadius: 12,
                    border: `1px solid ${C.border}`, backgroundColor: C.bgAlt,
                    color: C.text, fontSize: '15px', resize: 'vertical',
                  }}
                />
              </div>

              {/* Interview checkbox */}
              <div style={{ marginBottom: '28px' }}>
                <label style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  cursor: 'pointer',
                }}>
                  <input
                    type="checkbox"
                    checked={formData.agreeInterview}
                    onChange={(e) => setFormData({...formData, agreeInterview: e.target.checked})}
                    style={{
                      width: 20, height: 20, marginTop: 2,
                      accentColor: C.purple,
                    }}
                  />
                  <span style={{ fontSize: '14px', color: C.textMuted, lineHeight: 1.5 }}>
                    <strong style={{ color: C.text }}>Согласен на участие в интервью</strong> для улучшения сервиса 
                    (мы свяжемся с вами для обсуждения ваших потребностей)
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="animate-glow"
                style={{
                  width: '100%', padding: '18px', borderRadius: 14,
                  background: C.gradient, border: 'none',
                  color: '#FFFFFF', fontWeight: 700, fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                ✨ Записаться на ранний доступ
              </button>

              <p style={{ textAlign: 'center', fontSize: '12px', color: C.textLight, marginTop: '16px' }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          ) : (
            <div className="hover-lift" style={{
              backgroundColor: C.bgCard, borderRadius: 24, padding: '48px',
              border: `1px solid rgba(16, 185, 129, 0.3)`,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>🎉</div>
              <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>
                Вы в списке!
              </h3>
              <p style={{ fontSize: '16px', color: C.textMuted, marginBottom: '24px' }}>
                Спасибо за интерес к тАйга! Мы свяжемся с вами, когда сервис будет готов к использованию.
              </p>
              {formData.agreeInterview && (
                <div style={{ padding: '16px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: 12, marginBottom: '20px' }}>
                  <p style={{ fontSize: '14px', color: C.purple }}>
                    📞 Мы обязательно свяжемся с вами для интервью о ваших потребностях!
                  </p>
                </div>
              )}
              <div style={{ fontSize: '14px', color: C.textLight }}>
                Проверьте почту <strong style={{ color: C.text }}>{formData.email}</strong>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', borderTop: `1px solid ${C.border}`, backgroundColor: C.bgAlt }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
            тАйга
          </div>
          <div style={{ color: C.textMuted, fontSize: '13px' }}>
            © 2026 тАйга. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 10: Онбординг нового пользователя
// ============================================
function Concept10() {
  const [step, setStep] = useState(0)
  const [widgetPosition, setWidgetPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [showCreateWidget, setShowCreateWidget] = useState(false)
  const [customWidgetName, setCustomWidgetName] = useState('')
  const [customWidgetCreated, setCustomWidgetCreated] = useState(false)
  const [alertThreshold, setAlertThreshold] = useState(50)

  // Цветовая палитра
  const C = {
    bg: '#0F0F1A',
    bgAlt: '#1A1A2E',
    bgCard: '#16162A',
    bgWidget: '#1E1E38',
    text: '#FFFFFF',
    textMuted: '#9CA3AF',
    textLight: '#6B7280',
    purple: '#8B5CF6',
    purpleLight: '#A78BFA',
    blue: '#3B82F6',
    cyan: '#06B6D4',
    green: '#10B981',
    orange: '#F59E0B',
    red: '#EF4444',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
    border: 'rgba(139, 92, 246, 0.2)',
  }

  // Шаги онбординга
  const steps = [
    { id: 'welcome', title: 'Добро пожаловать!', subtitle: 'Давайте познакомимся с тАйга' },
    { id: 'traffic', title: 'Светофор метрик', subtitle: 'Ваш главный индикатор состояния бизнеса' },
    { id: 'widgets', title: 'Виджеты', subtitle: 'Вся информация на одном экране' },
    { id: 'transparency', title: 'Прозрачность расчётов', subtitle: 'Понимайте, откуда берутся цифры' },
    { id: 'settings', title: 'Настройка виджетов', subtitle: 'Настройте уведомления под себя' },
    { id: 'drag', title: 'Перемещение виджетов', subtitle: 'Создайте свой идеальный дашборд' },
    { id: 'templates', title: 'Шаблоны дашбордов', subtitle: 'Готовые решения для разных задач' },
    { id: 'create', title: 'Создание виджета', subtitle: 'ИИ поможет создать любой виджет' },
    { id: 'done', title: 'Готово!', subtitle: 'Вы освоили основные возможности' },
  ]

  const currentStep = steps[step]

  const nextStep = () => setStep(prev => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0))

  return (
    <div style={{ minHeight: '100vh', backgroundColor: C.bg, color: C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes glow-green {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8); }
        }
        @keyframes highlight-pulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 0 8px rgba(139, 92, 246, 0.3); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6, #3B82F6, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .animate-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-slide { animation: slide-in 0.5s ease-out; }
        .animate-bounce { animation: bounce 2s ease-in-out infinite; }
        .animate-glow-green { animation: glow-green 2s ease-in-out infinite; }
        .highlight { animation: highlight-pulse 1.5s ease-in-out infinite; }
        
        .tooltip {
          position: absolute;
          background: #8B5CF6;
          color: white;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 13px;
          max-width: 280px;
          z-index: 1000;
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.4);
        }
        .tooltip::before {
          content: '';
          position: absolute;
          border: 8px solid transparent;
          border-top-color: #8B5CF6;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .draggable {
          cursor: grab;
          user-select: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .draggable:active {
          cursor: grabbing;
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
        }
      `}</style>

      {/* Header */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, padding: '16px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backgroundColor: 'rgba(15, 15, 26, 0.95)', backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.border}`, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="animate-glow" style={{
            width: 36, height: 36, borderRadius: 10,
            background: C.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>✨</div>
          <span style={{ fontSize: '18px', fontWeight: 800 }}>
            тАйга
          </span>
        </div>
        
        {/* Progress bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                width: i === step ? 24 : 8, height: 8,
                borderRadius: 4,
                backgroundColor: i <= step ? C.purple : 'rgba(139, 92, 246, 0.2)',
                transition: 'all 0.3s',
              }} />
            ))}
          </div>
          <span style={{ fontSize: '13px', color: C.textMuted }}>
            {step + 1} / {steps.length}
          </span>
        </div>
        
        <button style={{
          padding: '8px 16px', borderRadius: 8,
          border: `1px solid ${C.border}`, background: 'transparent',
          color: C.textMuted, fontSize: '13px', cursor: 'pointer',
        }}>Пропустить</button>
      </header>

      {/* Main Content */}
      <div style={{ paddingTop: 80, display: 'flex', minHeight: '100vh' }}>
        
        {/* Sidebar - ИИ-ассистент */}
        <aside style={{
          width: 320, borderRight: `1px solid ${C.border}`,
          backgroundColor: C.bgAlt, padding: '24px 16px',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '16px', background: C.bgCard, borderRadius: 16,
            marginBottom: '20px',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: C.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px',
            }}>🤖</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>ИИ-ассистент</div>
              <div style={{ fontSize: '12px', color: C.green }}>● Онлайн</div>
            </div>
          </div>

          {/* Рекомендации ИИ */}
          <div style={{ flex: 1, overflow: 'auto' }}>
            <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Рекомендации
            </div>

            {/* Контекстные рекомендации по шагам */}
            {step === 0 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>👋</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.purple }}>Привет!</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Я ваш ИИ-ассистент. Помогу освоить тАйга за 5 минут. Готовы начать увлекательное путешествие?
                </p>
              </div>
            )}

            {step === 1 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>🚦</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.green }}>Светофор метрик</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Зелёный — всё хорошо. Жёлтый — обратите внимание. Красный — требует немедленного действия. Один взгляд — и вы в курсе!
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>📊</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.blue }}>Виджеты</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Каждый виджет показывает важную метрику. Нажмите на любой — увидите детали и историю изменений.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>🔍</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.cyan }}>Прозрачность</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Нажмите на любую цифру — я покажу, откуда она взялась. Все расчёты прозрачны и понятны.
                </p>
              </div>
            )}

            {step === 4 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>⚙️</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.orange }}>Настройки</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Настройте пороги уведомлений. Виджет сам сообщит, когда метрика выйдет за пределы нормы.
                </p>
              </div>
            )}

            {step === 5 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>✋</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.purple }}>Drag & Drop</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Перетащите виджет в любое место. Расположите так, как удобно именно вам!
                </p>
              </div>
            )}

            {step === 6 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>📋</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.green }}>Шаблоны</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Сохраните текущую раскладку как шаблон. Переключайтесь между шаблонами для разных задач.
                </p>
              </div>
            )}

            {step === 7 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>✨</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.purple }}>Создание виджета</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Расскажите, какой виджет вам нужен — я создам его за секунды. Просто опишите задачу!
                </p>
              </div>
            )}

            {step === 8 && (
              <div className="animate-slide" style={{ padding: '16px', background: C.bgCard, borderRadius: 12, marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>🎉</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.green }}>Поздравляю!</span>
                </div>
                <p style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.6 }}>
                  Вы освоили основные возможности! Теперь вы можете эффективно управлять своим бизнесом.
                </p>
              </div>
            )}

            {/* Быстрые действия */}
            <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '12px', marginTop: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Быстрые действия
            </div>
            
            <button style={{
              width: '100%', padding: '12px', borderRadius: 10,
              background: C.bgCard, border: `1px solid ${C.border}`,
              color: C.text, fontSize: '13px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '8px',
            }}>
              <span>📈</span> Создать отчёт
            </button>
            
            <button style={{
              width: '100%', padding: '12px', borderRadius: 10,
              background: C.bgCard, border: `1px solid ${C.border}`,
              color: C.text, fontSize: '13px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span>🔔</span> Настроить уведомления
            </button>
          </div>

          {/* Чат с ИИ */}
          <div style={{ marginTop: '16px' }}>
            <div style={{
              display: 'flex', gap: '8px',
              padding: '12px', background: C.bgCard, borderRadius: 12,
            }}>
              <input type="text" placeholder="Спросите ИИ..." style={{
                flex: 1, padding: '10px', borderRadius: 8,
                border: `1px solid ${C.border}`, background: C.bgAlt,
                color: C.text, fontSize: '13px',
              }} />
              <button style={{
                padding: '10px 14px', borderRadius: 8,
                background: C.gradient, border: 'none',
                color: '#fff', fontWeight: 600, fontSize: '13px', cursor: 'pointer',
              }}>→</button>
            </div>
          </div>
        </aside>

        {/* Main Dashboard Area */}
        <main style={{ flex: 1, padding: '24px', position: 'relative' }}>
          
          {/* Шаг 0: Приветствие */}
          {step === 0 && (
            <div className="animate-slide" style={{
              textAlign: 'center', paddingTop: '100px',
            }}>
              <div style={{ fontSize: '80px', marginBottom: '24px' }}>✨</div>
              <h1 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '16px' }}>
                Добро пожаловать в <span className="gradient-text">тАйга</span>
              </h1>
              <p style={{ fontSize: '20px', color: C.textMuted, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                Интерактивная платформа для управления бизнесом. Научим всему за 5 минут!
              </p>
              <button onClick={nextStep} className="animate-glow" style={{
                padding: '18px 48px', borderRadius: 14,
                background: C.gradient, border: 'none',
                color: '#fff', fontWeight: 700, fontSize: '17px', cursor: 'pointer',
              }}>
                Начать знакомство →
              </button>
            </div>
          )}

          {/* Шаг 1: Светофор метрик */}
          {step === 1 && (
            <div className="animate-slide">
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                🚦 Светофор метрик
              </h2>
              <p style={{ color: C.textMuted, marginBottom: '32px' }}>
                Ваш главный индикатор — один взгляд и вы понимаете состояние бизнеса
              </p>

              <div className="highlight" style={{
                background: C.bgCard, borderRadius: 24, padding: '40px',
                border: `1px solid ${C.border}`, marginBottom: '32px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700 }}>Общий статус системы</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: C.green, boxShadow: `0 0 10px ${C.green}` }}></div>
                    <span style={{ color: C.green, fontWeight: 600 }}>Всё хорошо</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginBottom: '32px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div className="animate-glow-green" style={{
                      width: 100, height: 100, borderRadius: '50%',
                      background: `radial-gradient(circle at 30% 30%, #4ADE80, ${C.green})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '44px', marginBottom: '12px',
                    }}>✓</div>
                    <div style={{ fontWeight: 700, color: C.green, marginBottom: '4px' }}>Хорошо</div>
                    <div style={{ fontSize: '12px', color: C.textMuted }}>12 метрик</div>
                  </div>
                  
                  <div style={{ textAlign: 'center', opacity: 0.5 }}>
                    <div style={{
                      width: 100, height: 100, borderRadius: '50%',
                      background: `radial-gradient(circle at 30% 30%, #FCD34D, ${C.orange})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '44px', marginBottom: '12px',
                    }}>!</div>
                    <div style={{ fontWeight: 700, color: C.orange, marginBottom: '4px' }}>Внимание</div>
                    <div style={{ fontSize: '12px', color: C.textMuted }}>3 метрики</div>
                  </div>
                  
                  <div style={{ textAlign: 'center', opacity: 0.5 }}>
                    <div style={{
                      width: 100, height: 100, borderRadius: '50%',
                      background: `radial-gradient(circle at 30% 30%, #FCA5A5, ${C.red})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '44px', marginBottom: '12px',
                    }}>✗</div>
                    <div style={{ fontWeight: 700, color: C.red, marginBottom: '4px' }}>Проблема</div>
                    <div style={{ fontSize: '12px', color: C.textMuted }}>0 метрик</div>
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(139, 92, 246, 0.1)', borderRadius: 16, padding: '20px', border: `1px solid ${C.purple}30` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>💡</span>
                  <span style={{ fontWeight: 600, color: C.purple }}>Совет ИИ-ассистента</span>
                </div>
                <p style={{ color: C.textMuted, fontSize: '14px' }}>
                  Проверяйте светофор каждое утро — это займёт 5 секунд, но даст полное понимание состояния дел.
                </p>
              </div>
            </div>
          )}

          {/* Шаг 2: Виджеты */}
          {step === 2 && (
            <div className="animate-slide">
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                📊 Виджеты
              </h2>
              <p style={{ color: C.textMuted, marginBottom: '32px' }}>
                Каждый виджет — это важная метрика вашего бизнеса
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
                {/* Widget 1 */}
                <div className="highlight" style={{
                  background: C.bgCard, borderRadius: 16, padding: '24px',
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px' }}>ЗВОНКИ СЕГОДНЯ</div>
                  <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>1,247</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: C.green, fontSize: '14px' }}>↑ 12%</span>
                    <span style={{ color: C.textMuted, fontSize: '12px' }}>от вчерашнего</span>
                  </div>
                </div>

                {/* Widget 2 */}
                <div style={{
                  background: C.bgCard, borderRadius: 16, padding: '24px',
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px' }}>КОНВЕРСИЯ</div>
                  <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>78%</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: C.green, fontSize: '14px' }}>↑ 5%</span>
                    <span style={{ color: C.textMuted, fontSize: '12px' }}>от среднего</span>
                  </div>
                </div>

                {/* Widget 3 */}
                <div style={{
                  background: C.bgCard, borderRadius: 16, padding: '24px',
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px' }}>АКТИВНЫЕ СОТРУДНИКИ</div>
                  <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>24</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: C.green, fontSize: '14px' }}>●</span>
                    <span style={{ color: C.textMuted, fontSize: '12px' }}>из 26 всего</span>
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderRadius: 16, padding: '20px', border: `1px solid ${C.green}30` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span style={{ fontWeight: 600, color: C.green }}>Рекомендация</span>
                </div>
                <p style={{ color: C.textMuted, fontSize: '14px' }}>
                  Нажмите на виджет, чтобы увидеть детали и историю изменений. Попробуйте!
                </p>
              </div>
            </div>
          )}

          {/* Шаг 3: Прозрачность расчётов */}
          {step === 3 && (
            <div className="animate-slide">
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                🔍 Прозрачность расчётов
              </h2>
              <p style={{ color: C.textMuted, marginBottom: '32px' }}>
                Каждая цифра имеет понятную историю
              </p>

              <div className="highlight" style={{
                background: C.bgCard, borderRadius: 16, padding: '24px',
                border: `1px solid ${C.border}`, marginBottom: '24px',
              }}>
                <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px' }}>ЗВОНКИ СЕГОДНЯ</div>
                <div style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px' }}>1,247</div>
                
                <div style={{ background: C.bgAlt, borderRadius: 12, padding: '16px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: C.purple }}>
                    📋 Как рассчитано:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: C.textMuted }}>Входящие звонки</span>
                      <span style={{ color: C.text }}>847</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: C.textMuted }}>Исходящие звонки</span>
                      <span style={{ color: C.text }}>400</span>
                    </div>
                    <div style={{ height: 1, background: C.border, margin: '4px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 600 }}>
                      <span style={{ color: C.text }}>Итого</span>
                      <span style={{ color: C.purple }}>1,247</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: C.bgCard, borderRadius: 12, padding: '16px', border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px' }}>Источник данных</div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>📞 АТС телефония</div>
                </div>
                <div style={{ background: C.bgCard, borderRadius: 12, padding: '16px', border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px' }}>Последнее обновление</div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>сейчас</div>
                </div>
              </div>
            </div>
          )}

          {/* Шаг 4: Настройка виджетов */}
          {step === 4 && (
            <div className="animate-slide">
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                ⚙️ Настройка виджетов
              </h2>
              <p style={{ color: C.textMuted, marginBottom: '32px' }}>
                Установите пороги для уведомлений и изменения цвета
              </p>

              <div className="highlight" style={{
                background: C.bgCard, borderRadius: 16, padding: '24px',
                border: `1px solid ${C.border}`, marginBottom: '24px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700 }}>Конверсия</div>
                    <div style={{ fontSize: '12px', color: C.textMuted }}>Настройка порогов уведомлений</div>
                  </div>
                  <div style={{
                    padding: '6px 14px', borderRadius: 20,
                    background: 'rgba(16, 185, 129, 0.15)', color: C.green,
                    fontSize: '13px', fontWeight: 600,
                  }}>78% — норма</div>
                </div>

                {/* Slider для настройки */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', color: C.red }}>Критично: {'<'} 40%</span>
                    <span style={{ fontSize: '12px', color: C.orange }}>Внимание: 40-60%</span>
                    <span style={{ fontSize: '12px', color: C.green }}>Норма: {'>'} 60%</span>
                  </div>
                  <div style={{
                    height: 8, borderRadius: 4,
                    background: `linear-gradient(90deg, ${C.red} 0%, ${C.red} 40%, ${C.orange} 40%, ${C.orange} 60%, ${C.green} 60%, ${C.green} 100%)`,
                  }} />
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%', background: C.text,
                    marginTop: -12, marginLeft: '78%', boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }} />
                </div>

                {/* Настройки уведомлений */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: 18, height: 18, accentColor: C.purple }} />
                    <span style={{ fontSize: '14px' }}>Telegram уведомление при переходе в красную зону</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: 18, height: 18, accentColor: C.purple }} />
                    <span style={{ fontSize: '14px' }}>Email отчёт при падении более 20%</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ width: 18, height: 18, accentColor: C.purple }} />
                    <span style={{ fontSize: '14px' }}>Ежедневный дайджест в 9:00</span>
                  </label>
                </div>
              </div>

              <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderRadius: 16, padding: '20px', border: `1px solid ${C.orange}30` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🔔</span>
                  <span style={{ fontWeight: 600, color: C.orange }}>Настройте под себя</span>
                </div>
                <p style={{ color: C.textMuted, fontSize: '14px' }}>
                  Получайте уведомления только о важном. Никакого спама — только критичные изменения.
                </p>
              </div>
            </div>
          )}

          {/* Шаг 5: Перемещение виджетов */}
          {step === 5 && (
            <div className="animate-slide">
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                ✋ Перемещение виджетов
              </h2>
              <p style={{ color: C.textMuted, marginBottom: '32px' }}>
                Расположите виджеты так, как удобно вам
              </p>

              <div style={{
                background: C.bgCard, borderRadius: 16, padding: '32px',
                border: `1px solid ${C.border}`, marginBottom: '24px',
              }}>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {/* Draggable widgets */}
                  <div 
                    className="draggable highlight"
                    style={{
                      width: 180, background: C.bgWidget, borderRadius: 12, padding: '20px',
                      border: `1px solid ${C.purple}50`,
                      transform: `translate(${widgetPosition.x}px, ${widgetPosition.y}px)`,
                    }}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseMove={(e) => {
                      if (isDragging) {
                        setWidgetPosition({ x: e.movementX, y: e.movementY })
                      }
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
                    <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '4px' }}>ЗВОНКИ</div>
                    <div style={{ fontSize: '20px', fontWeight: 800 }}>1,247</div>
                    <div style={{ 
                      position: 'absolute', top: 8, right: 8,
                      width: 20, height: 20, borderRadius: '50%',
                      background: C.purple, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px',
                    }}>⋮⋮</div>
                  </div>

                  <div className="draggable" style={{
                    width: 180, background: C.bgWidget, borderRadius: 12, padding: '20px',
                    border: `1px solid ${C.border}`,
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>📈</div>
                    <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '4px' }}>КОНВЕРСИЯ</div>
                    <div style={{ fontSize: '20px', fontWeight: 800 }}>78%</div>
                  </div>

                  <div className="draggable" style={{
                    width: 180, background: C.bgWidget, borderRadius: 12, padding: '20px',
                    border: `1px solid ${C.border}`,
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>👥</div>
                    <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '4px' }}>АКТИВНЫЕ</div>
                    <div style={{ fontSize: '20px', fontWeight: 800 }}>24</div>
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(139, 92, 246, 0.1)', borderRadius: 16, padding: '20px', border: `1px solid ${C.purple}30` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>💡</span>
                  <span style={{ fontWeight: 600, color: C.purple }}>Попробуйте!</span>
                </div>
                <p style={{ color: C.textMuted, fontSize: '14px' }}>
                  Зажмите виджет и перетащите в новое место. Расстановка автоматически сохранится.
                </p>
              </div>
            </div>
          )}

          {/* Шаг 6: Шаблоны дашбордов */}
          {step === 6 && (
            <div className="animate-slide">
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                📋 Шаблоны дашбордов
              </h2>
              <p style={{ color: C.textMuted, marginBottom: '32px' }}>
                Сохраняйте и переключайтесь между раскладками
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '24px' }}>
                {/* Template 1 */}
                <div className="highlight" style={{
                  background: C.bgCard, borderRadius: 16, padding: '20px',
                  border: `2px solid ${C.purple}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 700 }}>📊 Оперативный</span>
                    <span style={{
                      padding: '4px 10px', borderRadius: 10,
                      background: C.purple, color: '#fff',
                      fontSize: '11px', fontWeight: 600,
                    }}>Активный</span>
                  </div>
                  <p style={{ fontSize: '12px', color: C.textMuted, marginBottom: '12px' }}>
                    Быстрый обзор ключевых метрик для ежедневной работы
                  </p>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: 40, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 40, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 40, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 40, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                  </div>
                </div>

                {/* Template 2 */}
                <div style={{
                  background: C.bgCard, borderRadius: 16, padding: '20px',
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 700 }}>👔 Руководитель</span>
                  </div>
                  <p style={{ fontSize: '12px', color: C.textMuted, marginBottom: '12px' }}>
                    Стратегические метрики и эффективность команды
                  </p>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: 60, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 60, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 60, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                  </div>
                </div>

                {/* Template 3 */}
                <div style={{
                  background: C.bgCard, borderRadius: 16, padding: '20px',
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 700 }}>⚙️ Администратор</span>
                  </div>
                  <p style={{ fontSize: '12px', color: C.textMuted, marginBottom: '12px' }}>
                    Технические метрики и состояние системы
                  </p>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: 35, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 35, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 35, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 35, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                    <div style={{ width: 35, height: 30, background: C.bgWidget, borderRadius: 4 }} />
                  </div>
                </div>
              </div>

              {/* Create new template */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)', borderRadius: 16, padding: '20px',
                border: `1px dashed ${C.green}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                cursor: 'pointer',
              }}>
                <span style={{ fontSize: '24px' }}>+</span>
                <span style={{ color: C.green, fontWeight: 600 }}>Создать свой шаблон</span>
              </div>
            </div>
          )}

          {/* Шаг 7: Создание виджета */}
          {step === 7 && (
            <div className="animate-slide">
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
                ✨ Создание виджета с ИИ
              </h2>
              <p style={{ color: C.textMuted, marginBottom: '32px' }}>
                Опишите, что вам нужно — ИИ создаст виджет за секунды
              </p>

              {!showCreateWidget ? (
                <div className="highlight" style={{
                  background: C.bgCard, borderRadius: 16, padding: '32px',
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Что вы хотите отслеживать?</h3>
                    <p style={{ color: C.textMuted, fontSize: '14px' }}>
                      Выберите пример или опишите свой виджет
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '24px' }}>
                    {[
                      '📊 Конверсия по дням недели',
                      '📈 Средняя длительность звонка',
                      '🎯 Выполнение плана продаж',
                      '👥 Рейтинг сотрудников',
                      '📞 Пропущенные звонки',
                      '⭐ NPS по отделам',
                    ].map((example, i) => (
                      <button key={i} onClick={() => { setCustomWidgetName(example); setShowCreateWidget(true); }} style={{
                        padding: '16px', borderRadius: 12,
                        background: C.bgAlt, border: `1px solid ${C.border}`,
                        color: C.text, fontSize: '14px', cursor: 'pointer',
                        textAlign: 'left', transition: 'all 0.2s',
                      }}>
                        {example}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <input
                      type="text"
                      placeholder="Опишите свой виджет..."
                      value={customWidgetName}
                      onChange={(e) => setCustomWidgetName(e.target.value)}
                      style={{
                        flex: 1, padding: '16px', borderRadius: 12,
                        border: `1px solid ${C.border}`, background: C.bgAlt,
                        color: C.text, fontSize: '15px',
                      }}
                    />
                    <button onClick={() => customWidgetName && setShowCreateWidget(true)} style={{
                      padding: '16px 24px', borderRadius: 12,
                      background: C.gradient, border: 'none',
                      color: '#fff', fontWeight: 600, cursor: 'pointer',
                    }}>Создать</button>
                  </div>
                </div>
              ) : !customWidgetCreated ? (
                <div style={{
                  background: C.bgCard, borderRadius: 16, padding: '32px',
                  border: `1px solid ${C.purple}`,
                  textAlign: 'center',
                }}>
                  <div className="animate-bounce" style={{ fontSize: '48px', marginBottom: '16px' }}>⏳</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
                    Создаю виджет "{customWidgetName}"...
                  </h3>
                  <p style={{ color: C.textMuted, fontSize: '14px', marginBottom: '24px' }}>
                    Анализирую данные, настраиваю визуализацию
                  </p>
                  <div style={{
                    height: 4, borderRadius: 2, background: C.bgAlt, overflow: 'hidden',
                    marginBottom: '24px',
                  }}>
                    <div style={{
                      width: '70%', height: '100%',
                      background: C.gradient,
                      animation: 'pulse-glow 1s ease-in-out infinite',
                    }} />
                  </div>
                  <button onClick={() => setCustomWidgetCreated(true)} style={{
                    padding: '12px 24px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, cursor: 'pointer',
                  }}>
                    Показать результат
                  </button>
                </div>
              ) : (
                <div style={{
                  background: C.bgCard, borderRadius: 16, padding: '32px',
                  border: `1px solid ${C.green}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px',
                    }}>✓</div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Виджет создан!</h3>
                      <p style={{ color: C.textMuted, fontSize: '13px' }}>{customWidgetName}</p>
                    </div>
                  </div>

                  {/* Created widget preview */}
                  <div style={{
                    background: C.bgWidget, borderRadius: 12, padding: '24px',
                    border: `1px solid ${C.border}`,
                  }}>
                    <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '12px' }}>
                      {customWidgetName.toUpperCase()}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '36px', fontWeight: 800 }}>87%</div>
                      <div style={{ color: C.green, fontSize: '14px', marginBottom: '6px' }}>↑ 12%</div>
                    </div>
                    {/* Mini chart */}
                    <svg viewBox="0 0 200 40" style={{ width: '100%', height: 40 }}>
                      <polyline
                        points="0,35 25,28 50,32 75,20 100,25 125,15 150,18 175,10 200,12"
                        fill="none" stroke={C.purple} strokeWidth="2" strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Шаг 8: Готово! */}
          {step === 8 && (
            <div className="animate-slide" style={{ textAlign: 'center', paddingTop: '60px' }}>
              <div style={{ fontSize: '80px', marginBottom: '24px' }}>🎉</div>
              <h1 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '16px' }}>
                Поздравляем!
              </h1>
              <p style={{ fontSize: '18px', color: C.textMuted, marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
                Вы освоили основные возможности тАйга. Теперь вы можете эффективно управлять своим бизнесом!
              </p>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px' }}>
                <div style={{
                  background: C.bgCard, borderRadius: 12, padding: '20px',
                  border: `1px solid ${C.border}`, textAlign: 'center', width: 150,
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>🚦</div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>Светофор</div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>Освоен</div>
                </div>
                <div style={{
                  background: C.bgCard, borderRadius: 12, padding: '20px',
                  border: `1px solid ${C.border}`, textAlign: 'center', width: 150,
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>📊</div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>Виджеты</div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>Освоены</div>
                </div>
                <div style={{
                  background: C.bgCard, borderRadius: 12, padding: '20px',
                  border: `1px solid ${C.border}`, textAlign: 'center', width: 150,
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>🤖</div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>ИИ-ассистент</div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>Готов</div>
                </div>
              </div>

              <button className="animate-glow" style={{
                padding: '18px 48px', borderRadius: 14,
                background: C.gradient, border: 'none',
                color: '#fff', fontWeight: 700, fontSize: '17px', cursor: 'pointer',
              }}>
                Начать работу →
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Navigation Footer */}
      {step > 0 && step < steps.length - 1 && (
        <div style={{
          position: 'fixed', bottom: 0, left: 320, right: 0,
          padding: '20px 32px',
          background: 'rgba(15, 15, 26, 0.95)', backdropFilter: 'blur(20px)',
          borderTop: `1px solid ${C.border}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <button onClick={prevStep} style={{
            padding: '12px 24px', borderRadius: 10,
            background: 'transparent', border: `1px solid ${C.border}`,
            color: C.text, cursor: 'pointer', fontSize: '14px',
          }}>
            ← Назад
          </button>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                style={{
                  width: 10, height: 10, borderRadius: '50%',
                  border: 'none',
                  background: i === step ? C.purple : i < step ? C.purpleLight : 'rgba(139, 92, 246, 0.2)',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
          
          <button onClick={nextStep} className="animate-glow" style={{
            padding: '12px 32px', borderRadius: 10,
            background: C.gradient, border: 'none',
            color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '14px',
          }}>
            Далее →
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// КОНЦЕПТ 11: Node-Tree конструктор сервисов (React Flow)
// ============================================
function Concept11() {
  return <Concept11Flow />
}

// ============================================
// КОНЦЕПТ 11 LEGACY: Старая версия (больше не используется)
// ============================================
function Concept11Legacy() {
  const [services, setServices] = useState([
    {
      id: 'calls',
      name: 'Записи разговоров',
      icon: '📞',
      description: 'Речевая аналитика и оценка разговоров',
      connected: true,
      position: { x: -380, y: -220 },
      stats: { calls: 1247, analyzed: 1156, score: 87 },
      settings: { autoAnalyze: true, keywords: ['покупка', 'цена', 'доставка'] }
    },
    {
      id: 'missed',
      name: 'Пропущенные звонки',
      icon: '📱',
      description: 'Отчёт по обработке пропущенных звонков',
      connected: true,
      position: { x: 380, y: -220 },
      stats: { missed: 47, callback: 38, lost: 9 },
      settings: { autoCallback: true, callbackTime: 30 }
    },
    {
      id: 'callcenter',
      name: 'Колл-центр',
      icon: '👥',
      description: '10 сотрудников с рейтингом работы',
      connected: false,
      position: { x: 0, y: 300 },
      stats: { operators: 10, active: 8, avgRating: 4.7 },
      settings: { ratingSystem: true, trainingMode: false }
    },
  ])

  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Привет! Я помогу настроить ваш дашборд. Вижу, что у вас подключено 2 сервиса из 3. Хотите подключить Колл-центр?' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [showSettings, setShowSettings] = useState(false)

  // Цветовая палитра
  const C = {
    bg: '#0A0A12',
    bgAlt: '#12121F',
    bgCard: '#1A1A2E',
    bgNode: '#1E1E38',
    text: '#FFFFFF',
    textMuted: '#9CA3AF',
    textLight: '#6B7280',
    purple: '#8B5CF6',
    purpleLight: '#A78BFA',
    blue: '#3B82F6',
    cyan: '#06B6D4',
    green: '#10B981',
    orange: '#F59E0B',
    red: '#EF4444',
    yellow: '#FACC15',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
    border: 'rgba(139, 92, 246, 0.2)',
    connection: 'rgba(139, 92, 246, 0.6)',
  }

  const toggleConnection = (serviceId: string) => {
    setServices(prev => prev.map(s =>
      s.id === serviceId ? { ...s, connected: !s.connected } : s
    ))

    const service = services.find(s => s.id === serviceId)
    if (service && !service.connected) {
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: `Отлично! Сервис "${service.name}" подключён к центральному дашборду. Теперь вы будете видеть статистику в реальном времени.`
      }])
    }
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    setChatMessages(prev => [...prev, { role: 'user', content: inputMessage }])

    // Простая логика ответов
    setTimeout(() => {
      let response = 'Я помогу вам с настройкой. Выберите сервис на схеме для детальной настройки.'

      if (inputMessage.toLowerCase().includes('подключи') || inputMessage.toLowerCase().includes('колл-центр')) {
        const callcenter = services.find(s => s.id === 'callcenter')
        if (callcenter && !callcenter.connected) {
          toggleConnection('callcenter')
          response = 'Колл-центр успешно подключён! Теперь вы видите рейтинг всех 10 операторов в реальном времени.'
        }
      }

      if (inputMessage.toLowerCase().includes('аналитик')) {
        response = 'Речевая аналитика показывает 87% положительных разговоров. Рекомендую добавить ключевые слова "скидка" и "акция" для лучшего отслеживания продаж.'
      }

      setChatMessages(prev => [...prev, { role: 'assistant', content: response }])
    }, 500)

    setInputMessage('')
  }

  const selectedServiceData = services.find(s => s.id === selectedService)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: C.bg, color: C.text, display: 'flex' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3); }
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6, #3B82F6, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .animate-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-green { animation: pulse-green 2s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-slide { animation: slide-in 0.3s ease-out; }
        
        .connection-line {
          stroke-dasharray: 5 5;
          animation: dash 1s linear infinite;
        }
        
        .node-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.4);
        }
        
        .chat-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
          background: ${C.border};
          border-radius: 2px;
        }
      `}</style>

      {/* Left Panel - AI Assistant */}
      <aside style={{
        width: 340, minWidth: 340,
        backgroundColor: C.bgAlt,
        borderRight: `1px solid ${C.border}`,
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          padding: '20px',
          borderBottom: `1px solid ${C.border}`,
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <div className="animate-glow" style={{
            width: 44, height: 44, borderRadius: 12,
            background: C.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px',
          }}>🤖</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>ИИ-ассистент</div>
            <div style={{ fontSize: '12px', color: C.green }}>● Проактивный режим</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-scroll" style={{
          flex: 1, overflow: 'auto', padding: '16px',
          display: 'flex', flexDirection: 'column', gap: '12px',
        }}>
          {chatMessages.map((msg, i) => (
            <div key={i} className="animate-slide" style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '90%',
            }}>
              <div style={{
                padding: '12px 16px',
                borderRadius: 16,
                backgroundColor: msg.role === 'user' ? C.purple : C.bgCard,
                border: `1px solid ${msg.role === 'user' ? C.purple : C.border}`,
                fontSize: '13px', lineHeight: 1.5,
              }}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ padding: '12px 16px', borderTop: `1px solid ${C.border}` }}>
          <div style={{ fontSize: '11px', color: C.textMuted, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Быстрые действия
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { label: 'Подключить Колл-центр', action: 'подключи колл-центр' },
              { label: 'Аналитика звонков', action: 'покажи аналитику' },
              { label: 'Рейтинг операторов', action: 'рейтинг операторов' },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={() => { setInputMessage(btn.action); handleSendMessage(); }}
                style={{
                  padding: '8px 12px', borderRadius: 8,
                  background: C.bgCard, border: `1px solid ${C.border}`,
                  color: C.text, fontSize: '11px', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div style={{ padding: '16px', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Спросите ИИ..."
              style={{
                flex: 1, padding: '12px 16px', borderRadius: 12,
                border: `1px solid ${C.border}`, background: C.bgCard,
                color: C.text, fontSize: '13px',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '12px 16px', borderRadius: 12,
                background: C.gradient, border: 'none',
                color: '#fff', fontWeight: 600, cursor: 'pointer',
              }}
            >→</button>
          </div>
        </div>
      </aside>

      {/* Main Canvas */}
      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* Background Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            radial-gradient(circle at center, rgba(139, 92, 246, 0.03) 0%, transparent 70%),
            linear-gradient(${C.border} 1px, transparent 1px),
            linear-gradient(90deg, ${C.border} 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }} />

        {/* SVG Connections */}
        <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={C.purple} />
              <stop offset="50%" stopColor={C.blue} />
              <stop offset="100%" stopColor={C.cyan} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {services.filter(s => s.connected).map(service => {
            // Center of traffic light (matches CSS position)
            const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 - 160 : 340
            const centerY = typeof window !== 'undefined' ? window.innerHeight * 0.45 - 160 : 140

            // Center of service node
            const nodeCenterX = typeof window !== 'undefined' ? window.innerWidth / 2 + service.position.x : 500
            const nodeCenterY = typeof window !== 'undefined' ? window.innerHeight * 0.5 + service.position.y : 300

            // Node dimensions: width 180 + padding 40 = 220, but for edge calculation use half
            const nodeWidth = 110  // half of ~220
            const nodeHeight = 70  // approximate half height

            // Calculate angle from center to node
            const angle = Math.atan2(nodeCenterY - centerY, nodeCenterX - centerX)

            // Calculate edge point on node (rectangle intersection)
            let edgeX = nodeCenterX
            let edgeY = nodeCenterY

            // Determine which edge the line should connect to
            const tanAngle = Math.abs(Math.tan(angle))
            if (tanAngle < nodeHeight / nodeWidth) {
              // Connects to left or right edge
              if (nodeCenterX > centerX) {
                edgeX = nodeCenterX - nodeWidth  // left edge
              } else {
                edgeX = nodeCenterX + nodeWidth  // right edge
              }
              edgeY = nodeCenterY - (nodeCenterX - edgeX) * Math.tan(angle)
            } else {
              // Connects to top or bottom edge
              if (nodeCenterY > centerY) {
                edgeY = nodeCenterY - nodeHeight  // top edge
              } else {
                edgeY = nodeCenterY + nodeHeight  // bottom edge
              }
              edgeX = nodeCenterX - (nodeCenterY - edgeY) / Math.tan(angle)
            }

            // Control point for curved line (slight curve)
            const midX = (centerX + edgeX) / 2
            const midY = (centerY + edgeY) / 2 - 20

            return (
              <g key={service.id}>
                {/* Curved connection line */}
                <path
                  d={`M ${centerX} ${centerY} Q ${midX} ${midY} ${edgeX} ${edgeY}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  opacity={0.9}
                />
                {/* Animated dot on line */}
                <circle r="5" fill={C.cyan} filter="url(#glow)">
                  <animateMotion
                    dur="2.5s"
                    repeatCount="indefinite"
                    path={`M ${centerX} ${centerY} Q ${midX} ${midY} ${edgeX} ${edgeY}`}
                  />
                </circle>
                {/* Connection point at center */}
                <circle cx={centerX} cy={centerY} r="6" fill={C.purple} opacity="0.8">
                  <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* Connection point at node edge */}
                <circle cx={edgeX} cy={edgeY} r="5" fill={C.green} opacity="0.9">
                  <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
            )
          })}

          {/* Disconnected services - dashed lines */}
          {services.filter(s => !s.connected).map(service => {
            const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 - 160 : 340
            const centerY = typeof window !== 'undefined' ? window.innerHeight * 0.45 - 160 : 140

            const nodeCenterX = typeof window !== 'undefined' ? window.innerWidth / 2 + service.position.x : 500
            const nodeCenterY = typeof window !== 'undefined' ? window.innerHeight * 0.5 + service.position.y : 300

            const nodeWidth = 110
            const nodeHeight = 70
            const angle = Math.atan2(nodeCenterY - centerY, nodeCenterX - centerX)

            let edgeX = nodeCenterX
            let edgeY = nodeCenterY
            const tanAngle = Math.abs(Math.tan(angle))
            if (tanAngle < nodeHeight / nodeWidth) {
              if (nodeCenterX > centerX) {
                edgeX = nodeCenterX - nodeWidth
              } else {
                edgeX = nodeCenterX + nodeWidth
              }
              edgeY = nodeCenterY - (nodeCenterX - edgeX) * Math.tan(angle)
            } else {
              if (nodeCenterY > centerY) {
                edgeY = nodeCenterY - nodeHeight
              } else {
                edgeY = nodeCenterY + nodeHeight
              }
              edgeX = nodeCenterX - (nodeCenterY - edgeY) / Math.tan(angle)
            }

            return (
              <line
                key={service.id}
                x1={centerX}
                y1={centerY}
                x2={edgeX}
                y2={edgeY}
                stroke={C.textMuted}
                strokeWidth="2"
                strokeDasharray="8 8"
                opacity={0.3}
              />
            )
          })}
        </svg>

        {/* Central Dashboard - Traffic Light with Stats */}
        <div style={{
          position: 'absolute',
          left: 'calc(50% - 160px)', top: 'calc(45% - 160px)',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          {/* Central Circle */}
          <div className="animate-glow" style={{
            width: 160, height: 160, borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, #2A2A4A, ${C.bgCard})`,
            border: `3px solid ${C.purple}`,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 60px rgba(139, 92, 246, 0.4), inset 0 0 40px rgba(139, 92, 246, 0.1)`,
            cursor: 'pointer',
          }} onClick={() => setSelectedService(null)}>
            <div style={{ fontSize: '40px', marginBottom: '4px' }}>🚦</div>
            <div style={{ fontWeight: 800, fontSize: '14px', textAlign: 'center' }}>
              Дашборд
            </div>
            <div style={{ 
              marginTop: '8px', padding: '4px 10px', borderRadius: 20,
              background: 'rgba(16, 185, 129, 0.2)', color: C.green,
              fontSize: '11px', fontWeight: 600,
            }}>
              {services.filter(s => s.connected).length}/{services.length} активны
            </div>
          </div>

          {/* Summary Stats Panel */}
          <div style={{
            marginTop: '24px',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            width: 680,
          }}>
            {/* Calls Trend Chart */}
            {services.find(s => s.id === 'calls')?.connected && (
              <div style={{
                background: C.bgCard, borderRadius: 16, padding: '16px',
                border: `1px solid ${C.border}`,
                minWidth: 200,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '16px' }}>📞</span>
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>Звонки по дням</span>
                </div>
                {/* Trend Chart */}
                <svg viewBox="0 0 180 60" style={{ width: '100%', height: 60 }}>
                  {/* Grid lines */}
                  {[0, 1, 2, 3].map(i => (
                    <line key={i} x1="0" y1={15 * i + 5} x2="180" y2={15 * i + 5} stroke={C.border} strokeWidth="1" opacity="0.3" />
                  ))}
                  {/* Trend line */}
                  <polyline
                    points="10,45 35,38 60,42 85,30 110,35 135,22 160,28"
                    fill="none" stroke={C.purple} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  {/* Gradient fill under line */}
                  <defs>
                    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={C.purple} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={C.purple} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="10,45 35,38 60,42 85,30 110,35 135,22 160,28 160,55 10,55"
                    fill="url(#chartGrad)"
                  />
                  {/* Points */}
                  {[[10, 45], [35, 38], [60, 42], [85, 30], [110, 35], [135, 22], [160, 28]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill={C.purple} />
                  ))}
                </svg>
                {/* Days labels */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '10px', color: C.textMuted }}>
                  <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
                </div>
                {/* Total */}
                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', fontWeight: 800 }}>1,247</span>
                  <span style={{ fontSize: '12px', color: C.green }}>↑ 12%</span>
                </div>
              </div>
            )}

            {/* Missed Calls Comparison */}
            {services.find(s => s.id === 'missed')?.connected && (
              <div style={{
                background: C.bgCard, borderRadius: 16, padding: '16px',
                border: `1px solid ${C.border}`,
                minWidth: 200,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '16px' }}>📱</span>
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>Пропущенные</span>
                </div>
                {/* Comparison bars */}
                <div style={{ marginTop: '8px' }}>
                  {/* Today */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                      <span style={{ color: C.textMuted }}>Сегодня</span>
                      <span style={{ fontWeight: 600 }}>23</span>
                    </div>
                    <div style={{ height: 8, borderRadius: 4, background: C.bgAlt, overflow: 'hidden' }}>
                      <div style={{ width: '46%', height: '100%', background: C.purple, borderRadius: 4 }} />
                    </div>
                  </div>
                  {/* Yesterday */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                      <span style={{ color: C.textMuted }}>Вчера</span>
                      <span style={{ fontWeight: 600 }}>47</span>
                    </div>
                    <div style={{ height: 8, borderRadius: 4, background: C.bgAlt, overflow: 'hidden' }}>
                      <div style={{ width: '94%', height: '100%', background: C.orange, borderRadius: 4 }} />
                    </div>
                  </div>
                </div>
                {/* Result */}
                <div style={{ 
                  marginTop: '8px', padding: '10px 12px', borderRadius: 10,
                  background: 'rgba(16, 185, 129, 0.1)', border: `1px solid ${C.green}30`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: C.green, fontSize: '16px' }}>✓</span>
                    <span style={{ fontSize: '12px' }}>
                      <span style={{ fontWeight: 700, color: C.green }}>-51%</span> меньше пропущенных
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Call Center Rating */}
            {services.find(s => s.id === 'callcenter')?.connected ? (
              <div style={{
                background: C.bgCard, borderRadius: 16, padding: '16px',
                border: `1px solid ${C.border}`,
                minWidth: 200,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '16px' }}>👥</span>
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>Рейтинг операторов</span>
                </div>
                {/* Best Employee */}
                <div style={{ 
                  padding: '10px 12px', borderRadius: 10, marginBottom: '8px',
                  background: 'rgba(16, 185, 129, 0.1)', border: `1px solid ${C.green}30`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '12px',
                      }}>👑</div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600 }}>Анна С.</div>
                        <div style={{ fontSize: '10px', color: C.textMuted }}>Лучший оператор</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: C.green }}>4.9</div>
                      <div style={{ fontSize: '9px', color: C.textMuted }}>из 5.0</div>
                    </div>
                  </div>
                </div>
                {/* Worst Employee */}
                <div style={{ 
                  padding: '10px 12px', borderRadius: 10,
                  background: 'rgba(239, 68, 68, 0.1)', border: `1px solid ${C.red}30`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: C.red, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '12px',
                      }}>⚠️</div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600 }}>Игорь М.</div>
                        <div style={{ fontSize: '10px', color: C.textMuted }}>Требует внимания</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: C.red }}>3.2</div>
                      <div style={{ fontSize: '9px', color: C.textMuted }}>из 5.0</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{
                background: C.bgCard, borderRadius: 16, padding: '16px',
                border: `1px dashed ${C.border}`,
                minWidth: 200, opacity: 0.5,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '24px', marginBottom: '8px' }}>👥</span>
                <span style={{ fontSize: '12px', color: C.textMuted, textAlign: 'center' }}>
                  Подключите<br/>Колл-центр
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Service Nodes */}
        {services.map(service => (
          <div
            key={service.id}
            className="node-hover"
            style={{
              position: 'absolute',
              left: `calc(50% + ${service.position.x}px)`,
              top: `calc(50% + ${service.position.y}px)`,
              transform: 'translate(-50%, -50%)',
              width: 180,
              padding: '20px',
              borderRadius: 20,
              background: service.connected 
                ? `linear-gradient(135deg, ${C.bgNode}, ${C.bgCard})`
                : C.bgAlt,
              border: `2px solid ${service.connected ? C.purple : C.border}`,
              cursor: 'pointer',
              transition: 'all 0.3s',
              opacity: service.connected ? 1 : 0.6,
              zIndex: 5,
            }}
            onClick={() => { setSelectedService(service.id); setShowSettings(true); }}
          >
            {/* Connection indicator */}
            <div style={{
              position: 'absolute', top: -8, right: -8,
              width: 20, height: 20, borderRadius: '50%',
              background: service.connected ? C.green : C.textMuted,
              border: `3px solid ${C.bg}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '10px',
            }}>
              {service.connected ? '✓' : '+'}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: service.connected ? C.gradient : C.bgAlt,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
              }}>
                {service.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{service.name}</div>
                <div style={{ fontSize: '11px', color: C.textMuted }}>
                  {service.connected ? 'Подключён' : 'Не подключён'}
                </div>
              </div>
            </div>

            {/* Mini stats */}
            {service.connected && (
              <div style={{
                display: 'flex', gap: '8px', flexWrap: 'wrap',
                marginTop: '8px',
              }}>
                {Object.entries(service.stats).slice(0, 2).map(([key, value]) => (
                  <div key={key} style={{
                    padding: '4px 10px', borderRadius: 8,
                    background: C.bgAlt, fontSize: '11px',
                  }}>
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Settings Panel */}
        {showSettings && selectedServiceData && (
          <div className="animate-slide" style={{
            position: 'absolute', right: 24, top: 24, bottom: 24,
            width: 320, borderRadius: 20,
            background: C.bgAlt, border: `1px solid ${C.border}`,
            display: 'flex', flexDirection: 'column',
            zIndex: 20,
          }}>
            {/* Header */}
            <div style={{
              padding: '24px',
              borderBottom: `1px solid ${C.border}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: C.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px',
                }}>
                  {selectedServiceData.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '18px' }}>{selectedServiceData.name}</div>
                  <div style={{ fontSize: '13px', color: C.textMuted }}>{selectedServiceData.description}</div>
                </div>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: C.bgCard, border: 'none',
                  color: C.textMuted, cursor: 'pointer', fontSize: '16px',
                }}
              >✕</button>
            </div>

            {/* Stats */}
            <div style={{ padding: '24px', borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Статистика
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {Object.entries(selectedServiceData.stats).map(([key, value]) => (
                  <div key={key} style={{
                    padding: '16px 12px', borderRadius: 12,
                    background: C.bgCard, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '20px', fontWeight: 800 }}>
                      {typeof value === 'number' ? value.toLocaleString() : value}
                    </div>
                    <div style={{ fontSize: '11px', color: C.textMuted, marginTop: '4px' }}>{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div style={{ padding: '24px', flex: 1, overflow: 'auto' }}>
              <div style={{ fontSize: '12px', color: C.textMuted, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Настройки
              </div>
              
              {selectedServiceData.id === 'calls' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px' }}>Автоанализ записей</span>
                    <input type="checkbox" defaultChecked style={{ width: 18, height: 18, accentColor: C.purple }} />
                  </label>
                  <div>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>Ключевые слова</div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {['покупка', 'цена', 'доставка'].map(word => (
                        <span key={word} style={{
                          padding: '6px 12px', borderRadius: 20,
                          background: C.bgCard, fontSize: '12px',
                          border: `1px solid ${C.border}`,
                        }}>{word}</span>
                      ))}
                      <button style={{
                        padding: '6px 12px', borderRadius: 20,
                        background: C.purple + '20', fontSize: '12px',
                        border: `1px solid ${C.purple}`, color: C.purple,
                        cursor: 'pointer',
                      }}>+ добавить</button>
                    </div>
                  </div>
                </div>
              )}

              {selectedServiceData.id === 'missed' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px' }}>Авто-перезвон</span>
                    <input type="checkbox" defaultChecked style={{ width: 18, height: 18, accentColor: C.purple }} />
                  </label>
                  <div>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>Время перезвона (мин)</div>
                    <input type="number" defaultValue={30} style={{
                      width: '100%', padding: '12px', borderRadius: 10,
                      background: C.bgCard, border: `1px solid ${C.border}`,
                      color: C.text, fontSize: '14px',
                    }} />
                  </div>
                </div>
              )}

              {selectedServiceData.id === 'callcenter' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px' }}>Система рейтинга</span>
                    <input type="checkbox" defaultChecked style={{ width: 18, height: 18, accentColor: C.purple }} />
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px' }}>Режим обучения</span>
                    <input type="checkbox" style={{ width: 18, height: 18, accentColor: C.purple }} />
                  </label>
                  <div>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>Активных операторов</div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {['Анна', 'Дмитрий', 'Елена', 'Сергей', 'Мария'].map(name => (
                        <span key={name} style={{
                          padding: '6px 12px', borderRadius: 20,
                          background: C.bgCard, fontSize: '12px',
                          border: `1px solid ${C.green}50`,
                        }}>🟢 {name}</span>
                      ))}
                      <span style={{
                        padding: '6px 12px', borderRadius: 20,
                        background: C.bgCard, fontSize: '12px',
                        border: `1px solid ${C.textMuted}30`,
                        color: C.textMuted,
                      }}>+5 ещё</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div style={{ padding: '20px', borderTop: `1px solid ${C.border}` }}>
              <button
                onClick={() => toggleConnection(selectedServiceData.id)}
                style={{
                  width: '100%', padding: '14px', borderRadius: 12,
                  background: selectedServiceData.connected ? C.red : C.green,
                  border: 'none', color: '#fff',
                  fontWeight: 700, fontSize: '14px', cursor: 'pointer',
                }}
              >
                {selectedServiceData.connected ? 'Отключить сервис' : 'Подключить сервис'}
              </button>
            </div>
          </div>
        )}

        {/* Top Header */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: '20px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: `linear-gradient(180deg, ${C.bg}, transparent)`,
          zIndex: 15,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: C.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>✨</div>
            <span style={{ fontSize: '18px', fontWeight: 800 }}>
              тАйга
            </span>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{
              padding: '8px 16px', borderRadius: 20,
              background: C.bgCard, border: `1px solid ${C.border}`,
              fontSize: '13px',
            }}>
              🔗 {services.filter(s => s.connected).length} подключено
            </div>
            <button style={{
              padding: '10px 20px', borderRadius: 10,
              background: C.gradient, border: 'none',
              color: '#fff', fontWeight: 600, cursor: 'pointer',
              fontSize: '13px',
            }}>
              + Добавить сервис
            </button>
          </div>
        </div>

        {/* Recommendations from AI */}
        <div style={{
          position: 'absolute', bottom: 24, left: 24, right: showSettings ? 360 : 24,
          padding: '20px', borderRadius: 16,
          background: C.bgCard, border: `1px solid ${C.border}`,
          zIndex: 15,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '20px' }}>💡</span>
            <span style={{ fontWeight: 700, color: C.purple }}>Рекомендации ИИ</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {!services.find(s => s.id === 'callcenter')?.connected && (
              <div style={{
                padding: '12px 16px', borderRadius: 12,
                background: 'rgba(245, 158, 11, 0.1)', border: `1px solid ${C.orange}30`,
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <span style={{ color: C.orange }}>👥</span>
                <span style={{ fontSize: '13px' }}>Подключите Колл-центр для отслеживания рейтинга операторов</span>
                <button onClick={() => toggleConnection('callcenter')} style={{
                  padding: '6px 12px', borderRadius: 8,
                  background: C.orange, border: 'none',
                  color: '#000', fontWeight: 600, fontSize: '12px', cursor: 'pointer',
                }}>Подключить</button>
              </div>
            )}
            <div style={{
              padding: '12px 16px', borderRadius: 12,
              background: 'rgba(16, 185, 129, 0.1)', border: `1px solid ${C.green}30`,
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <span style={{ color: C.green }}>📈</span>
              <span style={{ fontSize: '13px' }}>Речевая аналитика: +15% к конверсии при использовании ключевых слов</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
// ============================================
// КОНЦЕПТ 12: КОМПЛЕКСНЫЙ ДАШБОРД (Адаптивный)
// ============================================
function Concept12({ mode, setMode }: { mode: 'dashboard' | 'ai'; setMode: (m: 'dashboard' | 'ai') => void }) {
  // Светофор метрик с советами ИИ
  const [metrics, setMetrics] = useState([
    { id: 'calls', name: 'Входящие звонки', value: 1247, target: 1000, unit: '', status: 'green' as const, selected: true, aiAdvice: '' },
    { id: 'conversion', name: 'Конверсия', value: 23, target: 20, unit: '%', status: 'green' as const, selected: true, aiAdvice: '' },
    { id: 'missed', name: 'Пропущенные', value: 47, target: 30, unit: '', status: 'yellow' as const, selected: true,
      aiAdvice: 'Включите автоперезвон в течение 5 минут — это вернёт до 70% клиентов' },
    { id: 'avgTime', name: 'Время ответа', value: 45, target: 30, unit: 'сек', status: 'yellow' as const, selected: true,
      aiAdvice: 'Оптимизируйте сценарии IVR и добавьте ещё 2 оператора в пиковые часы' },
    { id: 'nps', name: 'NPS', value: 72, target: 80, unit: '', status: 'green' as const, selected: false, aiAdvice: '' },
    { id: 'revenue', name: 'Выручка', value: 847000, target: 1000000, unit: '₽', status: 'yellow' as const, selected: false,
      aiAdvice: 'Подключите допродажи через ИИ — потенциал роста выручки +18%' },
  ])

  // Описания метрик для тултипов
  const metricDescriptions: Record<string, { title: string; desc: string; impact: string }> = {
    'calls': {
      title: '📊 Входящие звонки',
      desc: 'Общее количество входящих звонков за выбранный период. Включает все вызовы, принятые и непринятые.',
      impact: 'Показывает активность клиентов и нагрузку на колл-центр. Рост — признак успешного маркетинга.'
    },
    'conversion': {
      title: '📈 Конверсия',
      desc: 'Процент звонков, завершившихся целевым действием: покупкой, заявкой или записью.',
      impact: 'Ключевой показатель эффективности продаж. Влияет напрямую на выручку компании.'
    },
    'missed': {
      title: '📱 Пропущенные звонки',
      desc: 'Количество звонков, которые не были приняты операторами в течение рабочего времени.',
      impact: 'Каждый пропущенный — потерянный клиент и упущенная выручка. Требует немедленного внимания.'
    },
    'avgTime': {
      title: '⏱️ Время ответа',
      desc: 'Среднее время от начала звонка до ответа оператора (включая IVR-меню).',
      impact: 'Влияет на удовлетворённость клиентов. Долгое ожидание = риск потери клиента.'
    },
    'nps': {
      title: '⭐ NPS (Net Promoter Score)',
      desc: 'Индекс лояльности клиентов. Показатель готовности рекомендовать компанию другим.',
      impact: 'Отражает качество сервиса. Высокий NPS коррелирует с повторными продажами.'
    },
    'revenue': {
      title: '💰 Выручка',
      desc: 'Общая сумма продаж, совершённых через колл-центр за период.',
      impact: 'Главный финансовый показатель. Цель — максимизация при сохранении качества.'
    }
  }

  // IVR Modal
  const [showIVRModal, setShowIVRModal] = useState(false)
  const [selectedIVRNode, setSelectedIVRNode] = useState<string | null>(null)
  const [ivrConfig, setIVRConfig] = useState({
    configured: false,
    greeting: {
      message: 'Добро пожаловать в тАйга! Для соединения с отделом продаж нажмите 1, для техподдержки — 2, для оператора — 0',
    },
    menuOptions: [
      { key: '1', label: 'Продажи', extension: '101', operators: 3, color: '#10B981' },
      { key: '2', label: 'Поддержка', extension: '102', operators: 2, color: '#F59E0B' },
      { key: '0', label: 'Оператор', extension: '100', operators: 1, color: '#3B82F6' },
    ],
  })

  // Плавающий чат
  const [showFloatingChat, setShowFloatingChat] = useState(false)
  const [floatingChatMessages, setFloatingChatMessages] = useState([
    { role: 'assistant', content: 'Добрый день! Чем могу помочь?' }
  ])
  const [floatingChatInput, setFloatingChatInput] = useState('')

  // Чат ИИ
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Добрый день! Я ваш ИИ-ассистент. Могу помочь настроить дашборд, подключить услуги или ответить на вопросы.' }
  ])
  const [chatInput, setChatInput] = useState('')

  // Настройки виджета
  const [settingsWidget, setSettingsWidget] = useState<string | null>(null)
  const [showMetricSelector, setShowMetricSelector] = useState(false)
  const [draggedWidgetId, setDraggedWidgetId] = useState<string | null>(null)
  const [dragOverWidgetId, setDragOverWidgetId] = useState<string | null>(null)

  // Добавление виджетов
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false)
  const [addWidgetZone, setAddWidgetZone] = useState<string | null>(null)
  const [aiWidgetPrompt, setAiWidgetPrompt] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [isAiGenerating, setIsAiGenerating] = useState(false)

  // Кастомные виджеты, созданные ИИ
  const [customWidgets, setCustomWidgets] = useState<Array<{
    id: string
    name: string
    prompt: string
    metrics: Array<{ label: string; value: number; color: string }>
    notifications: { enabled: boolean; threshold: number; email: string }
    chatHistory: Array<{ role: string; content: string }>
  }>>([])

  // Настройки открытого кастомного виджета
  const [editingCustomWidget, setEditingCustomWidget] = useState<string | null>(null)
  const [customWidgetChat, setCustomWidgetChat] = useState('')

  // Все доступные виджеты (включая скрытые)
  const allAvailableWidgets = [
    { id: 'traffic-light', name: 'Светофор метрик', gridColumn: 'span 12', icon: '🚦', category: 'metrics' },
    { id: 'efficiency', name: 'Эффективность отделов', gridColumn: 'span 6', icon: '📊', category: 'indicators' },
    { id: 'calls-chart', name: 'График звонков', gridColumn: 'span 3', icon: '📈', category: 'indicators' },
    { id: 'operators', name: 'Рейтинг операторов', gridColumn: 'span 3', icon: '👥', category: 'indicators' },
    { id: 'missed-calls', name: 'Пропущенные звонки', gridColumn: 'span 4', icon: '📱', category: 'indicators' },
    { id: 'recordings', name: 'Записи разговоров', gridColumn: 'span 4', icon: '📞', category: 'services' },
    { id: 'sip', name: 'Настройка SIP', gridColumn: 'span 4', icon: '⚙️', category: 'services' },
    { id: 'analytics', name: 'Речевая аналитика', gridColumn: 'span 4', icon: '🎯', category: 'services' },
    { id: 'notifications', name: 'Настройка уведомлений', gridColumn: 'span 4', icon: '🔔', category: 'services' },
    { id: 'ai-recommendations', name: 'Рекомендации ИИ', gridColumn: 'span 12', icon: '💡', category: 'services' },
    // Дополнительные виджеты
    { id: 'sales-funnel', name: 'Воронка продаж', gridColumn: 'span 6', icon: '🔄', category: 'indicators' },
    { id: 'geography', name: 'География звонков', gridColumn: 'span 6', icon: '🗺️', category: 'indicators' },
    { id: 'schedule', name: 'Расписание смен', gridColumn: 'span 4', icon: '📅', category: 'services' },
    { id: 'quick-dial', name: 'Быстрый набор', gridColumn: 'span 4', icon: '⚡', category: 'services' },
    { id: 'integration', name: 'Интеграции', gridColumn: 'span 4', icon: '🔗', category: 'services' },
  ]

  // Зоны виджетов (теперь динамические)
  const [widgetZones, setWidgetZones] = useState([
    {
      id: 'metrics',
      name: '📊 Светофор метрик',
      description: 'Ключевые показатели эффективности',
      widgets: [
        { id: 'traffic-light', name: 'Светофор метрик', gridColumn: 'span 12' },
      ]
    },
    {
      id: 'indicators',
      name: '📈 Показатели и рейтинги',
      description: 'Детальная аналитика по команде и отделам',
      widgets: [
        { id: 'efficiency', name: 'Эффективность отделов', gridColumn: 'span 6' },
        { id: 'calls-chart', name: 'График звонков', gridColumn: 'span 3' },
        { id: 'operators', name: 'Рейтинг операторов', gridColumn: 'span 3' },
        { id: 'missed-calls', name: 'Пропущенные звонки', gridColumn: 'span 4' },
      ]
    },
    {
      id: 'services',
      name: '⚡ Быстрая настройка услуг',
      description: 'Подключение и управление сервисами',
      widgets: [
        { id: 'recordings', name: 'Записи разговоров', gridColumn: 'span 4' },
        { id: 'sip', name: 'Настройка SIP', gridColumn: 'span 4' },
        { id: 'analytics', name: 'Речевая аналитика', gridColumn: 'span 4' },
        { id: 'notifications', name: 'Настройка уведомлений', gridColumn: 'span 4' },
        { id: 'ai-recommendations', name: 'Рекомендации ИИ', gridColumn: 'span 12' },
      ]
    },
  ])

  // Все виджеты в плоском списке (для совместимости)
  const [widgetOrder, setWidgetOrder] = useState(widgetZones.flatMap(z => z.widgets))

  // Получить виджеты, которые не добавлены на дашборд (включая кастомные)
  const getAvailableWidgets = () => {
    const addedIds = widgetOrder.map(w => w.id)
    const standardWidgets = allAvailableWidgets.filter(w => !addedIds.includes(w.id))
    const customWidgetsAvailable = customWidgets
      .filter(cw => !addedIds.includes(cw.id))
      .map(cw => ({
        id: cw.id,
        name: cw.name,
        gridColumn: 'span 6',
        icon: '🤖',
        category: 'indicators',
        isCustom: true
      }))
    return [...standardWidgets, ...customWidgetsAvailable]
  }

  // Добавить виджет
  const addWidget = (widgetId: string, zoneId?: string) => {
    // Сначала проверяем стандартные виджеты
    let widget = allAvailableWidgets.find(w => w.id === widgetId)
    let isCustom = false
    
    // Если не найден, проверяем кастомные
    if (!widget) {
      const customWidget = customWidgets.find(w => w.id === widgetId)
      if (customWidget) {
        widget = {
          id: customWidget.id,
          name: customWidget.name,
          gridColumn: 'span 6',
          icon: '🤖',
          category: 'indicators'
        }
        isCustom = true
      }
    }
    
    if (!widget) return

    const newWidget = {
      id: widget.id,
      name: widget.name,
      gridColumn: widget.gridColumn
    }

    // Определяем целевую зону: либо указанную, либо по категории виджета
    const targetZoneId = zoneId || widget.category || 'services'

    setWidgetZones(prev => prev.map(zone => 
      zone.id === targetZoneId 
        ? { ...zone, widgets: [newWidget, ...zone.widgets] } // Добавляем в начало зоны
        : zone
    ))

    setWidgetOrder(prev => [newWidget, ...prev])
    setShowAddWidgetModal(false)
    setAddWidgetZone(null)
  }

  // Удалить виджет
  const removeWidget = (widgetId: string) => {
    setWidgetZones(prev => prev.map(zone => ({
      ...zone,
      widgets: zone.widgets.filter(w => w.id !== widgetId)
    })))
    setWidgetOrder(prev => prev.filter(w => w.id !== widgetId))
  }

  // Голосовой ввод
  const startVoiceRecording = () => {
    setIsRecording(true)
    // Имитация записи голоса - в реальном приложении здесь был бы Web Speech API
    setTimeout(() => {
      setIsRecording(false)
      // Симуляция результата распознавания
      setAiWidgetPrompt('Покажи график звонков по дням недели')
    }, 3000)
  }

  const stopVoiceRecording = () => {
    setIsRecording(false)
  }

  // Генерация виджета через ИИ
  const generateWidgetWithAI = () => {
    if (!aiWidgetPrompt.trim()) return
    setIsAiGenerating(true)
    
    setTimeout(() => {
      const widgetId = `ai-widget-${Date.now()}`
      
      // Создаём кастомный виджет с метриками
      const newCustomWidget = {
        id: widgetId,
        name: aiWidgetPrompt.slice(0, 30) + (aiWidgetPrompt.length > 30 ? '...' : ''),
        prompt: aiWidgetPrompt,
        metrics: [
          { label: 'Выполнено', value: Math.floor(Math.random() * 40) + 60, color: C.green },
          { label: 'В процессе', value: Math.floor(Math.random() * 20) + 10, color: C.orange },
          { label: 'Не начато', value: Math.floor(Math.random() * 15) + 5, color: C.red },
        ],
        notifications: { enabled: true, threshold: 80, email: '' },
        chatHistory: [
          { role: 'assistant', content: `Создал виджет "${aiWidgetPrompt.slice(0, 30)}..." с круговыми диаграммами. Вы можете настроить параметры уведомлений или попросить меня изменить отображаемые метрики.` }
        ]
      }
      
      // Сохраняем в кастомные виджеты
      setCustomWidgets(prev => [...prev, newCustomWidget])
      
      // Добавляем в зону indicators
      const newWidget = {
        id: widgetId,
        name: newCustomWidget.name,
        gridColumn: 'span 6'
      }

      setWidgetZones(prev => prev.map(zone => 
        zone.id === 'indicators' 
          ? { ...zone, widgets: [newWidget, ...zone.widgets] }
          : zone
      ))
      setWidgetOrder(prev => [newWidget, ...prev])
      
      setIsAiGenerating(false)
      setAiWidgetPrompt('')
      setShowAddWidgetModal(false)
    }, 2000)
  }

  // Функция для перемещения виджета
  const moveWidget = (fromId: string, toId: string) => {
    // Find the dragged widget and its current zone
    let draggedWidget: { id: string; name: string; gridColumn: string } | null = null
    let sourceZoneIndex = -1
    let sourceWidgetIndex = -1

    // Find the target widget and its zone
    let targetZoneIndex = -1
    let targetWidgetIndex = -1

    widgetZones.forEach((zone, zoneIdx) => {
      zone.widgets.forEach((widget, widgetIdx) => {
        if (widget.id === fromId) {
          draggedWidget = widget
          sourceZoneIndex = zoneIdx
          sourceWidgetIndex = widgetIdx
        }
        if (widget.id === toId) {
          targetZoneIndex = zoneIdx
          targetWidgetIndex = widgetIdx
        }
      })
    })

    // If we found both widgets, perform the move
    if (draggedWidget && sourceZoneIndex !== -1 && targetZoneIndex !== -1) {
      setWidgetZones(prev => {
        const updated = prev.map(zone => ({
          ...zone,
          widgets: [...zone.widgets]
        }))

        // Remove widget from source zone
        updated[sourceZoneIndex].widgets.splice(sourceWidgetIndex, 1)

        // Adjust target index if moving within same zone and source was before target
        let adjustedTargetIndex = targetWidgetIndex
        if (sourceZoneIndex === targetZoneIndex && sourceWidgetIndex < targetWidgetIndex) {
          adjustedTargetIndex--
        }

        // Insert widget at target position in target zone
        updated[targetZoneIndex].widgets.splice(adjustedTargetIndex, 0, draggedWidget!)

        return updated
      })

      // Also update widgetOrder for consistency
      const fromIndex = widgetOrder.findIndex(w => w.id === fromId)
      const toIndex = widgetOrder.findIndex(w => w.id === toId)
      if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
        const newOrder = [...widgetOrder]
        const [removed] = newOrder.splice(fromIndex, 1)
        newOrder.splice(toIndex, 0, removed)
        setWidgetOrder(newOrder)
      }
    }
  }

  // Обработчики drag-and-drop
  const handleDragStart = (e: React.DragEvent, widgetId: string) => {
    e.dataTransfer.setData('widgetId', widgetId)
    setDraggedWidgetId(widgetId)
  }

  const handleDragOver = (e: React.DragEvent, widgetId: string) => {
    e.preventDefault()
    setDragOverWidgetId(widgetId)
  }

  const handleDragLeave = () => {
    setDragOverWidgetId(null)
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    const sourceId = e.dataTransfer.getData('widgetId')
    if (sourceId && sourceId !== targetId) {
      moveWidget(sourceId, targetId)
    }
    setDraggedWidgetId(null)
    setDragOverWidgetId(null)
  }

  const handleDragEnd = () => {
    setDraggedWidgetId(null)
    setDragOverWidgetId(null)
  }
  const [draggedWidget, setDraggedWidget] = useState<string | null>(null)

  // Цвета
  const C = {
    bg: '#0A0A12',
    bgAlt: '#12121F',
    bgCard: '#1A1A2E',
    bgWidget: '#16162A',
    bgNode: '#1E1E38',
    text: '#FFFFFF',
    textMuted: '#9CA3AF',
    textLight: '#6B7280',
    purple: '#8B5CF6',
    blue: '#3B82F6',
    cyan: '#06B6D4',
    green: '#10B981',
    orange: '#F59E0B',
    red: '#EF4444',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
    border: 'rgba(139, 92, 246, 0.2)',
  }

  // Получить цвет статуса светофора
  const getStatusColor = (status: 'green' | 'yellow' | 'red') => {
    switch (status) {
      case 'green': return C.green
      case 'yellow': return C.orange
      case 'red': return C.red
    }
  }

  // Переключить выбор метрики
  const toggleMetricSelection = (metricId: string) => {
    setMetrics(prev => prev.map(m => 
      m.id === metricId ? { ...m, selected: !m.selected } : m
    ))
  }

  // Отправить сообщение в чат
  const sendChatMessage = () => {
    if (!chatInput.trim()) return
    setChatMessages(prev => [...prev, { role: 'user', content: chatInput }])

    setTimeout(() => {
      const responses = [
        'Отлично! Могу помочь настроить уведомления о критических метриках.',
        'Рекомендую подключить Речевую аналитику — это избавит от прослушивания разговоров вручную.',
        'Вижу 47 пропущенных звонков. Хотите настроить автоперезвон?',
      ]
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)]
      }])
    }, 500)

    setChatInput('')
  }

  // Отправить сообщение в плавающий чат
  const sendFloatingChatMessage = () => {
    if (!floatingChatInput.trim()) return
    setFloatingChatMessages(prev => [...prev, { role: 'user', content: floatingChatInput }])

    setTimeout(() => {
      const responses = [
        'Анализирую ситуацию с пропущенными звонками. Рекомендую включить автоперезвон.',
        'Могу помочь настроить оптимальные показатели для светофора метрик.',
        'Вижу, что время ответа выше нормы. Хотите рекомендации по оптимизации?',
        'Для улучшения конверсии рекомендую подключить речевую аналитику.',
      ]
      setFloatingChatMessages(prev => [...prev, {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)]
      }])
    }, 500)

    setFloatingChatInput('')
  }

  // Render widget content based on ID
  const renderWidgetContent = (widgetId: string) => {
    switch (widgetId) {
      case 'traffic-light':
        const selectedMetrics = metrics.filter(m => m.selected).slice(0, 4)
        const metricsWithCharts = selectedMetrics.filter(m => m.id === 'calls' || m.id === 'conversion')
        const metricsWithoutCharts = selectedMetrics.filter(m => m.id !== 'calls' && m.id !== 'conversion')
        
        return (
          <>
            {/* Метрики с графиками - по 50% ширины */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: metricsWithoutCharts.length > 0 ? '16px' : '0' }}>
              {metricsWithCharts.map(metric => {
                const desc = metricDescriptions[metric.id]
                return (
                <div key={metric.id} className="metric-light metric-tooltip-wrapper" style={{
                  background: `${getStatusColor(metric.status)}10`,
                  border: `1px solid ${getStatusColor(metric.status)}30`,
                  padding: '24px',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}>
                  {/* Tooltip */}
                  {desc && (
                    <div className="metric-tooltip">
                      <div className="metric-tooltip-title">{desc.title}</div>
                      <div className="metric-tooltip-desc">{desc.desc}</div>
                      <div className="metric-tooltip-impact">💡 {desc.impact}</div>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div className="metric-indicator" style={{
                      background: getStatusColor(metric.status),
                      boxShadow: `0 0 24px ${getStatusColor(metric.status)}60`,
                      width: '48px', height: '48px', minWidth: '48px',
                      marginBottom: 0,
                      fontSize: '20px',
                    }}>
                      {metric.status === 'green' ? '✓' : metric.status === 'yellow' ? '!' : '✕'}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="metric-name" style={{ fontSize: '13px', marginBottom: '4px', color: C.textMuted }}>{metric.name}</div>
                      <div className="metric-value" style={{ fontSize: '36px', fontWeight: 800 }}>
                        {metric.value.toLocaleString()}{metric.unit}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Цель</div>
                      <div style={{ fontSize: '16px', fontWeight: 700 }}>{metric.target}{metric.unit}</div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: metric.id === 'calls' ? C.green : C.green, 
                        fontWeight: 600,
                        marginTop: '4px'
                      }}>
                        {metric.id === 'calls' ? '↑ +12%' : '↑ +15%'}
                      </div>
                    </div>
                  </div>
                  
                  {/* График тренда */}
                  <div style={{ marginTop: '8px' }}>
                    <svg viewBox="0 0 400 60" style={{ width: '100%', height: 60 }}>
                      <defs>
                        <linearGradient id={`sparkGrad-${metric.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={getStatusColor(metric.status)} stopOpacity="0.25" />
                          <stop offset="100%" stopColor={getStatusColor(metric.status)} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Сетка */}
                      <line x1="0" y1="30" x2="400" y2="30" stroke={C.border} strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4" />
                      {/* График */}
                      {metric.id === 'calls' && (
                        <>
                          <polyline
                            points="20,48 70,42 120,45 170,32 220,38 270,26 320,30 380,28"
                            fill="none"
                            stroke={getStatusColor(metric.status)}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <polygon
                            points="20,48 70,42 120,45 170,32 220,38 270,26 320,30 380,28 380,60 20,60"
                            fill={`url(#sparkGrad-${metric.id})`}
                          />
                          {/* Точки */}
                          {[20, 70, 120, 170, 220, 270, 320, 380].map((x, i) => {
                            const y = [48, 42, 45, 32, 38, 26, 30, 28][i]
                            return <circle key={i} cx={x} cy={y} r="4" fill={getStatusColor(metric.status)} />
                          })}
                        </>
                      )}
                      {metric.id === 'conversion' && (
                        <>
                          <polyline
                            points="20,38 70,34 120,36 170,28 220,30 270,22 320,24 380,20"
                            fill="none"
                            stroke={getStatusColor(metric.status)}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <polygon
                            points="20,38 70,34 120,36 170,28 220,30 270,22 320,24 380,20 380,60 20,60"
                            fill={`url(#sparkGrad-${metric.id})`}
                          />
                          {/* Точки */}
                          {[20, 70, 120, 170, 220, 270, 320, 380].map((x, i) => {
                            const y = [38, 34, 36, 28, 30, 22, 24, 20][i]
                            return <circle key={i} cx={x} cy={y} r="4" fill={getStatusColor(metric.status)} />
                          })}
                        </>
                      )}
                    </svg>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: C.textLight, marginTop: '6px', padding: '0 10px' }}>
                      <span>Пн</span>
                      <span>Вт</span>
                      <span>Ср</span>
                      <span>Чт</span>
                      <span>Пт</span>
                      <span>Сб</span>
                      <span>Вс</span>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
            
            {/* Метрики без графиков - по 50% ширины */}
            {metricsWithoutCharts.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {metricsWithoutCharts.map(metric => {
                  const desc = metricDescriptions[metric.id]
                  return (
                  <div key={metric.id} className="metric-light metric-tooltip-wrapper" style={{
                    background: `${getStatusColor(metric.status)}10`,
                    border: `1px solid ${getStatusColor(metric.status)}30`,
                    padding: '20px',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  }}>
                    {/* Tooltip */}
                    {desc && (
                      <div className="metric-tooltip">
                        <div className="metric-tooltip-title">{desc.title}</div>
                        <div className="metric-tooltip-desc">{desc.desc}</div>
                        <div className="metric-tooltip-impact">💡 {desc.impact}</div>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="metric-indicator" style={{
                        background: getStatusColor(metric.status),
                        boxShadow: `0 0 24px ${getStatusColor(metric.status)}60`,
                        width: '40px', height: '40px', minWidth: '40px',
                        marginBottom: 0,
                      }}>
                        {metric.status === 'green' ? '✓' : metric.status === 'yellow' ? '!' : '✕'}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="metric-name" style={{ fontSize: '12px', marginBottom: '2px' }}>{metric.name}</div>
                        <div className="metric-value" style={{ fontSize: '28px', fontWeight: 800 }}>
                          {metric.value.toLocaleString()}{metric.unit}
                        </div>
                      </div>
                      <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <div style={{ fontSize: '11px', color: C.textMuted }}>Цель</div>
                        <div style={{ fontSize: '14px', fontWeight: 700 }}>{metric.target}{metric.unit}</div>
                      </div>
                    </div>
                    
                    {metric.aiAdvice && (
                      <div style={{
                        marginTop: '12px', padding: '12px',
                        background: 'rgba(139, 92, 246, 0.1)',
                        borderRadius: '10px',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        display: 'flex', gap: '10px', alignItems: 'flex-start',
                      }}>
                        <span style={{ fontSize: '16px' }}>💡</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '11px', color: C.purple, fontWeight: 600, marginBottom: '4px' }}>
                            Совет ИИ
                          </div>
                          <div style={{ fontSize: '12px', color: C.textMuted, lineHeight: 1.5 }}>
                            {metric.aiAdvice}
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            if (metric.id === 'avgTime') {
                              setShowIVRModal(true)
                            }
                          }}
                          style={{
                          padding: '6px 10px', borderRadius: 6,
                          background: C.purple, border: 'none',
                          color: '#fff', fontSize: '10px', fontWeight: 600, cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}>
                          Применить
                        </button>
                      </div>
                    )}
                  </div>
                )
                })}
              </div>
            )}
          </>
        )

      case 'efficiency':
        // Описания для отделов
        const deptDescriptions = [
          { title: '📊 Отдел продаж', desc: 'Эффективность работы менеджеров по продажам. Учитывает конверсию и средний чек.', impact: 'Рост эффективности напрямую влияет на выручку компании.' },
          { title: '🎯 Отдел поддержки', desc: 'Качество обслуживания клиентов и скорость решения проблем.', impact: 'Высокая эффективность = лояльные клиенты и меньше жалоб.' },
          { title: '📈 Маркетинг', desc: 'Эффективность рекламных кампаний и лидогенерации.', impact: 'Определяет стоимость привлечения клиента (CAC).' },
          { title: '📞 Отдел звонков', desc: 'Обработка входящих и исходящих вызовов, конверсия в сделки.', impact: 'Критически важен для продаж. Низкая эффективность = потеря клиентов.' }
        ]
        
        return (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '20px' }}>
              {[
                { name: 'Продажи', efficiency: 94, trend: '+5%', color: C.green },
                { name: 'Поддержка', efficiency: 87, trend: '+2%', color: C.green },
                { name: 'Маркетинг', efficiency: 72, trend: '-3%', color: C.orange },
                { name: 'Отдел звонков', efficiency: 58, trend: '-8%', color: C.red },
              ].map((dept, i) => (
                <div key={i} className="metric-tooltip-wrapper" style={{
                  textAlign: 'center',
                  padding: '16px',
                  background: i === 3 ? 'rgba(239, 68, 68, 0.08)' : C.bgAlt,
                  borderRadius: 12,
                  border: i === 3 ? '1px solid rgba(239, 68, 68, 0.2)' : 'none',
                  cursor: 'help',
                }}>
                  {/* Tooltip */}
                  <div className="metric-tooltip">
                    <div className="metric-tooltip-title">{deptDescriptions[i].title}</div>
                    <div className="metric-tooltip-desc">{deptDescriptions[i].desc}</div>
                    <div className="metric-tooltip-impact">💡 {deptDescriptions[i].impact}</div>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{dept.name}</div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: dept.color }}>{dept.efficiency}%</div>
                  <div style={{ fontSize: '12px', color: dept.color, fontWeight: 600 }}>{dept.trend}</div>
                </div>
              ))}
            </div>
            <div style={{
              padding: '20px',
              background: 'rgba(239, 68, 68, 0.08)',
              borderRadius: 16,
              border: '1px solid rgba(239, 68, 68, 0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '24px' }}>⚠️</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: C.red }}>Худший отдел: Отдел звонков</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div className="metric-tooltip-wrapper" style={{ padding: '12px', background: C.bgCard, borderRadius: 10, textAlign: 'center', cursor: 'help' }}>
                  <div className="metric-tooltip">
                    <div className="metric-tooltip-title">📉 Конверсия отдела</div>
                    <div className="metric-tooltip-desc">Процент звонков, завершившихся продажей или целевым действием.</div>
                    <div className="metric-tooltip-impact">💡 В 2 раза ниже нормы — требуется срочное вмешательство!</div>
                  </div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>Конверсия</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: C.red }}>12%</div>
                  <div style={{ fontSize: '11px', color: C.textMuted }}>норма: 25%</div>
                </div>
                <div className="metric-tooltip-wrapper" style={{ padding: '12px', background: C.bgCard, borderRadius: 10, textAlign: 'center', cursor: 'help' }}>
                  <div className="metric-tooltip">
                    <div className="metric-tooltip-title">📱 Пропущенные звонки</div>
                    <div className="metric-tooltip-desc">Звонки, которые не были приняты операторами.</div>
                    <div className="metric-tooltip-impact">💡 Каждый пропущенный = потерянный клиент и репутационный риск.</div>
                  </div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>Пропущенные</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: C.red }}>47</div>
                  <div style={{ fontSize: '11px', color: C.textMuted }}>на этой неделе</div>
                </div>
                <div className="metric-tooltip-wrapper" style={{ padding: '12px', background: C.bgCard, borderRadius: 10, textAlign: 'center', cursor: 'help' }}>
                  <div className="metric-tooltip">
                    <div className="metric-tooltip-title">👥 Проблемные сотрудники</div>
                    <div className="metric-tooltip-desc">Сотрудники с показателями ниже нормы, требующие внимания.</div>
                    <div className="metric-tooltip-impact">💡 Рекомендуется провести обучение или аттестацию.</div>
                  </div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>Низкий балл</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: C.red }}>3 сотрудника</div>
                  <div style={{ fontSize: '11px', color: C.textMuted }}>требуют внимания</div>
                </div>
              </div>
            </div>
          </>
        )

      case 'calls-chart':
        return (
          <>
            <svg viewBox="0 0 280 100" style={{ width: '100%', height: 'auto', flex: 1 }}>
              <defs>
                <linearGradient id="chartGrad12" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={C.purple} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={C.purple} stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline points="20,80 60,55 100,65 140,35 180,50 220,28 260,40" fill="none" stroke={C.purple} strokeWidth="3" strokeLinecap="round" />
              <polygon points="20,80 60,55 100,65 140,35 180,50 220,28 260,40 260,100 20,100" fill="url(#chartGrad12)" />
              {[20, 60, 100, 140, 180, 220, 260].map((x, i) => (
                <circle key={i} cx={x} cy={[80, 55, 65, 35, 50, 28, 40][i]} r="5" fill={C.purple} />
              ))}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: C.textMuted, marginTop: '12px' }}>
              <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', alignItems: 'center' }}>
              <span style={{ fontSize: '28px', fontWeight: 800 }}>1,247</span>
              <span style={{ fontSize: '13px', color: C.green, fontWeight: 600 }}>↑ 12%</span>
            </div>
          </>
        )

      case 'operators':
        return (
          <>
            {[
              { name: 'Анна С.', rating: 4.9, calls: 156, top: true },
              { name: 'Дмитрий К.', rating: 4.7, calls: 142 },
              { name: 'Елена М.', rating: 4.5, calls: 128 },
              { name: 'Игорь П.', rating: 3.2, calls: 89, warn: true },
            ].map((op, i) => (
              <div key={i} className="operator-row">
                <div className="operator-rank" style={{
                  background: op.top ? C.green : op.warn ? C.red : C.bgCard,
                  color: op.top || op.warn ? '#fff' : C.text,
                }}>
                  {op.top ? '👑' : i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{op.name}</div>
                  <div style={{ fontSize: '11px', color: C.textMuted }}>{op.calls} звонков</div>
                </div>
                <div style={{
                  padding: '6px 12px', borderRadius: 8,
                  background: op.warn ? `${C.red}20` : `${C.green}15`,
                  color: op.warn ? C.red : C.green,
                  fontSize: '14px', fontWeight: 700,
                }}>
                  {op.rating}
                </div>
              </div>
            ))}
          </>
        )

      case 'missed-calls':
        return (
          <>
            {/* Pie Chart */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <svg width={80} height={80} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
                <circle cx={40} cy={40} r={32} fill="none" stroke={C.bgAlt} strokeWidth={10} />
                <circle cx={40} cy={40} r={32} fill="none" stroke={C.red} strokeWidth={10} 
                  strokeDasharray={`${56.5} ${200.96}`} strokeDashoffset={0} strokeLinecap="round" />
                <circle cx={40} cy={40} r={32} fill="none" stroke={C.green} strokeWidth={10} 
                  strokeDasharray={`${144.4} ${200.96}`} strokeDashoffset={-56.5} strokeLinecap="round" />
              </svg>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '4px' }}>47</div>
                <div style={{ fontSize: '13px', color: C.textMuted }}>пропущенных за сегодня</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: C.green }} />
                    <span style={{ fontSize: '12px', color: C.textMuted }}>Перезвонили</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, marginLeft: 'auto' }}>38</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: C.red }} />
                    <span style={{ fontSize: '12px', color: C.textMuted }}>Потеряны</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, marginLeft: 'auto', color: C.red }}>9</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ 
              padding: '10px', borderRadius: 10, background: `${C.green}15`, 
              textAlign: 'center', marginBottom: '16px', border: `1px solid ${C.green}30`
            }}>
              <span style={{ fontSize: '11px', color: C.textMuted }}>Конверсия обратной связи: </span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: C.green }}>81%</span>
            </div>
            <button style={{
              width: '100%', padding: '14px', borderRadius: 12,
              background: C.gradient, border: 'none',
              color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
            }}>
              Настроить автоперезвон
            </button>
          </>
        )

      case 'recordings':
        return (
          <>
            {[
              { phone: '+7 (999) 123-45-67', duration: '3:24', sentiment: 'positive' },
              { phone: '+7 (999) 234-56-78', duration: '5:12', sentiment: 'neutral' },
              { phone: '+7 (999) 345-67-89', duration: '2:45', sentiment: 'negative' },
            ].map((call, i) => (
              <div key={i} className="recording-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 12, background: C.bgAlt, marginBottom: '10px' }}>
                <span style={{ fontSize: '20px' }}>
                  {call.sentiment === 'positive' ? '😊' : call.sentiment === 'negative' ? '😟' : '😐'}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{call.phone}</div>
                  <div style={{ fontSize: '11px', color: C.textMuted }}>{call.duration}</div>
                </div>
                <button className="widget-btn">▶️</button>
              </div>
            ))}
          </>
        )

      case 'sip':
        return (
          <>
            <div className="sip-card" style={{ padding: '16px 20px', borderRadius: 14, marginBottom: '12px', background: `${C.green}10`, border: `1px solid ${C.green}30` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ color: C.green, fontSize: '12px' }}>●</span>
                <span style={{ fontSize: '13px', fontWeight: 600 }}>Основной номер</span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800 }}>+7 (800) 555-35-35</div>
            </div>
            <div className="sip-card" style={{ padding: '16px 20px', borderRadius: 14, marginBottom: '12px', background: C.bgAlt }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ color: C.orange, fontSize: '12px' }}>●</span>
                <span style={{ fontSize: '13px', fontWeight: 600 }}>Дополнительный</span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800 }}>+7 (800) 123-45-67</div>
            </div>
            <button style={{
              width: '100%', padding: '14px', borderRadius: 12,
              background: C.gradient, border: 'none',
              color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
              marginTop: '8px',
            }}>
              + Добавить номер
            </button>
          </>
        )

      case 'analytics':
        return (
          <div style={{
            flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            padding: '24px', borderRadius: 16,
            background: `${C.purple}10`, border: `2px dashed ${C.purple}40`,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎙️</div>
            <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
              Подключите Речевую аналитику
            </div>
            <div style={{ fontSize: '13px', color: C.textMuted, marginBottom: '16px' }}>
              Избавит от необходимости прослушивать все разговоры вручную
            </div>
            <button style={{
              padding: '14px 28px', borderRadius: 12,
              background: C.gradient, border: 'none',
              color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
            }}>
              Подключить бесплатно
            </button>
          </div>
        )

      case 'notifications':
        return (
          <>
            {[
              { metric: 'Пропущенные > 50', channel: 'Telegram', enabled: true },
              { metric: 'Конверсия < 15%', channel: 'Email + Push', enabled: true },
              { metric: 'NPS < 60', channel: 'Email', enabled: false },
            ].map((notif, i) => (
              <div key={i} className="notification-row" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 12, background: C.bgAlt, marginBottom: '10px', opacity: notif.enabled ? 1 : 0.5 }}>
                <input type="checkbox" checked={notif.enabled} readOnly style={{ width: 18, height: 18, accentColor: C.purple }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{notif.metric}</div>
                  <div style={{ fontSize: '11px', color: C.textMuted }}>{notif.channel}</div>
                </div>
                <button className="widget-btn">✏️</button>
              </div>
            ))}
            <button style={{
              width: '100%', padding: '12px', marginTop: '12px', borderRadius: 10,
              background: C.bgAlt, border: `1px solid ${C.border}`,
              color: C.textMuted, fontSize: '12px', cursor: 'pointer',
            }}>
              + Добавить уведомление
            </button>
          </>
        )

      case 'ai-recommendations':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🎯', title: 'Подключите Речевую аналитику', desc: 'Автоматически анализируйте все разговоры и находите точки роста', color: C.purple },
              { icon: '📊', title: 'Оператор Игорь П. требует внимания', desc: 'Рейтинг 3.2 ниже нормы. Рекомендуем провести обучение.', color: C.red },
              { icon: '⚡', title: 'Оптимизируйте время ответа', desc: 'Среднее время 45 сек. Целевое: 30 сек. Возможно расширить штат.', color: C.orange },
            ].map((rec, i) => (
              <div key={i} className="rec-card" style={{
                padding: '20px', borderRadius: 16, display: 'flex', flexDirection: 'column',
                background: `${rec.color}10`, border: `1px solid ${rec.color}30`,
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{rec.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>{rec.title}</div>
                <div style={{ fontSize: '12px', color: C.textMuted, flex: 1, marginBottom: '12px' }}>{rec.desc}</div>
                <button style={{ padding: '10px 16px', borderRadius: 10, border: 'none', color: 'white', fontWeight: 600, fontSize: '12px', cursor: 'pointer', background: rec.color }}>Подробнее</button>
              </div>
            ))}
          </div>
        )

      default:
        // Проверяем, является ли это кастомным ИИ-виджетом
        const customWidget = customWidgets.find(cw => cw.id === widgetId)
        if (customWidget) {
          return (
            <div style={{ padding: '16px 0' }}>
              {/* Круговые диаграммы */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
                {customWidget.metrics.map((metric, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <svg viewBox="0 0 100 100" style={{ width: 80, height: 80, marginBottom: 8 }}>
                      {/* Фоновый круг */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke={C.border} strokeWidth="8" />
                      {/* Дуга с прогрессом */}
                      <circle 
                        cx="50" cy="50" r="40" 
                        fill="none" 
                        stroke={metric.color} 
                        strokeWidth="8"
                        strokeDasharray={`${metric.value * 2.51} 251`}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      {/* Значение в центре */}
                      <text x="50" y="55" textAnchor="middle" style={{ fontSize: '18px', fontWeight: 700, fill: C.text }}>
                        {metric.value}%
                      </text>
                    </svg>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>{metric.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Панель уведомлений */}
              {customWidget.notifications.enabled && (
                <div style={{
                  padding: '12px 16px',
                  background: `${C.purple}10`,
                  borderRadius: 12,
                  border: `1px solid ${C.purple}30`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '18px' }}>🔔</span>
                  <div style={{ flex: 1, fontSize: '12px', color: C.textMuted }}>
                    Уведомление при достижении {customWidget.notifications.threshold}%
                  </div>
                  <button
                    onClick={() => setEditingCustomWidget(widgetId)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 8,
                      background: C.purple,
                      border: 'none',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Настроить
                  </button>
                </div>
              )}
            </div>
          )
        }
        return null
    }
  }

  // Get widget icon based on ID
  const getWidgetIcon = (widgetId: string) => {
    const icons: Record<string, string> = {
      'traffic-light': '🚦',
      'efficiency': '📊',
      'calls-chart': '📈',
      'operators': '👥',
      'missed-calls': '📱',
      'recordings': '📞',
      'sip': '⚙️',
      'analytics': '🎯',
      'notifications': '🔔',
      'ai-recommendations': '💡',
    }
    // ИИ-виджеты
    if (widgetId.startsWith('ai-widget-')) return '🤖'
    return icons[widgetId] || '📦'
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: C.bg, color: C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
          padding: 20px;
          max-width: 1800px;
          margin: 0 auto;
        }
        
        @media (max-width: 1400px) {
          .dashboard-grid { grid-template-columns: repeat(8, 1fr); }
        }
        @media (max-width: 1000px) {
          .dashboard-grid { grid-template-columns: repeat(6, 1fr); }
        }
        @media (max-width: 768px) {
          .dashboard-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 480px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
        
        .widget-card {
          background: ${C.bgCard};
          border: 1px solid ${C.border};
          border-radius: 20px;
          padding: 24px;
          transition: all 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .widget-card:hover {
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.4);
        }
        
        .widget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .widget-title {
          font-size: 15px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .widget-actions {
          display: flex;
          gap: 6px;
        }
        
        .widget-btn {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: ${C.bgAlt};
          border: none;
          color: ${C.textMuted};
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .widget-btn:hover {
          background: ${C.purple}30;
          color: ${C.purple};
        }
        
        /* Tooltip styles */
        .tooltip-wrapper {
          position: relative;
          display: inline-flex;
        }
        
        .tooltip {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #fff;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          z-index: 1000;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.2);
          pointer-events: none;
        }
        
        .tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #16213e;
        }
        
        .tooltip-wrapper:hover .tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        /* Metric tooltip - more detailed */
        .metric-tooltip-wrapper {
          position: relative;
          cursor: help;
        }
        
        .metric-tooltip {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #fff;
          padding: 14px 18px;
          border-radius: 14px;
          font-size: 12px;
          min-width: 240px;
          max-width: 300px;
          white-space: normal;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
          z-index: 1000;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.3);
          pointer-events: none;
          text-align: left;
        }
        
        .metric-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 8px solid transparent;
          border-top-color: #16213e;
        }
        
        .metric-tooltip-wrapper:hover .metric-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        .metric-tooltip-title {
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 6px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .metric-tooltip-desc {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 8px;
        }
        
        .metric-tooltip-impact {
          padding: 8px 10px;
          background: rgba(139, 92, 246, 0.15);
          border-radius: 8px;
          border-left: 3px solid #8b5cf6;
          color: rgba(255, 255, 255, 0.85);
          font-size: 11px;
        }
        
        /* Tooltip for buttons */
        .btn-tooltip {
          position: absolute;
          bottom: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #fff;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          z-index: 1000;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          pointer-events: none;
        }
        
        .btn-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: #16213e;
        }
        
        .widget-btn:hover .btn-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        .metric-light {
          padding: 20px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 0;
        }
        
        .metric-indicator {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          margin-bottom: 12px;
        }
        
        .metric-value {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 4px;
        }
        
        .metric-name {
          font-size: 12px;
          color: ${C.textMuted};
        }
        
        .chat-message {
          animation: slideIn 0.3s ease;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .header-switcher {
          border: 1px solid rgba(139, 92, 246, 0.3);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.15), inset 0 0 10px rgba(139, 92, 246, 0.05);
        }
        .mode-btn {
          transition: all 0.3s ease;
          padding: 10px 20px;
          border-radius: 10px;
          background: transparent;
          border: 1px solid transparent;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
          position: relative;
        }
        .mode-btn.active {
          background: linear-gradient(135deg, #8B5CF6, #3B82F6);
          color: white;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4), 0 0 20px rgba(139, 92, 246, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.5);
        }
        .mode-btn:not(.active) {
          color: ${C.textMuted};
          border: 1px solid transparent;
        }
        .mode-btn:not(.active):hover {
          color: ${C.text};
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.2);
        }

        /* Drag and Drop Styles */
        .draggable-widget {
          cursor: grab;
          transition: all 0.2s ease;
        }
        .draggable-widget:active {
          cursor: grabbing;
        }
        .draggable-widget.dragging {
          opacity: 0.5;
          transform: scale(0.98);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
        }
        .draggable-widget.drag-over {
          border: 2px dashed ${C.purple} !important;
          background: rgba(139, 92, 246, 0.05) !important;
        }
        .drag-handle {
          cursor: grab;
          padding: 4px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${C.textMuted};
          transition: all 0.2s ease;
        }
        .drag-handle:hover {
          background: rgba(139, 92, 246, 0.2);
          color: ${C.purple};
        }
        .drag-handle:active {
          cursor: grabbing;
        }
        .widget-drag-indicator {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 4px;
          background: ${C.border};
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .draggable-widget:hover .widget-drag-indicator {
          opacity: 1;
        }
        
        /* Zone Styles */
        .zone-section {
          margin-bottom: 32px;
        }
        .zone-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding: 0 4px;
        }
        .zone-title {
          font-size: 18px;
          font-weight: 800;
          color: ${C.text};
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .zone-description {
          font-size: 13px;
          color: ${C.textMuted};
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6, #3B82F6, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .operator-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: ${C.bgAlt};
          margin-bottom: 8px;
        }
        
        .operator-rank {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
        }
        
        .notification-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          background: ${C.bgAlt};
          margin-bottom: 10px;
        }
        
        .rec-card {
          padding: 20px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        
        .rec-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }
        
        .rec-title {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        
        .rec-desc {
          font-size: 12px;
          color: ${C.textMuted};
          flex: 1;
          margin-bottom: 12px;
        }
        
        .rec-btn {
          padding: 10px 16px;
          border-radius: 10px;
          border: none;
          color: white;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          text-align: center;
        }
        
        .quick-action-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 14px;
          background: ${C.bgCard};
          border: 1px solid ${C.border};
          color: ${C.text};
          font-size: 14px;
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: all 0.2s;
        }
        .quick-action-btn:hover {
          border-color: ${C.purple}50;
          background: ${C.bgAlt};
        }
        
        .progress-bar {
          height: 8px;
          border-radius: 4px;
          background: ${C.bgAlt};
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
        
        .stat-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid ${C.border};
        }
        .stat-row:last-child {
          border-bottom: none;
        }
        
        .recording-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          background: ${C.bgAlt};
          margin-bottom: 10px;
        }
        
        .sip-card {
          padding: 16px 20px;
          border-radius: 14px;
          margin-bottom: 12px;
        }
        
        @media (max-width: 768px) {
          .widget-card { padding: 16px; }
          .metric-value { font-size: 22px; }
          .metric-indicator { width: 36px; height: 36px; font-size: 14px; }
          .header-switcher { flex-direction: column; gap: 8px; }
        }
      `}</style>

      {/* Main Content */}
      <main style={{ minHeight: '100vh' }}>

        {/* DASHBOARD MODE */}
        {mode === 'dashboard' && (
          <>
            {/* Заголовок дашборда */}
            <div style={{
              padding: '32px 24px 16px',
              textAlign: 'center',
            }}>
              <h1 style={{
                fontSize: '36px',
                fontWeight: 800,
                marginBottom: '8px',
                letterSpacing: '-1px',
              }}>
                Эффективность команды{' '}
                <span className="gradient-text">под контролем</span>
              </h1>
              <p style={{
                fontSize: '16px',
                color: C.textMuted,
              }}>
                тАйга показывает, кто работает эффективно, а кто требует внимания
              </p>
              {/* Single Add Widget Button */}
              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => {
                    setAddWidgetZone(null)
                    setShowAddWidgetModal(true)
                  }}
                  style={{
                    padding: '12px 24px',
                    borderRadius: 10,
                    background: 'transparent',
                    border: `1px dashed ${C.border}`,
                    color: C.textMuted,
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.purple
                    e.currentTarget.style.color = C.purple
                    e.currentTarget.style.background = `${C.purple}10`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border
                    e.currentTarget.style.color = C.textMuted
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <span style={{ fontSize: '18px' }}>+</span>
                  Добавить виджет
                </button>
              </div>
            </div>

            {/* Зоны виджетов */}
            {widgetZones.map((zone, zoneIndex) => (
              <div key={zone.id} style={{ marginBottom: zoneIndex < widgetZones.length - 1 ? '32px' : '0' }}>
                {/* Заголовок зоны */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px',
                  padding: '0 4px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <h2 style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: C.text,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      {zone.name}
                    </h2>
                    <span style={{
                      fontSize: '13px',
                      color: C.textMuted,
                    }}>
                      {zone.description}
                    </span>
                  </div>
                </div>
                
                {/* Виджеты зоны */}
                <div className="dashboard-grid">
                  {zone.widgets.map((widget) => (
                    <div
                      key={widget.id}
                      className={`widget-card draggable-widget ${draggedWidgetId === widget.id ? 'dragging' : ''} ${dragOverWidgetId === widget.id ? 'drag-over' : ''}`}
                      style={{ gridColumn: widget.gridColumn, position: 'relative' }}
                      draggable={true}
                      onDragStart={(e) => handleDragStart(e, widget.id)}
                      onDragOver={(e) => handleDragOver(e, widget.id)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, widget.id)}
                      onDragEnd={handleDragEnd}
                    >
                      {/* Drag indicator line */}
                      <div className="widget-drag-indicator" />
                      
                      <div className="widget-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {/* Drag handle */}
                          <div className="drag-handle" title="Перетащить для изменения порядка">
                            <GripVertical size={16} />
                          </div>
                          <div className="widget-title">{getWidgetIcon(widget.id)} {widget.name}</div>
                          {/* Метка кастомного виджета */}
                          {widget.id.startsWith('ai-widget-') && (
                            <span style={{
                              padding: '2px 8px',
                              borderRadius: 6,
                              background: `linear-gradient(135deg, ${C.purple}, #ec4899)`,
                              color: '#fff',
                              fontSize: '10px',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              Кастомный
                            </span>
                          )}
                        </div>
                        <div className="widget-actions">
                          <button 
                            className="widget-btn" 
                            onClick={() => {
                              if (widget.id.startsWith('ai-widget-')) {
                                setEditingCustomWidget(widget.id)
                              } else {
                                setSettingsWidget(widget.id)
                              }
                            }}
                            style={{ position: 'relative' }}
                          >
                            ⚙️
                            <span className="btn-tooltip">
                              {widget.id.startsWith('ai-widget-') ? 'Настроить ИИ-виджет' : 'Настройки виджета'}
                            </span>
                          </button>
                          {widget.id === 'traffic-light' && (
                            <button 
                              className="widget-btn" 
                              onClick={() => setShowMetricSelector(true)}
                              style={{ position: 'relative' }}
                            >
                              📊
                              <span className="btn-tooltip">Выбор метрик</span>
                            </button>
                          )}
                          <button 
                            className="widget-btn" 
                            onClick={() => removeWidget(widget.id)} 
                            style={{ color: C.red, position: 'relative' }}
                          >
                            ✕
                            <span className="btn-tooltip">Удалить виджет</span>
                          </button>
                        </div>
                      </div>
                      
                      {renderWidgetContent(widget.id)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {/* AI MODE */}
        {mode === 'ai' && (
          <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
            {/* Left Panel - Quick Actions */}
            <aside style={{
              width: 280, padding: '20px',
              background: C.bgAlt,
              borderRight: `1px solid ${C.border}`,
              display: 'flex', flexDirection: 'column', gap: '16px',
              overflow: 'auto',
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700 }}>⚡ Быстрые действия</h3>
              
              {[
                { icon: '🎙️', label: 'Подключить речевую аналитику' },
                { icon: '📞', label: 'Добавить SIP-номер' },
                { icon: '👥', label: 'Настроить колл-центр' },
                { icon: '🔔', label: 'Настроить уведомления' },
                { icon: '📊', label: 'Экспорт отчёта' },
              ].map((item, i) => (
                <button key={i} className="quick-action-btn">
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}

              <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: `1px solid ${C.border}` }}>
                <h4 style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: C.textMuted }}>
                  📚 Инструкции
                </h4>
                {[
                  'Как настроить интеграцию?',
                  'Как добавить оператора?',
                  'Как работает речевая аналитика?',
                ].map((q, i) => (
                  <button key={i} style={{
                    width: '100%', padding: '12px', marginBottom: '8px',
                    borderRadius: 10,
                    background: C.bgCard, border: 'none',
                    color: C.textMuted, fontSize: '12px', cursor: 'pointer',
                    textAlign: 'left',
                  }}>{q}</button>
                ))}
              </div>
            </aside>

            {/* Center - Chat */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px', overflow: 'hidden' }}>
              <div style={{
                flex: 1, overflow: 'auto',
                display: 'flex', flexDirection: 'column', gap: '16px',
                padding: '16px',
              }}>
                {chatMessages.map((msg, i) => (
                  <div key={i} className="chat-message" style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '70%',
                  }}>
                    <div style={{
                      padding: '16px 20px', borderRadius: 20,
                      background: msg.role === 'user' ? C.purple : C.bgCard,
                      border: `1px solid ${msg.role === 'user' ? C.purple : C.border}`,
                      fontSize: '14px', lineHeight: 1.6,
                    }}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex', gap: '12px',
                padding: '16px', borderRadius: 16,
                background: C.bgCard, border: `1px solid ${C.border}`,
              }}>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Спросите ИИ-помощника..."
                  style={{
                    flex: 1, padding: '14px 18px', borderRadius: 12,
                    background: C.bgAlt, border: 'none',
                    color: C.text, fontSize: '14px',
                  }}
                />
                <button onClick={sendChatMessage} style={{
                  padding: '14px 24px', borderRadius: 12,
                  background: C.gradient, border: 'none',
                  color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
                }}>
                  Отправить
                </button>
              </div>
            </div>

            {/* Right Panel - Status */}
            <aside style={{
              width: 300, padding: '20px',
              background: C.bgAlt,
              borderLeft: `1px solid ${C.border}`,
              display: 'flex', flexDirection: 'column', gap: '16px',
              overflow: 'auto',
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700 }}>📈 Статус системы</h3>
              
              <div style={{ padding: '18px', borderRadius: 14, background: C.bgCard }}>
                {[
                  { name: 'SIP-телефония', status: 'active', value: 'Активно' },
                  { name: 'Речевая аналитика', status: 'inactive', value: 'Не подключено' },
                  { name: 'Колл-центр', status: 'active', value: '8/10 операторов' },
                ].map((item, i) => (
                  <div key={i} className="stat-row">
                    <span style={{ fontSize: '12px', color: C.textMuted }}>{item.name}</span>
                    <span style={{
                      fontSize: '12px',
                      color: item.status === 'active' ? C.green : C.orange,
                    }}>● {item.value}</span>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '12px', fontWeight: 600, color: C.textMuted }}>
                🎯 Текущие цели
              </h4>
              
              <div style={{ padding: '18px', borderRadius: 14, background: C.bgCard }}>
                {[
                  { label: 'Конверсия', current: 23, target: 30, inverse: false },
                  { label: 'NPS', current: 72, target: 80, inverse: false },
                  { label: 'Пропущенные', current: 47, target: 30, inverse: true },
                ].map((goal, i) => (
                  <div key={i} style={{ marginBottom: i < 2 ? '16px' : 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                      <span>{goal.label}</span>
                      <span style={{ color: C.textMuted }}>{goal.current}/{goal.target}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{
                        width: `${Math.min(100, (goal.current / goal.target) * 100)}%`,
                        background: goal.inverse 
                          ? (goal.current > goal.target ? C.red : C.green)
                          : (goal.current >= goal.target ? C.green : C.orange),
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              <button style={{
                marginTop: 'auto', padding: '16px', borderRadius: 14,
                background: C.gradient, border: 'none',
                color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
              }}>
                📊 Открыть полный отчёт
              </button>
            </aside>
          </div>
        )}

        {/* Floating Chat Icon - только в режиме Dashboard */}
        {mode === 'dashboard' && (
          <>
            {/* Плавающая кнопка чата */}
            <button
              onClick={() => setShowFloatingChat(!showFloatingChat)}
              style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: showFloatingChat ? C.bgAlt : C.gradient,
                border: `2px solid ${showFloatingChat ? C.purple : 'transparent'}`,
                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                zIndex: 300,
                transition: 'all 0.3s ease',
                transform: showFloatingChat ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              {showFloatingChat ? '✕' : '💬'}
            </button>

            {/* Плавающее окно чата */}
            {showFloatingChat && (
              <div style={{
                position: 'fixed',
                bottom: '100px',
                right: '24px',
                width: '380px',
                height: '500px',
                borderRadius: '24px',
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                zIndex: 299,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                animation: 'slideUp 0.3s ease',
              }}>
                {/* Header */}
                <div style={{
                  padding: '20px',
                  borderBottom: `1px solid ${C.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    width: '40px', height: '40px',
                    borderRadius: '12px',
                    background: C.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px',
                  }}>🤖</div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700 }}>ИИ-помощник</div>
                    <div style={{ fontSize: '12px', color: C.green }}>● Онлайн</div>
                  </div>
                </div>

                {/* Messages */}
                <div style={{
                  flex: 1,
                  overflow: 'auto',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  {floatingChatMessages.map((msg, i) => (
                    <div key={i} style={{
                      alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '85%',
                    }}>
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: 16,
                        background: msg.role === 'user' ? C.purple : C.bgAlt,
                        fontSize: '13px',
                        lineHeight: 1.5,
                      }}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div style={{
                  padding: '12px 16px',
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}>
                  {['Настроить метрики', 'Подключить услугу', 'Экспорт отчёта'].map((action, i) => (
                    <button key={i} style={{
                      padding: '8px 12px',
                      borderRadius: 20,
                      background: C.bgAlt,
                      border: `1px solid ${C.border}`,
                      color: C.textMuted,
                      fontSize: '11px',
                      cursor: 'pointer',
                    }}>
                      {action}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div style={{
                  padding: '16px',
                  borderTop: `1px solid ${C.border}`,
                  display: 'flex',
                  gap: '10px',
                }}>
                  <input
                    type="text"
                    value={floatingChatInput}
                    onChange={(e) => setFloatingChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendFloatingChatMessage()}
                    placeholder="Спросите что-нибудь..."
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      borderRadius: 12,
                      background: C.bgAlt,
                      border: 'none',
                      color: C.text,
                      fontSize: '13px',
                    }}
                  />
                  <button
                    onClick={sendFloatingChatMessage}
                    style={{
                      padding: '12px 18px',
                      borderRadius: 12,
                      background: C.gradient,
                      border: 'none',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Metric Selector Modal */}
      {showMetricSelector && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 200, padding: '20px',
        }}>
          <div style={{
            width: '100%', maxWidth: 450, borderRadius: 24,
            background: C.bgCard, border: `1px solid ${C.border}`,
            padding: '28px',
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '24px' }}>
              Выберите метрики для светофора
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {metrics.map(metric => (
                <label key={metric.id} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 18px', borderRadius: 14,
                  background: C.bgAlt,
                  cursor: 'pointer',
                }}>
                  <input
                    type="checkbox"
                    checked={metric.selected}
                    onChange={() => toggleMetricSelection(metric.id)}
                    style={{ width: 20, height: 20, accentColor: C.purple }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>{metric.name}</div>
                    <div style={{ fontSize: '12px', color: C.textMuted }}>
                      Текущее: {metric.value.toLocaleString()}{metric.unit} / Цель: {metric.target}{metric.unit}
                    </div>
                  </div>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%',
                    background: getStatusColor(metric.status),
                    boxShadow: `0 0 12px ${getStatusColor(metric.status)}60`,
                  }} />
                </label>
              ))}
            </div>
            <button onClick={() => setShowMetricSelector(false)} style={{
              width: '100%', marginTop: '24px', padding: '16px', borderRadius: 14,
              background: C.gradient, border: 'none',
              color: '#fff', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
            }}>
              Сохранить
            </button>
          </div>
        </div>
      )}

      {/* IVR Configuration Modal - Node Scheme */}
      {showIVRModal && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 300, padding: '20px',
        }}>
          <div style={{
            width: '100%', maxWidth: 1200, height: '90vh', maxHeight: 850,
            borderRadius: 24,
            background: C.bgCard, border: `1px solid ${C.border}`,
            display: 'flex', flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
          }}>
            {/* Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: `1px solid ${C.border}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: C.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px',
                }}>📞</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 800 }}>Конструктор IVR</div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>Настройте голосовое меню с помощью визуальной схемы</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '8px 16px',
                  borderRadius: 20,
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: `1px solid ${C.green}30`,
                  fontSize: '12px',
                  color: C.green,
                }}>
                  ✓ 2 уровня вложенности
                </div>
                <button onClick={() => setShowIVRModal(false)} style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: C.bgAlt, border: 'none',
                  color: C.textMuted, fontSize: '18px', cursor: 'pointer',
                }}>✕</button>
              </div>
            </div>

            {/* Main Content - Split View */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
              {/* Left: Node Scheme Canvas */}
              <div style={{
                flex: 1,
                padding: '30px',
                overflow: 'auto',
                background: `linear-gradient(135deg, ${C.bg} 0%, ${C.bgAlt} 100%)`,
                position: 'relative',
              }}>
                <style>{`
                  .ivr-node { transition: all 0.2s ease; cursor: pointer; }
                  .ivr-node:hover { transform: translateY(-2px); }
                  .ivr-node.selected { box-shadow: 0 0 0 3px ${C.purple}50; }
                `}</style>
                
                {/* Connection Lines SVG */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                  <defs>
                    <marker id="arrowhead-ivr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill={C.purple} opacity="0.6" />
                    </marker>
                  </defs>
                  {/* Lines from Greeting to Menu */}
                  <path d="M 280 80 Q 280 120 280 140" stroke={C.purple} strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.6" />
                  {/* Lines from Menu to Transfers */}
                  <path d="M 180 240 Q 120 280 120 300" stroke={ivrConfig.menuOptions[0]?.color || C.green} strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.6" />
                  <path d="M 280 240 Q 280 280 280 300" stroke={ivrConfig.menuOptions[1]?.color || C.orange} strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.6" />
                  <path d="M 380 240 Q 440 280 440 300" stroke={ivrConfig.menuOptions[2]?.color || C.blue} strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.6" />
                </svg>

                {/* Level 1: Greeting Node */}
                <div
                  onClick={() => setSelectedIVRNode('greeting')}
                  className={`ivr-node ${selectedIVRNode === 'greeting' ? 'selected' : ''}`}
                  style={{
                    position: 'relative',
                    width: 320,
                    margin: '0 auto',
                    padding: '20px',
                    borderRadius: 16,
                    background: `linear-gradient(135deg, ${C.bgNode}, ${C.bgCard})`,
                    border: `2px solid ${selectedIVRNode === 'greeting' ? C.purple : C.purple}`,
                    boxShadow: `0 8px 32px rgba(139, 92, 246, 0.3)`,
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: C.gradient,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px',
                    }}>👋</div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700 }}>Приветствие</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Начало звонка • Уровень 0</div>
                    </div>
                    {selectedIVRNode === 'greeting' && (
                      <div style={{ marginLeft: 'auto', padding: '4px 10px', borderRadius: 6, background: C.purple, fontSize: '10px', color: '#fff' }}>
                        Редактируется
                      </div>
                    )}
                  </div>
                  <div style={{
                    padding: '14px',
                    borderRadius: 10,
                    background: C.bgAlt,
                    fontSize: '12px',
                    color: C.textMuted,
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                  }}>
                    "{ivrConfig.greeting.message}"
                  </div>
                  {/* Connector dot */}
                  <div style={{
                    position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)',
                    width: 16, height: 16, borderRadius: '50%',
                    background: C.purple, border: `3px solid ${C.bg}`,
                  }} />
                </div>

                {/* Level 2: Menu Node */}
                <div
                  onClick={() => setSelectedIVRNode('menu')}
                  className={`ivr-node ${selectedIVRNode === 'menu' ? 'selected' : ''}`}
                  style={{
                    position: 'relative',
                    width: 400,
                    margin: '70px auto 0',
                    padding: '20px',
                    borderRadius: 16,
                    background: `linear-gradient(135deg, ${C.bgNode}, ${C.bgCard})`,
                    border: `2px solid ${selectedIVRNode === 'menu' ? C.orange : C.orange}`,
                    boxShadow: `0 8px 32px rgba(245, 158, 11, 0.3)`,
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: `linear-gradient(135deg, ${C.orange}, #F59E0B)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px',
                    }}>📋</div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700 }}>Главное меню</div>
                      <div style={{ fontSize: '11px', color: C.textMuted }}>Голосовое меню • Уровень 1</div>
                    </div>
                    {selectedIVRNode === 'menu' && (
                      <div style={{ marginLeft: 'auto', padding: '4px 10px', borderRadius: 6, background: C.orange, fontSize: '10px', color: '#000' }}>
                        Редактируется
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {ivrConfig.menuOptions.map((opt, i) => (
                      <div key={i} style={{
                        padding: '10px 16px',
                        borderRadius: 10,
                        background: C.bgAlt,
                        border: `1px solid ${opt.color}40`,
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                        <span style={{
                          width: 24, height: 24, borderRadius: 6,
                          background: opt.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '12px', fontWeight: 700, color: '#fff',
                        }}>{opt.key}</span>
                        {opt.label}
                      </div>
                    ))}
                  </div>
                  {/* Connector dots */}
                  <div style={{
                    position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
                    width: 16, height: 16, borderRadius: '50%',
                    background: C.purple, border: `3px solid ${C.bg}`,
                  }} />
                  {ivrConfig.menuOptions.map((opt, i) => {
                    const positions = ['20%', '50%', '80%']
                    return (
                      <div key={i} style={{
                        position: 'absolute', bottom: -8, left: positions[i], transform: 'translateX(-50%)',
                        width: 12, height: 12, borderRadius: '50%',
                        background: opt.color, border: `3px solid ${C.bg}`,
                      }} />
                    )
                  })}
                </div>

                {/* Level 3: Transfer Nodes */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '30px',
                  margin: '70px auto 0',
                  maxWidth: 550,
                }}>
                  {ivrConfig.menuOptions.map((opt, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedIVRNode(`transfer-${i}`)}
                      className={`ivr-node ${selectedIVRNode === `transfer-${i}` ? 'selected' : ''}`}
                      style={{
                        position: 'relative',
                        flex: 1,
                        padding: '18px',
                        borderRadius: 14,
                        background: `linear-gradient(135deg, ${C.bgNode}, ${C.bgCard})`,
                        border: `2px solid ${opt.color}`,
                        boxShadow: `0 4px 20px ${opt.color}33`,
                      }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '24px' }}>
                          {opt.label === 'Продажи' ? '💰' : opt.label === 'Поддержка' ? '🛠️' : '👤'}
                        </span>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 700 }}>{opt.label}</div>
                          <div style={{ fontSize: '11px', color: opt.color }}>доб. {opt.extension}</div>
                        </div>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        color: C.textMuted,
                      }}>
                        <span style={{
                          width: 8, height: 8, borderRadius: '50%',
                          background: C.green,
                        }} />
                        {opt.operators} оператор{opt.operators > 1 ? 'а' : ''} онлайн
                      </div>
                      {/* Connector dot */}
                      <div style={{
                        position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
                        width: 12, height: 12, borderRadius: '50%',
                        background: opt.color, border: `3px solid ${C.bg}`,
                      }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Edit Panel */}
              <div style={{
                width: 340,
                background: C.bgAlt,
                borderLeft: `1px solid ${C.border}`,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  padding: '20px',
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>
                    {selectedIVRNode === 'greeting' && '✏️ Редактирование приветствия'}
                    {selectedIVRNode === 'menu' && '✏️ Редактирование меню'}
                    {selectedIVRNode?.startsWith('transfer-') && '✏️ Редактирование отдела'}
                    {!selectedIVRNode && '👆 Выберите узел для редактирования'}
                  </div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>
                    {selectedIVRNode ? 'Измените параметры и сохраните' : 'Кликните на узел в схеме'}
                  </div>
                </div>

                <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
                  {/* Greeting Edit */}
                  {selectedIVRNode === 'greeting' && (
                    <div>
                      <label style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px', display: 'block' }}>
                        Текст приветствия
                      </label>
                      <textarea
                        value={ivrConfig.greeting.message}
                        onChange={(e) => setIVRConfig(prev => ({
                          ...prev,
                          greeting: { ...prev.greeting, message: e.target.value }
                        }))}
                        style={{
                          width: '100%',
                          height: 120,
                          padding: '14px',
                          borderRadius: 12,
                          background: C.bgCard,
                          border: `1px solid ${C.border}`,
                          color: C.text,
                          fontSize: '13px',
                          lineHeight: 1.6,
                          resize: 'none',
                        }}
                      />
                      <div style={{ fontSize: '11px', color: C.textLight, marginTop: '8px' }}>
                        💡 Используйте понятные инструкции для абонентов
                      </div>
                    </div>
                  )}

                  {/* Menu Edit */}
                  {selectedIVRNode === 'menu' && (
                    <div>
                      <label style={{ fontSize: '12px', color: C.textMuted, marginBottom: '12px', display: 'block' }}>
                        Пункты меню
                      </label>
                      {ivrConfig.menuOptions.map((opt, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          gap: '10px',
                          marginBottom: '12px',
                          padding: '12px',
                          borderRadius: 10,
                          background: C.bgCard,
                          border: `1px solid ${opt.color}40`,
                        }}>
                          <input
                            type="text"
                            value={opt.key}
                            onChange={(e) => {
                              const newOptions = [...ivrConfig.menuOptions]
                              newOptions[i] = { ...newOptions[i], key: e.target.value }
                              setIVRConfig(prev => ({ ...prev, menuOptions: newOptions }))
                            }}
                            style={{
                              width: 40,
                              padding: '8px',
                              borderRadius: 8,
                              background: C.bgAlt,
                              border: `1px solid ${C.border}`,
                              color: C.text,
                              fontSize: '14px',
                              textAlign: 'center',
                            }}
                          />
                          <input
                            type="text"
                            value={opt.label}
                            onChange={(e) => {
                              const newOptions = [...ivrConfig.menuOptions]
                              newOptions[i] = { ...newOptions[i], label: e.target.value }
                              setIVRConfig(prev => ({ ...prev, menuOptions: newOptions }))
                            }}
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              borderRadius: 8,
                              background: C.bgAlt,
                              border: `1px solid ${C.border}`,
                              color: C.text,
                              fontSize: '13px',
                            }}
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          setIVRConfig(prev => ({
                            ...prev,
                            menuOptions: [...prev.menuOptions, {
                              key: String(prev.menuOptions.length + 1),
                              label: 'Новый пункт',
                              extension: '100',
                              operators: 1,
                              color: '#8B5CF6'
                            }]
                          }))
                        }}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: 10,
                          background: 'transparent',
                          border: `1px dashed ${C.border}`,
                          color: C.textMuted,
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}>
                        + Добавить пункт меню
                      </button>
                    </div>
                  )}

                  {/* Transfer Edit */}
                  {selectedIVRNode?.startsWith('transfer-') && (
                    (() => {
                      const index = parseInt(selectedIVRNode.split('-')[1])
                      const opt = ivrConfig.menuOptions[index]
                      if (!opt) return null
                      return (
                        <div>
                          <div style={{
                            padding: '16px',
                            borderRadius: 12,
                            background: `${opt.color}15`,
                            border: `1px solid ${opt.color}40`,
                            marginBottom: '20px',
                          }}>
                            <div style={{ fontSize: '18px', fontWeight: 700, color: opt.color, marginBottom: '4px' }}>
                              {opt.label}
                            </div>
                            <div style={{ fontSize: '12px', color: C.textMuted }}>
                              Клавиша {opt.key} • доб. {opt.extension}
                            </div>
                          </div>

                          <div style={{ marginBottom: '16px' }}>
                            <label style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px', display: 'block' }}>
                              Название отдела
                            </label>
                            <input
                              type="text"
                              value={opt.label}
                              onChange={(e) => {
                                const newOptions = [...ivrConfig.menuOptions]
                                newOptions[index] = { ...newOptions[index], label: e.target.value }
                                setIVRConfig(prev => ({ ...prev, menuOptions: newOptions }))
                              }}
                              style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: 10,
                                background: C.bgCard,
                                border: `1px solid ${C.border}`,
                                color: C.text,
                                fontSize: '14px',
                              }}
                            />
                          </div>

                          <div style={{ marginBottom: '16px' }}>
                            <label style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px', display: 'block' }}>
                              Добавочный номер
                            </label>
                            <input
                              type="text"
                              value={opt.extension}
                              onChange={(e) => {
                                const newOptions = [...ivrConfig.menuOptions]
                                newOptions[index] = { ...newOptions[index], extension: e.target.value }
                                setIVRConfig(prev => ({ ...prev, menuOptions: newOptions }))
                              }}
                              style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: 10,
                                background: C.bgCard,
                                border: `1px solid ${C.border}`,
                                color: C.text,
                                fontSize: '14px',
                              }}
                            />
                          </div>

                          <div style={{ marginBottom: '16px' }}>
                            <label style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px', display: 'block' }}>
                              Количество операторов
                            </label>
                            <input
                              type="number"
                              value={opt.operators}
                              onChange={(e) => {
                                const newOptions = [...ivrConfig.menuOptions]
                                newOptions[index] = { ...newOptions[index], operators: parseInt(e.target.value) || 1 }
                                setIVRConfig(prev => ({ ...prev, menuOptions: newOptions }))
                              }}
                              style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: 10,
                                background: C.bgCard,
                                border: `1px solid ${C.border}`,
                                color: C.text,
                                fontSize: '14px',
                              }}
                            />
                          </div>

                          <div>
                            <label style={{ fontSize: '12px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                              Цвет узла
                            </label>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              {['#10B981', '#F59E0B', '#3B82F6', '#8B5CF6', '#EF4444', '#06B6D4'].map(color => (
                                <button
                                  key={color}
                                  onClick={() => {
                                    const newOptions = [...ivrConfig.menuOptions]
                                    newOptions[index] = { ...newOptions[index], color }
                                    setIVRConfig(prev => ({ ...prev, menuOptions: newOptions }))
                                  }}
                                  style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 8,
                                    background: color,
                                    border: opt.color === color ? '3px solid #fff' : 'none',
                                    cursor: 'pointer',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    })()
                  )}

                  {/* No selection */}
                  {!selectedIVRNode && (
                    <div style={{
                      textAlign: 'center',
                      padding: '40px 20px',
                      color: C.textMuted,
                    }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.3 }}>🎯</div>
                      <div style={{ fontSize: '14px', marginBottom: '8px' }}>Выберите узел на схеме</div>
                      <div style={{ fontSize: '12px', lineHeight: 1.6 }}>
                        Кликните на любой элемент IVR-схемы,<br />чтобы открыть его настройки
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div style={{
              padding: '20px 24px',
              borderTop: `1px solid ${C.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '12px', color: C.textMuted }}>
                {ivrConfig.configured 
                  ? '✓ IVR настроен и активен' 
                  : '⚙️ Настройте IVR и нажмите Сохранить'}
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setShowIVRModal(false)} style={{
                  padding: '14px 28px', borderRadius: 12,
                  background: C.bgAlt, border: `1px solid ${C.border}`,
                  color: C.text, fontWeight: 600, fontSize: '14px', cursor: 'pointer',
                }}>
                  Отмена
                </button>
                <button 
                  onClick={() => {
                    setIVRConfig(prev => ({ ...prev, configured: true }))
                    setMetrics(prev => prev.map(m => 
                      m.id === 'avgTime' ? { ...m, status: 'green' as const, aiAdvice: '' } : m
                    ))
                    setShowIVRModal(false)
                  }}
                  style={{
                  padding: '14px 32px', borderRadius: 12,
                  background: C.gradient, border: 'none',
                  color: '#fff', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
                }}>
                  💾 Сохранить изменения
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Widget Settings Modal - Контекстные настройки */}
      {settingsWidget && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 200, padding: '20px',
        }}>
          <div style={{
            width: '100%', maxWidth: 520, borderRadius: 24,
            background: C.bgCard, border: `1px solid ${C.border}`,
            padding: '28px',
            maxHeight: '90vh',
            overflow: 'auto',
          }}>
            {/* Светофор метрик */}
            {settingsWidget === 'traffic-light' && (
              <>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  🚦 Настройки светофора метрик
                </h3>
                <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '24px' }}>
                  Установите целевые показатели и пороги уведомлений
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Пороговые значения для конверсии
                  </label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '11px', color: C.red }}>🔴 Красный (критично)</span>
                      <input type="number" defaultValue={15} style={{
                        width: '100%', marginTop: '8px', padding: '12px', borderRadius: 10,
                        background: C.bgAlt, border: `1px solid ${C.border}`,
                        color: C.text, fontSize: '14px',
                      }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '11px', color: C.orange }}>🟡 Жёлтый (внимание)</span>
                      <input type="number" defaultValue={20} style={{
                        width: '100%', marginTop: '8px', padding: '12px', borderRadius: 10,
                        background: C.bgAlt, border: `1px solid ${C.border}`,
                        color: C.text, fontSize: '14px',
                      }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '11px', color: C.green }}>🟢 Зелёный (норма)</span>
                      <input type="number" defaultValue={25} style={{
                        width: '100%', marginTop: '8px', padding: '12px', borderRadius: 10,
                        background: C.bgAlt, border: `1px solid ${C.border}`,
                        color: C.text, fontSize: '14px',
                      }} />
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Целевое значение пропущенных звонков
                  </label>
                  <input type="number" defaultValue={30} style={{
                    width: '100%', padding: '14px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontSize: '15px',
                  }} />
                  <span style={{ fontSize: '11px', color: C.textLight, marginTop: '6px', display: 'block' }}>
                    Уведомление при превышении этого значения
                  </span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Целевое время ответа (секунды)
                  </label>
                  <input type="number" defaultValue={30} style={{
                    width: '100%', padding: '14px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontSize: '15px',
                  }} />
                </div>
              </>
            )}

            {/* График звонков */}
            {settingsWidget === 'calls-chart' && (
              <>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  📊 Настройки графика звонков
                </h3>
                <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '24px' }}>
                  Выберите период и метрики для отображения
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Период отображения
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['Сегодня', 'Неделя', 'Месяц', 'Квартал'].map((period, i) => (
                      <button key={i} style={{
                        flex: 1, padding: '12px', borderRadius: 10,
                        background: i === 1 ? C.purple : C.bgAlt,
                        border: `1px solid ${i === 1 ? C.purple : C.border}`,
                        color: i === 1 ? '#fff' : C.text,
                        fontSize: '13px', cursor: 'pointer',
                      }}>{period}</button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Метрики на графике
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Входящие звонки', 'Пропущенные', 'Конверсия', 'Средняя длительность'].map((metric, i) => (
                      <label key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '12px 16px', borderRadius: 10,
                        background: C.bgAlt,
                      }}>
                        <input type="checkbox" defaultChecked={i < 2} style={{ width: 18, height: 18, accentColor: C.purple }} />
                        <span style={{ fontSize: '14px' }}>{metric}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Рейтинг операторов */}
            {settingsWidget === 'operators' && (
              <>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  👥 Настройки рейтинга операторов
                </h3>
                <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '24px' }}>
                  Настройте критерии оценки и отображения
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Критерии ранжирования
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Рейтинг качества', desc: 'Оценка на основе отзывов' },
                      { name: 'Количество звонков', desc: 'Общее число обработанных' },
                      { name: 'Конверсия', desc: '% успешных сделок' },
                      { name: 'Время ответа', desc: 'Среднее время' },
                    ].map((criteria, i) => (
                      <label key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '14px 16px', borderRadius: 12,
                        background: C.bgAlt,
                      }}>
                        <input type="checkbox" defaultChecked={i === 0} style={{ width: 18, height: 18, accentColor: C.purple }} />
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600 }}>{criteria.name}</div>
                          <div style={{ fontSize: '11px', color: C.textMuted }}>{criteria.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Порог предупреждения (рейтинг ниже)
                  </label>
                  <input type="number" defaultValue={3.5} step={0.1} style={{
                    width: '100%', padding: '14px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontSize: '15px',
                  }} />
                </div>
              </>
            )}

            {/* Пропущенные звонки */}
            {settingsWidget === 'missed-calls' && (
              <>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  📱 Настройки пропущенных звонков
                </h3>
                <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '24px' }}>
                  Настройте автоперезвон и уведомления
                </p>

                <div style={{ marginBottom: '20px', padding: '16px', borderRadius: 14, background: C.bgAlt }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>🔄 Автоперезвон</span>
                    <div style={{
                      width: 48, height: 26, borderRadius: 13,
                      background: C.green, position: 'relative', cursor: 'pointer',
                    }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: '50%', background: '#fff',
                        position: 'absolute', right: 2, top: 2,
                      }} />
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', color: C.textMuted }}>
                    Автоматический перезвон клиенту в течение заданного времени
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Задержка автоперезвона (минуты)
                  </label>
                  <input type="number" defaultValue={5} style={{
                    width: '100%', padding: '14px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontSize: '15px',
                  }} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Максимальное количество попыток
                  </label>
                  <input type="number" defaultValue={3} style={{
                    width: '100%', padding: '14px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontSize: '15px',
                  }} />
                </div>
              </>
            )}

            {/* Записи разговоров */}
            {settingsWidget === 'recordings' && (
              <>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  📞 Настройки записей разговоров
                </h3>
                <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '24px' }}>
                  Управление хранением и анализом записей
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Срок хранения записей
                  </label>
                  <select style={{
                    width: '100%', padding: '14px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontSize: '15px',
                  }}>
                    <option>30 дней</option>
                    <option selected>90 дней</option>
                    <option>180 дней</option>
                    <option>1 год</option>
                    <option>Бессрочно</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px', padding: '16px', borderRadius: 14, background: C.bgAlt }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>🎭 Анализ тональности</span>
                    <div style={{
                      width: 48, height: 26, borderRadius: 13,
                      background: C.green, position: 'relative', cursor: 'pointer',
                    }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: '50%', background: '#fff',
                        position: 'absolute', right: 2, top: 2,
                      }} />
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', color: C.textMuted }}>
                    ИИ автоматически определяет настроение клиента
                  </p>
                </div>

                <div style={{ marginBottom: '20px', padding: '16px', borderRadius: 14, background: C.bgAlt }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>📝 Транскрипция</span>
                    <div style={{
                      width: 48, height: 26, borderRadius: 13,
                      background: C.bgCard, position: 'relative', cursor: 'pointer',
                    }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: '50%', background: C.textMuted,
                        position: 'absolute', left: 2, top: 2,
                      }} />
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', color: C.textMuted }}>
                    Преобразование речи в текст для поиска
                  </p>
                </div>
              </>
            )}

            {/* SIP */}
            {settingsWidget === 'sip' && (
              <>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  ⚙️ Настройки SIP-телефонии
                </h3>
                <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '24px' }}>
                  Управление номерами и маршрутизацией
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700 }}>Подключённые номера</span>
                    <button style={{
                      padding: '8px 14px', borderRadius: 8,
                      background: C.purple, border: 'none',
                      color: '#fff', fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                    }}>+ Добавить</button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ padding: '14px 16px', borderRadius: 12, background: `${C.green}10`, border: `1px solid ${C.green}30` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: 700 }}>+7 (800) 555-35-35</div>
                          <div style={{ fontSize: '11px', color: C.green }}>● Основной номер</div>
                        </div>
                        <button style={{ padding: '6px 10px', borderRadius: 6, background: 'transparent', border: `1px solid ${C.border}`, color: C.textMuted, fontSize: '11px', cursor: 'pointer' }}>Настроить</button>
                      </div>
                    </div>
                    <div style={{ padding: '14px 16px', borderRadius: 12, background: C.bgAlt }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: 700 }}>+7 (800) 123-45-67</div>
                          <div style={{ fontSize: '11px', color: C.orange }}>● Дополнительный</div>
                        </div>
                        <button style={{ padding: '6px 10px', borderRadius: 6, background: 'transparent', border: `1px solid ${C.border}`, color: C.textMuted, fontSize: '11px', cursor: 'pointer' }}>Настроить</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Маршрутизация по умолчанию
                  </label>
                  <select style={{
                    width: '100%', padding: '14px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontSize: '15px',
                  }}>
                    <option>Все операторы</option>
                    <option>По очереди</option>
                    <option>По навыкам</option>
                    <option>Географически</option>
                  </select>
                </div>
              </>
            )}

            {/* Уведомления */}
            {settingsWidget === 'notifications' && (
              <>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  🔔 Настройки уведомлений
                </h3>
                <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '24px' }}>
                  Настройте правила и каналы уведомлений
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Каналы уведомлений
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {[
                      { icon: '📧', name: 'Email', enabled: true },
                      { icon: '✈️', name: 'Telegram', enabled: true },
                      { icon: '📲', name: 'Push', enabled: true },
                      { icon: '💬', name: 'SMS', enabled: false },
                    ].map((channel, i) => (
                      <label key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '14px 16px', borderRadius: 12,
                        background: C.bgAlt,
                        border: channel.enabled ? `1px solid ${C.purple}40` : `1px solid ${C.border}`,
                      }}>
                        <span style={{ fontSize: '20px' }}>{channel.icon}</span>
                        <span style={{ fontSize: '14px', flex: 1 }}>{channel.name}</span>
                        <input type="checkbox" defaultChecked={channel.enabled} style={{ width: 18, height: 18, accentColor: C.purple }} />
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700 }}>Правила уведомлений</span>
                    <button style={{
                      padding: '8px 14px', borderRadius: 8,
                      background: C.purple, border: 'none',
                      color: '#fff', fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                    }}>+ Добавить</button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { condition: 'Пропущенные > 50', channel: 'Telegram', color: C.red },
                      { condition: 'Конверсия < 15%', channel: 'Email + Push', color: C.orange },
                      { condition: 'NPS < 60', channel: 'Email', color: C.orange },
                    ].map((rule, i) => (
                      <div key={i} style={{
                        padding: '14px 16px', borderRadius: 12, background: C.bgAlt,
                        borderLeft: `3px solid ${rule.color}`,
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontSize: '13px', fontWeight: 600 }}>{rule.condition}</div>
                            <div style={{ fontSize: '11px', color: C.textMuted }}>Канал: {rule.channel}</div>
                          </div>
                          <button style={{ padding: '6px', background: 'transparent', border: 'none', color: C.textMuted, cursor: 'pointer' }}>✏️</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Эффективность отделов */}
            {settingsWidget === 'efficiency' && (
              <>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                  📊 Настройки эффективности отделов
                </h3>
                <p style={{ fontSize: '13px', color: C.textMuted, marginBottom: '24px' }}>
                  Выберите отделы для отображения и настройте пороги
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '12px', display: 'block' }}>
                    Отображаемые отделы
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'Продажи', efficiency: 94, enabled: true },
                      { name: 'Поддержка', efficiency: 87, enabled: true },
                      { name: 'Маркетинг', efficiency: 72, enabled: true },
                      { name: 'Отдел звонков', efficiency: 58, enabled: true },
                      { name: 'IT-отдел', efficiency: 91, enabled: false },
                      { name: 'Финансы', efficiency: 85, enabled: false },
                      { name: 'HR-отдел', efficiency: 78, enabled: false },
                      { name: 'Логистика', efficiency: 82, enabled: false },
                    ].map((dept, i) => (
                      <label key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '14px',
                        padding: '14px 16px', borderRadius: 12,
                        background: C.bgAlt,
                        border: dept.enabled ? `1px solid ${C.purple}40` : `1px solid ${C.border}`,
                        cursor: 'pointer',
                      }}>
                        <input type="checkbox" defaultChecked={dept.enabled} style={{ width: 18, height: 18, accentColor: C.purple }} />
                        <span style={{ fontSize: '14px', fontWeight: 600, flex: 1 }}>{dept.name}</span>
                        <span style={{ 
                          fontSize: '13px', 
                          color: dept.efficiency >= 80 ? C.green : dept.efficiency >= 60 ? C.orange : C.red,
                          fontWeight: 600 
                        }}>
                          {dept.efficiency}%
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Порог эффективности (красная зона)
                  </label>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <input type="range" min={40} max={80} defaultValue={60} style={{ flex: 1, accentColor: C.purple }} />
                    <span style={{ 
                      padding: '8px 16px', 
                      background: C.bgAlt, 
                      borderRadius: 8, 
                      fontSize: '14px', 
                      fontWeight: 600,
                      border: `1px solid ${C.border}`,
                    }}>
                      {'<'} 60%
                    </span>
                  </div>
                  <span style={{ fontSize: '11px', color: C.textLight, marginTop: '6px', display: 'block' }}>
                    Отделы с эффективностью ниже порога будут выделены красным
                  </span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Порог внимания (жёлтая зона)
                  </label>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <input type="range" min={60} max={90} defaultValue={75} style={{ flex: 1, accentColor: C.purple }} />
                    <span style={{ 
                      padding: '8px 16px', 
                      background: C.bgAlt, 
                      borderRadius: 8, 
                      fontSize: '14px', 
                      fontWeight: 600,
                      border: `1px solid ${C.border}`,
                    }}>
                      60-75%
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '13px', color: C.textMuted, marginBottom: '10px', display: 'block' }}>
                    Сортировка отделов
                  </label>
                  <select style={{
                    width: '100%', padding: '14px 16px', borderRadius: 10,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontSize: '14px', cursor: 'pointer',
                  }}>
                    <option>По эффективности (убывание)</option>
                    <option>По эффективности (возрастание)</option>
                    <option>По названию (А-Я)</option>
                    <option>По тренду</option>
                  </select>
                </div>
              </>
            )}

            {/* Кнопки действий */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button onClick={() => setSettingsWidget(null)} style={{
                flex: 1, padding: '16px', borderRadius: 14,
                background: C.bgAlt, border: `1px solid ${C.border}`,
                color: C.text, fontWeight: 600, fontSize: '15px', cursor: 'pointer',
              }}>
                Отмена
              </button>
              <button onClick={() => setSettingsWidget(null)} style={{
                flex: 1, padding: '16px', borderRadius: 14,
                background: C.gradient, border: 'none',
                color: '#fff', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
              }}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Widget Settings Modal - Настройки ИИ-виджета */}
      {editingCustomWidget && (() => {
        const customWidget = customWidgets.find(cw => cw.id === editingCustomWidget)
        if (!customWidget) return null
        
        return (
          <div style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 200, padding: '20px',
          }}>
            <div style={{
              width: '100%', maxWidth: 700, borderRadius: 24,
              background: C.bgCard, border: `1px solid ${C.border}`,
              padding: '28px',
              maxHeight: '90vh',
              overflow: 'auto',
            }}>
              {/* Заголовок */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  padding: '8px 12px',
                  borderRadius: 10,
                  background: `linear-gradient(135deg, ${C.purple}, #ec4899)`,
                  fontSize: '20px'
                }}>🤖</div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800 }}>{customWidget.name}</h3>
                  <span style={{ fontSize: '12px', color: C.textMuted }}>Кастомный виджет • Создан ИИ</span>
                </div>
                <button
                  onClick={() => setEditingCustomWidget(null)}
                  style={{
                    marginLeft: 'auto',
                    width: 36, height: 36,
                    borderRadius: 10,
                    background: C.bgAlt,
                    border: 'none',
                    color: C.textMuted,
                    fontSize: '18px',
                    cursor: 'pointer'
                  }}
                >✕</button>
              </div>

              {/* Настройки уведомлений */}
              <div style={{
                padding: '20px',
                borderRadius: 16,
                background: C.bgAlt,
                marginBottom: '20px'
              }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🔔 Настройки уведомлений
                </h4>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={customWidget.notifications.enabled}
                      onChange={() => {
                        setCustomWidgets(prev => prev.map(cw => 
                          cw.id === editingCustomWidget 
                            ? { ...cw, notifications: { ...cw.notifications, enabled: !cw.notifications.enabled } }
                            : cw
                        ))
                      }}
                      style={{ width: 18, height: 18, accentColor: C.purple }}
                    />
                    <span style={{ fontSize: '14px' }}>Включить уведомления</span>
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px', display: 'block' }}>
                      Порог срабатывания (%)
                    </label>
                    <input
                      type="number"
                      value={customWidget.notifications.threshold}
                      onChange={(e) => {
                        setCustomWidgets(prev => prev.map(cw => 
                          cw.id === editingCustomWidget 
                            ? { ...cw, notifications: { ...cw.notifications, threshold: parseInt(e.target.value) || 0 } }
                            : cw
                        ))
                      }}
                      style={{
                        width: '100%', padding: '12px', borderRadius: 10,
                        background: C.bgCard, border: `1px solid ${C.border}`,
                        color: C.text, fontSize: '14px'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', color: C.textMuted, marginBottom: '8px', display: 'block' }}>
                      Email для уведомлений
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={customWidget.notifications.email}
                      onChange={(e) => {
                        setCustomWidgets(prev => prev.map(cw => 
                          cw.id === editingCustomWidget 
                            ? { ...cw, notifications: { ...cw.notifications, email: e.target.value } }
                            : cw
                        ))
                      }}
                      style={{
                        width: '100%', padding: '12px', borderRadius: 10,
                        background: C.bgCard, border: `1px solid ${C.border}`,
                        color: C.text, fontSize: '14px'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Чат с ИИ для редактирования виджета */}
              <div style={{
                padding: '20px',
                borderRadius: 16,
                background: C.bgAlt
              }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  💬 Чат с ИИ-ассистентом
                </h4>
                
                {/* История чата */}
                <div style={{
                  maxHeight: 200,
                  overflow: 'auto',
                  marginBottom: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {customWidget.chatHistory.map((msg, idx) => (
                    <div key={idx} style={{
                      alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '85%',
                    }}>
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: 16,
                        background: msg.role === 'user' ? C.purple : C.bgCard,
                        border: `1px solid ${msg.role === 'user' ? C.purple : C.border}`,
                        fontSize: '13px',
                        lineHeight: 1.5,
                        color: msg.role === 'user' ? '#fff' : C.text
                      }}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Поле ввода */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input
                    type="text"
                    value={customWidgetChat}
                    onChange={(e) => setCustomWidgetChat(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && customWidgetChat.trim()) {
                        // Добавляем сообщение пользователя
                        setCustomWidgets(prev => prev.map(cw => 
                          cw.id === editingCustomWidget 
                            ? { 
                                ...cw, 
                                chatHistory: [
                                  ...cw.chatHistory, 
                                  { role: 'user', content: customWidgetChat },
                                  { role: 'assistant', content: 'Понял! Могу изменить метрики, добавить новые параметры или настроить отображение. Укажите, что именно хотите изменить.' }
                                ]
                              }
                            : cw
                        ))
                        setCustomWidgetChat('')
                      }
                    }}
                    placeholder="Попросите ИИ изменить виджет..."
                    style={{
                      flex: 1, padding: '12px 16px', borderRadius: 12,
                      background: C.bgCard, border: `1px solid ${C.border}`,
                      color: C.text, fontSize: '13px'
                    }}
                  />
                  <button
                    onClick={() => {
                      if (customWidgetChat.trim()) {
                        setCustomWidgets(prev => prev.map(cw => 
                          cw.id === editingCustomWidget 
                            ? { 
                                ...cw, 
                                chatHistory: [
                                  ...cw.chatHistory, 
                                  { role: 'user', content: customWidgetChat },
                                  { role: 'assistant', content: 'Понял! Могу изменить метрики, добавить новые параметры или настроить отображение. Укажите, что именно хотите изменить.' }
                                ]
                              }
                            : cw
                        ))
                        setCustomWidgetChat('')
                      }
                    }}
                    style={{
                      padding: '12px 20px',
                      borderRadius: 12,
                      background: C.gradient,
                      border: 'none',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}
                  >
                    Отправить
                  </button>
                </div>
              </div>

              {/* Кнопки действий */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button 
                  onClick={() => setEditingCustomWidget(null)} 
                  style={{
                    flex: 1, padding: '16px', borderRadius: 14,
                    background: C.bgAlt, border: `1px solid ${C.border}`,
                    color: C.text, fontWeight: 600, fontSize: '15px', cursor: 'pointer',
                  }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Add Widget Modal */}
      {showAddWidgetModal && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 250, padding: '20px',
        }}>
          <div style={{
            width: '100%', maxWidth: 600, maxHeight: '90vh', borderRadius: 24,
            background: C.bgCard, border: `1px solid ${C.border}`,
            display: 'flex', flexDirection: 'column',
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              padding: '24px',
              borderBottom: `1px solid ${C.border}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: C.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px',
                }}>➕</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 800 }}>Добавить виджет</div>
                  <div style={{ fontSize: '12px', color: C.textMuted }}>
                    Выберите из списка или создайте с помощью ИИ
                  </div>
                </div>
              </div>
              <button onClick={() => {
                setShowAddWidgetModal(false)
                setAddWidgetZone(null)
                setAiWidgetPrompt('')
              }} style={{
                width: 36, height: 36, borderRadius: 10,
                background: C.bgAlt, border: 'none',
                color: C.textMuted, fontSize: '18px', cursor: 'pointer',
              }}>✕</button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflow: 'auto', padding: '24px' }}>
              {/* AI Creation Section */}
              <div style={{
                marginBottom: '24px',
                padding: '20px',
                borderRadius: 16,
                background: `linear-gradient(135deg, ${C.purple}15, ${C.blue}10)`,
                border: `1px solid ${C.purple}30`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '24px' }}>🤖</span>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700 }}>Создать с помощью ИИ</div>
                    <div style={{ fontSize: '12px', color: C.textMuted }}>Опишите, какой виджет вам нужен</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <input
                      type="text"
                      value={aiWidgetPrompt}
                      onChange={(e) => setAiWidgetPrompt(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && generateWidgetWithAI()}
                      placeholder="Например: Покажи график звонков по дням недели"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        paddingRight: '50px',
                        borderRadius: 12,
                        background: C.bgAlt,
                        border: `1px solid ${C.border}`,
                        color: C.text,
                        fontSize: '14px',
                      }}
                    />
                    {/* Voice Input Button */}
                    <button
                      onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                      style={{
                        position: 'absolute',
                        right: 8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: isRecording ? C.red : 'transparent',
                        border: 'none',
                        color: isRecording ? '#fff' : C.textMuted,
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                        animation: isRecording ? 'pulse 1s infinite' : 'none',
                      }}
                      title={isRecording ? 'Остановить запись' : 'Голосовой ввод'}
                    >
                      {isRecording ? '⏹️' : '🎤'}
                    </button>
                  </div>
                  <button
                    onClick={generateWidgetWithAI}
                    disabled={!aiWidgetPrompt.trim() || isAiGenerating}
                    style={{
                      padding: '14px 24px',
                      borderRadius: 12,
                      background: isAiGenerating ? C.bgAlt : C.gradient,
                      border: 'none',
                      color: isAiGenerating ? C.textMuted : '#fff',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: isAiGenerating ? 'wait' : 'pointer',
                      opacity: aiWidgetPrompt.trim() ? 1 : 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    {isAiGenerating ? (
                      <>
                        <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</span>
                        Создание...
                      </>
                    ) : (
                      <>✨ Создать</>
                    )}
                  </button>
                </div>

                {isRecording && (
                  <div style={{
                    marginTop: '12px',
                    padding: '10px 14px',
                    borderRadius: 10,
                    background: `${C.red}15`,
                    border: `1px solid ${C.red}30`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                    <div style={{
                      width: 12, height: 12, borderRadius: '50%',
                      background: C.red,
                      animation: 'pulse 1s infinite',
                    }} />
                    <span style={{ fontSize: '13px', color: C.red }}>Запись голоса...</span>
                  </div>
                )}

                <style>{`
                  @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                  }
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}</style>
              </div>

              {/* Divider */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                marginBottom: '24px',
              }}>
                <div style={{ flex: 1, height: 1, background: C.border }} />
                <span style={{ fontSize: '12px', color: C.textMuted }}>или выберите из доступных</span>
                <div style={{ flex: 1, height: 1, background: C.border }} />
              </div>

              {/* Available Widgets */}
              {getAvailableWidgets().length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  color: C.textMuted,
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.3 }}>✓</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Все виджеты добавлены</div>
                  <div style={{ fontSize: '13px' }}>Все доступные виджеты уже на вашем дашборде</div>
                </div>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                }}>
                  {getAvailableWidgets().map((widget) => (
                    <button
                      key={widget.id}
                      onClick={() => addWidget(widget.id, addWidgetZone || undefined)}
                      style={{
                        padding: '16px',
                        borderRadius: 14,
                        background: C.bgAlt,
                        border: `1px solid ${C.border}`,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = C.purple
                        e.currentTarget.style.background = `${C.purple}10`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = C.border
                        e.currentTarget.style.background = C.bgAlt
                      }}
                    >
                      <div style={{
                        width: 40, height: 40,
                        borderRadius: 10,
                        background: `${C.purple}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '20px',
                        flexShrink: 0,
                      }}>
                        {widget.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: C.text, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {widget.name}
                          {'isCustom' in widget && widget.isCustom && (
                            <span style={{
                              padding: '2px 6px',
                              borderRadius: 4,
                              background: `linear-gradient(135deg, ${C.purple}, #ec4899)`,
                              color: '#fff',
                              fontSize: '9px',
                              fontWeight: 700,
                              textTransform: 'uppercase'
                            }}>
                              Кастомный
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '11px', color: C.textMuted }}>
                          {widget.gridColumn.includes('12') ? 'Полная ширина' : 
                           widget.gridColumn.includes('6') ? 'Половина ширины' : 'Компактный'}
                        </div>
                      </div>
                      <span style={{ color: C.purple, fontSize: '18px' }}>+</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: '20px 24px',
              borderTop: `1px solid ${C.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '12px', color: C.textMuted }}>
                {getAvailableWidgets().length} виджет{getAvailableWidgets().length === 1 ? '' : getAvailableWidgets().length > 1 && getAvailableWidgets().length < 5 ? 'а' : 'ов'} доступно
              </div>
              <button onClick={() => {
                setShowAddWidgetModal(false)
                setAddWidgetZone(null)
                setAiWidgetPrompt('')
              }} style={{
                padding: '12px 24px', borderRadius: 12,
                background: C.bgAlt, border: `1px solid ${C.border}`,
                color: C.text, fontWeight: 600, fontSize: '14px', cursor: 'pointer',
              }}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// КОНЦЕПТ 13: АДМИН ВАТС (Панель администратора)
// ============================================
function Concept13() {
  // Drag-and-drop state
  const [draggedWidgetId, setDraggedWidgetId] = useState<string | null>(null)
  const [dragOverWidgetId, setDragOverWidgetId] = useState<string | null>(null)

  // Цвета - тёмная тема как в Concept12
  const C = {
    bg: '#0A0A12',
    bgAlt: '#12121F',
    bgCard: '#1A1A2E',
    bgWidget: '#16162A',
    text: '#FFFFFF',
    textMuted: '#94A3B8',
    textLight: '#6B7280',
    border: 'rgba(139, 92, 246, 0.2)',
    purple: '#8B5CF6',
    purpleDark: '#6D28D9',
    green: '#10B981',
    yellow: '#F59E0B',
    red: '#EF4444',
    blue: '#3B82F6',
    cyan: '#06B6D4',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
  }

  // Общий статус ВАТС (главный светофор)
  const [overallStatus, setOverallStatus] = useState<'green' | 'yellow' | 'red'>('green')

  // Метрики услуг ВАТС
  const [servicesMetrics, setServicesMetrics] = useState([
    { id: 'ip-telephony', name: 'IP-телефония', status: 'active' as const, uptime: '99.9%', icon: '📞' },
    { id: 'recording', name: 'Запись разговоров', status: 'active' as const, uptime: '99.7%', icon: '🎙️' },
    { id: 'ivr', name: 'IVR меню', status: 'active' as const, uptime: '100%', icon: '🔀' },
    { id: 'sms', name: 'SMS-рассылки', status: 'warning' as const, uptime: '98.2%', icon: '💬' },
    { id: 'crm', name: 'CRM интеграция', status: 'active' as const, uptime: '99.5%', icon: '🔗' },
    { id: 'analytics', name: 'Аналитика', status: 'active' as const, uptime: '99.8%', icon: '📊' },
  ])

  // Активность номеров сотрудников (для pie chart)
  const [numbersActivity, setNumbersActivity] = useState({
    online: 34,
    offline: 16,
  })

  // Оповещения
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'error' as const, icon: '🔴', message: 'Номер +7 (495) 123-45-67 заблокирован оператором', time: '2 мин', action: 'Разблокировать' },
    { id: 2, type: 'error' as const, icon: '🔴', message: 'Интеграция с Битрикс24: ошибка авторизации', time: '15 мин', action: 'Настроить' },
    { id: 3, type: 'warning' as const, icon: '🟠', message: 'SMS-рассылка: достигнут лимит 85%', time: '1 час', action: 'Пополнить' },
    { id: 4, type: 'warning' as const, icon: '🟠', message: '3 оператора отсутствуют более 30 минут', time: '2 часа', action: 'Проверить' },
    { id: 5, type: 'info' as const, icon: '🔵', message: 'Запланировано обновление IVR в 03:00', time: '5 часов', action: 'Подробнее' },
    { id: 6, type: 'info' as const, icon: '🔵', message: 'Новый отчёт за неделю готов к скачиванию', time: '10 мин', action: 'Скачать' },
  ])

  // Номера сотрудников
  const [employeeNumbers, setEmployeeNumbers] = useState([
    { id: 1, name: 'Анна Козлова', ext: '101', department: 'Продажи', status: 'online' as const, calls: 47 },
    { id: 2, name: 'Дмитрий Смирнов', ext: '102', department: 'Продажи', status: 'busy' as const, calls: 38 },
    { id: 3, name: 'Елена Морозова', ext: '103', department: 'Поддержка', status: 'online' as const, calls: 52 },
    { id: 4, name: 'Игорь Петров', ext: '104', department: 'Поддержка', status: 'away' as const, calls: 12 },
    { id: 5, name: 'Мария Волкова', ext: '105', department: 'Продажи', status: 'offline' as const, calls: 0 },
    { id: 6, name: 'Александр Новиков', ext: '106', department: 'Поддержка', status: 'online' as const, calls: 34 },
    { id: 7, name: 'Ольга Федорова', ext: '107', department: 'Продажи', status: 'busy' as const, calls: 41 },
    { id: 8, name: 'Сергей Кузнецов', ext: '108', department: 'Техподдержка', status: 'online' as const, calls: 29 },
  ])

  // Подключённые услуги ВАТС
  const [vatsServices, setVatsServices] = useState([
    { id: 'ip-phone', icon: '📞', name: 'IP-телефония', status: 'active' as const, uptime: '99.9%', enabled: true },
    { id: 'recording', icon: '🎙️', name: 'Запись разговоров', status: 'active' as const, uptime: '99.7%', enabled: true },
    { id: 'ivr', icon: '🔀', name: 'IVR меню', status: 'active' as const, uptime: '100%', enabled: true },
    { id: 'sms', icon: '💬', name: 'SMS-рассылки', status: 'warning' as const, uptime: '98.2%', enabled: true },
    { id: 'crm-bitrix', icon: '🔗', name: 'CRM интеграция (Битрикс24)', status: 'active' as const, uptime: '99.5%', enabled: true },
    { id: 'analytics', icon: '📊', name: 'Аналитика', status: 'active' as const, uptime: '99.8%', enabled: true },
  ])

  // Виджеты для админа ВАТС
  const [widgetZones, setWidgetZones] = useState([
    {
      id: 'main-status',
      name: '🚦 Статус ВАТС',
      description: 'Главный индикатор работоспособности системы',
      widgets: [
        { id: 'traffic-light-main', name: 'Светофор метрик администратора', gridColumn: 'span 12' },
      ]
    },
    {
      id: 'quick-actions',
      name: '⚡ Быстрые действия',
      description: 'Основные функции управления',
      widgets: [
        { id: 'quick-actions-grid', name: 'Быстрые действия', gridColumn: 'span 12' },
      ]
    },
    {
      id: 'alerts-zone',
      name: '🔔 Оповещения',
      description: 'Уведомления о событиях системы',
      widgets: [
        { id: 'alerts-list', name: 'Оповещения', gridColumn: 'span 6' },
        { id: 'employee-numbers', name: 'Номера сотрудников', gridColumn: 'span 6' },
      ]
    },
    {
      id: 'services-zone',
      name: '📦 Подключённые услуги ВАТС',
      description: 'Управление сервисами',
      widgets: [
        { id: 'vats-services', name: 'Услуги ВАТС', gridColumn: 'span 12' },
      ]
    }
  ])

  // Получить цвет статуса
  const getStatusColor = (status: 'green' | 'yellow' | 'red' | 'active' | 'warning' | 'error' | 'online' | 'busy' | 'away' | 'offline') => {
    switch (status) {
      case 'green':
      case 'active':
      case 'online':
        return C.green
      case 'yellow':
      case 'warning':
      case 'busy':
        return C.yellow
      case 'red':
      case 'error':
        return C.red
      case 'away':
        return C.blue
      case 'offline':
        return C.textLight
      default:
        return C.textMuted
    }
  }

  // Получить статус текст
  const getStatusText = (status: 'online' | 'busy' | 'away' | 'offline') => {
    switch (status) {
      case 'online': return 'Онлайн'
      case 'busy': return 'Занят'
      case 'away': return 'Отлучился'
      case 'offline': return 'Офлайн'
    }
  }

  // Переключить услугу
  const toggleService = (serviceId: string) => {
    setVatsServices(prev => prev.map(s => 
      s.id === serviceId ? { ...s, enabled: !s.enabled, status: !s.enabled ? 'active' : 'error' } : s
    ))
  }

  // Функция для перемещения виджета
  const moveWidget = (fromId: string, toId: string) => {
    let draggedWidget: { id: string; name: string; gridColumn: string } | null = null
    let sourceZoneIndex = -1
    let sourceWidgetIndex = -1
    let targetZoneIndex = -1
    let targetWidgetIndex = -1

    widgetZones.forEach((zone, zoneIdx) => {
      zone.widgets.forEach((widget, widgetIdx) => {
        if (widget.id === fromId) {
          draggedWidget = widget
          sourceZoneIndex = zoneIdx
          sourceWidgetIndex = widgetIdx
        }
        if (widget.id === toId) {
          targetZoneIndex = zoneIdx
          targetWidgetIndex = widgetIdx
        }
      })
    })

    if (draggedWidget && sourceZoneIndex !== -1 && targetZoneIndex !== -1) {
      setWidgetZones(prev => {
        const updated = prev.map(zone => ({
          ...zone,
          widgets: [...zone.widgets]
        }))
        updated[sourceZoneIndex].widgets.splice(sourceWidgetIndex, 1)
        let adjustedTargetIndex = targetWidgetIndex
        if (sourceZoneIndex === targetZoneIndex && sourceWidgetIndex < targetWidgetIndex) {
          adjustedTargetIndex--
        }
        updated[targetZoneIndex].widgets.splice(adjustedTargetIndex, 0, draggedWidget!)
        return updated
      })
    }
  }

  // Обработчики drag-and-drop
  const handleDragStart = (e: React.DragEvent, widgetId: string) => {
    e.dataTransfer.setData('widgetId', widgetId)
    setDraggedWidgetId(widgetId)
  }

  const handleDragOver = (e: React.DragEvent, widgetId: string) => {
    e.preventDefault()
    if (widgetId !== draggedWidgetId) {
      setDragOverWidgetId(widgetId)
    }
  }

  const handleDragLeave = () => {
    setDragOverWidgetId(null)
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    const sourceId = e.dataTransfer.getData('widgetId')
    if (sourceId && sourceId !== targetId) {
      moveWidget(sourceId, targetId)
    }
    setDraggedWidgetId(null)
    setDragOverWidgetId(null)
  }

  const handleDragEnd = () => {
    setDraggedWidgetId(null)
    setDragOverWidgetId(null)
  }

  // Рендер содержимого виджета
  const renderWidgetContent = (widgetId: string) => {
    switch (widgetId) {
      // =============================================
      // СВЕТОФОР МЕТРИК АДМИНИСТРАТОРА
      // =============================================
      case 'traffic-light-main':
        const activeServices = servicesMetrics.filter(s => s.status === 'active').length
        const warningServices = servicesMetrics.filter(s => s.status === 'warning').length
        const errorServices = servicesMetrics.filter(s => s.status === 'error').length
        const totalNumbers = numbersActivity.online + numbersActivity.offline
        
        return (
          <div style={{ padding: '24px' }}>
            {/* Главный индикатор - Светофор */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '24px',
              marginBottom: '32px',
              padding: '24px',
              background: `linear-gradient(135deg, ${getStatusColor(overallStatus)}10 0%, transparent 100%)`,
              borderRadius: 20,
              border: `1px solid ${getStatusColor(overallStatus)}30`,
            }}>
              {/* Светофор */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: overallStatus === 'green' ? C.green : `${C.green}20`,
                  boxShadow: overallStatus === 'green' ? `0 0 40px ${C.green}60` : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '32px', fontWeight: 800, color: overallStatus === 'green' ? '#fff' : C.textMuted,
                  border: `2px solid ${overallStatus === 'green' ? C.green : C.textLight}30`,
                  transition: 'all 0.3s ease',
                }}>🟢</div>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: overallStatus === 'yellow' ? C.yellow : `${C.yellow}20`,
                  boxShadow: overallStatus === 'yellow' ? `0 0 40px ${C.yellow}60` : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '32px', fontWeight: 800, color: overallStatus === 'yellow' ? '#fff' : C.textMuted,
                  border: `2px solid ${overallStatus === 'yellow' ? C.yellow : C.textLight}30`,
                  transition: 'all 0.3s ease',
                }}>🟡</div>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: overallStatus === 'red' ? C.red : `${C.red}20`,
                  boxShadow: overallStatus === 'red' ? `0 0 40px ${C.red}60` : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '32px', fontWeight: 800, color: overallStatus === 'red' ? '#fff' : C.textMuted,
                  border: `2px solid ${overallStatus === 'red' ? C.red : C.textLight}30`,
                  transition: 'all 0.3s ease',
                }}>🔴</div>
              </div>
              
              {/* Текст статуса */}
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: 800, 
                  color: getStatusColor(overallStatus),
                  marginBottom: '8px',
                  textShadow: `0 0 30px ${getStatusColor(overallStatus)}40`,
                }}>
                  {overallStatus === 'green' ? 'Всё работает' : overallStatus === 'yellow' ? 'Требует внимания' : 'Критические проблемы'}
                </div>
                <div style={{ fontSize: '14px', color: C.textMuted }}>
                  Система ВАТС функционирует {overallStatus === 'green' ? 'нормально' : overallStatus === 'yellow' ? 'с предупреждениями' : 'с ошибками'}
                </div>
                <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
                  <button onClick={() => setOverallStatus('green')} style={{
                    padding: '8px 16px', borderRadius: 8, border: 'none',
                    background: overallStatus === 'green' ? C.green : `${C.green}20`,
                    color: overallStatus === 'green' ? '#fff' : C.green,
                    fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                  }}>Симуляция: OK</button>
                  <button onClick={() => setOverallStatus('yellow')} style={{
                    padding: '8px 16px', borderRadius: 8, border: 'none',
                    background: overallStatus === 'yellow' ? C.yellow : `${C.yellow}20`,
                    color: overallStatus === 'yellow' ? '#fff' : C.yellow,
                    fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                  }}>Симуляция: Внимание</button>
                  <button onClick={() => setOverallStatus('red')} style={{
                    padding: '8px 16px', borderRadius: 8, border: 'none',
                    background: overallStatus === 'red' ? C.red : `${C.red}20`,
                    color: overallStatus === 'red' ? '#fff' : C.red,
                    fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                  }}>Симуляция: Ошибка</button>
                </div>
              </div>
            </div>

            {/* Метрики услуг и активность номеров */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {/* Метрики услуг */}
              <div style={{ 
                background: C.bgAlt, borderRadius: 16, padding: '20px',
                border: `1px solid ${C.border}`,
              }}>
                <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📊</span> Метрики услуг
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ textAlign: 'center', padding: '12px', background: `${C.green}10`, borderRadius: 12 }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: C.green }}>{activeServices}</div>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>Активных</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '12px', background: `${C.yellow}10`, borderRadius: 12 }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: C.yellow }}>{warningServices}</div>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>С предупреждением</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '12px', background: `${C.red}10`, borderRadius: 12 }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: C.red }}>{errorServices}</div>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>С ошибками</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {servicesMetrics.map(service => (
                    <div key={service.id} style={{ 
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '10px 12px', background: C.bgCard, borderRadius: 10,
                    }}>
                      <span style={{ fontSize: '18px' }}>{service.icon}</span>
                      <span style={{ flex: 1, fontSize: '13px', color: C.text }}>{service.name}</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: getStatusColor(service.status) }}>
                        {service.uptime}
                      </span>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: getStatusColor(service.status),
                        boxShadow: `0 0 8px ${getStatusColor(service.status)}60`,
                      }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Активность номеров - Pie Chart */}
              <div style={{ 
                background: C.bgAlt, borderRadius: 16, padding: '20px',
                border: `1px solid ${C.border}`,
              }}>
                <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>👥</span> Активность номеров
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  {/* Pie Chart SVG */}
                  <svg viewBox="0 0 100 100" style={{ width: 160, height: 160 }}>
                    <defs>
                      <filter id="glow-green">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                      </filter>
                    </defs>
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke={`${C.textLight}20`} strokeWidth="12" />
                    {/* Online segment (68%) */}
                    <circle 
                      cx="50" cy="50" r="40" fill="none" 
                      stroke={C.green} strokeWidth="12"
                      strokeDasharray={`${(numbersActivity.online / totalNumbers) * 251.2} 251.2`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow-green)"
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    {/* Offline segment (32%) */}
                    <circle 
                      cx="50" cy="50" r="40" fill="none" 
                      stroke={C.textLight} strokeWidth="12"
                      strokeDasharray={`${(numbersActivity.offline / totalNumbers) * 251.2} 251.2`}
                      strokeDashoffset={`-${(numbersActivity.online / totalNumbers) * 251.2}`}
                      transform="rotate(-90 50 50)"
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    {/* Center text */}
                    <text x="50" y="45" textAnchor="middle" style={{ fontSize: '24px', fontWeight: 800, fill: C.text }}>
                      {numbersActivity.online}
                    </text>
                    <text x="50" y="60" textAnchor="middle" style={{ fontSize: '10px', fill: C.textMuted }}>
                      онлайн
                    </text>
                  </svg>
                  
                  {/* Legend */}
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: C.green, boxShadow: `0 0 8px ${C.green}60` }} />
                        <span style={{ fontSize: '14px', color: C.text }}>Онлайн</span>
                        <span style={{ fontSize: '20px', fontWeight: 800, color: C.green, marginLeft: 'auto' }}>{numbersActivity.online}</span>
                      </div>
                      <div style={{ fontSize: '11px', color: C.textMuted, paddingLeft: '20px' }}>
                        {Math.round((numbersActivity.online / totalNumbers) * 100)}% от всех номеров
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: C.textLight }} />
                        <span style={{ fontSize: '14px', color: C.text }}>Офлайн</span>
                        <span style={{ fontSize: '20px', fontWeight: 800, color: C.textLight, marginLeft: 'auto' }}>{numbersActivity.offline}</span>
                      </div>
                      <div style={{ fontSize: '11px', color: C.textMuted, paddingLeft: '20px' }}>
                        {Math.round((numbersActivity.offline / totalNumbers) * 100)}% от всех номеров
                      </div>
                    </div>
                    <div style={{ marginTop: '16px', padding: '12px', background: C.bgCard, borderRadius: 10 }}>
                      <div style={{ fontSize: '12px', color: C.textMuted }}>Всего номеров</div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: C.text }}>{totalNumbers}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      // =============================================
      // БЫСТРЫЕ ДЕЙСТВИЯ
      // =============================================
      case 'quick-actions-grid':
        const quickActions = [
          { icon: '🔀', label: 'IVR конструктор', color: C.purple, desc: 'Настройка голосового меню' },
          { icon: '📱', label: 'Управление номерами', color: C.blue, desc: 'Добавление и настройка' },
          { icon: '📊', label: 'Отчёты и аналитика', color: C.green, desc: 'Статистика и выгрузки' },
          { icon: '🔗', label: 'Интеграции (CRM)', color: C.cyan, desc: 'Битрикс24, AmoCRM' },
          { icon: '👥', label: 'Пользователи и права', color: C.yellow, desc: 'Доступ и роли' },
          { icon: '📋', label: 'Журнал логов', color: C.textMuted, desc: 'История событий' },
        ]
        
        return (
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
              {quickActions.map((action, i) => (
                <div key={i} className="hover-lift" style={{
                  padding: '24px 16px',
                  background: `linear-gradient(135deg, ${action.color}15 0%, transparent 100%)`,
                  borderRadius: 16,
                  border: `1px solid ${action.color}30`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: `linear-gradient(135deg, ${action.color} 0%, ${action.color}CC 100%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '24px',
                    boxShadow: `0 8px 24px ${action.color}40`,
                  }}>
                    {action.icon}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>
                      {action.label}
                    </div>
                    <div style={{ fontSize: '11px', color: C.textMuted }}>
                      {action.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      // =============================================
      // ОПОВЕЩЕНИЯ
      // =============================================
      case 'alerts-list':
        return (
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ 
                  padding: '4px 10px', borderRadius: 12, fontSize: '11px', fontWeight: 600,
                  background: `${C.red}20`, color: C.red 
                }}>
                  🔴 {alerts.filter(a => a.type === 'error').length} ошибок
                </span>
                <span style={{ 
                  padding: '4px 10px', borderRadius: 12, fontSize: '11px', fontWeight: 600,
                  background: `${C.yellow}20`, color: C.yellow 
                }}>
                  🟠 {alerts.filter(a => a.type === 'warning').length} предупреждений
                </span>
                <span style={{ 
                  padding: '4px 10px', borderRadius: 12, fontSize: '11px', fontWeight: 600,
                  background: `${C.blue}20`, color: C.blue 
                }}>
                  🔵 {alerts.filter(a => a.type === 'info').length} информационных
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: 320, overflowY: 'auto' }}>
              {alerts.map((alert) => (
                <div key={alert.id} style={{
                  padding: '14px 16px',
                  background: `${getStatusColor(alert.type)}10`,
                  borderRadius: 12,
                  borderLeft: `4px solid ${getStatusColor(alert.type)}`,
                }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '16px' }}>{alert.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', color: C.text, lineHeight: 1.4, marginBottom: '8px' }}>
                        {alert.message}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: C.textMuted }}>{alert.time} назад</span>
                        <button style={{
                          padding: '6px 12px', borderRadius: 6,
                          background: getStatusColor(alert.type),
                          border: 'none', color: '#fff', fontSize: '11px', fontWeight: 600, cursor: 'pointer',
                        }}>
                          {alert.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      // =============================================
      // НОМЕРА СОТРУДНИКОВ
      // =============================================
      case 'employee-numbers':
        return (
          <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: C.textMuted }}>
                Активных: {employeeNumbers.filter(e => e.status === 'online' || e.status === 'busy').length} / {employeeNumbers.length}
              </span>
            </div>
            <div style={{ maxHeight: 320, overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    <th style={{ textAlign: 'left', padding: '10px 8px', fontSize: '11px', color: C.textMuted, fontWeight: 600 }}>Сотрудник</th>
                    <th style={{ textAlign: 'center', padding: '10px 8px', fontSize: '11px', color: C.textMuted, fontWeight: 600 }}>Статус</th>
                    <th style={{ textAlign: 'center', padding: '10px 8px', fontSize: '11px', color: C.textMuted, fontWeight: 600 }}>Звонков</th>
                    <th style={{ textAlign: 'left', padding: '10px 8px', fontSize: '11px', color: C.textMuted, fontWeight: 600 }}>Департамент</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeNumbers.map((emp) => (
                    <tr key={emp.id} style={{ borderBottom: `1px solid ${C.border}30` }}>
                      <td style={{ padding: '12px 8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{
                            width: 32, height: 32, borderRadius: '50%',
                            background: `${getStatusColor(emp.status)}20`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '12px', fontWeight: 600, color: getStatusColor(emp.status),
                          }}>
                            {emp.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div style={{ fontSize: '13px', fontWeight: 600, color: C.text }}>{emp.name}</div>
                            <div style={{ fontSize: '11px', color: C.textMuted }}>доб. {emp.ext}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{
                            width: 8, height: 8, borderRadius: '50%',
                            background: getStatusColor(emp.status),
                            boxShadow: `0 0 8px ${getStatusColor(emp.status)}60`,
                          }} />
                          <span style={{ fontSize: '11px', color: getStatusColor(emp.status), fontWeight: 500 }}>
                            {getStatusText(emp.status)}
                          </span>
                        </div>
                      </td>
                      <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '14px', fontWeight: 700, color: emp.calls > 0 ? C.text : C.textMuted 
                        }}>
                          {emp.calls}
                        </span>
                      </td>
                      <td style={{ padding: '12px 8px' }}>
                        <span style={{ 
                          fontSize: '12px', color: C.textMuted,
                          padding: '4px 8px', background: C.bgAlt, borderRadius: 6,
                        }}>
                          {emp.department}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      // =============================================
      // УСЛУГИ ВАТС
      // =============================================
      case 'vats-services':
        return (
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {vatsServices.map((service) => (
                <div key={service.id} style={{
                  background: C.bgAlt, borderRadius: 16, padding: '20px',
                  border: `1px solid ${getStatusColor(service.status)}30`,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Glow effect */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, transparent, ${getStatusColor(service.status)}, transparent)`,
                  }} />
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: `linear-gradient(135deg, ${getStatusColor(service.status)} 0%, ${getStatusColor(service.status)}CC 100%)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '22px',
                      boxShadow: `0 4px 16px ${getStatusColor(service.status)}40`,
                    }}>
                      {service.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>
                        {service.name}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: getStatusColor(service.status),
                          boxShadow: `0 0 6px ${getStatusColor(service.status)}60`,
                        }} />
                        <span style={{ fontSize: '12px', color: getStatusColor(service.status), fontWeight: 500 }}>
                          {service.status === 'active' ? 'Активен' : service.status === 'warning' ? 'Внимание' : 'Ошибка'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '11px', color: C.textMuted, marginBottom: '4px' }}>Uptime</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: getStatusColor(service.status) }}>
                      {service.uptime}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{
                      flex: 1, padding: '10px', borderRadius: 10,
                      background: C.bgCard, border: `1px solid ${C.border}`,
                      color: C.text, fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                    }}>
                      ⚙️ Настройки
                    </button>
                    <button 
                      onClick={() => toggleService(service.id)}
                      style={{
                      flex: 1, padding: '10px', borderRadius: 10,
                      background: service.enabled ? `${C.red}20` : `${C.green}20`,
                      border: 'none',
                      color: service.enabled ? C.red : C.green,
                      fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                    }}>
                      {service.enabled ? '⏸️ Выкл' : '▶️ Вкл'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return <div style={{ padding: '20px', color: C.textMuted }}>Виджет</div>
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: C.bg, color: C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
        
        .draggable-widget {
          cursor: grab;
          transition: all 0.2s ease;
        }
        .draggable-widget:active {
          cursor: grabbing;
        }
        .draggable-widget.dragging {
          opacity: 0.5;
          transform: scale(0.98);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
        }
        .draggable-widget.drag-over {
          border: 2px dashed #8B5CF6 !important;
          background: rgba(139, 92, 246, 0.05) !important;
        }
        .widget-drag-indicator {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 4px;
          background: rgba(139, 92, 246, 0.3);
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .draggable-widget:hover .widget-drag-indicator {
          opacity: 1;
        }
        .widget-card {
          background: #1A1A2E;
          border-radius: 16px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          overflow: hidden;
        }
        .widget-header {
          padding: 14px 20px;
          border-bottom: 1px solid rgba(139, 92, 246, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }
        
        .hover-lift {
          transition: all 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
      `}</style>

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'rgba(10, 10, 18, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.border}`,
        zIndex: 1000,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: C.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>VA</span>
          </div>
          <span style={{ fontSize: '18px', fontWeight: 700, color: C.text }}>Админ ВАТС</span>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '6px 12px', borderRadius: 8,
            backgroundColor: `${getStatusColor(overallStatus)}15`,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: getStatusColor(overallStatus),
              boxShadow: `0 0 8px ${getStatusColor(overallStatus)}60`,
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{ color: getStatusColor(overallStatus), fontSize: '12px', fontWeight: 600 }}>
              {overallStatus === 'green' ? 'Всё работает' : overallStatus === 'yellow' ? 'Требует внимания' : 'Проблемы'}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: C.textMuted, fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '14px' }}>💡</span> Перетащите виджеты для изменения порядка
          </span>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            backgroundColor: C.bgCard, display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `1px solid ${C.border}`,
            cursor: 'pointer',
          }}>
            <span style={{ fontSize: '16px' }}>👤</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ paddingTop: 80, padding: '80px 24px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Widget Zones */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {widgetZones.map((zone) => (
              <div key={zone.id}>
                {/* Zone Header */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  marginBottom: '12px',
                }}>
                  <div>
                    <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '2px' }}>{zone.name}</h2>
                    <p style={{ fontSize: '12px', color: C.textMuted }}>{zone.description}</p>
                  </div>
                </div>

                {/* Widgets Grid */}
                <div className="dashboard-grid">
                  {zone.widgets.map((widget) => (
                    <div
                      key={widget.id}
                      className={`widget-card draggable-widget ${draggedWidgetId === widget.id ? 'dragging' : ''} ${dragOverWidgetId === widget.id ? 'drag-over' : ''}`}
                      style={{ gridColumn: widget.gridColumn, position: 'relative' }}
                      draggable={true}
                      onDragStart={(e) => handleDragStart(e, widget.id)}
                      onDragOver={(e) => handleDragOver(e, widget.id)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, widget.id)}
                      onDragEnd={handleDragEnd}
                    >
                      <div className="widget-drag-indicator" />
                      <div className="widget-header">
                        <span style={{ fontWeight: 600, fontSize: '14px' }}>{widget.name}</span>
                        <GripVertical style={{ width: 16, height: 16, color: C.purple, opacity: 0.5 }} />
                      </div>
                      {renderWidgetContent(widget.id)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}


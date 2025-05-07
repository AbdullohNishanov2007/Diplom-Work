import React from 'react';
import { FaCode, FaLaptopCode, FaGraduationCap, FaUsers, FaRegNewspaper, FaChartLine, FaQuestionCircle, FaYoutube, FaTelegram, FaVk, FaGithub } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="itproger-homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Начни карьеру в IT с ITProger</h1>
          <p className="hero-subtitle">Бесплатные уроки, курсы и статьи по программированию для начинающих и профессионалов</p>
          <div className="hero-buttons">
            <a href="/courses" className="btn btn-primary btn-lg">
              <FaGraduationCap className="icon" /> Наши курсы
            </a>
            <a href="/articles" className="btn btn-secondary btn-lg">
              <FaRegNewspaper className="icon" /> Статьи
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div>
                <span className="stat-number">1M+</span>
                <span className="stat-label">Учеников</span>
              </div>
            </div>
            <div className="stat-item">
              <FaLaptopCode className="stat-icon" />
              <div>
                <span className="stat-number">100+</span>
                <span className="stat-label">Курсов</span>
              </div>
            </div>
            <div className="stat-item">
              <FaCode className="stat-icon" />
              <div>
                <span className="stat-number">500+</span>
                <span className="stat-label">Статей</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Почему выбирают ITProger?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Практические знания</h3>
              <p>Мы фокусируемся на практическом применении знаний, а не только на теории.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaLaptopCode />
              </div>
              <h3>Актуальные технологии</h3>
              <p>Все курсы регулярно обновляются в соответствии с последними трендами.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaGraduationCap />
              </div>
              <h3>Поддержка сообщества</h3>
              <p>Доступ к форуму и чатам, где можно задать вопросы и получить помощь.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Карьерный рост</h3>
              <p>Помогаем с составлением резюме и подготовкой к собеседованиям.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <h2 className="section-title">Популярные курсы</h2>
          <p className="section-subtitle">Выберите направление и начните обучение сегодня</p>
          <div className="course-grid">
            {[
              { id: 1, title: "Python", desc: "Полный курс по Python от основ до продвинутых тем", img: "https://itproger.com/img/courses/1532975967.jpg", category: "Программирование" },
              { id: 2, title: "JavaScript", desc: "Изучите JavaScript и современные фреймворки", img: "https://itproger.com/img/courses/1532976043.jpg", category: "Веб-разработка" },
              { id: 3, title: "Java", desc: "Основы Java и создание приложений", img: "https://itproger.com/img/courses/1532976106.jpg", category: "Программирование" },
              { id: 4, title: "React", desc: "Современная фронтенд разработка с React", img: "https://itproger.com/img/courses/1601544801.jpg", category: "Веб-разработка" },
              { id: 5, title: "Data Science", desc: "Анализ данных и машинное обучение на Python", img: "https://itproger.com/img/courses/1601544865.jpg", category: "Анализ данных" },
              { id: 6, title: "Flutter", desc: "Кроссплатформенная мобильная разработка", img: "https://itproger.com/img/courses/1601544917.jpg", category: "Мобильная разработка" }
            ].map(course => (
              <div className="course-card" key={course.id}>
                <div className="course-badge">{course.category}</div>
                <img src={course.img} alt={course.title} className="course-img" />
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <div className="course-footer">
                    <a href={`/course/${course.id}`} className="btn btn-small">Подробнее</a>
                    <span className="course-rating">★ ★ ★ ★ ☆</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/courses" className="btn btn-outline btn-lg">Все курсы</a>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="learning-paths">
        <div className="container">
          <h2 className="section-title">Карьерные пути</h2>
          <p className="section-subtitle">Выберите направление и получите пошаговый план обучения</p>
          <div className="paths-grid">
            <div className="path-card path-web">
              <h3>Веб-разработчик</h3>
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React/Vue</li>
                <li>Node.js</li>
              </ul>
              <a href="/path/web" className="btn btn-small">Начать путь</a>
            </div>
            <div className="path-card path-mobile">
              <h3>Мобильный разработчик</h3>
              <ul>
                <li>Flutter</li>
                <li>Kotlin/Swift</li>
                <li>React Native</li>
                <li>Firebase</li>
              </ul>
              <a href="/path/mobile" className="btn btn-small">Начать путь</a>
            </div>
            <div className="path-card path-data">
              <h3>Data Scientist</h3>
              <ul>
                <li>Python</li>
                <li>Pandas/NumPy</li>
                <li>Машинное обучение</li>
                <li>SQL</li>
              </ul>
              <a href="/path/data" className="btn btn-small">Начать путь</a>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles">
        <div className="container">
          <h2 className="section-title">Последние статьи</h2>
          <p className="section-subtitle">Актуальные материалы и руководства</p>
          <div className="article-grid">
            {[
              { id: 1, title: "10 лучших фреймворков JavaScript в 2023", desc: "Сравнение популярных фреймворков и их возможностей", img: "https://itproger.com/img/tests/1712843452.jpg", date: "15 мая 2023", readTime: "8 мин" },
              { id: 2, title: "Как начать карьеру в IT без опыта", desc: "Пошаговое руководство для начинающих специалистов", img: "https://itproger.com/img/tests/1712843452.jpg", date: "10 мая 2023", readTime: "12 мин" },
              { id: 3, title: "Python vs Java: что выбрать?", desc: "Сравнение языков для разных задач разработки", img: "https://itproger.com/img/tests/1712843452.jpg", date: "5 мая 2023", readTime: "10 мин" },
              { id: 4, title: "Основы алгоритмов для начинающих", desc: "Базовые структуры данных и алгоритмы", img: "https://itproger.com/img/tests/1712843452.jpg", date: "1 мая 2023", readTime: "15 мин" }
            ].map(article => (
              <div className="article-card" key={article.id}>
                <img src={article.img} alt={article.title} className="article-img" />
                <div className="article-content">
                  <div className="article-meta">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>
                  <a href={`/article/${article.id}`} className="btn btn-small">Читать</a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/articles" className="btn btn-outline btn-lg">Все статьи</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Отзывы наших студентов</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Благодаря курсам на ITProger смог устроиться на первую работу фронтенд-разработчиком уже через 4 месяца обучения!"</p>
              </div>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Алексей" />
                <div>
                  <h4>Алексей</h4>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Лучшая платформа для изучения Python. Материал подается структурированно и понятно даже для новичков."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Мария" />
                <div>
                  <h4>Мария</h4>
                  <span>Data Analyst</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"После прохождения курса по Flutter смог опубликовать свое первое приложение в Google Play и App Store."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Дмитрий" />
                <div>
                  <h4>Дмитрий</h4>
                  <span>Mobile Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Частые вопросы</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>С чего начать обучение программированию?</h3>
              </div>
              <div className="faq-answer">
                <p>Рекомендуем начать с основ программирования на Python или JavaScript. Эти языки имеют простой синтаксис и широкие возможности применения. На нашем сайте есть специальные курсы для начинающих.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Можно ли получить сертификат после прохождения курсов?</h3>
              </div>
              <div className="faq-answer">
                <p>Да, после успешного завершения любого платного курса вы получаете сертификат, который можно добавить в резюме или LinkedIn профиль.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Есть ли у вас бесплатные материалы?</h3>
              </div>
              <div className="faq-answer">
                <p>Да, у нас много бесплатных статей, уроков и даже несколько полных курсов. Также вы можете попробовать бесплатные уроки из платных курсов перед покупкой.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Как получить помощь, если что-то непонятно?</h3>
              </div>
              <div className="faq-answer">
                <p>У нас есть активное сообщество на форуме и в Telegram-чате, где можно задать вопросы. Преподаватели также отвечают на вопросы в комментариях к урокам.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Готовы начать обучение?</h2>
          <p>Присоединяйтесь к миллиону студентов, которые уже начали свой путь в IT с ITProger</p>
          <div className="cta-buttons">
            <a href="/signup" className="btn btn-primary btn-lg">Зарегистрироваться</a>
            <a href="/courses" className="btn btn-outline btn-lg">Посмотреть курсы</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3>ITProger</h3>
              <p>Образовательная платформа для обучения программированию с нуля до профессионала.</p>
              <div className="footer-social">
                <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://telegram.org" aria-label="Telegram"><FaTelegram /></a>
                <a href="https://vk.com" aria-label="VK"><FaVk /></a>
                <a href="https://github.com" aria-label="GitHub"><FaGithub /></a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Курсы</h4>
              <ul>
                <li><a href="/courses/web">Веб-разработка</a></li>
                <li><a href="/courses/mobile">Мобильная разработка</a></li>
                <li><a href="/courses/data">Data Science</a></li>
                <li><a href="/courses/game">Разработка игр</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Ресурсы</h4>
              <ul>
                <li><a href="/articles">Статьи</a></li>
                <li><a href="/forum">Форум</a></li>
                <li><a href="/tests">Тесты</a></li>
                <li><a href="/blog">Блог</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Компания</h4>
              <ul>
                <li><a href="/about">О нас</a></li>
                <li><a href="/careers">Карьера</a></li>
                <li><a href="/contact">Контакты</a></li>
                <li><a href="/privacy">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ITProger. Все права защищены.</p>
            <div className="footer-legal">
              <a href="/terms">Условия использования</a>
              <a href="/privacy">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

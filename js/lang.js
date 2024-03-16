const allLangs = ["en", "uz", "ru"];
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "en";
const selectValue = document.getElementById("lang_select");
const currentPathName = window.location.pathname;
let currentText = {};

const homeTexts = {
  page_title: {
    en: "EN Akyildiz Consulting - the best choice",
    uz: "UZ Akyildiz Consulting - eng yaxshi tanlov",
    ru: "РУС Akyildiz Consulting – лучший выбор",
  },
  navbar_home: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },
  navbar_about: {
    en: "About",
    uz: "Biz haqimizda",
    ru: "O нас",
  },
  navbar_courses: {
    en: "Courses",
    uz: "Kurslar",
    ru: "Курсы",
  },
  navbar_travel: {
    en: "Travel",
    uz: "Sayohat",
    ru: "Путешествия",
  },
  navbar_pages: {
    en: "Pages",
    uz: "Sahifalar",
    ru: "Страницы",
  },
  navbar_ourteam: {
    en: "Our Team",
    uz: "Bizning jamoa",
    ru: "Наша команда",
  },
  navbar_testimonial: {
    en: "Testimonial",
    uz: "Fikrlar",
    ru: "Отзыв",
  },
  navbar_404page: {
    en: "404 Page",
    uz: "404",
    ru: "404",
  },
  navbar_contact: {
    en: "Contact",
    uz: "Aloqa",
    ru: "Контакты",
  },
  navbar_joinnow: {
    en: "Join Now",
    uz: "Kirish",
    ru: "Присоединяйся",
  },
  // ---------

  home_hero_choice_1: {
    en: "The best choice",
    uz: "Eng yaxshi tanlov",
    ru: "Лучший выбор",
  },
  home_hero_choice_2: {
    en: "The best choice",
    uz: "Eng yaxshi tanlov",
    ru: "Лучший выбор",
  },
  home_hero_1: {
    en: "Become a GRANT student",
    uz: "Grand asosida talaba bo'ling",
    ru: "Стать студентом ГРАНТА",
  },
  home_hero_read_1: {
    en: "Read More",
    uz: "Ko'proq o'qing",
    ru: "Читать болше",
  },
  home_hero_join_1: {
    en: "Join Now",
    uz: "Kirish",
    ru: "Присоединяйся",
  },
  home_hero_read_2: {
    en: "Read More",
    uz: "Ko'proq o'qing",
    ru: "Читать больше",
  },
  home_hero_join_2: {
    en: "Join Now",
    uz: "Kirish",
    ru: "Присоединяйся",
  },
  home_hero_2: {
    en: "Become a student of foreign universities without exams",
    uz: "Imtihonlarsiz chet el universitetlarida  talaba bo'ling",
    ru: "Стать студентом зарубежных вузов без экзаменов",
  },

  // ------
  home_2_title_1: {
    en: "Skilled Instructors",
    uz: "Malakali ustozlar",
    ru: "Опытные инструкторы",
  },
  home_2_desc_1: {
    en: "Learn from qualified and highly knowledgeable instructors abroad",
    uz: "Chet eldagi malakali va yuqori bilimli o'qituvchilardan o'rganing",
    ru: "Учитесь у опытных и высокоопытных инструкторов за границей",
  },
  home_2_title_2: {
    en: "Countries",
    uz: "Davlatlar",
    ru: "Страны",
  },
  home_2_desc_2: {
    en: "Study with us in a foreign country of your choice",
    uz: "O'zingiz tanlagan xorijiy davlatda biz bilan o'qing",
    ru: "Учитесь у нас в другой стране по вашему выбору",
  },
  home_2_title_3: {
    en: "Travel",
    uz: "Sayohat",
    ru: "Путешествия",
  },
  home_2_desc_3: {
    en: "Take a sightseeing tour during your studies",
    uz: "O'qish paytida diqqatga sazovor joylarga ekskursiya qiling",
    ru: "Совершите экскурсию во время учебы",
  },
  home_2_title_4: {
    en: "Library",
    uz: "Kutubxona",
    ru: "Библиотека",
  },
  home_2_desc_4: {
    en: "Use libraries that are very modern and full of valuable books",
    uz: "Juda zamonaviy va qimmatbaho kitoblar bilan to'la kutubxonalardan foydalaning",
    ru: "Используйте библиотеки, которые очень современны и полны ценных книг.",
  },
  // -------------
  home_about_1: {
    en: "About Us",
    uz: "Biz haqimizda",
    ru: "О нас",
  },
  home_about_2: {
    en: "Welcome to AKYILDIZ CONSULTING",
    uz: "AKYILDIZ CONSULTINGga ga xush kelibsiz",
    ru: "Добро пожаловать в AKYILDIZ CONSULTING",
  },
  home_about_3: {
    en: "Our close-knit team will help you make your dreams come true. Study with us in prestigious universities of the world",
    uz: "Bizning jamoamiz sizning orzularingizni amalga oshirishga yordam beradi. Biz bilan dunyoning nufuzli universitetlarida tahsil oling",
    ru: "Наша сплоченная команда поможет Вам осуществить Ваши мечты. Обучайтесь вместе с нами в престижных университетах мира",
  },
  home_about_4: {
    en: "If you do not know the language of the country you are visiting, we have Turkish, Korean and many foreign language courses",
    uz: "Tashrif buyurgan davlatingiz tilini bilmasangiz turk, koreys va ko'plab chet tili kurslarimiz mavjud",
    ru: "Если вы не знаете языка страны, которую посещаете, у нас есть курсы турецкого, корейского и многих иностранных языков.",
  },
  home_about_5: {
    en: "Skilled Instructors",
    uz: "Malakali ustozlar",
    ru: "Опытные инструкторы",
  },
  home_about_6: {
    en: "Online Classes",
    uz: "Onlayn darslar",
    ru: "Онлайн-классы",
  },
  home_about_7: {
    en: "International Certificates",
    uz: "Xalqaro Sertifikatlar",
    ru: "Международный сертификати",
  },
  home_about_8: {
    en: "Skilled Instructors",
    uz: "Malakali ustozlar",
    ru: "Опытные инструкторы",
  },
  home_about_9: {
    en: "Online Classes",
    uz: "Onlayn darslar",
    ru: "Онлайн-классы",
  },
  home_about_10: {
    en: "International Certificates",
    uz: "Xalqaro Sertifikatlar",
    ru: "Международный сертификати",
  },
  home_hero_read1: {
    en: "Read More",
    uz: "Ko'proq o'qing",
    ru: "Читать больше",
  },
  // ---------------------------------
  home_category_title: {
    en: "Categories",
    uz: "Yo'nalishlar",
    ru: "Категории",
  },
  home_category_subtitle: {
    en: "Courses Categories",
    uz: "Kurs kategoriyalari",
    ru: "Категории курса",
  },
  home_category_t_1: {
    en: "Russian",
    uz: "Rus tili",
    ru: "Русский язык",
  },
  home_category_c_1: {
    en: "45 Lessons",
    uz: "45 ta darslar",
    ru: "45 уроков",
  },
  home_category_t_2: {
    en: "English",
    uz: "Ingliz tili",
    ru: "Английский",
  },
  home_category_c_2: {
    en: "54 Lessons",
    uz: "54 ta darslar",
    ru: "54 Уроков",
  },
  home_category_t_3: {
    en: "Korean",
    uz: "Koreys tili",
    ru: "Корейский",
  },
  home_category_c_3: {
    en: "60 Lessons",
    uz: "60 ta darslar",
    ru: "60 Уроков",
  },
  home_category_t_4: {
    en: "Turkish",
    uz: "Turk tili",
    ru: "Турецкий",
  },
  home_category_c_4: {
    en: "35 Lessons",
    uz: "35 ta darslar",
    ru: "35 Уроков",
  },
  // -------------------------------
  home_courses_title: {
    en: "Courses",
    uz: "Kurslar",
    ru: "Курсы",
  },
  home_courses_subtitle: {
    en: "Popular Courses",
    uz: "Mashhur kurslar",
    ru: "Популярные курсы",
  },
  home_courses_read_1: {
    en: "Read More",
    uz: "Ko'proq o'qing",
    ru: "Читать больше",
  },
  home_courses_join_1: {
    en: "Join Now",
    uz: "Kirish",
    ru: "Присоединяйся",
  },
  home_courses_read_2: {
    en: "Read More",
    uz: "Ko'proq o'qing",
    ru: "Читать больше",
  },
  home_courses_join_2: {
    en: "Join Now",
    uz: "Kirish",
    ru: "Присоединяйся",
  },
  home_courses_read_3: {
    en: "Read More",
    uz: "Ko'proq o'qing",
    ru: "Читать больше",
  },
  home_courses_join_3: {
    en: "Join Now",
    uz: "Bizga qo'shiling",
    ru: "Присоединяйся",
  },
  home_courses_all_1: {
    en: "All Online Courses",
    uz: "Barcha Onlayn Kurslar",
    ru: "Все онлайн курсы",
  },
  home_courses_all_2: {
    en: "All Ofline Courses",
    uz: "Barcha Oflayn Kurslar",
    ru: "Все офлайн-курсы",
  },
  home_courses_all_3: {
    en: "All Individual Courses",
    uz: "Barcha Individual Kurslar",
    ru: "Все индивидуальные курсы",
  },
  home_courses_instructors_1: {
    en: "Instructors",
    uz: "O'qituvchilar",
    ru: "Инструкторы",
  },
  home_courses_instructors_2: {
    en: "Instructors",
    uz: "O'qituvchilar",
    ru: "Инструкторы",
  },
  home_courses_instructors_3: {
    en: "Instructors",
    uz: "O'qituvchilar",
    ru: "Инструкторы",
  },
  home_courses_hour_1: {
    en: "1.49 Hrs",
    uz: "1.49 soat",
    ru: "1,49 часа",
  },
  home_courses_hour_2: {
    en: "1.49 Hrs",
    uz: "1.49 soat",
    ru: "1,49 часа",
  },
  home_courses_hour_3: {
    en: "1.49 Hrs",
    uz: "1.49 soat",
    ru: "1,49 часа",
  },
  home_courses_student_1: {
    en: "30 Students",
    uz: "30 ta talaba",
    ru: "30 студентов",
  },
  home_courses_student_2: {
    en: "30 Students",
    uz: "30 ta talaba",
    ru: "30 студентов",
  },
  home_courses_student_3: {
    en: "30 Students",
    uz: "30 ta talaba",
    ru: "30 студентов",
  },
  // ------------------------------
  home_team_title: {
    en: "Team Members",
    uz: "Jamoa a'zolari",
    ru: "Члены команды",
  },
  home_team_subtitle: {
    en: "Members",
    uz: "A'zolar",
    ru: "Члены",
  },
  home_team_1: {
    en: "Direktor",
    uz: "Direktor",
    ru: "Директор",
  },
  home_team_2: {
    en: "Main Manager",
    uz: "Bosh manager",
    ru: "Главный менеджер",
  },
  home_team_3: {
    en: "Manager",
    uz: "Manager",
    ru: "Менеджер",
  },
  home_team_4: {
    en: "Turkish language teacher",
    uz: "Turk tili o'qituvchisi",
    ru: "Учитель турецкого языка",
  },
  // -----------------------------
  home_testimonial_title: {
    en: "Testimonial",
    uz: "Fikrlar",
    ru: "Отзыв",
  },
  home_testimonial_subtitle: {
    en: "Our Students Say!",
    uz: "Bizning o'quvchilarimiz fikri",
    ru: "Наши студенты говорят!",
  },
  home_testimonial_student_1: {
    en: "Student",
    uz: "Talaba",
    ru: "Студент",
  },
  home_testimonial_student_2: {
    en: "Student",
    uz: "Talaba",
    ru: "Студент",
  },
  home_testimonial_student_3: {
    en: "Student",
    uz: "Talaba",
    ru: "Студент",
  },
  home_testimonial_student_4: {
    en: "Student",
    uz: "Talaba",
    ru: "Студент",
  },
  home_testimonial_text_1: {
    en: "Akyildiz Consulting is the best choice. Very comfortable and easy with it",
    uz: "Akyildiz Consulting eng yaxshi tanlovdir. U bilan juda qulay va oson",
    ru: "Акылдиз Консалтинг – лучший выбор. С ним очень комфортно и легко",
  },
  home_testimonial_text_2: {
    en: "I have achieved a very good result with the help of Akyildiz Consulting. The team helped me to adapt easily in a foreign country",
    uz: "Men Akyildiz Consulting yordamida juda yaxshi natijaga erishdim. Jamoa menga chet elda oson moslashishga yordam berdi",
    ru: "С помощью Akyildiz Consulting я добился очень хорошего результата. Команда помогла мне легко адаптироваться в чужой стране",
  },
  home_testimonial_text_3: {
    en: "One of my dreams was to study abroad at a quality university. I am very happy that I realized this dream with Akyildiz Consulting. He is the best",
    uz: "Orzularimdan biri chet elda sifatli universitetda o'qish edi. Men bu orzuimni Akyildiz Consulting bilan amalga oshirganimdan juda xursandman. U eng zo'r",
    ru: "Одной из моих мечтаний было учиться за границей в качественном университете. Я очень рад, что осуществил эту мечту вместе с Akyildiz Consulting. Он лучший",
  },
  home_testimonial_text_4: {
    en: `I have been looking for such a service. My friends recommended "Akyildiz Consulting" to me. I really liked
    it`,
    uz: "Men bunday xizmatni qidirdim. Do‘stlarim menga “Akyildiz Consulting”ni tavsiya qildilar. Bu menga juda yoqdi",
    ru: "Я искал такой сервис. Мои друзья порекомендовали мне компанию «Акылдиз Консалтинг». Мне это и вправду нравится",
  },
  // ----------------
  home_footer_1: {
    en: "Quick Link",
    uz: "Linklar",
    ru: "Быстрая ссылка",
  },
  home_footer_2: {
    en: "About Us",
    uz: "Biz haqimizda",
    ru: "О нас",
  },
  home_footer_3: {
    en: "Contact Us",
    uz: "Biz bilan bog'lanish",
    ru: "Связаться с нами",
  },
  home_footer_4: {
    en: "Privacy Policy",
    uz: "Maxfiylik siyosati",
    ru: "Политика конфиденциальности",
  },
  home_footer_5: {
    en: "Terms & Condition",
    uz: "Foydalanish shartlari",
    ru: "Условия использования",
  },
  home_footer_6: {
    en: "FAQs & Help",
    uz: "Tez-tez so'raladigan savollar va yordam",
    ru: "Вопросы и ответы и помощь",
  },
  home_footer_7: {
    en: "Contact",
    uz: "Aloqa",
    ru: "Контакт",
  },
  home_footer_8: {
    en: "Chilonzor, 11th block, 17A house, 2nd floor",
    uz: "Chilonzor 11-kvartal, 17A uy, 2-qavat",
    ru: "Чиланзор, 11 блок, дом 17А, 2 этаж",
  },
  home_footer_9: {
    en: "Gallery",
    uz: "Galereya",
    ru: "Галерея",
  },
  home_footer_10: {
    en: "Newsletter",
    uz: "Axborot",
    ru: "Новости",
  },
  home_footer_11: {
    en: "Reserve your spot by registering now",
    uz: "Hozir roʻyxatdan oʻtish orqali oʻz joyingizni band qiling",
    ru: "Забронируйте место, зарегистрировавшись сейчас",
  },
  home_footer_12: {
    en: "Sign up",
    uz: "Ro'yxatdan o'tish",
    ru: "Зарегистрироваться",
  },
  home_footer_13: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },
  home_footer_14: {
    en: "Cookies",
    uz: "Cookies",
    ru: "Файлы cookie",
  },
  home_footer_15: {
    en: "Help",
    uz: "Yordam",
    ru: "Помощь",
  },
  home_footer_16: {
    en: "FQAs",
    uz: "Shartlar",
    ru: "Вопросы и ответы",
  },
  about__hero_title: {
    en: "About us",
    uz: "Biz haqimizda",
    ru: "O нас",
  },

  about_hero_link_1: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },

  about_hero_link_2: {
    en: "Pages",
    uz: "Sahifalar",
    ru: "Страницы",
  },

  about_hero_link_3: {
    en: "About",
    uz: "Haqida",
    ru: "O нас",
  },

  error_hero_title: {
    en: "Not Found",
    uz: "Topilmadi",
    ru: "Не найдено",
  },
  error_link_1: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },
  error_link_2: {
    en: "Pages",
    uz: "Sahifalar",
    ru: "Страницы",
  },
  error_link_3: {
    en: "404",
    uz: "404",
    ru: "404",
  },
  error_link_4: {
    en: "Go Back To Home",
    uz: "Bosh sahifaga qaytish",
    ru: "Вернуться на главную",
  },
  error_not_found: {
    en: "Page Not Found",
    uz: "Sahifa topilmadi",
    ru: "Не найдено",
  },
  error_desc: {
    en: " We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?",
    uz: "Kechirasiz, siz qidirgan sahifa bizning veb-saytimizda mavjud emas! Ehtimol, bizning bosh sahifamizga o'ting yoki qidiruvdan foydalanmoqchimisiz?",
    ru: "К сожалению, страница, которую вы искали, не существует на нашем сайте! Может быть, зайти на нашу домашнюю страницу или попробовать воспользоваться поиском?",
  },
  contact_link_1: {
    en: "Contact",
    uz: "Aloqa",
    ru: "Контакты",
  },
  contact_link_2: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },
  contact_link_3: {
    en: "Pages",
    uz: "Sahifalar",
    ru: "Страницы",
  },
  contact_link_4: {
    en: "Contact",
    uz: "Aloqa",
    ru: "Контакты",
  },
  contact_title: {
    en: "Contact Us",
    uz: "Bizga bog'lanish",
    ru: "Свяжитесь с нами",
  },
  contact_subtitle: {
    en: "Contact For Any Query",
    uz: "Har qanday so'rov uchun murojaat qiling",
    ru: "Контакт для любого запроса",
  },
  contact_l_1: {
    en: "Office",
    uz: "Ofis",
    ru: "Офис",
  },
  contact_l_2: {
    en: "Chilonzor, 11th block, 17A house, 2nd floor",
    uz: "Chilonzor 11-kvartal, 17A uy, 2-qavat",
    ru: "Чиланзор, 11 блок, дом 17А, 2 этаж",
  },
  contact_l_3: {
    en: "Mobile",
    uz: "Mobil",
    ru: "мобильный",
  },
  contact_l_4: {
    en: "Email",
    uz: "Email",
    ru: "Эл. почта",
  },
  courses_link_1: {
    en: "Courses",
    uz: "Kurslar",
    ru: "Курсы",
  },
  courses_link_2: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },
  courses_link_3: {
    en: "Pages",
    uz: "Sahifalar",
    ru: "Страницы",
  },
  courses_link_4: {
    en: "Courses",
    uz: "Kurslar",
    ru: "Курсы",
  },
  team_link_1: {
    en: "Our Team",
    uz: "Bizning jamoa",
    ru: "Наша команда",
  },
  team_link_2: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },
  team_link_3: {
    en: "Pages",
    uz: "Sahifalar",
    ru: "Страницы",
  },
  team_link_4: {
    en: "Team",
    uz: "Jamoa",
    ru: "Команда",
  },
  testimonial_link_1: {
    en: "Testimonial",
    uz: "Fikrlar",
    ru: "Отзыв",
  },
  testimonial_link_2: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },
  testimonial_link_3: {
    en: "Pages",
    uz: "Sahifalar",
    ru: "Страницы",
  },
  testimonial_link_4: {
    en: "Testimonial",
    uz: "Fikrlar",
    ru: "Отзыв",
  },
  travel_link_1: {
    en: "Travel",
    uz: "Sayohat",
    ru: "Путешествия",
  },
  travel_link_2: {
    en: "Home",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  },
  travel_link_3: {
    en: "Pages",
    uz: "Sahifalar",
    ru: "Страницы",
  },
  travel_link_4: {
    en: "Travel",
    uz: "Sayohat",
    ru: "Путешествия",
  },
  travel_title: {
    en: "Travel Categories",
    uz: "Sayohat turlari",
    ru: "Категории путешествии",
  },
  travel_subtitle: {
    en: "Travels",
    uz: "Sayohatlar",
    ru: "Путешествии",
  },
  travel_m_1: {
    en: "Turkey",
    uz: "Turkiya",
    ru: "Турция",
  },
  travel_m_2: {
    en: "England",
    uz: "Angliya",
    ru: "Англия",
  },
  travel_m_3: {
    en: "South Korea",
    uz: "Jabubiy Koreya",
    ru: "Южная Корея",
  },
  travel_m_4: {
    en: "Russia",
    uz: "Rossiya",
    ru: "Россия",
  },
  travel_offer_title: {
    en: "Our useful offers",
    uz: "Bizning foydali takliflar",
    ru: "Наши полезные предложения",
  },
};

function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html" || "/":
      currentText = homeTexts;
      break;
    case "/about.html" || "/about":
      currentText = aboutTexts;
      break;
    case "/courses.html" || "/courses":
      currentText = coursesTexts;
      break;
    case "/404.html" || "/404":
      currentText = errorTexts;
      break;
    case "/contact.html" || "/contact":
      currentText = contactTexts;
      break;
    case "/team.html" || "/team":
      currentText = teamTexts;
      break;
    case "/testimonial.html" || "/testimonial":
      currentText = testimonialTexts;
      break;
    case "/travel.html" || "/travel":
      currentText = travelTexts;
      break;
    default:
      currentText = homeTexts;
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentText[key][currentLang];
    }
  }
}
changeLang();

function selectChangeFunction() {
  currentLang = selectValue.value;
  localStorage.setItem("language", selectValue.value);
  changeLang();
}

function checkActiveSelect() {
  switch (currentLang) {
    case "en":
      selectValue.value = "en";
      break;
    case "uz":
      selectValue.value = "uz";
      break;
    case "ru":
      selectValue.value = "ru";
      break;
    default:
      selectValue.value = "en";
  }
}
checkActiveSelect();

function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((lang) => {
    return lang === navLang;
  });

  if (result) {
    return navLang;
  }
}
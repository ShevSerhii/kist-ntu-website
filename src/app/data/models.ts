export interface Publication { year: number; text: string; }
export interface NewsItem { date: string; category: string; title: string; }
export interface Staff { name: string; position: string; degree: string; isProf: boolean; }

export const STAFF_DATA: Staff[] = [
    { name: 'Гавриленко Валерій Володимирович', position: 'Завідувач кафедри', degree: 'Д.ф.-м.н., професор', isProf: true },
    { name: 'Баранов Георгій Леонідович', position: 'Професор', degree: 'Д.т.н., професор', isProf: true },
    { name: 'Безверхий Олександр Ігорович', position: 'Професор', degree: 'Д.ф.-м.н., професор', isProf: true },
    { name: 'Вітер Михайло Богданович', position: 'Професор', degree: 'К.ф.-м.н., доцент', isProf: true },
    { name: 'Зубрецька Наталія Анатоліївна', position: 'Професор', degree: 'Д.т.н., професор', isProf: true },
    { name: 'Федін Сергій Сергійович', position: 'Професор', degree: 'Д.т.н., професор', isProf: true },
    { name: 'Івохін Євген Вікторович', position: 'Професор (сумісн.)', degree: 'Д.ф.-м.н.', isProf: true },
    { name: 'Грибков Сергій Віталійович', position: 'Професор (сумісн.)', degree: 'Д.т.н.', isProf: true },
    { name: 'Кучер Павло Вікторович', position: 'Доцент', degree: 'PhD', isProf: false },
    { name: 'Сватко Віталій Володимирович', position: 'Доцент', degree: 'К.т.н.', isProf: false },
    { name: 'Комісаренко Олена Сергіївна', position: 'Доцент', degree: 'К.т.н.', isProf: false },
    { name: 'Шумейко Олексій Андрійович', position: 'Доцент', degree: 'Доцент', isProf: false },
    { name: 'Кіктєв Микола Олександрович', position: 'Доцент (сумісн.)', degree: 'К.т.н.', isProf: false },
    { name: 'Харитонова Леся Василівна', position: 'Доцент (сумісн.)', degree: 'К.ф.-м.н.', isProf: false },
    { name: 'Харкянен Олена Валеріївна', position: 'Доцент (сумісн.)', degree: 'К.т.н.', isProf: false },
    { name: 'Бердо Рімма Сергіївна', position: 'Ст. викладач', degree: '', isProf: false },
    { name: 'Донець Вероніка Василівна', position: 'Ст. викладач', degree: '', isProf: false },
    { name: 'Ковальчук Оксана Петрівна', position: 'Ст. викладач', degree: '', isProf: false },
    { name: 'Огарков Артем Володимирович', position: 'Ст. викладач', degree: '', isProf: false },
    { name: 'Поляков Віталій Віталійович', position: 'Ст. викладач', degree: '', isProf: false },
    { name: 'Мироненко Олександр Петрович', position: 'Зав. лабораторії', degree: '', isProf: false },
    { name: 'Богуславський Максим Юрійович', position: 'Асистент', degree: '', isProf: false },
    { name: 'Бодня Артем Володимирович', position: 'Асистент', degree: '', isProf: false },
    { name: 'Луц Владислав Євгенович', position: 'Асистент', degree: '', isProf: false },
    { name: 'Карманов Роман В’ячеславович', position: 'Асистент', degree: '', isProf: false }
  ];

export const NEWS_DATA: NewsItem[] = [
  { date: 'Лютий 2025', category: 'Наука', title: 'Вийшла стаття Д. Акімова про гібридні алгоритми' },
  { date: 'Січень 2025', category: 'Подія', title: 'Святкуємо 20-річчя кафедри' },
  { date: 'Грудень 2024', category: 'Студентам', title: 'Захист кваліфікаційних робіт' }
];

export const PUB_DATA: Publication[] = [
    { year: 2025, text: 'Акімов Д.Д. - Аналіз швидкодії гібридних алгоритмів у транспортних інформаційних системах.' },
    { year: 2025, text: 'Івохін Є.В., Гавриленко В.В. - Про один підхід до розв’язання нечіткої задачі комівояжера.' },
    { year: 2025, text: 'Гавриленко В.В., Зубрецька Н.А. - Перспективи розвитку ІТ транспортної галузі України.' },
    { year: 2024, text: 'Gavrylenko V.V. - Optimization models of transport and network flows.' },
    { year: 2023, text: 'Безверхий О.І., Луц В.Є. - Проектування інформаційної системи з голосовим управлінням.' }
  ];

export const PARTNERS_DATA: string[] = ['GlobalLogic', 'SoftServe', 'EPAM', 'Genesis', 'DataArt'];
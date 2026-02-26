# MIDDLEOUT - Website

Лендинг для веб-студии MIDDLEOUT, построенный на Next.js 15 и Tailwind CSS.

## 🚀 Стек технологий

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Inter, Urbanist, Poppins, Pontano Sans)

## 📦 Установка

```bash
npm install
```

## 🛠️ Разработка

Запустить dev сервер:

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🏗️ Сборка

```bash
npm run build
npm start
```

## 📁 Структура проекта

```
middelout/
├── app/
│   ├── layout.tsx          # Главный layout с Header и Footer
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Навигация
│   │   └── Footer.tsx      # Подвал
│   └── sections/
│       ├── Hero.tsx        # Главная секция
│       ├── About.tsx       # О компании
│       ├── Services.tsx    # Услуги
│       ├── Portfolio.tsx   # Проекты
│       └── Contact.tsx     # Форма контакта
├── public/
│   └── images/            # Изображения и иконки
└── tailwind.config.ts     # Конфигурация Tailwind
```

## 🎨 Секции

1. **Hero** - Главная секция с заголовком и CTA кнопками
2. **About** - Описание компании, преимущества и статистика
3. **Services** - 3 карточки услуг (веб-разработка, хостинг, консалтинг)
4. **Portfolio** - Галерея проектов
5. **Contact** - Форма обратной связи с контактами

## 🎨 Дизайн

Дизайн взят из Figma: [MIDDELOUT](https://www.figma.com/design/yE86rNQ3qpxzL6dbSAkgYJ/MIDDELOUT)

### Цветовая палитра

- **Primary**: #0066FF (синий)
- **Accent**: #B9FF66 (зелёный), #8FBCFF (голубой)
- **Background**: #FFFFFF (белый)
- **Text**: #000000 (чёрный)

## 📝 Лицензия

Created by DenisBot для студии MIDDLEOUT

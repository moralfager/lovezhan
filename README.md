# LoveZhan — I Love You Zhaniyat

Next.js + React + TailwindCSS + Framer Motion one-page romantic card.

## Быстрый старт локально

```bash
cd lovezhan
npm install
npm run dev
```

Открой `http://localhost:3000`.

## Git / GitHub

### 1. Инициализация репозитория

```bash
cd c:\Users\Valentin\Desktop\lovezhan
git init
git add .
git commit -m "Initial love card for Zhaniyat"
```

### 2. Создание репозитория на GitHub

1. Зайди на GitHub, создай новый репозиторий, например `lovezhan`.
2. Не добавляй туда свой README / .gitignore (мы уже создали локально).
3. Прикрепи локальный репозиторий:

```bash
git remote add origin https://github.com/<твой-логин>/lovezhan.git
git push -u origin main
```

Если ветка называется `master`, то:

```bash
git push -u origin master
```

## Деплой на Vercel

1. Зайди на [Vercel](https://vercel.com/), залогинься через GitHub.
2. Нажми **"New Project" → "Import Git Repository"**.
3. Выбери репозиторий `lovezhan`.
4. Настройки по умолчанию для Next.js подойдут, жми **Deploy**.
5. После билда получишь URL вида `https://lovezhan.vercel.app`.


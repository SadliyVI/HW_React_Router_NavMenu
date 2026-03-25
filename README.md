# Домашнее задание к занятию React: React Router

## Навигационное меню (useEffect) (React + Vite + TypeScript)

[![Deploy to GitHub Pages](https://github.com/SadliyVI/HW_React_Router_NavMenu/actions/workflows/main.yml/badge.svg)](https://github.com/SadliyVI/HW_React_Router_NavMenu/actions/workflows/main.yml)

>SPA-приложение на **React + TypeScript + Vite** с верхним навигационным меню для сайта гоночного такси.  

## Возможности

- Роутинг реализован через **React Router**
- Верхнее меню навигации на основе **NavLink**
- Активный пункт меню подсвечивается классом `menu__item-active`
- Созданы 5 страницы с маршрутами: "/", "/drift", "/timeattack", "/forza", "/другие символы"
- Прямой ввод URL в адресную строку браузера открывает соответствующую страницу
- При вводе ошибочного URL открывается страница 404 с ссылкой «На главную»

>Маршруты

- **/** — Главная
- **/drift** — Дрифт-такси
- **/timeattack** — Time Attack
- **/forza** — Forza Karting
- **/any** — 404 (дополнительно)
  
## Запуск локально

- npm install
- npm run dev

## Online demo

[![Online demo](public/demo.jpg)](https://sadliyvi.github.io/HW_React_Router_NavMenu/)

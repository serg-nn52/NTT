# NTT

### Реализовано открытие модального окна с деревом папок и файлов. Окно можно закрыть, а можно отправить идентификатор выделенной папки - в моей реализации label, возможно ключи. Я реализовал добавление возможности дополнительно множественного выделения папок, т.к. скорее всего данный функционал понадобится в дальнейшем. Поэтому идентификаторы отправляются массивом. Пользователь видит всплывашку со списком папок, либо одной папкой в случае одиночного выделения.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

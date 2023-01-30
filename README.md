# pincoin-nextjs

## 준비
### 의존성
 * next
 * react
 * react-dom
 * tailwind

### 프로젝트 생성
#### 수동 설치
```
npm install next react react-dom
```

`package.json` 수정하여 아래 내용 추가
```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

```
mkdir pages public
npm run dev
```

#### 타입스크립트 지원
```
touch tsconfig.json
npm run dev
npm install typescript @types/react @types/node
```

#### Tailwind CSS 지원
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js` 파일 수정
```
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

`styles/globals.css` 파일

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`pages/_app.tsx` 파일

```tsx
import {AppProps} from "next/app";
import "../styles/globals.css";

const App = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
```

## 주요사항
### `_app.tsx`
* 공통 레이아웃, 전역 CSS 디자인 커스터마이징
* props
  * Component: 현재 페이지
  * pageProps: DataFatching 메서드로 미리 가져온 초기 객체, getInitialProps, getStaticProps, getServerSideProps 중 하나

### `_document.tsx`
* HTML 문서(document) 커스터마이징
  * head, meta, font, 웹 접근성, body 등 설정
  * _document.tsx는 _app.tsx 다음에 실행

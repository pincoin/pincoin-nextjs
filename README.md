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

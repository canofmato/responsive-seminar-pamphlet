# 동아리 세미나 팜플렛

교내 동아리 정기 세미나 홍보 및 프로젝트 정리를 위해 제작하게 되었습니다.

## Descripttion
- 행사 일정
- 동아리 소개
- 프로젝트 팀들의 결과물
- 설문
위의 4가지를 쉽게 확인할 수 있도록 제작되었습니다.

## 수정 가이드 요약

1. 타임테이블 내용 수정
2. Title 및 Overview의 <p> 텍스트 수정
3. 팀원 이름 및 링크 수정
4. ProjectViewer의 teamName / totalSlides 설정

### 파일 구조
```
public
├── cv
│   └── 1.png    # 컴퓨터비전 프로젝트 ppt png
│   └── 2.png
│   └── n.png
├── genAI1
│   └── images    # 생성형 AI 1팀 프로젝트 ppt png
├── genAI2
│   └── images    # 생성형 AI 2팀 프로젝트 ppt png
├── nlp
│   └── images    # 자연어처리 프로젝트 ppt png
├── recsys
│   └── images    # 추천시스템 프로젝트 ppt png
├── favicon.svg
├── index.html


src
├── assets
│   └── images    # 공통 UI 이미지 (아이콘 등)
├── components
│   ├── layout
│   │   └── Header.tsx      # 상단 헤더
│   └── ProjectViewer.tsx   # 프로젝트 페이지 내 ppt 이미지 뷰어
├── pages
│   ├── Home
│   │   └── Home.tsx
│   └── Overview
│   │   └── Overview.tsx
│   │   └── Time.tsx
│   │   └── Dacos.tsx
│   │   └── GenAI1.tsx
│   │   └── GenAI2.tsx
│   │   └── NLP.tsx
│   │   └── CV.tsx
│   │   └── RecSys.tsx
│   │   └── CMT.tsx
├── router
│   └── AppRouter.tsx     # 전체 라우팅 설정
├── App.tsx               # 앱 전체 레이아웃
└── index.tsx             # React 진입 파일
└── tailwind.config.js    # Tailwind CSS 설정
```

### 📁 public 폴더 사용 이유

`ProjectViewer` 컴포넌트에서는
프로젝트별 이미지 경로를 문자열로 동적으로 참조합니다.

이 방식은 `src/assets` 경로에서는 사용할 수 없기 때문에,
이미지 파일은 반드시 `public` 폴더 하위에 위치해야 합니다.

예:
- /public/genAI1/images
- /public/nlp/images

⚠️ 해당 구조를 변경하면 프로젝트 이미지가 정상적으로 표시되지 않을 수 있습니다.

### ✏️ 수정이 필요한 폴더
- `public/*/images` : 프로젝트 팀별 발표 ppt 이미지 교체
- `src/pages/Overview/*` : 프로젝트별 상세 페이지 내용 수정

### ➕ 팀(프로젝트) 추가 방법

새로운 팀을 추가하려면 **아래 3단계를 모두 수행해야 합니다.**

1. `src/pages/Overview/Overview.tsx`
   - `folders` 배열에 팀 정보 추가

2. `src/pages/Overview/`
   - 해당 팀의 페이지 컴포넌트 파일 생성
   - 예: `AI.tsx`

3. `src/router/AppRouter.tsx`
   - 생성한 페이지를 라우터에 연결

※ grid 레이아웃은 자동으로 조정되므로 수정할 필요가 없습니다.

#### ✅ 팀 추가 체크리스트
- [ ] Overview.tsx `folders` 배열 추가
- [ ] Overview 하위 페이지 파일 생성
- [ ] AppRouter.tsx에 Route 추가
- [ ] public 폴더에 이미지 추가
- [ ] ProjectViewer 설정 확인

### 📄 Overview 하위 페이지 수정 방법

각 팀(프로젝트) 페이지는 동일한 구조로 되어 있습니다.
다음 항목만 수정하면 됩니다.

#### 1. 제목 및 소개 문구
- 페이지 상단의 제목(title) - `<p>` 태그 내용 수정
- `overview` -  `<p>` 태그 내용 수정

#### 2. 팀원 이름 및 링크
- 팀원 이름 텍스트 수정
- GitHub, Padlet 등 연결된 링크 수정

#### 3. ProjectViewer 컴포넌트 설정

`<ProjectViewer teamName="nlp" totalSlides={30} />`

- teamName : public 폴더 안에 있는 팀별 이미지 폴더 이름
  - 예: /public/nlp
- totalSlides : 해당 폴더에 들어있는 이미지 개수
  - 예: 1.png ~ 30.png → 30
- ⚠️ 이미지 파일명은 반드시 `1.png`부터 연속된 숫자여야 합니다.
 
## 🚫 수정하지 않는 것을 권장하는 부분 🚫
- ProjectViewer 내부 코드
- Desktop / Mobile 레이아웃 구조
- Tailwind className

## 🛠 기술 스택
- React
- TypeScript
- Tailwind CSS

## 📦 실행 환경
- Vercel
- main 브랜치에 push 시 자동 배포

## Link
🔗 [https://responsive-seminar-pamphlet.vercel.app]


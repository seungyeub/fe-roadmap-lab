# 💻 FE Roadmap Lab ![Last commit](https://img.shields.io/github/last-commit/seungyeub/fe-roadmap-lab?label=last%20updated)

> 실습/예제/프로토타입을 담는 **샌드박스 저장소**입니다.  
> 설계 문서: [`fe-roadmap-blueprint`](https://github.com/seungyeub/fe-roadmap-blueprint), 진행 로그: [`fe-roadmap-progress`](https://github.com/seungyeub/fe-roadmap-progress)

🕒 **마지막 갱신:** 2025-11-19

---

## 📘 Repository Overview

- **역할**: 학습 중 떠오르는 아이디어·개념을 **작게 실험하고 빠르게 검증**하는 공간입니다.  
- **철학**:
  - _작게 시작 → 바로 실행 → 결과 기록 → 인사이트 환류_
  - 실험 산출물은 가능하면 **작동하는 코드 + 짧은 회고**로 남깁니다.
  - 재사용 가능한 결과는 Blueprint로, 진행 기록은 Progress로 **즉시 연결**합니다.

---

## 🧱 Main Sections

- **01_mini-apps/** — 작게 완성 가능한 토이/미니 앱 (Todo, Fetch 연습 등)
- **02_portfolio/** — 포트폴리오 산출물과 공용 컴포넌트 모음
- **03_playgrounds/** — JS/TS/React 개념 실험, 성능/훅/상태관리 등
- **04_testing/** — Jest/Vitest/RTL 예제 및 공용 설정
- **_templates/** — 실습 스캐폴드(예: `react_vite_ts`)  
- **scripts/** — 새 실습 생성 스크립트 등 유틸리티

---

## 📂 Folder Structure

```bash
fe-roadmap-lab/
├── 01_mini-apps/
│   ├── todo-app/
│   ├── api-fetch-practice/
│   └── react-ts-conversion/
├── 02_portfolio/
│   ├── frontend-portfolio/
│   └── portfolio-components/
├── 03_playgrounds/
│   ├── js-core/
│   │   ├── closure-playground/
│   │   └── async-eventloop/
│   ├── react-hooks-playground/
│   ├── state-management-test/
│   ├── ts-practice/
│   └── vitest-playground/
├── 04_testing/
│   ├── jest/
│   ├── vitest/
│   └── rtl/
├── _templates/
│   └── react_vite_ts/          # React + Vite + TS 베이스 템플릿(v0)
├── scripts/
│   └── new.sh                   # 새 실습 디렉터리 생성 스크립트
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started
1) 요구 사항

- Node.js LTS (권장: v20 이상)
- npm 또는 pnpm(선택)

2) 베이스 템플릿 복제로 시작하기
```
# 예: 01_mini-apps 아래에 todo-v1 생성
rsync -a --exclude node_modules --exclude dist _templates/react_vite_ts/ 01_mini-apps/todo-v1/
cd 01_mini-apps/todo-v1
npm i
npm run dev      # 개발 서버
npm test         # 단위 테스트(Vitest)
```

---

## 🛠️ 새 실습 생성 스크립트

scripts/new.sh는 상위 폴더 규칙에 맞춰 디렉터리를 생성하고 기본 README를 만들어 줍니다.
(레거시 별칭도 지원: exp → play)
```
# 사용법
scripts/new.sh <TYPE> <NAME>

# TYPE:
#  - mini      → 01_mini-apps/<NAME>
#  - play      → 03_playgrounds/<NAME>
#  - portfolio → 02_portfolio/<NAME>

# 예시
scripts/new.sh mini todo-v2
scripts/new.sh play react-hooks-playground
scripts/new.sh portfolio frontend-portfolio
```

> _templates/react_vite_ts 템플릿이 존재하면, 새 디렉터리에 자동으로 복제됩니다(의존성 설치는 수동).

---

## 📦 Base Template(v0): React + Vite + TypeScript

- 포함: React 18, Vite 5, TS 5, Vitest(+jsdom), Testing Library, Prettier
- 테스트: npm test로 실행, src/App.test.tsx 기본 예제 포함
- 코드 스타일: Prettier 기본 설정(ESLint는 별도 Pack으로 추가 예정)

> 템플릿 개선은 커리큘럼에 맞춰 팩(Feature Pack) 형태로 점진적으로 추가합니다.

---

## 🧰 Feature Packs(추가 예정)

각 Pack은 필요 시점에만 선택적으로 적용합니다. Pack은 템플릿 확장 또는 문서 가이드 형태로 제공됩니다.

- Router Pack: react-router-dom 기본 라우팅, 코드 스플리팅 예제
- State Pack: Redux Toolkit 또는 Zustand 기본 보일러, 아키텍처 예시
- Query Pack: @tanstack/react-query + Devtools, 캐싱/동기화 패턴
- MSW Pack: 목 API 환경, 시나리오 기반 핸들러
- ESLint Pack: Flat config + TS/React 권장 규칙(Prettier 정렬과 충돌 방지)
- CI Pack: GitHub Actions(install → build → test) 워크플로

---

## ✍️ 프로젝트 README 가이드(각 실습 폴더 내)

각 실습 폴더에는 최소한 다음 섹션을 포함해 주세요.

1. Title & Goal — 무엇을 검증/학습하려는가
2. Key Points — 핵심 개념 3~5개
3. How to Run — 설치/실행/테스트 명령
4. Result — 스크린샷/측정치/데모 요약
5. Insights — 배운 점, 다음 액션
6. Links — 관련 Blueprint 문서, Progress 로그 링크

예시:
```
# Todo v1
## Goal
- Vite+TS 템플릿 부트스트랩 및 상태 업데이트 흐름 확인

## Key Points
- 상태 불변성, 이벤트 핸들링, 단위 테스트

## How to Run
npm i && npm run dev
npm test

## Result
- 기본 CRUD 동작 확인, 테스트 3건 통과

## Insights
- 컴포넌트 분리 기준: 입력/리스트/아이템로 나누는 편이 가독 좋음

## Links
- Blueprint: 04_React/basics/...
- Progress: 00_Guides/study_log/2025-10-24.md
```

---

## 📏 Conventions

- 이름 규칙: 디렉터리/파일은 kebab-case (예: react-hooks-playground)
- 커밋 메시지: Conventional Commits 권장
  - 예: feat(todo): add toggle complete, chore(lab): rename folders
- 브랜치: 짧은 실험은 main 직커밋 가능, 규모 있는 실험은 feat/* 또는 chore/*
- 코드 스타일: Prettier 적용 (npm run format)
- 테스트: Vitest + Testing Library(기본), E2E가 필요하면 Playwright를 실험 폴더 단위로 추가

---

## 🔗 Cross Repos

- Blueprint(설계/레퍼런스): [`fe-roadmap-blueprint`](https://github.com/seungyeub/fe-roadmap-blueprint)
- Progress(진행/로그/템플릿): [`fe-roadmap-progress`](https://github.com/seungyeub/fe-roadmap-progress)

> 실험에서 얻은 검증된 패턴/인사이트는 [`_Blueprint_`](https://github.com/seungyeub/fe-roadmap-blueprint)로, 일일/주간 진행 기록은 [`_Progress_`](https://github.com/seungyeub/fe-roadmap-progress)로 환류해 주세요.

---

## 🧩 License

본 저장소는 MIT License를 따릅니다. 자세한 내용은 [`LICENSE`](https://github.com/seungyeub/fe-roadmap-lab/blob/master/LICENSE)를 확인해 주세요.

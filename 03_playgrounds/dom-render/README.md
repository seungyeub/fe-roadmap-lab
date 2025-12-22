# 🖼️ DOM Render Timing 실험

## 실행
- 파일을 브라우저로 직접 열거나 간단 서버 실행
  - Python: `python3 -m http.server 5173`
  - Node(serve): `npx serve -l 5173`

## 비교 포인트
- `<script src="./main.js" defer>` ↔ (defer 제거) ↔ `async`로 변경
- 콘솔의 load 타임, 화면의 DOMContentLoaded 텍스트 차이 기록
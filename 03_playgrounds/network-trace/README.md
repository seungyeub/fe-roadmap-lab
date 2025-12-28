# 🔎 Network Trace 실습

## 목표
- Waterfall의 단계별 구간(DNS/Initial connection/SSL/TTFB/Content Download) 해석
- Hard Reload vs Reload, Disable cache의 영향 관찰

## 절차
1) DevTools → Network → "Disable cache" 체크
2) 새로고침 후 첫 문서(HTML)와 주요 리소스의 구간/상태코드/크기 확인
3) Hard Reload(⌘+Shift+R / Ctrl+F5)와 비교
4) 스크린샷/메모를 progress 레포 Day 1 로그에 첨부
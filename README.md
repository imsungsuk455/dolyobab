# 돌려밥 (what-to-eat)

오늘 뭐 먹지? 10초 만에 메뉴 정하기 + 직접 해먹은 초간단 레시피.

## 개발

```sh
npm run dev      # 로컬 개발
npm run build    # 정적 빌드 (dist/)
```

## 배포

Cloudflare Pages → GitHub 리포 연결 → 빌드 명령 `npm run build` → 출력 디렉토리 `dist/`

## TODO (도메인·승인 전 체크)

- [ ] `astro.config.mjs` site URL을 확정 도메인으로 교체
- [ ] `public/robots.txt` 사이트맵 URL 교체
- [ ] `contact@example.com` 4곳 실제 이메일로 교체 (about/privacy/contact + 레이아웃 푸터 주석)
- [ ] 레시피 30개 채우기 (`src/content/recipes/*.md` + `src/data/menus.json` slug 연결)
- [ ] 파비콘/OG 이미지 교체
- [ ] AdSense 사이트 추가 신청

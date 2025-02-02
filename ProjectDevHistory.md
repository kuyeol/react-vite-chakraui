
# Rest Api _Fetch Data_ [`.env`](.env)

- `.env`파일에서 url 정의 하여 데이터 로드

---

# 프로젝트 구조

---

## 글로벌 사용 요소 [`Shared`](src/shared)

### - 레이아웃 [`Layout`](src/shared/Layout)

#### - 네비바 [`Navbar`](src/shared/Layout/Navbar)

- 데스크탑 환경 : `src/shared/Layout/Navbar/DesktopNav.tsx`
- 모바일 환경 : `src/shared/Layout/Navbar/MobileNav.tsx`

- 공통 적용 요소
  - 아이템 타입 정의 : `src/shared/Layout/Navbar/Navitems/INavItem.ts`
  - 아이템 리스트 : `src/shared/Layout/Navbar/Navitems/useNavItems.ts`

---

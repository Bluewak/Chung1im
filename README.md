<!-- ⚠️ 이 파일은 자동 생성되며, 직접 수정하지 마세요. 수정하려면 docs/readme-template.md를 편집하세요 -->


# 🎸 Chung1im - 밴드 동아리 커뮤니티 웹사이트

**청림 밴드부**의 팀 구성, 합주 예약, 자유 게시판, 공연 영상 공유 등을 위한 커뮤니티 웹앱입니다.  
React 기반으로 개발되며, Express + MySQL 백엔드와 연동됩니다.

---

## 🔧 기술 스택

| 구성 요소     | 기술                         |
|---------------|------------------------------|
| Frontend      | React + Vite + CSS Modules   |
| Backend       | Node.js + Express + MySQL    |
| 협업/문서     | GitHub, Markdown, draw.io    |
| 배포 환경     | AWS EC2 (예정)               |

---

## 🗂️ 폴더 구조 (예정)

Chung1im/
├── frontend/ # React 프론트엔드
│ ├── public/
│ └── src/
│ ├── components/ # 공통 UI 컴포넌트
│ ├── pages/ # 페이지 단위 구성
│ ├── App.jsx
│ └── main.jsx
├── backend/ # Express 백엔드 (API)
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── db.js
│ └── server.js
├── docs/ # 설계 문서
│ ├── ERD.png
│ ├── api-spec.md
│ └── db-schema.sql
├── .gitignore
├── README.md
└── LICENSE

---
## 🚀 로컬 실행 방법

### 📌 프론트엔드 (React)
```bash
cd frontend
npm install
npm run dev
```
### 📌 백엔드 (Express)
```
cd backend
npm install
node server.js
```
---
📄 문서 링크
---
🧑‍💻 팀원 소개
| 이름  | 역할            |
| --- | ------------- |
| Bleuwak | 프로젝트 기획, DB 설계, ERD 작성, 백엔드  |
| kim1og | 프론트엔드 구현      |


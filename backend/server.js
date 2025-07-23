// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const reservationRoutes = require('./routes/reservations');

// .env 파일 읽기
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(cors());                // 프론트 요청 허용
app.use(express.json());        // JSON 파싱

// 라우터 연결
app.use('/api/reservations', reservationRoutes);

// 테스트용 기본 라우트
app.get('/', (req, res) => {
  res.send('🎸 밴드부 백엔드 서버가 켜졌습니다!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});

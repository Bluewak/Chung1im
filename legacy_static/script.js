function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });
}

// 로그인 상태 저장 키
const LOGIN_KEY = "isLoggedIn";

// 로그인 상태 확인 및 초기 UI 설정
window.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  if (sessionStorage.getItem(LOGIN_KEY) === "true") {
    loginBtn.textContent = "로그아웃";
    loginBtn.onclick = handleLogout;
    showSection("notice");
    document.getElementById("notice-write").style.display = "block";
  } else {
    loginBtn.textContent = "로그인";
    loginBtn.onclick = handleLoginClick;
    document.getElementById("notice-write").style.display = "none";
  }
});

// 로그인 버튼 클릭 시
function handleLoginClick() {
  showSection("login");
}

// 로그아웃 처리
function handleLogout() {
  sessionStorage.removeItem(LOGIN_KEY);
  document.getElementById("loginBtn").textContent = "로그인";
  document.getElementById("loginBtn").onclick = handleLoginClick;
  showSection("login");

  // 폼 초기화
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("loginMessage").textContent = "";

  // 공지사항 글쓰기 폼 숨기기
  document.getElementById("notice-write").style.display = "none";
}

// 로그인 시뮬레이션
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("loginMessage");
  const loginBtn = document.getElementById("loginBtn");

  if (username === "admin" && password === "1234") {
    msg.textContent = "환영합니다, 관리자님!";
    msg.style.color = "green";

    sessionStorage.setItem(LOGIN_KEY, "true");

    showSection("notice");
    loginBtn.textContent = "로그아웃";
    loginBtn.onclick = handleLogout;

    document.getElementById("notice-write").style.display = "block";
  } else {
    msg.textContent = "아이디 또는 비밀번호가 잘못되었습니다.";
    msg.style.color = "red";
  }
});

// 자유게시판: 글쓰기 버튼 누르면 폼 보이기
document.getElementById("showFormBtn").addEventListener("click", function () {
  document.getElementById("postForm").style.display = "flex";
  this.style.display = "none";
});

// 자유게시판 글쓰기
document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const writer = document.getElementById("writer").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const post = document.createElement("div");
  post.classList.add("free-post");
  post.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <p><strong>작성자:</strong> ${writer}</p>
    <button class="delete-btn">삭제</button>
    <hr />
  `;

  document.getElementById("free-board").prepend(post);

  document.getElementById("writer").value = "";
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  document.getElementById("postForm").style.display = "none";
  document.getElementById("showFormBtn").style.display = "block";
});

// 자유게시판 삭제 버튼 이벤트 (동적 요소 포함)
document.getElementById("free-board").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

// 공지사항 글쓰기
document.getElementById("noticeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("noticeTitle").value;
  const content = document.getElementById("noticeContent").value;

  const post = document.createElement("div");
  post.classList.add("notice-post");
  post.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <hr/>
  `;

  document.getElementById("notice-board").prepend(post);

  document.getElementById("noticeTitle").value = "";
  document.getElementById("noticeContent").value = "";
});

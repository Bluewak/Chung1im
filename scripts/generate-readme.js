// scripts/generate-readme.js
const fs = require("fs");

const templatePath = "./docs/readme-template.md";
const outputPath = "./README.md";
const warning = "<!-- ⚠️ 이 파일은 자동 생성되며, 직접 수정하지 마세요. -->\n\n";

try {
  const template = fs.readFileSync(templatePath, "utf-8");
  fs.writeFileSync(outputPath, warning + template);
  console.log("✅ README.md가 템플릿에서 재생성되었습니다.");
} catch (err) {
  console.error("🚨 README 생성 중 오류 발생:", err.message);
}

// Minimal syllabus map for dropdowns
const syllabusMap = {
  CBSE: { 8:["Math","Science","English","Social"], 9:["Math","Science","English","Social"], 10:["Math","Science","English","Social"], 11:["Math","Physics","Chemistry","Biology","English"], 12:["Math","Physics","Chemistry","Biology","English"] },
  ICSE: { 8:["Math","Science","English","Social"], 9:["Math","Science","English","Social"], 10:["Math","Science","English","Social"], 11:["Math","Physics","Chemistry","Biology","English"], 12:["Math","Physics","Chemistry","Biology","English"] }
};

const boardSel = document.getElementById('board');
const classSel = document.getElementById('class');
const subjectSel = document.getElementById('subject');

boardSel.addEventListener('change', () => {
  const board = boardSel.value;
  classSel.innerHTML = '<option value="">Select Class</option>';
  subjectSel.innerHTML = '<option value="">Select Subject</option>';
  if (!board) return;
  Object.keys(syllabusMap[board]).forEach(c => {
    const opt = document.createElement('option'); opt.value = c; opt.textContent = c;
    classSel.appendChild(opt);
  });
});

classSel.addEventListener('change', () => {
  const board = boardSel.value;
  const cls = classSel.value;
  subjectSel.innerHTML = '<option value="">Select Subject</option>';
  if (!board || !cls) return;
  syllabusMap[board][cls].forEach(sub => {
    const opt = document.createElement('option'); opt.value = sub; opt.textContent = sub;
    subjectSel.appendChild(opt);
  });
});

document.getElementById('continueBtn').addEventListener('click', () => {
  const board = boardSel.value;
  const cls = classSel.value;
  const sub = subjectSel.value;
  if (!board || !cls || !sub) { alert('Please select Board, Class, and Subject.'); return; }
  localStorage.setItem('board', board);
  localStorage.setItem('class', cls);
  localStorage.setItem('subject', sub);
  window.location.href = 'login.html';
});

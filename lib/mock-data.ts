// Centralized Mock Data for The Learner's Academy

export const ADMIN_STATS = [
  { label: 'Total Classes', value: '42', change: '+2', trend: 'up' },
  { label: 'Total Teachers', value: '24', change: '0', trend: 'flat' },
  { label: 'Active Sessions', value: '18', change: '+5', trend: 'up' },
  { label: 'Total Students', value: '284', change: '+12', trend: 'up' },
];

export const SYSTEM_HEALTH = {
  teacherLoad: { ratio: '1 : 12', progress: 65, status: 'target reached' },
  teacherPresence: { count: '18 / 22', progress: 82, status: 'active teachers' },
  roomOccupancy: { percentage: '76%', progress: 76, status: 'at capacity' },
};

export const TEACHER_ASSESSMENTS = [
  { id: '1', level: "Level One", slot: 1, midTerm: "published", final: "pending", room: "L5" },
  { id: '2', level: "Level Three", slot: 2, midTerm: "published", final: "pending", room: "L2" },
  { id: '3', level: "Level Six", slot: 3, midTerm: "draft", final: "pending", room: "L8" },
];

export const STUDENT_PERFORMANCE_SUMMARY = {
  averageScore: 82,
  highestScore: 98,
  lowestScore: 64,
  totalStudents: 124,
};

export const STUDENT_RESULTS = [
  { id: 'ST-001', name: 'Ahmad Khan', score: 85, status: 'Pass' },
  { id: 'ST-002', name: 'Sara Ahmed', score: 92, status: 'Pass' },
  { id: 'ST-003', name: 'Zaid Ali', score: 78, status: 'Pass' },
  { id: 'ST-004', name: 'Fatima Noor', score: 62, status: 'Fail' },
];

export const QUESTION_TYPES = [
  { id: 'mcq', label: 'Multiple Choice' },
  { id: 'short', label: 'Short Answer' },
  { id: 'paragraph', label: 'Paragraph' },
];

export const DIFFICULTY_LEVELS = [
  { id: 'easy', label: 'Easy', color: 'bg-green-100 text-green-700' },
  { id: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'hard', label: 'Hard', color: 'bg-red-100 text-red-700' },
];

export const CATEGORIES = ['Grammar', 'Vocabulary', 'Listening', 'Reading', 'Writing'];

export const SAMPLE_QUESTIONS = [
  {
    id: '1',
    type: 'mcq',
    text: 'What is the past tense of "Go"?',
    options: ['Goed', 'Went', 'Gone', 'Going'],
    correctAnswer: 'Went',
    difficulty: 'easy',
    category: 'Grammar',
  },
  {
    id: '2',
    type: 'short',
    text: 'Define the term "Oxymoron".',
    difficulty: 'hard',
    category: 'Vocabulary',
  },
];

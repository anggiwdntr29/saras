export const EDUCATION_LABEL = 'Education'

export const EDUCATION_HEADLINE = 'Where I learned'

export const EDUCATION = {
  institution: 'Bali State Polytechnic',
  qualification: 'Diploma (D3) in Electrical Engineering',
  startYear: 2020,
  endYear: 2023,
  gpa: 3.84,
  gpaMax: 4,
  background:
    'My academic background in Electrical Engineering provided a foundation in technical understanding, structured problem-solving, and working with technical information. This background complements my professional experience in administration, operations, and project support.',
  pillars: ['Technical Understanding', 'Structured Problem-Solving', 'Technical Information'],
}

export const COURSES_TITLE = 'Courses & Certifications'

export type Course = {
  title: string
  provider?: string
  note?: string
}

export const COURSES: Course[] = [
  { title: 'TOEIC Report', note: 'English Proficiency' },
  { title: 'Copywriting Learning', provider: 'Digital Skola' },
  { title: 'Introduction to Data Analytics', provider: 'RevoU', note: '2-Week Certified Online Course' },
  { title: 'The Ultimate Guide to Human Resource Fundamentals', provider: 'Udemy' },
  { title: 'Procurement (Sourcing and Purchasing)', provider: 'Udemy' },
]

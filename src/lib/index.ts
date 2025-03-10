export type Exam = {
  path: string,
  title: string,
  info: string,
  img: string,
}

export const exams: Exam[] = [
  {
    path: 'cie',
    title: 'Cambridge International Education',
    info: 'Explore the best Cambridge resources for IGCSE and A Level.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg/800px-Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg',
  },
  {
    path: 'sat',
    title: 'Scholastic Assessment Test',
    info: 'Score a 1500 on the SAT with our exam hacks.',
    img: 'https://wtop.com/wp-content/uploads/2018/05/052218_college_board.jpg',
  },
  {
    path: 'nzqa',
    title: 'New Zealand Qualifications Authority',
    info: 'Prepare for NCEA Level 1 to 3 and Scholarship.',
    img: 'https://wun.ac.uk/wp-content/uploads/university_auckland.jpg',
  },
]
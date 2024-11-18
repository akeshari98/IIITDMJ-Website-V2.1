// Import required modules
require('dotenv').config();
const pool = require("../connection");

// Function 1: Get Faculty Honors
async function getFacultyHonors(userId) {
  const query = `
    SELECT t.id, title, description, "period"
    FROM dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
         'SELECT auth_user.id, eis_honors.title, description, "period" 
          FROM auth_user, globals_extrainfo, globals_faculty, eis_honors
          WHERE auth_user.id=globals_extrainfo.user_id
          AND globals_extrainfo.id=globals_faculty.id_id
          AND auth_user.id=eis_honors.user_id
          AND auth_user.id=${userId}')
    AS t(id int, title varchar, description varchar, "period" varchar)`;
  
  const { rows } = await pool.query(query);
  return rows;
}

// Function 2: Get Faculty Qualifications
async function getFacultyQualifications(userId) {
  const query = `
    SELECT t.id, "degree", college
    FROM dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
         'SELECT auth_user.id, "degree", college 
          FROM auth_user, globals_extrainfo, globals_faculty, eis_qualifications
          WHERE auth_user.id=globals_extrainfo.user_id
          AND globals_extrainfo.id=globals_faculty.id_id
          AND auth_user.id=eis_qualifications.user_id
          AND auth_user.id=${userId}')
    AS t(id int, "degree" varchar, college varchar)`;
  
  const { rows } = await pool.query(query);
  return rows;
}

// Function 3: Get Faculty Professional Experience
async function getFacultyExperience(userId) {
  const query = `
    SELECT t.id, title, description, "from", "to"
    FROM dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
         'SELECT auth_user.id, eis_professional_experience.title, description, "from", "to" 
          FROM auth_user, globals_extrainfo, globals_faculty, eis_professional_experience
          WHERE auth_user.id=globals_extrainfo.user_id
          AND globals_extrainfo.id=globals_faculty.id_id
          AND auth_user.id=eis_professional_experience.user_id
          AND auth_user.id=${userId}')
    AS t(id int, title varchar, description varchar, "from" varchar, "to" varchar)`;
  
  const { rows } = await pool.query(query);
  return rows;
}

// Function 4: Get Faculty Administrative Position
async function getFacultyAdminPosition(userId) {
  const query = `
    SELECT t.id, title, description, "from", "to"
    FROM dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
         'SELECT auth_user.id, eis_administrative_position.title, description, "from", "to" 
          FROM auth_user, globals_extrainfo, globals_faculty, eis_administrative_position
          WHERE auth_user.id=globals_extrainfo.user_id
          AND globals_extrainfo.id=globals_faculty.id_id
          AND auth_user.id=eis_administrative_position.user_id
          AND auth_user.id=${userId}')
    AS t(id int, title varchar, description varchar, "from" varchar, "to" varchar)`;
  
  const { rows } = await pool.query(query);
  return rows;
}

async function getFacultyBasicInfo(userId) {
  const query = `
  SELECT id, first_name, last_name, designation, email, contact, address, profile_picture, department, about, interests, linkedin, github
FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT auth_user.id AS id, 
                   auth_user.first_name AS first_name, 
                   auth_user.last_name AS last_name, 
                   designation.name AS designation, 
                   auth_user.email AS email, 
                   faculty_about.contact AS contact, 
                   extra_info.address AS address, 
                   extra_info.profile_picture AS profile_picture, 
                   department.name AS department, 
                   faculty_about.about AS about, 
                   faculty_about.interest AS interests,
                   faculty_about.linkedin AS linkedin,
                   faculty_about.github AS github
            FROM auth_user
            JOIN globals_holdsdesignation AS holds_designation 
              ON holds_designation.user_id = auth_user.id
            JOIN globals_designation AS designation 
              ON designation.id = holds_designation.designation_id
            JOIN globals_extrainfo AS extra_info 
              ON extra_info.user_id = auth_user.id
            JOIN globals_departmentinfo AS department 
              ON extra_info.department_id = department.id
            JOIN eis_faculty_about AS faculty_about 
              ON extra_info.user_id = faculty_about.user_id
            WHERE auth_user.id = ${userId}'
          ) AS t(id int, first_name varchar, last_name varchar, designation varchar, email varchar, contact varchar, address text, profile_picture varchar, department varchar, about varchar, interests varchar, linkedin varchar, github varchar);
`;
  
  const { rows } = await pool.query(query);
  return rows;
}
async function getAllFaculties(branch_id) {
  const query = `
    SELECT id, first_name, last_name, designation, email, contact, address, profile_picture, department, about, interests
FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT auth_user.id AS id, 
                   auth_user.first_name AS first_name, 
                   auth_user.last_name AS last_name, 
                   designation.name AS designation, 
                   auth_user.email AS email, 
                   faculty_about.contact AS contact, 
                   extra_info.address AS address, 
                   extra_info.profile_picture AS profile_picture, 
                   department.name AS department, 
                   faculty_about.about AS about, 
                   faculty_about.interest AS interests
            FROM auth_user
            JOIN globals_holdsdesignation AS holds_designation 
              ON holds_designation.user_id = auth_user.id
            JOIN globals_designation AS designation 
              ON designation.id = holds_designation.designation_id
            JOIN globals_extrainfo AS extra_info 
              ON extra_info.user_id = auth_user.id
            JOIN globals_departmentinfo AS department 
              ON extra_info.department_id = department.id
            JOIN eis_faculty_about AS faculty_about 
              ON extra_info.user_id = faculty_about.user_id
            WHERE extra_info.department_id = ${branch_id}'
          ) AS t(id int, first_name varchar, last_name varchar, designation varchar, email varchar, contact varchar, address text, profile_picture varchar, department varchar, about varchar, interests varchar);

  `;

  const { rows } = await pool.query(query);
  return rows;
}

async function getFacultyCourses(userId) {
  const query = `
    SELECT DISTINCT course_code, course_name, discipline
    FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT pc_course.code AS course_code, 
                   pc_course.name AS course_name, 
                   pc_discipline.name AS discipline
            FROM programme_curriculum_course AS pc_course
            JOIN programme_curriculum_courseinstructor AS pc_instructor 
              ON pc_course.id = pc_instructor.course_id_id
            JOIN programme_curriculum_course_disciplines AS pc_course_discipline 
              ON pc_course.id = pc_course_discipline.course_id
            JOIN programme_curriculum_discipline AS pc_discipline 
              ON pc_discipline.id = pc_course_discipline.discipline_id
            JOIN globals_extrainfo AS globals_info 
              ON pc_instructor.instructor_id_id = globals_info.id
            WHERE globals_info.user_id = ${userId}'
          ) AS t(course_code varchar, course_name varchar, discipline varchar);`;
  
  const { rows } = await pool.query(query);
  return rows;
}

async function getSpecialization(userId) {
  const query = `
    SELECT about
    FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT faculty_about.about AS about
            FROM auth_user
            JOIN eis_faculty_about AS faculty_about 
              ON auth_user.id = faculty_about.user_id
            WHERE auth_user.id = ${userId}'
          ) AS t(about varchar);
`;
  
  const { rows } = await pool.query(query);
  return rows;
}

async function getProjects(userId) {
  const query = `
    SELECT title, pi, co_pi, start_date, finish_date
    FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT research_projects.title AS title,pi,co_pi,start_date,finish_date
            FROM auth_user
            JOIN eis_emp_research_projects AS research_projects 
              ON auth_user.id = research_projects.user_id
            WHERE auth_user.id = ${userId}'
          ) AS t(title text, pi varchar, co_pi varchar, start_date date, finish_date date);
`;
  
  const { rows } = await pool.query(query);
  return rows;
}


async function getBooks(userId) {
  const query = `
    SELECT title, authors, publisher, pyear
    FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT published_books.title AS title,authors,publisher,pyear
            FROM auth_user
            JOIN eis_emp_published_books AS published_books 
              ON auth_user.id = published_books.user_id
            WHERE auth_user.id = ${userId}'
          ) AS t(title text, authors varchar, publisher varchar, pyear int);
`;
  
  const { rows } = await pool.query(query);
  return rows;
}


async function getPublications(userId) {
  const query = `
    SELECT authors, title_paper, name, volume_no, page_no, year, doi
    FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT authors, title_paper, name, volume_no, page_no, year, doi
            FROM auth_user
            JOIN eis_emp_research_papers AS research_papers 
              ON auth_user.id = research_papers.user_id
            WHERE auth_user.id = ${userId}'
          ) AS t(authors varchar, title_paper varchar, name varchar, volume_no varchar, page_no varchar, year varchar, doi varchar);
`;
  const { rows } = await pool.query(query);
  return rows;
}



async function getConferences(userId) {
  const query = `
    (SELECT role, name, venue, start_date
    FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT role, name, venue, start_date
            FROM auth_user
            JOIN eis_emp_event_organized AS event_organized 
              ON auth_user.id = event_organized.user_id
            WHERE auth_user.id = ${userId}'
          ) AS t(role varchar, name varchar, venue varchar, start_date date))
    UNION
    (SELECT role, name, venue, start_date
    FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT role1 AS role, name, venue, start_date
            FROM auth_user
            JOIN eis_emp_confrence_organised AS confrence_organised 
              ON auth_user.id = confrence_organised.user_id
            WHERE auth_user.id = ${userId}'
          ) AS t(role varchar, name varchar, venue varchar, start_date date))
           ;
`;
  const { rows } = await pool.query(query);
  return rows;
}


async function getStudents(userId) {
  const query = `
    SELECT rollno, s_name, status, s_year, title, co_supervisors
    FROM 
    dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
           'SELECT rollno, s_name, status, s_year, title, co_supervisors
            FROM auth_user
            JOIN eis_emp_mtechphd_thesis AS mtech_phd_thesis 
              ON auth_user.id = mtech_phd_thesis.user_id
            WHERE auth_user.id = ${userId}'
          ) AS t(rollno varchar, s_name varchar, status varchar, s_year int, title varchar, co_supervisors varchar);
`;
  const { rows } = await pool.query(query);
  return rows;
}


const getAllFaculty = async (req, res) => {
  try {
    const query = `
      SELECT t.id, user_type, first_name, last_name, email, address, phone_no, profile_picture
      FROM 
          dblink('dbname=${process.env.Fusion_DB_NAME} user=${process.env.Fusion_DB_USER} password=${process.env.Fusion_DB_PASSWORD}', 
              'SELECT auth_user.id, user_type, first_name, last_name, email, address, phone_no, profile_picture FROM auth_user, globals_extrainfo, globals_faculty 
              WHERE auth_user.id=globals_extrainfo.user_id 
              AND globals_extrainfo.id=globals_faculty.id_id') AS t(id int, user_type varchar, first_name varchar, last_name varchar, email varchar, address text, phone_no bigint, profile_picture varchar)
    `;
    // console.log(res);
    const result = await pool.query(query);
    return res.json(result.rows); // Ensure res is used directly here
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Export the functions
module.exports = {
  getFacultyHonors,
  getFacultyQualifications,
  getFacultyExperience,
  getFacultyAdminPosition,
  getFacultyBasicInfo,
  getAllFaculties,
  getFacultyCourses,
  getSpecialization,
  getProjects,
  getBooks,
  getPublications,
  getConferences,
  getStudents,
  getAllFaculty
};


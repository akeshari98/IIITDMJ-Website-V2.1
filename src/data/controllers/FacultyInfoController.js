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
    dblink('dbname=fusionlab user=superAdmin password=9455957884', 
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
    dblink('dbname=fusionlab user=superAdmin password=9455957884', 
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


// Export the functions
module.exports = {
  getFacultyHonors,
  getFacultyQualifications,
  getFacultyExperience,
  getFacultyAdminPosition,
  getFacultyBasicInfo,
  getAllFaculties
};

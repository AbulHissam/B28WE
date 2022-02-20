-- users
create table users (id int primary key auto_increment not null,first_name varchar(50) not null,last_name varchar(50),email varchar(100) not null);

insert into users (first_name,last_name,email) values ('Abul Hissam','A','abul@test.com');
insert into users (first_name,last_name,email) values ('Ram','Kumar','ramk@test.com');
insert into users (first_name,last_name,email) values ('Raj','Kumar','rajk@test.com');
insert into users (first_name,last_name,email) values ('Prem','Kumar','premk@test.com');
insert into users (first_name,last_name,email) values ('Balaji','MVL','balajimvl@test.com');
select * from users ;

-- codekata
create table codekata (id int not null auto_increment primary key,problems_solved int,users_id int, foreign key(users_id) references users(id));

insert into codekata (problems_solved,users_id) values (10,1);
insert into codekata (problems_solved,users_id) values (15,2);
insert into codekata (problems_solved,users_id) values (20,3);
insert into codekata (problems_solved,users_id) values (25,4);
insert into codekata (problems_solved,users_id) values (30,5);
select * from codekata; 

-- attendance
create table attendance (id int not null auto_increment primary key,attendance_percentage varchar(20),users_id int,foreign key (users_id) references users(id));

insert into attendance (attendance_percentage,users_id) values ('60%',1);
insert into attendance (attendance_percentage,users_id) values ('65%',2);
insert into attendance (attendance_percentage,users_id) values ('70%',3);
insert into attendance (attendance_percentage,users_id) values ('75%',4);
insert into attendance (attendance_percentage,users_id) values ('80%',5);
select * from attendance;

-- topics
create table topics (id int not null auto_increment primary key,topic_name varchar(100) not null,users_id int not null,foreign key (users_id) references users(id));
-- felt like we are not using these table anywhere so didnot insert values;

-- tasks
create table tasks (id int not null auto_increment primary key,task_desc varchar(255) not null,users_id int not null,foreign key (users_id) references users(id));
-- felt like we are not using these table anywhere so didnot insert values;

-- company_drives
create table company_drives (id int not null auto_increment primary key,company_name varchar(50) not null,users_id int not null,foreign key (users_id) references users(id));

insert into company_drives (company_name,users_id) values ('amazon',1);
insert into company_drives (company_name,users_id) values ('amazon',2);
insert into company_drives (company_name,users_id) values ('facebook',3);
insert into company_drives (company_name,users_id) values ('google',4);
insert into company_drives (company_name,users_id) values ('microsoft',5);
select * from company_drives;

-- mentors
create table mentors (id int not null auto_increment primary key,mentor_name varchar(100) not null,users_id int not null,foreign key (users_id) references users(id));

insert into mentors (mentor_name,users_id) values ('M1',1);
insert into mentors (mentor_name,users_id) values ('M2',1);
insert into mentors (mentor_name,users_id) values ('M1',1);
insert into mentors (mentor_name,users_id) values ('M2',1);
insert into mentors (mentor_name,users_id) values ('M3',1);
select * from mentors;

-- students_activated_courses
create table students_activated_courses (id int not null auto_increment primary key,is_activated boolean, course_id int not null,users_id int not null,foreign key(course_id) references courses(id),foreign key (users_id) references users(id));

insert into students_activated_courses (is_activated,course_id,users_id) values (true,1,1);
insert into students_activated_courses (is_activated,course_id,users_id) values (true,5,2);
insert into students_activated_courses (is_activated,course_id,users_id) values (true,1,3);
insert into students_activated_courses (is_activated,course_id,users_id) values (false,2,3);
insert into students_activated_courses (is_activated,course_id,users_id) values (true,4,4);
insert into students_activated_courses (is_activated,course_id,users_id) values (false,2,4);
insert into students_activated_courses (is_activated,course_id,users_id) values (true,3,5);

-- courses
create table courses (id int not null auto_increment primary key,course_name varchar(100) not null);

insert into courses (course_name) values ('Fullstack web dev');
insert into courses (course_name) values ('Complet JAVA guide');
insert into courses (course_name) values ('Frontend with ReactJS');
insert into courses (course_name) values ('Python for machine language');
insert into courses (course_name) values ('Mobile app development using Kotlin');

-- 3. get number problems solved in codekata by combining the users
select sum(problems_solved) as total_problems_solved from codekata;

-- 4. display the no of company drives attended by a user 
select first_name,last_name,count(company_name)  from users u join company_drives cd where cd.users_id = u.id group by company_name ;

-- 5. combine and display students_activated_courses and courses for a specific user groping them based on the course
select course_name as students_activated_course,first_name from courses c join students_activated_courses sac join users u where sac.course_id = c.id and sac.users_id = u.id and is_activated = true group by c.course_name,u.first_name ;

-- 6. list all the mentors
select distinct(mentor_name) from mentors;

-- 7. list the number of students that are assigned for a mentor
select mentor_name,count(m.users_id) as total_student_for_mentors from mentors m join users u where m.users_id = u.id group by m.mentor_name;

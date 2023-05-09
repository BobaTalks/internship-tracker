INSERT INTO locations(city, state, country)
VALUES ('Mountain View', 'CA', 'United States'),
('Menlo Park', 'CA', 'United States'),
('San Diego', 'CA', 'United States'),
('Seattle', 'WA', 'United States')
ON CONFLICT DO NOTHING;

INSERT INTO jobs(title,url,location)
VALUES ('Student Researcher, BS, 2023 ','https://careers.google.com/jobs/results/82749356421063366/', (SELECT id FROM locations l1 WHERE l1.city='Mountain View' AND l1.state='CA' LIMIT 1)),
('Research Scientist Intern, Economics, Algorithms and Optimization (PhD)','https://www.metacareers.com/jobs/3577198895899814/', (SELECT id FROM locations l1 WHERE l1.city='Menlo Park' LIMIT 1)),
('Cellular Protocol Development Engineer','https://jobs.apple.com/en-us/details/200464203/cellular-protocol-development-engineer?team=STDNT', (SELECT id FROM locations l1 WHERE l1.city ='San Diego' AND l1.state='CA' LIMIT 1)),
('2023 Fall Research Science Internship - United States, Student Science Recruiting','https://www.amazon.jobs/en/jobs/2348368/2023-fall-research-science-internship-united-states-student-science-recruiting', (SELECT id FROM locations l1 WHERE l1.city='Seattle' AND l1.state='WA' LIMIT 1))
ON CONFLICT DO NOTHING; 
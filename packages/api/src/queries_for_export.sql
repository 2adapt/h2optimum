---

create or replace view csv_export_33_keyline as
select 
	to_char(ts, 'YYYY-MM-DD"T"HH24:MI:SSOF') as ts,
	MAX(CASE WHEN sid = 1 THEN val ELSE NULL END) as t,
	MAX(CASE WHEN sid = 2 THEN val ELSE NULL END) as s1,
	MAX(CASE WHEN sid = 3 THEN val ELSE NULL END) as s2,
	MAX(CASE WHEN sid = 4 THEN val ELSE NULL END) as s3,
	MAX(CASE WHEN sid = 6 THEN val ELSE NULL END) as t_ar
from t_measurements 
where true 
	and device_id = '01:00:00:00:00:06' 
	and installation_id = 33
	and ts >= '2022-09-01'
group by ts
order by ts asc;

\COPY (select * from csv_export_33_keyline) To '/home/pvieira/csv_export_33_keyline.csv' With CSV DELIMITER ';' HEADER;

---

create or replace view csv_export_33_control as
select 
	to_char(ts, 'YYYY-MM-DD"T"HH24:MI:SSOF') as ts,
	MAX(CASE WHEN sid = 1 THEN val ELSE NULL END) as t,
	MAX(CASE WHEN sid = 2 THEN val ELSE NULL END) as s1,
	MAX(CASE WHEN sid = 3 THEN val ELSE NULL END) as s2,
	MAX(CASE WHEN sid = 4 THEN val ELSE NULL END) as s3,
	MAX(CASE WHEN sid = 6 THEN val ELSE NULL END) as t_ar
from t_measurements 
where true 
	and device_id = '01:00:00:00:00:08' 
	and installation_id = 33
	and ts >= '2022-09-01'
group by ts
order by ts asc;

\COPY (select * from csv_export_33_control) To '/home/pvieira/csv_export_33_control.csv' With CSV DELIMITER ';' HEADER;

--

create or replace view csv_export_35_keyline as
select 
	to_char(ts, 'YYYY-MM-DD"T"HH24:MI:SSOF') as ts,
	MAX(CASE WHEN sid = 1 THEN val ELSE NULL END) as t,
	MAX(CASE WHEN sid = 2 THEN val ELSE NULL END) as s1,
	MAX(CASE WHEN sid = 3 THEN val ELSE NULL END) as s2,
	MAX(CASE WHEN sid = 4 THEN val ELSE NULL END) as s3,
	MAX(CASE WHEN sid = 6 THEN val ELSE NULL END) as t_ar
from t_measurements 
where true 
	and device_id = '01:00:00:00:00:01' 
	and installation_id = 35
	and ts >= '2022-09-01'
group by ts
order by ts asc;

\COPY (select * from csv_export_35_keyline) To '/home/pvieira/csv_export_35_keyline.csv' With CSV DELIMITER ';' HEADER;

--

create or replace view csv_export_35_control as
select 
	to_char(ts, 'YYYY-MM-DD"T"HH24:MI:SSOF') as ts,
	MAX(CASE WHEN sid = 1 THEN val ELSE NULL END) as t,
	MAX(CASE WHEN sid = 2 THEN val ELSE NULL END) as s1,
	MAX(CASE WHEN sid = 3 THEN val ELSE NULL END) as s2,
	MAX(CASE WHEN sid = 4 THEN val ELSE NULL END) as s3,
	MAX(CASE WHEN sid = 6 THEN val ELSE NULL END) as t_ar
from t_measurements 
where true 
	and device_id = '01:00:00:00:00:12' 
	and installation_id = 35
	and ts >= '2022-09-01'
group by ts
order by ts asc;

\COPY (select * from csv_export_35_control) To '/home/pvieira/csv_export_35_control.csv' With CSV DELIMITER ';' HEADER;

--

create or replace view csv_export_36_keyline as
select 
	to_char(ts, 'YYYY-MM-DD"T"HH24:MI:SSOF') as ts,
	MAX(CASE WHEN sid = 1 THEN val ELSE NULL END) as t,
	MAX(CASE WHEN sid = 2 THEN val ELSE NULL END) as s1,
	MAX(CASE WHEN sid = 3 THEN val ELSE NULL END) as s2,
	MAX(CASE WHEN sid = 4 THEN val ELSE NULL END) as s3,
	MAX(CASE WHEN sid = 6 THEN val ELSE NULL END) as t_ar
from t_measurements 
where true 
	and device_id = '01:00:00:00:00:13' 
	and installation_id = 36
	and ts >= '2022-09-01'
group by ts
order by ts asc;

\COPY (select * from csv_export_36_keyline) To '/home/pvieira/csv_export_36_keyline.csv' With CSV DELIMITER ';' HEADER;

--

create or replace view csv_export_36_control as
select 
	to_char(ts, 'YYYY-MM-DD"T"HH24:MI:SSOF') as ts,
	MAX(CASE WHEN sid = 1 THEN val ELSE NULL END) as t,
	MAX(CASE WHEN sid = 2 THEN val ELSE NULL END) as s1,
	MAX(CASE WHEN sid = 3 THEN val ELSE NULL END) as s2,
	MAX(CASE WHEN sid = 4 THEN val ELSE NULL END) as s3,
	MAX(CASE WHEN sid = 6 THEN val ELSE NULL END) as t_ar
from t_measurements 
where true 
	and device_id = '01:00:00:00:00:10' 
	and installation_id = 36
	and ts >= '2022-09-01'
group by ts
order by ts asc;

\COPY (select * from csv_export_36_control) To '/home/pvieira/csv_export_36_control.csv' With CSV DELIMITER ';' HEADER;



insert into users(id, email, user_name, password)
values (10001, 'test1@test.pl', 'username1','$2a$10$ZNyiFuDDmzp9PQ4L/XGxkelPA1yMeuXBER5T7lSpWiwGYHQ33Jqda');

insert into users(id, email, user_name, password)
values (10002, 'test2@test.pl', 'username2','$2a$10$p6orUbOxHjNwpeo1JXry4eQoA2C7E.isRCNW00xLsn2DHxYYqhKsW');

insert into users(id, email, user_name,password)
values (10003, 'test3@test.pl', 'username3','$2a$10$ZNyiFuDDmzp9PQ4L/XGxkelPA1yMeuXBER5T7lSpWiwGYHQ33Jqda');

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10001, 'Work', 10001);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10002, 'Study', 10001);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10003, 'Sport', 10001);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10004, 'Relax', 10001);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10005, 'Reading', 10001);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10006, 'Work', 10002);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10007, 'Study', 10002);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10008, 'Sport', 10002);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10009, 'Relax', 10002);

insert into ACTIVITIES_TYPES(id, activity_name, user_id)
values (10010, 'Reading', 10003);

insert into activities(id, description, activity_type_id, user_id, start, finish)
values (10001, 'Test 1', 10001, 10001, timestamp '2009-09-09 09:30:25', timestamp '2009-09-09 09:30:25');

insert into activities(id, description, activity_type_id, user_id, start, finish)
values (10002, 'Test 2', 10002, 10001, timestamp '2009-09-09 09:30:25', timestamp '2009-09-09 09:30:25');

insert into activities(id, description, activity_type_id, user_id, start, finish)
values (10003, 'Test 3', 10006, 10002, timestamp '2009-09-09 09:30:25', timestamp '2009-09-09 09:30:25');

insert into activities(id, description, activity_type_id, user_id, start, finish)
values (10004, 'Test 4', 10007, 10002, timestamp '2009-09-09 09:30:25', timestamp '2009-09-09 09:30:25');

insert into activities(id, description, activity_type_id, user_id, start, finish)
values (10005, 'Test 5', 10008, 10002, timestamp '2009-09-09 09:30:25', timestamp '2009-09-09 09:30:25');

insert into activities(id, description, activity_type_id, user_id, start, finish)
values (10006, 'Test 6', 10009, 10002, timestamp '2009-09-09 09:30:25', timestamp '2009-09-09 09:30:25');


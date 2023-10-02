# Workout-Tracker

This project is titled "Workout Tracker - Kaplan's Gym" and serves as an exercise workout tracker for a coach to manage clients. The project utilizes HTML/CSS, MongoDB.

There is a coach view (/workouts) as well as a client portal (/client), each with its own privileges. 

To feed into and create the initial database, enter "node initDB.js" into the terminal.

To run the program, run the "node server.js" command in the terminal. Then point the browser to "http://localhost:3000/" or "http://localhost:3000/workouts".


__________________________________


**Routes:**

**/workouts** 
This route displays the full database of workouts in the coach/admin view. Each workout logged includes a client name, date (string format), workout description, total time (string format), exercises completed, coach’s (private) notes, and notes (for the client).

This view is intended to serve as the Coach's view. From this page, the coach is also able to search for a specific workout by entering the client name OR the workout date in the search bar. If both are entered, workouts that match EITHER parameter are shown.

![image](https://github.com/deikaplan/Workout-Tracker/assets/45632694/39ce549c-3d22-4b50-9827-d997a0d5db5c)


**/workouts/add**
This route allows the coach to add a new workout to the database.

![image](https://github.com/deikaplan/Workout-Tracker/assets/45632694/6559ecc8-77f5-4a4f-9226-c0d818ddcc98)


**/workouts/edit**
This route allows the coach to edit an existing workout in the database.

![image](https://github.com/deikaplan/Workout-Tracker/assets/45632694/131b4790-8c0a-48df-98d4-e9a600b8bb3a)


**/workouts/delete**
This route allows the coach to delete an existing workout in the database. A confirmation page is created with fields pre-filled. The coach can then press "OK" to confirm delete, or "Cancel" to return to the main view.

![image](https://github.com/deikaplan/Workout-Tracker/assets/45632694/6091e2f0-7e3f-4325-b4cd-a2e666f26c6d)


**/client**
This is the main client view for this app. This view asks the client to enter their name and the date of the workout they want to view. If they enter only their name, all of their workout history will be displayed. 
The main purpose of the client view is for the client to view the coach's notes from a specific workout on a specific day. The client is also able to log a home workout, which will show up in the coach’s view and will be notated as a “client-logged workout”.
The client does not have the ability to make any changes to the workouts the coach has logged. This view is purely for informational purposes for the client.

![image](https://github.com/deikaplan/Workout-Tracker/assets/45632694/b042f958-8a7e-4ce4-815c-f19a60911c7a)

![image](https://github.com/deikaplan/Workout-Tracker/assets/45632694/719466f2-4c6f-4d32-a1d3-87d9fb505867)


**/client/add**
This route allows a client to add their own workout. Once their workout is added, it is accessible in both the client and the admin/coach view, but the client is unable to make further changes to it. 
All client added workouts are automatically labeled as a "client-logged workout" from the coach's view, in the "Coach's Notes" section.

![image](https://github.com/deikaplan/Workout-Tracker/assets/45632694/a62be095-25f9-4a8b-a0d1-72eae626e57b)

__________________________________

**APIs:**
Note: JSON versions of APIs do not hide "coach's notes." Practically, this could allow a coach/gym to build a mobile app utilizing this API for staff use.
If this API was to be used for client view purposes, "coach's notes" would have to be hidden.


**/api/workouts/** and **/api/workouts/xml** return the /workouts view in JSON and XML formats, respectively.

**/api/workouts/client/:clientName/** and **/api/workouts/client/:clientName/xml** return the /workouts view for a specific client in JSON and XML formats, respectively.

**/api/workouts/client/:clientName/:date/** and **/api/workouts/client/:clientName/:date/xml** return the /workouts view for a specific client on a specific date in JSON and XML formats, respectively.

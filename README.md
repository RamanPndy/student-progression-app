# student-progression-app
A simple app to capture student score card and academic progression
<br/>
Technology Used:<br>
Backend : Django<br />
Frontend: ReactJS, Material UI <br>
Database : Postgresql<br/>

Development Environmet Setup:
<br>
Clone the repo<br>
Install Python, NodeJS and PostgreSql<br>
Database: <br>
<ul>
<li>psql -d postgres</li>
<li>copy and paste <b>db.sql</b> file on the postgres shell</li>
<li>It will create spa user with password which will handle all the db specific operations</li>
</ul>
Above Steps will create Database <b>spadb</b> on your local machine<br>
Backend :<br>
<ul>
<li>cd back-end</li>
<li>pip install -r requirements.txt</li>
<li>python manage.py makemigrations</li>
<li>python manage.py migrate</li>
<li>python manage.py runserver 8080</li>
</ul>
Above steps will start Django server on localhost:8080<br>
Fronend : <br>
<ul>
<li>cd front-end</li>
<li>npm install</li>
<li>npm start</li>
</ul>
Above steps will start react js server on localhost:3000
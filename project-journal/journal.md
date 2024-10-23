# Development Journal - Meditation App

### Sunday, October 20, 2024

Day one! I spent my time planning the app, including user stories, routes, and an ERD. I am planning to focus a lot of my time on this really tightening up my CSS and JS animation skills. I want something really clean (user-facing and code-wise), and I want it to be beautiful and minimalist. There will be some small degree of full-stack because I want to always showcase that I am capable of doing it all. 

Next session plans:
  * Decide my stack
  * Set up folder structure
  * Connect to remote repo
  * Create Database & seed
  * Connect backend to frontend & manipulate the DB


### Monday, October 21, 2024
Going to give this an hour today and see how it comes along. Probably going to stick to the basic PERN stack, I want to work in what I know so I can really focus on putting out something beautiful and minimalist.

...

Yeah, decided to go with PERN. I got my dependencies installed and I have my Database set up. MAN am I tired of running into .env trouble with my DB though!!

So things I learned today, one, you MUST install node modules in the appropriate front/back end folder. In this case, I couldn't see my environment variables because I had installed dotenv as a root node module instead of server-side. Once I had that going, I was able to seed my test data with a few fixes here and there.

It took me the whole hour to install dependencies and seed the database, but at least that is out of the way. Going to commit and stop here for tonight, and pick up again later this week.

Next session plans:
  * Create API
  * Connect backend to frontend & manipulate the DB
  * Prepare basic React components structure
  * Research JS/React animations libraries

## Tuesday, October 22, 2024
I plan to work on the API routes tonight, I'll start with one and make sure I can fetch what I need, then go from there. I should review how to use curl properly while I'm at it since I didn't practice with it very much in school.

...

Connected to a remote repo before I forget again!

I put in placeholder routes, everything gives a 200 status at the moment until I work in database queries.

I might get interrupted soon for dinner, I am implementing user cookies and mocking a successful login attempt so I can use the user ID to filter sessions in the database. I will revisit the login route later to implement password hash checking.

Alright, I have cookie-session going, just automatically setting a cookie for User 1 at the moment the landing page loads until I revisit login later.

I need to revisit my first database query. For some reason the sessions/sittings table does not exist? Even though I can see it in psql? I'll have to check this out in the morning, we have to get to bed for the night. 

Next session plans:
* Figure out what's up with the tables (users exists, sessions do not?)
* Finish routes work
* Prepare basic React components structure
* Research JS/React animations libraries

## Wednesday, October 23, 2024

Starting with figuring out why my query doesn't see my table today. From what I could see yesterday it should be working, but this is code. Should is not a word to use! 

So I am getting the wrong database entirely, somehow. I am getting the DB for project Silvia when I should be getting table name "meditation". My environment variable is declared correctly, so why is this happening?

It's actually pulling in from my default user database. For now I am hardcoding in the meditation table to get the queries working, and I will circle back later today to understand/fix this issue. PG pool is pulling in all my other environment variables correctly so I don't know why this database name would not work. I will find out though!
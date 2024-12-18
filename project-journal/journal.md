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

Finished up the basics for the routes, with DB queries. I need to implement password hashing but I want to work on that alongside any frontend forms relating to login/registration. I may need to rework some of the queries later as well.

Created a starter React Component Tree, and created skeleton components so I have a foundation to start from. I think I need to find a better way to handle all the buttons, there's probably a way to hand state down to maybe a few buttons instead of needing a component for each individual type. I also want to refer back to Photolabs project for handling favorite state across the entire application.

Last thing on the to-do list for today is to research JS/React animation libraries. 

Top pick at the moment is [React Countdown Circle](https://www.npmjs.com/package/react-countdown-circle-timer)
  * I want to experiment with the stroke width and transitions to see if I will get what I want with breathe in/out animations

Follow up pick is to just do it myself, I can refer to this [Codepen](https://codepen.io/AliKlein/pen/LYpmJed) to get started and figure out the in/out animation from there.

I'm really happy with my progress on the app today. I think I have all the groundwork pretty much done. Now it's time to get building!

Next Session:
  * Display backend data on the frontend
  * Fix the db environment variables not pulling in correctly
  * Build the countdown component and make sure it works with different properties
  * Experiment with the countdown circle library to see if it encompasses all my needs
    * If yes, work on getting dynamic values in there and work in conjunction with the countdown
    * If not, work on authentication / forms instead

### Thursday, October 24, 2024
I don't have as much time as yesterday, so I'll likely only be addressing one or two items off the next session list today. Going to start with making an API call from my client-side.

Successfully pulled in records from my database to the frontend. 

#### Sample fetch request:
```React
const getRequest = async () => {
  try {
    // Attempt to GET a response
    const response = await fetch('http://localhost:8080/session', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    // If response fails, throw new Error
    if (!response.ok) {
      throw new Error('Failed to retrieve sessions');
    }
    // Convert successful response to json
    const responseData = await response.json();
    // Return the response json
    return responseData;

  } catch (error) {
    console.log("error!", error);
  }
}
```

Now I want to see what's up with my environment variables so I don't have to hardcode a database name...

So I needed to invoke .config() on dotenv. Cool, cool cool cool, all fixed now!! Weird because I didn't need to do this on past projects, but maybe there's been an update to the package that I didn't notice. I had a look at the package page, the package hasn't been updated since I last used it. I'll keep an eye out for anything that might mention what happened here so I can learn from it, but for now I will take it as a lesson to pay attention to what methods are, or are not, in use.

I have another 20 minutes left before I have to stop for the night, so I'll get started on the countdown component and build it in isolation.

Got the timer running smoothly. I want to prepend a 0 when hours, minutes, or seconds are less than 10 so it looks good. I probably need to move the actual milliseconds logic up to the Timer parent component so the current count can be shared between Countdown and Animation components. Really, the countdown component can probably be renamed clock and just handle the hours/minutes/seconds calculations.

Next Session:
* Move milliseconds logic to Timer parent component
* Refactor Countdown component to be Clock and refactor to be used for hours/minutes/seconds calculations
* Take in user input for countdown time and write helpers to convert user input to milliseconds
* Max timer at 8 hours

Defer to future sessions:
* Experiment with the countdown circle library to see if it encompasses all my needs
    * If yes, work on getting dynamic values in there and work in conjunction with the countdown
    * If not, work on authentication / forms instead

### Friday, October 25, 2024
I can sink an hour into this tonight, so immediately getting to work on the Timer parent component. I managed to move the logic easily enough and it fixed the issue where I was accounting for an asynchronous countdown state.

Doing the above already made the Countdown component work how I wanted it to, just have to change the component name to Clock since that makes more sense.

I forgot to put it into my next session list, but next I want to address pre-pending a 0 to hours/minutes/seconds if the amount is under 10. I was able to prepend it in place with a value check under 10.

Tested the Timer with durations obtained from the pre-sets in database, and so far it works great. Custom sessions will work the same way as presets so the time conversion logic will be built in when I get the custom functionality in.

Timer maxes out at 8 hours, this limit is even a bit high but if a sound library is implemented later someone might want it to play for an entire workday, or possibly to help them sleep.

Next Session:
* Begin working with the countdown circle library, implement a basic countdown to start
* Once that is working smoothly, see if I can play with options or css to expand and contract the stroke width, or else fill and empty the circle to represent breathing in and out.
* encompass the Countdown component inside the animation
* If I can't get the in-out animation that I want, I'll need to research how I can make this work on my own.

### Saturday, October 26, 2024

Having a look over the above Next Session notes, I want to change tack a little. One of the major points of doing this exercise is that I want to get better at CSS animations. So Instead of implementing any sort of library, I am going to work out the animation myself. So for today, I am going to focus entirely on what it takes to get the animations I want working. If I feel up to it (was a really really long day at work), I will move on to integrating what I learn with the countdown clock.

### Tuesday, October 29, 2024

I only had a few minutes here and there to work on this over the weekend, but I succeeded in making the animated border! I learned that animation-duration CSS property can inherit so I use props to set an animation-duration on a parent class for the animated border, and then inherit it in the CSS ::before pseudo class. At first it was skipping and ending early, but I realized it was because I was using the countdown time, so it was re-rendering every time a second ticked down. I will have a variable that will set to the initial duration that is passed as the borderTime and keep the timer countdown as is, which passes down through the animated border to the Clock component.

That said, I am done my original "Next Session" list so I am going to work on pulling in pre-set sessions and updating the timer based on which one is selected!

I got the presets working out fine, when one is selected the duration is passed to the timer and starts the countdown and animations. 

I was also able to make my keyframe for breathing in/out animations. Right now I just have them on a cycle with the same amount of time. I will make these more dynamic next time I work on this app.

Next Session:
* Breathe in/out takes in session durations
* Breath in/out starts at the same time as border animation and countdown clock
* Research calming colors and use them in the timer instead of the test colors
* Begin working on custom user sessions


### Wednesday, October 30, 2024

Alright, I have a solid couple of hours to focus today, looking forward to it! It's a VERY Summery Fall day, 22 degrees and sunny on October 30th! Windows are open, breezes are coming in, and the tunes are on. Kane is having a decent nap so the coding ambience is perfect.

Going to start with passing the in/out durations down as props and adjusting the animation-duration accordingly. First things first, I will change the duration state in App to be sessionSettings. This will allow me to pass an object containing the details that I need over to the timer. I am also going to build in a future setting for hold time, because I realize a lot of breathing exercises involve holding your breath for a time so I want it ready to plug in when I have that in the finalized presets. 

Got the animation timed and working well. Going to sort out what my colors should be now so I can move away from the garish clashing test colors.

Finished my animations and colors, the timer itself is looking and behaving great! Going to get my next session tasks together and call it a day, I want to enjoy my day off with my dog!

Next Session:
* Create custom session form
* Form makes POST request and updates DB records
* App state updates after POST request and immediately shows the new session
* Only the user that created the custom session should be able to view it
* All users should be able to view Preset sessions (admin account)
* Change Preset seeds to be real-world breath work timers & reset DB


### Thursday, October 31, 2024
Happy Halloween! Got woken up early today by my neighbor's smoke alarm, so why not get some code down right?

Going to work up the custom session form really quickly, and tackle the to-do list from there. 

Excellent, so I have the form gathering relevant data, and sending a POST request with an object to the server then updating the database.

Things not to forget:
- elements is the value I want in order to easily collect individual form fields (e.target.elements.NAME.value)
- JSON.stringify the body object in fetch request
- SINGLE QUOTES on strings in Postgres

I have some errands to run ahead of trick-or-treating tonight so not sure if I will get to work on this again today or not. Regardless, I am really happy with what I got done today and I will work on the rest of the above next session list next time I touch this. Hopefully tomorrow evening, but I have a very full weekend ahead of me between extra work hours and the holiday meeting.

Removing the App state update after POST because I realized that is not going to be needed with the final app behavior. Custom Sessions will fully re-render in a separate space than the form submission, so it doesn't need to visually update in real time. 

Next Session:
* Only the user that created the custom session should be able to view it
* All users should be able to view Preset sessions (admin account)
* Change Preset seeds to be real-world breath work timers & reset DB 

### Tuesday, November 5, 2024

It has been...a not great weekend. This isn't the place to go into details but suffice it to say there were some good reasons not to be on my computer for several days. 

That said, I am looking forward to diving into this today. I am going to pivot away from my next session plan and work out login/logout/register components because I also want to get cookies and hashed passwords sorted out.

<!-- TODO -->
Defer to future Session:
* Only the user that created the custom session should be able to view it
* All users should be able to view Preset sessions (admin account)
* Change Preset seeds to be real-world breath work timers & reset DB 

This session:
* Build Login and Logout button components
* Server-side implement hashed passwords
* Server-side create cookie for logged in user on login success
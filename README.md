# Apptivity

Apptivity is an application that aims to connect like-minded individuals and encourage social interaction through informal activities. Users can choose to swipe right and attend activities they are interested in or create their own activity to host in their local area.

## Table of Contents

- [What is this?](#what-is-this?)
- [What problem does it solve?](#what-problem-does-it-solve?)
- [What did we learn?](#what-did-we-learn?)
- [Tech Stack](#tech-stack)
- [Design and Development Process](#process)
- [API Endpoints](#api)
- [Database ERD](#erd)
- [Project Next Steps](#project-next-steps)
- [Project Status](#project-status)
- [Setup to Run Locally](#setup)
- [Original Project Brief](#original-project-brief)

## What is this? <a name="what-is-this?"></a>

This project was started for the School of Code National Bootcamp's Final Project. Our team of 4 had 4 weeks to design, build, deploy, and demo a full-stack app.

## What problem does it solve? <a name="what-problem-does-it-solve?"></a>

The pandemic has impacted relationships and social interaction globally and the current social and meet apps are costly and littered with corporate events.

## What did we learn during the project month? <a name="what-did-we-learn?"></a>

- ### Agile Methodology

  As our first large project working as a team, we wanted to learn and implement Agile methodology into our development process. Focusing on a good collaborated interaction development process between pair programming, task branching, code reviews, adaptable code development, continuous integration, and regular release cadences.

- ### Github Branching

  For every repository we created 2 branches, deployment branch, and development branch. Also we disigned a pattern program for every new feature, or new code that we implemented, since creating a new branch, making code reviews, mergin to the development branch, and finally to the main branch.

- ### Testing

  - #### Supertest
  - #### React-Jest-test
  - #### Cypress

## Tech Stack <a name="tech-stack"></a>

![Tech Stack Diagram](/readme_images/tech_stack.jpg)

Our tech stack is a React frontend deployed to Netlify.
And a Node/Express REST API deployed to Heroku with a Postgres database.
We chose this stack because we all had some foundational knowledge and skills, so we knew we could build a polished MVP.

Our learning focus was on testing and CI/CD. For the frontend we wrote tests using Cypress, Jest, and the React Testing Library. On the backend we wrote tests with Postman, Jest, and Supertest. We also made a CI/CD pipeline with GitHub Actions to automatically run integration tests and deploy the backend code to Heroku.

## Design and Development Process <a name="process"></a>

### Brainstorming

The team used a Miro Board to brainstorm initial app ideas. We used dot voting to narrow down our choices and Disney Ideation to define our MVP.

![Dot Voting](/readme_images/dot_voting.JPG)
![Disney Ideation](/readme_images/disney_ideation.JPG)

## API Endpoints <a name="api"></a>

## Database ERD <a name="erd"></a>

## Project Next Steps <a name="project-next-steps"></a>

### Short-term: Email notifications for users

- Activity sign-up / creation confirmations to attendees and hosts
- Upcoming activity reminders

### Medium-term: User profiles

- Personalised
- Option to view other users / be viewed
- Activity hosts can view attendees for their activity

### Long-term: Chat feature

- Hosts can make activity 'announcements' that get sent to all confirmed attendees
- Group chat for individual activities
- Safety and security measures

## Project Status <a name="project-status"></a>

Our frontend is deployed through Netlify here: https://apptivity-app.netlify.app/

## Setup to Run Locally <a name="setup"></a>

**To clone the repo:**

```
git clone git@github.com:SchoolOfCode/final-project-front-end-hack-to-the-future.git
cd final-project-front-end-hack-to-the-future
```

**Create an .env file**

Create an .env file in the root folder with the following environment variables:

```
REACT_APP_API_URL=<backend url>
REACT_APP_AUTH0_DOMAIN=<your Auth0 domain>
REACT_APP_AUTH0_CLIENT_ID=<your Auth0 client ID>
```

**To run the frontend:**

```
npm i
npm start
```

And go to http://localhost:3000

**To run tests:**

Go to the testing branch and install dependencies if needed

```
git checkout dev-cypress
npm i
```

To run Jest unit tests:

```
npm test
```

To run Cypress tests:

```
npm run cypress:open
```

## Original Project Brief <a name="original-project-brief"></a>

The following brief was set by the School of Code, to be completed in the final four weeks of our 16 week bootcamp:

"We would like your final project to be centred on a user or a problem, so that you can apply all of the principles we've visited on the course to engineer a solution in a user-driven methodology.

Our requirements are that you focus the idea and development on a real-world problem and put users at the centre of your project."

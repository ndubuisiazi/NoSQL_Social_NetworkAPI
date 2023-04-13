# NoSQL: Social Network API

A social network API built with MongoDB and Mongoose for handling large amounts of unstructured data.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Video](#walkthrough-video)
- [Getting Started](#getting-started)
- [API Routes](#api-routes)
- [Grading Requirements](#grading-requirements)
- [License](#license)
- [Questions](#questions)

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
- WHEN I enter the command to invoke the application
  - THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
  - THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
  - THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
  - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Walkthrough Video

[![Walkthrough Video](walkthrough_thumbnail.jpg)](https://link-to-walkthrough-video.com)

## Getting Started

To get started, follow the guidelines in the original assignment description for setting up your models and API routes.

## API Routes

- `/api/users`
  - GET all users
  - GET a single user by its _id and populated thought and friend data
  - POST a new user
  - PUT to update a user by its _id
  - DELETE to remove user by its _id
- `/api/users/:userId/friends/:friendId`
  - POST to add a new friend to a user's friend list
  - DELETE to remove a friend from a user's friend list
- `/api/thoughts`
  - GET to get all thoughts
  - GET to get a single thought by its _id
  - POST to create a new thought
  - PUT to update a thought by its _id
  - DELETE to remove a thought by its _id
- `/api/thoughts/:thoughtId/reactions`
  - POST to create a reaction stored in a single thought's reactions array field
  - DELETE to pull and remove a reaction by the reaction's reactionId value

## Grading Requirements

Please refer to the original assignment description for grading requirements, including deliverables, walkthrough video, technical acceptance criteria, and repository quality.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Questions

If you have any questions or need assistance, please feel free to reach out.

GitHub: [ndubuisiazi](https://github.com/ndubuisiazi)

Email: [ndubuisi.azi@gmail.com](mailto:ndubuisi.azi@gmail.com)

<!-- PROJECT TITLE -->
<br />
<div align="center">
<img src="https://avatars.githubusercontent.com/u/43497073?s=400&u=76b8ae73d9487edc8c80e987e9067832446ab6d1&v=4" alt="Marta Boteller" width="80" height="80">
<h2 align="center">React authentication with Mongodb</h3>
<p align="center"> Linkedin course by Shaun Wassell</p>
<br />
</div>
<br/>

## About the project

I've followed this LinkedIn <a href="https://www.linkedin.com/learning/react-authentication">course</a> offered by Shaun Wassell. It dives into the details behind user authentication in the context of React and how to incorporate user authentication into React applications. It explains how to give users the ability to reset their passwords, then describes the steps in setting up OAuth. He goes over several prebuilt authentication options, then concludes with some best practice recommendations.

I am on my way to achieve a fullstack overview, here's why -> :rocket: [go fullstack!](https://martaboteller.com/fullstack)

<br/>

<img style="display:block;margin-left:auto;margin-right:auto;padding-bottom:40px" src="./front-end/public/ui.png" width="300" alt="project's view">

<br/>

## Built with

Major frameworks/libraries used:

- Node.js/Express/Mongodb (server)
- React (frontend)
- Babel
- Axios
- Bcrypt
- Dotenv
- Googleapis
- Jsonwebtoken
- Uuid

<br/>

## MongoDB Connection

Show if mongodb is running

```
sudo lsof -iTCP -sTCP:LISTEN -n -P
```

To stop:

```
sudo kill <mongo_command_pid>
```

Connect with with config file:

```
mongod --config /usr/local/etc/mongod.conf --fork
```

or (the default data/db not accessible)

```
mongod --dbpath /usr/local/var/mongodb
```

As a background service:
This won't stop if terminal is closed

```
brew services start mongodb-community@6.0
```

In a new terminal:

```
mongosh
```

To list db:

```
show dbs
```

<br/> <br/>

## Author

I'm Marta Boteller, little more about me at my [website](https://martaboteller.com).

<br/> <br/>

## Acknowledgments

<p>I would like to thank <a href="https://www.linkedin.com/learning/react-authentication">Shaun Wassell </a> for his fantastic way of teaching!

<h1 align="center">
    Playlist Weather API
</h1>

<h4 align="center">
  Fake NodeJS Aplication created for InGaia's Back-end Test
</h4>
<div align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/croschel/playlist-weather-api">

  <a>
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/croschel/playlist-weather-api">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
</div>

<p align="center">
  <a href="#tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#external-services">External Services</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#back-end-with-docker-compose">Back-End with Docker Compose</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#back-end-with-yarn">Back-End with yarn</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

## Tecnologies

This project was made with this main tecnologies:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)
- [Express](https://expressjs.com)
- [Axios](https://github.com/axios/axios)
- [Helmet](https://helmetjs.github.io)

## External Services

- [OpenWeatherAPI](https://openweathermap.org/current)
- [SpotifyAPI](https://developer.spotify.com/documentation/web-api/)

## Project

This Project is a API to suggest a playlist of music depending on temperature of your city.

## Requirements

- [Node](https://nodejs.org/pt-br/download/)
- [Yarn](https://yarnpkg.com/cli/install)
- [Git](https://git-scm.com)
- [Docker](https://docs.docker.com)

**Clone the repository**

## Back-End with Docker Compose
- Enter on root path of project
- Run `docker build -t {name-of-project} .`;
- Run `docker-compose up`;

## Back-End with yarn
- Enter on root path of project;
- Create two databases (postgres and redis);using docker or another strategy;
- Run `yarn dev` and enjoy;

## How to use

- Type your city on first route param:
  - http://localhost:3333/search/your city
- Examples:
  - Campinas,
  - Sao Jose do Rio Preto
  - Nova York

## Routes

### Weather - The Main for users

- method: `get`, route: `/search/city name`;

### Requests - How many requests this app have been made?

- method: `get`, route: `/consult/requests`;

### City - How many requests this city have been made?

- method: `get`, route: `/consult/city/city name`;

## Deploy
- This Application is running on Digital Ocean so you can try with this url:
  - URL: `http://198.199.65.166/your city`

## How to contribute

- Do it a fork from this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Do commits of your Changes: `git commit -m 'feat: My new feature'`;
- Do it a push for your branch: `git push origin my-feature`.

After the merge of your pull request will have done, You can delete your branch.

## License

This project is under the MIT license. See the archive [LICENSE](LICENSE.md) for more details.

---

Made with ❤️ by Caique Roschel

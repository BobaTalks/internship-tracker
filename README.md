# Internship Tracker

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

- [Internship Tracker](#internship-tracker)
  - [:brain: Prerequisites](#brain-prerequisites)
  - [:seedling: Getting started](#seedling-getting-started)
    - [Local Database](#local-database)
  - [:handshake: Contributing](#handshake-contributing)
    - [Opening a Pull Request (PR)](#opening-a-pull-request-pr)
  - [Hosting](#hosting)
  - [Contributors](#contributors)

## :brain: Prerequisites

- [Node](https://nodejs.org/en/download)
  - It's recommended to use [nvm](https://github.com/nvm-sh/nvm) to manage multiple versions of node
- [Docker](https://docs.docker.com/get-docker/) - Used to spin up local database
- [Python](https://www.python.org/) - Used for backend server

## :seedling: Getting started

[Fork](https://github.com/BobaTalks/internship-tracker/fork) this repository

```shell
git clone git@github.com:<your_username>/internship-tracker.git
cd internship-tracker
```

Clone your repo and navigate into the project repository

```sh
cp .sample-env .env
```

Copy the sample env file to a `.env` and set any missing variables

- For frontend work, see [README](./client/README.md) in `client/`

- For backend work, see [README](./server/README.md) in `server/`

### Local Database

```shell
docker compose up
```

From project root, run the above command to spin up a local db within a docker container

## :handshake: Contributing

See frontend or backend README's for finding an issue.

### Opening a Pull Request (PR)

Read about [Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

When when the work on your fork is ready to submit, [open a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to request that your changes get merged into the main BobaTalks branch.

Code review will be performed by the mentors assigned to this project. If a day or two have passed without any review, please reach out to the project manager assigned to the project, or comment on the pull request to bump it.

## Hosting

This app's frontend is _currently_ hosted on netlify and can be viewed at https://bt-internship-tracker.netlify.app

Pull requests are built with [deploy previews](https://docs.netlify.com/site-deploys/deploy-previews/) so reviewers can check out your changes on a live site. Checks on the PR will automatically build this and a link will be provided via comments on your PR.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/a-camarillo"><img src="https://avatars.githubusercontent.com/u/58638902?v=4?s=100" width="100px;" alt="Anthony Camarillo"/><br /><sub><b>Anthony Camarillo</b></sub></a><br /><a href="https://github.com/BobaTalks/internship-tracker/commits?author=a-camarillo" title="Code">💻</a> <a href="https://github.com/BobaTalks/internship-tracker/commits?author=a-camarillo" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://brandoncastillo.biz/"><img src="https://avatars.githubusercontent.com/u/7208570?v=4?s=100" width="100px;" alt="Brandon C"/><br /><sub><b>Brandon C</b></sub></a><br /><a href="#design-GeekJump" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DarrenLee09"><img src="https://avatars.githubusercontent.com/u/89325703?v=4?s=100" width="100px;" alt="DarrenLee09"/><br /><sub><b>DarrenLee09</b></sub></a><br /><a href="#ideas-DarrenLee09" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/daviszung"><img src="https://avatars.githubusercontent.com/u/95515224?v=4?s=100" width="100px;" alt="Davis Zung"/><br /><sub><b>Davis Zung</b></sub></a><br /><a href="https://github.com/BobaTalks/internship-tracker/commits?author=daviszung" title="Code">💻</a> <a href="https://github.com/BobaTalks/internship-tracker/commits?author=daviszung" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/jenna-x-435a851b3/"><img src="https://avatars.githubusercontent.com/u/96795538?v=4?s=100" width="100px;" alt="Jenna Xiao"/><br /><sub><b>Jenna Xiao</b></sub></a><br /><a href="https://github.com/BobaTalks/internship-tracker/commits?author=JennaXiao3" title="Code">💻</a> <a href="https://github.com/BobaTalks/internship-tracker/commits?author=JennaXiao3" title="Documentation">📖</a> <a href="https://github.com/BobaTalks/internship-tracker/issues?q=author%3AJennaXiao3" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aqvilala"><img src="https://avatars.githubusercontent.com/u/84333848?v=4?s=100" width="100px;" alt="Jessica Chen"/><br /><sub><b>Jessica Chen</b></sub></a><br /><a href="https://github.com/BobaTalks/internship-tracker/commits?author=aqvilala" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kpxwinter"><img src="https://avatars.githubusercontent.com/u/118410579?v=4?s=100" width="100px;" alt="KP"/><br /><sub><b>KP</b></sub></a><br /><a href="#projectManagement-kpxwinter" title="Project Management">📆</a> <a href="#question-kpxwinter" title="Answering Questions">💬</a> <a href="#ideas-kpxwinter" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://lilyxmeng.github.io/"><img src="https://avatars.githubusercontent.com/u/76577669?v=4?s=100" width="100px;" alt="Lily Meng"/><br /><sub><b>Lily Meng</b></sub></a><br /><a href="https://github.com/BobaTalks/internship-tracker/commits?author=lilyxmeng" title="Code">💻</a> <a href="https://github.com/BobaTalks/internship-tracker/commits?author=lilyxmeng" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/razlze"><img src="https://avatars.githubusercontent.com/u/68450734?v=4?s=100" width="100px;" alt="Razi Syed"/><br /><sub><b>Razi Syed</b></sub></a><br /><a href="https://github.com/BobaTalks/internship-tracker/commits?author=razlze" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/victoriatran17"><img src="https://avatars.githubusercontent.com/u/118402811?v=4?s=100" width="100px;" alt="Victoria Tran"/><br /><sub><b>Victoria Tran</b></sub></a><br /><a href="#business-victoriatran17" title="Business development">💼</a> <a href="#question-victoriatran17" title="Answering Questions">💬</a> <a href="#ideas-victoriatran17" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/BobaTalks/internship-tracker/commits?author=victoriatran17" title="Documentation">📖</a> <a href="#projectManagement-victoriatran17" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leafie8"><img src="https://avatars.githubusercontent.com/u/112891624?v=4?s=100" width="100px;" alt="leafie8"/><br /><sub><b>leafie8</b></sub></a><br /><a href="https://github.com/BobaTalks/internship-tracker/commits?author=leafie8" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

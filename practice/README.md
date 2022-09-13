# PRACTICE REACTJS
## Overview

This document provides information about ReactJS practice. Build List of user manager website

### Technical

- HTML5/CSS3
- Javascript (ES6 syntax)
- ReactJS

### Information:

- Timeline:
    - Estimate time: 14 days.
    - Actual time: 19 days

- Editor: Visual Studio Code.
- Responsive: Not support responsive yet.

###  Plan
- Plan on github [project](https://github.com/users/ThaoLyyy/projects/2)
- [Estimation](https://docs.google.com/document/d/1-vAGM7GAmrTsaTKkDvfb64OcWUQphWblpl53Vl_I-R4/edit)

###  Targets

- Build an application for user manager using React.
- Apply knowledge of React/ React hooks.
- Use Context of React Hook to management state.
- Check re-render and using hook to avoid re-render.
- Apply styled-components.
- Apply Storybook.

###  Development environment:

- Node: v16.15.1
- react: v18.2.0
- npm: v8.14.0

###  Main app features:

- Users could create new user manager
- Users could update user
- Users could delete user by id
- Users could search the list of user by name

###  References
- [ReactJS](https://reactjs.org/docs/thinking-in-react.html)
- [Styled-Component](https://styled-components.com/docs)

###  Design

- [Figma](https://www.figma.com/file/HPmgynGqF3ioAsQGSPzVtB/Design-UI?node-id=0%3A1)

###  FOLDER STRUCTURE

```
|-- src/
    |-- actions/
        |-- index.js
    |-- assets/
        |-- fonts/
        |-- images/
        |-- styles/
            |-- index.css
            |-- reset.css
            |-- variables.css
    |-- components/
        |-- common/
            |-- Button/
                |-- Button.stories.js
                |-- index.jsx
                |-- style.js
            |-- Modal/
                |-- Modal.stories.js
                |-- index.jsx
                |-- style.js
            |-- ConfirmModal/
              |-- ConfirmModal.stories.js
              |-- index.jsx
              |-- style.js
        |-- Header/
            |-- Header.stories.js
            |-- index.jsx
            |-- style.js
        |-- Search/
            |-- Search.stories.js
            |-- index.jsx
            |-- style.js
        |-- SideBar/
            |-- SideBar.stories.js
            |-- index.jsx
            |-- style.js
        |-- UserItem/
            |-- index.jsx
            |-- style.js
    |-- constants/
        |-- helper.js
        |-- index.js
    |-- page/
        |-- Home/
            |-- index.jsx
            |-- style.js
    |-- reducers/
        |-- index.js
    |-- store/
        |-- Context.js
        |-- hooks.js
        |-- index.js
        |-- Provider.js
|-- App.js
|-- index.js
|-- .editorconfig
|-- .eslintignore
|-- .eslintrc
|-- .prettierrc
|-- .gitignore
|-- package.json
|-- README.md
```

###  Getting started:

- Step 1:clone repository
  - Main repo: git clone
    + HTTPS:
```bash
https://github.com/ThaoLyyy/react-training.git
```
- Step 2: Go to the folder react practice https://github.com/ThaoLyyy/react-training/tree/develop
```bash
git checkout develop
```
- Step 3:cd folder practice
```bash
cd practice
```
- step 4:
```bash
npm install
```
- step 5 : run project
```bash
npm start
```
- step 6: Open in browser:
```
http://localhost:3000
```
- step 7 : run storybook
```bash
npm run storybook
```
###  Author

- Thao Ly
- Email: thaolydn1805@gmail.com

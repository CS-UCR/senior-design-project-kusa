[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=462826&assignment_repo_type=GroupAssignmentRepo)
# CS178A-B-Template

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [Project Setup](#project-setup)
  - [Docker Setup](#docker-setup)
  - [Django Setup](#django-setup)
  - [React Setup](#react-setup)
  - [Running Tests](#running-tests)
- [Diagrams](#diagrams)
- [Dependencies](#dependencies)

## Overview
Problem: Gamers spend an unhealthy amount of time playing games, which introduces health risks and a loss of time that some people want to spend on productive/other tasks
Goal: Help gamers cut down their addiction or dependencies on video games and to allow them to engage in more productive tasks.
Our project: Web application
Gamers can connect their Steam accounts and moderate their activity

This project benefits gamers by
- better time management skills
- healthier sleep schedules
- creating social communities


## Team
- Michelle Chu
- Gabrielle O'Brien
- James Ooi
- Yuteng Wu

## Usage
Demo: https://youtu.be/3zdM_QOe3G0

### Landing Page
![landing](https://user-images.githubusercontent.com/65988711/158111493-f14adc58-a948-4b0d-8b38-bf9d68d44c6c.gif)
![landingD](https://user-images.githubusercontent.com/65988711/158111501-aeb99a28-4119-42cf-8018-aa1d74025cc0.gif)


### Login/Signin Page
![signUp](https://user-images.githubusercontent.com/65988711/158109876-9244f63d-8a7e-4ace-83fa-327f2576742b.gif)


### Home Page
![home](https://user-images.githubusercontent.com/65988711/158109943-dfbcc8d3-550f-4d31-8990-7a5b44666c29.gif)
![homeD](https://user-images.githubusercontent.com/65988711/158109964-a07d7b5f-f845-4b8a-a6dc-6069fb17fe44.gif)


### Profile Page
![profile](https://user-images.githubusercontent.com/65988711/158109979-8f085460-e61e-492c-8198-7412e66f104e.gif)
![profileD](https://user-images.githubusercontent.com/65988711/158109985-1d91fe2e-7571-4d94-a986-e49f9f299985.gif)


### Achievements Page
![achievements](https://user-images.githubusercontent.com/65988711/158110030-24c2f0e9-e2ef-407a-9b5d-447a02ff21fd.gif)
![achievementsD](https://user-images.githubusercontent.com/65988711/158110043-5ba7784b-c9a4-4cd1-a63d-158efbe154ac.gif)
#Earning Achievements

### Friend Page
![friendPage](https://user-images.githubusercontent.com/65988711/158110125-5731948f-e743-447c-89d0-6ea073a1690b.png)
![friendPageD](https://user-images.githubusercontent.com/65988711/158110131-9f258241-e6a0-4364-b0c9-9777631af4f9.png)
#Adding Friend

#Removing Friend
![removeFriend](https://user-images.githubusercontent.com/65988711/158111560-46384804-5f34-41a6-8cc1-b1cc6302580c.gif)


### Chat Page
![chatPage](https://user-images.githubusercontent.com/65988711/158110169-aa55ba76-1ceb-47fa-9a37-e011b80258af.gif)
![chatPageD](https://user-images.githubusercontent.com/65988711/158110173-c141fab2-79ad-4045-9c42-2caa1433e993.gif)


## Project Setup
1. Clone this repo 
  ```sh
   git clone https://github.com/CS-UCR/senior-design-project-kusa.git
  ``` 
### Docker Setup
  If you prefer to use Docker to run both the server and the client:
1. Ensure docker is installed on your device [from here](https://docs.docker.com/get-docker/) and is using Linux containers
2. cd into the project directory
  ```sh 
cd senior-design-project-kusa/
``` 
3. Build the docker containers
  
  ```docker-compose build```
  
4. Put your docker containers up
  
  ```docker-compose up -d```

  5. Navigate to the appropriate local ports, `localhost:8000` for the server and `localhost:3000` for the client
  
### Django Setup
1. cd into the project directory
```sh 
cd senior-design-project-kusa/
``` 
2. create a virtual environment
```sh
python -m venv env
```
3a. For Linux, activate the virtual environment<br />
```sh
source env/bin/activate
```
3b. For Linux, activate the virtual environment<br />
```sh
admin\env\Scripts\activate.bat
```
4. cd into the server folder
```sh
cd server/
```
5. install all the dependencies 
```sh
pip3 install -r requirements.txt
```
6. run the server
```sh
python manage.py runserver --noreload
```
7. Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
### React Setup  
1. cd into the React folder on a separate terminal
```sh 
cd client/ 
``` 
2. install required dependencies. Your terminal should tell you which dependencies you're missing. Simply install the missing ones.
```sh
npm install
```
3. activate the react server
```sh
npm start
```
4. Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
### Running Tests
Kusa's clients has a suite of tests that run on every PR in `main` or `develop`. These tests can also be ran locally.
1. cd into the `client` directory
```sh 
cd client/ 
``` 
2. install client packages with `npm install`
```sh 
npm install 
``` 
3. run tests with `npm test`
```sh 
npm test 
``` 
4. test results will be displayed in the console

## Diagrams

Sequence Diagram
![Kusa_Diagrams-Achievement Flow](https://user-images.githubusercontent.com/43893085/144947522-3b57866e-83e8-4c16-a90e-d657487cc464.png)
![Kusa_Diagrams-Third Party Info drawio(1)](https://user-images.githubusercontent.com/43893085/144947537-8a0e2921-58a6-4c4f-a11f-96a84ab7ecef.png)
![Kusa_Diagrams-Friends List drawio(1)](https://user-images.githubusercontent.com/43893085/144947560-bfb4fa8f-22c5-4560-83ec-7aca98ee9efb.png)
![Kusa_Diagrams-Garden Dataflow](https://user-images.githubusercontent.com/43893085/144947568-9b7f3f41-4113-4b78-8052-f3db629713d1.png)
![Kusa_Diagrams-Login and Signup](https://user-images.githubusercontent.com/43893085/144947572-f984573b-6d60-40d5-8bac-af608c2786e2.png)

Frontend Structure
![Kusa_Diagrams-Overall User Flow](https://user-images.githubusercontent.com/43893085/144947346-246081d4-d58f-4093-81e9-bafa65fb37e4.png)

Overall System Diagram
![image](https://user-images.githubusercontent.com/65988711/136714242-98f5c0c7-c8e7-41b5-a27d-7a39e1372cd7.png)


## Dependencies
Install Node Package Manager (npm). [Helpful Documentation](https://www.npmjs.com/get-npm)

### Client Dependencies
  - react-tsparticles
  - react-router-dom
  - animate.css
  - mui
  - react-transition-group
  - jest
  - enzyme
  - tabler
  - nivo
  - axios
  - sass
  - timeago.js


### Server Dependencies
  - environ
  - requests
  - djongo
  - sqlparse
  - django-apscheduler
  - django-cors-headers
  - djangorestframework
  - social-auth-app-django

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=462826&assignment_repo_type=GroupAssignmentRepo)
# CS178A-B-Template

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [Project Setup](#project-setup)
  - [Docker Setup](#docker-setup)
  - [React Setup](#react-setup)
  - [Django Setup](#django-setup)
  - [React Setup](#react-setup)
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
![lightLanding](https://user-images.githubusercontent.com/65988711/144959881-ad95e133-61ee-4fa6-a362-74d9d8d3be9e.gif)
![darkLanding](https://user-images.githubusercontent.com/65988711/144959885-81844557-6b29-4d1b-aaba-13427edf3f44.gif)

### Login/Signin Page
![lightLoginSignup](https://user-images.githubusercontent.com/65988711/144959935-29c22e92-8ba9-46f7-bd18-0cd7f4dc3718.gif)
807-a524-fc3f31c6ff38.gif)
![darkLoginSignup](https://user-images.githubusercontent.com/65988711/144959931-e5d6fd45-03a8-4c48-b4d1-8c9101841a00.gif)

### Home Page
![lightHome](https://user-images.githubusercontent.com/65988711/144959906-c98d920e-c136-4774-af01-d5bc6b7f29f7.png)
![darkHome](https://user-images.githubusercontent.com/65988711/144959907-44acf42d-25f6-43c1-b10b-b00ee69a4604.png)

### Profile Page
![lightProfile](https://user-images.githubusercontent.com/65988711/144959918-bbfc8b6e-c079-43e5-ab86-70a577e68774.gif)
![darkProfile](https://user-images.githubusercontent.com/65988711/144959925-9e7b0c82-0598-4

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
python manage.py runserver
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


### Server Dependencies
  - environ
  - requests
  - djongo
  - sqlparse

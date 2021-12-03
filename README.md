[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=462826&assignment_repo_type=GroupAssignmentRepo)
# CS178A-B-Template

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [Project Setup](#project-setup)
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
Demo: <Link to youtube video>

<Screenshot of application>

## Project Setup
1. Clone this repo 
  ```sh
   git clone https://github.com/CS-UCR/senior-design-project-kusa.git
  ``` 
  
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

Frontend Structure


Overall System Diagram
![image](https://user-images.githubusercontent.com/65988711/136714242-98f5c0c7-c8e7-41b5-a27d-7a39e1372cd7.png)


## Dependencies
Install Node Package Manager (npm). [Helpful Documentation](https://www.npmjs.com/get-npm)


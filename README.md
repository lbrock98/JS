# Filter Files Project
by Lucy Brock

This project provides a template for feeding in data and it by date and location. 

## What this application does:
Includes three panels for a header, filters, and content. Within the filters panel, I have two date selectors so as to give a date range to filter data. I have three buttons that filter the searchbar by geographic type, and a searchbar that receives geographic inputs from three tables in postgresql. 

## What technologies it uses:
As is standard, I used javascript and html to create my frontend and backend nodes, and CSS for styling. I used react, a javascript library, to create the date filters and implement effect hooks, which allow you to perform side functions without creating extra classes (e.g. this helped to filter the options in the searchbar when a button is clicked).

## Challenges and future implementations:
I am still having difficulties with styling depending on screen-size. Ultimately this app is meant to accept data (originally thought to be files, but this could be anything), and display the data according to the implemented filters. Another idea is to create a user login page and allow users to star and/or upvote certain data. 

## Installation
For a description of react, see the README.md in filterFiles. Otherwise run the server files as your backend, and filterFiles as your frontend node from your terminal. 

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/#)

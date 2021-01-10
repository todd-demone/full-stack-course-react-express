## Part 0b - [Fundamentals of Web Apps](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)

### traditional web apps
- fetch html page
- fetch image specified in html doc
- server can dynamically formed the page using application code and data from DB
- server returns html page

notes page
fetch html
fetch js script
script makes GET request to server at /data.json
script forms a list using the json data

### Event handler
* browser executes js code,
* when json data is fetched, browser executes an event handler (see below)

create xhhtp object to make request to server for json data
when object's state changes (readyState == 4, aka operation is complete) the browser (not the app) calls a function (callback function) defined in event handler
callback function creates an unordered list in html <ul> and appends it to notes

### DOM
* an API
* allows mods of web page elements

### CSS
* rules
* selectors

### Forms and HTTP POST
* submit form
* 5 HTTP requests - POST, html, css, js, json
* POST Request to add `new_note`
* 302 Redirect
* server code creates new note object pushes object to `notes` array on server

### SPA
* fetch one page only (no reloading of pages or fetching different pages)
* contents of that one page are manipulated by JS executed in browser
* on submit of new note, there is no redirect to reload notes page
* on submit of new note, only one HTTP reqest rather than 5 - new_note_spa
* POST request, but form has no action or method attributes
* browser sends JSON as request payload
* browser event handler creates a new note, adds it to notes list with code `notes.push(note)`, re-renders page and then sends note to server









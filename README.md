# Rennes Food Project

#### An API for food project with one of my mate :-)

This project is a good way for me to get my foot back on the ladder with NodeJS after few month without Javascript.
If you watch inside the repository, You'll notice that actually this has been realized with Typescript which is better in my opinion.  

Code Folder's architecture (shamefully stolen but.. classic) 
```
src
├── app.js		app entry point
├── /api		controller layer: api routes
├── /config		config settings, env variables
├── /services	        service layer: business logic
├── /models		data access layer: database models
├── /scripts		miscellaneous NPM scripts
├── /subscribers	async event handlers
└── /test               test suites
```

_NB: **conf_to_rename_env** file must be renamed to **conf.env**_ 

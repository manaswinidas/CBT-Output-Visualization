# CBT-Output-Visualization
 ## Run this project
 To run this project, clone this repository to your system. In that repository, run `npm install` or `yarn install`. All the dependencies from package.json will be installed. 
 Type `webpack-dev-server --content-base build/` to load the project in your web browser. Goto `localhost:8081` to view the visualization.
 ## Procedure
 I have visualized the sample `fio_json.json` output file that was provided to me. I have parsed the JSON file to get the labels and series from the keys and values of percentile
 within clat which is under write job. I have used ** Chartist.js ** CDN to visualize the data. The values of labels and series is passed to Chartist.Bar with suitable height and width to get
 the visualization. The JavaScript code is present in app.js file.
 
 I installed `webpack-dev-server` by typing the following command:
 
 `yarn install webpack -g` followed by `yarn install webpack-dev-server -g`. 
 
 For `npm` users, `yarn` is to be replaced with `npm`.  

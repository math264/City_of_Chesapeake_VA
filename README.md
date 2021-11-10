# City_of_Chesapeake_VA
Mapping Chesapeake, VA neighboorhoods and schools with associated poverty estimates from 2016-17.

# Metadata and Workflow
## Npm Initialized Project
+ verify node and npm are installed
    + "node -v" and "npm -v"
+ run command "npm init"
+ populate keys in new package.json
+ package.json documents any dependencies used in data processing

## RawData and Pre-processed
Source: https://catalog.data.gov/dataset?res_format=CSV&ext_location=&_res_format_limit=0&ext_prev_extent=-264.375%2C-79.93591824625464%2C63.28125%2C80.4157074446218&q=chesapeake+va&sort=views_recent+desc&ext_bbox=

+ hoods.geojson (renamed from original Neighborhoods.geojson)
+ Poverty-estimates.csv (original)
+ poverty-estimates.geojson
+ poverty-estimatesF.geojson

## Final Data
+ hoods.geojson (had IPR_SE data -> poverty estimates 0-999)
+ emrldcolors.json

*hoods.geojson was brought in as a geojson since the csv data did not have any lat/long values (only shapeArea etc). The two geojsons were a result of running a csv2geojson script. See below.

## Node Scripts
*Note: most scripts use JS ES6. Include "type": "module" beneath dependencies within package.json*

**fs-sync.js**
Used to load, parse, and write new color values from the parent cartocolors in data/colors/

**csv2geojson & -fil.js**
Used to convert the property estimates at schools to a geojson, the latter converting to geojson and filtering any unwanted attributes. The csv2geojson-fil.js converts the csv to geojson & filters attributes. I included the original cvs2geojson.js as well just for documentation. 

**Binding Data**
There is no script for binding the data. I had to deter from node packages for a bit and filter the estimates by "select by location" in QGIS 3.16.1 Hannover. The resultant data was hoods.geojson. I realized too late that the two datasets (neighborhoods and poverty estimates) did not share a common attribute to join/bind the data.


## Web Map Issues and Reflection
At this point I have been unable to succesfully create a web map from the final data. I keep getting server 404 errors saying that the d3.json(data/hoods.geojson) will not load and I cannot figure out why. There are a number of things further down within the html that are not what they need to be, but without d3 loading the hoods.geojson its difficult to work ahead. My goal right now is to document everything I can and accept this as a loss, given the timeframe and deadline. Despite lacking any data visualization, I understand the data processes and what needs to happen for this project to have rendered map. The exercise map was a success and my goal was to model the html after it, minus a few items (e.g. - L.markerCluster). I belive all requirements have been met besides the web map display.
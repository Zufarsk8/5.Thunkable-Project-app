To run:
Npm Install
yarn start

------------------------------------------------------------------------------------------------------------

This project was done for a Thunkable Techincal interview.

Project link: http://thunkable-app.s3-website-us-west-1.amazonaws.com/

Achieved all the main features
+Add new project
+Rename project
+Delete project

Additional features Achieved:
+Responsive and mobile friendly
+Drag and drop project
+Drag and drop with data persistent
+Some assumed functionality (Clicking on the edit button again would return the edit to the default state.)


3rd Library packages used:
+react-beautiful-dnd: Drag and drop
+styled-components : Quick styling
+antd : Reusable UI components
+UUID: id generator to generate unique id.

This project was built into a bundle to facilitate integration to larger projects. State management used was context api as I wanted to keep a contained project state with the main bundle state being in the Project.js file. This structure will facilitate integration to a larger project global state using redux/flux.

Folder Structure
-src  
  --assets
  --bundles
     ---Screens
     ---project
          ----components
              ------ProjectHeader
                  -------AddButton
                  -------ProjectHeader.js
              ------ProjectList
                  -------ProjectBox
                          --------(All of project box reusable components)
                  -------ProjectList.js   
          ----ProjectContext.js  
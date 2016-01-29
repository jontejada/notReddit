#[notReddit](jontejada.com/notReddit) built with angular

##interesting stuff
- got rid of text highlighting with css rule `::selection { background: transparent; }` found [here](http://stackoverflow.com/questions/826782/css-rule-to-disable-text-selection-highlighting)
- made a custom directive to pass the image url into css background-image property, found [here](http://stackoverflow.com/questions/13781685/angularjs-ng-src-equivalent-for-background-imageurl)
- used `ng-mouseover` on parent element to arrows for highlighting(color change + grow + shadow change) when mouse is nearby 

##to do:
- fix image input persistence bug
	- related [stackoverflow](http://stackoverflow.com/questions/26015010/angularjs-form-reset-error)
	- [Angular docs on form binding](https://docs.angularjs.org/guide/<forms id="binding-to-form-and-control-states"></forms>)
- set form to be untouched when a post is submitted
- build animation with ngAnimate (one animation complete -- new post)
- DRY out four highlighting functions --> to just one?
- add routing?
- add persistence with [Angular Local Storage](http://gregpike.net/demos/angular-local-storage/demo/demo.html#)
- clean up syling of comments tab and new comment input fields / submit button
- CSS animations to suggest clickable elements (for new post & show comments)

##other notes
- `ng-app="redditApp"` attr in html element
- non-minified local copy of angular  1.5.0-rc.1 (and angular-animate) from [here](https://code.angularjs.org/1.5.0-rc.1/)
- moment.js for date formatting
- font-awesome for icons
- google fonts for Open Sans font
- styling with CSS3, using border-box and flexbox (no bootstrap)

####started 2016-01-25
**Steps in running the source code:**

1. git clone https://github.com/MichMich/MagicMirror.git
2. cd MagicMirror
3. npm install
4. copy and paste the 'MMM-ImageSlideshow' in the modules folder
5. copy and paste actual.js inside "MMM-ImageSlideshow"
6. cd.. back to MagicMirror
7. npm start

**Dependencies :** 
1. ‘request’ - a node function that calls an API of a server.
2. Graphicsmagick (gm) and Ghostscript (gs) - internal dependencies for ‘p2f2pic’ allows us to convert pdf into an image.
3. ‘pdf2pic’ - node library that allows us to convert a pdf into an img, jpeg, or png file.
5. ‘MMM-ImageSlideshow’ - a built in module that presents images from a local folder in a ‘slideshow’ manner.

![Alt text](interface.png?raw=true "Smart Mirror Interface")

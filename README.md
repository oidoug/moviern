# Moviern

A simple React-Native example App that uses [TheMovieDB.org] API to show some new and trending movies in a modern, Netflix style UI.

## Things that could be improved:

* We should be able to change the city that we are querying for, but there isn't a design ready for that.
* It was used a FlatList with "fake" sections so we could have a grid style without using a more complex grid component (SectionList doesn't offer column styled layout). A good option would be https://github.com/saleel/react-native-super-grid
* Use the movie Backdrop image as the main image background in GridScreen. Some layer of opacity or a gradient should be added on top (maybe the one from the design spec).
* Rating (starts) still missing.
* Hours of sessions still missing.

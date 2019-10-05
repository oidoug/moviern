# Moviern

A simple React-Native example App that uses [TheMovieDB.org] API to show some new and trending movies in a modern, Netflix style UI.

## Things that could be improved:

* We should be able to change the city that we are querying for, but there isn't a design ready for that.
* It was used a FlatList with "fake" sections so we could have a grid style without using a more complex grid component (SectionList doesn't offer column styled layout). A good option would be https://github.com/saleel/react-native-super-grid
* Use the movie Backdrop image as the main image background in GridScreen. Some layer of opacity or a gradient should be added on top (maybe the one from the design spec).
* Rating (starts) still missing.
* Hours of sessions still missing.

## Screenshots

### iOS

<img src="https://user-images.githubusercontent.com/129619/66257899-0bff9580-e775-11e9-9894-abe6d7497c15.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/129619/66257900-0bff9580-e775-11e9-9cb7-18c685ebd485.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/129619/66257901-0bff9580-e775-11e9-9a9d-56bfd73d36bd.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/129619/66257903-0c982c00-e775-11e9-9b02-0755944a33e3.png" width="45%"></img> 

### Android

<img src="https://user-images.githubusercontent.com/129619/66257895-0b66ff00-e775-11e9-8e22-ecbfb0b5aa31.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/129619/66257896-0b66ff00-e775-11e9-9ea1-6b037bb2c7e2.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/129619/66257897-0bff9580-e775-11e9-835c-a648bd3fa72d.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/129619/66257898-0bff9580-e775-11e9-840a-e40883e99cff.png" width="45%"></img> 

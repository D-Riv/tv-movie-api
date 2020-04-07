# tv-movie-api

# Description
Checkout a list of all your favorite shows from around the world. Includes shows from multiple networks with an extensive list of details to make sure your next pick is worth binge watching!

### Built With
- JavaScript
- Node.JS
- MongoDB/Mongoose
- Express

## Installation of Dependencies
- Mongoose
- Express
- Node 
- Body-Parser
- Cors
- Node-Fetch
  
### Deployment

To deploy the api utilize the link below.
[Use this link to my project!](https://tv-movie-api.herokuapp.com/)

## Implementation of CRUD
Utilized controllers and routes to use CRUD on both models. Starting with get to find all movies and shows, then bringing the ability to find rating, name, and release date. Along with having the ability to update and delete to the list as required.

## Endpoints

Get the entire list of either tv shows or movies

```
GET /
```

Get a list of all shows or movies with a particular rating

```
GET /rating/:rating
```

Get a list of all shows or movies with a specific release date

```
GET /releaseDate/:releaseDate
```

Get a details on one of your favorite shows or movies

```
GET /name/:name
```

Submit a show or movie that you dont see in the list

```
POST /
```
Update details on a movie or tv show

```
PUT /:name
```
Delete a movie or show from the list

```
DELETE /:name
```
**Methods** : `GET, POST, PUT, DELETE`

**Auth required** : No

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Endpoint example**

```
GET https://tv-movie-api.herokuapp.com/movie/name/Jumanji: The Next Level
```

For a request to pull a movie with the name of Jumanji: The Next Level.

```json

        {
        "_id": "5e691541681d7a0004633e70",
        "name": "Jumanji: The Next Level",
        "description": "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they             expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous           game.",
        "rating": 6.8,
        "releaseDate": "2019-12-04",
        "image": "https://image.tmdb.org/t/p/original/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg",
        "media": "movie",
        "__v": 0
    }
```

### Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to me.

### Versioning

We use git/github for version control.For other versions check the repository. :)

### Authors

Dennis A. Rivera

### License

This project is licensed under the MIT License - see the LICENSE.md file for details

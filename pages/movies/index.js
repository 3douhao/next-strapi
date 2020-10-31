import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: '30vw',
      backgroundColor: 'darkseagreen',
      marginLeft: '150px',
      marginTop: '50px'
    },
    lii: {
      fontSize: '30px'
    },
    btn: {
      backgroundColor: 'dodgerblue',
      margin: '10px'
    }
  }
})

const MoviesList = ({ movies, page, numberOfAllMovies }) => {
  const classes = useStyles()
  const router = useRouter()
  const lastPage = Math.ceil(numberOfAllMovies / 3)
  return (
    <div className={classes.root}>
      <List>
        {movies.map(movie => {
          return (
            <ListItem key={movie.id} className={classes.lii}>
              {movie.title}
            </ListItem>
          )
        })}
      </List>
      <Button
        onClick={() => router.push(`/movies?page=${page - 1}`)}
        className={classes.btn}
        variant='outlined'
        disabled={page <= 1}
      >
        Previous
      </Button>
      <Button
        variant='outlined'
        className={classes.button}
        onClick={() => router.push(`/movies?page=${page + 1}`)}
        disabled={page >= lastPage}
      >
        Next
      </Button>
    </div>
  )
}

export default MoviesList

export async function getServerSideProps ({ query: { page = 1 } }) {
  const { BASE_URL } = process.env
  const numberOfAllMovies = await axios.get(`${BASE_URL}/movies/count`)
  const start = +page === 1 ? 0 : (+page - 1) * 3
  const { data } = await axios.get(
    `${BASE_URL}/movies?_limit=3&_start=${start}`
  )
  return {
    props: {
      movies: data,
      page: +page,
      numberOfAllMovies: numberOfAllMovies.data
    }
  }
}

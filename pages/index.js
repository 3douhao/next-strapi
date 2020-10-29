import {
  cardAction,
  typography,
  movieTitle,
  button,
  div,
  container,
  image,
  card,
  cardContent
} from '../styles/Home.module.css'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

export default function Home ({ movies }) {
  const { BASE_URL } = process.env
  return (
    <div className={container}>
      {movies.map(movie => {
        return (
          <Card key={movie.id} className={card}>
            <CardMedia className={image} image={BASE_URL + movie.poster.url} />

            <CardContent className={cardContent}>
              <Typography
                variant='h6'
                color='primary'
                gutterBottom
                className={movieTitle}
              >
                {movie.title}
              </Typography>

              <Typography gutterBottom className={typography} component='p'>
                {movie.description}
              </Typography>
            </CardContent>
            <CardActions className={cardAction}>
              <Button className={button} color='secondary'>
                More Details
              </Button>
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}
export async function getServerSideProps () {
  const { BASE_URL } = process.env
  const moviesQueryPath = `${BASE_URL}/movies`
  const { data } = await axios.get(moviesQueryPath)
  return {
    props: {
      movies: data
    }
  }
}

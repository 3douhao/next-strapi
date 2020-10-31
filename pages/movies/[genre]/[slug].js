import React from 'react'
import axios from 'axios'
// import getConfig from 'next/config'
import {
  Card,
  Typography,
  CardContent,
  CardMedia
} from '@material-ui/core'
import {
  card,
  cardMedia
} from '../../../styles/MovieDetail.module.css'

// const { publicRuntimeConfig } = getConfig()
const { BASE_URL } = process.env

const Movie = ({ movie }) => {
  return (
    <Card className={card}>
      <CardContent>
        <CardMedia
          className={cardMedia}
          gutterBottom
          image={BASE_URL + movie.poster.url}
        />
        <Typography variant='h3' gutterBottom>
          {movie.title}
        </Typography>
        <Typography gutterBottom variant='h6'>
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Movie
export async function getServerSideProps (context) {
  console.log(context)
  const { slug } = context.query
  const { data } = await axios.get(
    `${BASE_URL}/movies?slug=${slug}`
  )
  return {
    props: {
      movie: data[0]
    }
  }
}

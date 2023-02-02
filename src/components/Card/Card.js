import './Card.css'

const Card = (poster_path, key) => {
    console.log(key)
    return(
        <div>
            <img src={poster_path.poster} key={key}></img>
        </div>
    )
}

export default Card
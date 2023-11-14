import style from './Card.module.css'

const Card = ({img}) => {
  return (
    <div>
        <div className={style.card}>
            <img src={img} alt="toca o som." width={'270'} />
            <p>Desc da música</p>
        </div>
    </div>
  )
}

export default Card
import style from './Card.module.css'

const Card = ({children, img}) => {
  return (
    <div>
        <div className={style.card}>
            <img src={img} alt="toca o som." width={'270'} />
            <p>{children}</p>
        </div>
    </div>
  )
}

export default Card
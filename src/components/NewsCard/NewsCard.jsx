const NewsCard = (props) => {
    const {caption, description, date} = props

    return (
        <div>
            <p>{caption}</p>
            <p>{description}</p>
            <p>{date}</p>
        </div>
    )
}

export {NewsCard}
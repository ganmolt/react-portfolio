export const Work = ({
  url,
  encodedImg,
  name,
  description,
  tech,
}) => {
  return ( 
    <>
      <div className="img-area">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={`data:image/jpeg;base64,${encodedImg}`} alt="encoded" />
        </a>
      </div>
      <h4 className="my-3">{name}</h4>
      <p className="text-muted">{description}</p>
      <p className="text-muted">使用技術：{tech}</p>
    </>
  )
}

import { DownloadPDFButton } from './DownloadPDFButton';
import { PIECE_LIST as pieces } from 'consts/pieces'
export const Pieces = () => {
  return (
    <div className="container text-center">
      <h1>作品一覧</h1>
      <p>作品一覧です</p>

      <h1>Pieces</h1>
      {pieces.map((piece) => (
        <div key={piece.id}>
          <h2>{piece.title}</h2>
          <p>{piece.description}</p>
          <h3>PDF</h3>
          <ul>
            {piece.scores.map((score) => (
              <li key={score.id}>
                {score.name}
                <DownloadPDFButton pdfPath={score.pdfPath} />
              </li>
              
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

import { DownloadPDFButton } from './DownloadPDFButton';

export const Piece = ({piece}) => {
  return (
    <>
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
    </>
  );
}

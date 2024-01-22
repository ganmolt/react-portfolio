import { PIECE_LIST as pieces } from 'consts/pieces'
import { Piece } from './piece';
export const Pieces = () => {
  return (
    <div className="container text-center">
      <h1>作品一覧</h1>
      <p>作品一覧です</p>

      <h1>Pieces</h1>
      {pieces.map((piece) => (
        <div key={piece.id}>
          <Piece piece={piece} />
        </div>
      ))}
    </div>
  )
}

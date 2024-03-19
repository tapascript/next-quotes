
const QuoteCard = ({quote}) => {
  return (
    <div className="card">
      <p className="text-xl text-center m-auto leading-normal">{quote.text}</p>
    </div>
  )
}

export default QuoteCard
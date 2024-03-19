
const QuoteCard = ({quote}) => {
  return (
    <div className="m-4 border border-gray-200 p-1 rounded-sm flex flex-col w-64 h-auto bg-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
      <p className="text-xl mb-auto">{quote.text}</p>
      <p className="text-sm text-right mt-2">
        By {quote.author}
      </p>
    </div>
  )
}

export default QuoteCard
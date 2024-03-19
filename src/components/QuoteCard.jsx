
const QuoteCard = ({quote}) => {
  return (
    <div className="dark:bg-slate-800 m-4 border dark:border-teal-300 p-1 rounded-lg shadow-lg shadow-teal-500 flex flex-col w-64 h-40 bg-gray-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <p className="text-xl text-center m-auto leading-normal text-gray-500 dark:text-slate-400">{quote.text}</p>
    </div>
  )
}

export default QuoteCard
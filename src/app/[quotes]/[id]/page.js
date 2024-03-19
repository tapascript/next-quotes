
import { getQuote } from "@/db/quotes";

const QuotePage = ({params: {id}}) => {
  const quote = getQuote(id);
  return (
    <div className="m-4 flex flex-col justify-center items-center h-screen">
      <h2 className="text-xl my-2">Quote by <strong>{quote.author}</strong></h2>
       <div className="my-2 p-2 border-slate-400 border rounded text-3xl text-center bg-slate-700 text-white">
        {quote.text}
       </div>
    </div>
  )
}

export default QuotePage;
import { getQuote } from "@/db/quotes";
import Share from "@/components/Share";
import Copy from "@/components/Copy";

const QuoteDetails = ({id}) => {
  const quote = getQuote(id);
  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <h2 className="text-xl my-2">
        Quote by <strong>{quote.author}</strong>
      </h2>
      <div className="flex items-center">
        <div className="my-2 mx-2 p-2 border-slate-400 border rounded text-3xl text-center bg-teal-100 text-zinc-700">
          {quote.text}
        </div>
        <Copy className="mx-2" text={quote.text} />
      </div>
      <Share />
    </div>
  )
}

export default QuoteDetails
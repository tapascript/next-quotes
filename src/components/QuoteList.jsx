import QuoteCard from "./QuoteCard";
import Link from "next/link";

const QuoteList = ({ quotes }) => {
  return (
    <div className="m-2 flex flex-wrap justify-center overflow-auto">
      {quotes.map((quote) => (
        <Link key={quote.id} href={`/quotes/${quote.id}`}>
          <QuoteCard quote={quote} />
        </Link>
      ))}
    </div>
  );
};

export default QuoteList;

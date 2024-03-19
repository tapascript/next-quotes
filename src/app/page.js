import { getAllQuotes } from "@/db/quotes";
import QuoteList from "@/components/QuoteList";

export default function Home() {
  const quotes = getAllQuotes();

  return (
    <QuoteList quotes={quotes} />
  );
}

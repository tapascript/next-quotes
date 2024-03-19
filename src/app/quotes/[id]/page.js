import QuoteDetails from "@/components/QuoteDetails";

const QuotePage = ({ params: { id } }) => {
  
  return (
    <div className="m-auto">
      <QuoteDetails id={id} />
    </div>
  );
};

export default QuotePage;

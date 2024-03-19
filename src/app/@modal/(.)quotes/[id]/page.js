import Modal from "@/components/Modal";
import QuoteDetails from "@/components/QuoteDetails";

const QuoteModal = ({ params: { id } }) => {
  return (
    <Modal>
      <QuoteDetails id={id} />
    </Modal>
  );
};

export default QuoteModal;

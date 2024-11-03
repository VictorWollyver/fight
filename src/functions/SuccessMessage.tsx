const SuccessMessage = ({ successMessage }: { successMessage: string | null }) => {
	if (!successMessage) return null;
	return <p className="text-lime-600 mt-2 font-medium">{successMessage}</p>;
};

export default SuccessMessage;

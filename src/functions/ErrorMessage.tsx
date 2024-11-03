const ErrorMessage = ({ errorMessage }: { errorMessage: string | null }) => {
	if (!errorMessage) return null;
	return <p className="text-red-600 mt-2 font-medium">{errorMessage}</p>;
};

export default ErrorMessage;

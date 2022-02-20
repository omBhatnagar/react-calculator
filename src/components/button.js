import "./button.css";

const button = ({ label, handleClick, className }) => {
	return (
		<input
			type='button'
			value={label}
			onClick={handleClick}
			className={`btn ${className}`}
		/>
	);
};

export default button;

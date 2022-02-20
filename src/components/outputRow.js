const outputRow = ({ value }) => {
	return (
		<div className='output-row'>
			<input type='text' value={value} readOnly />
		</div>
	);
};

export default outputRow;

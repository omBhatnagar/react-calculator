import OutputRow from "./outputRow";

const output = ({ userNums, answer }) => {
	return (
		<div className='screen'>
			<OutputRow value={userNums} />
			<OutputRow value={answer} />
		</div>
	);
};

export default output;

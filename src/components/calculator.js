import { useState, useEffect } from "react";
import Output from "./output";
import Button from "./button";
import "./calculator.css";

const Calculator = () => {
	// init states
	const [userNums, setUserNums] = useState("");
	const [answer, setAnswer] = useState(0);

	// function to handle button clicks
	const handleClick = (e) => {
		console.log("handleSubmit called");
		const operation = e.target.value;
		switch (operation) {
			case "=":
				if (!userNums) {
					setAnswer(0);
				} else {
					try {
						setAnswer(eval(userNums));
					} catch {
						setAnswer("Error occured");
					}
				}
				break;
			case "Del":
				setUserNums(userNums.substr(0, userNums.length - 1));
				break;
			case "Clear":
				console.log("clear case called");
				setUserNums("");
				setAnswer(0);
				break;
			default:
				console.log("default case called");
				setUserNums(userNums + operation);
				break;
		}
	};

	return (
		<div className='mainCalc'>
			<Output userNums={userNums} answer={answer} />
			<div className='row'>
				<Button
					label={"Clear"}
					handleClick={handleClick}
					className='different-red'
				/>
				<Button label={"Del"} handleClick={handleClick} className='red-bg' />
				<Button label={"."} handleClick={handleClick} />
				<Button label={"/"} handleClick={handleClick} className='green-bg' />
			</div>
			<div className='row'>
				<Button label={"7"} handleClick={handleClick} />
				<Button label={"8"} handleClick={handleClick} />
				<Button label={"9"} handleClick={handleClick} />
				<Button label={"*"} handleClick={handleClick} className='green-bg' />
			</div>
			<div className='row'>
				<Button label={"4"} handleClick={handleClick} />
				<Button label={"5"} handleClick={handleClick} />
				<Button label={"6"} handleClick={handleClick} />
				<Button label={"-"} handleClick={handleClick} className='green-bg' />
			</div>
			<div className='row'>
				<Button label={"1"} handleClick={handleClick} />
				<Button label={"2"} handleClick={handleClick} />
				<Button label={"3"} handleClick={handleClick} />
				<Button label={"+"} handleClick={handleClick} className='green-bg' />
			</div>
			<div className='row'>
				<Button label={"0"} handleClick={handleClick} />
				<Button label={"="} handleClick={handleClick} />
			</div>
		</div>
	);
};

export default Calculator;

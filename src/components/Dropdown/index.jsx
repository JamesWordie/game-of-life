import React, { useState } from "react";

// Styles
// import { Wrapper, Select, StyledOption, Label } from "./Dropdown.styles";
import {
	Wrapper,
	Select,
	StyledOption,
	Header,
	DropdownList,
} from "./Dropdown.styles";

// export const Dropdown = (props) => {
// 	const { label, onChange, children } = props;
// 	return (
// 		<Wrapper onChange={onChange}>
// 			<Label htmlFor="dropdown">{label}</Label>
// 			<Select id="dropdown" name="dropdown">
// 				{children}
// 			</Select>
// 		</Wrapper>
// 	);
// };

// export const Option = ({ selected, value }) => {
// 	return <StyledOption selected={selected}>{value}</StyledOption>;
// };

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const options = ["20x10", "40x20", "50x25"];

	const handleClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		console.log(option);
	};

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Wrapper>
			<Header onClick={handleToggle}>{selectedOption || "Grid Size"}</Header>
			{isOpen && (
				<Select>
					<DropdownList>
						{options.map((option) => (
							<StyledOption
								onClick={() => handleClick(option)}
								key={Math.random()}
							>
								{option}
							</StyledOption>
						))}
					</DropdownList>
				</Select>
			)}
		</Wrapper>
	);
};

export default Dropdown;

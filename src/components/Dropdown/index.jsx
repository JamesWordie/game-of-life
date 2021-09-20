import React, { useState } from "react";

// Styles
import {
	Wrapper,
	Select,
	StyledOption,
	Header,
	DropdownList,
} from "./Dropdown.styles";

const Dropdown = ({ handleGrid }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const options = ["20x10", "30x15", "40x20"];

	const handleClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		handleGrid(option);
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

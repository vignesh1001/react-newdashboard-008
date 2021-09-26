/** @format */

import { useRef, useState } from "react";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";

import { Button, Menu, MenuItem } from "@material-ui/core";
import { useStore } from "../../custom-hooks/useStore";

function StoreDropDown({ options, selected, store_id, keyword }) {

	let stores = useStore();
	const actionRef1 = useRef(null);
	const [audience, setAudience] = useState(options[selected].text);
	const [openAudience, setOpenMenuAudience] = useState(false);

	const handleSelect = (value) => {
		stores.changeStoreOptions({ value, name: keyword, store_id });
	};

	return (
		<>
			<Button
				fullWidth={true}
				size="small"
				variant="outlined"
				ref={actionRef1}
				onClick={() => setOpenMenuAudience(true)}
				endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
			>
				{audience}
			</Button>
			<Menu
				anchorEl={actionRef1.current}
				onClose={() => setOpenMenuAudience(false)}
				open={openAudience}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				{options.map((_audience) => (
					<MenuItem
						key={_audience.value}
						onClick={() => {
							setAudience(_audience.text);
							setOpenMenuAudience(false);
							handleSelect(_audience.value);
						}}
					>
						{_audience.text}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}

export default StoreDropDown;

/** @format */

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const  PageHeader = ({ title }) => {
	  return (
     <Grid container alignItems="center">
			<Grid item>
				<Typography variant="h4" component="h4" gutterBottom>
					{title}
				</Typography>
			</Grid>
		</Grid>
    );
}

export default PageHeader;

/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Switch,
  Typography,
} from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from '../../../cards/MainCard';
import Transitions from '../../../extended/Transitions';
import UpgradePlanCard from './UpgradePlanCard';

// assets
import { IconLogout, IconSearch, IconSettings } from '@tabler/icons';
import User1 from '../../../../assets/images/users/avatar-user-svgrepo-com.svg';
import { useNuke } from '../../../../custom-hooks/useNuke';

// style const
const useStyles = makeStyles((theme) => ({
  navContainer: {
    width: '100%',
    maxWidth: '350px',
    minWidth: '150px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },
  headerAvatar: {
    cursor: 'pointer',
    ...theme.typography.mediumAvatar,
    margin: '6px !important',
    height: '30px !important',
    width: '30px !important',
    backgroundColor: 'initial !important',
    filter: 'brightness(0) invert(1)',
  },
  profileChip: {
    height: '48px !important',
    alignItems: 'center',
    borderRadius: 0, //'27px !important',
    transition: 'all .2s ease-in-out',
    borderColor: '#006ab4 !important', //theme.palette.primary.light,
    //	backgroundColor: `${theme.palette.primary.light} !important`,
    backgroundColor: 'initial !important',
    '&[aria-controls="menu-list-grow"], &:hover': {
      borderColor: theme.palette.primary.main,
      background: `${theme.palette.primary.main}!important`,
      color: theme.palette.primary.light,
      '& svg': {
        stroke: theme.palette.primary.light,
      },
    },
  },
  profileLabel: {
    lineHeight: 0,
    padding: '12px !important',
    display: 'none',
  },
  listItem: {
    marginTop: '5px',
  },
  cardContent: {
    padding: '2px !important',
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: '16px',
    marginTop: '16px',
  },
  searchControl: {
    width: '100%',
    paddingRight: '8px',
    paddingLeft: '16px',
    marginBottom: '16px',
    marginTop: '16px',
  },
  startAdornment: {
    fontSize: '1rem',
    color: theme.palette.grey[500],
  },
  flex: {
    display: 'flex',
  },
  name: {
    marginLeft: '2px',
    fontWeight: 400,
  },
  ScrollHeight: {
    height: '100%',
    maxHeight: 'calc(100vh - 250px)',
    overflowX: 'hidden',
  },
  badgeWarning: {
    backgroundColor: theme.palette.warning.dark,
    color: '#fff',
  },
}));

// ===========================|| PROFILE MENU ||=========================== //

const ProfileSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const nuke = useNuke();
  const history = useHistory();

  const [sdm, setSdm] = React.useState(true);
  const [value, setValue] = React.useState('');
  const [notification, setNotification] = React.useState(false);
  const [selectedIndex] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleLogout = async () => {
    nuke.erase();
    history.push('/login');
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Chip
        classes={{ label: classes.profileLabel }}
        className={classes.profileChip}
        icon={
          <Avatar
            src={User1}
            className={classes.headerAvatar}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="#FFF"
          />
        }
        // label={
        // 	<IconSettings
        // 		stroke={1.5}
        // 		size="1.5rem"
        // 		color={theme.palette.primary.main}
        // 	/>
        // }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <CardContent className={classes.cardContent}>
                    {/* <Divider /> */}
                    <List component="nav" className={classes.navContainer}>
                      <ListItemButton
                        className={classes.listItem}
                        sx={{
                          borderRadius: `${customization.borderRadius}px`,
                        }}
                        selected={selectedIndex === 4}
                        onClick={handleLogout}
                      >
                        <ListItemIcon>
                          <IconLogout stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">Logout</Typography>
                          }
                        />
                      </ListItemButton>
                    </List>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;

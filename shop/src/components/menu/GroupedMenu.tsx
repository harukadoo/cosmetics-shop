import * as React from 'react';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import arrowDown from '../../images/chevron-down.svg';

const StyledListHeader = styled(ListSubheader)({
    backgroundImage: 'var(--Paper-overlay)',
});

export default function GroupedMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'grouped-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <button className="main__container__head__filter__btn">
                    filter

                    <img src={arrowDown} alt="arrow down" />
                </button>
            </Button>
            <Menu
                id="grouped-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                        sx: {
                            py: 0,
                        },
                    },
                }}
            >
                <StyledListHeader>Size</StyledListHeader>
                <MenuItem onClick={handleClose}>50 ml</MenuItem>
                <MenuItem onClick={handleClose}>100 ml</MenuItem>
                <StyledListHeader>Price</StyledListHeader>
                <MenuItem onClick={handleClose}>Under 100$</MenuItem>
                <MenuItem onClick={handleClose}>From 100$</MenuItem>
            </Menu>
        </div>
    );
}
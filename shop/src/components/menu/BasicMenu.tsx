import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import arrowDown from '../../images/chevron-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType, SortType } from '../../store/slices/productsSlice'; // Путь к твоему слайсу
import { RootState } from '../../store/store';

export default function BasicMenu() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSort = (type: SortType) => {
        dispatch(setSortType(type)); // Отправляем экшен в Redux
        handleClose(); // Закрываем меню
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ padding: 0, minWidth: 0, textTransform: 'none' }}
            >
                <div className="main__container__head__sort__btn">
                    sort
                    <img src={arrowDown} alt="arrow down" />
                </div>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                <MenuItem onClick={() => handleSort('price-asc')}>Price: Low to High</MenuItem>
                <MenuItem onClick={() => handleSort('price-desc')}>Price: High to Low</MenuItem>
                <MenuItem onClick={() => handleSort('default')}>Default</MenuItem>
            </Menu>
        </div>
    );
}
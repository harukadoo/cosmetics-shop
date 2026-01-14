import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import arrowDown from '../../images/chevron-down.svg';
import '../../styles/filters/priceFilter.scss';

interface PriceFilterProps {
    onPriceChange: (minPrice: number, maxPrice: number) => void;
    minPrice?: number;
    maxPrice?: number;
}

export default function PriceFilter({ onPriceChange, minPrice = 100, maxPrice = 400 }: PriceFilterProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [priceRange, setPriceRange] = React.useState<[number, number]>([minPrice, maxPrice]);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        const value = newValue as [number, number];
        setPriceRange(value);
        onPriceChange(value[0], value[1]);
    };

    const handlePreset = (min: number, max: number) => {
        setPriceRange([min, max]);
        onPriceChange(min, max);
    };

    return (
        <div>
            <Button
                id="price-filter-button"
                aria-controls={open ? 'price-filter-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <button className="main__container__head__filter__btn">
                    price filter

                    <img src={arrowDown} alt="arrow down" />
                </button>
            </Button>
            <Menu
                id="price-filter-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'price-filter-button',
                    },
                }}
                PaperProps={{
                    sx: {
                        minWidth: '300px',
                        p: 2,
                    },
                }}
            >
                <Box className="price-filter-container">
                    <div className="price-filter-header">
                        <span>Price Range</span>
                        <span className="price-range-display">
                            ${priceRange[0]} - ${priceRange[1]}
                        </span>
                    </div>

                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceRange}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={500}
                        marks={[
                            { value: 0, label: '$0' },
                            { value: 500, label: '$500' },
                        ]}
                        sx={{
                            mt: 2,
                            mb: 3,
                        }}
                    />

                    <div className="price-filter-presets">
                        <p style={{ margin: '10px 0', fontSize: '12px', fontWeight: 'bold' }}>Quick filters:</p>
                        <MenuItem
                            onClick={() => {
                                handlePreset(100, 150);
                                handleClose();
                            }}
                            sx={{ py: 0.5 }}
                        >
                            Budget ($100 - $150)
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handlePreset(150, 250);
                                handleClose();
                            }}
                            sx={{ py: 0.5 }}
                        >
                            Mid-range ($150 - $250)
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handlePreset(250, 400);
                                handleClose();
                            }}
                            sx={{ py: 0.5 }}
                        >
                            Premium ($250 - $400)
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handlePreset(0, 500);
                                handleClose();
                            }}
                            sx={{ py: 0.5 }}
                        >
                            All Prices
                        </MenuItem>
                    </div>
                </Box>
            </Menu>
        </div>
    );
}

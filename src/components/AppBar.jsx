import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from '@mui/material/Button';
import { removeFromCart } from '../redux/cartSlice';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const subcategories = [
    { label: 'Dodaj produkt', link: "/add-product" },
    { label: 'Produkty', link: '/products' },
    { label: 'Logowanie', link: '/login' },

];

const SearchAppBar = () => {

    const [show, setShow] = useState(false);
    const cartItems = useSelector((state) => state.products.cartItems);
    const totalPrice = Object.values(cartItems).reduce((total, product) => total + product.price * product.quantity, 0);

    const dispatch = useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setIsMenuOpen(true);
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
        setMenuAnchorEl(null);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <Box position="static" sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'green' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        color="white"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            Mbiotica
                        </Link>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Szukaj produktów…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <IconButton aria-label="cart">
                        <StyledBadge onClick={handleShow} badgeContent={Object.keys(cartItems).length} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Twoje zamówienie</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {Object.keys(cartItems).map((productId) => {
                                const product = cartItems[productId];
                                return (
                                    <div key={productId}>
                                        <img src={product.image} alt="" style={{ width: "160px", height: "160px" }} />
                                        <p>Nazwa produktu: {product.name}</p>
                                        <p>Cena: {product.price} zł</p>
                                        <p>Ilość: {product.quantity}</p>
                                        <Button onClick={() => handleRemoveFromCart(productId)}>Usuń z koszyka</Button>
                                    </div>
                                );
                            })}
                            <p>Suma całego koszyka: {totalPrice} zł</p>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={menuAnchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                {subcategories.map((subcategory) => (
                    <MenuItem
                        key={subcategory.label}
                        component={Link}
                        to={subcategory.link}
                        onClick={handleMenuClose}
                    >
                        {subcategory.label}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default SearchAppBar;

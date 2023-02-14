import * as React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LiveSearch from "../LiveSearch/LiveSearch";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import "./Navbar.css";
import { useCart } from "../../contexts/CartContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useFav } from "../../contexts/FavContextProvider";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { currentUser, logOutUser } = useAuth();
  const { getCartLength, cartLength } = useCart();
  const { getFavLength, favLength } = useFav();

  React.useEffect(() => {
    getFavLength();
  }, []);

  React.useEffect(() => {
    getCartLength();
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser?.isLogged && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          Log Out
        </MenuItem>
      )}

      {currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>{currentUser?.user}</MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="mobile-link" to="/register">
            Register
          </NavLink>
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="mobile-link" to="/login">
            Login
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/*===> here is my items */}
      <MenuItem>
        <NavLink to="/about" className="mobile-link">
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <ImportContactsIcon />
          </IconButton>
          <p>About</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/products" className="mobile-link">
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <LocalOfferIcon />
          </IconButton>
          <p>Products</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/admin" className="mobile-link">
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            {currentUser?.isAdmin ? (
              <AdminPanelSettingsIcon />
            ) : currentUser?.isLogged ? (
              <PersonIcon />
            ) : (
              <AccountCircle />
            )}
          </IconButton>
          <p>Admin</p>
        </NavLink>
      </MenuItem>

      {/* end of my items */}

      {/* material */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          sx={{
            color: currentUser?.isLogged ? "green" : "black",
          }}
        >
          {currentUser?.isLogged ? <PersonIcon /> : <AccountCircle />}
        </IconButton>
        <p
          style={{
            color: currentUser?.isLogged ? "green" : "black",
          }}
        >
          Profile
        </p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: "sticky", top: 0, right: 0, left: 0, zIndex: "4" }}>
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/"
            >
              {/* <img
                width="5%"
                src="https://kstu.kg/fileadmin/user_upload/khpi_zel.jpeg"
                alt=""
              /> */}
              ХПИ
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/about"
            >
              История
            </Button>

            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/nayka"
            >
              Наука
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/abiturientam"
            >
              Абитуриентам
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/sotrudniki"
            >
              Сотрудники
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/news"
            >
              Новости
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/galery"
            >
              Фотогалерея
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/partners"
            >
              Партнеры
            </Button>

            {currentUser?.isAdmin && (
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                }}
                component={NavLink}
                to="/admin"
              >
                ADMIN
              </Button>
            )}
          </Box>

          {/* logo
          <Typography
            className="mui-link"
            variant="h6"
            noWrap
            to="/"
            component={RouterLink}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "flex",
                mx: "auto",
              },
              width: "100%",
              justifyContent: "center",

              fontSize: "2.5rem",
              fontWeight: "500",
              textTransform: "uppercase",
              fontFamily: "Sora, sans-serif",
              paddingLeft: "150px",
            }}
          >
            ХПИ
          </Typography> */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {/* Живой поиск */}
            <LiveSearch />
            {/* Живой поиск */}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{
                color: currentUser?.isLogged ? "lightgreen" : "white",
              }}
            >
              {currentUser?.isAdmin ? (
                <AdminPanelSettingsIcon />
              ) : currentUser?.isLogged ? (
                <PersonIcon />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

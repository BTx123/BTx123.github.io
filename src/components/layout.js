import React from "react";

import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

import {
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  Divider,
  Drawer,
  Hidden,
  ThemeProvider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PersonIcon from "@material-ui/icons/Person";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import CodeIcon from "@material-ui/icons/Code";
import MenuIcon from "@material-ui/icons/Menu";

import useCustomTheme from "../theme";
import useSiteMetadata from "./queries/siteMetadata";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";

import { InternalLink } from "../components/link";

const drawerWidth = 240;
// const logoSize = 30;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1, // show appbar on top of drawer when opened
    position: "fixed",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    [theme.breakpoints.up("sm")]: {
      margin: `0 ${theme.spacing(2)}px 0 0`,
    },
    margin: "auto",
  },
  siteTitle: {
    color: theme.palette.primary.contrastText,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
    width: "auto",
  },
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    marginTop: theme.spacing(3),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const theme = useCustomTheme();
  const { title } = useSiteMetadata();

  // State for mobile view
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // State for selected list item
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerToggle = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileOpen(open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const sections = ["about", "projects", "recipes", "resume", "contact"];

  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar} />
      <List onClick={handleDrawerToggle(false)}>
        {sections.map((text, index) => (
          <React.Fragment key={text}>
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              component={Link}
              to={`/${text}`}
            >
              <ListItemIcon>
                {(() => {
                  switch (index) {
                    case 0:
                      return <PersonIcon />;
                    case 1:
                      return <CodeIcon />;
                    case 2:
                      return <RestaurantIcon />;
                    case 3:
                      return <DescriptionIcon />;
                    case 4:
                      return <ContactMailIcon />;
                  }
                })()}
              </ListItemIcon>
              <ListItemText primary={text.toUpperCase()} />
            </ListItem>
            {index === 2 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle(!mobileOpen)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <InternalLink className={classes.logo} to="/">
              <Img fixed={logo.file.childImageSharp.fixed} alt="bt" />
            </InternalLink>
            <Hidden xsDown>
              <Typography variant="h6" noWrap>
                <InternalLink className={classes.siteTitle} to="/">
                  {title}
                </InternalLink>
              </Typography>
            </Hidden>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="top"
              open={mobileOpen}
              onClose={handleDrawerToggle(false)}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.main}>
          <div className={classes.toolbar} id="scroll-to-top-anchor" />
          {children}
          <div className={classes.footer}>
            <Footer />
          </div>
        </main>
      </div>
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default Layout;

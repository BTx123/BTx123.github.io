import React from "react";

import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PersonIcon from "@material-ui/icons/Person";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import CodeIcon from "@material-ui/icons/Code";
import { Link, ThemeProvider } from "@material-ui/core";
import useCustomTheme from "../theme";
import useSiteMetadata from "./queries/siteMetadata";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import FadeTransitionRouter from "../components/fadeTransitionRouter";
import { Link as ReachLink } from "@reach/router";

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
    zIndex: theme.zIndex.drawer + 200, // show appbar on top of drawer when opened
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
              component={ReachLink}
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
            <Link className={classes.logo} component={ReachLink} to="/">
              <Img fixed={logo.file.childImageSharp.fixed} alt="bt" />
            </Link>
            <Hidden xsDown>
              <Typography variant="h6" noWrap>
                <Link className={classes.siteTitle} component={ReachLink} to="/">
                  {title}
                </Link>
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
        <main className={classes.content}>
          <div className={classes.toolbar} id="scroll-to-top-anchor" />
          {children}
          {/* {tempContent} */}
          <Footer />
        </main>
      </div>
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default Layout;

const tempContent = (
  <React.Fragment>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
      non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
      imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      Convallis convallis tellus id interdum velit laoreet id donec ultrices.
      Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
      adipiscing bibendum est ultricies integer quis. Cursus euismod quis
      viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
      tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
      varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
      Lorem donec massa sapien faucibus et molestie ac.
    </Typography>
    <Typography paragraph>
      Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
      ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
      integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
      lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
      Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
      vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
      accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
      Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
      senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
      aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
      accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
      sagittis orci a.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
      non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
      imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      Convallis convallis tellus id interdum velit laoreet id donec ultrices.
      Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
      adipiscing bibendum est ultricies integer quis. Cursus euismod quis
      viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
      tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
      varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
      Lorem donec massa sapien faucibus et molestie ac.
    </Typography>
    <Typography paragraph>
      Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
      ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
      integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
      lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
      Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
      vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
      accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
      Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
      senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
      aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
      accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
      sagittis orci a.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
      non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
      imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      Convallis convallis tellus id interdum velit laoreet id donec ultrices.
      Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
      adipiscing bibendum est ultricies integer quis. Cursus euismod quis
      viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
      tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
      varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
      Lorem donec massa sapien faucibus et molestie ac.
    </Typography>
    <Typography paragraph>
      Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
      ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
      integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
      lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
      Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
      vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
      accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
      Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
      senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
      aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
      accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
      sagittis orci a.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
      non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
      imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
      Convallis convallis tellus id interdum velit laoreet id donec ultrices.
      Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
      adipiscing bibendum est ultricies integer quis. Cursus euismod quis
      viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
      tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
      varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
      Lorem donec massa sapien faucibus et molestie ac.
    </Typography>
    <Typography paragraph>
      Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
      ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
      integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
      lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
      Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
      vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
      accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
      Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
      senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
      aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
      accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
      sagittis orci a.
    </Typography>
  </React.Fragment>
);

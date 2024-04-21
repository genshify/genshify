import { Link, useMatch } from "react-router-dom";
import logo from "../../assets/images/logo/Genshify_logo_for_Light.png";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Skeleton,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Suspense, useState } from "react";
import { SnowToggle } from "../Effects/PrimoToggle";
import TuneIcon from "@mui/icons-material/Tune";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink } from "@mui/material/colors";
import { useThemeContext } from "../../contexts/ThemeContext";
import {
  cryoTheme,
  dendroTheme,
  hydroTheme,
  pyroTheme,
  electroTheme,
  geoTheme,
  anemoTheme,
  darkTheme
} from "genshin-optimizer/ui";
type ITab = {
  to: string;
  value: string;
  name: string;
};

const home: ITab = {
  to: "/",
  value: "home",
  name: "Home",
};

const about: ITab = {
  to: "/about",
  value: "about",
  name: "About",
};
const banner: ITab = {
  to: "/banner",
  value: "banner",
  name: "Banner",
};
const events: ITab = {
  to: "/events",
  value: "events",
  name: "Events",
};
const tips: ITab = {
  to: "/tips",
  value: "tips",
  name: "Tips",
};
const showcase: ITab = {
  to: "/showcase",
  value: "showcase",
  name: "Showcase",
};

const content = [home, about, banner, events, tips, showcase] as const;
export default function Header({ anchor }: { anchor: string }) {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" height={56} />}>
      <HeaderContent anchor={anchor} />
      {/* <SnowToggle /> */}
    </Suspense>
  );
}

function HeaderContent({ anchor }: { anchor: string }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const {
    params: { currentTab },
  } = useMatch({ path: "/:currentTab", end: false }) ?? {
    params: { currentTab: "home" },
  };

  //? Drawer for settings
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [value, setValue] = useState("dendro");
  const { changeTheme } = useThemeContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value;
    setValue(newValue);
    switch (newValue) {
      case "dendro":
        changeTheme(dendroTheme);
        break;
      case "hydro":
        changeTheme(hydroTheme)
        break;
      case "pyro":
        changeTheme(pyroTheme)
        break;
      case "cryo":
        changeTheme(cryoTheme)
        break;
      case "electro":
        changeTheme(electroTheme)
        break;
      case "anemo":
        changeTheme(anemoTheme)
        break;
      case "geo":
        changeTheme(geoTheme)
        break;
      case "dark":
        changeTheme(darkTheme)
        break;
      default:
        changeTheme(dendroTheme)
        break;
    }
  };

  if (isMobile)
    return <MobileHeader anchor={anchor} currentTab={currentTab ?? "home"} />;
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ bgcolor: "primary.light" }}
        elevation={4}
        id={anchor}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "60px",
          }}
        >
          <Box display="flex" alignItems="center">
            <Link to={"/"}>
              <img
                src={logo}
                style={{
                  width: "80px",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
                alt=""
              />
            </Link>
          </Box>
          <Tabs
            centered
            value={currentTab === "characters" ? "showcase" : currentTab}
            sx={{
              "& .MuiTab-root": {
                p: 1,
                minWidth: "auto",
                minHeight: "auto",
                color: "var(--darkGreen)",
                textTransform: "none",
                fontFamily: "var(--font)",
                fontSize: "1rem",
                borderRadius: "5px",
              },
              "& .MuiTab-root:hover": {
                transition: "background-color 0.5s ease",
                bgcolor: "var(--mediumGreen)",
              },
              ".MuiTabs-indicator": {
                bgcolor: "var(--mediumGreen)",
              },
            }}
          >
            {content.map(({ to, value, name }) => {
              if (value === "character") return null;

              return (
                <Tab
                  key={value}
                  value={value}
                  component={Link}
                  to={to}
                  iconPosition="start"
                  label={
                    <Box display="flex" gap={1} alignItems="center">
                      <p>{name}</p>
                    </Box>
                  }
                  sx={{
                    ml: value === "setting" ? "auto" : undefined,
                  }}
                />
              );
            })}
          </Tabs>
          <Box
            onClick={toggleDrawer(true)}
            sx={{
              display: "flex",
              p: 1,
              cursor: "pointer",
              minWidth: "auto",
              minHeight: "auto",
              color: "var(--darkGreen)",
              textTransform: "none",
              fontFamily: "var(--font)",
              fontSize: "1rem",
              borderRadius: "5px",
              marginRight: "10px",
              ":hover": {
                transition: "background-color 0.5s ease",
                bgcolor: "var(--mediumGreen)",
              },
            }}
          >
            <TuneIcon
              sx={{
                color: "var(--darkGreen)",
              }}
            />
          </Box>
        </div>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <FormControl
          sx={{
            padding: "10px",
          }}
        >
          <FormLabel id="demo-radio-buttons-group-label">Theme</FormLabel>
          <RadioGroup
            aria-labelledby="Select theme"
            defaultValue="dendro"
            name="theme"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="dendro"
              control={<Radio />}
              label="Dendro Theme"
            />
            <FormControlLabel
              value="hydro"
              control={<Radio />}
              label="Hydro Theme"
            />
            <FormControlLabel
              value="pyro"
              control={<Radio />}
              label="Pyro Theme"
            />
            <FormControlLabel
              value="electro"
              control={
                <Radio
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
              label="Electro Theme"
            />
            <FormControlLabel
              value="anemo"
              control={<Radio />}
              label="Anemo Theme"
            />
            <FormControlLabel
              value="cryo"
              control={<Radio />}
              label="Cryo Theme"
            />
            <FormControlLabel
              value="geo"
              control={<Radio />}
              label="geo Theme"
            />
            <FormControlLabel
              value="dark"
              control={<Radio />}
              label="Dark Theme"
            />
          </RadioGroup>
        </FormControl>

        <Divider />
        <br />
        <SnowToggle />
        <br />
        <Divider />
      </Drawer>
    </Box>
  );
}

// for mobile devices

function MobileHeader({
  anchor,
  currentTab,
}: {
  anchor: string;
  currentTab: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
        sx={{ bgcolor: "#edfdf1" }}
        elevation={0}
      >
        <Box display="flex" alignItems="center">
          <Link to={"/"}>
            <img
              src={logo}
              style={{
                width: "80px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
              alt=""
            />
          </Link>
        </Box>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <List>
            {content.map(({ to, value, name }) => {
              return (
                <ListItemButton
                  key={value}
                  to={to}
                  component={Link}
                  onClick={handleDrawerToggle}
                  selected={currentTab === value}
                  className="nav__item"
                >
                  {name}
                </ListItemButton>
              );
            })}
          </List>
        </Drawer>
        <Toolbar>
          <Box flexGrow={1} />
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* add a blank toolbar to keep space and provide a scroll anchor */}
      <Toolbar id={anchor} />
    </>
  );
}

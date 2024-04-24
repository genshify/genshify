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
import { useThemeContext } from "../../contexts/ThemeContext";
import {
  cryoTheme,
  dendroTheme,
  hydroTheme,
  pyroTheme,
  electroTheme,
  geoTheme,
  anemoTheme,
  darkTheme,
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

function Settings() {
  
  const { changeTheme,swiperIndex } = useThemeContext();
  const themes = {
    dendro: { theme: dendroTheme, index: 0 },
    electro: { theme: electroTheme, index: 1 },
    anemo: { theme: anemoTheme, index: 2 },
    pyro: { theme: pyroTheme, index: 3 },
    hydro: { theme: hydroTheme, index: 4 },
    cryo: { theme: cryoTheme, index: 5 },
    geo: { theme: geoTheme, index: 6 },
    dark: { theme: darkTheme, index: 7 },
  };
  const themeOptions = {
    dendro: {
      value: "dendro",
      label: "Dendro Theme",
    },
    electro: {
      value: "electro",
      label: "Electro Theme",
    },
    anemo: {
      value: "anemo",
      label: "Anemo Theme",
    },
    pyro: {
      value: "pyro",
      label: "Pyro Theme",
    },
    hydro: {
      value: "hydro",
      label: "Hydro Theme",
    },
    cryo: {
      value: "cryo",
      label: "Cryo Theme",
    },
    geo: {
      value: "geo",
      label: "Geo Theme",
    },
    dark: {
      value: "dark",
      label: "Dark Theme",
    },
  };
  const [value, setValue] = useState(themeOptions[Object.keys(themeOptions)[swiperIndex]].value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value;
    const selectedTheme =
      themes[newValue as keyof typeof themes] || themes.dendro;
    setValue(newValue);
    changeTheme(selectedTheme.theme, selectedTheme.index);
  };
  return (
    <div>
      <FormControl
        sx={{
          padding: "10px",
        }}
      >
        <FormLabel id="demo-radio-buttons-group-label">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="Select theme"
          defaultValue="geo"
          name="theme"
          value={value}
          onChange={handleChange}
        >
          {Object.values(themeOptions).map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              sx={{
                color: `${option.value}.main`,
              }}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Divider />
      <br />
      <SnowToggle />
      <br />
      <Divider />
    </div>
  );
}

function HeaderContent({ anchor }: { anchor: string }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Settings />
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
        sx={{ bgcolor: "primary.light" }}
        elevation={1}
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
          <Settings />
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

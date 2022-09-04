import type { Theme } from "@mui/system";

export const navStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

export const appBarStyles = {
  zIndex: (theme: Theme) => theme.palette.zIndex.drawer + 1,
};

export const outletBoxStyles = {
  display: "flex",
  pt: 8,
};

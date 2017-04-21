import React from "react";
import { ListItem as MUIListItem } from "material-ui/List";

const style = {
  listItem: {
    clear: "both",
    padding: "16px"
  }
};

const ListItem = ({ children }) => (
  <MUIListItem disabled={true} style={style.listItem}>
    {children}
  </MUIListItem>
);

export default ListItem;

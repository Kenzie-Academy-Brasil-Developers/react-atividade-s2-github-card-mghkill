import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { UlCard } from "./styles";

const Card = ({ renderCard }) => {
  return (
    <UlCard>
      {renderCard.map((cards, index) => (
        <li key={index}>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              m: "0",
              background: "#f7f7f7",
              mt: 1,
              p: 1,
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    mr: "1rem",
                  }}
                  alt="Remy Sharp"
                  src={cards.owner.avatar_url}
                />
              </ListItemAvatar>
              <ListItemText
                primary={cards.full_name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "block" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {cards.description}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </li>
      ))}
    </UlCard>
  );
};

export default Card;

import React from "react";
import FavoritesList from "./FavoritesList";

// British spelling wrapper — forwards to the main FavoritesList implementation.
const FavouritesList = (props) => <FavoritesList {...props} />;

export default FavouritesList;

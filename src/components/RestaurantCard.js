import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data ?? {};

  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        alt={name ?? "Restaurant"}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <div className="rest-details">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>Rating: {avgRating}</p>
        <p>Cost: {"\u20B9"}{costForTwo / 100} for two</p>
        <p>{deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

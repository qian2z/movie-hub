import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useMovieQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "popularity.desc", label: "Popularity" },
    { value: "primary_release_date.desc", label: "Release Date" },
    { value: "vote_average.desc", label: "Average Rating" },
  ];

  const selectedSortOrder = useMovieQueryStore((m) => m.movieQuery.sortOrder);
  const setSelectedSortOrder = useMovieQueryStore((m) => m.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value == selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSelectedSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useMovieQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "popularity.desc", en_label: "Popularity", ch_label: "热度" },
    {
      value: "primary_release_date.desc",
      en_label: "Release Date",
      ch_label: "发行时间",
    },
    {
      value: "vote_average.desc",
      en_label: "Average Rating",
      ch_label: "评分",
    },
  ];

  const selectedLanguage = useMovieQueryStore((m) => m.movieQuery.language_iso);
  const selectedSortOrder = useMovieQueryStore((m) => m.movieQuery.sortOrder);
  const setSelectedSortOrder = useMovieQueryStore((m) => m.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value == selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedLanguage === "en"
          ? `Order By: ${currentSortOrder?.en_label || "Popularity"}`
          : `排序：${currentSortOrder?.ch_label || "热度"}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSelectedSortOrder(order.value)}
            key={order.value}
          >
            {selectedLanguage === "en" ? order.en_label : order.ch_label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

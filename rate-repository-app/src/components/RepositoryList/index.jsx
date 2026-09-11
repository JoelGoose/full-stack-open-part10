import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "../SingleRepository/RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import SortBy from "./SortBy";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  sort,
  setSort,
  search,
  setSearch,
}) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item: repository }) => (
        <Pressable onPress={() => navigate(`/${repository.id}`)}>
          <RepositoryItem repository={repository} />
        </Pressable>
      )}
      ListHeaderComponent={
        <SortBy
          sort={sort}
          setSort={setSort}
          search={search}
          setSearch={setSearch}
        />
      }
    />
  );
};

function sortByInput(sort, search) {
  switch (sort) {
    case "latest":
      return {
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
        searchKeyword: search,
      };
    case "highest":
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
        searchKeyword: search,
      };
    case "lowest":
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
        searchKeyword: search,
      };
  }
}

const RepositoryList = () => {
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 500);

  const { repositories } = useRepositories(sortByInput(sort, debounceSearch));
  return (
    <RepositoryListContainer
      repositories={repositories}
      sort={sort}
      setSort={setSort}
      search={search}
      setSearch={setSearch}
    />
  );
};

export default RepositoryList;

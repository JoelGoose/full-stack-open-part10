import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "../SingleRepository/RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import SortBy from "./SortBy";

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, sort, setSort }) => {
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
      ListHeaderComponent={<SortBy sort={sort} setSort={setSort} />}
    />
  );
};

function sortByInput(sort) {
  switch (sort) {
    case "latest":
      return { orderBy: "CREATED_AT", orderDirection: "DESC" };
    case "highest":
      return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
    case "lowest":
      return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
  }
}

const RepositoryList = () => {
  const [sort, setSort] = useState("latest");
  const { repositories } = useRepositories(sortByInput(sort));
  return (
    <RepositoryListContainer
      repositories={repositories}
      sort={sort}
      setSort={setSort}
    />
  );
};

export default RepositoryList;

import { useQuery } from "@apollo/react-hooks";
import { useState, useEffect } from "react";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const fetchRepositories = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const { loading, data, refetch } = fetchRepositories;

  useEffect(() => {
    if (!loading) {
      const repositories = data ? data.repositories : [];
      setRepositories(repositories);
    }
  }, [fetchRepositories]);

  return { repositories, loading, refetch };
};

export default useRepositories;
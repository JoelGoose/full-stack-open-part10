import { render, screen, within } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      render (<RepositoryListContainer repositories={repositories}/>)

      screen.debug()

      const repositoryItems = screen.getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      const { getByText } = within(firstRepositoryItem)

      expect(getByText('jaredpalmer/formik')).toBeDefined()
      expect(getByText('Build forms in React, without the tears')).toBeDefined()
      expect(getByText('TypeScript')).toBeDefined()
      expect(getByText('1.6k')).toBeDefined()
      expect(getByText('21.9k')).toBeDefined()
      expect(getByText('88')).toBeDefined()
      expect(getByText('3')).toBeDefined()

      const { getByText: getByText2 } = within(secondRepositoryItem)

      expect(getByText2('async-library/react-async')).toBeDefined()
      expect(getByText2('Flexible promise-based React data loader')).toBeDefined()
      expect(getByText2('JavaScript')).toBeDefined()
      expect(getByText2('69')).toBeDefined()
      expect(getByText2('1.8k')).toBeDefined()
      expect(getByText2('72')).toBeDefined()
      expect(getByText2('3')).toBeDefined()    
    });
  });
});
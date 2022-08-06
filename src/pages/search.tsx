import type {
  GetServerSidePropsContext,
  NextPage,
  GetServerSideProps,
} from "next";
import Head from "next/head";
import { querySchema, Query } from "../interface/search/request/query";
import { Sort, sortOption } from "../model/search/sort";
import { ValidationError } from "../app/error/validation-error";

const validateQuery = (query: GetServerSidePropsContext["query"]): Query => {
  try {
    return querySchema.parse(query);
  } catch (e) {
    throw new ValidationError("Validation Error");
  }
};

interface SearchPageProps {
  searchQuery: string;
  page: number;
  sort: Sort;
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
  context
) => {
  try {
    const { q: searchQuery, page, sort } = validateQuery(context.query);

    return {
      props: { searchQuery, page, sort },
    };
  } catch (err) {
    if (err instanceof ValidationError) {
      return { redirect: { destination: "/", permanent: false } };
    }
    throw err;
  }
};

const SearchPage: NextPage<SearchPageProps> = (props) => {
  const title = `${props.searchQuery}の${
    sortOption[props.sort].name
  }順の検索結果（${props.page}ページ目）`;
  const heading = `${props.searchQuery}の${
    sortOption[props.sort].name
  }順の検索結果（${props.page}ページ目）`;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>{heading}</h1>
      </main>
    </div>
  );
};

export default SearchPage;

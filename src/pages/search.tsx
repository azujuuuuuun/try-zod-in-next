import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { validateQuery } from "@/interface/search/request/validate-query";
import { Sort, sortOption } from "@/domain/model/search/sort";
import { ValidationError } from "@/application/error/validation-error";

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

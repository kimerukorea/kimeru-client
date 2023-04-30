import { ReactPage } from "@/apps/quiz/pages/ReactPage";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  let { data: quizList, error } = await supabase
    .from("quizList")
    .select("created_at");

  console.log(quizList, error);

  return {
    props: {},
  };
};

export default ReactPage;

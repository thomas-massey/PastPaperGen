import { supabaseServer } from "@/lib/supabaseServer";

export const revalidate = 60

const home = async () => {
  const totalUsers = (
    await supabaseServer
      .from("users")
      .select("*", { count: "exact", head: true })
  ).count;
  const totalQuestions = (
    await supabaseServer
      .from("question")
      .select("*", { count: "exact", head: true })
  ).count;
  const totalPapers = (
    await supabaseServer
      .from("paper")
      .select("*", { count: "exact", head: true })
  ).count;

  return (
    <div className="flex flex-col items-center justify-center py-2 space-y-4">
      <h1 className="text-4xl font-bold text-gray-800">Welcome!</h1>
      <h2 className="text-xl text-gray-600">
        This is PastPaperGen, a website that generates past papers for you.
      </h2>
      <h3 className="text-lg font-bold text-gray-700">
        Trusted by over {totalUsers} users with {totalQuestions} approved
        questions and {totalPapers} approved papers.
      </h3>
      <p className="text-xl text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        suscipit, magni vero, tempore molestias tenetur pariatur, veritatis id
        ullam magnam deserunt numquam modi libero. Adipisci odio voluptate ut
        nesciunt omnis.
      </p>
    </div>
  );
};

export default home;
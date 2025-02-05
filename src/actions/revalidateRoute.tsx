"use server";

import { revalidatePath } from "next/cache";

const revalidateRoute = ({ route }: { route: string }) => {
  revalidatePath(route);

  return <></>;
};

export default revalidateRoute;

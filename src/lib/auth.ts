// サーバー側でログイン情報の取得
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user || null;
};

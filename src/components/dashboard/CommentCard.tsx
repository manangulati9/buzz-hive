import { api } from "@/trpc/server";
import { RouterOutputs } from "@/trpc/shared";
import { LucideBadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

type Comment = RouterOutputs["comments"]["getPostComments"][0];

async function CommentCard({ comment }: { comment: Comment }) {
  noStore();
  const userData = comment.userId
    ? await api.users.userById.query({ userId: comment.userId })
    : null;

  return (
    <div className="mx-auto my-5  flex  h-fit w-[23rem] max-w-5xl  flex-col justify-between  gap-5 rounded-xl  bg-[#1F2937] bg-opacity-50  px-6 py-4 drop-shadow-[0_0_35px_rgba(1,1,1,1.25)] md:w-full md:backdrop-blur-3xl">
      <div className="flex flex-col space-y-2">
        <Link
          className="flex items-center justify-start space-x-2 text-center"
          href={`/profile?userId=${userData?.id}`}
        >
          <div className="relative h-12 w-12 shrink-0 rounded-full">
            <Image
              src={userData && userData.image ? userData.image : "/logo.svg"}
              alt={""}
              fill
            />
          </div>
          <div className="flex h-fit flex-col items-start -space-y-1">
            <div className="flex items-center space-x-1">
              <div className="text-sm font-bold md:text-lg ">
                {userData?.name}
              </div>
              <div className="scale-75 md:scale-100">
                {userData?.verified && <LucideBadgeCheck color="gold" />}
              </div>
            </div>
            <div className="text-center text-xs text-gray-400 md:text-sm">
              {`@${userData?.username}`}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex gap-2">
        <p className="text-primary">Commented:</p>
        <p>{comment.content}</p>
      </div>
    </div>
  );
}

export default CommentCard;

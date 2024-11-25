// "use server";

// import { prisma } from "@/lib/db";
// import { currentUser } from "@clerk/nextjs/server";

// export const onAuthenticatedUser = async () => {
//   try {
//     const clerk = await currentUser();
//     if (!clerk) return { status: 404 };

//     const user = await prisma.user.findUnique({
//       where: {
//         clerkId: clerk.id,
//       },
//       select: {
//         id: true,
//         name: true,
//         email: true,
//       },
//     });
//     if (user) {
//       return {
//         id: user.id,
//         status: 200,
//         image: clerk.imageUrl,
//         name: user.name,
//       };
//     }
//     return {
//       status: 404,
//     };
//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     status: 400,
//   };
// };

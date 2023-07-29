import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

// This Function to Get Current User
const getCurrentUser = async () => {
  try {
    const session = await getSession();
    console.log(session);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return console.log(error, "getCurrentUser");
  }
};

export default getCurrentUser;

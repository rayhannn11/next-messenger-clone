import type { Metadata } from "next";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export const metadata: Metadata = {
  title: "Messages List",
  description: "Messenges list",
};

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          title="Messages"
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const InboxMessageList = ({ messages, seenMessages, onFetchMessageContent, messageContent }) => {
  const isMessageSeen = (id) => seenMessages.includes(id);

  return (
    <Accordion type="single" collapsible>
      {messages.map((message) => (
        <AccordionItem value={message["@id"]} key={message["@id"]}>
          <AccordionTrigger
            onClick={() => onFetchMessageContent(message.id)}
            className={`text-start flex flex-wrap md:flex-nowrap justify-between w-full items-center p-2 px-4 my-1 gap-4 ${
              !isMessageSeen(message.id)
                ? "border-0 border-l-8 rounded rounded-r-none border-primary border-b-foreground/40 border-b"
                : ""
            }`}
          >
            <div className="w-full md:w-fit mb-2 md:mb-0">
              <div>
                {!isMessageSeen(message.id) && (
                  <Badge className="rounded-xl bg-primary text-[11px] px-2 leading-[0.55rem] h-min py-1">
                    New
                  </Badge>
                )}
              </div>
              <p className="font-light text-foreground/60 mt-1">{message.from.address}</p>
            </div>
            <div className="mx-auto">
              <span className="font-light">{message.subject}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <iframe
              srcDoc={messageContent?.html || ""}
              title={`Email from ${message.from.name}`}
              className="w-full h-96 border-0"
              style={{ background: "white" }}
              sandbox="allow-popups allow-popups-to-escape-sandbox"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default InboxMessageList;

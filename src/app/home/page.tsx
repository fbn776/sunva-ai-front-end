"use client";

import "./home.css"
import {
    Icons,
    KeyboardIcon,
    MicroPhoneIcon,
    SettingsIcon,
    StopIcon,
    TrashIcon,
    UpAndDownArrow
} from "@/app/components/Icons";
import {useState} from "react";
import MessagesList from "@/app/components/MessageList";
import {TMessage} from "@/app/lib/types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



export default function Home() {
    const [isRecording, setIsRecording] = useState(false);
    const [messages, setMessages] = useState<TMessage[]>([
        {
            name: "Person 1",
            message: "Hi Harshita, We are looking to redesign our mobile app. Can you help us with that?"
        }, {
            name: "Person 2",
            message: "Absolutely. I'd love to help. What specific changes are you looking to make?"
        }, {
            name: "Person 1",
            message: "They want to improve user flow and address navigation issues. They’re proposing a meeting this Friday at 10 AM.",
            summarized: "We want to improve the user flow and make the interface more intuitive. Users have been complaining about navigation issues. Can we have a meeting  this Friday at 10 AM?"
        }, {
            name: "Person 2",
            message: "I’m available at that time. Let’s meet then."
        }
    ]);


    return <main className="flex justify-between flex-col w-full h-full px-4 pt-3 pb-4">
        <div className="w-full h-[40px] flex items-center">
            <button className="w-[24px]">
                <Icons/>
            </button>
            <div className="text-center w-[calc(100%-48px)]">English</div>
        </div>
        <MessagesList messages={messages}/>
        <div className="px-5 h-[75px] py-1 bg-white shadow flex rounded-3xl gap-7 justify-evenly items-center">
            <SettingsIcon/>
            <DeleteChat/>
            <button
                className={`h-[65%] aspect-square rounded-full flex items-center justify-center record-btn ${isRecording ? 'recording' : ''}`}
                onClick={() => {
                    setIsRecording(!isRecording);
                }}
            >
                {isRecording ? <StopIcon/> : <MicroPhoneIcon/>}
            </button>
            <KeyboardIcon/>
            <UpAndDownArrow/>
        </div>
    </main>
}

function DeleteChat() {
    return <AlertDialog>
        <AlertDialogTrigger><TrashIcon/></AlertDialogTrigger>

        <AlertDialogContent className="w-[80%] rounded-lg">
            <AlertDialogHeader>
                <AlertDialogTitle className="">Do you want to save this conversation?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex w-full flex-row items-center justify-end gap-4">
                <AlertDialogCancel className="bg-transparent w-fit h-fit">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-[#00956b] w-fit h-fit">Save</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>

}
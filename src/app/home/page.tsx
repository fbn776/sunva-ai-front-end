"use client";

import "./home.css"
import {
    KeyboardIcon,
    MicroPhoneIcon,
    NoteIcon,
    SettingsIcon,
    StopIcon,
    TrashIcon,
    UpAndDownArrow
} from "@/app/components/Icons";
import {useState} from "react";
import MessagesList from "@/app/components/MessageList";
import {Dialog} from "@/app/components/Alerts";
import Link from "next/link";
import {useSunvaAI} from "@/app/home/useSunvaAI";

const BACKEND = "localhost:8000";


export default function Home() {
    const [isRecording, setIsRecording] = useState(false);
    const [isDelOpen, setIsDelOpen] = useState(false);
    const [isSaveOpen, setIsSaveOpen] = useState(false);
    const [messages, handleRecord] = useSunvaAI();


    return <main className="accessibility flex justify-between flex-col w-full h-full px-4 pt-3 pb-4">
        <div className="w-full h-[40px] flex items-center">
            <Link href="/home/saved" className="w-[24px]">
                <NoteIcon/>
            </Link>
            <div className="text-center w-[calc(100%-48px)]">English</div>
        </div>
        <MessagesList messages={messages}/>
        <div className="px-5 h-[75px] py-1 bg-white shadow flex rounded-3xl gap-7 justify-evenly items-center">
            <SettingsIcon/>
            <button onClick={() => setIsDelOpen(true)}><TrashIcon/></button>
            <button
                className={`h-[65%] aspect-square rounded-full flex items-center justify-center record-btn ${isRecording ? 'recording' : ''}`}
                onClick={() => {
                    handleRecord(isRecording);
                    setIsRecording(!isRecording);
                }}
            >
                {isRecording ? <StopIcon/> : <MicroPhoneIcon/>}
            </button>
            <KeyboardIcon/>
            <UpAndDownArrow/>
        </div>

        <Dialog
            title="Do you want to save this conversation?"
            acceptText="Save"
            rejectText="Cancel"
            open={isDelOpen}
            setOpen={setIsDelOpen}
            onAccept={() => {
                setIsDelOpen(false);
                setIsSaveOpen(true);
            }}
        >
            <br/>
        </Dialog>

        <Dialog
            title="Save As"
            acceptText="Save"
            rejectText="Cancel"
            open={isSaveOpen}
            setOpen={setIsSaveOpen}
        >
            <input type="text" className="my-5 w-full px-2 py-2 rounded-xl border-2 border-brand-secondary"
                   placeholder="Enter here"/>
        </Dialog>
    </main>
}
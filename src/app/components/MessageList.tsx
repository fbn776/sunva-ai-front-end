import {TMessage} from "@/lib/types";
import {memo, useEffect, useState} from "react";

function Message({item} : {item: TMessage}) {
    const [showOriginal, setShowOriginal] = useState(true);
    let msgStyle = item.name === "Person 1" ? "message-1" : "message-2";

    useEffect(() => {
        if(item.summarized)
            setShowOriginal(false);
    }, [item.summarized]);

    return <>
        <div
            className={`${msgStyle} ${showOriginal ? '' : 'summarize'} message-box`}
        >
            <label className={`font-bold block`}>{item.name}</label>
            <p className="h-auto">
                {showOriginal ? item.message : item.summarized || item.message}
            </p>
        </div>
        {item.summarized &&
            <div className="relative w-full text-right h-3">
                <button className="view-og-btn absolute right-0 top-[-10px]" onClick={() => {
                    setShowOriginal(!showOriginal);
                }}>
                    {showOriginal ? "Summarized" : "Original"}
                </button>
            </div>
        }
    </>
}

function MessagesList({messages}: { messages: TMessage[] }) {
    return <section className="w-full flex-1 rounded-lg pt-2 gap-2 overflow-y-scroll hide-scrollbar space-y-4 pb-5">
        {
            messages.map((item, i) => <Message item={item} key={i}/>)
        }
    </section>;
}

export default memo(MessagesList);
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export default function SelectLanguage() {
    return <section className="page flex items-center justify-between flex-col">
        <div className="flex items-center flex-1 flex-col justify-center">
            <h1 className="text-1xl font-bold">
                Select your language
            </h1>
            <label>
                Language
            </label>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

        </div>
        <button className="btn-primary w-full">
            Continue
        </button>
    </section>
}
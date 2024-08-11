import Login from "@/app/components/home/login/Login";
import SelectLanguage from "@/app/components/home/SelectLanguage";


export default function Home() {
    return (
        <main className="w-full h-full">
            <Login/>
            <SelectLanguage/>
        </main>
  );
}

import Logo from "./Logo";
import Settings from "./Settings";
import Tabs from "./Tabs";

export default function NavBar(){
    return (<header className="flex justify-between px-7 py-3 items-center">
        <section className="w-[25px] hover:blur-[0.2px] hover:rotate-[-8deg]">
            <Logo />
        </section>
        <Tabs />
        <Settings />
    </header>);
}
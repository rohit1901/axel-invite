import Avatar from "./assets/avatar.jpeg"
export const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">AXEL MÜLLER</a>
            </div>
            <div className="flex-none gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={Avatar}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
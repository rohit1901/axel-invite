import Avatar from "./assets/avatar.jpeg"
import MapIcon from "./assets/map.svg"
import {useEffect, useState} from "react";
import {Modal} from "./Modal.tsx";
import ConfettiExplosion from "react-confetti-explosion";
type ConfettiEffectProps = {
    explode: boolean;
    setExplode: (explode: boolean) => void;
};
export const ConfettiEffect = ({explode, setExplode}: ConfettiEffectProps) => {
    useEffect(() => {
        if (explode) setTimeout(() => setExplode(false), 3000);
    }, [explode, setExplode]);
    if (explode) return <ConfettiExplosion {...{
        force: 0.8,
        duration: 3000,
        particleCount: 250,
        width: 1600,
    }} />;
    return null;
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [explode, setExplode] = useState(false);
    const header = "Die Party findet am 12.07.2024 um 14 Uhr statt.";
    return (
        <div className="navbar bg-base-100">
            <ConfettiEffect explode={explode} setExplode={setExplode}/>
            <div className="flex-1">
                <button className="btn btn-accent text-xl" onClick={() => setExplode(!explode)}>AXEL MÜLLER 🎉 </button>
            </div>
            <div className="flex-none gap-2">
                <div className="btn btn-ghost" role="button" onClick={() => setIsOpen(!isOpen)}>
                    <img alt="Map Icon" src={MapIcon} className="w-6 h-6"/>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={Avatar}/>
                        </div>
                    </div>
                    <ul
                        tabIndex={1}
                        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
                        <li>
                            <a className="justify-between" onClick={() => setIsOpen(true)}>
                                Der Weg
                            </a>
                        </li>
                        <li><a href="mailto:aml1746@googlemail.com">Kontaktiere mich</a></li>
                    </ul>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} header={header}>
                <p>Die Party findet in Wiedemar bei Thomas statt. Die genaue Adresse lautet:
                    <b> Thomas Ludwig Gaststätte - Radefelder Landstraße 1, 04509 Wiedemar, Germany</b>
                </p>
                <div className="mapouter">
                    <div className="gmap_canvas p-5">
                        <iframe
                            title="Google Maps"
                            width="100%"
                            height="300"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Thomas Ludwig gaststatte&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
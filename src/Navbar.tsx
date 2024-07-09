import Avatar from "./assets/avatar.jpeg"
import MapIcon from "./assets/map.svg"
import {useState} from "react";
import {Modal} from "./Modal.tsx";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const header = "Die Party findet am 12.07.2024 um 14 Uhr statt.";
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">AXEL MÜLLER</a>
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
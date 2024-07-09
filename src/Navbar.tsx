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
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={Avatar}/>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} header={header}>
                <p>Die Party findet in Radebeul bei Thomas statt. Die genaue Adresse lautet: Hauptstraße 1, 12345 Musterstadt.</p>
                <div className="mapouter">
                    <div className="gmap_canvas p-5">
                        <iframe
                            title="Google Maps"
                            width="100%"
                            height="300"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Hauptstra%C3%9Fe%201%2C%2012345%20Musterstadt&t=&z=13&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
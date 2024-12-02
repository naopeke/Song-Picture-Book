import { NavLink } from 'react-router-dom';

function Menu(){

    return(
        <>
            <div>Menu</div>
            <NavLink to="/about" className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                ¿Quieres saber sobre mi?
            </NavLink>
            <NavLink to="/songs" className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                ¿Quieres escuchar la canción?
            </NavLink>
            <NavLink to="/songs" className="[&.active]:text-cyan-950 [&.active]:font-bold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mx-6">
                Contacto
            </NavLink>
        </>
    )
}

export default Menu;
import {Field} from './field.tsx';
import SideMenu from './sideMenu.tsx';

function gameController() {
    return(
        <div className = "gameController">
            <SideMenu />
            <Field/>
        </div>
    )
}

export default gameController;
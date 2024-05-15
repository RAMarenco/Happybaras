import { useRole, useAvatar } from '../../hooks/useUserInfo';
import { Roles } from '../../utils/RolesEnum';
import { useState } from 'react';
import NoActionsHeader from './NoActionsHeader/NoActionsHeader';
import WithActionsHeader from './WithActionsHeader/WithActionsHeader';

const Header = () => {
    const role = useRole();
    const imgSource = useAvatar();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        isClicked ? setIsClicked(false) : setIsClicked(true);
    }

    const renderHeader = () => {
        if(role === Roles.ADMIN || role === Roles.MAINRESIDENT || role === Roles.NORMALRESIDENT) {
            return (
                <WithActionsHeader role={role} imgSource={imgSource}/>
            );
        } 
        else if(role === Roles.VISITOR || role === Roles.GUARD) {
            return (
                <NoActionsHeader role={role} imgSource={imgSource} handleClick={handleClick}/>
            );
        }
        else {
            return (
                <h1>Ocurrió un error</h1>
            )
        }
    }

    if(role != "")
        return (
            <>
                {
                    renderHeader()
                }
            </>
        )
}

export default Header;
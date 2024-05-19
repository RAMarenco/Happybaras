import { useAvatar } from "../../hooks/useUserInfo";
import { ROLES } from "../../consts/consts";
import { useState } from "react";
import NoActionsHeader from "./noActionsHeader/noActionsHeader";
import WithActionsHeader from "./withActionsHeader/withActionsHeader";
import { useAuth } from "../../hooks/auth/useAuth";

const Header = () => {
    const { getRole, verifyRole } = useAuth();
    const imgSource = useAvatar();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        isClicked ? setIsClicked(false) : setIsClicked(true);
    };

    const renderHeader = () => {
        if (
            verifyRole(ROLES.ADMIN) ||
            verifyRole(ROLES.MAINRESIDENT) ||
            verifyRole(ROLES.NORMALRESIDENT)
        ) {
            return (
                <WithActionsHeader
                    role={getRole()}
                    imgSource={imgSource}
                    isClicked={isClicked}
                    handleClick={handleClick}
                />
            );
        } else if (verifyRole(ROLES.VISITOR) || verifyRole(ROLES.GUARD)) {
            return (
                <NoActionsHeader
                    role={getRole()}
                    imgSource={imgSource}
                    handleClick={handleClick}
                />
            );
        } else {
            return <h1>Ocurrió un error</h1>;
        }
    };

    return <>{renderHeader()}</>;
};

export default Header;

import HeaderLayout from  "../../layouts/HeaderLayout/HeaderLayout"

const Header = ({userType}) => {
    return(
        <>
            {
                userType === "Visitor" ?
                    <HeaderLayout type={userType}>
                        <h1>Hola</h1>
                    </HeaderLayout>
                : 
                userType === "MainResident" || "NormalResident" ?
                    <HeaderLayout type={userType}>
                        <h1>Hola</h1>
                    </HeaderLayout>
                :
                userType === "Admin" ? 
                    <HeaderLayout type={userType}>
                        <h1>Hola</h1>
                    </HeaderLayout>
                :
                userType === "Guard" ? 
                    <HeaderLayout type={userType}>
                        <h1>Hola</h1>
                    </HeaderLayout>
                :
                <></>
            }
        </>
    )
}

export default Header;
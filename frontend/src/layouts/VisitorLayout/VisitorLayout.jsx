import Header from '../../components/Header/Header'
import classes from './VisitorLayout.module.scss'

export const VisitorLayout = ({children}) => {
    return(
        <>
            <Header userType={"Visitor"}/>
            {children}
        </>
        
    )
}
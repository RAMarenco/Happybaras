import Header from '../../components/header/header'
import classes from './visitorLayout.module.scss'

export const VisitorLayout = ({children}) => {
    return(
        <>
            <Header/>
            {children}
        </>
        
    )
}
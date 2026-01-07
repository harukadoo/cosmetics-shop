import { Footer } from "../footer";
import { Header } from "../header";

interface IProps {
    children: any;
}

export const Overlay = (props: IProps) => {
    return (
         <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
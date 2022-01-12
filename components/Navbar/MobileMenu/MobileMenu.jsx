import Burger from "./Burger";
import Menu from "./Menu";
import { useState, useRef } from "react";
import useOnClickOutside from "../../../Hooks/useOnClickOutside";
import FocusLock from "react-focus-lock";
import styled from "styled-components";


const MobileMenu = () => {

    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "mobile-menu";

    useOnClickOutside(node, () => setOpen(false))

    return (
        <StyledWrapper>
            <div ref={node}>
                <FocusLock disabled={!open}>
                    <Burger open={open} setOpen={setOpen} aria-controls={menuId}/>
                    <Menu open={open} setOpen={setOpen} id={menuId}/>
                </FocusLock>
            </div>
        </StyledWrapper>
    );
}
 
export default MobileMenu;

const StyledWrapper = styled.div`
    display: none;

    @media(max-width: 1199.99px){
        display: block;
    }
`
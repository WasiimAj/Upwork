import { HeaderDiv, LeftDiv, RightDiv, Logo, AccordianDiv, SearchDiv, SearchSVG, SearchInput, IconsDiv, SVG, UserImg} from "./style";
import Accordian from "../Accordion/index";
import {useNavigate} from 'react-router-dom';



const Header = () => {

    const navigate = useNavigate();
    const User = localStorage.getItem('session');

    const LogOut = () => {
        localStorage.setItem('session', false)
        navigate('/login')
    }

    return (
        <>
            <HeaderDiv>

                <LeftDiv>
                    <Logo 
                        src="https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png" 
                        alt="upwork-logo"
                        onClick={() => navigate('/')} 
                    />

                    <AccordianDiv>
                        <Accordian 
                            title = "Find Work" 
                            links = {["Saved Jops", "Proposals", "Profile", "My Stats", "My Project Dashbord"]}
                            withArrow = "true"
                        />
                        <Accordian 
                            title = "My Jops"
                            links = {["All Contracts", "Work Diary"]}
                            withArrow = "true"
                        />
                        <Accordian 
                            title = "Reports"
                            links = {["My Reports", "Billings & Earnings", "Connects History", "Transaction History", "Certificate of Earnings"]}
                            withArrow = "true"
                        />
                        <Accordian 
                            title = "Messages"
                            links = {[]}
                        />
                    </AccordianDiv>
                </LeftDiv>
                

                <RightDiv>
                    <SearchDiv>
                        <SearchSVG 
                            onClick={() => navigate('/search')}
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            aria-hidden="true" 
                            viewBox="0 0 24 24" 
                            role="img">
                                <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10.688 18.377a7.688 7.688 0 100-15.377 7.688 7.688 0 000 15.377zm5.428-2.261L21 21"></path></SearchSVG>
                        
                        <SearchInput 
                            type="text" 
                            placeholder="Search"
                        />

                        <Accordian 
                            title = "Jops"
                            links = {["Talent", "Projects"]}
                            withArrow = "true"
                        />
                    </SearchDiv>

                    <IconsDiv>
                        <SVG xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path fill="var(--icon-color, #001e00)" fill-rule="evenodd" d="M11.922 21c.545 0 1.013-.468 1.013-.935 0-.546-.468-.935-1.013-.935-.545 0-.935.467-.935.935-.078.467.39.935.935.935z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 8.688C6 5.571 8.805 3 12.234 3c3.273 0 6.078 2.182 5.61 4.987-.312 2.104-3.195 3.35-4.52 4.987-1.168 1.48-1.168 2.65-1.324 3.662"></path></SVG>
                        <SVG xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.34 15.999l4.26-2.364c.533-.272.533-1.181 0-1.454L3 3l2.13 17.271c.09.545.71.909 1.155.636l4.616-2.545"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10.9 18.362l2.753 2.09c.532.364 1.243.092 1.331-.636l.355-3.908L3 3l7.9 15.362z"></path></SVG>
                        <SVG xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.273 17.564l-1.359-2.209c-.08-.082-.08-.245-.08-.327v-4.99c0-2.946-2.397-5.4-5.274-5.4h-.72c-2.877 0-5.274 2.372-5.274 5.4v5.072c0 .163 0 .245-.08.327l-1.359 2.045c-.32.41 0 1.064.56 1.064h13.027c.559.082.879-.491.559-.982z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.16 4.636V3M9.842 18.628c0 1.308 1.04 2.372 2.318 2.372 1.279 0 2.318-1.064 2.318-2.372"></path></SVG>
                        
                        {User === 'true' ? 
                            <SVG
                                fill="rgb(233, 33, 22)"
                                onClick={() => LogOut()}
                                width="24" 
                                height="24" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill-rule="evenodd"
                                clip-rule="evenodd">
                                <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z"/>
                            </SVG>
                        : '' }
                        <UserImg 
                            alt="user-image" 
                            onClick={() => navigate('/profile')}
                        />
                    </IconsDiv>
                </RightDiv>

            </HeaderDiv>
        </>
    )
}

export default Header;
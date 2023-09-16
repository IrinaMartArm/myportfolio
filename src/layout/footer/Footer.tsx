import styled from "styled-components";
import { Title } from "../../components/title/Title";
import { Icon } from "../../components/icon/Icon";
import { Wrapper } from "../../components/wrapper/Wrapper";

export const Footer = () => {
    return (  
        <StyledFooter>
            <Wrapper  direction="column" align="center">
                <Title>Iryna</Title>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId="GitHub" width={"38px"} height={"38px"} viewBox={"0 0 38px 38px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                            <Icon iconId="in"width="38px" height="38px" viewBox="0 0 38px 38px"/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                <Copyright>©Irina Martoyan Web Developer</Copyright>
            </Wrapper>
        </StyledFooter>
    );
}
 
const StyledFooter = styled.footer`
    
`

const SocialList = styled.ul`
    display: flex;
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    
`
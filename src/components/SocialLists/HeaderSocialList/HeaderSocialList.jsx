import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { SocialItem, SocialLink, SocialList } from './HeaderSocialList.style';

export const HeaderSocialList = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink href={'https://www.instagram.com/'} target={'_blank'}>
          <FaInstagram size={18} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={'https://www.facebook.com'} target={'_blank'}>
          <FaFacebook size={18} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={'https://web.telegram.org'} target={'_blank'}>
          <FaTelegram size={18} />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
};

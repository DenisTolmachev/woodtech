import { SocialItem, SocialLink, SocialList } from './FooterSocialList.style';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

export const FooterSocialList = () => {
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
      <SocialItem>
        <SocialLink href={'https://twitter.com/'} target={'_blank'}>
          <FaTwitter size={18} />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
};

import typingDude from '@assets/illustrations/typingDude.json';
import { Button } from '@components/Button';
import { IconEnvelope, IconGithub, IconLinkedin } from '@assets/icons/socials';
import * as Styles from './styles';

export function Start() {
  return (
    <Styles.Wrapper>
      <Styles.LottieWrapper animationData={typingDude} />

      <Styles.Typewriter>Hi, welcome! :)</Styles.Typewriter>
      <Styles.FirstSection>
        <Styles.Description>I'm Lucas, a web developer from Brazil.</Styles.Description>
        <Styles.Description>Here are some cool links:</Styles.Description>
      </Styles.FirstSection>
      <Styles.SecondSection>
        <Button type="button" variant="secondary">
          <IconGithub size={6.4} />
        </Button>
        <Button type="button" variant="secondary">
          <IconLinkedin size={6.4} />
        </Button>
        <Button type="button" variant="secondary">
          <IconEnvelope size={6.4} />
        </Button>
      </Styles.SecondSection>
      <Styles.ThirdSection>
        <Styles.Description>
          Below you'll find more about me, my projects, trajectory and all that good stuff.
        </Styles.Description>
        <Styles.Description>Keep on scrolling!</Styles.Description>
      </Styles.ThirdSection>
    </Styles.Wrapper>
  );
}

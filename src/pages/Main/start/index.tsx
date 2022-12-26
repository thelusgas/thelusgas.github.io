import typingDude from '@assets/illustrations/typingDude.json';
import { Button } from '@components/Button';
import { IconEnvelope, IconGithub, IconLinkedin } from '@assets/icons/socials';
import * as Styles from './styles';
import { Divider } from './styles';

export function Start() {
  return (
    <Styles.Wrapper>
      <Styles.Typewriter>
        Hi, <span>welcome!</span> :)
      </Styles.Typewriter>
      <Styles.LottieWrapper animationData={typingDude} />

      <Styles.Bubble />
      <Styles.FirstSection>
        <Styles.Description>
          I'm <span>Lucas</span>, a web developer from Brazil.
        </Styles.Description>
        <Styles.Description>Here are some cool links:</Styles.Description>
      </Styles.FirstSection>
      <Styles.SecondSection>
        <Button
          id="link-github"
          aria-label="Link to my Github"
          href="https://github.com/thelusgas"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <IconGithub size={6.4} />
        </Button>
        <Button
          id="link-linkedin"
          aria-label="Link to my Linkedin"
          href="https://www.linkedin.com/in/lucascf08/"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <IconLinkedin size={6.4} />
        </Button>
        <Button
          id="link-email"
          aria-label="Link for sending me an email"
          href="mailto:thelusgas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <IconEnvelope size={6.4} />
        </Button>
      </Styles.SecondSection>
      <Styles.ThirdSection>
        <Styles.Description>
          Below you'll find more <span>about me</span>, <span>my projects</span>,
          <span> my trajectory</span> and all that good stuff.
        </Styles.Description>
        <Button type="button" variant="quarternary">
          Keep on scrolling!
        </Button>
      </Styles.ThirdSection>
      <Divider $type="shadow">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </Divider>
      <Divider $type="main">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </Divider>
    </Styles.Wrapper>
  );
}

// pages
import { AboutMe } from '@pages/Main/about-me';
import { MyProjects } from '@pages/Main/my-projects';
import { Trajectory } from '@pages/Main/trajectory';
import { Footer } from '@pages/Main/footer';
import { Nav } from '@components/Nav';
import { Start } from './start';

import * as Styles from './styles';

export function Main() {
  return (
    <>
      <Nav />
      <Styles.Wrapper>
        <Styles.Content>
          <Start />
          <AboutMe />
          <MyProjects />
          <Trajectory />
          <Footer />
        </Styles.Content>
      </Styles.Wrapper>
    </>
  );
}

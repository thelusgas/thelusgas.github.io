import { Button } from '@components/Button';
import cat from '@assets/illustrations/polar-maneki.svg';
import * as Styles from './styles';

export function Nav() {
  return (
    <Styles.Wrapper>
      <Styles.List>
        <li>
          <Button type="button" variant="primary">
            Start
          </Button>
        </li>
        <li>
          <Button type="button" variant="secondary">
            About me
          </Button>
        </li>
        <li>
          <Button type="button" variant="tertiary">
            My projects
          </Button>
        </li>
        <li>
          <Button type="button" variant="quarternary">
            Trajectory
          </Button>
        </li>
      </Styles.List>
      <Styles.Cat src={cat} alt="cat" />
    </Styles.Wrapper>
  );
}

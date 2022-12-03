import Container from '../UI/container/Container';
import Grid from '../UI/grid/Grid';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/section/sectionTitle/SectionTitle';
import css from './Cta.module.css';
import { sectionData as sectionTitle } from '../../assets/data.js';
import Button from '../UI/btn/Button';

function Cta(props) {
  return (
    <Section>
      <Container>
        <Grid cols='2' gap98>
          {/* LEFT SIDE */}
          <div>
            <img src='/img/Image Container.png' alt='about-img' />
          </div>
          {/* RIGHT SIDE */}
          <div>
            <SectionTitle
              mb0
              left
              pill={sectionTitle.sectionTitle.pill}
              subtitle={sectionTitle.sectionTitle.subtitle}
              title={sectionTitle.sectionTitle.title}
            />
            <Button>Get Started</Button>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
export default Cta;

import Container from '../UI/container/Container';
import Grid from '../UI/grid/Grid';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/section/sectionTitle/SectionTitle';
import SingleCard from '../UI/singleCard/SingleCard';

import { sectionData } from '../../assets/data.js';

function Features(props) {
  return (
    <div>
      <Section>
        <Container>
          <SectionTitle
            left
            pill={sectionData.sectionTitle.pill}
            subtitle={sectionData.sectionTitle.subtitle}
            title={sectionData.sectionTitle.title}
          />
          <Grid cols='2' gap98>
            {/* LEFT SIDE */}
            <div className='my-auto'>
              {sectionData.gainCards.map((cardObj) => (
                <SingleCard
                  key={cardObj.id}
                  icon={cardObj.icon}
                  title={cardObj.title}
                  text={cardObj.descr}
                />
              ))}
            </div>
            {/* RIGHT SIDE */}
            <div>
              <img src='/img/Image Container.png' alt='features-img' />
            </div>
          </Grid>
        </Container>
      </Section>
    </div>
  );
}
export default Features;

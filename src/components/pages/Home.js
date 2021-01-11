import ButtonPrimary from "../generic/buttons/ButtonPrimary";
import Container from "../generic/containers/Container";
import Section from "../generic/sections/Section";
import ButtonRow from "../generic/grids/ButtonRow";

const Home = () => {
    return (
        <Section>
            <Container>
                <ButtonRow
                    array={[
                        <ButtonPrimary>Create New Event</ButtonPrimary>,
                        <ButtonPrimary>Use Code To Find Event</ButtonPrimary>,
                    ]}
                />
            </Container>
        </Section>
    );
};

export default Home;

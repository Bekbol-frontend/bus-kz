import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { StepsTicket } from "@/shared/ui/StepsTicket";

function SearchPage() {
  return (
    <Section>
      <Container>
        <h1>Search</h1>

        <StepsTicket />
      </Container>
    </Section>
  );
}

export default SearchPage;

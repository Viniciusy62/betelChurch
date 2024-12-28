import { Container } from "./styles"


export function Button({title, loading=false, ...rest}: {title: string, loading?: boolean}) {
  
  return (
    <Container
      type="button"
      disabled={ loading }
      { ...rest }
      >
      { loading ? "Carregando..." : title }
    </Container>
  )
}
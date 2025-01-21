import { Container } from "./styles";
import { ReactNode } from "react";

export function Button({
  title, 
  loading=false, 
  ...rest}: {
    title: ReactNode, 
    loading?: boolean, 
    onClick?: () => void}) {
  
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
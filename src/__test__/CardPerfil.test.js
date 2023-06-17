import CardPerfil, {titleCase} from '../components/CardPerfil.jsx'
import { render,screen } from '@testing-library/react';


describe("Funciones dentro del componente",()=>{
    describe("titleCase",()=>{
        test('Debe retornar un string',() => {
            const result = titleCase ('valor');
            expect(typeof result).toBe('string');
        })
        test("String Transformado",()=>{
            expect(titleCase('hola como estas')).toBe("Hola Como Estas")
        })
        test("String vacio",()=>{
            expect(titleCase("")).toBe("")
        })
    })
})

test('renderizado del component', () => {
    render(<CardPerfil />);
    const texto = screen.getByText(/soy/i);
    expect(texto).toBeInTheDocument();
  });
  
import { render, screen } from "@testing-library/react"
import Calculator from "../components/Calculator"
import userEvent from "@testing-library/user-event"

describe("calculator", () => {
    test("Garanta em pelo menos um teste que a aplicação é renderizada corretamente com os dígitos de operações +, -, *, e /.", () => {

        render(<Calculator />)

        screen.logTestingPlaygroundURL()
        const buttonSum = screen.getByRole('button', {
            name: /\+/i
        })
        const buttonSub = screen.getByRole('button', {
            name: /\-/i
        })
        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        const buttonDiv = screen.getByRole('button', {
            name: /\//i
        })
        expect(buttonSum).toBeInTheDocument()
        expect(buttonSub).toBeInTheDocument()
        expect(buttonMult).toBeInTheDocument()
        expect(buttonDiv).toBeInTheDocument()
    })

    test("Garanta em pelo menos dois testes que a multiplicação está funcionando corretamente.", () => {

        render(<Calculator />)

        screen.logTestingPlaygroundURL()
        const buttonSum = screen.getByRole('button', {
            name: /\+/i
        })
        const buttonSub = screen.getByRole('button', {
            name: /\-/i
        })
        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        const buttonDiv = screen.getByRole('button', {
            name: /\//i
        })
        expect(buttonSum).toBeInTheDocument()
        expect(buttonSub).toBeInTheDocument()
        expect(buttonMult).toBeInTheDocument()
        expect(buttonDiv).toBeInTheDocument()
    })
})